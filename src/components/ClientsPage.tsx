"use client";

import { motion } from "framer-motion";

const CLIENT_LOGOS = [
  "/Clients/Ashoka University.png",
  "/Clients/Dabur_Logo.svg.png",
  "/Clients/delhi-police-logo-png_seeklogo-304814.png",
  "/Clients/Flag_of_Delhi_Capital_Territory.svg.png",
  "/Clients/hbmkglobal_logo.jpeg", 
  "/Clients/indian-oil-logo-png_seeklogo-198933.png",
  "/Clients/ITC.png",
  "/Clients/jiyo jaago foundation.png",
  "/Clients/kravio logo.png",
  "/Clients/punjab-national-bank-pnb-logo-png_seeklogo-386963.png",
  "/Clients/radhey publicity.png",
  "/Clients/sharda-university-logo-png_seeklogo-428233.png",
  "/Clients/skn-logo-e1684742053237.png",
  "/Clients/t-series-logo-png_seeklogo-310761.png",
  "/Clients/tata-power-logo-png_seeklogo-247891.png",
  "/Clients/United University.jpeg",
  "/Clients/urban farmer.png",
  "/Clients/vg-automotive-logo.png",
  "/Clients/Yes Bank.png",
];

// Simple fade-in animation
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

export default function ClientsPage() {
  return (
    <div className="w-full bg-black text-white font-sans overflow-hidden">

      {/* Add margin to avoid navbar overlap */}
      <div className="mt-32 text-center px-4">
        <motion.header
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h1
            className="text-3xl md:text-5xl font-bold"
            style={{ color: "#fdb713" }}
          >
            Our Clients
          </h1>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
            We’re proud to have collaborated with leading brands, NGOs, and creative partners.
          </p>
        </motion.header>
      </div>

      {/* Logo Grid */}
      <section className="mt-16 px-6 md:px-16">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 justify-items-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          {CLIENT_LOGOS.map((logo, index) => (
            <div
              key={index}
              className="bg-black border border-gray-700 rounded-lg flex items-center justify-center w-48 h-48 shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={logo}
                alt={`Client ${index + 1}`}
                className="max-h-32 max-w-40 object-contain"
              />
            </div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
