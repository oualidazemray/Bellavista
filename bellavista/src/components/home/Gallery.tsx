"use client";

import { useState } from "react";
<<<<<<< Updated upstream:bellavista/src/components/ui/Gallery.tsx
import Image from "next/image";
=======
import BookingDiv from "@/components/home/BookingDiv";
import Footer from "@/components/home/Footer";
export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
>>>>>>> Stashed changes:bellavista/src/components/home/Gallery.tsx

export default function Gallery() {
  // Array of gallery images with src and alt text
  const galleryImages = [
    {
      src: "/gallery/food1.jpg",
      alt: "Assorted dishes and cuisine",
      width: 2,
      height: 2,
    },
    { src: "/gallery/staff.jpg", alt: "Hotel staff", width: 1, height: 1 },
    { src: "/gallery/bar.jpg", alt: "Hotel bar", width: 1, height: 1 },
    {
      src: "/gallery/buffet.jpg",
      alt: "Breakfast buffet",
      width: 1,
      height: 1,
    },
    {
      src: "/gallery/restaurant.jpg",
      alt: "Restaurant interior",
      width: 1,
      height: 1,
    },
    {
      src: "/gallery/hotel-night.jpg",
      alt: "Hotel at night",
      width: 2,
      height: 2,
    },
    {
      src: "/gallery/dining.jpg",
      alt: "Fine dining setting",
      width: 1,
      height: 1,
    },
    { src: "/gallery/lounge.jpg", alt: "Hotel lounge", width: 1, height: 1 },
    {
      src: "/gallery/hallway.jpg",
      alt: "Elegant hotel hallway",
      width: 1,
      height: 1,
    },
    {
      src: "/gallery/sunset.jpg",
      alt: "Beach sunset view",
      width: 1,
      height: 1,
    },
    {
      src: "/gallery/restaurant-terrace.jpg",
      alt: "Restaurant terrace",
      width: 1,
      height: 1,
    },
    { src: "/gallery/pool-area.jpg", alt: "Pool area", width: 2, height: 1 },
    {
      src: "/gallery/beach-lounge.jpg",
      alt: "Beach loungers",
      width: 1,
      height: 1,
    },
    {
      src: "/gallery/dining-poolside.jpg",
      alt: "Poolside dining",
      width: 1,
      height: 1,
    },
    {
      src: "/gallery/indoor-pool.jpg",
      alt: "Indoor swimming pool",
      width: 1,
      height: 1,
    },
  ];

  return (
    <section className="relative py-16  bg-black dark:bg-slate-900">
      {/* Background palm tree silhouette decorations */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-10 text-white text-8xl">🌴</div>
        <div className="absolute bottom-40 left-20 text-white text-8xl">🌴</div>
      </div>

      <div className="container mx-auto px-4">
        {/* Gallery heading */}
        <h2 className="text-4xl md:text-5xl font-serif text-white text-center mb-12">
          GALLERY
        </h2>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden ${
                image.width === 2 ? "col-span-2" : "col-span-1"
              } ${
                image.height === 2 ? "row-span-2" : "row-span-1"
              } aspect-square md:aspect-auto`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
