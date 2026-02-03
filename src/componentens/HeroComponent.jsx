import { Box, Button, Typography } from "@mui/material";
import React from "react";
import LogoTextComponent from "./LogoTextComponent";

export default function HeroComponent({ imgUrl, content, description }) {
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "60vh", md: "91vh" },
        backgroundImage: `url("${imgUrl}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.25)",
        }}
      />

      {/* Content */}
      <Box
        sx={{
          textAlign: "center",
          color: "#fff",
          px: 2,
        }}
      >
        <LogoTextComponent
          firstLetter="Pop"
          secondLetter="Vault"
          color="#1a1a1aff"
          headingSize="h2"
        />
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            mt: 2,
            mb: 1.5,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: "#FFFFFF",
            textShadow: "0 4px 12px rgba(0,0,0,0.4)",
          }}
        >
          {content}
        </Typography>

        <Typography variant="h6" sx={{ opacity: 0.9 }}>
          {description}
        </Typography>

        <Button variant="contained" sx={{ mt: 2 }}>
          Shop Now
        </Button>
      </Box>
    </Box>
  );
}
