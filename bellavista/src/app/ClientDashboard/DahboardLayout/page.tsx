"use client";

import React from "react";
import Image from "next/image";
import { Sidebar } from "@/components/ui/ClientSideBar";

import { ReactNode } from "react";

const DashboardPage = ({ children }: { children: ReactNode }) => {
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
      {/* Dashboard Container */}
      <main className="absolute inset-0 flex items-center justify-center">
        {children}
      </main>
      {/* Sidebar */}
      <Sidebar />
    </div>
  );
};

export default DashboardPage;
