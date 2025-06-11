"use client";
import React from "react";

export default function UserProfile() {
  const h1Style = { color: "green", padding: 10, fontSize: 20 };
  return (
    <div>
      <h1 style={{ color: "green", padding: 10, fontSize: 20 }}>
        User Profile
      </h1>
      <h1 style={h1Style}>User Profile2</h1>
    </div>
  );
}
