"use client";
import React, { useState } from "react";

export default function Add() {
  const [item, setItem] = useState("Men Shirt");
  const [date, setDate] = useState(new Date());

  return (
    <div style={{ background: "gold", marginBottom: "20px", padding: "20px" }}>
      <h2>Add Item</h2>
      <div>{item}</div>
      <div>{date.toString()}</div>
      <hr />
    </div>
  );
}
