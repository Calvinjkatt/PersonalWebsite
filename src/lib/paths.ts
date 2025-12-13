/**
 * Utility to get the correct base path for assets
 * In development: returns empty string (paths work from root)
 * In production: returns '/PersonalWebsite' for GitHub Pages
 */
export function getBasePath(): string {
  // In development, basePath is empty
  // In production builds, basePath is '/PersonalWebsite'
  // Next.js sets this automatically, but we need to handle it for static exports
  if (typeof window !== 'undefined') {
    // Client-side: check if we're on GitHub Pages
    const pathname = window.location.pathname;
    if (pathname.startsWith('/PersonalWebsite')) {
      return '/PersonalWebsite';
    }
    return '';
  }
  
  // Server-side/build-time: use environment variable
  // For production builds, Next.js will have basePath set
  // We'll use an environment variable or detect from build
  return process.env.NODE_ENV === 'production' ? '/PersonalWebsite' : '';
}

/**
 * Get the full path for an asset
 * @param path - The asset path (e.g., '/hero/avatar.webp')
 * @returns The full path with basePath if needed
 */
export function assetPath(path: string): string {
  const basePath = getBasePath();
  // Remove leading slash from path if basePath exists to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return basePath ? `${basePath}/${cleanPath}` : `/${cleanPath}`;
}

