import { ThemeProvider } from "@emotion/react";
import BlindboxPackage from "./blindbox_package";
import CreateBlindBoxItemForm from "./item";
import theme from "./theme";
import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LayOutPage from "./pages/LayoutPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ProductShowCase from "./pages/ProductPage/$itemType";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <NavBarComponent /> */}
      <Router>
        <Routes>
          <Route element={<LayOutPage />}>
            <Route index element={<HomePage />} />
            {/* <Route index element={<BlindboxPackage />} /> */}
            {/* <Route index element={<CreateBlindBoxItemForm />} /> */}
          </Route>

          <Route path="/product" element={<ProductPage />}>
            <Route path=":itemType" element={<ProductShowCase />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
