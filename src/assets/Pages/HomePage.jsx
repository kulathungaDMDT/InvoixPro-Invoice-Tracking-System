// HomePage.jsx
import React from "react";
import { Box, Typography, Button, Grid, Paper, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

// Features for InvoixPro
const features = [
  { emoji: "📑", title: "Track Invoices", desc: "Manage and monitor all invoices in one place with ease." },
  { emoji: "⏰", title: "Automated Reminders", desc: "Never miss a due date with smart payment notifications." },
  { emoji: "📊", title: "Real-time Insights", desc: "Get detailed analytics and reports on your business cash flow." },
  { emoji: "☁️", title: "Secure Cloud Storage", desc: "Access invoices safely from anywhere, anytime." },
];

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f4f6fb", pt: 10, pb: 12 }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Grid container spacing={6} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={8} textAlign="center">
            <Typography
              variant="h3"
              fontWeight={700}
              color="#2e7d32"
              gutterBottom
              sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
            >
              InvoixPro 📊
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              mb={4}
              sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
            >
              Smart Invoice Tracking System for SMEs – Stay on top of payments,
              streamline cash flow, and grow your business with ease.
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "#2e7d32",
                px: { xs: 4, md: 6 },
                py: { xs: 1.5, md: 1.8 },
                fontWeight: 600,
                fontSize: { xs: "0.9rem", md: "1rem" },
                "&:hover": {
                  backgroundColor: "#256428",
                },
              }}
              onClick={() => navigate("/signup")}
            >
              Get Started
            </Button>
          </Grid>
        </Grid>

        {/* Features Section */}
        <Box sx={{ mt: 12 }}>
          <Typography
            variant="h4"
            fontWeight={700}
            color="#2e7d32"
            textAlign="center"
            gutterBottom
            sx={{ fontSize: { xs: "1.8rem", md: "2.2rem" } }}
          >
            Why Choose InvoixPro? 🚀
          </Typography>

          <Grid container spacing={5} justifyContent="center" mt={4}>
            {features.map(({ emoji, title, desc }) => (
              <Grid
                item
                key={title}
                xs={12}
                sm={6}
                md={3}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Paper
                  elevation={6}
                  sx={{
                    width: { xs: "100%", sm: 250, md: 230 },
                    minHeight: { xs: 180, md: 220 },
                    borderRadius: 4,
                    bgcolor: "white",
                    textAlign: "center",
                    px: { xs: 2, md: 3 },
                    py: { xs: 3, md: 4 },
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-12px)",
                      boxShadow:
                        "0 10px 30px rgba(46, 125, 50, 0.3), 0 6px 20px rgba(46, 125, 50, 0.15)",
                    },
                  }}
                >
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: { xs: 40, md: 55 },
                      mb: 2,
                      userSelect: "none",
                    }}
                  >
                    {emoji}
                  </Typography>
                  <Typography
                    variant="h6"
                    fontWeight={700}
                    color="#2e7d32"
                    gutterBottom
                    sx={{ fontSize: { xs: "1rem", md: "1.1rem" } }}
                  >
                    {title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 1, fontSize: { xs: "0.85rem", md: "0.9rem" } }}
                  >
                    {desc}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;
 