// components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-black text-white px-6">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold leading-tight mb-6"
      >
        Turning Ideas Into Impactful Stories
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="max-w-2xl text-lg md:text-xl mb-8"
      >
        At Trihood Films, we breathe life into brands, causes, and characters
        through powerful visual storytelling. Every frame we create is designed
        to connect, inspire, and leave a lasting mark.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="flex flex-wrap gap-4"
      >
        <Link href="/portfolio">
          <button className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition">
            Explore Our Work
          </button>
        </Link>
        <Link href="/collaborate">
          <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
            Let’s Collaborate
          </button>
        </Link>
        <Link href="/contact">
          <button className="bg-blue-600 px-6 py-3 rounded-full hover:bg-blue-700 transition">
            Contact Us
          </button>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
