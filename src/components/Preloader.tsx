// components/Preloader.tsx
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [showText, setShowText] = useState<boolean>(false);

  useEffect(() => {
    // Step 1: Show text after GIF (2s delay — adjust if needed)
    const textTimer = setTimeout(() => setShowText(true), 2000); // ← match your GIF duration

    // Step 2: End preloader after full animation (GIF + text)
    const loadingTimer = setTimeout(() => setLoading(false), 3500); // ~GIF+text duration

    return () => {
      clearTimeout(textTimer);
      clearTimeout(loadingTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white"
        >
          {/* 🔁 GIF Animation */}
          <img
            src="/loader.gif"
            alt="Loading..."
            className="w-[100px] h-[100px] mb-6"
          />

          {/* ⏳ Delayed Text Animation */}
          {showText && (
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.9 }}
              className="text-4xl font-bold tracking-widest"
            >
              TRIHOOD FILMS
            </motion.h1>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
