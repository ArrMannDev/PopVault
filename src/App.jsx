import { ThemeProvider } from "@emotion/react";
import BlindboxPackage from "./blindbox_package";
import CreateBlindBoxItemForm from "./item";
import theme from "./theme";
import { CssBaseline } from "@mui/material";
import NavBarComponent from "./componentens/NavBarComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LayOutPage from "./pages/LayoutPage";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <NavBarComponent /> */}
      <Router>
        <Routes>
          <Route element={<LayOutPage />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
