import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material"

const theme = createTheme({
  palette: {
    primary: { main: "#6a0d25" },
    secondary: { main: "#b53363" },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
