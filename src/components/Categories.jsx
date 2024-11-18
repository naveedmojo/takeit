import React from "react";
import { Typography, Grid, Avatar, Box } from "@mui/material";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import TrainIcon from "@mui/icons-material/Train";
import FlightIcon from "@mui/icons-material/Flight";
import StoreIcon from "@mui/icons-material/Store";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import DevicesIcon from "@mui/icons-material/Devices";

export default function CompactCategoriesGrid() {
  const categories = [
    { name: "Travel", icon: <TravelExploreIcon fontSize="medium" /> },
    { name: "Bus", icon: <DirectionsBusIcon fontSize="medium" /> },
    { name: "Train", icon: <TrainIcon fontSize="medium" /> },
    { name: "Flight", icon: <FlightIcon fontSize="medium" /> },
    { name: "Store", icon: <StoreIcon fontSize="medium" /> },
    { name: "Corporate Gifts", icon: <CardGiftcardIcon fontSize="medium" /> },
    { name: "Food", icon: <RestaurantMenuIcon fontSize="medium" /> },

    { name: "Electronics", icon: <DevicesIcon fontSize="medium" /> },
    // Add more categories dynamically here
  ];

  return (
    <Box
      sx={{
        textAlign: "center",
        padding: "20px 16px",
        backgroundColor: "#f9f9f9",
      }}
    >
      {/* Header Section */}
      <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 3 }}>
        Get Everything at One Place
      </Typography>
      <Typography
        variant="subtitle1"
        color="textSecondary"
        sx={{ marginBottom: 4 }}
      >
        Explore all categories for your needs.
      </Typography>

      {/* Categories Section */}
      <Grid
        container
        spacing={1} // Reduced the spacing between icons
        justifyContent="center"
      >
        {categories.map((category, index) => (
          <Grid item xs={4} sm={3} md={2} key={index}>
            <Box
              sx={{
                textAlign: "center",
                cursor: "pointer",
                transition: "transform 0.3s ease, background-color 0.3s ease",
                "&:hover": {
                  transform: "scale(1.1)", // Slight scaling on hover
                },
              }}
            >
              <Avatar
                sx={{
                  bgcolor: "primary.light",
                  width: 56,
                  height: 56,
                  margin: "0 auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background-color 0.3s ease",
                  "&:hover": {
                    bgcolor: "primary.main", // Changes background color on hover
                  },
                }}
              >
                {category.icon}
              </Avatar>
              <Typography
                variant="body2"
                sx={{
                  marginTop: 1,
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  transition: "color 0.3s ease",
                  "&:hover": {
                    color: "primary.main", // Changes text color on hover
                  },
                }}
              >
                {category.name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
