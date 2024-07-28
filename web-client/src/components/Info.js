import { DataContext } from "../DataContext";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import {
  Container,
  Box,
  Card,
  CardContent
} from "@mui/material";

const Info = () => {
  const { data } = useContext(DataContext);
  const { t: translation } = useTranslation();

  if (!data) {
    return <p></p>;
  }
  return (
    <Container
      style={{
        marginTop: "30px",
        marginBottom: "30px",
      }}
    >
      <Box>
        <Card style={{ width: "100%" }}>
          <CardContent>
            <div>
              <p>
                {translation("regularMarketPrice")}:{" "}
                {data.regularMarketPrice.toFixed(2)} {data.currency}
              </p>
              <p>
                {translation("priceEarnings")}: {data.priceEarnings.toFixed(2)}
              </p>
              <p>
                {translation("earningsPerShare")}:{" "}
                {data.earningsPerShare.toFixed(2)}
              </p>
              <p>
                {translation("regularMarketOpen")}: {data.regularMarketOpen}{" "}
                {data.currency}
              </p>
            </div>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default Info;
