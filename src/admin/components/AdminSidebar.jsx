import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InventoryIcon from "@mui/icons-material/Inventory";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate, useLocation } from "react-router-dom";
import LogoTextComponent from "../../components/LogoTextComponent";

const drawerWidth = 260;

const menuItems = [
  { text: "Dashboard", icon: <DashboardIcon />, path: "/admin/dashboard" },
  { text: "Products", icon: <InventoryIcon />, path: "/admin/products" },
  { text: "Orders", icon: <ShoppingCartIcon />, path: "/admin/orders" },
  { text: "Users", icon: <PeopleIcon />, path: "/admin/users" },
  { text: "Settings", icon: <SettingsIcon />, path: "/admin/settings" },
];

export default function AdminSidebar({ mobileOpen, handleDrawerToggle }) {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const drawer = (
    <Box sx={{ height: "100%", backgroundColor: "#1C1C1E", color: "#fff" }}>
      {/* Logo */}
      <Box
        sx={{
          p: 3,
          borderBottom: "1px solid rgba(201, 162, 77, 0.25)",
        }}
      >
        <LogoTextComponent
          firstLetter="Pop"
          secondLetter="Vault"
          color="#C9A24D"
          headingSize="h5"
        />
      </Box>

      {/* Menu Items */}
      <List sx={{ px: 2, py: 2 }}>
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <ListItem key={item.text} disablePadding sx={{ mb: 1 }}>
              <ListItemButton
                onClick={() => {
                  navigate(item.path);
                  if (isMobile) handleDrawerToggle();
                }}
                sx={{
                  borderRadius: "8px",
                  backgroundColor: isActive
                    ? "rgba(201, 162, 77, 0.2)"
                    : "transparent",
                  color: isActive ? "#C9A24D" : "#fff",
                  "&:hover": {
                    backgroundColor: "rgba(201, 162, 77, 0.1)",
                  },
                }}
              >
                <ListItemIcon sx={{ color: "inherit", minWidth: 40 }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
    >
      {/* Mobile drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better mobile performance
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Desktop drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
