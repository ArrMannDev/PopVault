import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import { Link as RouterLink } from "react-router";

export default function CardComponent({ newItemData }) {
  return (
    <Grid container spacing={4} justifyContent="center">
      {newItemData.map((item) => (
        <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
          {/* MUI Link + React Router */}
          <MuiLink
            component={RouterLink}
            to={`/product/${item.id}`}
            underline="none"
            color="inherit"
            sx={{ display: "block" }}
          >
            <Card
              sx={{
                width: 300,
                mx: "auto",
                background: "rgba(234, 231, 231, 0.65)",
                backdropFilter: "blur(12px)",
                borderRadius: 4,
                border: "1px solid rgba(0, 0, 0, 0.08)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                textAlign: "center",
                transition: "all 0.3s ease",
                cursor: "pointer",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
                },
              }}
            >
              <CardMedia
                component="img"
                image={`http://localhost:5300/images/${encodeURIComponent(
                  item.image,
                )}`}
                alt={item.name}
                sx={{
                  width: 300,
                  height: 300,
                  objectFit: "cover",
                  borderRadius: 3,
                  mx: "auto",
                  mt: 3,
                  filter: "grayscale(20%)",
                  transition: "filter 0.3s ease",
                  "&:hover": {
                    filter: "grayscale(0%)",
                  },
                }}
              />

              <CardContent sx={{ pt: 2 }}>
                <Typography
                  sx={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "#111",
                    mb: 0.5,
                    letterSpacing: "0.3px",
                  }}
                >
                  {item.name}
                </Typography>

                <Typography
                  sx={{
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    color: "#555",
                  }}
                >
                  {item.price} Ks
                </Typography>
              </CardContent>
            </Card>
          </MuiLink>
        </Grid>
      ))}
    </Grid>
  );
}
