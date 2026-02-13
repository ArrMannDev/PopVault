import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminHeader({
  handleDrawerToggle,
  title = "Dashboard",
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { md: `calc(100% - 260px)` },
        ml: { md: `260px` },
        backgroundColor: "rgba(141, 141, 143, 0.6)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        boxShadow: "none",
        borderBottom: "1px solid rgba(201, 162, 77, 0.25)",
      }}
    >
      <Toolbar>
        {/* Mobile menu button */}
        <IconButton
          color="inherit"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { md: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        {/* Page Title */}
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, color: "#000" }}
        >
          {title}
        </Typography>

        {/* Notifications */}
        <IconButton color="inherit" sx={{ mr: 1 }}>
          <NotificationsIcon sx={{ color: "#000" }} />
        </IconButton>

        {/* User Menu */}
        <IconButton onClick={handleMenu} sx={{ p: 0 }}>
          <Avatar sx={{ bgcolor: "#C9A24D" }}>A</Avatar>
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
