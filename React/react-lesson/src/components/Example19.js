"use client";
import React from "react";

export default function UserName({ name }) {
  return <p>Hello {name || "Guest"} </p>;
}
