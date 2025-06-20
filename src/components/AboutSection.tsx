"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Eye, Target, MessageCircle } from "lucide-react";

const IconCard = ({
  icon,
  title,
  description,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className="text-center max-w-sm mx-auto p-4"
  >
    <div className="flex justify-center mb-4 text-[#fdb409] hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-xl tracking-wide font-bold text-white mb-2 uppercase">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
  </motion.div>
);

const AboutSection = () => {
  return (
    <section className="bg-black text-white py-16 md:py-24 px-6 font-sans relative overflow-hidden">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-[#fdb409] to-yellow-400 text-transparent bg-clip-text mb-4 uppercase">
          Our Story
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 italic">
          Capturing raw emotion — one frame at a time.
        </p>
      </motion.div>

      {/* About Content */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-20">
        {/* Left Text Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-[#fdb409] text-2xl font-semibold mb-6 tracking-wide uppercase">
            About Us
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            At <span className="font-semibold text-white">Trihood Films</span>, we believe stories are not just told — they are felt. Founded by <span className="text-white font-medium">Shailesh</span> and <span className="text-white font-medium">Rituraj Anand</span>, our journey began with a lens, a dream, and a desire to move hearts.
          </p>
          <p className="text-gray-400 text-base leading-relaxed">
            From independent films to brand stories, we capture the unseen — the emotion behind
            every frame, the silence between words, and the truth beyond the script.
          </p>
        </motion.div>

        {/* Right Image Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <Image
            src="/founders.png"
            alt="Trihood Films Founders"
            width={600}
            height={400}
            className="rounded-xl object-cover shadow-2xl hover:scale-105 transition-transform duration-500"
            priority
          />
        </motion.div>
      </div>

      {/* Vision, Mission, Director's Message */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        <IconCard
          icon={<Eye className="w-8 h-8" />}
          title="Vision"
          description="To illuminate the unspoken and explore themes of humanity, connection, and emotional truth."
          delay={0.1}
        />
        <IconCard
          icon={<Target className="w-8 h-8" />}
          title="Mission"
          description="To craft films that captivate, challenge norms, and leave a powerful visual impact."
          delay={0.2}
        />
        <IconCard
          icon={<MessageCircle className="w-8 h-8" />}
          title="Director’s Message"
          description="Let’s create something that resonates far beyond the screen — together."
          delay={0.3}
        />
      </div>
    </section>
  );
};

export default AboutSection;
