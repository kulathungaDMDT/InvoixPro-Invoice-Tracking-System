// src/assets/pages/LoginPage.jsx
import React from "react";
import { Box, Typography, Button, TextField, Divider, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 64px - 100px)", // Adjust for Navbar + Footer
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#f4f6fb",
        px: 2,
      }}
    >
      <Box
        sx={{
          maxWidth: 450,
          width: "100%",
          bgcolor: "white",
          p: { xs: 3, md: 5 },
          borderRadius: 3,
          boxShadow: 3,
          textAlign: "center",
        }}
      >
        <Typography variant="h4" color="#2e7d32" fontWeight={700} gutterBottom>
          Login to InvoixPro
        </Typography>

        {/* Social Login */}
        <Stack spacing={2} mb={3}>
          <Button
            variant="outlined"
            startIcon={<GoogleIcon />}
            sx={{ textTransform: "none" }}
          >
            Continue with Google
          </Button>
          <Button
            variant="outlined"
            startIcon={<FacebookIcon />}
            sx={{ textTransform: "none" }}
          >
            Continue with Facebook
          </Button>
          <Button
            variant="outlined"
            startIcon={<AppleIcon />}
            sx={{ textTransform: "none" }}
          >
            Continue with Apple
          </Button>
        </Stack>

        <Divider sx={{ my: 3 }}>OR</Divider>

        {/* Email & Password */}
        <Stack spacing={2}>
          <TextField label="Email" variant="outlined" fullWidth />
          <TextField label="Password" type="password" variant="outlined" fullWidth />
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#2e7d32",
              "&:hover": { backgroundColor: "#256428" },
              textTransform: "none",
            }}
            onClick={() => navigate("/")}
          >
            Login
          </Button>
        </Stack>

        <Typography variant="body2" mt={2} sx={{ color: "black" }}>
          Don't have an account?{" "}
          <Button
            variant="text"
            sx={{ textTransform: "none", color: "#2e7d32" }}
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </Button>
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginPage;
