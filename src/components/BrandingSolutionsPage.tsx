"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const services = [
  {
    title: "Visual Identity Design",
    description:
      "We create iconic, memorable visual systems—from logos to cinematic brand elements that reflect your ethos.",
    image: "/images/branding-identity.jpg",
  },
  {
    title: "Brand Films & Storytelling",
    description:
      "Your brand deserves more than a logo. We bring it to life through narrative-driven visuals and powerful storytelling.",
    image: "/images/branding-storytelling.jpg",
  },
  {
    title: "Content Systems & Templates",
    description:
      "Cohesive content packages—social media, ad formats, motion graphics—designed to scale your presence consistently.",
    image: "/images/branding-systems.jpg",
  },
];

const BrandingSolutionsPage = () => {
  return (
    <main className="bg-black text-white font-sans">
      <section
        className="relative h-screen w-full bg-cover bg-center flex items-center justify-center text-center px-6"
        style={{ backgroundImage: "url('/images/branding-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative z-10">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight"
            style={{ color: "#fdb713" }}
          >
            Branding Solutions
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.3, duration: 1 }}
            className="mt-4 text-lg md:text-xl max-w-2xl text-gray-300 mx-auto"
          >
            Crafting cinematic brand experiences that are bold, emotional, and unforgettable.
          </motion.p>
        </div>
      </section>

      {services.map((item, idx) => (
        <section
          key={idx}
          className="relative h-screen w-full bg-cover bg-center flex items-center justify-center text-center px-6"
          style={{ backgroundImage: `url('${item.image}')` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60" />
          <div className="relative z-10 max-w-3xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2
                className="text-3xl md:text-5xl font-semibold mb-4"
                style={{ color: "#fdb713" }}
              >
                {item.title}
              </h2>
              <p className="text-gray-300 text-lg">{item.description}</p>
            </motion.div>
          </div>
        </section>
      ))}

      <section className="bg-black px-6 py-24 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h3
            className="text-4xl font-semibold mb-6 tracking-tight"
            style={{ color: "#fdb713" }}
          >
            Build a Brand That Resonates
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed">
            We don&apos;t just design visuals—we design emotions. From brand launches to rebrands, our creative team fuses strategy,
            story, and visual craft into brands that leave a lasting cinematic impression.
          </p>
        </motion.div>
      </section>

      <section className="bg-gradient-to-b from-neutral-900 to-black px-6 py-24 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "#fdb713" }}
          >
            Let&apos;s Elevate Your Brand
          </h2>
          <p className="text-gray-300 text-lg mb-6">
            Partner with Trihood to create a brand identity that lives beyond the screen—with soul, story, and strength.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-all hover:scale-105 hover:shadow-lg"
            style={{
              backgroundColor: "#fdb713",
              color: "black",
            }}
          >
            Start Branding <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
      </section>
    </main>
  );
};

export default BrandingSolutionsPage;
