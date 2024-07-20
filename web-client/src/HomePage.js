import React, { useState } from "react";
import { getStockData } from "./services/api";
import { TextField, Button, CircularProgress, Typography, Container, Box } from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import StockChart from "./components/StockChart";

const HomePage = () => {

  const { t } = useTranslation();
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
      setError(t('error'));
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
          {t("title")}
        </Typography>
        <TextField
          fullWidth
          label={t("input")}
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
          style={{ marginBottom: "20px" }}
        >
          {t("fetchButton")}
        </Button>
        {loading && <CircularProgress />}
        {error && <Typography color="error">{error}</Typography>}
        {data && (
          <Box marginTop={4} width="100%">
            <StockChart data={data} />
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default HomePage;
