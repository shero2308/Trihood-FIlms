"use client";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="relative h-screen bg-black text-white flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('/hero-background.png')`, // ✅ from /public
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Turning Ideas Into <span className="text-[#fdb713]">Impactful Stories</span>
        </h1>
        <p className="text-lg md:text-xl mb-6 text-gray-200 leading-relaxed">
          We are <span className="text-[#fdb713] font-medium">Trihood Films</span>, a creative agency dedicated to bringing stories to life.
          We craft content that resonates, connects emotionally, and transforms simple ideas into unforgettable visual experiences.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/portfolio"
            className="relative inline-block px-8 py-3 font-semibold text-black bg-[#fdb713] rounded-full group overflow-hidden transition-all duration-300 hover:text-white"
          >
            <span className="absolute inset-0 w-full h-full bg-black scale-0 group-hover:scale-100 transition-transform duration-300 ease-out origin-center rounded-full z-0" />
            <span className="relative z-10">Explore Our Work</span>
          </Link>
          <Link
            href="/contact"
            className="relative inline-block px-8 py-3 font-semibold text-white border border-white rounded-full group overflow-hidden transition-all duration-300 hover:text-black"
          >
            <span className="absolute inset-0 w-full h-full bg-white scale-0 group-hover:scale-100 transition-transform duration-300 ease-out origin-center rounded-full z-0" />
            <span className="relative z-10">Let's Collaborate</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
