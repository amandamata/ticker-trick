import React, { useState } from "react";
import { getStockData } from "./services/api";
import {
  TextField,
  Button,
  CircularProgress,
  Typography,
  Container,
  Box,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import StockChart from "./components/StockChart";

const HomePage = () => {
  const { t: translation } = useTranslation();
  const [ticker, setTicker] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await getStockData(ticker);
      setData(response.results[0]);
    } catch (error) {
      setError(translation("error"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
      >
        <Typography variant="h4" component="h1" gutterBottom>
          {translation("title")}
        </Typography>
        <TextField
          fullWidth
          label={translation("input")}
          variant="outlined"
          value={ticker}
          onChange={(e) => setTicker(e.target.value)}
          style={{ marginBottom: "10px" }}
        />
        <Button
          onClick={handleFetchData}
          variant="contained"
          color="primary"
          fullWidth
          disabled={loading}
        >
          {loading ? (
            <CircularProgress size={24} />
          ) : (
            translation("fetchButton")
          )}
        </Button>
        {error && <Typography color="error">{error}</Typography>}
        {data && (
          <Card style={{ marginTop: "20px", width: "100%" }}>
            <CardContent>
              <Box display="flex" alignItems="center" marginBottom="20px">
                <CardMedia
                  component="img"
                  alt={data.shortName}
                  style={{ height: "50px", width: "50px", marginRight: "10px" }}
                  image={data.logourl}
                />
                <Typography variant="h6" component="div">
                  {data.longName.toUpperCase()} ({data.symbol})
                </Typography>
              </Box>
              <StockChart data={data} />
            </CardContent>
          </Card>
        )}
      </Box>
    </Container>
  );
};

export default HomePage;
