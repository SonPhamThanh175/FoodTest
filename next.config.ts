import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true, // 👈 Tắt eslint khi build
  },
};

export default nextConfig;
