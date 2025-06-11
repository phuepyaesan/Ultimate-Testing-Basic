"use client";
import React from "react";

export default function Notification({ hasMessage }) {
  return (
    <div>
      <h1>Dashboard</h1>
      {hasMessage && <p>You have new message</p>}
    </div>
  );
}
