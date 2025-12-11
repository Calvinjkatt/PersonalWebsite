import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Tells Next.js to generate a static site (HTML/CSS/JS)
  output: 'export',
  
  // This is required because your site is at /PersonalWebsite, not the root domain
  basePath: '/PersonalWebsite',
  
  // Required for images to work in static export
  images: {
    unoptimized: true,
  },

  // Performance optimizations
  reactStrictMode: true,
};

export default nextConfig;

