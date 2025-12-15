'use client';

import { useState, useEffect } from 'react';

interface MobileOptimizationResult {
  isMobile: boolean;
  prefersReducedMotion: boolean;
  shouldReduceMotion: boolean;
}

/**
 * Hook to detect mobile devices and prefers-reduced-motion setting
 * Returns shouldReduceMotion = true when either:
 * - Device is mobile (for performance)
 * - User has prefers-reduced-motion enabled (for accessibility)
 * Safe for SSR - defaults to false and updates on client mount
 */
export function useMobileOptimization(): MobileOptimizationResult {
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Check if device is mobile
    const checkMobile = () => {
      if (typeof window === 'undefined') return;

      try {
        const userAgent = navigator?.userAgent || '';
        const isMobileDevice =
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent) ||
          (window.innerWidth < 768);

        setIsMobile(isMobileDevice);
      } catch {
        setIsMobile(false);
      }
    };

    // Check prefers-reduced-motion
    const checkReducedMotion = () => {
      if (typeof window === 'undefined') return;

      try {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        setPrefersReducedMotion(mediaQuery.matches);

        // Listen for changes to the preference
        const handleChange = (e: MediaQueryListEvent) => {
          setPrefersReducedMotion(e.matches);
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
      } catch {
        setPrefersReducedMotion(false);
      }
    };

    // Initial checks
    checkMobile();
    const cleanupReducedMotion = checkReducedMotion();

    // Listen for resize events (for mobile detection)
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
      cleanupReducedMotion?.();
    };
  }, []);

  // Return safe defaults during SSR
  if (!mounted) {
    return {
      isMobile: false,
      prefersReducedMotion: false,
      shouldReduceMotion: false,
    };
  }

  return {
    isMobile,
    prefersReducedMotion,
    shouldReduceMotion: isMobile || prefersReducedMotion,
  };
}

