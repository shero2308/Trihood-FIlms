"use client";

import React from "react";
import Link from "next/link";

const services = [
  {
    title: "Video Production",
    description: "From concept to screen—cinematic films, ads & visual storytelling.",
    image: "/services/video-production.png",
    link: "/services/video-production",
  },
  {
    title: "Social Media Marketing",
    description: "Tailored strategy and content to grow your brand online.",
    image: "/services/social-media.jpg",
    link: "/services/social-media-marketing",
  },
  {
    title: "Communication Management",
    description: "Clear, compelling communication across every platform.",
    image: "/services/communication.jpg",
    link: "/services/communication-management",
  },
  {
    title: "Strategic Planning",
    description: "Creative direction and content planning that aligns with your goals.",
    image: "/services/strategy.jpg",
    link: "/services/strategic-planning",
  },
  {
    title: "Branding Solutions",
    description: "Complete identity systems with a visual and narrative edge.",
    image: "/services/branding.jpg",
    link: "/services/branding-solutions",
  },
  {
    title: "Humanitarian Services",
    description: "Impact-driven media for NGOs and social organizations.",
    image: "/services/humanitarian.jpg",
    link: "/services/humanitarian-services",
  },
];

const ServicesSection = () => (
  <section className="bg-black text-white font-[var(--font-roboto)]">
    {services.map((service, index) => (
      <Link key={index} href={service.link}>
        <div
          className="relative w-full h-screen bg-cover bg-center flex items-center justify-center overflow-hidden group"
          style={{ backgroundImage: `url(${service.image})` }}
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
          data-aos-delay={index * 100}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 z-10 transition-all duration-300 group-hover:bg-black/70" />

          {/* Text Content */}
          <div
            className="relative z-20 max-w-3xl px-6 text-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h2 className="text-5xl sm:text-6xl font-bold text-yellow-400 font-[var(--font-bree_serif)] mb-6 drop-shadow-md">
              {service.title}
            </h2>
            <p
              className="text-lg sm:text-xl text-gray-300 font-[var(--font-scope_one)] mb-8"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              {service.description}
            </p>
            <span
              className="inline-block text-yellow-300 text-sm font-[var(--font-kanit)] border-b border-yellow-300 hover:text-white hover:border-white transition-all duration-300"
              data-aos="zoom-in"
              data-aos-delay="700"
            >
              Learn More →
            </span>
          </div>
        </div>
      </Link>
    ))}
  </section>
);

export default ServicesSection;
