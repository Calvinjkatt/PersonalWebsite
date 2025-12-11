import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Tells Next.js to generate a static site (HTML/CSS/JS)
  output: 'export',
  
  // Build output directory - GitHub Pages looks at 'docs' folder
  distDir: 'docs',
  
  // Only use basePath for production builds (GitHub Pages), not in development
  // In dev mode, access at localhost:3000. In production, access at /PersonalWebsite
  basePath: process.env.NODE_ENV === 'production' ? '/PersonalWebsite' : '',
  
  // Required for images to work in static export
  images: {
    unoptimized: true,
  },

  // Performance optimizations
  reactStrictMode: true,
};

export default nextConfig;

