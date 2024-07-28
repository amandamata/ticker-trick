import React from "react";
import { DataProvider } from "./DataContext";
import Search from "./components/Search";
import Page from "./components/Page";
import Container from "@mui/material/Container";
import theme from "./theme/theme";

const App = () => {
  return (
      <DataProvider>
        <Container
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: theme.palette.background.default
          }}
        >
          <Page />
          <Search />
        </Container>
      </DataProvider>
  );
};

export default App;
