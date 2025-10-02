import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // 🔥 Important for next export
  },
  output: "export",
};

export default nextConfig;
