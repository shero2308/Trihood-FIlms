"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const LayoutClientWrapper = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false, // 👈 animate every time it enters
      mirror: true, // 👈 animate on scroll-up too
    });
  }, []);

  return <>{children}</>;
};

export default LayoutClientWrapper;
