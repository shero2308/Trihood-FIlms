'use client' // This is a client-side component

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import bgImage from "@/assets/background.jpg";


export default function Parallax() {

    const { scrollY } = useScroll(); // Detects scroll position

  // Parallax effect: Move image slower than the scroll
     const y = useTransform(scrollY, [0, 300], [0, -100]);
    return (
        <div className="relative h-screen flex justify-center items-center bg-gray-900">
        {/* Parallax Background Image */}
        <motion.div 
          style={{ y }} 
          className="absolute top-0 left-0 w-full h-full"
        >
          <Image 
            src={bgImage} 
            alt="Parallax Background" 
            objectFit="cover" 
            className="opacity-80"
          />
        </motion.div>
  
        {/* Content on top of the parallax */}
        <div className="relative z-10 text-center text-white p-6">
          <h1 className="text-4xl sm:text-6xl font-kanit">Trihood Films</h1>
          <p className="text-lg sm:text-xl mt-4 font-scope-one">Creative Video Production Company</p>
          <p className=" text-2xl sm:text-3xl mt-10 font-bree-serif">Partner Brands</p>
        </div>
      </div>
            );
        }