"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/assets/trihood-logo.jpeg"; // adjust path if needed


const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About us" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/publishing-platforms", label: "Publishing Platforms" },
  { href: "/contact", label: "Contact us" },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Delay navbar only on homepage
    if (pathname === "/") {
      const timer = setTimeout(() => setShowNavbar(true), 3500);
      return () => clearTimeout(timer);
    } else {
      // Show immediately on other routes
      setShowNavbar(true);
    }
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!showNavbar) return null;

  return (
        <header className={`fixed top-0 w-full z-50 transition-colors ${
                scrolled ? "bg-black shadow-md" : "bg-black"
                }`}>
      <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="/">
           <Image
                src={Logo}
                alt="Trihood Films Logo"
                width={150}
                height={60}
                className="object-contain  w-[140px] h-auto"
                priority
  />
        </Link>

        <ul className="hidden md:flex space-x-8">
          {NAV_ITEMS.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className={`transition-colors ${
                  pathname === href
                    ? "text-blue-400 font-semibold"
                    : "text-white hover:text-blue-400"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <div className="h-0.5 w-6 bg-white mb-1"></div>
          <div className="h-0.5 w-6 bg-white mb-1"></div>
          <div className="h-0.5 w-6 bg-white"></div>
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-900 shadow-md overflow-hidden"
          >
            <ul className="flex flex-col p-4 space-y-4">
              {NAV_ITEMS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`block transition-colors ${
                      pathname === href
                        ? "text-blue-400 font-semibold"
                        : "text-white hover:text-blue-400"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
