import type { Metadata, Viewport } from 'next';
import './globals.css';
import { ThemeProviderWrapper } from '@/components/providers/ThemeProviderWrapper';
import { AnimatedBackground } from '@/components/background/AnimatedBackground';
import { Navbar } from '@/components/navbar/Navbar';
import { Footer } from '@/components/footer/Footer';

export const metadata: Metadata = {
  title: 'Calvin Kattathara | Full-Stack Developer & Data Engineer',
  description: 'Graduating August 2025 with a Bachelor\'s Degree in Computer Science from York University. Full-Stack Developer & Data Engineer specializing in scalable systems, AI automation, and modern web technologies.',
  keywords: ['Calvin Kattathara', 'Full-Stack Developer', 'Data Engineer', 'Computer Science', 'York University', 'Software Engineer', 'React', 'Python', 'Java', 'AI', 'Machine Learning'],
  authors: [{ name: 'Calvin Kattathara' }],
  creator: 'Calvin Kattathara',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://calvinkattathara.com',
    title: 'Calvin Kattathara | Full-Stack Developer & Data Engineer',
    description: 'Full-Stack Developer & Data Engineer specializing in scalable systems, AI automation, and modern web technologies.',
    siteName: 'Calvin Kattathara Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calvin Kattathara | Full-Stack Developer & Data Engineer',
    description: 'Full-Stack Developer & Data Engineer specializing in scalable systems, AI automation, and modern web technologies.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0f' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth light" suppressHydrationWarning>
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className="theme-transition relative overflow-x-hidden antialiased">
        <ThemeProviderWrapper>
          <AnimatedBackground />
          <Navbar />
          {children}
          <Footer />
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}

