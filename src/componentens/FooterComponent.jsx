import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Link,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LogoTextComponent from "./LogoTextComponent";
import { Link as RouterLink } from "react-router-dom";

export default function FooterComponent() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "rgba(28, 28, 30, 0.95)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderTop: "1px solid rgba(201, 162, 77, 0.25)",
        color: "#fff",
        py: 6,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Brand Section */}
          <Grid item xs={12} md={4}>
            <LogoTextComponent
              firstLetter="Pop"
              secondLetter="Vault"
              color="#C9A24D"
              headingSize="h5"
            />
            <Typography
              variant="body2"
              sx={{
                mt: 2,
                opacity: 0.8,
                maxWidth: "300px",
              }}
            >
              Where Every Box Holds Value. Unlock rare collectibles and
              limited-edition blind boxes.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                mb: 2,
                color: "#C9A24D",
              }}
            >
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link
                component={RouterLink}
                to="/"
                sx={{
                  color: "#fff",
                  textDecoration: "none",
                  opacity: 0.8,
                  "&:hover": {
                    opacity: 1,
                    color: "#C9A24D",
                  },
                }}
              >
                Home
              </Link>
              <Link
                component={RouterLink}
                to="/product"
                sx={{
                  color: "#fff",
                  textDecoration: "none",
                  opacity: 0.8,
                  "&:hover": {
                    opacity: 1,
                    color: "#C9A24D",
                  },
                }}
              >
                Products
              </Link>
              <Link
                href="#"
                sx={{
                  color: "#fff",
                  textDecoration: "none",
                  opacity: 0.8,
                  "&:hover": {
                    opacity: 1,
                    color: "#C9A24D",
                  },
                }}
              >
                About Us
              </Link>
              <Link
                href="#"
                sx={{
                  color: "#fff",
                  textDecoration: "none",
                  opacity: 0.8,
                  "&:hover": {
                    opacity: 1,
                    color: "#C9A24D",
                  },
                }}
              >
                Contact
              </Link>
            </Box>
          </Grid>

          {/* Support */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                mb: 2,
                color: "#C9A24D",
              }}
            >
              Support
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link
                href="#"
                sx={{
                  color: "#fff",
                  textDecoration: "none",
                  opacity: 0.8,
                  "&:hover": {
                    opacity: 1,
                    color: "#C9A24D",
                  },
                }}
              >
                FAQ
              </Link>
              <Link
                href="#"
                sx={{
                  color: "#fff",
                  textDecoration: "none",
                  opacity: 0.8,
                  "&:hover": {
                    opacity: 1,
                    color: "#C9A24D",
                  },
                }}
              >
                Shipping Info
              </Link>
              <Link
                href="#"
                sx={{
                  color: "#fff",
                  textDecoration: "none",
                  opacity: 0.8,
                  "&:hover": {
                    opacity: 1,
                    color: "#C9A24D",
                  },
                }}
              >
                Returns
              </Link>
              <Link
                href="#"
                sx={{
                  color: "#fff",
                  textDecoration: "none",
                  opacity: 0.8,
                  "&:hover": {
                    opacity: 1,
                    color: "#C9A24D",
                  },
                }}
              >
                Privacy Policy
              </Link>
            </Box>
          </Grid>

          {/* Social Media */}
          <Grid item xs={12} md={3}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                mb: 2,
                color: "#C9A24D",
              }}
            >
              Follow Us
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton
                sx={{
                  color: "#fff",
                  border: "1px solid rgba(201, 162, 77, 0.3)",
                  "&:hover": {
                    backgroundColor: "rgba(201, 162, 77, 0.2)",
                    borderColor: "#C9A24D",
                  },
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                sx={{
                  color: "#fff",
                  border: "1px solid rgba(201, 162, 77, 0.3)",
                  "&:hover": {
                    backgroundColor: "rgba(201, 162, 77, 0.2)",
                    borderColor: "#C9A24D",
                  },
                }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                sx={{
                  color: "#fff",
                  border: "1px solid rgba(201, 162, 77, 0.3)",
                  "&:hover": {
                    backgroundColor: "rgba(201, 162, 77, 0.2)",
                    borderColor: "#C9A24D",
                  },
                }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                sx={{
                  color: "#fff",
                  border: "1px solid rgba(201, 162, 77, 0.3)",
                  "&:hover": {
                    backgroundColor: "rgba(201, 162, 77, 0.2)",
                    borderColor: "#C9A24D",
                  },
                }}
              >
                <YouTubeIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box
          sx={{
            borderTop: "1px solid rgba(201, 162, 77, 0.15)",
            mt: 4,
            pt: 3,
            textAlign: "center",
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            © {new Date().getFullYear()} PopVault. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
