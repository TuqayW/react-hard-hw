import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material";

import "./global.css";

const muiTheme = createTheme({
  palette: {
    primary: {
      main: "rgba(67,24,255,1)",
      light: "rgba(67,24,255,1)",
      dark: "rgba(67,24,255,1)",
    },
    secondary: {
      main: "rgba(163,174,208,1)",
      light: "rgba(163,174,208,1)",
      dark: "rgba(163,174,208,1)",
      contrastText: "rgba(163,174,208,1)",
    },
  },
});

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </BrowserRouter>
);