import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1C1C1E",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(141, 141, 143, 0.6)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          boxShadow: "none",
          borderBottom: "1px solid rgba(201, 162, 77, 0.25)",
        },
      },
    },
  },
});

export default theme;
