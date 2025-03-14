"use client";
import DashboardNavbar from "@/components/DashboardNavbar";

export default function DashbaordLayout({ children }) {
  return (
       <div>
        <DashboardNavbar/>
        <main className="flex-1 p-4 ml-64 bg-gray-100 w-full h-full">
        {children}
        </main>
        </div>

  );
}
