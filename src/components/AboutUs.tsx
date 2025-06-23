"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import StoryImage from "@/assets/our_story.png";
import VisionImage from "@/assets/our_vision.png";
import MissionImage from "@/assets/our_mission.png";
import RiturajImage from "@/assets/rituraj.png";
import ShaileshImage from "@/assets/shailesh.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const, // ✅ fix for TypeScript
    },
  },
};

const AboutUs = () => {
  return (
    <div className="bg-black text-white font-sans px-4 sm:px-6 pt-20 pb-20">

      {/* Our Story Section */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="min-h-screen flex items-center justify-center"
      >
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
          <div className="relative overflow-hidden rounded-xl shadow-xl transition-transform duration-300 hover:scale-[1.02]">
            <Image
              src={StoryImage}
              alt="Trihood Films Story"
              width={900}
              height={1000}
              className="rounded-xl object-cover w-full h-[600px]"
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
      </motion.section>

      {/* Vision and Mission */}
      <section className="max-w-7xl mx-auto mt-32 grid md:grid-cols-2 gap-12">
        {[{
          title: "Our Vision",
          image: VisionImage,
          desc: "To become the most trusted and innovative storytellers in the ever-evolving world of visual communication."
        },
        {
          title: "Our Mission",
          image: MissionImage,
          desc: "To stay bold, creative, and purpose-driven—turning ideas into impactful stories that engage hearts and elevate every brand we touch."
        }].map((item, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-[#111111] rounded-xl shadow-xl overflow-hidden flex flex-col transition-transform duration-300 hover:scale-[1.02]"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={700}
              height={400}
              className="w-full h-[300px] object-cover"
            />
            <div className="p-8 flex-grow">
              <h3 className="text-2xl md:text-3xl font-semibold text-[#fdb713] mb-3">{item.title}</h3>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </section>
      {/* Directors Section */}
      <section className="max-w-7xl mx-auto mt-32 px-4 sm:px-6">
        <motion.h3
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-center text-[#fdb713] mb-12"
        >
          Meet Our Directors
        </motion.h3>

        <div className="grid md:grid-cols-2 gap-12">
          {[{
            name: "Rituraj Anand",
            quote: `"Ideas don’t just speak — they inspire change."`,
            bio: `As a co-founder of Trihood Films, Rituraj brings a sharp visual eye and deep experience in creative direction. His expertise lies in orchestrating compelling visuals that elevate stories and bring out raw emotion through the lens.`,
            image: RiturajImage,
            links: {
              instagram: "https://instagram.com",
              facebook: "https://facebook.com"
            }
          }, {
            name: "Shailesh",
            quote: `"If opportunities don’t knock, build the door yourself."`,
            bio: `Shailesh is a filmmaker and visionary co-founder of Trihood Films. With a rich portfolio in documentaries, music videos, and brand campaigns, he’s driven by the power of storytelling to connect, inspire, and make a difference.`,
            image: ShaileshImage,
            links: {
              instagram: "https://instagram.com",
              facebook: "https://facebook.com"
            }
          }].map((director, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="bg-[#1a1a1a] rounded-xl shadow-xl overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
            >
              <Image
                src={director.image}
                alt={director.name}
                width={600}
                height={400}
                className="w-full h-[300px] object-cover"
              />
              <div className="p-6">
                <h4 className="text-2xl font-bold text-[#fdb713] mb-2">{director.name}</h4>
                <p className="text-gray-300 italic mb-3">{director.quote}</p>
                <p className="text-gray-400 text-sm md:text-base">{director.bio}</p>
                <div className="flex gap-4 mt-4">
                  <a href={director.links.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-[#fdb713] transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm4.25 3a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5Zm0 1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5Zm5-1.38a.88.88 0 1 1-1.76 0a.88.88 0 0 1 1.76 0Z" /></svg>
                  </a>
                  <a href={director.links.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-[#fdb713] transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14.5 3H9.5A6.5 6.5 0 0 0 3 9.5v5A6.5 6.5 0 0 0 9.5 21h5A6.5 6.5 0 0 0 21 14.5v-5A6.5 6.5 0 0 0 14.5 3Zm-.25 4.5h.75a.75.75 0 0 1 0 1.5h-.75c-.41 0-.75.34-.75.75V11h1.5a.75.75 0 0 1 0 1.5h-1.5v4.25a.75.75 0 0 1-1.5 0V12.5h-1a.75.75 0 0 1 0-1.5h1v-1.25A2.25 2.25 0 0 1 14.25 7.5Z" /></svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
