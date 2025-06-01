"use client";
import React, { useState } from "react";

export default function Add() {
  const [item, setItem] = useState("Men Shirt");
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <h2>Add Item</h2>
      <div>{item}</div>
      <div>{date.toString()}</div>
    </div>
  );
}
