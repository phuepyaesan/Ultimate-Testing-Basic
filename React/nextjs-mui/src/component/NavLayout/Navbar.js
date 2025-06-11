"use client";

import { AppBar, Button, Toolbar, Typography } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Dashboard</Button>
      </Toolbar>
    </AppBar>
  );
}
