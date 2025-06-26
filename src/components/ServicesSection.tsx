"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  {
    title: "Video Production",
    description: "From concept to screen—cinematic films, ads & visual storytelling.",
    video: "/videos/production-reel.mp4",
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

const fadeInVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const ServicesSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(1); // 1-based index

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const updateIndexOnScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const screenWidth = window.innerWidth;
      const newIndex = Math.round(scrollLeft / screenWidth) + 1;
      setCurrentIndex(newIndex);
    }
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener("scroll", updateIndexOnScroll);
      return () => {
        scrollElement.removeEventListener("scroll", updateIndexOnScroll);
      };
    }
  }, []);

  return (
    <div className="relative">
      {/* Scrollable Section */}
      <section
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth w-full scrollbar-hide"
      >
        {services.map((service, index) => {
          const cardRef = useRef(null);
          const inView = useInView(cardRef, { once: false });

          return (
            <Link key={index} href={service.link} passHref>
              <motion.div
                ref={cardRef}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeInVariant}
                className="relative min-w-[100vw] h-screen snap-center flex items-center justify-center overflow-hidden group"
              >
                {/* Background */}
                {service.video ? (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0"
                  >
                    <source src={service.video} type="video/mp4" />
                  </video>
                ) : (
                  <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 z-10 group-hover:bg-black/70 transition-all duration-300" />

                {/* Text */}
                <div className="relative z-20 max-w-3xl px-6 text-center">
                  <h2 className="text-5xl sm:text-6xl font-bold text-yellow-400 font-[var(--font-bree_serif)] mb-6 drop-shadow-md">
                    {service.title}
                  </h2>
                  <p className="text-lg sm:text-xl text-gray-300 font-[var(--font-scope_one)] mb-8">
                    {service.description}
                  </p>
                  <span className="inline-block text-yellow-300 text-sm font-[var(--font-kanit)] border-b border-yellow-300 hover:text-white hover:border-white transition-all duration-300">
                    Learn More →
                  </span>
                </div>
              </motion.div>
            </Link>
          );
        })}
      </section>

      {/* Arrows */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-black/50 hover:bg-black/70 p-3 rounded-full border border-yellow-400 text-yellow-300"
        onClick={() => scroll("left")}
      >
        <ChevronLeft size={28} />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-black/50 hover:bg-black/70 p-3 rounded-full border border-yellow-400 text-yellow-300"
        onClick={() => scroll("right")}
      >
        <ChevronRight size={28} />
      </button>

      {/* Custom Slide Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 bg-black/60 text-yellow-300 text-sm px-4 py-1 rounded-full border border-yellow-400 font-[var(--font-kanit)]">
        {currentIndex} / {services.length}
      </div>
    </div>
  );
};

export default ServicesSection;
