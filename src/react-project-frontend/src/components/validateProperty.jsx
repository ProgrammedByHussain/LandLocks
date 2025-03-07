// import { createContext, useContext, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Button,
} from "@mui/material";
import PDFUploader from "./PDFUploader";
import NFTDashboard from "./NFTDashboard";
import { RefreshProvider } from "../providers/refresh";
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    background: {
      default: "#f5f5f5",
    },
  },
});

function ValidateProperty() {
  return (
    <ThemeProvider theme={theme}>
      <RefreshProvider>
        <CssBaseline />
        <Box sx={{ flexGrow: 1, minHeight: "100vh" }}>
          {/* <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              NFT Land Registry
            </Typography>
            <Button color="inherit" onClick={() => navigate("/transfers")}>
              Transfer NFTs
            </Button>
            <Button color="inherit" variant="outlined" sx={{ ml: 2 }}>
              Connect Wallet
            </Button>
          </Toolbar>
        </AppBar> */}

          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Box sx={{ mb: 4 }}>
              <PDFUploader />
            </Box>
          </Container>
        </Box>
      </RefreshProvider>
    </ThemeProvider>
  );
}

export default ValidateProperty;
