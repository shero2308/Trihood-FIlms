"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/assets/trihood-logo.png";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About us" },
  {
    href: "/services",
    label: "Services",
    subItems: [
      { href: "/services/branding", label: "Branding" },
      { href: "/services/web-design", label: "Web Design" },
      { href: "/services/advertising", label: "Advertising" },
      { href: "/services/consulting", label: "Consulting" },
    ],
  },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/publishing-platforms", label: "Clients" },
  { href: "/contact", label: "Join us" },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") {
      const timer = setTimeout(() => setShowNavbar(true), 3500);
      return () => clearTimeout(timer);
    } else {
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
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-colors duration-300 ${
        scrolled ? "bg-black/90 shadow-md backdrop-blur" : "bg-black/60"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src={Logo}
            alt="Trihood Films Logo"
            width={150}
            height={60}
            className="object-contain w-[140px] h-auto"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center">
          {NAV_ITEMS.map((item) =>
            item.subItems ? (
              <li key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-white hover:text-[#fdb713]"
                >
                  {item.label}
                  <svg
                    className="w-3 h-3 fill-white group-hover:fill-[#fdb713] transition"
                    viewBox="0 0 10 6"
                    aria-hidden="true"
                  >
                    <path d="M0 0l5 6 5-6H0z" />
                  </svg>
                </Link>
                <ul className="absolute hidden group-hover:flex flex-col bg-black text-white p-2 rounded shadow-md top-full left-0 space-y-1 z-50">
                  {item.subItems.map((sub) => (
                    <li key={sub.href}>
                      <Link
                        href={sub.href}
                        className={`hover:text-[#fdb713] px-3 py-1 whitespace-nowrap ${
                          pathname === sub.href ? "text-[#fdb713] font-semibold" : ""
                        }`}
                      >
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`transition-colors ${
                    pathname === item.href
                      ? "text-[#fdb713] font-semibold"
                      : "text-white hover:text-[#fdb713]"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Hamburger Icon (Mobile) */}
        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          <div className="h-0.5 w-6 bg-white mb-1" />
          <div className="h-0.5 w-6 bg-white mb-1" />
          <div className="h-0.5 w-6 bg-white" />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black shadow-md overflow-hidden"
          >
            <ul className="flex flex-col p-4 space-y-4">
              {NAV_ITEMS.map((item) =>
                item.subItems ? (
                  <li key={item.label}>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="flex items-center justify-between w-full text-white hover:text-[#fdb713]"
                    >
                      {item.label}
                      <svg
                        className={`w-3 h-3 fill-white transition-transform ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                        viewBox="0 0 10 6"
                        aria-hidden="true"
                      >
                        <path d="M0 0l5 6 5-6H0z" />
                      </svg>
                    </button>
                    {servicesOpen && (
                      <ul className="pl-4 mt-2 space-y-2">
                        <li>
                          <Link
                            href={item.href}
                            className="block text-white hover:text-[#fdb713]"
                            onClick={() => setMobileOpen(false)}
                          >
                            All Services
                          </Link>
                        </li>
                        {item.subItems.map((sub) => (
                          <li key={sub.href}>
                            <Link
                              href={sub.href}
                              className={`block text-white hover:text-[#fdb713] ${
                                pathname === sub.href ? "text-[#fdb713] font-semibold" : ""
                              }`}
                              onClick={() => setMobileOpen(false)}
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block text-white hover:text-[#fdb713] ${
                        pathname === item.href ? "text-[#fdb713] font-semibold" : ""
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
