"use client";
import React from "react";
import "./login.module.css";
import { AuthProvider } from "@/context/AuthContext";

function LoginLayout({ children }) {
  return (
    <div>
      <AuthProvider>{children}</AuthProvider>

    </div>
  );
}

export default LoginLayout;
