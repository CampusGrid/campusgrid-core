"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./public.module.css";
import { ScrollProvider } from "@/context/ScrollContext";
function PublicLayout({ children }) {
  return (
    <div>
      <ScrollProvider>
        {<Navbar />}
        {children}
        {<Footer />}
      </ScrollProvider>
      
    </div>
  );
}

export default PublicLayout;
