import Image from "next/image";
import Link from "next/link";

export default function BeachBanner() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background image */}
      <Image
        className="absolute inset-0 object-cover brightness-75 -translate-y-20"
        src="/beachBack.jpg"
        alt="Beach sunset with umbrellas"
        layout="fill"
        objectFit="cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80"></div>

      {/* Content Container */}
      <div className="absolute inset-0 flex items-center justify-end p-10 md:p-20">
        <div className="text-right max-w-md space-y-6">
          {/* Main Heading */}
          <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
            Feel the sand <br /> under your feet
          </h1>

          {/* Description Text */}
          <p className="text-gray-300 text-lg leading-relaxed">
            We love life at the beach. Being close to the ocean with endless
            sandy beaches ensures a relaxed state of mind. It seems like time
            stands still while watching the ocean.
          </p>

          {/* Explore Button */}
          <Link href="#gallery">
            <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-blue-600 hover:text-white transition">
              EXPLORE
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
