"use client";

import React, { useRef, useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const videoSubServices = [
  {
    title: "Digital/Ad Films",
    description: "Creative, engaging advertisements crafted to capture attention and drive results.",
    video: "/videos/digital-ad.mp4",
    link: "/services/video-production/digital-ad-films",
  },
  {
    title: "Corporate Videos",
    description: "Professional content that communicates your brand's vision and values.",
    video: "/videos/corporate.mp4",
    link: "/services/video-production/corporate-videos",
  },
  {
    title: "Animated Videos",
    description: "Motion graphics and animation to explain, entertain, or educate.",
    video: "/videos/animated.mp4",
    link: "/services/video-production/animated-videos",
  },
  {
    title: "Product Videos",
    description: "Showcase your product’s features and benefits with clarity and impact.",
    video: "/videos/product.mp4",
    link: "/services/video-production/product-videos",
  },
  {
    title: "Documentary & CSR Videos",
    description: "Authentic storytelling that highlights real impact and human stories.",
    video: "/videos/documentary.mp4",
    link: "/services/video-production/documentary-csr-videos",
  },
  {
    title: "Training Videos",
    description: "Clear, concise training materials to empower your teams or users.",
    video: "/videos/training.mp4",
    link: "/services/video-production/training-videos",
  },
];

const fadeInVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const VideoProductionSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(1);

  // ✅ Create refs and inViews using useMemo
  const cardRefs = useMemo(() => videoSubServices.map(() => React.createRef<HTMLDivElement>()), []);
  const inViews = cardRefs.map((ref) => useInView(ref, { once: false }));

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
    scrollElement?.addEventListener("scroll", updateIndexOnScroll);
    return () => scrollElement?.removeEventListener("scroll", updateIndexOnScroll);
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
        {videoSubServices.map((service, index) => (
          <Link key={index} href={service.link} passHref>
            <motion.div
              ref={cardRefs[index]}
              initial="hidden"
              animate={inViews[index] ? "visible" : "hidden"}
              variants={fadeInVariant}
              className="relative min-w-[100vw] h-screen snap-center flex items-center justify-center overflow-hidden group cursor-pointer"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
              >
                <source src={service.video} type="video/mp4" />
              </video>

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
      {currentIndex < videoSubServices.length && (
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-black/50 hover:bg-black/70 p-3 rounded-full border border-yellow-400 text-yellow-300"
          onClick={() => scroll("right")}
        >
          <ChevronRight size={28} />
        </button>
      )}

      {/* Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 bg-black/60 text-yellow-300 text-sm px-4 py-1 rounded-full border border-yellow-400 font-[var(--font-kanit)]">
        {currentIndex} / {videoSubServices.length}
      </div>
    </div>
  );
};

export default VideoProductionSection;
