import React, { useState } from "react";
import { getStockData } from "./services/api";
import StockChart from "./components/StockChart";

const HomePage = () => {
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
      setError("Error fetching stock data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Stock Data Fetcher</h1>
      <div>
        <input
          type="text"
          value={ticker}
          onChange={(e) => setTicker(e.target.value)}
          placeholder="Enter stock ticker"
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
          Fetch Data
        </button>
      </div>
      {loading && <p>Loading...</p>}
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
