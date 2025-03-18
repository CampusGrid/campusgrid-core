"use client";
import AdminNavbar from "@/components/AdminDashboardNavbar";
export default function AdminLayoutDashboard({ children }) {
  return (
        <>
        <AdminNavbar/>
        <main className="flex-1 p-4 ml-64 w-[83%] bg-gray-200">
        {children}
        </main>
        </>

  );
}

