'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { assetPath } from '@/lib/paths';
import { useMobileOptimization } from '@/hooks/useMobileOptimization';

// ============================================
// HERO CONTENT
// ============================================
const TITLE_LABEL = 'PORTFOLIO 2025';
const HERO_NAME = 'Calvin Kattathara';

const HERO_SUBTITLE_LINES = [
  'Bachelor\'s Degree in Computer Science from York University.',
  'Full-Stack Developer & Data Engineer crafting scalable solutions with AI & modern tech.',
];

const WHO_I_AM_CONTENT = {
  label: 'WHO I AM',
  heading: 'Creating at the intersection of Innovation & Impact',
  paragraphs: [
    "I’m a Full-Stack Developer who loves building the 'brain' behind an application. My interest lies at the intersection of web development and AI—combining solid engineering principles with machine learning to automate workflows and solve hard problems. Whether I'm optimizing a database query or fine-tuning a UI in React, I focus on building software that is fast, reliable, and actually enjoyable to use",
  ],
  infoBox: [
    { color: 'from-purple-500 to-purple-600', text: 'BSc Computer Science York University April 2026' },
    { color: 'from-blue-500 to-blue-600', text: 'Full-Stack Developer' },
  ],
};

// ============================================
// HERO COMPONENT
// ============================================
export function Hero() {
  const { shouldReduceMotion } = useMobileOptimization();

  return (
    <section className="relative pt-24 md:pt-28 pb-12 md:pb-16 bg-gradient-to-b from-background via-white/95 to-background dark:from-background dark:via-stone-950/95 dark:to-background backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6 lg:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 items-start">
          {/* Left Column - Combined Content */}
          <div className="lg:col-span-2 space-y-5">
            {/* Initial Hero Section */}
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <p className="text-xs uppercase tracking-[0.15em] text-sky-600 dark:text-sky-400 font-semibold">
                {TITLE_LABEL}
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1]">
                <div className="text-stone-900 dark:text-stone-50 mb-1">Hi, I'm</div>
                <div>
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                    {HERO_NAME}
                  </span>
                  <span className="text-purple-600 dark:text-purple-400">.</span>
                </div>
              </h1>
              <div className="space-y-1 text-base md:text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
                {HERO_SUBTITLE_LINES.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            </motion.div>

            {/* Enhanced Divider */}
            <div className="relative my-6">
              <div className="h-px bg-gradient-to-r from-transparent via-stone-300 dark:via-stone-600 to-transparent" />
              <div className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent blur-sm" />
            </div>

            {/* Who I Am Section */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.08 }}
            >
              <p className="text-xs uppercase tracking-[0.15em] text-orange-600 dark:text-orange-400 font-semibold">
                {WHO_I_AM_CONTENT.label}
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.2]">
                <span className="text-stone-900 dark:text-stone-50">
                  Creating at the{' '}
                </span>
                <span className="bg-gradient-to-r from-purple-600 to-orange-600 dark:from-purple-400 dark:to-orange-400 bg-clip-text text-transparent">
                  intersection
                </span>
                <span className="text-stone-900 dark:text-stone-50">
                  {' '}of Innovation & Impact
                </span>
              </h2>
              <div className="space-y-2.5 text-base md:text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
                {WHO_I_AM_CONTENT.paragraphs.map((para, index) => (
                  <p key={index}>{para}</p>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Avatar & Info Box */}
          <div className="lg:col-span-1 space-y-6 relative">
            {/* Creative decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 left-0 w-32 h-32 bg-gradient-to-tr from-blue-400/20 to-purple-400/20 rounded-full blur-3xl" />
            {/* Avatar Orb */}
            <motion.div
              className="flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              animate={shouldReduceMotion ? {} : { y: [0, -8, 0] }}
              transition={{
                opacity: { duration: 0.8, ease: 'easeOut', delay: 0.1 },
                scale: { duration: 0.8, ease: 'easeOut', delay: 0.1 },
                ...(shouldReduceMotion ? {} : {
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                }),
              }}
            >
              <div className="relative flex items-center justify-center">
                {/* Creative floating particles/sparkles - disabled on mobile/reduced motion */}
                {!shouldReduceMotion && [...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-60"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${15 + (i % 2) * 70}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.4, 0.8, 0.4],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: i * 0.2,
                    }}
                  />
                ))}

                {/* Enhanced Gradient Blobs - disabled on mobile/reduced motion */}
                {!shouldReduceMotion && (
                  <>
                    <motion.div
                      className="absolute -bottom-8 -left-8 h-48 w-48 rounded-full bg-gradient-to-r from-blue-400/40 via-purple-400/40 to-pink-400/40 blur-3xl"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.6, 0.8, 0.6],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                    <motion.div
                      className="absolute -top-8 -right-8 h-48 w-48 rounded-full bg-gradient-to-r from-pink-400/40 via-orange-400/40 to-purple-400/40 blur-3xl"
                      animate={{
                        scale: [1.1, 1, 1.1],
                        opacity: [0.6, 0.8, 0.6],
                        rotate: [360, 180, 0],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />

                    {/* Animated glow ring */}
                    <motion.div
                      className="absolute h-56 w-56 md:h-64 md:w-64 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-2xl"
                      animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.5, 0.7, 0.5],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />

                    {/* Decorative gradient ring around the orb */}
                    <motion.div
                      className="absolute h-[280px] w-[280px] md:h-[320px] md:w-[320px] rounded-full"
                      style={{
                        background: 'conic-gradient(from 0deg, rgba(59,130,246,0.2), rgba(139,92,246,0.2), rgba(236,72,153,0.2), rgba(59,130,246,0.2))',
                        padding: '2px',
                      }}
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    >
                      <div className="h-full w-full rounded-full bg-transparent" />
                    </motion.div>
                  </>
                )}

                {/* Main Orb Circle with enhanced styling */}
                <div className="relative h-56 w-56 md:h-64 md:w-64 rounded-full bg-gradient-to-br from-white via-white to-blue-50/30 dark:from-stone-900 dark:via-stone-900 dark:to-blue-950/30 shadow-[0_0_0_1px_rgba(59,130,246,0.1),0_25px_70px_rgba(59,130,246,0.2),0_0_100px_rgba(139,92,246,0.15)] dark:shadow-[0_0_0_1px_rgba(139,92,246,0.2),0_25px_70px_rgba(139,92,246,0.3),0_0_100px_rgba(139,92,246,0.2)] backdrop-blur-xl overflow-hidden flex items-center justify-center border-2 border-white/50 dark:border-stone-700/50 hover:shadow-[0_0_0_2px_rgba(59,130,246,0.2),0_35px_100px_rgba(59,130,246,0.3),0_0_120px_rgba(139,92,246,0.2)] dark:hover:shadow-[0_0_0_2px_rgba(139,92,246,0.3),0_35px_100px_rgba(139,92,246,0.4),0_0_120px_rgba(139,92,246,0.3)] transition-all duration-700 group z-10">
                  {/* Inner subtle ring */}
                  <div className="absolute inset-0 rounded-full border border-blue-200/30 dark:border-purple-500/20" />
                  
                  {/* Creative gradient overlay for depth */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-500/10 via-transparent to-purple-500/10 pointer-events-none" />
                  
                  <Image
                    src={assetPath('/hero/avatar.webp')}
                    alt="Creative portrait of Calvin Kattathara"
                    width={240}
                    height={240}
                    priority
                    className="h-full w-full rounded-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-[1.02] contrast-[1.02] relative z-10"
                    sizes="(max-width: 768px) 224px, 256px"
                    style={{ objectPosition: 'center 20%', transform: 'scale(1.05)' }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Info Box */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="relative">
                {/* Enhanced blurred gradient background - static on mobile/reduced motion */}
                {shouldReduceMotion ? (
                  <div className="absolute -inset-3 bg-gradient-to-br from-purple-200/40 via-pink-200/30 to-orange-200/40 dark:from-purple-900/25 dark:via-pink-900/15 dark:to-orange-900/20 rounded-2xl blur-2xl opacity-70" />
                ) : (
                  <motion.div
                    className="absolute -inset-3 bg-gradient-to-br from-purple-200/40 via-pink-200/30 to-orange-200/40 dark:from-purple-900/25 dark:via-pink-900/15 dark:to-orange-900/20 rounded-2xl blur-2xl"
                    animate={{
                      opacity: [0.6, 0.8, 0.6],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                )}
                
                {/* Enhanced glassmorphism card */}
                <div className="relative bg-gradient-to-br from-white/80 via-white/75 to-blue-50/30 dark:from-stone-900/80 dark:via-stone-900/75 dark:to-blue-950/30 backdrop-blur-xl rounded-2xl p-6 border border-white/70 dark:border-stone-700/70 shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_48px_rgba(139,92,246,0.15)] dark:hover:shadow-[0_12px_48px_rgba(139,92,246,0.25)] hover:border-purple-200/80 dark:hover:border-purple-700/80 transition-all duration-500 group/card">
                  {/* Subtle inner glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/50 to-transparent dark:from-white/5 dark:to-transparent pointer-events-none" />
                  
                  <div className="relative space-y-4">
                    {WHO_I_AM_CONTENT.infoBox.map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-4 group/item"
                        whileHover={{ x: 6 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                      >
                        <motion.div
                          className={`w-1.5 h-10 rounded-full bg-gradient-to-b ${item.color} shadow-sm group-hover/item:scale-y-115 group-hover/item:shadow-md transition-all duration-300`}
                          whileHover={{ scaleY: 1.15 }}
                        />
                        <div className="flex-1">
                          <p className="text-stone-900 dark:text-stone-50 font-semibold text-sm leading-tight group-hover/item:text-purple-600 dark:group-hover/item:text-purple-400 transition-colors duration-300">
                            {item.text}
                          </p>
                          {index === 0 && (
                            <p className="text-stone-600 dark:text-stone-400 text-xs mt-0.5 font-medium">
                              April 2026
                            </p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Enhanced decorative blobs - static on mobile/reduced motion */}
                {shouldReduceMotion ? (
                  <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-gradient-to-br from-purple-400/40 to-pink-400/40 rounded-full blur-3xl -z-10 opacity-40" />
                ) : (
                  <motion.div
                    className="absolute -right-8 -bottom-8 w-32 h-32 bg-gradient-to-br from-purple-400/40 to-pink-400/40 rounded-full blur-3xl -z-10"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
