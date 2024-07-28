import React from "react";
import { DataProvider } from "./DataContext";
import Search from "./components/Search";
import Page from "./components/Page";
import Info from "./components/Info";
import Container from "@mui/material/Container";
import theme from "./theme/theme";

const App = () => {
  return (
      <DataProvider>
        <Container 
          style={{
            marginTop: "30px",
            marginBottom: "30px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: theme.palette.background.default
        }}
        >
          <Page />
          <Info />
          <Search />
        </Container>
      </DataProvider>
  );
};

export default App;
