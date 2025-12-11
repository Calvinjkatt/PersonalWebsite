import { Hero } from '@/components/hero/Hero';
import { Skills } from '@/components/skills/Skills';
import { Experience } from '@/components/experience/Experience';
import { Projects } from '@/components/projects/Projects';
import { Contact } from '@/components/contact/Contact';

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
