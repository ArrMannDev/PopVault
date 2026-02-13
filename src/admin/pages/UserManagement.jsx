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
  Avatar,
  Chip,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import BlockIcon from "@mui/icons-material/Block";

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Customer",
    joined: "2026-01-15",
    orders: 12,
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "Customer",
    joined: "2026-01-20",
    orders: 8,
    status: "Active",
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike.j@example.com",
    role: "Customer",
    joined: "2026-02-01",
    orders: 5,
    status: "Active",
  },
  {
    id: 4,
    name: "Sarah Williams",
    email: "sarah.w@example.com",
    role: "Admin",
    joined: "2025-12-10",
    orders: 0,
    status: "Active",
  },
  {
    id: 5,
    name: "Tom Brown",
    email: "tom.brown@example.com",
    role: "Customer",
    joined: "2026-02-05",
    orders: 15,
    status: "Active",
  },
  {
    id: 6,
    name: "Emily Davis",
    email: "emily.d@example.com",
    role: "Customer",
    joined: "2026-01-28",
    orders: 3,
    status: "Inactive",
  },
];

export default function UserManagement() {
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
        User Management
      </Typography>

      <Paper
        sx={{ p: 3, borderRadius: 2, boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
      >
        {/* Search Bar */}
        <Box sx={{ mb: 3 }}>
          <TextField
            fullWidth
            placeholder="Search users by name or email..."
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

        {/* Users Table */}
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 600 }}>User</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Email</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Role</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Joined</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Orders</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id} hover>
                  <TableCell>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Avatar sx={{ bgcolor: "#C9A24D" }}>
                        {getInitials(user.name)}
                      </Avatar>
                      <Typography>{user.name}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Chip
                      label={user.role}
                      size="small"
                      sx={{
                        backgroundColor:
                          user.role === "Admin" ? "#C9A24D20" : "#2196F320",
                        color: user.role === "Admin" ? "#C9A24D" : "#2196F3",
                        fontWeight: 500,
                      }}
                    />
                  </TableCell>
                  <TableCell>{user.joined}</TableCell>
                  <TableCell>{user.orders}</TableCell>
                  <TableCell>
                    <Chip
                      label={user.status}
                      size="small"
                      sx={{
                        backgroundColor:
                          user.status === "Active" ? "#4CAF5020" : "#9E9E9E20",
                        color: user.status === "Active" ? "#4CAF50" : "#9E9E9E",
                        fontWeight: 500,
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <IconButton size="small" sx={{ color: "#2196F3", mr: 1 }}>
                      <EditIcon fontSize="small" />
                    </IconButton>
                    <IconButton size="small" sx={{ color: "#f44336" }}>
                      <BlockIcon fontSize="small" />
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
