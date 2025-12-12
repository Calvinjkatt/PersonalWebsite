'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/useIsMobile';

// ============================================
// SKILL GALAXIES DATA
// ============================================
const skillGalaxies = [
  {
    title: 'Data Science & ML',
    center: 'Python',
    gradient: 'from-blue-500 to-cyan-500',
    skills: ['NumPy', 'Pandas', 'Scikit-learn', 'LangChain'],
  },
  {
    title: 'Backend & APIs',
    center: 'Java',
    gradient: 'from-purple-500 to-pink-500',
    skills: ['Node.js', 'Spring Boot', 'FastAPI', 'SQL'],
  },
  {
    title: 'Frontend & UI',
    center: 'React',
    gradient: 'from-pink-500 to-orange-500',
    skills: ['Tailwind CSS', 'Redux', 'Next.js', 'Figma'],
  },
] as const;

// ============================================
// SKILL GALAXY COMPONENT
// ============================================
interface SkillGalaxyProps {
  title: string;
  center: string;
  gradient: string; // Tailwind gradient utility, e.g. "from-blue-500 to-cyan-500"
  skills: readonly string[] | string[];
  isSelected: boolean;
  onClick: () => void;
  position: 'left' | 'center' | 'right';
}

function SkillGalaxy({ title, center, gradient, skills, isSelected, onClick, position }: SkillGalaxyProps) {
  // Different position patterns for each galaxy to create variety
  const positionSets = [
    // Pattern 1: Top, bottom-left, bottom-right, top-right
    [
      'top-4 left-1/2 -translate-x-1/2',
      'bottom-6 left-6',
      'bottom-10 right-4',
      'top-12 right-6',
    ],
    // Pattern 2: Right, bottom-left, top-left, bottom-right (rotated 90deg)
    [
      'right-6 top-1/2 -translate-y-1/2',
      'bottom-6 left-8',
      'top-8 left-6',
      'bottom-12 right-6',
    ],
    // Pattern 3: Top, bottom-left, bottom-right (optimized for 3 skills)
    [
      'top-6 left-1/2 -translate-x-1/2',
      'bottom-8 left-8',
      'bottom-8 right-8',
      'top-10 right-10', // Fallback for 4 skills if needed
    ],
  ];

  // Use different pattern based on center skill to create variety
  const patternIndex =
    center === 'Python' ? 0 : center === 'Java' ? 1 : 2;
  const positions = positionSets[patternIndex] ?? positionSets[0];

  // Responsive sizes - smaller on mobile for better fit
  const sizeClass = 'h-56 w-56 sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-80 lg:w-80';
  const centerPlanetSize = 'h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32';
  const centerPlanetText = 'text-base sm:text-lg md:text-xl font-bold';
  const orbitSkillSize = 'h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16';
  const orbitSkillText = 'text-[10px] sm:text-xs md:text-sm';

  const isMobile = useIsMobile();
  
  return (
    <motion.button
      onClick={onClick}
      className="flex flex-col items-center gap-4 sm:gap-6 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 rounded-2xl p-3 sm:p-4 transition-all touch-manipulation"
      whileHover={isMobile || !isSelected ? {} : { scale: 1.05 }}
      whileTap={isMobile ? {} : { scale: 0.98 }}
      layout={!isMobile}
      transition={isMobile ? {} : { duration: 0.5, ease: 'easeInOut' }}
      style={{ WebkitTapHighlightColor: 'transparent' }}
    >
      <motion.span
        className="text-xs sm:text-sm md:text-base tracking-[0.15em] sm:tracking-[0.2em] uppercase font-bold"
        animate={{
          opacity: isSelected ? 1 : 0.5,
          color: isSelected ? 'rgb(28 25 23)' : 'rgb(120 113 108)',
        }}
        transition={{ duration: 0.3 }}
      >
        {title}
      </motion.span>
      <div className="relative mx-auto" style={{ width: 'fit-content' }}>
        <motion.div 
          className={`relative ${sizeClass}`}
          style={{
            transformOrigin: 'center center',
          }}
          animate={isMobile ? {
            scale: isSelected ? 1 : 0.75,
            opacity: isSelected ? 1 : 0.6,
          } : {
            scale: isSelected ? 1 : 0.75,
            opacity: isSelected ? 1 : 0.6,
            rotate: isSelected ? [0, 2, -2, 0] : 0,
          }}
          transition={isMobile ? { 
            scale: { duration: 0.3 },
            opacity: { duration: 0.3 },
          } : { 
            scale: { 
              type: 'spring',
              stiffness: 200,
              damping: 20,
              duration: 0.6,
            },
            rotate: {
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            opacity: {
              duration: 0.4,
            },
          }}
        >
        {/* orbit rings - Darker for visibility, animate opacity and subtle rotation */}
        <motion.div
          className="absolute inset-10 rounded-full border border-stone-300 dark:border-stone-600"
          animate={{ 
            opacity: isSelected ? 1 : 0.4,
            rotate: isSelected ? [0, 360] : 0,
          }}
          transition={{ 
            opacity: { duration: 0.4, ease: 'easeInOut' },
            rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
          }}
        />
        <motion.div
          className="absolute inset-6 rounded-full border border-stone-300 dark:border-stone-600"
          animate={{ 
            opacity: isSelected ? 1 : 0.4,
            rotate: isSelected ? [0, -360] : 0,
          }}
          transition={{ 
            opacity: { duration: 0.4, ease: 'easeInOut' },
            rotate: { duration: 25, repeat: Infinity, ease: 'linear' },
          }}
        />
        <motion.div
          className="absolute inset-2 rounded-full border border-stone-300 dark:border-stone-600"
          animate={{ 
            opacity: isSelected ? 1 : 0.4,
            rotate: isSelected ? [0, 360] : 0,
          }}
          transition={{ 
            opacity: { duration: 0.4, ease: 'easeInOut' },
            rotate: { duration: 30, repeat: Infinity, ease: 'linear' },
          }}
        />

        {/* center planet - perfectly centered */}
        <div
          className={`absolute left-1/2 top-1/2 flex ${centerPlanetSize} items-center justify-center rounded-full bg-gradient-to-br ${gradient} shadow-xl text-white z-10`}
          style={{
            transform: 'translate(-50%, -50%)',
            margin: 0,
            padding: 0,
          }}
        >
          <span className={`${centerPlanetText} text-white whitespace-nowrap`}>{center}</span>
        </div>

        {/* orbiting skills - static positions, centered, with better text */}
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            className={`absolute flex ${orbitSkillSize} items-center justify-center rounded-full bg-gradient-to-br ${gradient} shadow-lg text-white font-medium ${
              positions[index] ?? ''
            }`}
            animate={{
              opacity: isSelected ? 1 : 0.7,
              scale: isSelected ? 1 : 0.9,
            }}
            transition={{
              duration: 0.4,
              delay: index * 0.05,
              ease: 'easeInOut',
            }}
          >
            <span className={`px-1.5 text-center text-white font-bold ${orbitSkillText}`}>{skill}</span>
          </motion.div>
        ))}
        </motion.div>
      </div>
    </motion.button>
  );
}

// ============================================
// SKILLS COMPONENT
// ============================================
export function Skills() {
  const isMobile = useIsMobile();
  // Track position of each galaxy: [leftIndex, centerIndex, rightIndex]
  // Default: [0=Python, 1=Java, 2=React]
  const [positions, setPositions] = useState<[number, number, number]>([0, 1, 2]);

  const handleSelect = (clickedIndex: number) => {
    const [leftIndex, centerIndex, rightIndex] = positions;
    
    // If clicking center, do nothing
    if (clickedIndex === centerIndex) return;
    
    // Swap clicked with center
    if (clickedIndex === leftIndex) {
      // Left clicked -> swap with center
      setPositions([centerIndex, leftIndex, rightIndex]);
    } else if (clickedIndex === rightIndex) {
      // Right clicked -> swap with center
      setPositions([leftIndex, rightIndex, centerIndex]);
    }
  };

  // Determine position for each galaxy
  const getPosition = (index: number): 'left' | 'center' | 'right' => {
    const [leftIndex, centerIndex, rightIndex] = positions;
    if (index === leftIndex) return 'left';
    if (index === centerIndex) return 'center';
    if (index === rightIndex) return 'right';
    return 'center'; // fallback
  };
  
  const getIsSelected = (index: number): boolean => {
    return positions[1] === index; // center is selected
  };

  return (
    <section
      id="skills"
      className="relative overflow-hidden py-12 md:py-16 px-6 bg-background/90 backdrop-blur-md"
    >
      <div className="mx-auto max-w-7xl lg:px-10">
        <motion.div
          initial={isMobile ? false : { opacity: 0, y: 20 }}
          whileInView={isMobile ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
                  transition={isMobile ? {} : { duration: 0.8 }}
                  className="mb-12 md:mb-16 text-center"
                >
          <span className="inline-block mb-5 text-sky-600 dark:text-sky-400 tracking-[0.15em] uppercase text-xs font-semibold">
            SKILLS & EXPERTISE
          </span>
          <h2
            className="text-stone-900 dark:text-stone-50 leading-[1.1]"
            style={{ fontSize: 'clamp(2.25rem, 5.5vw, 3.5rem)' }}
          >
            Tools that{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              orbit
            </span>{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              my workflow
            </span>
          </h2>
        </motion.div>

        {/* Desktop: Interactive 3-way selector container (horizontal) */}
        <div className="hidden lg:block relative flex items-center justify-center px-4 md:px-8 min-h-[500px] md:min-h-[600px] w-full max-w-6xl mx-auto overflow-visible">
          {skillGalaxies.map((galaxy, index) => {
            const position = getPosition(index);
            const isSelected = getIsSelected(index);
            
            // Calculate horizontal position - spread them out more
            let xPosition = 0;
            if (position === 'left') {
              xPosition = -320; // Move to left (more spread)
            } else if (position === 'right') {
              xPosition = 320; // Move to right (more spread)
            } else {
              xPosition = 0; // Center
            }
            
            return (
              <motion.div
                key={`${galaxy.title}-${positions.join('-')}`}
                layout
                initial={false}
                animate={{
                  x: `calc(-50% + ${xPosition}px)`,
                  scale: isSelected ? 1 : 0.75,
                  opacity: isSelected ? 1 : 0.65,
                  rotate: position === 'left' ? -8 : position === 'right' ? 8 : 0,
                  zIndex: isSelected ? 30 : position === 'left' ? 20 : 10,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 280,
                  damping: 25,
                  mass: 0.8,
                  duration: 0.6,
                }}
                className="absolute flex items-center justify-center"
                style={{
                  left: '50%',
                }}
              >
                <SkillGalaxy
                  title={galaxy.title}
                  center={galaxy.center}
                  gradient={galaxy.gradient}
                  skills={galaxy.skills}
                  isSelected={isSelected}
                  onClick={() => handleSelect(index)}
                  position={position}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Mobile/Tablet: Vertical stacking */}
        <div className="lg:hidden flex flex-col items-center gap-8 md:gap-12 w-full max-w-md mx-auto py-4">
          {skillGalaxies.map((galaxy, index) => {
            const isSelected = getIsSelected(index);
            
            return (
              <motion.div
                key={`${galaxy.title}-mobile-${index}`}
                initial={isMobile ? false : { opacity: 0, y: 20 }}
                whileInView={isMobile ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={isMobile ? {} : { duration: 0.5, delay: index * 0.1 }}
                className="w-full"
              >
                <SkillGalaxy
                  title={galaxy.title}
                  center={galaxy.center}
                  gradient={galaxy.gradient}
                  skills={galaxy.skills}
                  isSelected={isSelected}
                  onClick={() => handleSelect(index)}
                  position="center"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
