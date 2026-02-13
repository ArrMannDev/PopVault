import {
  Box,
  AppBar,
  Toolbar,
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LogoTextComponent from "./LogoTextComponent";
import { Link } from "react-router";

export default function NavBarComponent() {
  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <LogoTextComponent
          firstLetter="Pop"
          secondLetter="Vault"
          color="#000000ff"
          headingSize="h4"
        />

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <TextField
            size="small"
            placeholder="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "#000" }} />
                </InputAdornment>
              ),
            }}
          />

          <Link to="/login">
            <Button
              sx={{
                color: "#000000ff",
                border: "1px solid #000000ff",
                borderRadius: "999px",
                px: 3,
                "&:hover": {
                  backgroundColor: "rgba(201, 162, 77, 0.1)",
                },
              }}
            >
              Login
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
