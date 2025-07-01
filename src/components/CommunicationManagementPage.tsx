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
    title: "End-to-End Client Communication",
    description:
      "We handle all client interactions—from first inquiry to final delivery—so you can focus on creating.",
    video: "/videos/client-communication.mp4",
  },
  {
    title: "Workflow & Scheduling",
    description:
      "Never miss a beat. We manage shoots, edits, and approvals using efficient calendar-based workflows.",
    video: "/videos/scheduling.mp4",
  },
  {
    title: "Feedback Handling",
    description:
      "We streamline client feedback and revisions with clear communication protocols and version control.",
    video: "/videos/feedback-management.mp4",
  },
];

const CommunicationManagementPage = () => {
  return (
    <main className="bg-black text-white font-sans">
      {/* HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden">
        <video
          src="/videos/communication-hero.mp4"
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
            Communication Management
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.3, duration: 1 }}
            className="mt-4 text-lg md:text-xl max-w-2xl text-gray-300"
          >
            Clear, consistent and professional communication from first call to final cut.
          </motion.p>
        </div>
      </section>

      {/* SECTION BLOCKS */}
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
            Built for Creatives Who Hate Admin
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed">
            We bring structure to creative chaos. Our systems ensure no message goes unanswered,
            no feedback gets lost, and every project stays on track with clarity and professionalism.
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
            Ready to Free Up Your Creative Time?
          </h2>
          <p className="text-gray-300 text-lg mb-6">
            Let us manage the inbox so you can focus on the lens.
            Reach out today and streamline your entire communication pipeline.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-all"
            style={{
              backgroundColor: "#fdb713",
              color: "black",
            }}
          >
            Talk to Us <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
      </section>
    </main>
  );
};

export default CommunicationManagementPage;
