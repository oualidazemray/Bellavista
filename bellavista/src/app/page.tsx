"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Navbar } from "@/components/ui/NavBar";
import BeachBanner from "@/components/ui/BeachBanner";
import RoomBanner from "@/components/ui/RoomBanner";
import Footer from "@/components/ui/Footer";
import Gallery from "@/components/ui/Gallery";
import BookingSection from "@/components/ui/BookingSection";
import Image from "next/image";

export default function HomePage() {
  const videoRef = React.useRef(null);
  const { theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Video autoplay failed:", error);
      });
    }
  }, [theme, mounted]);

  const videoSrc = !mounted
    ? "/backVid.mp4"
    : theme === "dark"
    ? "/backVid.mp4"
    : "/backVid2.mp4";

  return (
    <>
      <div className="relative min-h-screen w-full overflow-hidden dark:bg-slate-900 bg-white transition-colors duration-300">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="object-cover w-full h-full"
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>
        </div>

        <Navbar />

        {/* Hero Section */}
        <main className="relative z-10 flex flex-col items-start justify-center px-8 pt-32 h-screen">
          <div className="max-w-4xl">
            <div className="text-white mb-4">
              <h1 className="text-6xl font-serif mb-2 dark:text-gray-200">
                Hotel{" "}
                <span className="inline-block">
                  <Image
                    src="/bellavistaIcon.png"
                    alt="Bellavista Logo"
                    width={150}
                    height={50}
                    className="object-contain"
                  />
                </span>
              </h1>
            </div>

            <h2 className="text-4xl font-serif text-white font-light dark:text-gray-300">
              More Than a Vista, It's a Paradista
            </h2>

            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
              <button className="bg-amber-600 dark:bg-blue-600 rounded-full p-3 animate-bounce">
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
              </button>
            </div>
          </div>
        </main>

        {/* Palm icon in bottom right */}
        <div className="absolute bottom-8 right-8 z-10 text-white dark:text-gray-200 text-3xl">
          <Image
            src="/palme.png"
            alt="Bellavista Logo"
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
      <section className="relative py-16 bg-black dark:bg-slate-900">
        <Gallery />
      </section>
      {/* Booking Section */}
      <section className="relative py-16 bg-white dark:bg-slate-900">
        <BookingSection />
      </section>

      {/* Footer Section */}
      <section className="relative py-16 bg-white dark:bg-slate-900">
        <Footer />
      </section>
    </>
  );
}
