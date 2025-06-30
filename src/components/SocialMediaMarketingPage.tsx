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
    title: "Reels & Shorts Production",
    description:
      "High-impact cinematic content that captures attention in under 15 seconds.",
    video: "/videos/reels-showcase.mp4",
  },
  {
    title: "Instagram Growth Strategy",
    description:
      "We help you trend with content calendars, reels planning, and trend-optimized posting.",
    video: "/videos/instagram-strategy.mp4",
  },
  {
    title: "Brand Identity & Design",
    description:
      "Scroll-stopping carousels, reels covers, and stories that reflect your brand aesthetic.",
    video: "/videos/brand-identity.mp4",
  },
];

const SocialMediaMarketingPage = () => {
  return (
    <main className="bg-black text-white font-sans">
      {/* HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden">
        <video
          src="/videos/social-media-hero.mp4"
          autoPlay
          muted
          loop
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
            Social Media Marketing
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.3, duration: 1 }}
            className="mt-4 text-lg md:text-xl max-w-2xl text-gray-300"
          >
            Reels, strategy & storytelling tailored for maximum digital impact.
          </motion.p>
        </div>
      </section>

      {/* SERVICE FULLSCREEN CARDS */}
      {services.map((service, idx) => (
        <section
          key={idx}
          className="relative h-screen flex items-center justify-center overflow-hidden text-center"
        >
          <video
            src={service.video}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-3xl"
            >
              <h2
                className="text-3xl md:text-5xl font-semibold mb-4"
                style={{ color: "#fdb713" }}
              >
                {service.title}
              </h2>
              <p className="text-gray-300 text-lg">{service.description}</p>
            </motion.div>
          </div>
        </section>
      ))}

      {/* STRATEGY SECTION */}
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
            The Trihood Approach
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed">
            We merge visual storytelling with digital strategy. Our team curates
            a content pipeline that blends engagement, design, and platform fluency.
            From production to posting—we make content that moves.
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
            Ready to Go Viral?
          </h2>
          <p className="text-gray-300 text-lg mb-6">
            Let’s craft cinematic stories that resonate with your audience and push your brand forward.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-all"
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

export default SocialMediaMarketingPage;
