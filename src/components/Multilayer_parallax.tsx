"use client";

import React , { useRef } from "react";
import { motion , useScroll, useTransform } from "framer-motion";
import backImage from "@/assets/back.jpg";
import frontImage from "@/assets/fore.png";
import Image from "next/image";

export default function Multilayer_parallax() { 
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start","end start"]
    });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
    return (
        <div ref={ref}
        className="w-full h-screen overflow-hidden relative grid place-items-center">
            <motion.h1 
            style={{ y: textY }}
            className="text-8xl font-kanit relative sm:px-40 pb-80 z-10"> Parallax
            </motion.h1>
            <motion.div 
                style={{ y: backgroundY }}
                className="absolute inset-0 z-0">
                <Image src={backImage} alt="backImage" layout="fill" objectFit="cover" />
            </motion.div>
            <div className="absolute inset-0 z-20">
                <Image src={frontImage} alt="backImage" layout="fill" objectFit="cover" />
            </div>
        </div>
    );  
}