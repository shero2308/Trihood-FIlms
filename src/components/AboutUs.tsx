"use client";

import Image from "next/image";
import React from "react";
import StoryImage from "@/assets/our_story.png";
import VisionImage from "@/assets/our_vision.png";
import MissionImage from "@/assets/our_mission.png";
import { motion } from "framer-motion";

const AboutUs = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={fadeInUp}
      className="bg-black text-white px-6 pt-32 pb-20 font-sans"
    >
      {/* Our Story Section (Full Page View) */}
      <section className="min-h-screen flex items-center justify-center">
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group overflow-hidden rounded-xl shadow-xl">
            <Image
              src={StoryImage}
              alt="Behind the scenes at Trihood Films"
              width={600}
              height={400}
              className="rounded-xl object-cover w-full h-[400px] group-hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6 text-[#fdb713]">Our Story</h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              Trihood Films was born out of a passion for visual storytelling and a fearless vision to challenge the ordinary. Our founders, <span className="text-white font-semibold">Shailesh</span> and <span className="text-white font-semibold">Rituraj Anand</span>, stepped into the industry driven by an undying love for cinema.
            </p>
            <p className="text-gray-400 text-base">
              What began as a solo dream has blossomed into a vibrant collective of filmmakers, creatives, and change-makers. Today, we’re not just a production house — we are creative partners for brands, NGOs, and institutions looking to share authentic, emotion-driven narratives.
            </p>
          </div>
        </div>
      </section>

      {/* Vision and Mission Cards */}
      <section className="max-w-7xl mx-auto mb-24 mt-32 grid md:grid-cols-2 gap-12">
        {/* Vision Card */}
        <motion.div
          variants={fadeInUp}
          className="bg-[#1a1a1a] rounded-xl shadow-xl overflow-hidden flex flex-col"
        >
          <Image
            src={VisionImage}
            alt="Vision"
            width={600}
            height={350}
            className="w-full h-[250px] object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-[#fdb713] mb-2">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed text-base">
              To become the most trusted and innovative storytellers in the ever-evolving world of visual communication.
            </p>
          </div>
        </motion.div>

        {/* Mission Card */}
        <motion.div
          variants={fadeInUp}
          className="bg-[#1a1a1a] rounded-xl shadow-xl overflow-hidden flex flex-col"
        >
          <Image
            src={MissionImage}
            alt="Mission"
            width={600}
            height={350}
            className="w-full h-[250px] object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-[#fdb713] mb-2">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed text-base">
              To stay bold, creative, and purpose-driven—turning ideas into impactful stories that engage hearts and elevate every brand we touch.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Director's Message */}
      <section className="max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-semibold text-[#fdb713] mb-4">Director’s Message</h3>
        <blockquote className="italic text-gray-400 mb-4 text-lg">“If opportunities don’t knock, build the door yourself.”</blockquote>
        <p className="text-gray-300 leading-relaxed text-lg">
          Hi, I’m <span className="text-white font-semibold">Shailesh</span>, a filmmaker, storyteller, and co-founder of Trihood Films. With years of experience in documentaries, corporate films, music videos, and development campaigns, I built Trihood Films alongside <span className="text-white font-semibold">Rituraj Anand</span> to amplify stories that truly matter. Let’s create something unforgettable together.
        </p>
      </section>
    </motion.div>
  );
};

export default AboutUs;
