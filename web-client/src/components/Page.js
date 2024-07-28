import React, { useContext } from "react";
import { DataContext } from "../DataContext";
import theme from "../theme/theme";

import {
  Typography,
  Container,
  Box,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

import { useTranslation } from "react-i18next";
import StockChart from "./StockChart";
import Info from "./Info";

const Page = () => {
  const { data } = useContext(DataContext);
  const { t: translation } = useTranslation();
    
  return (
      <Container maxWidth="sm">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          minHeight="100vh"
        >
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            style={{
              color: theme.palette.primary.main,
            }}
          >
            {translation("title")}
          </Typography>
          {data && (
            <Card style={{ marginTop: "20px", width: "100%" }}>
              <CardContent>
                <Box display="flex" alignItems="center" marginBottom="20px">
                  <CardMedia
                    component="img"
                    alt={data.shortName}
                    style={{
                      height: "50px",
                      width: "50px",
                      marginRight: "10px",
                    }}
                    image={data.logourl}
                  />
                  <Typography variant="h6" component="div">
                    {data.longName.toUpperCase()} ({data.symbol})
                  </Typography>
                </Box>

                <StockChart data={data} />

                <Info />
              </CardContent>
            </Card>
          )}
        </Box>
      </Container>
  );
  };

export default Page;
