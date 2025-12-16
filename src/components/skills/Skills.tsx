'use client';

import { motion } from 'framer-motion';
import { Brain, Server, Layout, TrendingUp, Terminal, Database, Sparkles } from 'lucide-react';

// ============================================
// ANIMATED DASHBOARD CHART
// ============================================
function AnimatedChart() {
  const bars = [
    { height: 35, delay: 0 },
    { height: 55, delay: 0.1 },
    { height: 42, delay: 0.2 },
    { height: 68, delay: 0.3 },
    { height: 52, delay: 0.4 },
    { height: 78, delay: 0.5 },
    { height: 62, delay: 0.6 },
  ];

  return (
    <div className="relative w-full h-24">
      {/* Grid lines */}
      <div className="absolute inset-0 flex flex-col justify-between py-2 pointer-events-none">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="w-full h-px bg-stone-200/50 dark:bg-stone-700/30" />
        ))}
      </div>

      {/* Bar chart */}
      <div className="relative h-full flex items-end justify-between gap-2 px-1">
        {bars.map((bar, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-t-md bg-gradient-to-t from-pink-500 to-orange-400 relative overflow-hidden"
            initial={{ height: 0 }}
            whileInView={{ height: `${bar.height}%` }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: bar.delay,
              ease: [0.23, 1, 0.32, 1]
            }}
          >
            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              initial={{ x: '-100%' }}
              whileInView={{ x: '200%' }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: bar.delay + 0.5 }}
            />
          </motion.div>
        ))}
      </div>

      {/* Floating percentage badge */}
      <motion.div
        className="absolute top-0 right-0 px-2 py-1 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full text-white text-xs font-bold shadow-lg"
        initial={{ opacity: 0, scale: 0.5, y: 10 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1, duration: 0.4, type: "spring" }}
      >
        +24%
      </motion.div>
    </div>
  );
}

// ============================================
// CODE SNIPPET DISPLAY
// ============================================
function CodeSnippet() {
  const lines = [
    { indent: 0, text: 'const', keyword: true, rest: ' skills = {' },
    { indent: 1, text: 'frontend:', keyword: false, rest: " ['React', 'Next.js']," },
    { indent: 1, text: 'backend:', keyword: false, rest: " ['Node', 'Java']," },
    { indent: 1, text: 'data:', keyword: false, rest: " ['Python', 'SQL']" },
    { indent: 0, text: '};', keyword: false, rest: '' },
  ];

  return (
    <div className="font-mono text-xs leading-relaxed">
      {lines.map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.3 }}
          style={{ paddingLeft: `${line.indent * 16}px` }}
        >
          <span className="text-purple-400">{line.text}</span>
          <span className="text-stone-300">{line.rest}</span>
        </motion.div>
      ))}
    </div>
  );
}

// ============================================
// METRIC COUNTER
// ============================================
function MetricCounter({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <motion.div
        className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        {value}
      </motion.div>
      <div className="text-xs text-stone-500 dark:text-stone-400 mt-1 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}

// ============================================
// SKILL PILL
// ============================================
function SkillPill({ skill, gradient, delay }: { skill: string; gradient: string; delay: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.3 }}
      whileHover={{ scale: 1.05, y: -2 }}
      className={`px-3 py-1.5 text-sm font-medium rounded-full bg-gradient-to-r ${gradient} text-white shadow-sm hover:shadow-md transition-shadow cursor-default`}
    >
      {skill}
    </motion.span>
  );
}

// ============================================
// BENTO CARD WRAPPER
// ============================================
interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

function BentoCard({ children, className = '', delay = 0 }: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4 }}
      className={`group relative bg-white/70 dark:bg-stone-900/70 backdrop-blur-xl rounded-2xl border border-stone-200/60 dark:border-stone-700/60 p-5 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
}

// ============================================
// SKILLS COMPONENT - BENTO GRID
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
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
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
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[minmax(140px,auto)]">

          {/* Large Card - Frontend & UI (spans 2 cols, 2 rows) - Hero position */}
          <BentoCard className="col-span-2 row-span-2" delay={0}>
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-pink-500 to-orange-500 shadow-lg">
                  <Layout className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-stone-900 dark:text-stone-50">Frontend & UI</h3>
                  <p className="text-xs text-stone-500 dark:text-stone-400">Crafting user experiences</p>
                </div>
              </div>

              {/* Mini chart */}
              <div className="mb-4 px-2">
                <AnimatedChart />
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {['JavaScript', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'Figma'].map((skill, i) => (
                  <SkillPill key={skill} skill={skill} gradient="from-pink-500 to-orange-500" delay={0.1 + i * 0.05} />
                ))}
              </div>
            </div>
          </BentoCard>

          {/* Medium Card - Backend (spans 2 cols) */}
          <BentoCard className="col-span-2" delay={0.1}>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg">
                  <Server className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-stone-900 dark:text-stone-50">Backend & APIs</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Java', 'C#', '.NET', 'Node.js', 'Spring Boot', 'FastAPI', 'SQL'].map((skill, i) => (
                  <SkillPill key={skill} skill={skill} gradient="from-purple-500 to-pink-500" delay={0.15 + i * 0.05} />
                ))}
              </div>
            </div>
          </BentoCard>

          {/* Code Snippet Card */}
          <BentoCard className="col-span-2 md:col-span-1 row-span-1 bg-stone-900 dark:bg-stone-950 border-stone-700" delay={0.2}>
            <div className="flex items-center gap-2 mb-3">
              <Terminal className="w-4 h-4 text-green-400" />
              <span className="text-xs text-stone-400 font-mono">skills.ts</span>
            </div>
            <CodeSnippet />
          </BentoCard>

          {/* Metrics Card */}
          <BentoCard className="col-span-2 md:col-span-1" delay={0.25}>
            <div className="h-full flex flex-col justify-center items-center gap-4">
              <div className="flex gap-6">
                <MetricCounter value="15+" label="Technologies" />
                <MetricCounter value="3+" label="Years Exp" />
              </div>
            </div>
          </BentoCard>

          {/* Data Science Card (spans 2 cols) */}
          <BentoCard className="col-span-2" delay={0.3}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-stone-900 dark:text-stone-50">Data Science & ML</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Python', 'NumPy', 'Pandas', 'Scikit-learn', 'LangChain', 'Gemini AI', 'Claude'].map((skill, i) => (
                  <SkillPill key={skill} skill={skill} gradient="from-blue-500 to-cyan-500" delay={0.35 + i * 0.05} />
                ))}
              </div>
            </div>
          </BentoCard>

          {/* Tools & DevOps Small Card */}
          <BentoCard className="col-span-2" delay={0.35}>
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 shadow-lg">
                  <Database className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-stone-900 dark:text-stone-50">Tools & DevOps</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Git', 'Docker', 'PostgreSQL', 'REST APIs', 'CI/CD'].map((skill, i) => (
                  <SkillPill key={skill} skill={skill} gradient="from-emerald-500 to-teal-500" delay={0.4 + i * 0.05} />
                ))}
              </div>
            </div>
          </BentoCard>

        </div>
      </div>
    </section>
  );
}
