import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Typography,
  Button,
  Grid,
  CircularProgress,
  Divider,
  Chip,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5300/blind-box-items/${id}`,
        );
        setProduct(res.data);
      } catch {
        const all = await axios.get("http://localhost:5300/blind-box-items");
        setProduct(all.data.find((i) => i.id === Number(id)));
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <Box
        height="70vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!product) return null;

  return (
    <Box width="100%">
      {/* BACK BUTTON */}
      <Box px={4} py={2}>
        <Button startIcon={<ArrowBackIcon />} onClick={() => navigate(-1)}>
          Back
        </Button>
      </Box>

      {/* MAIN SECTION */}
      <Grid container spacing={10} sx={{ alignItems: "center" }}>
        {/* IMAGE */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              height: { xs: 350, md: "calc(100vh - 64px)" },
              bgcolor: "#f6f6f6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              p: 4,
            }}
          >
            <Box
              component="img"
              src={`http://localhost:5300/images/${product.image}`}
              alt={product.name}
              sx={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
            />
          </Box>
        </Grid>

        {/* PRODUCT INFO */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              p: { xs: 3, md: 6 },
              position: { md: "sticky" },
              top: 0,
            }}
          >
            <Chip
              label={product.itemType || "Blind Box"}
              color="primary"
              sx={{ mb: 2 }}
            />

            <Typography variant="h4" fontWeight={700}>
              {product.name}
            </Typography>

            <Typography variant="h3" color="primary" fontWeight={700} mt={2}>
              {product.package?.price} Ks
            </Typography>

            <Typography mt={1} color="text.secondary">
              Stock: {product.package?.stock ?? "Available"}
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Typography
              lineHeight={1.8}
              color="text.secondary"
              sx={{ maxWidth: "520px" }}
            >
              {product.package?.description ?? "No description available"}
            </Typography>

            {/* ACTIONS */}
            <Box mt={5} display="flex" gap={2}>
              <Button
                variant="contained"
                size="large"
                startIcon={<ShoppingCartIcon />}
                sx={{
                  px: 5,
                  py: 1.5,
                  fontSize: "1rem",
                  borderRadius: 2,
                }}
              >
                Add to Cart
              </Button>

              <Button
                variant="outlined"
                size="large"
                sx={{
                  px: 5,
                  py: 1.5,
                  borderRadius: 2,
                }}
              >
                Buy Now
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
