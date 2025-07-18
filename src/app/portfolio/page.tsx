"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideocamIcon from "@mui/icons-material/Videocam";
import ImageIcon from "@mui/icons-material/Image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const YOUTUBE_VIDEOS = [
  { id: "itli8isoXQQ", label: "Bhakti Music Shoot – Behind the Scenes" },
  { id: "7168SXKS0_c", label: "Corporate Brand Film Teaser" },
  { id: "UVeloGznItU", label: "NGO Impact Documentary Clip" },
];

const GALLERY_IMAGES = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
  "/images/gallery4.jpg",
  "/images/gallery5.jpg",
  "/images/gallery6.jpg",
];

const buildEmbedUrl = (id: string) =>
  `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&playsinline=1`;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
};

export default function Portfolio() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = window.innerWidth * 0.9;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Track active video
  useEffect(() => {
    const handleScroll = () => {
      if (!sliderRef.current) return;
      const scrollLeft = sliderRef.current.scrollLeft;
      const index = Math.round(scrollLeft / window.innerWidth);
      setActiveIndex(index);
    };

    sliderRef.current?.addEventListener("scroll", handleScroll);
    return () => {
      sliderRef.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full bg-black text-white font-sans overflow-hidden pt-24">

      <Navbar />

      {/* HERO TITLE */}
      <motion.header
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="flex flex-col items-center pt-20 text-center px-4"
      >
        <h1
          className="font-kanit text-xl md:text-3xl lg:text-5xl flex items-center gap-2"
          style={{ color: "#fdb713" }}
        >
          Our Creative Portfolio <VideocamIcon fontSize="large" />
        </h1>
        <p className="font-kanit text-lg md:text-2xl lg:text-3xl mt-5 italic max-w-3xl text-gray-300">
          Swipe or use arrows to explore our cinematic projects.
        </p>
      </motion.header>

      {/* VIDEO SLIDER */}
      <section className="relative mt-10">
        {/* Arrows */}
        {activeIndex > 0 && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black p-3 rounded-full"
            style={{ color: "#fdb713" }}
          >
            <ChevronLeft size={32} />
          </button>
        )}
        {activeIndex < YOUTUBE_VIDEOS.length - 1 && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black p-3 rounded-full"
            style={{ color: "#fdb713" }}
          >
            <ChevronRight size={32} />
          </button>
        )}

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex overflow-x-auto snap-x snap-mandatory w-screen h-[90vh] scrollbar-hide scroll-smooth"
        >
          {YOUTUBE_VIDEOS.map((vid, index) => (
            <motion.div
              key={index}
              variants={zoomIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex-shrink-0 w-screen h-full snap-center flex items-center justify-center"
            >
              <div className="w-[80vw] h-[80vh] bg-black rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
                <iframe
                  src={buildEmbedUrl(vid.id)}
                  title={vid.label}
                  className="w-full h-full object-cover rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* IMAGE GALLERY */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ once: true }}
        className="mt-24 px-4 md:px-10 lg:px-20"
      >
        <h2
          className="text-3xl md:text-4xl font-bold mb-8 text-center flex items-center justify-center gap-2"
          style={{ color: "#fdb713" }}
        >
          Photo Gallery <ImageIcon fontSize="large" />
        </h2>
        <div className="grid grid-cols-3 gap-4">
          {GALLERY_IMAGES.map((img, index) => (
            <motion.div
              key={index}
              variants={zoomIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="overflow-hidden rounded-lg shadow-lg group relative"
            >
              <img
                src={img}
                alt={`Portfolio image ${index + 1}`}
                className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
