"use client";
import React from "react";

function LoginView() {
  return <h1>Welcome Page</h1>;
}

function LogoutView() {
  return <h1>Logout Page</h1>;
}

export default function Greeting({ isLogined }) {
  return isLogined ? <LoginView /> : <LogoutView />;
}
