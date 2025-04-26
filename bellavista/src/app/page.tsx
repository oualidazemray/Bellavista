"use client";

import * as React from "react";
import BeachBanner from "@/components/ui/BeachBanner";
import RoomBanner from "@/components/ui/RoomBanner";
import Gallery from "@/components/ui/Gallery";
import Image from "next/image";

export default function HomePage() {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <>
      <div className="relative min-h-screen w-full overflow-hidden bg-white transition-colors duration-300">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="object-cover w-full h-full"
          >
            <source src="/backVid.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Section */}
        <main className="relative z-10 flex flex-col items-start justify-center px-8 pt-32 h-screen">
          <div className="max-w-4xl">
            <div className="text-white mb-4">
              <h1 className="text-6xl font-seasons mb-2">
                Hotel{" "}
                <span className="inline-block">
                  <Image
                    src="/bellavistaIcon.png"
                    alt="Bellavista Logo"
                    width={300}
                    height={10}
                    className="object-contain"
                  />
                </span>
              </h1>
            </div>

            <h2 className="text-4xl font-seasons text-white font-light">
              More Than a Vista, It`s a Paradista
            </h2>

            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
              <p className="bg-amber-600 rounded-full p-3 animate-bounce">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </p>
            </div>
          </div>
        </main>

        {/* Palm icon in bottom right */}
        <div className="absolute bottom-8 right-8 z-10 text-white text-3xl">
          <Image
            src="/palme.png"
            alt="Palm Icon"
            width={100}
            height={50}
            className="object-contain"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-black"></div>
      </div>

      {/* Room Section */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <RoomBanner />
      </section>

      {/* Beach Section */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <BeachBanner />
      </section>

      {/* Gallery Section */}
      <section className="relative bg-black">
        <Gallery />
      </section>
    </>
  );
}
