'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/Calvinjkatt',
    color: 'hover:text-stone-700 dark:hover:text-stone-300',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/calvin-kattathara',
    color: 'hover:text-blue-600 dark:hover:text-blue-400',
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:calvinjkatt@gmail.com',
    color: 'hover:text-violet-600 dark:hover:text-violet-400',
  },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-stone-200/50 dark:border-stone-800/50 bg-white/50 dark:bg-stone-950/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 md:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              Calvin Kattathara
            </h3>
            <p className="text-sm text-stone-600 dark:text-stone-400">
              © {currentYear} All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`text-stone-500 dark:text-stone-500 ${social.color} transition-colors`}
                  aria-label={social.label}
                >
                  <Icon size={20} />
                </motion.a>
              );
            })}
          </div>

          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-500 dark:via-purple-500 dark:to-pink-500 text-white shadow-lg hover:shadow-xl transition-shadow"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>

        {/* Bottom Text */}
        <div className="mt-8 pt-6 border-t border-stone-200/50 dark:border-stone-800/50 text-center">
          <p className="text-xs text-stone-500 dark:text-stone-500">
            Full-Stack Developer & Data Engineer
          </p>
        </div>
      </div>
    </footer>
  );
}

