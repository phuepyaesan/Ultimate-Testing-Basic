"use client";
import React from "react";

export default function Greeting({ isLogined }) {
  return isLogined ? <h1>Welcome Baby</h1> : <h1>Please Login Baby</h1>;
}
