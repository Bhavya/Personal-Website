# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Development
- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build for production (static export)
- `npm run start` - Start production server

### Code Quality
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run format` - Check code formatting with Prettier
- `npm run format:fix` - Fix formatting issues automatically

### Utilities
- `npm run depcheck` - Check for unused dependencies using unimported
- `npm run serve` - Serve the built static files locally

## Project Architecture

### Tech Stack
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - React component library built on Radix UI
- **MDX** - Markdown processing for blog posts

### Key Directories
- `src/app/` - Next.js App Router pages and layouts
- `src/components/` - Reusable React components
  - `ui/` - shadcn/ui components
  - `layout/` - Navigation and layout components
  - `sections/` - Page section components
- `src/data/` - Static data exports (projects, experience, skills, etc.)
- `src/lib/` - Utility functions and helpers
- `src/blog/` - MDX blog posts
- `public/` - Static assets and images

### Configuration
- Uses path alias `@/*` for `src/*` imports
- Static export configuration in `next.config.mjs`
- Tailwind with custom design system and iconify integration
- Pre-commit hooks with husky and lint-staged

### Blog System
- MDX files in `src/blog/` with frontmatter (title, description, tags, image, date)
- Blog processing in `src/lib/blog.ts` with unified/remark/rehype
- Syntax highlighting with rehype-prism-plus
- Automatic slug generation from filename

### Component Patterns
- Uses shadcn/ui components with Tailwind variants
- Theme provider for dark/light mode switching
- Responsive design with mobile-first approach
- Icon system using @iconify/tailwind with dynamic selectors

### Data Management
- Static data exports from `src/data/` modules
- Centralized configuration in `src/config/`
- Type-safe data structures throughout