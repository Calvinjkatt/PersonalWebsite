'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useState, useEffect } from 'react';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);
  const isDark = theme === 'dark';

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch - render placeholder until mounted
  if (!mounted) {
    return (
      <div className="fixed top-6 right-6 z-50">
        <div className="w-14 h-14 rounded-full bg-background border-2 border-border opacity-0" />
      </div>
    );
  }

  return (
    <div className="fixed top-6 right-6 z-50">
      <motion.button
        onClick={toggleTheme}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="relative group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      >
        {/* Animated gradient background orb */}
        <motion.div
          className="absolute inset-0 rounded-full blur-xl opacity-60"
          animate={{
            scale: isHovered ? [1, 1.3, 1] : 1,
            rotate: isHovered ? [0, 180, 360] : 0,
          }}
          transition={{
            duration: 3,
            repeat: isHovered ? Infinity : 0,
            ease: 'linear',
          }}
          style={{
            background: isDark
              ? 'radial-gradient(circle, rgba(139,92,246,0.6), rgba(59,130,246,0.4), rgba(236,72,153,0.3))'
              : 'radial-gradient(circle, rgba(59,130,246,0.5), rgba(236,72,153,0.3), rgba(251,146,60,0.4))',
          }}
        />

        {/* Main button container */}
        <motion.div
          className="relative flex items-center justify-center w-14 h-14 rounded-full backdrop-blur-xl border-2 overflow-hidden"
          animate={{
            background: isDark
              ? [
                  'linear-gradient(135deg, rgba(30,27,75,0.9), rgba(55,48,163,0.8))',
                  'linear-gradient(135deg, rgba(55,48,163,0.8), rgba(124,58,237,0.9))',
                  'linear-gradient(135deg, rgba(30,27,75,0.9), rgba(55,48,163,0.8))',
                ]
              : [
                  'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(249,250,251,0.9))',
                  'linear-gradient(135deg, rgba(251,146,60,0.2), rgba(59,130,246,0.2))',
                  'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(249,250,251,0.9))',
                ],
            borderColor: isDark
              ? 'rgba(139,92,246,0.5)'
              : 'rgba(59,130,246,0.3)',
          }}
          transition={{
            duration: 0.6,
            ease: 'easeInOut',
          }}
        >
          {/* Animated particles/sparkles */}
          <AnimatePresence mode="wait">
            {isHovered && (
              <>
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={`sparkle-${i}`}
                    initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1.5, 0],
                      x: Math.cos((i * Math.PI * 2) / 6) * 40,
                      y: Math.sin((i * Math.PI * 2) / 6) * 40,
                    }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.1,
                      ease: 'easeOut',
                    }}
                    className="absolute w-1.5 h-1.5 rounded-full"
                    style={{
                      background: isDark
                        ? 'rgba(139,92,246,0.8)'
                        : 'rgba(59,130,246,0.8)',
                      boxShadow: isDark
                        ? '0 0 8px rgba(139,92,246,0.6)'
                        : '0 0 8px rgba(59,130,246,0.6)',
                    }}
                  />
                ))}
              </>
            )}
          </AnimatePresence>

          {/* Rotating gradient ring */}
          <motion.div
            className="absolute inset-0 rounded-full opacity-30"
            animate={{ rotate: 360 }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              background: isDark
                ? 'conic-gradient(from 0deg, rgba(139,92,246,0.6), rgba(59,130,246,0.4), rgba(236,72,153,0.5), rgba(139,92,246,0.6))'
                : 'conic-gradient(from 0deg, rgba(59,130,246,0.5), rgba(236,72,153,0.4), rgba(251,146,60,0.5), rgba(59,130,246,0.5))',
              mask: 'radial-gradient(circle, transparent 60%, black 65%)',
              WebkitMask: 'radial-gradient(circle, transparent 60%, black 65%)',
            }}
          />

          {/* Icon container with smooth transition */}
          <div className="relative w-8 h-8 flex items-center justify-center">
            <AnimatePresence mode="wait" initial={false}>
              {isDark ? (
                <motion.div
                  key="moon"
                  initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  transition={{
                    duration: 0.4,
                    ease: 'backOut',
                  }}
                  className="absolute"
                >
                  <Moon
                    className="w-6 h-6 text-purple-300 drop-shadow-lg"
                    fill="currentColor"
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="sun"
                  initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  transition={{
                    duration: 0.4,
                    ease: 'backOut',
                  }}
                  className="absolute"
                  style={{
                    filter: 'drop-shadow(0 0 8px rgba(251,146,60,0.6))',
                  }}
                >
                  <Sun className="w-6 h-6 text-orange-400" fill="currentColor" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Pulsing glow effect */}
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              background: isDark
                ? 'radial-gradient(circle, rgba(139,92,246,0.4), transparent 70%)'
                : 'radial-gradient(circle, rgba(59,130,246,0.3), transparent 70%)',
              filter: 'blur(8px)',
            }}
          />
        </motion.div>
      </motion.button>

      {/* Optional: Floating label on hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.8 }}
            className="absolute top-16 right-0 whitespace-nowrap px-3 py-1.5 rounded-lg backdrop-blur-md border text-xs font-medium"
            style={{
              background: isDark
                ? 'rgba(30,27,75,0.8)'
                : 'rgba(255,255,255,0.9)',
              borderColor: isDark
                ? 'rgba(139,92,246,0.3)'
                : 'rgba(59,130,246,0.2)',
              color: isDark ? 'rgba(196,181,253,0.9)' : 'rgba(59,130,246,0.9)',
            }}
          >
            {isDark ? 'Light Mode' : 'Dark Mode'}
            <motion.div
              className="absolute -top-1 right-4 w-2 h-2 rotate-45"
              style={{
                background: isDark
                  ? 'rgba(30,27,75,0.8)'
                  : 'rgba(255,255,255,0.9)',
                borderLeft: isDark
                  ? '1px solid rgba(139,92,246,0.3)'
                  : '1px solid rgba(59,130,246,0.2)',
                borderTop: isDark
                  ? '1px solid rgba(139,92,246,0.3)'
                  : '1px solid rgba(59,130,246,0.2)',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

