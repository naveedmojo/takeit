import React from "react";
import { Box, Typography, Link } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#333",
        color: "#fff",
        padding: "20px",
        textAlign: "center",
        position: "relative",
        bottom: 0,
        width: "100%",
      }}
    >
      <Typography variant="body2" sx={{ marginBottom: "8px" }}>
        Powered by{" "}
        <Link
          href="https://www.magfly.in"
          color="inherit"
          target="_blank"
          underline="hover"
        >
          Magfly
        </Link>
      </Typography>
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Magfly.in. All rights reserved.
      </Typography>
    </Box>
  );
}
