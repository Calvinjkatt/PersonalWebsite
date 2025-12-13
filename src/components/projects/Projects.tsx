'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { useMobileOptimization } from '@/hooks/useMobileOptimization';

// ============================================
// PROJECT TYPE
// ============================================
type Project = {
  title: string;
  description: string;
  technologies: string[];
  gradient: string;
  githubUrl?: string;
  liveUrl?: string;
};

// ============================================
// PROJECTS DATA
// ============================================
const projects: Project[] = [
  {
    title: 'Marketplace System',
    description: 'Scalable auction platform with Dutch Auctions, real-time bidding, and secure RESTful APIs.',
    technologies: ['Java', 'Spring Boot', 'REST API', 'SQL', 'Docker', 'React.js', 'PostgreSQL', 'JPA/Hibernate', 'Tailwind CSS'],
    gradient: 'from-blue-500 to-cyan-500',
    githubUrl: 'https://github.com/Calvinjkatt/SpringBootAuction',
  },
  {
    title: 'MediaDL Web Application',
    description: 'High-performance media platform with mobile-first design and optimized architecture.',
    technologies: ['JavaScript', 'Node.js', 'React', 'Tailwind CSS', 'Redis', 'Bootstrap', 'PM2'],
    gradient: 'from-purple-500 to-pink-500',
    liveUrl: 'https://mediadl.app/en',
  },
  {
    title: 'Etsy AI Agent Automation',
    description: 'End-to-end AI-powered automation system for Etsy product creation and listing.',
    technologies: ['OpenAI', 'n8n', 'REST API', 'Gelato', 'Etsy API'],
    gradient: 'from-pink-500 to-orange-500',
  },
  {
    title: 'S&P 500 Machine Learning Project',
    description: 'Predictive ML model that forecasts S&P 500 index values with high accuracy.',
    technologies: ['Python', 'Jupyter', 'Pandas', 'NumPy', 'Seaborn', 'Matplotlib', 'Machine Learning'],
    gradient: 'from-violet-500 to-indigo-500',
    githubUrl: 'https://github.com/Calvinjkatt/MachineLearningStock',
  },
];

// ============================================
// PROJECT CARD COMPONENT
// ============================================
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isMobile = useMobileOptimization();
  
  return (
    <motion.div
      initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
      viewport={isMobile ? undefined : { once: true, amount: 0.3 }}
      transition={isMobile ? { duration: 0 } : { duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      {/* Blurred gradient background */}
      <div
        className={`absolute -inset-4 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 rounded-3xl`}
      />

      {/* Glassmorphism card */}
      <div className="relative bg-white/70 dark:bg-stone-900/70 backdrop-blur-md rounded-xl p-5 md:p-6 border border-stone-200/60 dark:border-stone-700/60 shadow-md group-hover:shadow-xl group-hover:border-stone-300/80 dark:group-hover:border-stone-600/80 transition-all duration-300 h-full flex flex-col">
        {/* Gradient accent bar */}
        <motion.div
          className={`h-0.5 mb-5 rounded-full bg-gradient-to-r ${project.gradient}`}
          initial={{ width: 56 }}
          whileHover={isMobile ? undefined : { width: 100 }}
          transition={isMobile ? { duration: 0 } : { duration: 0.3 }}
        />

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-stone-900 dark:text-stone-50 mb-2.5 group-hover:translate-x-1 transition-transform duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-stone-700 dark:text-stone-300 mb-4 text-sm md:text-base leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
          {project.technologies.map((tech) => (
            <motion.span
              key={tech}
              whileHover={{ scale: 1.05, y: -1 }}
              className="px-2.5 py-1 text-xs font-medium bg-stone-100/80 dark:bg-stone-800/80 text-stone-700 dark:text-stone-300 rounded-full border border-stone-200/60 dark:border-stone-700/60 hover:border-stone-300 dark:hover:border-stone-600 hover:bg-stone-100 dark:hover:bg-stone-800 transition-all cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-3 border-t border-stone-200/60 dark:border-stone-700/60">
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-stone-700 dark:text-stone-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </motion.a>
          )}
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-stone-700 dark:text-stone-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-4 h-4" />
              Code
            </motion.a>
          )}
          {!project.liveUrl && !project.githubUrl && (
            <span className="text-sm text-stone-500 dark:text-stone-500 italic">
              Coming soon
            </span>
          )}
        </div>

        {/* Decorative corner element */}
        <div
          className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl ${project.gradient} opacity-5 rounded-tl-3xl blur-2xl`}
        />
      </div>
    </motion.div>
  );
}

// ============================================
// PROJECTS COMPONENT
// ============================================
export function Projects() {
  const isMobile = useMobileOptimization();
  
  return (
    <section
      id="projects"
      className="relative overflow-hidden py-12 md:py-16 px-6 bg-background/90 backdrop-blur-md"
    >
      <div className="mx-auto max-w-7xl lg:px-10">
        {/* Heading */}
        <motion.div
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
          viewport={isMobile ? undefined : { once: true, amount: 0.4 }}
          transition={isMobile ? { duration: 0 } : { duration: 0.8 }}
          className="mb-12 md:mb-16 text-center"
        >
          <span className="inline-block mb-5 text-sky-600 dark:text-sky-400 tracking-[0.15em] uppercase text-xs font-semibold">
            My Work
          </span>
          <h2
            className="text-stone-900 dark:text-stone-50 leading-[1.1]"
            style={{ fontSize: 'clamp(2.25rem, 5.5vw, 3.5rem)' }}
          >
            Projects that{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              push boundaries
            </span>
          </h2>
          <p className="mt-3 text-base md:text-lg text-stone-700 dark:text-stone-300 max-w-2xl mx-auto leading-relaxed">
            Building solutions that matter, one line of code at a time.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
          viewport={isMobile ? undefined : { once: true }}
          transition={isMobile ? { duration: 0 } : { duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </motion.div>

        {/* CTA Footer */}
        <motion.div
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
          viewport={isMobile ? undefined : { once: true }}
          transition={isMobile ? { duration: 0 } : { duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-500 dark:via-purple-500 dark:to-pink-500 text-white rounded-full font-semibold shadow-md hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            whileHover={isMobile ? undefined : { scale: 1.05 }}
            whileTap={isMobile ? undefined : { scale: 0.95 }}
          >
            Let&apos;s Build Something Together
            <ArrowUpRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

