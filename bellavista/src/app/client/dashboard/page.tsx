"use client";

import React from "react";
import Image from "next/image";
import Sidebar from "@/components/home/ClientSideBar";

function ClientDashboard() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute  opacity-50 inset-0 w-full h-full">
        <Image
          src="/beachBack.jpg"
          alt="Beach sunset background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      {/* Sidebar */}
      <Sidebar />
    </div>
  );
}

export default ClientDashboard;
