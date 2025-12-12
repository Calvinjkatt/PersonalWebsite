'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { useMemo } from 'react';
import { useIsMobile } from '@/hooks/useIsMobile';

// Deterministic star positions
const generateStarData = (count: number) => {
  return Array.from({ length: count }, (_, i) => {
    const seed = i * 2654435761;
    const hash = (seed: number) => {
      let n = seed;
      n = (n << 13) ^ n;
      return ((n * (n * n * 15731 + 789221) + 1376312589) & 0x7fffffff) / 2147483648.0;
    };
    
    return {
      size: hash(seed) * 1.5 + 0.5,
      delay: hash(seed + 1) * 5,
      duration: hash(seed + 2) * 4 + 3,
      x: hash(seed + 3) * 100,
      y: hash(seed + 4) * 100,
    };
  });
};

export function AnimatedBackground() {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const isMobile = useIsMobile();

  // Check for reduced motion preference
  const prefersReducedMotion = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  // Simplified background for mobile or reduced motion
  if (prefersReducedMotion || isMobile) {
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/15 to-purple-50/10 dark:from-stone-950 dark:via-blue-950/20 dark:to-purple-950/10" />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {isLight ? <LightModeBackground /> : <DarkModeBackground />}
    </div>
  );
}

// ============================================
// LIGHT MODE BACKGROUND - Modern Brush Strokes
// ============================================
function LightModeBackground() {
  return (
    <>
      {/* Clean gradient base - Much lighter */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/15 to-purple-50/10" />
      
      {/* Animated gradient orbs - Reduced opacity */}
      <motion.div
        className="absolute top-1/4 -left-40 w-[650px] h-[650px] rounded-full blur-3xl opacity-8"
        animate={{
          x: [0, 120, 0],
          y: [0, 90, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15), rgba(139, 92, 246, 0.1), transparent)',
        }}
      />

      <motion.div
        className="absolute bottom-1/3 -right-40 w-[600px] h-[600px] rounded-full blur-3xl opacity-7"
        animate={{
          x: [0, -110, 0],
          y: [0, 120, 0],
          scale: [1, 1.25, 1],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.15), rgba(251, 146, 60, 0.1), transparent)',
        }}
      />

      {/* Sophisticated brush stroke animations - Reduced opacity */}
      <svg
        className="absolute inset-0 w-full h-full opacity-6"
        style={{ mixBlendMode: 'multiply' }}
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 2400 1600"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Brush stroke 1 - Horizontal flowing */}
        <motion.path
          d="M -100 400 Q 400 300 900 400 Q 1400 500 1800 400 Q 2200 350 2500 450"
          stroke="url(#brush1)"
          strokeWidth="140"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1, 1, 0, 0],
            opacity: [0, 0.25, 0.15, 0.25, 0],
            strokeDashoffset: [0, -400, -800],
          }}
          transition={{
            pathLength: { duration: 16, repeat: Infinity, ease: 'easeInOut' },
            opacity: { duration: 16, repeat: Infinity, ease: 'easeInOut' },
            strokeDashoffset: { duration: 20, repeat: Infinity, ease: 'linear' },
          }}
          style={{ strokeDasharray: '200 200' }}
        />

        {/* Brush stroke 2 - Diagonal wave */}
        <motion.path
          d="M 200 800 Q 700 650 1200 800 Q 1700 950 2200 800 Q 2600 700 2800 900"
          stroke="url(#brush2)"
          strokeWidth="130"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1, 1, 0, 0],
            opacity: [0, 0.22, 0.14, 0.22, 0],
            strokeDashoffset: [0, -380, -760],
          }}
          transition={{
            pathLength: { duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 },
            opacity: { duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 },
            strokeDashoffset: { duration: 22, repeat: Infinity, ease: 'linear', delay: 2 },
          }}
          style={{ strokeDasharray: '190 190' }}
        />


        <defs>
          <linearGradient id="brush1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.25)" />
            <stop offset="40%" stopColor="rgba(99, 102, 241, 0.2)" />
            <stop offset="70%" stopColor="rgba(139, 92, 246, 0.22)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.18)" />
          </linearGradient>
          <linearGradient id="brush2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(139, 92, 246, 0.25)" />
            <stop offset="45%" stopColor="rgba(168, 85, 247, 0.2)" />
            <stop offset="75%" stopColor="rgba(236, 72, 153, 0.22)" />
            <stop offset="100%" stopColor="rgba(139, 92, 246, 0.18)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Refined floating particles - Reduced count and opacity */}
      {[...Array(4)].map((_, i) => {
        const colors = [
          'rgba(59, 130, 246, 0.04)',
          'rgba(139, 92, 246, 0.03)',
          'rgba(236, 72, 153, 0.04)',
        ];
        const color = colors[i % colors.length];
        const size = 100 + (i % 3) * 40;
        const delay = i * 1.2;
        const duration = 20 + (i % 4) * 4;

        return (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full blur-2xl"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              background: `radial-gradient(circle, ${color}, transparent 80%)`,
              left: `${(i * 20) % 100}%`,
              top: `${(i * 25) % 100}%`,
            }}
            animate={{
              x: [0, Math.sin(i * 0.5) * 150, 0],
              y: [0, Math.cos(i * 0.5) * 150, 0],
              scale: [1, 1.25, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay,
            }}
          />
        );
      })}

      {/* Elegant mesh gradient overlay - Much lighter */}
      <motion.div
        className="absolute inset-0 opacity-8"
        style={{
          background: `
            radial-gradient(at 18% 28%, rgba(59, 130, 246, 0.02) 0px, transparent 65%),
            radial-gradient(at 82% 72%, rgba(236, 72, 153, 0.02) 0px, transparent 65%),
            radial-gradient(at 48% 48%, rgba(139, 92, 246, 0.015) 0px, transparent 65%)
          `,
        }}
        animate={{
          opacity: [0.06, 0.1, 0.06],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </>
  );
}

// ============================================
// DARK MODE BACKGROUND - Elegant & Smooth
// ============================================
function DarkModeBackground() {
  return (
    <>
      {/* Elegant dark gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-950 via-stone-900 to-stone-950" />
      
      {/* Subtle gradient orbs - No lines, just smooth gradients */}
      <motion.div
        className="absolute top-1/4 -left-40 w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
        animate={{
          x: [0, 100, 0],
          y: [0, 80, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15), rgba(139, 92, 246, 0.08), transparent)',
        }}
      />

      <motion.div
        className="absolute bottom-1/3 -right-40 w-[550px] h-[550px] rounded-full blur-3xl opacity-15"
        animate={{
          x: [0, -90, 0],
          y: [0, 100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.12), rgba(236, 72, 153, 0.08), transparent)',
        }}
      />

      {/* Subtle mesh gradient overlay - Smooth, no lines */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(at 20% 30%, rgba(59, 130, 246, 0.08) 0px, transparent 70%),
            radial-gradient(at 80% 70%, rgba(139, 92, 246, 0.06) 0px, transparent 70%),
            radial-gradient(at 50% 50%, rgba(236, 72, 153, 0.05) 0px, transparent 70%)
          `,
        }}
        animate={{
          opacity: [0.25, 0.35, 0.25],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </>
  );
}
