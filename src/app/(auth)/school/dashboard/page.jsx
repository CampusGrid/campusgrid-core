"use client";

import { useEffect,useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

function Page() {
  const { user } = useAuth();


  

  return (
    <div className="border border-blue-500 w-full bg-gray-100">
      <h1>{user?.userInfo?.schoolName}</h1>
      <p>Welcome to your dashboard!</p>
    </div>
  );
}

export default Page;
