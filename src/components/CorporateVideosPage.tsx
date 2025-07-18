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
    title: "Corporate Films",
    description:
      "Professional films that showcase your company’s vision, values, and culture—crafted with cinematic finesse.",
    image: "/images/corporate-film.jpg",
  },
  {
    title: "Event Coverage",
    description:
      "Seamless filming of conferences, product launches, and corporate events with multi-camera setups and creative angles.",
    image: "/images/corporate-event.jpg",
  },
  {
    title: "Brand Stories & Testimonials",
    description:
      "Authentic storytelling that humanizes your brand and builds trust with stakeholders and customers.",
    image: "/images/corporate-testimonials.jpg",
  },
];

const CorporateVideosPage = () => {
  return (
    <main className="bg-black text-white font-sans">
      {/* HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden">
        <video
          src="/videos/corporate-hero.mp4"
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
            Corporate Videos
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.3, duration: 1 }}
            className="mt-4 text-lg md:text-xl max-w-2xl text-gray-300"
          >
            Capturing professionalism with creativity—films that elevate your brand presence.
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

      {/* WHY CORPORATE VIDEOS SECTION */}
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
            Why Corporate Videos Matter?
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed">
            Corporate films are more than just videos—they are a representation of your brand&apos;s credibility and
            innovation. We help you communicate purpose, professionalism, and passion through cinematic storytelling.
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
            Let&apos;s Elevate Your Brand
          </h2>
          <p className="text-gray-300 text-lg mb-6">
            Partner with Trihood for world-class corporate video solutions that impress and inspire.
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

export default CorporateVideosPage;
