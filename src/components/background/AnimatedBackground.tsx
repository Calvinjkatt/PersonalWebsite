'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { useMobileOptimization } from '@/hooks/useMobileOptimization';

export function AnimatedBackground() {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const { shouldReduceMotion } = useMobileOptimization();

  // Render static background on mobile or when user prefers reduced motion
  if (shouldReduceMotion) {
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
// DARK MODE BACKGROUND - Smooth & Elegant
// ============================================
function DarkModeBackground() {
  return (
    <>
      {/* Smooth gradient base - No harsh lines */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-950 via-stone-900/95 to-stone-950" />
      
      {/* Subtle animated gradient orbs - Very low opacity */}
      <motion.div
        className="absolute top-1/4 -left-40 w-[800px] h-[800px] rounded-full blur-3xl opacity-[0.03]"
        animate={{
          x: [0, 150, 0],
          y: [0, 100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4), rgba(139, 92, 246, 0.3), transparent)',
        }}
      />

      <motion.div
        className="absolute bottom-1/3 -right-40 w-[700px] h-[700px] rounded-full blur-3xl opacity-[0.025]"
        animate={{
          x: [0, -130, 0],
          y: [0, 140, 0],
          scale: [1, 1.35, 1],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        style={{
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.4), rgba(139, 92, 246, 0.3), transparent)',
        }}
      />

      {/* Ultra-subtle mesh gradient overlay - Smooth transitions */}
      <motion.div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          background: `
            radial-gradient(at 20% 30%, rgba(59, 130, 246, 0.15) 0px, transparent 70%),
            radial-gradient(at 80% 70%, rgba(236, 72, 153, 0.15) 0px, transparent 70%),
            radial-gradient(at 50% 50%, rgba(139, 92, 246, 0.1) 0px, transparent 70%)
          `,
        }}
        animate={{
          opacity: [0.015, 0.025, 0.015],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Very subtle floating particles - Minimal */}
      {[...Array(3)].map((_, i) => {
        const colors = [
          'rgba(59, 130, 246, 0.02)',
          'rgba(139, 92, 246, 0.015)',
          'rgba(236, 72, 153, 0.02)',
        ];
        const color = colors[i % colors.length];
        const size = 120 + (i % 2) * 60;
        const delay = i * 1.5;
        const duration = 25 + (i % 3) * 5;

        return (
          <motion.div
            key={`dark-particle-${i}`}
            className="absolute rounded-full blur-3xl"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              background: `radial-gradient(circle, ${color}, transparent 80%)`,
              left: `${(i * 30) % 100}%`,
              top: `${(i * 35) % 100}%`,
            }}
            animate={{
              x: [0, Math.sin(i * 0.5) * 200, 0],
              y: [0, Math.cos(i * 0.5) * 200, 0],
              scale: [1, 1.3, 1],
              opacity: [0.01, 0.02, 0.01],
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
    </>
  );
}
