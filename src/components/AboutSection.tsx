// components/AboutSection.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="py-20 bg-white text-black">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Image
            src="/founders-bts.jpg"
            alt="Founders Behind the Scenes"
            width={600}
            height={400}
            className="rounded-xl object-cover shadow-lg"
          />
        </motion.div>

        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">🚀 Our Journey</h2>
          <p className="text-lg leading-relaxed mb-6">
            Trihood Films was born from a fearless passion to redefine storytelling. Founded by Rituraj Anand and Shailesh, two young filmmakers with bold dreams, we’ve evolved into a creative powerhouse for brands, NGOs, and institutions across India.
          </p>
          <Link href="/about">
            <button className="px-6 py-3 border border-black rounded-full hover:bg-black hover:text-white transition font-medium">
              Read Our Story
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
