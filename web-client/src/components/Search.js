import React, { useState, useContext } from "react";
import { DataContext } from "../DataContext";
import { getStockData } from "../services/api";
import { useTranslation } from "react-i18next";
import {
  TextField,
  Card,
  CardContent,
  Box,
  Container,
  Button,
  CircularProgress,
  Typography,
} from "@mui/material";

const Search = () => {
    const { t: translation } = useTranslation();
    const { setData } = useContext(DataContext);
    const [ticker, setTicker] = useState("");
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
        alignItems="right"
        justifyContent="right"
        minHeight="100vh"
      >
        <Card style={{ marginTop: "350px", width: "70%" }}>
          <CardContent>
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
              {loading ? (<CircularProgress size={24} />) : (translation("fetchButton"))}
            </Button>
            {error && <Typography color="error">{error}</Typography>}
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default Search;
