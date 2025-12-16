'use client';

import { motion } from 'framer-motion';
import { Brain, Server, Layout, TrendingUp } from 'lucide-react';

// ============================================
// SKILLS DATA
// ============================================
const skillCategories = [
  {
    title: 'Data Science & ML',
    icon: Brain,
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-500/10 to-cyan-500/10',
    skills: ['Python', 'NumPy', 'Pandas', 'Scikit-learn', 'LangChain'],
  },
  {
    title: 'Backend & APIs',
    icon: Server,
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-500/10 to-pink-500/10',
    skills: ['Java', 'Node.js', 'Spring Boot', 'FastAPI', 'SQL'],
  },
  {
    title: 'Frontend & UI',
    icon: Layout,
    gradient: 'from-pink-500 to-orange-500',
    bgGradient: 'from-pink-500/10 to-orange-500/10',
    skills: ['React', 'Tailwind CSS', 'Redux', 'Next.js', 'Figma'],
  },
];

// ============================================
// DECORATIVE MINI CHART SVG
// ============================================
function MiniChart({ gradient }: { gradient: string }) {
  return (
    <svg
      viewBox="0 0 100 40"
      className="w-24 h-10 opacity-30"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id={`chart-${gradient}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" className="[stop-color:currentColor]" stopOpacity="0.8" />
          <stop offset="100%" className="[stop-color:currentColor]" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <path
        d="M 0 35 Q 15 30 25 25 T 50 20 T 75 15 T 100 8"
        fill="none"
        stroke={`url(#chart-${gradient})`}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M 0 35 Q 15 30 25 25 T 50 20 T 75 15 T 100 8 V 40 H 0 Z"
        fill={`url(#chart-${gradient})`}
        opacity="0.15"
      />
    </svg>
  );
}

// ============================================
// SKILL CARD COMPONENT
// ============================================
interface SkillCardProps {
  title: string;
  icon: React.ElementType;
  gradient: string;
  bgGradient: string;
  skills: string[];
  index: number;
}

function SkillCard({ title, icon: Icon, gradient, bgGradient, skills, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="group relative"
    >
      {/* Card */}
      <div className={`relative bg-white/70 dark:bg-stone-900/70 backdrop-blur-xl rounded-2xl border border-stone-200/60 dark:border-stone-700/60 p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden`}>
        {/* Background gradient on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

        {/* Decorative chart in corner */}
        <div className={`absolute top-4 right-4 text-transparent bg-gradient-to-r ${gradient} bg-clip-text`}>
          <div className={`bg-gradient-to-r ${gradient} bg-clip-text`}>
            <MiniChart gradient={gradient.replace('from-', '').split(' ')[0]} />
          </div>
        </div>

        {/* Content */}
        <div className="relative">
          {/* Header */}
          <div className="flex items-center gap-3 mb-5">
            <div className={`p-2.5 rounded-xl bg-gradient-to-br ${gradient} shadow-lg`}>
              <Icon className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-bold text-stone-900 dark:text-stone-50">
              {title}
            </h3>
          </div>

          {/* Skills as chips */}
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, skillIndex) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className={`px-3 py-1.5 text-sm font-medium rounded-full bg-gradient-to-r ${gradient} text-white shadow-sm hover:shadow-md transition-all cursor-default`}
              >
                {skill}
              </motion.span>
            ))}
          </div>

          {/* Decorative bottom accent */}
          <div className={`mt-5 h-1 w-16 rounded-full bg-gradient-to-r ${gradient} opacity-60 group-hover:w-24 group-hover:opacity-100 transition-all duration-300`} />
        </div>
      </div>
    </motion.div>
  );
}

// ============================================
// SKILLS COMPONENT
// ============================================
export function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-16 md:py-20 px-6 bg-background/90 backdrop-blur-md"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full bg-sky-100 dark:bg-sky-900/30 border border-sky-200 dark:border-sky-800">
            <TrendingUp className="w-4 h-4 text-sky-600 dark:text-sky-400" />
            <span className="text-sky-600 dark:text-sky-400 tracking-wide uppercase text-xs font-semibold">
              Skills & Expertise
            </span>
          </div>
          <h2
            className="text-stone-900 dark:text-stone-50 leading-[1.1]"
            style={{ fontSize: 'clamp(2.25rem, 5.5vw, 3.5rem)' }}
          >
            Tools that power{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              my workflow
            </span>
          </h2>
          <p className="mt-4 text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
            From data pipelines to user interfaces, here&apos;s my technical toolkit
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.title}
              title={category.title}
              icon={category.icon}
              gradient={category.gradient}
              bgGradient={category.bgGradient}
              skills={category.skills}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
