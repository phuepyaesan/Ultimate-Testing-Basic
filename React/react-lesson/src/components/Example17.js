"use client";
import React from "react";

export default function StatusMessage({ status }) {
  switch (status) {
    case "success":
      return <h1>Status ok !</h1>;
    case "error":
      return <h1>Status fail !</h1>;

    default:
      return <h1>wait for action!</h1>;
  }
}
