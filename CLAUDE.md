# CLAUDE.md

This file provides guidance to Claude Code when working on this **Online Portfolio** project.

The project is a **creative, modern portfolio site** for a graduating Computer Science student, built with **React / Next.js + TypeScript + Tailwind CSS + Framer Motion**.

Claude should always read and respect this document before making significant changes.

---

## 🎯 Core Product Vision

This portfolio should feel like a **creative experience**, not a generic dev template.

Key characteristics:

- **Fluid & modern** – soft gradients, flowing shapes, minimal boxes.

- **Highly visual** – creative portrait, fluid backgrounds, cinematic sections.

- **Clear storytelling** – hero → skills → projects → about → contact.

- **Fast & responsive** – works beautifully on mobile, tablet, and desktop.

- **Accessible & semantic** – WCAG-friendly, keyboard navigable.

When in doubt, prioritize:

1. **Clarity & usability**

2. **Consistent visual language**

3. **Simplicity in code structure**

4. **Ease of future updates (adding projects/skills)**

---

## Project Overview

This is a creative, modern online portfolio showcasing professional work, skills, and achievements for a graduating Computer Science student. The project focuses on creating a beautiful, fluid, and highly visual web experience that tells a clear story.

## Project Awareness and Context Rules

### Core Principles
- **Creative Experience**: Prioritize visual appeal and creative expression while maintaining usability
- **Fluid & Modern Design**: Use soft gradients, flowing shapes, minimal boxes - avoid rigid templates
- **Highly Visual**: Incorporate creative portraits, fluid backgrounds, cinematic sections
- **Clear Storytelling**: Follow hero → skills → projects → about → contact narrative flow
- **Mobile-First**: Ensure excellent mobile experience across all devices
- **Performance**: Optimize for fast load times and smooth interactions
- **Accessibility First**: WCAG-friendly, keyboard navigable, semantic HTML
- **SEO Friendly**: Structure content for search engine optimization
- **Simplicity (KISS)**: Choose straightforward solutions over complex ones - simple code is easier to understand, maintain, and debug
- **YAGNI**: Only implement features when they are actually needed, avoid speculative development

### Technology Stack

Unless explicitly instructed otherwise, assume:

- **Framework:** Next.js (latest stable)  
- **Language:** TypeScript  
- **Styling:** Tailwind CSS  
- **Animation:** Framer Motion (primary), CSS transitions where sufficient  
- **Forms / Validation:** React Hook Form + basic client-side validation (optional)  
- **Testing:** Jest + React Testing Library (unit/integration), Playwright (optional E2E)

### NPM Scripts (assumed)

```bash
npm run dev      # local dev
npm run build    # production build
npm run start    # start prod server
npm run lint     # linting
npm run test     # unit/integration tests
```

## Code Structure Guidelines

### Directory Organization
```
/
├── app/                 # Next.js App Router (if using App Router)
│   ├── (routes)/       # Route groups
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # Reusable UI components
│   ├── ui/            # Base UI components
│   └── sections/      # Page sections (Hero, Skills, etc.)
├── lib/               # Utility functions and helpers
├── styles/            # Global styles and Tailwind config
├── public/            # Static assets (images, icons, fonts)
├── __tests__/         # Test files
└── types/             # TypeScript type definitions
```

### Component Guidelines
- **Single Responsibility**: Each component should have one clear purpose
- **Reusability**: Create generic, reusable components when possible
- **Naming**: Use descriptive, PascalCase names for components
- **Props**: Define clear TypeScript/PropTypes interfaces
- **Composition**: Prefer composition over complex component hierarchies

### File Naming Conventions
- Components: `PascalCase.tsx` or `PascalCase.jsx`
- Utilities: `camelCase.ts` or `camelCase.js`
- Styles: `kebab-case.css` or component-scoped styles
- Constants: `UPPER_SNAKE_CASE.ts`

## Testing Requirements

### Testing Strategy
- **Unit Tests**: Test individual components and utility functions
- **Integration Tests**: Test component interactions and data flow
- **E2E Tests**: Test critical user journeys (if applicable)
- **Visual Regression**: Test UI consistency across browsers

### Testing Commands
- Run tests: `npm test` or `npm run test`
- Run tests in watch mode: `npm test -- --watch`
- Run E2E tests: `npm run test:e2e` (if Playwright configured)
- Coverage: Aim for >80% coverage on critical paths
- Test files: Place tests alongside components or in `__tests__` directories with `.test.tsx` or `.spec.tsx` extensions

### Test Requirements
- **IMPORTANT**: All new features must include corresponding tests
- Test edge cases and error handling
- Mock external dependencies and API calls
- Ensure tests are fast and independent

## Task Completion Workflow

### Development Process
1. **Planning**: Understand requirements and break down into tasks
2. **Implementation**: Write clean, maintainable code following guidelines
3. **Testing**: Write and run tests to verify functionality
4. **Code Review**: Self-review before considering complete
5. **Documentation**: Update relevant documentation if needed

### Completion Checklist
- [ ] Code follows style conventions
- [ ] Tests pass and coverage is adequate
- [ ] No linter errors or warnings
- [ ] Code is properly commented where complex
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] Accessibility standards met (WCAG 2.1 AA minimum)
- [ ] Performance metrics are acceptable

### Before Completing Tasks
- **Proactively** check for potential improvements or edge cases
- Verify cross-browser compatibility if applicable
- Check for accessibility issues (keyboard navigation, screen readers)
- Validate semantic HTML structure
- Optimize images and assets

## Style Conventions

### Code Style
- **Indentation**: 2 spaces (for JavaScript/TypeScript)
- **Quotes**: Single quotes for JavaScript, double for JSX attributes
- **Semicolons**: Consistent use throughout (recommended: use semicolons)
- **Line Length**: Maximum 100 characters, prefer 80-90
- **Trailing Commas**: Use in arrays and objects for cleaner diffs

### CSS/Styling
- **Tailwind CSS**: Primary styling approach with utility classes
- **CSS Variables**: Use CSS custom properties for theming (can be configured in Tailwind config)
- **Responsive Breakpoints**: Use Tailwind's default breakpoints (sm, md, lg, xl, 2xl) with mobile-first approach
- **Color Palette**: Maintain consistent color scheme defined in `tailwind.config.js`
- **Animations**: Prefer Framer Motion for complex animations, CSS transitions for simple hover/state changes
- **Custom Styles**: Place custom CSS in global styles file or use Tailwind's `@apply` directive sparingly

### Code Quality
- **KISS (Keep It Simple, Stupid)**: Simplicity should be a key goal in design. Choose straightforward solutions over complex ones whenever possible. Simple solutions are easier to understand, maintain, and debug.
- **YAGNI (You Aren't Gonna Need It)**: Avoid building functionality on speculation. Implement features only when they are needed, not when you anticipate they might be useful in the future.
- **DRY Principle**: Don't repeat yourself - extract common functionality
- **Clear Naming**: Use descriptive variable and function names
- **Small Functions**: Keep functions focused and under 50 lines when possible
- **Comment Complex Logic**: Explain "why" not "what"

## Documentation Standards

### Code Documentation
- **JSDoc Comments**: Document all public functions and components
- **README Files**: Include setup instructions and project overview
- **Inline Comments**: Explain complex logic or non-obvious decisions
- **Component Props**: Document all component props with types and descriptions

### Documentation Requirements
- README.md with setup and development instructions
- Component documentation for reusable components
- API documentation if applicable
- Deployment instructions

## Advanced Prompting Techniques

### Power Keywords for Claude
- **IMPORTANT**: Use for critical instructions that must not be overlooked
- **Proactively**: Encourage Claude to suggest improvements and optimizations
- **Ultra-think**: Request deeper analysis when needed (use sparingly)

### Essential Prompt Engineering
- Be specific about requirements rather than using vague terms like "production-ready"
- Ask Claude to create validation scripts: "After implementing, create a validation script"
- Focus on clarity and specific requirements
- Avoid backward compatibility unless specifically needed

### Effective Prompting Examples
- ✅ "Create a responsive navigation component that works on mobile and desktop"
- ✅ "After implementing the contact form, create a script to validate form submissions"
- ❌ Avoid: "Make it production-ready" (too vague)
- ❌ Avoid: "Optimize everything" (not actionable)

## Portfolio-Specific Guidelines

### Design Philosophy
- **Visual Storytelling**: Each section should flow naturally into the next (hero → skills → projects → about → contact)
- **Fluid Aesthetics**: Prefer soft gradients, flowing shapes, and organic forms over rigid boxes
- **Cinematic Sections**: Create engaging, visually rich sections that feel like scenes in a story
- **Minimal but Expressive**: Clean layouts with creative visual elements that enhance rather than distract
- **Creative Portrait**: Showcase personality through visual design choices

### Content Management
- Easy to update portfolio items, projects, and achievements
- Consider using JSON/TypeScript data files or markdown for content
- Maintain separation between content and presentation
- Structure project data in a way that's easy to add/modify projects

### Performance Priorities
- **IMPORTANT**: Fast initial page load (target: <3 seconds)
- Optimize images with modern formats (WebP, AVIF) with fallbacks
- Lazy load images and content below the fold
- Minimize JavaScript bundle size
- Use code splitting for route-based loading

### Accessibility Requirements
- Semantic HTML5 elements
- ARIA labels where appropriate
- Keyboard navigation support
- Alt text for all images
- Color contrast ratios meeting WCAG AA standards
- Focus indicators for interactive elements

### SEO Considerations
- Semantic HTML structure
- Meta tags (title, description, Open Graph)
- Structured data (JSON-LD) for rich snippets
- Clean, descriptive URLs
- Sitemap.xml and robots.txt

## Development Workflow

### Before Starting Development
1. Review project requirements and design specifications
2. Check existing codebase for patterns and conventions
3. Set up development environment if needed
4. Review any design mockups or wireframes

### During Development
- Make incremental commits with clear messages
- Test changes in browser as you develop
- Check for console errors and warnings
- Verify responsive behavior at different breakpoints

### Code Review Checklist
- [ ] Code follows established patterns
- [ ] No hardcoded values (use configuration)
- [ ] Error handling is appropriate
- [ ] No console.log statements in production code
- [ ] No commented-out code (remove or document why it's kept)

## Common Patterns and Best Practices

### Component Patterns
- Use functional components with TypeScript
- Extract custom hooks for reusable logic (especially animation logic)
- Use Framer Motion for animations - prefer `motion` components over CSS animations for complex effects
- Use context for shared state sparingly (theme, user preferences)
- Prefer composition over inheritance
- Use Next.js Image component for optimized image loading
- Leverage Next.js server components where possible (App Router)

### Performance Patterns
- Memoize expensive calculations
- Use React.memo() or useMemo() judiciously
- Debounce/throttle user input handlers
- Code split routes and heavy components

### Security Considerations
- Sanitize user input
- Validate data on client and server
- Use HTTPS in production
- Avoid exposing sensitive information in client-side code

## Questions to Ask When Stuck

1. Is there existing code that solves a similar problem?
2. What would make this easier to test and maintain?
3. How can this be simplified?
4. Are there accessibility concerns I should address?
5. What edge cases need to be handled?

---

**Note**: This document should evolve with the project. Update guidelines as patterns and preferences are established.

