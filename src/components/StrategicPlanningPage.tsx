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
    title: "Creative Vision Mapping",
    description:
      "We guide your message from concept to clarity—developing story frameworks that align with your goals.",
    image: "/images/strategic-vision.jpg",
  },
  {
    title: "Campaign Architecture",
    description:
      "Structure your video or brand campaign with intentional flow—audience, purpose, and emotional resonance in mind.",
    image: "/images/campaign-architecture.jpg",
  },
  {
    title: "Impact-Driven Messaging",
    description:
      "We shape content that doesn’t just look good—it lands, connects, and inspires people to take action.",
    image: "/images/impact-messaging.jpg",
  },
];

const StrategicPlanningPage = () => {
  return (
    <main className="bg-black text-white font-sans">
      {/* HERO */}
      <section
        className="relative h-screen w-full bg-cover bg-center flex items-center justify-center text-center px-6"
        style={{ backgroundImage: "url('/images/strategic-hero.jpg')" }}
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
            Strategic Planning
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.3, duration: 1 }}
            className="mt-4 text-lg md:text-xl max-w-2xl text-gray-300 mx-auto"
          >
            Great storytelling starts with a great strategy. We help you map purpose to production.
          </motion.p>
        </div>
      </section>

      {/* SERVICE BLOCKS */}
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

      {/* STRATEGIC MESSAGE */}
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
            Plan with Purpose
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed">
            Whether you're launching a documentary, a nonprofit campaign, or a brand story, every shot begins with a strategy.
            Let&apos;s collaborate on message, medium, and mission—then execute with cinematic impact.
          </p>
        </motion.div>
      </section>

      {/* CTA */}
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
            Let&apos;s Build a Story with Intention
          </h2>
          <p className="text-gray-300 text-lg mb-6">
            Partner with Trihood to design storytelling campaigns that move hearts and minds.
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

export default StrategicPlanningPage;
