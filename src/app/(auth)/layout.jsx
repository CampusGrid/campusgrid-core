"use client";
import { AuthProvider } from "@/context/AuthContext";
import { TokenAuthProvider } from "@/context/TokenAuthContext";
import AuthGuard from "@/utils/AuthGuard"

export default function AuthLayout({ children }) {
  return (
    <div>
      <AuthProvider><>{children}</></AuthProvider>
    </div>
  );
}
