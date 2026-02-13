import {
  Grid,
  Paper,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import InventoryIcon from "@mui/icons-material/Inventory";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";

const stats = [
  {
    title: "Total Products",
    value: "156",
    icon: <InventoryIcon />,
    color: "#C9A24D",
  },
  {
    title: "Total Orders",
    value: "342",
    icon: <ShoppingCartIcon />,
    color: "#4CAF50",
  },
  {
    title: "Total Users",
    value: "1,234",
    icon: <PeopleIcon />,
    color: "#2196F3",
  },
  {
    title: "Revenue",
    value: "$45,678",
    icon: <TrendingUpIcon />,
    color: "#FF9800",
  },
];

const recentOrders = [
  {
    id: "#ORD-001",
    customer: "John Doe",
    product: "Mystery Box A",
    amount: "$49.99",
    status: "Completed",
  },
  {
    id: "#ORD-002",
    customer: "Jane Smith",
    product: "Rare Collection",
    amount: "$129.99",
    status: "Processing",
  },
  {
    id: "#ORD-003",
    customer: "Mike Johnson",
    product: "Limited Edition",
    amount: "$89.99",
    status: "Shipped",
  },
  {
    id: "#ORD-004",
    customer: "Sarah Williams",
    product: "Mystery Box B",
    amount: "$59.99",
    status: "Pending",
  },
  {
    id: "#ORD-005",
    customer: "Tom Brown",
    product: "Collector's Set",
    amount: "$199.99",
    status: "Completed",
  },
];

export default function AdminDashboard() {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
        Dashboard Overview
      </Typography>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              sx={{
                p: 3,
                display: "flex",
                alignItems: "center",
                gap: 2,
                backgroundColor: "#fff",
                borderRadius: 2,
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  borderRadius: 2,
                  backgroundColor: `${stat.color}20`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: stat.color,
                }}
              >
                {stat.icon}
              </Box>
              <Box>
                <Typography variant="body2" color="text.secondary">
                  {stat.title}
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                  {stat.value}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Recent Orders Table */}
      <Paper
        sx={{ p: 3, borderRadius: 2, boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
      >
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
          Recent Orders
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 600 }}>Order ID</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Customer</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Product</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Amount</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {recentOrders.map((order) => (
                <TableRow key={order.id} hover>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{order.product}</TableCell>
                  <TableCell>{order.amount}</TableCell>
                  <TableCell>
                    <Box
                      component="span"
                      sx={{
                        px: 2,
                        py: 0.5,
                        borderRadius: 1,
                        fontSize: "0.875rem",
                        fontWeight: 500,
                        backgroundColor:
                          order.status === "Completed"
                            ? "#4CAF5020"
                            : order.status === "Processing"
                              ? "#FF980020"
                              : order.status === "Shipped"
                                ? "#2196F320"
                                : "#9E9E9E20",
                        color:
                          order.status === "Completed"
                            ? "#4CAF50"
                            : order.status === "Processing"
                              ? "#FF9800"
                              : order.status === "Shipped"
                                ? "#2196F3"
                                : "#9E9E9E",
                      }}
                    >
                      {order.status}
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
