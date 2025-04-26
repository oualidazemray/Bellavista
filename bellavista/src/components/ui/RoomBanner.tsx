import Image from "next/image";

export default function RoomBanner() {
  return (
    <section className="relative h-full w-full overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/roomBack.jpg"
          alt="Luxury hotel room background"
          fill
          className="object-cover scale-x-[-1]"
          quality={100}
          priority
        />
        {/* Top black gradient */}
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-black to-transparent"></div>
      </div>

      {/* Content container - positioned on the left like in image */}
      <div className="relative h-full flex flex-col items-start justify-center px-16 max-w-xl">
        {/* Vertical line decoration */}
        <div className="absolute left-8 top-1/4 bottom-1/4 w-0.5 bg-white opacity-80"></div>

        {/* Palm tree decoration at bottom */}
        <div className="absolute bottom-8 left-8 text-white text-3xl">
          {" "}
          <Image
            src="/palme.png"
            alt="Bellavista Logo"
            width={100}
            height={50}
            className="object-contain"
          />
        </div>

        {/* Main heading */}
        <h1 className="text-5xl font-serif mb-6 text-white">
          Luxury redefinde
        </h1>

        {/* Description text - left-aligned as in image */}
        <p className="text-lg text-white mb-8 leading-relaxed">
          Our rooms are designed to transport you into an environment made for
          leisure. Take your mind off the day-to-day of home life and find a
          private paradise for yourself.
        </p>

        {/* Explore button - amber colored like in image */}
        <button className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-8 py-3 rounded-md transition-all duration-300">
          EXPLORE
        </button>
      </div>
    </section>
  );
}
