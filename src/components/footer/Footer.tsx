'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Sparkles } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/Calvinjkatt',
    icon: Github,
    gradient: 'from-stone-700 to-stone-900',
    hoverGradient: 'from-stone-600 to-stone-800',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/calvin-kattathara',
    icon: Linkedin,
    gradient: 'from-blue-600 to-blue-700',
    hoverGradient: 'from-blue-500 to-blue-600',
  },
  {
    name: 'Email',
    href: 'mailto:calvinjkatt@gmail.com',
    icon: Mail,
    gradient: 'from-violet-600 to-purple-600',
    hoverGradient: 'from-violet-500 to-purple-500',
  },
];

const quickLinks = [
  { name: 'Home', href: '#home' },
 
  { name: 'Contact', href: '#contact' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="relative border-t border-stone-200/50 dark:border-stone-800/50 bg-gradient-to-b from-white/80 via-white/60 to-white/40 dark:from-stone-950/80 dark:via-stone-950/60 dark:to-stone-950/40 backdrop-blur-xl">
      {/* Top decorative message */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-8 pb-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-stone-500 dark:text-stone-400 font-medium"
          >
            © {currentYear} Calvin Kattathara. Crafted with care.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-stone-500 dark:text-stone-400 font-medium flex items-center gap-2"
          >
            Thanks for stopping by <Sparkles className="w-4 h-4 text-purple-500 dark:text-purple-400" />
          </motion.p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10 pb-12 md:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 lg:gap-16">
          {/* Brand Section */}
          <div className="space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center space-x-3 mb-5">
                <div className="relative group">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 rounded-xl blur-md opacity-60 group-hover:opacity-80 transition-opacity" />
                  {/* Logo box */}
                  <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 dark:from-blue-500 dark:via-purple-500 dark:to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/30 dark:shadow-purple-500/20 group-hover:scale-105 transition-transform">
                    <span className="text-lg font-bold text-white">
                      CK
                    </span>
                  </div>
                </div>
                <span className="text-xl font-bold text-stone-900 dark:text-stone-100">
                  Calvin Kattathara
                </span>
              </div>
              <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed max-w-xs">
                Full-Stack Developer & Data Engineer crafting scalable solutions with AI & modern tech.
              </p>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xs font-bold text-stone-900 dark:text-stone-100 uppercase tracking-[0.15em] mb-4"
            >
              Quick Links
            </motion.h3>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-3"
            >
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-sm text-stone-600 dark:text-stone-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 inline-flex items-center gap-2 group font-medium"
                  >
                    <span className="relative">
                      {link.name}
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Social Links */}
          <div className="space-y-5">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xs font-bold text-stone-900 dark:text-stone-100 uppercase tracking-[0.15em] mb-4"
            >
              Connect
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-3"
            >
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="relative group"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={link.name}
                  >
                    {/* Glow effect on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${link.gradient} rounded-xl blur-md opacity-0 group-hover:opacity-50 transition-opacity -z-10`} />
                    {/* Icon container */}
                    <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${link.gradient} flex items-center justify-center shadow-lg shadow-black/10 dark:shadow-black/30 group-hover:shadow-xl transition-all duration-300`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 pt-8 border-t border-stone-200/60 dark:border-stone-800/60"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-sm text-stone-500 dark:text-stone-400 font-medium"
            >
              © {currentYear} Calvin Kattathara. All rights reserved.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-sm text-stone-500 dark:text-stone-400 font-medium"
            >
              Built with{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent font-semibold">
                Next.js
              </span>
              {' '}&{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent font-semibold">
                React
              </span>
            </motion.p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

