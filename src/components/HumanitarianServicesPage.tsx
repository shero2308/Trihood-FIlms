"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const sections = [
  {
    title: "Documentary-Style Visuals",
    description:
      "We capture human stories with empathy, elegance, and impact—crafted for NGOs, CSR, and global missions.",
    video: "/videos/humanitarian-doc.mp4",
  },
  {
    title: "Social Campaign Films",
    description:
      "Powerful short films and PSAs built to raise awareness, evoke emotion, and drive action.",
    video: "/videos/social-campaigns.mp4",
  },
  {
    title: "Grassroots Coverage",
    description:
      "On-ground filming of outreach, rural upliftment, and volunteer efforts in real environments.",
    video: "/videos/field-coverage.mp4",
  },
];

const HumanitarianServicesPage = () => {
  return (
    <main className="bg-black text-white font-sans">
      {/* HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden">
        <video
          src="/videos/humanitarian-hero.mp4"
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
            Humanitarian Services
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.3, duration: 1 }}
            className="mt-4 text-lg md:text-xl max-w-2xl text-gray-300"
          >
            Visual storytelling that inspires compassion, supports causes, and amplifies impact.
          </motion.p>
        </div>
      </section>

      {/* SERVICE BLOCKS */}
      {sections.map((block, idx) => (
        <section
          key={idx}
          className="relative h-screen flex items-center justify-center overflow-hidden text-center"
        >
          <video
            src={block.video}
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
                {block.title}
              </h2>
              <p className="text-gray-300 text-lg">{block.description}</p>
            </motion.div>
          </div>
        </section>
      ))}

      {/* APPROACH SECTION */}
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
            Stories That Stir the Soul
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed">
            From remote villages to refugee shelters, we work with organizations to bring their impact to life.
            Every frame is an opportunity to build empathy, support fundraising, and drive meaningful change.
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
            Let&apos;s Shine a Light on Humanity
          </h2>
          <p className="text-gray-300 text-lg mb-6">
            Partner with Trihood to tell powerful stories that matter. We bring the heart. You bring the cause.
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

export default HumanitarianServicesPage;
