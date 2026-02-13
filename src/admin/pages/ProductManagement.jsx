import {
  Box,
  Paper,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  TextField,
  InputAdornment,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";

const products = [
  {
    id: 1,
    name: "Mystery Box A",
    category: "Blind Box",
    price: "$49.99",
    stock: 45,
    status: "Active",
  },
  {
    id: 2,
    name: "Rare Collection",
    category: "Limited Edition",
    price: "$129.99",
    stock: 12,
    status: "Active",
  },
  {
    id: 3,
    name: "Limited Edition",
    category: "Blind Box",
    price: "$89.99",
    stock: 8,
    status: "Active",
  },
  {
    id: 4,
    name: "Mystery Box B",
    category: "Blind Box",
    price: "$59.99",
    stock: 32,
    status: "Active",
  },
  {
    id: 5,
    name: "Collector's Set",
    category: "Package",
    price: "$199.99",
    stock: 5,
    status: "Low Stock",
  },
  {
    id: 6,
    name: "Starter Pack",
    category: "Package",
    price: "$29.99",
    stock: 67,
    status: "Active",
  },
];

export default function ProductManagement() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 600 }}>
          Product Management
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            backgroundColor: "#C9A24D",
            "&:hover": {
              backgroundColor: "#B8934A",
            },
          }}
        >
          Add Product
        </Button>
      </Box>

      <Paper
        sx={{ p: 3, borderRadius: 2, boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
      >
        {/* Search Bar */}
        <Box sx={{ mb: 3 }}>
          <TextField
            fullWidth
            placeholder="Search products..."
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {/* Products Table */}
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 600 }}>ID</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Product Name</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Category</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Price</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Stock</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id} hover>
                  <TableCell>{product.id}</TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>{product.stock}</TableCell>
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
                          product.status === "Active"
                            ? "#4CAF5020"
                            : "#FF980020",
                        color:
                          product.status === "Active" ? "#4CAF50" : "#FF9800",
                      }}
                    >
                      {product.status}
                    </Box>
                  </TableCell>
                  <TableCell>
                    <IconButton size="small" sx={{ color: "#2196F3", mr: 1 }}>
                      <EditIcon fontSize="small" />
                    </IconButton>
                    <IconButton size="small" sx={{ color: "#f44336" }}>
                      <DeleteIcon fontSize="small" />
                    </IconButton>
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
