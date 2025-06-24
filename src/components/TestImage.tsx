// src/components/TestImage.tsx
"use client";
import Image from "next/image";
import React from "react";

const TestImage = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="relative w-[400px] h-[300px] border-4 border-red-500">
        <Image
          src="/services/video-production.png"
          alt="Video Production Test"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
};

export default TestImage; // ✅ This is a default export
