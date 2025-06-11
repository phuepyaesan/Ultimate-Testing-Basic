"use client";
import { Button, Typography } from "@mui/material";
import Link from "next/link";

export default function Setting() {
  return (
    <div>
      <Typography variant="h4">Setting</Typography>
      <Link href="/profile" passHref>
        <Button variant="contained">Go to Profile</Button>
      </Link>
      <Link href="/" passHref>
        <Button variant="contained">Go to Home</Button>
      </Link>
    </div>
  );
}
