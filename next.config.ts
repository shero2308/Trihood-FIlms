import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["yourcdn.com"], // allow external images
  },
  output: "export", // important if deploying static build to Hostinger
};

export default nextConfig;