"use client";
import React from "react";

export default function Greeting({ isLogined }) {
  if (isLogined) return <h1>Welcome Page!</h1>;
  if (!isLogined) return <h1>Please Login !</h1>;
}
