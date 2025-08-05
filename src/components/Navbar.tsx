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
      {
        href: "/services/video-production",
        label: "Video Production",
        children: [
          { href: "/services/video-production/digital-ad-films", label: "Digital/Ad Films" },
          { href: "/services/video-production/corporate-videos", label: "Corporate Videos" },
          { href: "/services/video-production/animated-videos", label: "Animated Videos" },
          { href: "/services/video-production/product-videos", label: "Product Videos" },
          { href: "/services/video-production/documentary-csr-videos", label: "Documentary & CSR Videos" },
          { href: "/services/video-production/training-videos", label: "Training Videos" },
        ],
      },
      { href: "/services/social-media-marketing", label: "Social Media Marketing" },
      { href: "/services/communication-management", label: "Communication Management" },
      { href: "/services/strategic-planning", label: "Strategic Planning" },
      { href: "/services/branding-solutions", label: "Branding Solutions" },
      { href: "/services/humanitarian-services", label: "Humanitarian Services" },
    ],
  },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/clients", label: "Clients" },
  { href: "/contact", label: "Join us" },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-colors duration-300 ${scrolled ? "bg-black/90 shadow-md backdrop-blur" : "bg-black/60"
        }`}
    >
      <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
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
                  >
                    <path d="M0 0l5 6 5-6H0z" />
                  </svg>
                </Link>

                {/* FIRST LEVEL DROPDOWN */}
                <ul className="absolute hidden group-hover:flex flex-col bg-black text-white p-2 rounded shadow-md top-full left-0 space-y-1 z-50 min-w-[220px]">
                  {item.subItems.map((sub) =>
                    sub.children ? (
                      // 👇 Each dropdown with children becomes a new group
                      <li key={sub.label} className="relative group/video">
                        <Link
                          href={sub.href}
                          className="flex items-center justify-between px-3 py-1 hover:text-[#fdb713] group-hover/video:text-[#fdb713] w-full"
                        >
                          {sub.label}
                          <svg
                            className="w-2 h-2 ml-2 fill-white group-hover/video:fill-[#fdb713]"
                            viewBox="0 0 6 10"
                          >
                            <path d="M0 0l6 5-6 5V0z" />
                          </svg>
                        </Link>
                        {/* Second-level submenu: show only on hover of the video group */}
                        <ul className="absolute top-0 left-full hidden group-hover/video:flex flex-col bg-black text-white p-2 rounded shadow-md space-y-1 min-w-[200px] z-50">
                          {sub.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                className={`px-3 py-1 whitespace-nowrap hover:text-[#fdb713] ${pathname === child.href ? "text-[#fdb713] font-semibold" : ""
                                  }`}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ) : (
                      <li key={sub.href}>
                        <Link
                          href={sub.href}
                          className={`px-3 py-1 whitespace-nowrap hover:text-[#fdb713] ${pathname === sub.href ? "text-[#fdb713] font-semibold" : ""
                            }`}
                        >
                          {sub.label}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </li>
            ) : (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`transition-colors ${pathname === item.href
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

        {/* Hamburger Icon */}
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
                        className={`w-3 h-3 fill-white transition-transform ${servicesOpen ? "rotate-180" : ""
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
                        {item.subItems.map((sub) =>
                          sub.children ? (
                            <li key={sub.label}>
                              <button
                                onClick={() => setVideoOpen(!videoOpen)}
                                className="flex items-center justify-between w-full text-white hover:text-[#fdb713]"
                              >
                                {sub.label}
                                <svg
                                  className={`w-3 h-3 fill-white transition-transform ${videoOpen ? "rotate-180" : ""
                                    }`}
                                  viewBox="0 0 10 6"
                                >
                                  <path d="M0 0l5 6 5-6H0z" />
                                </svg>
                              </button>
                              {videoOpen && (
                                <ul className="pl-4 mt-2 space-y-1">
                                  {sub.children.map((child) => (
                                    <li key={child.href}>
                                      <Link
                                        href={child.href}
                                        className="block text-white hover:text-[#fdb713]"
                                        onClick={() => setMobileOpen(false)}
                                      >
                                        {child.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ) : (
                            <li key={sub.href}>
                              <Link
                                href={sub.href}
                                className="block text-white hover:text-[#fdb713]"
                                onClick={() => setMobileOpen(false)}
                              >
                                {sub.label}
                              </Link>
                            </li>
                          )
                        )}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block text-white hover:text-[#fdb713]"
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
