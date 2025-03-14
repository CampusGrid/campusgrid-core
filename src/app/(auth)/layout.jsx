"use client";
import { AuthProvider } from "@/context/AuthContext";

export default function AuthLayout({ children }) {
  return (
    <div>
      <AuthProvider>{children}</AuthProvider>
    </div>
  );
}
