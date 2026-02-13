import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import LayOutPage from "./pages/LayoutPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ProductShowCase from "./pages/ProductPage/$itemType";
import ProductDetail from "./pages/ProductDetail";
import LoginPage from "./pages/LoginPage";

// Admin imports
import AdminLayout from "./admin/AdminLayout";
import AdminDashboard from "./admin/pages/AdminDashboard";
import ProductManagement from "./admin/pages/ProductManagement";
import OrderManagement from "./admin/pages/OrderManagement";
import UserManagement from "./admin/pages/UserManagement";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <ToastContainer position="top-right" autoClose={3000} theme="colored" />

      <Router>
        <Routes>
          <Route element={<LayOutPage />}>
            <Route index element={<HomePage />} />
          </Route>

          <Route path="/product" element={<ProductPage />}>
            <Route path=":itemType" element={<ProductShowCase />} />
          </Route>

          <Route path="/product/detail/:id" element={<ProductDetail />} />
          <Route path="/login" element={<LoginPage />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="products" element={<ProductManagement />} />
            <Route path="orders" element={<OrderManagement />} />
            <Route path="users" element={<UserManagement />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
