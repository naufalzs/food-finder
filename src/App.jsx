import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Home from "./pages/Home";

export default function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Raleway", "sans-serif"].join(","),
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Home />
      </CssBaseline>
    </ThemeProvider>
  );
}
