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
    video: "/services/social-media.jpg",
    link: "/services/social-media-marketing",
  },
  {
    title: "Communication Management",
    description: "Clear, compelling communication across every platform.",
    video: "/services/communication.jpg",
    link: "/services/communication-management",
  },
  {
    title: "Strategic Planning",
    description: "Creative direction and content planning that aligns with your goals.",
    video: "/services/strategy.jpg",
    link: "/services/strategic-planning",
  },
  {
    title: "Branding Solutions",
    description: "Complete identity systems with a visual and narrative edge.",
    video: "/services/branding.jpg",
    link: "/services/branding-solutions",
  },
  {
    title: "Humanitarian Services",
    description: "Impact-driven media for NGOs and social organizations.",
    video: "/services/humanitarian.jpg",
    link: "/services/humanitarian-services",
  },
];

const fadeInVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

// ✅ Subcomponent to safely use `useInView`
const ServiceCard = ({
  service,
}: {
  service: {
    title: string;
    description: string;
    video?: string;
    link: string;
  };
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <Link href={service.link} passHref>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInVariant}
        className="relative min-w-[100vw] h-screen snap-center flex items-center justify-center overflow-hidden group cursor-pointer"
      >
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

        <div className="absolute inset-0 bg-black/60 z-10 group-hover:bg-black/70 transition-all duration-300" />

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
};

const ServicesSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(1);

  const updateIndexOnScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const screenWidth = window.innerWidth;
      const newIndex = Math.round(scrollLeft / screenWidth) + 1;
      setCurrentIndex(newIndex);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    el?.addEventListener("scroll", updateIndexOnScroll);
    return () => el?.removeEventListener("scroll", updateIndexOnScroll);
  }, []);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "left" ? -window.innerWidth : window.innerWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      <section
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth w-full scrollbar-hide"
      >
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </section>

      {/* Arrows */}
      {currentIndex > 1 && (
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-black/50 hover:bg-black/70 p-3 rounded-full border border-yellow-400 text-yellow-300"
          onClick={() => scroll("left")}
        >
          <ChevronLeft size={28} />
        </button>
      )}
      {currentIndex < services.length && (
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-black/50 hover:bg-black/70 p-3 rounded-full border border-yellow-400 text-yellow-300"
          onClick={() => scroll("right")}
        >
          <ChevronRight size={28} />
        </button>
      )}

      {/* Slide Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 bg-black/60 text-yellow-300 text-sm px-4 py-1 rounded-full border border-yellow-400 font-[var(--font-kanit)]">
        {currentIndex} / {services.length}
      </div>
    </div>
  );
};

export default ServicesSection;
