'use client';

import { useState, useEffect } from 'react';

/**
 * Hook to detect mobile devices and optimize animations
 * Returns true for mobile devices to reduce animations for better performance
 */
export function useMobileOptimization(): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      const isMobileDevice = 
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) ||
        (typeof window !== 'undefined' && window.innerWidth < 768);
      
      setIsMobile(isMobileDevice);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
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

