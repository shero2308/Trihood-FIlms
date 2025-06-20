"use client";

import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaYoutube, FaFacebookF, FaLinkedinIn, FaArrowUp } from "react-icons/fa";
import Logo from "@/assets/trihood-logo.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white px-6 py-16 border-t border-gray-800 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* LOGO + TAGLINE */}
        <div>
          <Image src={Logo} alt="Trihood Films Logo" width={150} className="mb-4" />
          <p className="text-sm text-gray-400 leading-relaxed">
            Capturing raw emotions & timeless stories — one frame at a time.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-[#fdb713] font-semibold text-lg mb-4 uppercase tracking-wider">Explore</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/" className="hover:text-[#fdb713] transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-[#fdb713] transition">About Us</Link></li>
            <li><Link href="/services" className="hover:text-[#fdb713] transition">Services</Link></li>
            <li><Link href="/portfolio" className="hover:text-[#fdb713] transition">Portfolio</Link></li>
            <li><Link href="/publishing-platforms" className="hover:text-[#fdb713] transition">Clients</Link></li>
            <li><Link href="/contact" className="hover:text-[#fdb713] transition">Join Us</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-[#fdb713] font-semibold text-lg mb-4 uppercase tracking-wider">Contact</h4>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>Email: <a href="mailto:info@trihoodfilms.com" className="hover:text-[#fdb713] transition">info@trihoodfilms.com</a></li>
            <li>Phone: <a href="tel:+919999999999" className="hover:text-[#fdb713] transition">+91 99999 99999</a></li>
            <li>Location: Mumbai, India</li>
          </ul>
        </div>

        {/* SOCIAL LINKS */}
        <div>
          <h4 className="text-[#fdb713] font-semibold text-lg mb-4 uppercase tracking-wider">Follow Us</h4>
          <div className="flex space-x-4 text-xl">
            <a href="https://instagram.com" target="_blank" className="hover:text-[#fdb713] transition hover:scale-110">
              <FaInstagram />
            </a>
            <a href="https://youtube.com" target="_blank" className="hover:text-[#fdb713] transition hover:scale-110">
              <FaYoutube />
            </a>
            <a href="https://facebook.com" target="_blank" className="hover:text-[#fdb713] transition hover:scale-110">
              <FaFacebookF />
            </a>
            <a href="https://linkedin.com" target="_blank" className="hover:text-[#fdb713] transition hover:scale-110">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT + SCROLL-UP */}
      <div className="relative mt-12 pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Trihood Films. All rights reserved.

        <button
          onClick={scrollToTop}
          className="absolute right-6 top-1/2 -translate-y-1/2 text-[#fdb713] hover:text-white transition duration-300"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
