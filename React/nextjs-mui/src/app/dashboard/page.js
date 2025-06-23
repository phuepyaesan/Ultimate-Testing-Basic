"use client";

import { Typography } from "@mui/material";
import { useSearchParams, useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const filter = searchParams.get("filter");
  const setFilter = (value) => {
    router.push(`/dashboard?filter=${value}`);
  };
  console.log("Filer is ", filter);
  return (
    <div>
      <Typography>Current Parameter Filter:{filter}</Typography>
      <button onClick={() => setFilter("actived")}>Actived</button>
      <button onClick={() => setFilter("achieved")}>Achieved</button>
    </div>
  );
}
