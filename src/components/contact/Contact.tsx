'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, Send, Sparkles, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('https://formspree.io/f/mldqkplw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        // Reset to idle after 5 seconds so user can send another message
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        const data = await response.json();
        throw new Error(data.error || 'Something went wrong');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
      // Reset to idle after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const socials = [
    {
      icon: Github,
      label: 'github.com/Calvinjkatt',
      link: 'https://github.com/Calvinjkatt',
      color: 'from-stone-700 to-stone-900',
    },
    {
      icon: Linkedin,
      label: 'linkedin.com/in/calvin-k',
      link: 'https://www.linkedin.com/in/calvin-k-2502a5261/',
      color: 'from-blue-600 to-blue-700',
    },
    {
      icon: Mail,
      label: 'calvinjkatt@gmail.com',
      link: 'mailto:calvinjkatt@gmail.com',
      color: 'from-violet-600 to-purple-600',
    },
  ] as const;

  return (
    <section
      id="contact"
      className="relative py-12 md:py-16 px-6 overflow-hidden bg-background/90 backdrop-blur-md"
    >

      <div className="relative max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-12"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="inline-block mb-5"
          >
            <Sparkles className="w-10 h-10 text-violet-600 dark:text-violet-400" />
          </motion.div>

          <h2
            className="mb-5 text-stone-900 dark:text-stone-50 leading-[1.1]"
            style={{ fontSize: 'clamp(2.25rem, 5.5vw, 3.5rem)' }}
          >
            Let&apos;s create
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              something amazing
            </span>
          </h2>

          <p
            className="max-w-2xl mx-auto text-stone-700 dark:text-stone-300 leading-relaxed"
            style={{ fontSize: '1rem', lineHeight: 1.7 }}
          >
            I&apos;m a Software Engineer interested in all realms—from full-stack development to ETL pipelines, backend systems, and AI.
            Ready to showcase my skills and make an impact. Let&apos;s connect and build something meaningful together.
          </p>
        </motion.div>

        {/* Two-column layout: form + socials */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 order-1 lg:order-1"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-semibold text-stone-700 dark:text-stone-300"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-0 pb-3 bg-transparent border-b-2 border-stone-300 dark:border-stone-600 focus:border-violet-600 dark:focus:border-violet-400 focus:border-b-2 outline-none transition-all duration-300 text-stone-900 dark:text-stone-50 placeholder-stone-400 dark:placeholder-stone-500 focus:pb-2.5 focus:scale-[1.005] text-base"
                  placeholder="What should I call you?"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-semibold text-stone-700 dark:text-stone-300"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-0 pb-3 bg-transparent border-b-2 border-stone-300 dark:border-stone-600 focus:border-violet-600 dark:focus:border-violet-400 focus:border-b-2 outline-none transition-all duration-300 text-stone-900 dark:text-stone-50 placeholder-stone-400 dark:placeholder-stone-500 focus:pb-2.5 focus:scale-[1.005] text-base"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-semibold text-stone-700 dark:text-stone-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-0 pb-3 bg-transparent border-b-2 border-stone-300 dark:border-stone-600 focus:border-violet-600 dark:focus:border-violet-400 focus:border-b-2 outline-none transition-all duration-300 text-stone-900 dark:text-stone-50 placeholder-stone-400 dark:placeholder-stone-500 resize-none focus:pb-2.5 focus:scale-[1.005] text-base"
                  placeholder="Leave me a message or just say hi..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === 'submitting'}
                whileHover={status === 'idle' ? { scale: 1.03 } : {}}
                whileTap={status === 'idle' ? { scale: 0.98 } : {}}
                className={`w-full px-8 py-3.5 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center gap-2.5 group font-semibold text-base ${
                  status === 'submitting'
                    ? 'bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 cursor-not-allowed'
                    : status === 'success'
                    ? 'bg-gradient-to-r from-green-500 to-emerald-600'
                    : status === 'error'
                    ? 'bg-gradient-to-r from-red-500 to-rose-600'
                    : 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-500 dark:via-purple-500 dark:to-pink-500 hover:shadow-xl hover:shadow-purple-500/25'
                } text-white`}
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>Message Sent!</span>
                  </>
                ) : status === 'error' ? (
                  <>
                    <AlertCircle className="w-5 h-5" />
                    <span>Try Again</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </motion.button>

              {/* Status feedback message */}
              <AnimatePresence mode="wait">
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 p-4 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-xl text-green-700 dark:text-green-300"
                  >
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <p className="text-sm">Thanks for reaching out! I&apos;ll get back to you within 24 hours.</p>
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 p-4 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-xl text-red-700 dark:text-red-300"
                  >
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <p className="text-sm">{errorMessage}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

          {/* Social links + location */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 order-2 lg:order-2"
          >
            <h3
              className="text-foreground mb-8"
              style={{ fontSize: '1.5rem' }}
            >
              Find me on
            </h3>

            {socials.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="block group"
                >
                  <div className="flex items-center gap-3.5 p-5 bg-white/60 dark:bg-stone-900/60 backdrop-blur-md rounded-xl border border-stone-200/60 dark:border-stone-700/60 hover:bg-white/70 dark:hover:bg-stone-900/70 hover:shadow-lg hover:border-stone-300/80 dark:hover:border-stone-600/80 hover:-translate-y-0.5 transition-all duration-300">
                    <div
                      className={`p-3 bg-gradient-to-br ${social.color} rounded-xl`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-stone-600 dark:text-stone-400 truncate">
                        {social.label}
                      </p>
                    </div>
                  </div>
                </motion.a>
              );
            })}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-12 p-8 bg-gradient-to-br from-violet-50/50 to-orange-50/50 dark:from-violet-950/30 dark:to-orange-950/30 rounded-2xl border border-stone-200/50 dark:border-stone-700/50"
            >
              <p className="text-foreground/80 leading-relaxed space-y-2">
                <strong className="text-foreground block">
                  Based in Toronto, Ontario
                </strong>
                <span className="block">York University (Honors)</span>
                <span className="block"> Graduation: August 2025</span>
                <span className="block text-sm mt-3">
                  Phone: <a href="tel:+14168482379" className="hover:text-violet-500 transition-colors">(416) 848-2379</a>
                </span>
                
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
              className="mt-12 md:mt-16 pt-6 border-t border-stone-200/60 dark:border-stone-700/60"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-stone-500 dark:text-stone-400">
              © 2025 Calvin Kattathara. Crafted with care.
            </p>
            <p className="text-stone-400 dark:text-stone-500">
              Thanks for stopping by ✨
            </p>
          </div>
        </motion.footer>
      </div>
    </section>
  );
}
