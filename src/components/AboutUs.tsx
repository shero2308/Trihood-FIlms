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
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
      className="bg-black text-white px-4 sm:px-6 pt-32 pb-20 font-sans"
    >
      {/* Our Story Section (Full Page View) */}
      <section className="min-h-screen flex items-center justify-center">
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group overflow-hidden rounded-xl shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
            <Image
              src={StoryImage}
              alt="Cinematic behind-the-scenes at Trihood Films"
              width={600}
              height={400}
              className="rounded-xl object-cover w-full h-[400px] group-hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#fdb713]">Our Story</h2>
            <p className="text-gray-300 leading-relaxed text-base md:text-lg mb-4">
              Trihood Films was born out of a passion for visual storytelling and a fearless vision to challenge the ordinary. Our founders, <span className="text-white font-semibold">Shailesh</span> and <span className="text-white font-semibold">Rituraj Anand</span>, stepped into the industry driven by an undying love for cinema.
            </p>
            <p className="text-gray-400 text-sm md:text-base">
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
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="bg-[#1a1a1a] rounded-xl shadow-xl overflow-hidden flex flex-col transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
        >
          <Image
            src={VisionImage}
            alt="Illustration representing our vision of storytelling"
            width={600}
            height={350}
            className="w-full h-[250px] object-cover"
            loading="lazy"
          />
          <div className="p-6">
            <h3 className="text-xl md:text-2xl font-semibold text-[#fdb713] mb-2">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              To become the most trusted and innovative storytellers in the ever-evolving world of visual communication.
            </p>
          </div>
        </motion.div>

        {/* Mission Card */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="bg-[#1a1a1a] rounded-xl shadow-xl overflow-hidden flex flex-col transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
        >
          <Image
            src={MissionImage}
            alt="Mission"
            width={600}
            height={350}
            className="w-full h-[250px] object-cover"
          />

          <div className="p-6">
            <h3 className="text-xl md:text-2xl font-semibold text-[#fdb713] mb-2">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              To stay bold, creative, and purpose-driven—turning ideas into impactful stories that engage hearts and elevate every brand we touch.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Director's Message */}
      <section className="max-w-7xl mx-auto mt-20 px-4 sm:px-6">
        <h3 className="text-3xl md:text-4xl font-semibold text-center text-[#fdb713] mb-12">
          Meet Our Directors
        </h3>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Rituraj Anand Card */}
          <div className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
            <Image
              src="/directors/rituraj.png" // Replace with your actual image path
              alt="Rituraj Anand - Director at Trihood Films"
              width={600}
              height={400}
              className="w-full h-[300px] object-cover"
            />
            <div className="p-6">
              <h4 className="text-2xl font-bold text-[#fdb713] mb-2">Rituraj Anand</h4>
              <p className="text-gray-300 italic mb-3">"Ideas don’t just speak — they inspire change."</p>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                As a co-founder of Trihood Films, Rituraj brings a sharp visual eye and deep experience in creative direction. His expertise lies in orchestrating compelling visuals that elevate stories and bring out raw emotion through the lens.
              </p>
              {/* Social Links */}
              <div className="flex gap-4 mt-4">
                <a
                  href="https://instagram.com/rituraj.anand" // Replace with actual link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#fdb713] transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm4.25 3a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5Zm0 1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5Zm5-1.38a.88.88 0 1 1-1.76 0a.88.88 0 0 1 1.76 0Z" />
                  </svg>
                </a>
                <a
                  href="https://facebook.com/rituraj.anand"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#fdb713] transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.5 3H9.5A6.5 6.5 0 0 0 3 9.5v5A6.5 6.5 0 0 0 9.5 21h5A6.5 6.5 0 0 0 21 14.5v-5A6.5 6.5 0 0 0 14.5 3Zm-.25 4.5h.75a.75.75 0 0 1 0 1.5h-.75c-.41 0-.75.34-.75.75V11h1.5a.75.75 0 0 1 0 1.5h-1.5v4.25a.75.75 0 0 1-1.5 0V12.5h-1a.75.75 0 0 1 0-1.5h1v-1.25A2.25 2.25 0 0 1 14.25 7.5Z" />
                  </svg>
                </a>
              </div>

            </div>
          </div>

          {/* Shailesh Card */}
          <div className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
            <Image
              src="/directors/shailesh.png" // Replace with your actual image path
              alt="Shailesh - Director at Trihood Films"
              width={600}
              height={400}
              className="w-full h-[300px] object-cover"
            />
            <div className="p-6">
              <h4 className="text-2xl font-bold text-[#fdb713] mb-2">Shailesh</h4>
              <p className="text-gray-300 italic mb-3">"If opportunities don’t knock, build the door yourself."</p>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                Shailesh is a filmmaker and visionary co-founder of Trihood Films. With a rich portfolio in documentaries, music videos, and brand campaigns, he’s driven by the power of storytelling to connect, inspire, and make a difference.
              </p>
              {/* Social Links */}
              <div className="flex gap-4 mt-4">
                <a
                  href="https://instagram.com/rituraj.anand" // Replace with actual link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#fdb713] transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm4.25 3a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5Zm0 1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5Zm5-1.38a.88.88 0 1 1-1.76 0a.88.88 0 0 1 1.76 0Z" />
                  </svg>
                </a>
                <a
                  href="https://facebook.com/rituraj.anand"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#fdb713] transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.5 3H9.5A6.5 6.5 0 0 0 3 9.5v5A6.5 6.5 0 0 0 9.5 21h5A6.5 6.5 0 0 0 21 14.5v-5A6.5 6.5 0 0 0 14.5 3Zm-.25 4.5h.75a.75.75 0 0 1 0 1.5h-.75c-.41 0-.75.34-.75.75V11h1.5a.75.75 0 0 1 0 1.5h-1.5v4.25a.75.75 0 0 1-1.5 0V12.5h-1a.75.75 0 0 1 0-1.5h1v-1.25A2.25 2.25 0 0 1 14.25 7.5Z" />
                  </svg>
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

    </motion.div>
  );
};

export default AboutUs;
