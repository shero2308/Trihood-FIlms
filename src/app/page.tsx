
//components
import Navbar from "@/components/Navbar";
import Parallax from "@/components/Parallax";
import Footer from "@/components/Footer";
import Mulltilayer_parallax from "@/components/Multilayer_parallax";
import Preloader from "@/components/Preloader";
import Hero from "@/components/Hero";

import Image from "next/image";
import * as motion from "motion/react-client"
import { Button } from "@mui/material";
import Link from "next/link";
import TelegramIcon from '@mui/icons-material/Telegram';

// Images
import scripted_content from "@/assets/scripted_content.png";
import cenemetic from "@/assets/cenemetic.png";
import target_audience from "@/assets/target_audience.png";
import homepic from "@/assets/homepic.png";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  const transition = {
    duration: 0.8,
    delay: 0.5,
    ease: [0, 0.71, 0.2, 1.01],
  }
  return (
    <div>
      <Preloader />
      <Navbar />
      <Hero />
      <AboutSection />
        <Footer />
      </div>
  );
}
