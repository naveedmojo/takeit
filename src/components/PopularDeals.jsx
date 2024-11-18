import React from "react";
import { Box, Grid, Typography } from "@mui/material";

export default function PopularDeals() {
  return (
    <Box
      sx={{
        textAlign: "center",
        padding: "40px 16px",
        backgroundColor: "#f9f9f9",
      }}
    >
      {/* Header Section */}
      <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 3 }}>
        Popular Deals & Offers
      </Typography>

      {/* Deals Section */}
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              width: "100%",
              height: 200,
              backgroundImage: "url(https://via.placeholder.com/200)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "8px",
            }}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              width: "100%",
              height: 200,
              backgroundImage: "url(https://via.placeholder.com/200)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "8px",
            }}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              width: "100%",
              height: 200,
              backgroundImage: "url(https://via.placeholder.com/200)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "8px",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
