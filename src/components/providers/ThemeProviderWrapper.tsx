'use client';

import { ThemeProvider } from '@/contexts/ThemeContext';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { ReactNode } from 'react';

export function ThemeProviderWrapper({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <ThemeToggle />
      {children}
    </ThemeProvider>
  );
}

