'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-24">
      <div className="max-w-2xl mx-auto text-center">
        {/* Animated 404 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-8"
        >
          <h1 className="text-[8rem] md:text-[12rem] font-bold leading-none bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            404
          </h1>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4 mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 dark:text-stone-50">
            Page not found
          </h2>
          <p className="text-stone-600 dark:text-stone-400 text-lg max-w-md mx-auto">
            Looks like this page took a wrong turn. Let&apos;s get you back on track.
          </p>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-500 dark:via-purple-500 dark:to-pink-500 text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 font-semibold hover:scale-105 active:scale-95"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>

          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 dark:bg-stone-800/80 text-stone-900 dark:text-stone-100 rounded-full border border-stone-200 dark:border-stone-700 hover:bg-white dark:hover:bg-stone-800 transition-all duration-300 font-semibold hover:scale-105 active:scale-95"
          >
            <Search className="w-5 h-5" />
            View Projects
          </Link>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-3xl -z-10" />
      </div>
    </main>
  );
}
