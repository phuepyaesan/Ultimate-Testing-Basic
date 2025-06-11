"use client";
import React from "react";
import styles from "./Example13.module.css";
export default function UserProfile() {
  return (
    <div>
      <h2 id={styles.h2}>Hello Id</h2>
      <h1 className={styles.name}>User Profile</h1>
    </div>
  );
}
