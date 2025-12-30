# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Corretiza landing page - a React application for an AI-powered real estate sales platform (Brazilian Portuguese).

## Commands

```bash
npm run dev          # Start dev server on port 3000
npm run build        # Build to out/ directory
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```

## Architecture

**Tech Stack:** React 19, Vite 7, TypeScript, Tailwind CSS

**Directory Structure:**
- `src/pages/` - Page components organized by feature, each with a `page.tsx` entry point
- `src/pages/[feature]/components/` - Page-specific components
- `src/components/feature/` - Shared components (Navbar, Footer)
- `src/router/` - React Router v7 configuration with route definitions in `config.tsx`
- `src/i18n/local/` - Translation files organized by locale (e.g., `en/`, `pt/`)

**Key Patterns:**

1. **Auto-imports enabled:** React hooks (`useState`, `useEffect`, etc.), router functions (`useNavigate`, `Link`, etc.), and i18n (`useTranslation`) are auto-imported via unplugin-auto-import. No need to manually import these.

2. **Path alias:** Use `@/` to reference `src/` directory (e.g., `@/components/feature/Navbar`)

3. **i18n dynamic loading:** Translations are loaded via `import.meta.glob` from `src/i18n/local/[lang]/*.ts`

4. **Global variables:** `__BASE_PATH__`, `__IS_PREVIEW__`, `__READDY_PROJECT_ID__`, `__READDY_VERSION_ID__`, `__READDY_AI_DOMAIN__` are defined at build time

5. **Routing:** Add new routes in `src/router/config.tsx`. Global navigate function exposed on `window.REACT_APP_NAVIGATE`

**Fonts:** Montserrat (sans), Nunito Sans (serif) - loaded from Google Fonts in index.html

**Icons:** Lucide React + Remixicon (CDN)
