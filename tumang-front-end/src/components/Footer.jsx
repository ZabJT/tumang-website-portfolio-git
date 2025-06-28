import React from "react";
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "#181f2a",
        color: "#fff",
        py: 2,
        textAlign: "center",
        mt: 8,
      }}
    >
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Zabdiel Tumang. All rights reserved.
      </Typography>
    </Box>
  );
}
