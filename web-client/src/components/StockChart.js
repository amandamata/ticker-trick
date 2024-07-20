import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const StockChart = ({ data }) => {
  const chartData = [
    {
      name: "Previous Close",
      value: data.regularMarketPreviousClose,
    },
    {
      name: "Current Price",
      value: data.regularMarketPrice,
    },
  ];

  return (
    <div>
      <h2>
        {data.shortName} ({data.symbol})
      </h2>
      <img
        src={data.logourl}
        alt={`${data.shortName} logo`}
        style={{ height: "50px" }}
      />
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
      <div>
        <p>Price Earnings: {data.priceEarnings}</p>
        <p>Earnings Per Share: {data.earningsPerShare}</p>
        <p>Regular Market Open: {data.regularMarketOpen}</p>
      </div>
    </div>
  );
};

export default StockChart;
