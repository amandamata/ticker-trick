import { DataContext } from "../DataContext";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";

const Info = () => {
    const { t: translation } = useTranslation();
    const { data } = useContext(DataContext);

  return (
    <div>
      <p>
        {translation("regularMarketPrice")}: {data.regularMarketPrice.toFixed(2)} {data.currency}
      </p>
      <p>
        {translation("priceEarnings")}: {data.priceEarnings.toFixed(2)}
      </p>
      <p>
        {translation("earningsPerShare")}: {data.earningsPerShare.toFixed(2)}
      </p>
      <p>
        {translation("regularMarketOpen")}: {data.regularMarketOpen} {data.currency}
      </p>
    </div>
  );
};

export default Info;
