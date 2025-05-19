import Image from "next/image";

export default function BeachBanner() {
  return (
    <section className="relative h-[600px] w-full overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/beachBack.jpg"
          alt="Sandy beach with ocean view"
          fill
          className="object-cover"
          quality={100}
          priority
        />
        {/* Light overlay */}
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Top black gradient */}
        <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-black to-transparent"></div>
      </div>

      {/* Content container - positioned on the RIGHT */}
      <div className="relative h-full flex flex-col items-start justify-center ml-auto mr-16 max-w-xl">
        {/* Vertical line decoration - now on the right side */}
        <div className="absolute right-8 top-1/4 bottom-1/4 w-0.5 bg-white opacity-80"></div>

        {/* Palm tree decoration at bottom right */}
        <div className="absolute bottom-8 right-8 text-white text-3xl">🌴</div>

        {/* Main heading */}
        <h2 className="text-5xl font-serif mb-6 text-white">
          Feel the sand under your feet
        </h2>

        {/* Description text */}
        <div className="text-lg text-white mb-8 leading-relaxed">
          <p>We love life at the beach. Being close</p>
          <p>to the ocean with access to endless sandy</p>
          <p>beach ensures a relaxed state of mind.</p>
          <p>It seems like time stands still watching the ocean.</p>
        </div>

        {/* Explore button - white with blue text */}
        <button className="bg-white hover:bg-white/90 text-blue-900 font-medium px-8 py-3 rounded-md transition-all duration-300">
          EXPLORE
        </button>
      </div>
    </section>
  );
}
