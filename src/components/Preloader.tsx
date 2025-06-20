"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const textTimer = setTimeout(() => setShowText(true), 2000);
    const loadingTimer = setTimeout(() => setLoading(false), 3500);

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
          {/* ✅ Optimized GIF using next/image */}
          <Image
            src="/loader.gif"
            alt="Loading..."
            width={100}
            height={100}
            className="mb-6"
            priority
          />

          {/* ✨ Delayed Title Text */}
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
