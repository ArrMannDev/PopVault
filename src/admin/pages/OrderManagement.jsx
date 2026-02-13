import {
  Box,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const orders = [
  {
    id: "#ORD-001",
    customer: "John Doe",
    date: "2026-02-13",
    product: "Mystery Box A",
    amount: "$49.99",
    status: "Completed",
  },
  {
    id: "#ORD-002",
    customer: "Jane Smith",
    date: "2026-02-13",
    product: "Rare Collection",
    amount: "$129.99",
    status: "Processing",
  },
  {
    id: "#ORD-003",
    customer: "Mike Johnson",
    date: "2026-02-12",
    product: "Limited Edition",
    amount: "$89.99",
    status: "Shipped",
  },
  {
    id: "#ORD-004",
    customer: "Sarah Williams",
    date: "2026-02-12",
    product: "Mystery Box B",
    amount: "$59.99",
    status: "Pending",
  },
  {
    id: "#ORD-005",
    customer: "Tom Brown",
    date: "2026-02-11",
    product: "Collector's Set",
    amount: "$199.99",
    status: "Completed",
  },
  {
    id: "#ORD-006",
    customer: "Emily Davis",
    date: "2026-02-11",
    product: "Starter Pack",
    amount: "$29.99",
    status: "Shipped",
  },
  {
    id: "#ORD-007",
    customer: "Chris Wilson",
    date: "2026-02-10",
    product: "Mystery Box A",
    amount: "$49.99",
    status: "Cancelled",
  },
];

export default function OrderManagement() {
  const [statusFilter, setStatusFilter] = useState("All");

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return { bg: "#4CAF5020", color: "#4CAF50" };
      case "Processing":
        return { bg: "#FF980020", color: "#FF9800" };
      case "Shipped":
        return { bg: "#2196F320", color: "#2196F3" };
      case "Pending":
        return { bg: "#9E9E9E20", color: "#9E9E9E" };
      case "Cancelled":
        return { bg: "#f4433620", color: "#f44336" };
      default:
        return { bg: "#9E9E9E20", color: "#9E9E9E" };
    }
  };

  const filteredOrders =
    statusFilter === "All"
      ? orders
      : orders.filter((order) => order.status === statusFilter);

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
        Order Management
      </Typography>

      <Paper
        sx={{ p: 3, borderRadius: 2, boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
      >
        {/* Filters */}
        <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
          <TextField
            placeholder="Search orders..."
            size="small"
            sx={{ flexGrow: 1 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <FormControl size="small" sx={{ minWidth: 150 }}>
            <InputLabel>Status</InputLabel>
            <Select
              value={statusFilter}
              label="Status"
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Pending">Pending</MenuItem>
              <MenuItem value="Processing">Processing</MenuItem>
              <MenuItem value="Shipped">Shipped</MenuItem>
              <MenuItem value="Completed">Completed</MenuItem>
              <MenuItem value="Cancelled">Cancelled</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Orders Table */}
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 600 }}>Order ID</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Customer</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Date</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Product</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Amount</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredOrders.map((order) => {
                const statusStyle = getStatusColor(order.status);
                return (
                  <TableRow key={order.id} hover sx={{ cursor: "pointer" }}>
                    <TableCell sx={{ fontWeight: 500 }}>{order.id}</TableCell>
                    <TableCell>{order.customer}</TableCell>
                    <TableCell>{order.date}</TableCell>
                    <TableCell>{order.product}</TableCell>
                    <TableCell sx={{ fontWeight: 500 }}>
                      {order.amount}
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={order.status}
                        size="small"
                        sx={{
                          backgroundColor: statusStyle.bg,
                          color: statusStyle.color,
                          fontWeight: 500,
                        }}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
