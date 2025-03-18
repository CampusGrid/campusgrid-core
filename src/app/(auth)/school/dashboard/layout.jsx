"use client";
import DashboardNavbar from "@/components/DashboardNavbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <DashboardNavbar />
      <main className="flex-1 p-4 ml-64 w-[83%] bg-gray-200">
        {children}
      </main>
    </div>
  );
}