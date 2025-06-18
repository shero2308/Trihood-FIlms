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
  {
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

  const [servicesOpen, setServicesOpen] = useState(false); // for mobile dropdown

  if (!showNavbar) return null;

  return (
    <header className={`fixed top-0 w-full z-50 transition-colors ${scrolled ? "bg-black shadow-md" : "bg-black"
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

        { /* Desktop navigation items */}

        <ul className="hidden md:flex space-x-8 relative">
          {NAV_ITEMS.map((item) =>
            item.subItems ? (
              <li key={item.label} className="relative group">
                <span className="flex items-center gap-1 cursor-pointer text-white hover:text-blue-400">
                  {item.label}
                  <svg className="w-3 h-3 fill-white group-hover:fill-blue-400 transition" viewBox="0 0 10 6">
                    <path d="M0 0l5 6 5-6H0z" />
                  </svg>
                </span>
                <ul className="absolute hidden group-hover:flex flex-col bg-black text-white p-2 rounded shadow-md top-full left-0 space-y-1 z-50">
                  {item.subItems.map((sub) => (
                    <li key={sub.href}>
                      <Link
                        href={sub.href}
                        className={`hover:text-blue-400 px-3 py-1 whitespace-nowrap ${pathname === sub.href ? "text-blue-400 font-semibold" : ""
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
                  className={`transition-colors ${pathname === item.href
                      ? "text-blue-400 font-semibold"
                      : "text-white hover:text-blue-400"
                    }`}
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>

        { /* Mobile menu button */}

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
      className="md:hidden bg-black shadow-md overflow-hidden"
    >
      <ul className="flex flex-col p-4 space-y-4">
        {NAV_ITEMS.map((item) =>
          item.subItems ? (
            <li key={item.label}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between w-full text-white hover:text-blue-400"
              >
                {item.label}
                <svg
                  className={`w-3 h-3 fill-white transition-transform ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 10 6"
                >
                  <path d="M0 0l5 6 5-6H0z" />
                </svg>
              </button>
              {servicesOpen && (
                <ul className="pl-4 mt-2 space-y-2">
                  {item.subItems.map((sub) => (
                    <li key={sub.href}>
                      <Link
                        href={sub.href}
                        onClick={() => setMobileOpen(false)}
                        className={`block text-white hover:text-blue-400 ${
                          pathname === sub.href
                            ? "text-blue-400 font-semibold"
                            : ""
                        }`}
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
                className={`block text-white hover:text-blue-400 ${
                  pathname === item.href
                    ? "text-blue-400 font-semibold"
                    : ""
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
      { /* End of mobile menu */}
    </header>
  );
};

export default Navbar;
