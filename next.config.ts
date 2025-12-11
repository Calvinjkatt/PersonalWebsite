import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',      // Tells Next.js to generate a static HTML site
  distDir: 'docs',       // Builds everything into the 'docs' folder for GitHub Pages
  basePath: '/PersonalWebsite', // Required since repo name is PersonalWebsite, not calvinjkatt.github.io
  images: {
    unoptimized: true,   // Essential for images to work on GitHub Pages
  },
  reactStrictMode: true,
};

export default nextConfig;

