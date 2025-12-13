import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',      // Tells Next.js to generate a static HTML site
  distDir: 'docs',       // Builds everything into the 'docs' folder for GitHub Pages
  // Only use basePath in production builds (GitHub Pages)
  // In dev mode, access at localhost:3000. In production, access at /PersonalWebsite
  basePath: process.env.NODE_ENV === 'production' ? '/PersonalWebsite' : '',
  images: {
    unoptimized: true,   // Essential for images to work on GitHub Pages
  },
  reactStrictMode: true,
};

export default nextConfig;

