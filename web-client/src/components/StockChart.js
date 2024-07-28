import React from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
  const chartData = [
    {
      name: t('previousClose'),
      value: data.regularMarketPreviousClose,
    },
    {
      name: t('currentPrice'),
      value: data.regularMarketPrice,
    },
  ];
  return (
    <div>
      <h2>
        {data.longName} ({data.symbol})
      </h2>
      <img
        src={data.logourl}
        alt={`${data.shortName} logo`}
        style={{ height: "50px" }}
      />
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={chartData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={["dataMin - 1", "dataMax + 1"]} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            activeDot={{ r: 9 }}
          />
        </LineChart>
      </ResponsiveContainer>
      <div>
        <p>
          {t("priceEarnings")}: {data.priceEarnings.toFixed(2)}
        </p>
        <p>
          {t("earningsPerShare")}: {data.earningsPerShare.toFixed(2)}
        </p>
        <p>
          {t("regularMarketOpen")}: {data.regularMarketOpen} {data.currency}
        </p>
      </div>
    </div>
  );
};

export default StockChart;
