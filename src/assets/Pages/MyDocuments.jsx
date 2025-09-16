import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const categories = [
  { name: "Invoices", emoji: "🧾" }, // ✅ Changed from Receipt to Invoices
  { name: "Bill", emoji: "💸" },
  { name: "Warranty", emoji: "🛠️" },
  { name: "Insurance", emoji: "🛡️" },
  { name: "Travel", emoji: "✈️" },
  { name: "Tax Documents", emoji: "📊" },
  { name: "Memos", emoji: "📝" },
  { name: "Contracts", emoji: "📃" },
  { name: "Others", emoji: "📁" },
];

const MyDocuments = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (name) => {
    if (name === "Invoices") {
      navigate("/my-invoices"); // ✅ Navigate to MyInvoices page
    } else {
      alert(`${name} page coming soon! 🚧`);
    }
  };

  return (
    <Box sx={{ minHeight: "80vh", pt: 10, px: 4, backgroundColor: "#f5f7fa" }}>
      <Typography
        variant="h4"
        textAlign="center"
        fontWeight={700}
        mb={6}
        color="#3949ab"
        letterSpacing={1}
      >
        📂 My Documents
      </Typography>

      <Grid container spacing={4} justifyContent="center" alignItems="center">
        {categories.map(({ name, emoji }) => (
          <Grid
            item
            key={name}
            xs={12}
            sm={6}
            md={3}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Paper
              elevation={6}
              onClick={() => handleCategoryClick(name)}
              sx={{
                width: { xs: "100%", sm: 200, md: 180 },
                height: { xs: 140, sm: 180 },
                borderRadius: 4,
                bgcolor: "white",
                textAlign: "center",
                cursor: "pointer",
                px: 2,
                py: 3,
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow:
                    "0 8px 20px rgba(57, 73, 171, 0.3), 0 4px 12px rgba(57, 73, 171, 0.15)",
                },
              }}
            >
              <Typography variant="h1" sx={{ fontSize: { xs: 42, sm: 56 }, mb: 2 }}>
                {emoji}
              </Typography>
              <Typography variant="h6" fontWeight={600} color="#3949ab">
                {name}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MyDocuments;
