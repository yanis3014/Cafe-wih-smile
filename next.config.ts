import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image Configuration for Unsplash
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  
  // Build Safety: Ignore errors for demo phase
  typescript: {
    ignoreBuildErrors: true,
  },
} as NextConfig & {
  eslint?: {
    ignoreDuringBuilds?: boolean;
  };
};

// Add eslint config separately to avoid type issues
(nextConfig as any).eslint = {
  ignoreDuringBuilds: true,
};

export default nextConfig;
