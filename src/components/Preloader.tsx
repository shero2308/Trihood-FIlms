// components/Preloader.tsx
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white"
        >
          <motion.h1
            initial={{ y: 100, opacity: 0 }} // start below
            animate={{ y: 0, opacity: 1 }}   // slide up and fade in
            exit={{ y: -50, opacity: 0 }}    // exit upward and fade
            transition={{ duration: 1 }}
            className="text-4xl font-bold tracking-widest"
          >
            TRIHOOD FILMS
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
