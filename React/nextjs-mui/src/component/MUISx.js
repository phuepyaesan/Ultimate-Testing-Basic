import { Box } from "@mui/material";

export default function MUI() {
  return (
    <>
      <Box
        sx={{
          color: "primary.main",
          padding: 2,
          display: { xs: "none", md: "block" },
        }}
      >
        This box is visible on md and larger
      </Box>
      <Box
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        This box is visible only on small screens
      </Box>
    </>
  );
}
