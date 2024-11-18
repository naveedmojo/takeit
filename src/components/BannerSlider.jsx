import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Box, Typography } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

export default function BannerSlider() {
  return (
    <Box sx={{ padding: "20px 16px" }}>
      {/* Banner Heading */}
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", marginBottom: 3, textAlign: "center" }}
      >
        Special Offers & Top Products
      </Typography>

      {/* Banner Slider */}
      <Carousel
        showArrows={true} // Show navigation arrows
        infiniteLoop={true} // Infinite loop when reaching the last slide
        autoPlay={true} // Auto-play the slider
        interval={5000} // Interval for each slide (5 seconds)
        showThumbs={false} // Hide thumbnail images
        showStatus={false} // Hide slide status (e.g., "1 of 3")
        dynamicHeight={true} // Adjust height based on the image size
      >
        {/* First Slide */}
        <div>
          <img src="https://via.placeholder.com/1200x400" alt="Offer 1" />
          <Typography
            variant="h5"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "white",
              fontWeight: "bold",
              textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)",
            }}
          >
            Big Discounts on Travel & Products!
          </Typography>
        </div>

        {/* Second Slide */}
        <div>
          <img src="https://via.placeholder.com/1200x400" alt="Offer 2" />
          <Typography
            variant="h5"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "white",
              fontWeight: "bold",
              textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)",
            }}
          >
            Exclusive Offers on Flights & Hotels!
          </Typography>
        </div>

        {/* Third Slide */}
        <div>
          <img src="https://via.placeholder.com/1200x400" alt="Offer 3" />
          <Typography
            variant="h5"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "white",
              fontWeight: "bold",
              textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)",
            }}
          >
            Best Deals on Corporate Gifts!
          </Typography>
        </div>
      </Carousel>
    </Box>
  );
}
