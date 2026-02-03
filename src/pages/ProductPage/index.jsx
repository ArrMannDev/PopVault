import { NavLink, Outlet } from "react-router";
import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";

const categories = [
  { label: "The Monster", path: "themonster" },
  { label: "Skull Panda", path: "skullpanda" },
  { label: "Baby Three", path: "babythree" },
  { label: "Other", path: "other" },
];

export default function ProductPage() {
  return (
    <Box sx={{ px: { xs: 2, md: 4 }, py: 3 }}>
      {/* Page title */}
      <Typography variant="h4" fontWeight={700} mb={3}>
        Products
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 4,
          alignItems: "flex-start",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {/* Sidebar */}
        <Box
          sx={{
            width: { xs: "100%", md: 280 },
            borderRadius: 3,
            border: "1px solid rgba(0,0,0,0.08)",
            backgroundColor: "#fff",
            position: { md: "sticky" },
            top: 80,
          }}
        >
          <Divider />

          <List disablePadding>
            {categories.map((item) => (
              <ListItemButton
                key={item.path}
                component={NavLink}
                to={item.path}
                sx={{
                  px: 2.5,
                  py: 1.5,
                  "&.active": {
                    backgroundColor: "rgba(0,0,0,0.06)",
                    fontWeight: 600,
                  },
                  "&:hover": {
                    backgroundColor: "rgba(0,0,0,0.04)",
                  },
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontSize: "0.95rem",
                  }}
                />
              </ListItemButton>
            ))}
          </List>
        </Box>

        {/* Product content */}
        <Box sx={{ flex: 1, minHeight: "60vh" }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
