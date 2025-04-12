import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // images: {
  //   remotePatterns: [
  //     {
  //       hostname: "res.cloudinary.com",
  //       protocol: "https",
  //     },
  //   ],
  // },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

export default nextConfig;
