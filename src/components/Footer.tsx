"use client";
import Link from "next/link";
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn'


export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        {/* Left Side - Brand Name */}
        <div className="mb-4 sm:mb-0 text-center sm:text-left">
          <h2 className="text-2xl font-bold">Trihood Films</h2>
          <p className="text-gray-400 text-sm">© 2025 All rights reserved.</p>
        </div>

        {/* Middle - Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-4 text-sm">
          <li><Link href="/about" className="hover:text-blue-400">About</Link></li>
          <li><Link href="/services" className="hover:text-blue-400">Services</Link></li>
          <li><Link href="/portfolio" className="hover:text-blue-400">Portfolio</Link></li>
          <li><Link href="/publishing-platform" className="hover:text-blue-400">Publishing Platform</Link></li>
          <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
        </ul>

        {/* Right Side - Social Icons */}
        <div className="flex gap-4 mt-4 sm:mt-0">
          <Link href="https://facebook.com" target="_blank"><FacebookIcon className="text-xl hover:text-blue-500" /></Link>
          <Link href="https://instagram.com" target="_blank"><InstagramIcon className="text-xl hover:text-pink-500" /></Link>
          <Link href="https://twitter.com" target="_blank"><XIcon className="text-xl hover:text-gray-500" /></Link>
          <Link href="https://youtube.com" target="_blank"><YouTubeIcon className="text-xl hover:text-red-500" /></Link>
          <Link href="https://youtube.com" target="_blank"><LinkedInIcon className="text-xl hover:text-blue-500" /></Link>
        </div>
      </div>
    </footer>
  );
}
