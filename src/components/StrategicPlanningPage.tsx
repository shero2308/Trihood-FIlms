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
    title: "Creative Strategy Development",
    description:
      "We align vision with storytelling—crafting message blueprints that elevate your brand and mission.",
    image: "/images/strategy-development.jpg",
  },
  {
    title: "Campaign Planning & Execution",
    description:
      "From pre-production briefs to final delivery, we design visual campaigns with purpose, clarity, and emotional impact.",
    image: "/images/campaign-planning.jpg",
  },
  {
    title: "Audience Insight & Positioning",
    description:
      "We decode your audience and position your message where it resonates—through content that connects.",
    image: "/images/audience-insight.jpg",
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
            Behind every visual masterpiece is a powerful strategy. We help you plan stories that move people.
          </motion.p>
        </div>
      </section>

      {/* SERVICE SECTIONS */}
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

      {/* MESSAGE SECTION */}
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
            Purpose-Driven Planning
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed">
            Great content starts with clarity. We collaborate with your team to turn your vision into actionable storyboards,
            strategic scripts, and content that inspires action. Let&apos;s chart your path to creative success.
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
            Let&apos;s Strategize Your Next Big Idea
          </h2>
          <p className="text-gray-300 text-lg mb-6">
            Connect with Trihood Films to plan campaigns that captivate, communicate, and convert.
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
