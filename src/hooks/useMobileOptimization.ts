'use client';

import { useState, useEffect } from 'react';

/**
 * Hook to detect mobile devices and optimize animations
 * Returns true for mobile devices to reduce animations for better performance
 * Safe for SSR - defaults to false and updates on client mount
 */
export function useMobileOptimization(): boolean {
  // Default to false to prevent hydration mismatches
  // Will be updated on client-side mount
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Mark as mounted on client
    setMounted(true);
    
    // Check if device is mobile
    const checkMobile = () => {
      if (typeof window === 'undefined') return false;
      
      try {
        const userAgent = navigator?.userAgent || '';
        const isMobileDevice = 
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent) ||
          (window.innerWidth < 768);
        
        setIsMobile(isMobileDevice);
        return isMobileDevice;
      } catch (error) {
        // Fallback to false if there's any error
        setIsMobile(false);
        return false;
      }
    };

    // Initial check
    checkMobile();
    
    // Listen for resize events
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', checkMobile);
      
      return () => {
        window.removeEventListener('resize', checkMobile);
      };
    }
  }, []);

  // Return false during SSR and initial render to prevent hydration issues
  // Only return actual mobile status after client-side mount
  return mounted ? isMobile : false;
}

/**
 * Get animation props optimized for mobile
 * Returns minimal/static animations on mobile, full animations on desktop
 */
export function getMobileOptimizedAnimation(isMobile: boolean) {
  if (isMobile) {
    return {
      initial: { opacity: 1, y: 0 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0 },
    };
  }
  return undefined; // Use default animations
}

