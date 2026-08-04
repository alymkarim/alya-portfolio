# Recruiter Fast-Path Portfolio Improvements

**Date:** 2026-08-04
**Status:** Approved
**Goal:** Make the portfolio more impressive to recruiters in ~30 seconds, emphasizing quick scannability and a memorable impression, without a full redesign.

## Context

The existing portfolio is a single-page React + TypeScript + Vite app with sections: Hero, Projects, Experience, Education, Skills, Articles, Playground, Contact. It already contains strong content (project case studies, an interactive bug game, technical writing, CV download). The improvement targets recruiter experience, not the underlying tech.

### Issues found during review
1. `About.tsx` exists but is never rendered in `App.tsx`.
2. "Developer Portfolio" project uses placeholder demo link `https://your-vercel-link.vercel.app`.
3. "Data Infrastructure for AI Systems" project references nonexistent image path `/projects/data-infrastructure.png` (files live in `/project-images/`).
4. SEO meta is minimal — no Open Graph tags, no favicon.
5. CV download buttons point at the full deployed URL instead of a local path (breaks in dev / any non-vercel origin).

## Approach

Approach A: "Recruiter Fast-Path". Rebalance the page so a recruiter gets the key proof in seconds, plus a memorable-but-low-risk interaction layer. Keep the visual design system intact.

## Design

### 1. Multi-page routing

Introduce `react-router-dom`. Site becomes:

| Route | Content |
| --- | --- |
| `/` | Homepage (recruiter fast-path) |
| `/articles` | Writing page (Articles content) |
| `/playground` | Playground page (Bug Game) |
| `/contact` | Contact page (Contact content) |

- Homepage order: Hero → Skills band → Featured Projects → About → full Projects → Experience → Education → Skills.
- Articles, Playground, and Contact move off the homepage onto their own routes (user preference).
- Navbar stays fixed on all pages and links to all destinations (Home via brand/logo, plus `projects`, `experience`, `education`, `skills`, `articles`, `playground`, `contact`).
- Use anchor links within the homepage for Projects/Experience/Education/Skills; use routes for Articles/Playground/Contact.
- CV download and social links remain reachable from the homepage hero and footer.
- `App.tsx` gains a `Router` with a shared layout (Navbar + Footer) around routed pages.
- On route change to `/articles` etc., page scrolls to top.

### 2. Hero polish

- Keep the existing hero. No structural change. Copy stays; ensure the first line clearly states the role.

### 3. Quick Facts strip (skills band)

New component `QuickFacts` rendered directly below the Hero on the homepage. A slim horizontal band of 4 skill areas, sourced from existing `src/data/skills.ts` data (no invented claims):

- **Full-stack** — React · TypeScript · FastAPI · PostgreSQL
- **Applied AI** — PyTorch · YOLO · OpenCV · LangChain
- **Data & Analytics** — Python · SQL · Pandas · Tableau
- **Cloud & DevOps** — Docker · Google Cloud · Vercel · GitHub

Responsive: single row on desktop, stacked 2×2 on tablet, 1×2/1-column on mobile.

### 4. Featured Projects block

New section between the skills band and About showing the 6 projects flagged `featured: true` in `src/data/projects.ts` (ResearchIQ, CartOS, TaskFlow, Drone-Assisted Human Detection, DeepGuard, InsightForge).

- Reuse the existing `Project` type and project card styling.
- Each card: image, title, status badge, one-line description, and an action link: "Live Demo" badge when a working demo exists, otherwise "View repo" / "Coming soon" as appropriate.
- Clicking a card opens the same expandable case-study details used by the main Projects section (extract/reuse existing detail rendering).
- Full project catalog with filters stays in the existing Projects section below.

### 5. About activation

- Render the existing `About.tsx` section between Featured Projects and the full Projects grid.
- Tighten the first paragraph into a scannable "what I do" one-liner; keep the remaining paragraphs as a short read.

### 6. Bug fixes

1. Portfolio project demo URL → `https://alya-portfolio-jade.vercel.app` (the real live URL).
2. Data Infrastructure image path → a valid path under `/project-images/`.
3. Render `About` (see section 5).
4. Add Open Graph + Twitter card meta and a favicon to `index.html`.
5. CV buttons point to `/Alya_M_Karim_CV.pdf` (local, in `public/`) so they work in dev and production.

### 7. Memorable impression (low-risk polish)

- Scroll-reveal animations on section titles/cards (IntersectionObserver + CSS, respecting `prefers-reduced-motion`).
- Standardized hover states on project cards and links.
- Active nav highlighting reflecting the current section/route.

### 8. Testing

Add `vitest` + React Testing Library, configured for Vite. Smoke tests:

- Homepage renders Hero, Skills band, Featured Projects, About, and full Projects.
- `/articles`, `/playground`, `/contact` each render their section content.
- Navbar links navigate to the expected routes.
- Bug-fix regressions: Portfolio demo link is the real URL; Data Infrastructure image path is valid.

Verification commands: `npm run lint`, `npm run build`, `npm test`.

## Out of scope

- Full visual redesign, dark mode, metrics overhaul, testimonials, certifications (Approaches B/C).
- Content additions beyond those listed.

## File impact (expected)

- `package.json` — add `react-router-dom`, `vitest`, `@testing-library/react`, `@testing-library/jest-dom`, `jsdom`.
- `src/App.tsx` — router + layout.
- `src/components/` — new `QuickFacts.tsx`, new `FeaturedProjects.tsx`; `Navbar.tsx` (routes), `Footer.tsx` (links); extracted shared case-study detail component; `About.tsx` (tighten copy); page wrappers for Articles/Playground/Contact.
- `src/index.css` — skills band, featured projects, reveal animations, active nav.
- `index.html` — OG/Twitter meta, favicon, canonical.
- `src/data/projects.ts` — two bug-fix edits.
- `src/test/` — smoke tests + setup.
