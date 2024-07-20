import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { getStockData } from "./services/api";
import StockChart from "./components/StockChart";

function HomePage () {
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
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>{t('title')}</h1>
      <div>
        <input
          type="text"
          value={ticker}
          onChange={(e) => setTicker(e.target.value)}
          placeholder={t('input')}
          style={{
            padding: "10px",
            width: "calc(100% - 22px)",
            marginBottom: "10px",
          }}
        />
        <button
          onClick={handleFetchData}
          style={{ padding: "10px", width: "100%" }}
        >
          {t('fetchButton')}
        </button>
      </div>
      {loading && <p>{ t('loading')}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {data && (
        <div style={{ marginTop: "20px" }}>
          <StockChart data={data} />
        </div>
      )}
    </div>
  );
};

export default HomePage;
