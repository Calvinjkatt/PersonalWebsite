import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',      // Tells Next.js to generate a static HTML site
  distDir: 'docs',       // Builds everything into the 'docs' folder for GitHub Pages
  // Always use basePath for GitHub Pages deployment
  basePath: '/PersonalWebsite',
  images: {
    unoptimized: true,   // Essential for images to work on GitHub Pages
  },
  reactStrictMode: true,
};

export default nextConfig;

