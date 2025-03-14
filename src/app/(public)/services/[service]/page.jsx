'use client'
import React from "react";
import { useParams } from "next/navigation";
import Services from "@/components/Services";

function page() {
  const params = useParams();
  const serviceName = params.service;
  return (
    <div>
      <Services serviceName={serviceName} />
    </div>
  );
}

export default page;
