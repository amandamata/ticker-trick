import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#b39ddb",
    },
    secondary: {
      main: "#80deea",
    },
    error: {
      main: "#ffccbc",
    },
    background: {
      default: "#f8bbd0",
      secondary: "#fafafa",
    },
    text: {
      primary: "#000000",
      secondary: "#757575",
    },
  },
});

export default theme;
