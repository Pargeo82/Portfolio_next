# CLAUDE.md

Next.js + TypeScript portfolio site for Mislav Markušić (Pargeo) — frontend developer & UX/UI designer.

## Commands

```bash
npm run dev     # dev server on port 3000
npm run build   # next build + next-sitemap (postbuild)
npm start       # production server
```

> Dev server is assumed to already be running on port 3000 during active development — do not attempt to start it.

## Stack

- **Next.js 13 + React 18 + TypeScript 5** — Pages Router
- **MUI (Material UI) v5** — component library; use MUI components and `sx` prop for styling
- **Emotion** — CSS-in-JS via MUI's styling system
- **@next/mdx + gray-matter** — MDX blog posts with frontmatter
- **@vercel/analytics + @vercel/speed-insights** — Vercel analytics
- **Umami** — self-hosted analytics via `next/script` in `_app.tsx`
- **react-github-calendar** — GitHub contributions widget
- **typewriter-effect** — typewriter animation on homepage
- **next-sitemap** — sitemap generation on build
- **pnpm** — package manager (not npm or yarn)

## Architecture

**Pages Router** (`pages/`): Standard Next.js pages directory.

**Components** (`src/components/`): Organized by feature:

- `Layout/` — page wrapper with Navbar + Footer
- `Navigation/` — navbar
- `Footer/` — footer
- `Home/` — homepage sections
- `Projects/` — project cards and detail components
- `Hobbies/` — hobbies page components
- `technologies/` — tech stack display

**Data** (`src/data/`): Static article/blog content (MDX files).

**Theme & styles** (`src/theme.ts`, `src/styles/`): MUI theme config and global CSS.

## Pages

| Route                  | Description                  |
| ---------------------- | ---------------------------- |
| `/`                    | Homepage                     |
| `/hobbies`             | Hobbies                      |
| `/blog`                | Blog index                   |
| `/blog/[slug]`         | Blog post (MDX)              |
| `/projects`            | Projects index               |
| `/projects/portfolio`  | Portfolio project            |
| `/projects/mai`        | Kozmetički salon Mai project |
| `/projects/harmonie`   | Harmonie project             |
| `/projects/cedeterija` | Cedeterija project           |
| `/projects/gt`         | GT project                   |
| `/projects/marolija`   | Marolija project             |
| `/projects/Pd`         | Pd project                   |

## Conventions

- **Files**: PascalCase for components (`MyComponent.tsx`), camelCase for hooks/utils
- **Imports**: use relative paths (no `@/` alias configured)
- **No console.log** — only `console.warn/error/info`
- **No nested ternaries**
