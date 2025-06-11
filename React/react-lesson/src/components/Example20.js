"use client";
import React from "react";

export default function SimpleList() {
  const fruits = ["apple", "banana", "orange", "chery", "mango"];

  return (
    // <ul>
    //   {fruits.map((fruit, index) => (
    //     <li key={index}>{fruit}</li>
    //   ))}
    // </ul>

    <ul>
      {fruits.map((fruit, index) => {
        return <li key={index}>{fruit}</li>;
      })}
    </ul>
  );
}
