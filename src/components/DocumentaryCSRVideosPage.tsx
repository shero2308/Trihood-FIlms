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
    title: "Impactful Documentaries",
    description:
      "Stories that matter—crafted with depth and emotion to highlight social issues and human experiences.",
    image: "/images/documentary-impact.jpg",
  },
  {
    title: "CSR Films for Brands",
    description:
      "Showcase your company’s social initiatives through compelling visuals that build trust and goodwill.",
    image: "/images/csr-brand.jpg",
  },
  {
    title: "NGO & Non-Profit Collaborations",
    description:
      "Partnering with NGOs to amplify causes and create awareness-driven films with global appeal.",
    image: "/images/ngo-project.jpg",
  },
];

const DocumentaryCSRVideosPage = () => {
  return (
    <main className="bg-black text-white font-sans">
      {/* HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden">
        <video
          src="/videos/documentary-hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center px-6">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight"
            style={{ color: "#fdb713" }}
          >
            Documentary & CSR Videos
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.3, duration: 1 }}
            className="mt-4 text-lg md:text-xl max-w-2xl text-gray-300"
          >
            Bringing powerful stories to life—films that spark change, inspire communities, and showcase impact.
          </motion.p>
        </div>
      </section>

      {/* SERVICE BLOCKS */}
      {services.map((item, idx) => (
        <section
          key={idx}
          className="relative h-screen flex items-center justify-center bg-cover bg-center text-center"
          style={{ backgroundImage: `url('${item.image}')` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60" />
          <div className="relative z-10 max-w-3xl px-6">
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

      {/* WHY THIS MATTERS */}
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
            Why Documentary & CSR Films Matter
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed">
            Authentic storytelling has the power to create awareness and drive change. We collaborate with brands,
            NGOs, and social organizations to produce films that inspire, inform, and engage audiences.
          </p>
        </motion.div>
      </section>

      {/* CTA SECTION */}
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
            Let&apos;s Tell Stories That Matter
          </h2>
          <p className="text-gray-300 text-lg mb-6">
            Partner with Trihood Films to create impactful documentaries and CSR videos that inspire change.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-all hover:scale-105 hover:shadow-lg"
            style={{
              backgroundColor: "#fdb713",
              color: "black",
            }}
          >
            Start a Project <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
      </section>
    </main>
  );
};

export default DocumentaryCSRVideosPage;
