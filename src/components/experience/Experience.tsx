'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code } from 'lucide-react';
import { assetPath } from '@/lib/paths';
import { useMobileOptimization } from '@/hooks/useMobileOptimization';

// ============================================
// EXPERIENCE TYPE
// ============================================
type ExperienceItem = {
  year: string;
  role: string;
  company: string;
  period?: string;
  description: string;
  highlights?: string[];
  techStack?: string[];
  color: 'violet' | 'blue' | 'orange' | 'sky';
};

// ============================================
// EXPERIENCES DATA
// ============================================
const experiences: ExperienceItem[] = [
  {
    year: '2021',
    role: 'Honors Bachelor of Computer Science',
    company: 'York University',
    period: 'September 2021 – August 2025›',
    description:
      'Pursuing Honors Bachelor of Computer Science degree with focus on Full-Stack Development, Data Engineering, and AI/ML. Building expertise in scalable systems, automation, and modern web technologies.',
    color: 'orange',
  },
  {
    year: '2024',
    role: 'Machine Learning & AI Intern',
    company: 'Kyndryl',
    period: 'May 2024 – January 2025',
    description:
      'Developed an automated E-Form Parser System that streamlined banking data extraction, reducing manual workflow time by 30%.',
    highlights: [
      'Full-Stack Automation: Built a scalable system using Python Flask, PostgreSQL, and React to digitize and analyze financial forms.',
      'Data Integration: Wrote complex SQL queries to unify disparate data sources into master tables for deeper analysis.',
      'DevOps & UI: Implemented CI/CD pipelines via GitHub Actions and integrated AG Grid for high-performance frontend data visualization.',
    ],
    techStack: ['Python (Flask)', 'React', 'PostgreSQL', 'SQL', 'Docker', 'CI/CD', 'AG Grid'],
    color: 'blue',
  },
  {
    year: '2025',
    role: 'Full-Stack Developer',
    company: 'MidnaTech',
    period: 'April 2025 – Present',
    description:
      'Built an end-to-end data platform for carrier safety analytics, handling everything from raw data ingestion to user-facing dashboards.',
    highlights: [
      'Pipeline Engineering: Architected robust ETL pipelines to scrape FMCSA SMS data, transforming it into structured JSON for PostgreSQL storage.',
      'API Development: Developed high-performance RESTful APIs in JavaScript featuring dynamic filtering and search capabilities.',
      'Visualization: Designed responsive React dashboards using Recharts to visualize complex safety and compliance metrics.',
      'Quality Assurance: Led comprehensive Black Box and White Box testing strategies for both Node.js backends and React frontends.',
    ],
    techStack: ['JavaScript', 'React', 'Node.js', 'PostgreSQL', 'ETL', 'REST APIs'],
    color: 'violet',
  },
  {
    year: '∞',
    role: 'Lifelong Learner',
    company: 'Continuous Growth',
    period: 'Always',
    description:
      'In this fast-paced field, I continue to grow and learn every day. I\'m passionate about exploring new opportunities, staying current with emerging technologies, and pushing the boundaries of what\'s possible.',
    highlights: [
      'Continuous Growth: Always expanding my skill set and knowledge base to stay ahead in the ever-evolving tech landscape.',
      'Fast-Paced Field: Thriving in the dynamic world of technology, embracing change and innovation at every turn.',
      'New Opportunities: Eager to explore exciting challenges, learn new frameworks, and contribute to impactful projects.',
    ],
    color: 'sky',
  },
];

// ============================================
// COLOR HELPER FUNCTION
// ============================================
const getColorClasses = (color: string) => {
  const colors = {
    violet: {
      gradient: 'from-violet-500 to-purple-600',
      bg: 'bg-violet-500',
      text: 'text-violet-600',
      border: 'border-violet-500/20',
    },
    blue: {
      gradient: 'from-blue-500 to-cyan-600',
      bg: 'bg-blue-500',
      text: 'text-blue-600',
      border: 'border-blue-500/20',
    },
    orange: {
      gradient: 'from-orange-500 to-pink-600',
      bg: 'bg-orange-500',
      text: 'text-orange-600',
      border: 'border-orange-500/20',
    },
    sky: {
      gradient: 'from-sky-500 to-blue-600',
      bg: 'bg-sky-500',
      text: 'text-sky-600',
      border: 'border-sky-500/20',
    },
  } as const;

  return colors[color as keyof typeof colors] ?? colors.violet;
};

// ============================================
// EXPERIENCE COMPONENT
// ============================================
export function Experience() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const { shouldReduceMotion } = useMobileOptimization();

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-12 md:py-16 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-background/90 backdrop-blur-md" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-16 text-center"
        >
          <span className="inline-block mb-5 text-sky-600 dark:text-sky-400 tracking-[0.15em] uppercase text-xs font-semibold">
            My Journey
          </span>
          <h2
            className="text-stone-900 dark:text-stone-50 leading-[1.1]"
            style={{ fontSize: 'clamp(2.25rem, 5.5vw, 3.5rem)' }}
          >
            The path so far
          </h2>
        </motion.div>

        {/* Timeline wrapper */}
        <div className="relative">
          {/* Curved SVG path */}
          <svg
            className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none hidden lg:block"
            viewBox="0 0 800 1400"
            fill="none"
          >
            <motion.path
              d="M 400 0 Q 200 200 400 400 T 400 800 Q 600 1000 400 1200 Q 200 1300 400 1400"
              stroke="url(#pathGradient)"
              strokeWidth="2"
              strokeDasharray="8 8"
              fill="none"
              style={{ pathLength }}
              opacity={0.25}
            />
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="33%" stopColor="#8B5CF6" />
                <stop offset="66%" stopColor="#EC4899" />
                <stop offset="100%" stopColor="#0EA5E9" />
              </linearGradient>
            </defs>
          </svg>

          {/* Experience cards */}
          <div className="space-y-24 md:space-y-32 relative">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              const colors = getColorClasses(exp.color);

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.15,
                    ease: 'easeOut'
                  }}
                  className={`relative ${
                    isEven ? 'lg:mr-auto lg:pr-24' : 'lg:ml-auto lg:pl-24'
                  } lg:w-1/2`}
                >
                  <div className="relative group">
                    {/* Year badge - desktop */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.15 + 0.2, 
                        type: 'spring',
                        stiffness: 200,
                        damping: 15
                      }}
                      className={`absolute ${
                        isEven ? '-right-32 lg:right-auto lg:-left-32' : '-right-32'
                      } top-8 hidden lg:block`}
                    >
                      <div
                        className={`w-20 h-20 rounded-full bg-gradient-to-br ${colors.gradient} shadow-xl flex items-center justify-center ${exp.year === '∞' ? 'animate-pulse' : ''}`}
                      >
                        <span className="text-white text-sm font-medium text-center px-1">
                          {exp.year}
                        </span>
                      </div>
                      {/* Connecting dot */}
                      <div
                        className={`absolute top-1/2 ${
                          isEven ? '-right-8' : '-left-8'
                        } w-4 h-4 rounded-full ${colors.bg} -translate-y-1/2`}
                      />
                    </motion.div>

                    {/* Mobile year badge */}
                    <div className="lg:hidden mb-4">
                      <span
                        className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${colors.gradient} text-white text-sm ${exp.year === '∞' ? 'animate-pulse' : ''}`}
                      >
                        {exp.year}
                      </span>
                    </div>

                    {/* Content card */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.15 + 0.1 }}
                      whileHover={{ scale: 1.01, y: -6 }}
                      className={`relative bg-white/75 dark:bg-stone-900/75 backdrop-blur-md p-6 lg:p-8 rounded-2xl border ${colors.border} shadow-md group-hover:shadow-xl group-hover:border-opacity-50 transition-all duration-300`}
                    >
                      {/* subtle gradient overlay on hover */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-5 rounded-[2rem] transition-opacity duration-500`}
                      />

                      <div className="relative">
                        <h3
                          className="mb-1.5 text-stone-900 dark:text-stone-50 font-bold"
                          style={{ fontSize: '1.5rem' }}
                        >
                          {exp.role}
                        </h3>
                        <p
                          className={`${colors.text} mb-0.5 font-semibold`}
                          style={{ fontSize: '1rem' }}
                        >
                          {exp.company}
                        </p>
                        {'period' in exp && (
                          <p className="text-stone-500 dark:text-stone-400 text-xs mb-5">
                            {exp.period}
                          </p>
                        )}
                        {!('period' in exp) && <div className="mb-5" />}
                        
                        {/* Main description */}
                        <p className="text-stone-700 dark:text-stone-300 leading-relaxed mb-5 text-base font-medium">
                          {exp.description}
                        </p>

                        {/* Highlights */}
                        {exp.highlights && exp.highlights.length > 0 && (
                          <div className="space-y-3 mb-5">
                            {exp.highlights.map((highlight, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.15 + 0.3 + idx * 0.08 }}
                                className="flex gap-2.5"
                              >
                                <div className={`flex-shrink-0 w-1 rounded-full bg-gradient-to-b ${colors.gradient} mt-1.5`} />
                                <p className="text-stone-700 dark:text-stone-300 leading-relaxed text-sm">
                                  {highlight}
                                </p>
                              </motion.div>
                            ))}
                          </div>
                        )}

                        {/* Tech Stack */}
                        {exp.techStack && exp.techStack.length > 0 && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.15 + 0.5 }}
                            className="mt-5 pt-5 border-t border-stone-200/60 dark:border-stone-700/60"
                          >
                            <div className="flex items-center gap-2 mb-3">
                              <Code className={`w-3.5 h-3.5 ${colors.text}`} />
                              <span className={`text-xs font-semibold ${colors.text} uppercase tracking-wider`}>
                                Tech Stack
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              {exp.techStack.map((tech, idx) => (
                                <motion.span
                                  key={tech}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 0.3, delay: index * 0.15 + 0.55 + idx * 0.04 }}
                                  whileHover={{ scale: 1.05, y: -1 }}
                                  className={`px-2.5 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${colors.gradient} text-white shadow-sm hover:shadow-md transition-all`}
                                >
                                  {tech}
                                </motion.span>
                              ))}
                            </div>
                          </motion.div>
                        )}

                        {/* Decorative accent bar */}
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: 64 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
                          className={`h-0.5 bg-gradient-to-r ${colors.gradient} mt-5 rounded-full`}
                        />
                      </div>
                    </motion.div>

                    {/* Floating background shape - disabled on mobile/reduced motion */}
                    {!shouldReduceMotion && (
                      <motion.div
                        animate={{
                          rotate: [0, 360],
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                        className={`absolute -z-10 ${
                          isEven ? 'right-0' : 'left-0'
                        } top-0 w-48 h-48 bg-gradient-to-br ${colors.gradient} opacity-5 blur-3xl rounded-full`}
                      />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Resume CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <motion.a
            href={assetPath('/hero/CalvinK_Resume2026.pdf')}
            download="Calvin-Kattathara-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-500 dark:via-purple-500 dark:to-pink-500 text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 text-base font-semibold"
          >
            Download Full Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

