import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Box, Typography } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

export default function TrustedClients() {
  return (
    <Box
      sx={{
        padding: "40px 16px",
        textAlign: "center",
        backgroundColor: "#f9f9f9",
      }}
    >
      {/* Heading */}
      <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 3 }}>
        Trusted by Our Partners
      </Typography>

      {/* Logo Carousel */}
      <Carousel
        showArrows={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000} // 3 seconds between slides
        showThumbs={false}
        showStatus={false}
        swipeable={true}
        dynamicHeight={false}
        centerMode={true}
        centerSlidePercentage={20} // Adjust this value to show how many logos at a time
        // Add more customization if necessary
      >
        {/* Partner 1 */}
        <div>
          <img
            src="https://via.placeholder.com/150x50?text=Logo+1"
            alt="Partner 1"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>

        {/* Partner 2 */}
        <div>
          <img
            src="https://via.placeholder.com/150x50?text=Logo+2"
            alt="Partner 2"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>

        {/* Partner 3 */}
        <div>
          <img
            src="https://via.placeholder.com/150x50?text=Logo+3"
            alt="Partner 3"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>

        {/* Partner 4 */}
        <div>
          <img
            src="https://via.placeholder.com/150x50?text=Logo+4"
            alt="Partner 4"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>

        {/* Partner 5 */}
        <div>
          <img
            src="https://via.placeholder.com/150x50?text=Logo+5"
            alt="Partner 5"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>

        {/* Partner 6 */}
        <div>
          <img
            src="https://via.placeholder.com/150x50?text=Logo+6"
            alt="Partner 6"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </Carousel>
    </Box>
  );
}
