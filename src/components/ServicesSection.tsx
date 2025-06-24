"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Video Production",
    image: "/services/video-production.png",
    link: "/services/video-production",
  },
  {
    title: "Social Media Marketing",
    image: "/services/social-media.jpg",
    link: "/services/social-media-marketing",
  },
  {
    title: "Communication Management",
    image: "/services/communication.jpg",
    link: "/services/communication-management",
  },
  {
    title: "Strategic Planning",
    image: "/services/strategy.jpg",
    link: "/services/strategic-planning",
  },
  {
    title: "Branding Solutions",
    image: "/services/branding.jpg",
    link: "/services/branding-solutions",
  },
  {
    title: "Humanitarian Services",
    image: "/services/humanitarian.jpg",
    link: "/services/humanitarian-services",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-400">
          What We Offer
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Elevating brands through storytelling, visuals, and strategy.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <Link key={index} href={service.link}>
            <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
              <div className="relative w-full h-60">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={index === 0}
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-yellow-400">
                  {service.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
