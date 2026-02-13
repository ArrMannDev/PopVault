import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import loginImage from "../img/loginImage.png";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function LoginPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const respond = await axios.post(
        "http://localhost:5300/auth/login",
        formData,
      );

      localStorage.setItem("token", respond.data.access_token);

      toast.success("Login successfully 🎉");

      navigate("/admin");
    } catch (error) {
      console.error(error);

      toast.error(error?.response?.data?.message || "Login failed ❌");
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        overflow: "hidden",
      }}
    >
      {/* LEFT IMAGE */}
      <Box
        sx={{
          width: "50%",
          height: "100vh",
          display: { xs: "none", md: "block" },
        }}
      >
        <Box
          component="img"
          src={loginImage}
          alt="login"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>

      {/* RIGHT FORM */}
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper
          component="form"
          onSubmit={handleSubmit}
          elevation={4}
          sx={{
            width: "100%",
            maxWidth: 400,
            p: 4,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography variant="h5" fontWeight="bold">
            Welcome Customer ⭐
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Login to your account
          </Typography>

          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            fullWidth
            required
          />

          <TextField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            fullWidth
            required
          />

          <Button variant="contained" type="submit" size="large" fullWidth>
            Login
          </Button>
        </Paper>
      </Box>
    </Box>
  );
}
