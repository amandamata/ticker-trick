import React from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const StockChart = ({ data }) => {
  const { t: translation } = useTranslation();
  const chartData = [
    {
      name: translation("regularMarketOpen"),
      value: data.regularMarketOpen,
    },
    {
      name: translation("regularMarketPrice"),
      value: data.regularMarketPrice,
    },
  ];
  return (
    <div>
      <ResponsiveContainer width={400} height={250}>
        <LineChart
          data={chartData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={["dataMin - 1", "dataMax + 1"]} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            activeDot={{ r: 9 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

StockChart.propTypes = {
  data: PropTypes.shape({
    regularMarketOpen: PropTypes.number.isRequired,
    regularMarketPrice: PropTypes.number.isRequired,
  }).isRequired,
};
export default StockChart;
