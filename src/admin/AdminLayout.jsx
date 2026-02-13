import { Box, Divider } from "@mui/material";
import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import AdminSidebar from "./components/AdminSidebar";
import AdminHeader from "./components/AdminHeader";
import { jwtDecode } from "jwt-decode";
import { Typography, Button } from "@mui/material";

export default function AdminLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const token = localStorage.getItem("token");

  let decodedToken;
  if (token) {
    decodedToken = jwtDecode(token);
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  if (!token) {
    return (
      <Box sx={{ mt: 10, textAlign: "center" }}>
        <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>
          Please login first
        </Typography>
        <Button
          component={Link}
          to="/login"
          variant="contained"
          color="primary"
        >
          Go to Login Page
        </Button>
      </Box>
    );
  }

  return (
    <Box
      sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#f5f5f5" }}
    >
      <AdminSidebar
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { md: `calc(100% - 260px)` },
        }}
      >
        <AdminHeader
          handleDrawerToggle={handleDrawerToggle}
          userName={decodedToken?.username}
        />
        <Divider sx={{ my: 5 }} />
        <Box sx={{ p: 3 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
