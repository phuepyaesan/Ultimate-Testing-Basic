"use client";

import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "grey.200", p: 2, textAlign: "center" }}>
      <Typography>&copy; 2025 MyApp. All rights reserved.</Typography>
    </Box>
  );
}
