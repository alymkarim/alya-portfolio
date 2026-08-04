# Recruiter Fast-Path Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebalance the portfolio into a recruiter fast-path homepage plus separate Articles, Playground, and Contact pages, and fix known bugs.

**Architecture:** Add `react-router-dom` with a shared `Layout` (Navbar + Footer). The homepage composes Hero → QuickFacts skills band → FeaturedProjects → About → Projects → Experience → Education → Skills. Articles/Playground/Contact move to their own routes. Extract the project case-study detail view into a shared component reused by both the featured block and the full catalog. Add Vitest + React Testing Library smoke tests.

**Tech Stack:** React 18, TypeScript, Vite 6, react-router-dom 7, lucide-react, vitest, @testing-library/react, jsdom.

## Global Constraints

- Commands run from repo root (`C:\Users\user\alya-portfolio\alya-portfolio`).
- ESLint is enforced: `npm run lint` must pass (flat config, `eslint.config.js`).
- Build is `npm run build` = `tsc -b && vite build`; TypeScript strictness must hold.
- No comments in code unless the file already has them. Follow existing component style (function components, default export).
- All copy is real from existing data; do not invent new claims. Skills band content is fixed below.
- Every task ends with a commit. Never commit secrets.
- Test files go in `src/test/`; `tsconfig.app.json` excludes `src/test` from the app build.
- CV asset lives at `public/Alya_M_Karim_CV.pdf`.
- Deployed site URL: `https://alya-portfolio-jade.vercel.app`.

---

### Task 1: Test harness + routing dependencies

**Files:**
- Modify: `package.json`
- Modify: `vite.config.ts`
- Create: `src/test/setup.ts`
- Create: `src/test/harness.test.ts`
- Modify: `tsconfig.app.json`

**Interfaces:**
- Consumes: nothing.
- Produces: `npm test` script; Vitest config with jsdom + setup file; proof the harness runs.

- [ ] **Step 1: Install dependencies**

Run:
```bash
npm i react-router-dom
npm i -D vitest jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

- [ ] **Step 2: Add test script to `package.json`**

Add to `"scripts"`:
```json
"test": "vitest run",
"test:watch": "vitest"
```

- [ ] **Step 3: Configure Vitest in `vite.config.ts`**

Replace the whole file with:
```ts
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
  },
});
```

- [ ] **Step 4: Create test setup**

Create `src/test/setup.ts`:
```ts
import "@testing-library/jest-dom/vitest";
```

- [ ] **Step 5: Exclude tests from the app build**

In `tsconfig.app.json`, add `"exclude": ["src/test"]` (next to the existing `include`).

- [ ] **Step 6: Write a harness smoke test**

Create `src/test/harness.test.ts`:
```ts
import { describe, it, expect } from "vitest";

describe("test harness", () => {
  it("runs vitest", () => {
    expect(1 + 1).toBe(2);
  });
});
```

- [ ] **Step 7: Run tests to verify the harness**

Run: `npm test`
Expected: 1 passing test.

- [ ] **Step 8: Verify build still works**

Run: `npm run build`
Expected: build succeeds.

- [ ] **Step 9: Commit**

```bash
git add package.json package-lock.json vite.config.ts tsconfig.app.json src/test
git commit -m "test: add vitest + react-router-dom harness"
```

---

### Task 2: Data and CV bug fixes

**Files:**
- Modify: `src/data/projects.ts`
- Modify: `src/components/Hero.tsx:35`
- Modify: `src/components/Contact.tsx:69-74`

**Interfaces:**
- Consumes: nothing.
- Produces: corrected `Project.demo` on "portfolio", corrected `Project.image` on "data-infrastructure", CV hrefs that work on any origin.

- [ ] **Step 1: Fix the portfolio demo link**

In `src/data/projects.ts`, the "Developer Portfolio" project (id `portfolio`), change:
```ts
demo: "https://your-vercel-link.vercel.app",
```
to:
```ts
demo: "https://alya-portfolio-jade.vercel.app",
```

- [ ] **Step 2: Fix the data-infrastructure image path**

In `src/data/projects.ts`, the "Data Infrastructure for AI Systems" project (id `data-infrastructure`), change:
```ts
image: "/projects/data-infrastructure.png",
```
to:
```ts
image: "/project-images/analytics.svg",
```
(`public/project-images/analytics.svg` exists; the old path/file does not.)

- [ ] **Step 3: Fix the Hero CV href**

In `src/components/Hero.tsx`, change:
```tsx
href="https://alya-portfolio-jade.vercel.app/Alya_M_Karim_CV.pdf"
```
to:
```tsx
href="/Alya_M_Karim_CV.pdf"
```

- [ ] **Step 4: Fix the Contact CV href**

In `src/components/Contact.tsx`, change:
```tsx
href="https://alya-portfolio-jade.vercel.app/Alya_M_Karim_CV.pdf"
```
to:
```tsx
href="/Alya_M_Karim_CV.pdf"
```

- [ ] **Step 5: Verify**

Run: `npm run build`
Expected: build succeeds. Grep for `your-vercel-link` and `/projects/data-infrastructure.png` and confirm zero matches:
```bash
rg "your-vercel-link|/projects/data-infrastructure.png" src
```

- [ ] **Step 6: Commit**

```bash
git add src/data/projects.ts src/components/Hero.tsx src/components/Contact.tsx
git commit -m "fix: correct demo link, project image path, and CV download hrefs"
```

---

### Task 3: Routing, Layout, and page split

**Files:**
- Modify: `src/main.tsx`
- Create: `src/components/Layout.tsx`
- Create: `src/pages/HomePage.tsx`
- Create: `src/pages/ArticlesPage.tsx`
- Create: `src/pages/PlaygroundPage.tsx`
- Create: `src/pages/ContactPage.tsx`
- Modify: `src/App.tsx`
- Modify: `src/components/Navbar.tsx`
- Modify: `src/components/Footer.tsx`
- Create: `vercel.json`

**Interfaces:**
- Consumes: existing components `Hero`, `Projects`, `Experience`, `Education`, `Skills`, `Articles`, `Playground`, `Contact`, `Navbar`, `Footer`.
- Produces: routes `/` (index), `/articles`, `/playground`, `/contact`; `Layout` with scroll-to-top on navigation; `HomePage` composition updated by later tasks (Tasks 6, 7, 8 add `QuickFacts`, `FeaturedProjects`, `About`).

- [ ] **Step 1: Wrap the app in a router**

Replace `src/main.tsx` with:
```tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
```

- [ ] **Step 2: Create `Layout.tsx`**

Create `src/components/Layout.tsx`:
```tsx
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (pathname === "/" && hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
```
This makes `/#projects` (and the other homepage anchors) work from any route: navigating to the homepage with a hash scrolls to that section; without a hash it scrolls to top.

- [ ] **Step 3: Create the four pages**

Create `src/pages/HomePage.tsx`:
```tsx
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Skills from "../components/Skills";

function HomePage() {
  return (
    <>
      <Hero />
      <Projects />
      <Experience />
      <Education />
      <Skills />
    </>
  );
}

export default HomePage;
```

Create `src/pages/ArticlesPage.tsx`:
```tsx
import Articles from "../components/Articles";

function ArticlesPage() {
  return <Articles />;
}

export default ArticlesPage;
```

Create `src/pages/PlaygroundPage.tsx`:
```tsx
import Playground from "../components/Playground";

function PlaygroundPage() {
  return <Playground />;
}

export default PlaygroundPage;
```

Create `src/pages/ContactPage.tsx`:
```tsx
import Contact from "../components/Contact";

function ContactPage() {
  return <Contact />;
}

export default ContactPage;
```

- [ ] **Step 4: Rewire `App.tsx` with routes**

Replace `src/App.tsx` with:
```tsx
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ArticlesPage from "./pages/ArticlesPage";
import PlaygroundPage from "./pages/PlaygroundPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="articles" element={<ArticlesPage />} />
        <Route path="playground" element={<PlaygroundPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
```

- [ ] **Step 5: Update `Navbar.tsx`**

Replace `src/components/Navbar.tsx` with:
```tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const anchorLinks = ["projects", "experience", "education", "skills"];
const pageLinks = ["articles", "playground", "contact"];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container nav-content">
        <Link className="brand" to="/" aria-label="Go to home">
          AK<span>.</span>
        </Link>

        <button
          className="menu-button"
          onClick={() => setOpen((current) => !current)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={open ? "nav-links nav-links-open" : "nav-links"}>
          {anchorLinks.map((link) => (
            <Link
              key={link}
              to={`/#${link}`}
              onClick={() => setOpen(false)}
            >
              {link}
            </Link>
          ))}
          {pageLinks.map((link) => (
            <Link key={link} to={`/${link}`} onClick={() => setOpen(false)}>
              {link}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
```
Anchor links route to `/#projects` etc. so they work both on the homepage and from `/articles`, `/playground`, `/contact` (Layout scrolls to the hash).

- [ ] **Step 6: Update `Footer.tsx`**

Replace `src/components/Footer.tsx` with:
```tsx
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="container footer-content">
        <p>© {new Date().getFullYear()} Alya Karim</p>
        <p>Built with React, TypeScript and Vite.</p>
        <nav aria-label="Footer">
          <Link to="/articles">Articles</Link>
          <Link to="/playground">Playground</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
```

- [ ] **Step 7: Add Vercel SPA rewrite**

Create `vercel.json`:
```json
{
  "rewrites": [{ "source": "/((?!.*\\..*).*)", "destination": "/index.html" }]
}
```

- [ ] **Step 8: Verify**

Run: `npm run lint && npm run build`
Expected: lint clean, build succeeds.

Run: `npm run dev`, then in a browser confirm `/` renders the homepage, `/articles`, `/playground`, `/contact` each render, unknown paths redirect to `/`, and the navbar/footer links navigate without a full reload.

- [ ] **Step 9: Commit**

```bash
git add src/main.tsx src/App.tsx src/components/Layout.tsx src/pages src/components/Navbar.tsx src/components/Footer.tsx vercel.json
git commit -m "feat: add routing and split articles, playground, contact into pages"
```

---

### Task 4: Extract shared ProjectDetails component

**Files:**
- Create: `src/components/ProjectDetails.tsx`
- Modify: `src/components/Projects.tsx`

**Interfaces:**
- Consumes: `Project` type from `src/data/projects.ts`.
- Produces: `ProjectDetails` component with props `{ project: Project; onClose: () => void }` and exported helper `ProjectLinks({ project }: { project: Project })`. Later Task 7 reuses both.

- [ ] **Step 1: Create `ProjectDetails.tsx`**

Move the `ProjectLinks`, `DetailList`, and the `<article className="project-details">` block from `Projects.tsx` into a new file `src/components/ProjectDetails.tsx`. Keep the markup identical except:
- `ProjectLinks` gets `export`.
- The article renders only when `project` is non-null (the parent controls visibility).

Create `src/components/ProjectDetails.tsx`:
```tsx
import {
  ArrowUpRight,
  Check,
  ExternalLink,
  FileText,
  Github,
  X,
  Youtube,
} from "lucide-react";
import type { Project } from "../data/projects";

export function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="project-links">
      {project.github && (
        <a href={project.github} target="_blank" rel="noreferrer">
          <Github size={18} />
          GitHub
        </a>
      )}

      {project.demo && (
        <a href={project.demo} target="_blank" rel="noreferrer">
          <ExternalLink size={18} />
          Live Demo
        </a>
      )}

      {project.paper && (
        <a href={project.paper} target="_blank" rel="noreferrer">
          <FileText size={18} />
          Paper
        </a>
      )}

      {project.poster && (
        <a href={project.poster} target="_blank" rel="noreferrer">
          <FileText size={18} />
          Poster
        </a>
      )}

      {project.youtube && (
        <a href={project.youtube} target="_blank" rel="noreferrer">
          <Youtube size={18} />
          Video
        </a>
      )}

      {project.youtube2 && (
        <a href={project.youtube2} target="_blank" rel="noreferrer">
          <Youtube size={17} />
          Video 2
        </a>
      )}

      {project.facebook && (
        <a href={project.facebook} target="_blank" rel="noreferrer">
          <ExternalLink size={18} />
          Facebook
        </a>
      )}
    </div>
  );
}

function DetailList({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="project-detail-block">
      <h4>{title}</h4>
      <ul className="project-details-highlights">
        {items.map((item) => (
          <li key={item}>
            <Check size={17} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectDetails({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <article className="project-details" aria-live="polite">
      <button
        type="button"
        className="project-details-close"
        onClick={onClose}
        aria-label="Close project details"
      >
        <X size={22} />
      </button>

      <div className="project-details-image-wrap">
        <img
          src={project.image}
          alt={`${project.title} project preview`}
        />
      </div>

      <div className="project-details-content">
        <p className="project-details-category">
          {project.category.join(" · ")}
        </p>

        <h3>{project.title}</h3>

        <div className="project-meta">
          <span>{project.year}</span>
          <span>{project.status}</span>
          <span>{project.role}</span>
        </div>

        <p>{project.description}</p>

        <div className="project-problem">
          <h4>Problem</h4>
          <p>{project.problem}</p>
        </div>

        <div className="project-tech-list">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <div className="project-case-study-grid">
          {project.architecture && (
            <DetailList title="Architecture" items={project.architecture} />
          )}

          <DetailList title="Key features" items={project.highlights} />

          <DetailList title="Challenges" items={project.challenges} />

          <DetailList title="Lessons learned" items={project.lessons} />
        </div>

        <ProjectLinks project={project} />
      </div>
    </article>
  );
}

export default ProjectDetails;
```

- [ ] **Step 2: Refactor `Projects.tsx` to use it**

In `src/components/Projects.tsx`:
- Remove the inline `ProjectLinks`, `DetailList`, and the `{selectedProject && (...)}` article block.
- Keep all card/toolbar/state logic.
- Import the new component: `import ProjectDetails from "./ProjectDetails";`
- Render `{selectedProject && <ProjectDetails project={selectedProject} onClose={() => setSelectedProject(null)} />}` in place of the old article.
- Remove now-unused lucide imports (`X`, `Check`, `FileText`, `Youtube`, `ExternalLink` as applicable; keep `ArrowUpRight`, `ChevronDown`, `Github` if still used elsewhere in the file).

- [ ] **Step 3: Verify**

Run: `npm run lint && npm run build`
Expected: lint clean, build succeeds. In the dev server, open a project card and confirm the case study renders and closes exactly as before.

- [ ] **Step 4: Commit**

```bash
git add src/components/ProjectDetails.tsx src/components/Projects.tsx
git commit -m "refactor: extract shared ProjectDetails component"
```

---

### Task 5: QuickFacts skills band

**Files:**
- Create: `src/components/QuickFacts.tsx`
- Modify: `src/pages/HomePage.tsx`
- Modify: `src/index.css` (append a `/* Quick facts */` section near the other section styles)

**Interfaces:**
- Consumes: nothing.
- Produces: `QuickFacts` component (default export, no props) rendering the fixed four-area band.

- [ ] **Step 1: Create `QuickFacts.tsx`**

Create `src/components/QuickFacts.tsx`:
```tsx
const factGroups = [
  {
    title: "Full-stack",
    skills: ["React", "TypeScript", "FastAPI", "PostgreSQL"],
  },
  {
    title: "Applied AI",
    skills: ["PyTorch", "YOLO", "OpenCV", "LangChain"],
  },
  {
    title: "Data & Analytics",
    skills: ["Python", "SQL", "Pandas", "Tableau"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["Docker", "Google Cloud", "Vercel", "GitHub"],
  },
];

function QuickFacts() {
  return (
    <section className="quick-facts" aria-label="Core skills">
      <div className="container">
        <ul className="quick-facts-list">
          {factGroups.map((group) => (
            <li className="quick-fact-item" key={group.title}>
              <strong>{group.title}</strong>
              <span>{group.skills.join(" · ")}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default QuickFacts;
```

- [ ] **Step 2: Add to HomePage**

In `src/pages/HomePage.tsx`, import `QuickFacts` and render it immediately after `<Hero />` (before `<Projects />`).

- [ ] **Step 3: Add styles**

Append to `src/index.css`:
```css
/* Quick facts */

.quick-facts {
  padding: 0.5rem 0 3rem;
}

.quick-facts-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.quick-fact-item {
  padding: 1.5rem 1rem;
  border-left: 1px solid var(--border);
}

.quick-fact-item:first-child {
  border-left: none;
}

.quick-fact-item strong {
  display: block;
  font-family: "Space Grotesk", sans-serif;
  font-size: 1.05rem;
  letter-spacing: -0.02em;
  margin-bottom: 0.5rem;
}

.quick-fact-item span {
  color: var(--muted);
  font-size: 0.92rem;
}

@media (max-width: 900px) {
  .quick-facts-list {
    grid-template-columns: repeat(2, 1fr);
  }

  .quick-fact-item:nth-child(3) {
    border-left: none;
  }
}

@media (max-width: 540px) {
  .quick-facts-list {
    grid-template-columns: 1fr;
  }

  .quick-fact-item {
    border-left: none;
    border-top: 1px solid var(--border);
    padding: 1rem;
  }

  .quick-fact-item:first-child {
    border-top: none;
  }
}
```

- [ ] **Step 4: Verify**

Run: `npm run lint && npm run build`
Expected: lint clean, build succeeds. In the dev server the band renders below the hero with the four areas.

- [ ] **Step 5: Commit**

```bash
git add src/components/QuickFacts.tsx src/pages/HomePage.tsx src/index.css
git commit -m "feat: add quick-facts skills band below hero"
```

---

### Task 6: Featured Projects block

**Files:**
- Create: `src/components/FeaturedProjects.tsx`
- Modify: `src/pages/HomePage.tsx`
- Modify: `src/index.css` (append a `/* Featured projects block */` section)

**Interfaces:**
- Consumes: `featuredProjects` and `Project` from `src/data/projects.ts`; `ProjectDetails` (default export) from `src/components/ProjectDetails.tsx`.
- Produces: `FeaturedProjects` component (default export, no props) rendering the 6 featured projects and opening `ProjectDetails` on click.

- [ ] **Step 1: Create `FeaturedProjects.tsx`**

Create `src/components/FeaturedProjects.tsx`:
```tsx
import { useState } from "react";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { featuredProjects, type Project } from "../data/projects";
import ProjectDetails from "./ProjectDetails";

function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="section featured-block" id="featured">
      <div className="container">
        <div className="projects-heading">
          <div>
            <p className="section-label">Highlights</p>
            <h2 className="section-title">
              Featured work across software, AI and data.
            </h2>
          </div>

          <p>
            The projects I'm most proud of. Select any card to open the full
            case study.
          </p>
        </div>

        <div className="featured-grid">
          {featuredProjects.map((project) => (
            <article
              className="featured-card"
              key={project.id}
              onClick={() => setSelectedProject(project)}
            >
              <div className="featured-card-image-wrap">
                <img
                  className="featured-card-image"
                  src={project.image}
                  alt={`${project.title} project preview`}
                  loading="lazy"
                />
                <span className="project-status">{project.status}</span>
              </div>

              <div className="featured-card-content">
                <h3>{project.title}</h3>
                <p>{project.shortDescription}</p>

                <div className="featured-card-tech">
                  {project.technologies.slice(0, 3).map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                {project.demo ? (
                  <a
                    className="featured-card-action"
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(event) => event.stopPropagation()}
                  >
                    Live Demo <ExternalLink size={17} />
                  </a>
                ) : project.github ? (
                  <a
                    className="featured-card-action"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(event) => event.stopPropagation()}
                  >
                    View repo <Github size={17} />
                  </a>
                ) : (
                  <span className="featured-card-action featured-card-action-soon">
                    Coming soon <ArrowUpRight size={17} />
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="featured-details-wrap">
          <div className="container">
            <ProjectDetails
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default FeaturedProjects;
```

- [ ] **Step 2: Add to HomePage**

In `src/pages/HomePage.tsx`, import `FeaturedProjects` and render it immediately after `QuickFacts` (before `Projects`).

- [ ] **Step 3: Add styles**

Append to `src/index.css`:
```css
/* Featured projects block */

.featured-block {
  padding-top: 0;
}

.featured-grid {
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.featured-card {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: 1px solid var(--text);
  border-radius: 24px;
  background: var(--surface-light);
  cursor: pointer;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.featured-card:hover {
  transform: translateY(-4px);
  box-shadow: 8px 8px 0 var(--text);
}

.featured-card-image-wrap {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  aspect-ratio: 16 / 10;
}

.featured-card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}

.featured-card:hover .featured-card-image {
  transform: scale(1.035);
}

.featured-card-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.25rem 0.25rem 0.25rem;
  flex: 1;
}

.featured-card-content h3 {
  margin: 0;
  font-family: "Space Grotesk", sans-serif;
  font-size: 1.35rem;
  letter-spacing: -0.03em;
}

.featured-card-content > p {
  margin: 0.6rem 0 0;
  color: var(--muted);
  font-size: 0.95rem;
}

.featured-card-tech {
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.featured-card-tech span {
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
  border: 1px solid var(--border);
  font-size: 0.78rem;
  color: var(--muted);
}

.featured-card-action {
  margin-top: 1.25rem;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.55rem 1rem;
  border-radius: 999px;
  border: 1px solid var(--text);
  background: var(--accent);
  font-size: 0.85rem;
  font-weight: 700;
  transition: background 0.3s ease;
}

.featured-card-action:hover {
  background: var(--accent-orange);
}

.featured-card-action-soon {
  border-style: dashed;
  background: transparent;
  color: var(--muted);
  cursor: default;
}

.featured-details-wrap {
  margin-top: 3rem;
}

@media (max-width: 1100px) {
  .featured-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 700px) {
  .featured-grid {
    grid-template-columns: 1fr;
  }
}
```

- [ ] **Step 4: Verify**

Run: `npm run lint && npm run build`
Expected: lint clean, build succeeds. In the dev server, the featured block shows the 6 featured projects, opening case studies on click, with "Live Demo" badge on TaskFlow.

- [ ] **Step 5: Commit**

```bash
git add src/components/FeaturedProjects.tsx src/pages/HomePage.tsx src/index.css
git commit -m "feat: add featured projects block with live demo badges"
```

---

### Task 7: Activate and tighten the About section

**Files:**
- Modify: `src/components/About.tsx`
- Modify: `src/pages/HomePage.tsx`

**Interfaces:**
- Consumes: nothing.
- Produces: `About` rendered on the homepage between `FeaturedProjects` and `Projects`.

- [ ] **Step 1: Tighten the About intro**

In `src/components/About.tsx`, replace the first paragraph:
```tsx
<p>
  I am a software engineer with a background in applied physics, data
  analytics and machine learning. I enjoy taking ideas beyond the
  prototype stage and turning them into complete, usable applications.
</p>
```
with:
```tsx
<p>
  I'm a full-stack software engineer and AI engineer building applied
  products with Python, FastAPI, React and PostgreSQL. I take ideas
  beyond the prototype stage and turn them into complete, deployed
  applications.
</p>
```
Leave the remaining three paragraphs unchanged.

- [ ] **Step 2: Render About on the homepage**

In `src/pages/HomePage.tsx`, import `About` and render it between `FeaturedProjects` and `Projects`.

- [ ] **Step 3: Verify**

Run: `npm run lint && npm run build`
Expected: lint clean, build succeeds. Dev server shows the About section between featured work and the full catalog.

- [ ] **Step 4: Commit**

```bash
git add src/components/About.tsx src/pages/HomePage.tsx
git commit -m "feat: activate about section on homepage and tighten intro"
```

---

### Task 8: SEO meta and favicon

**Files:**
- Modify: `index.html`
- Create: `public/favicon.svg`

**Interfaces:**
- Consumes: nothing.
- Produces: Open Graph + Twitter meta, description, favicon for shared links.

- [ ] **Step 1: Add favicon**

Create `public/favicon.svg`:
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="#171714" />
  <text x="32" y="42" font-family="sans-serif" font-size="30" font-weight="700" fill="#f2efe6" text-anchor="middle">AK</text>
  <circle cx="44" cy="18" r="4" fill="#d6ff3f" />
</svg>
```

- [ ] **Step 2: Update `index.html` head**

Replace the `<head>` block of `index.html` with:
```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <meta
    name="description"
    content="Portfolio of Alya Karim — full-stack software engineer, AI engineer and data analyst building applied products with React, FastAPI, Python and PostgreSQL."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://alya-portfolio-jade.vercel.app/" />
  <meta property="og:title" content="Alya Karim | Software, AI & Data" />
  <meta
    property="og:description"
    content="Full-stack software engineer and AI engineer. Building applied AI products with React, FastAPI, Python and PostgreSQL."
  />
  <meta
    property="og:image"
    content="https://alya-portfolio-jade.vercel.app/project-images/webpage.png"
  />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Alya Karim | Software, AI & Data" />
  <meta
    name="twitter:description"
    content="Full-stack software engineer and AI engineer. Building applied AI products with React, FastAPI, Python and PostgreSQL."
  />
  <meta
    name="twitter:image"
    content="https://alya-portfolio-jade.vercel.app/project-images/webpage.png"
  />
  <title>Alya Karim | Software, AI & Data</title>
</head>
```

- [ ] **Step 3: Verify**

Run: `npm run build`
Expected: build succeeds; `dist/index.html` contains the meta tags; `dist/favicon.svg` exists.

- [ ] **Step 4: Commit**

```bash
git add index.html public/favicon.svg
git commit -m "feat: add open graph meta and favicon"
```

---

### Task 9: Memorable polish — reveal animations, active nav, hover

**Files:**
- Create: `src/components/Reveal.tsx`
- Modify: `src/components/Navbar.tsx`
- Modify: `src/index.css` (append `/* Reveal animation */` and nav active-state styles)

**Interfaces:**
- Consumes: nothing.
- Produces: `Reveal` wrapper component (no props beyond `children`); `.nav-link-active` class; `.reveal`/`.reveal-visible` classes.

- [ ] **Step 1: Create `Reveal.tsx`**

Create `src/components/Reveal.tsx` (must be safe in jsdom, where `IntersectionObserver` is undefined):
```tsx
import { useEffect, useRef, type ReactNode } from "react";

function Reveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (typeof IntersectionObserver === "undefined") {
      element.classList.add("reveal-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="reveal" ref={ref}>
      {children}
    </div>
  );
}

export default Reveal;
```

- [ ] **Step 2: Wrap homepage section headings with `Reveal`**

In `src/components/Reveal` usage, wrap the heading blocks of `Projects`, `FeaturedProjects`, `Skills`, `Experience`, `Education` section headings:
```tsx
<Reveal>
  <div className="projects-heading">...</div>
</Reveal>
```
Apply to at least: the section heading blocks in `Projects.tsx`, `FeaturedProjects.tsx`, `Skills.tsx`, `Experience.tsx`, `Education.tsx`, and the `About` intro. (Simple pattern: wrap the existing heading `div` in `<Reveal>...</Reveal>`.)

- [ ] **Step 3: Add active nav highlighting for routes**

In `src/components/Navbar.tsx`, import `NavLink` and use it for the page links so the current route gets an active class:
```tsx
import { Link, NavLink } from "react-router-dom";
```
and for page links:
```tsx
{pageLinks.map((link) => (
  <NavLink
    key={link}
    to={`/${link}`}
    onClick={() => setOpen(false)}
    className={({ isActive }) => (isActive ? "nav-link-active" : undefined)}
  >
    {link}
  </NavLink>
))}
```

- [ ] **Step 4: Add reveal + active nav CSS**

Append to `src/index.css`:
```css
/* Reveal animation */

.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition:
    opacity 0.7s ease,
    transform 0.7s ease;
}

.reveal-visible {
  opacity: 1;
  transform: none;
}

@media (prefers-reduced-motion: reduce) {
  .reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }
}

.nav-link-active {
  color: var(--accent-dark);
  text-decoration: underline;
  text-underline-offset: 6px;
}
```

- [ ] **Step 5: Verify**

Run: `npm run lint && npm run build`
Expected: lint clean, build succeeds. Dev server shows fade/slide reveals on headings, reduced-motion keeps content visible, and route links highlight on `/articles`, `/playground`, `/contact`.

- [ ] **Step 6: Commit**

```bash
git add src/components/Reveal.tsx src/components/Navbar.tsx src/components/Projects.tsx src/components/FeaturedProjects.tsx src/components/Skills.tsx src/components/Experience.tsx src/components/Education.tsx src/index.css
git commit -m "feat: add scroll reveals and active nav highlighting"
```

---

### Task 10: Routing and regression smoke tests

**Files:**
- Create: `src/test/App.test.tsx`

**Interfaces:**
- Consumes: `App` (default export) from `src/App.tsx`; the site copy defined in earlier tasks.

- [ ] **Step 1: Write the smoke tests**

Create `src/test/App.test.tsx`:
```tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );
}

describe("routing", () => {
  it("renders the homepage with hero, quick facts, featured, about and projects", () => {
    renderAt("/");
    expect(screen.getByText(/Hi, I'm/i)).toBeInTheDocument();
    expect(screen.getByText("Full-stack")).toBeInTheDocument();
    expect(screen.getByText("Applied AI")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Featured work/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /physics to intelligent software/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Projects across software/i })).toBeInTheDocument();
  });

  it("renders the articles page", () => {
    renderAt("/articles");
    expect(screen.getByRole("heading", { name: /Thoughts on software, AI/i })).toBeInTheDocument();
  });

  it("renders the playground page", () => {
    renderAt("/playground");
    expect(screen.getByRole("heading", { name: /Take a break and fix some bugs/i })).toBeInTheDocument();
  });

  it("renders the contact page", () => {
    renderAt("/contact");
    expect(screen.getByRole("heading", { name: /Let's build something/i })).toBeInTheDocument();
  });

  it("navigates from the navbar to the articles page", async () => {
    renderAt("/");
    const user = userEvent.setup();
    await user.click(screen.getByRole("link", { name: "articles" }));
    expect(screen.getByRole("heading", { name: /Thoughts on software, AI/i })).toBeInTheDocument();
  });
});

describe("data fixes", () => {
  it("uses the real demo link for the portfolio project", () => {
    renderAt("/");
    const link = document.querySelector(
      'a[href="https://alya-portfolio-jade.vercel.app"]',
    );
    expect(link).toBeInTheDocument();
  });

  it("uses a valid image path for data infrastructure", () => {
    renderAt("/");
    const img = document.querySelector(
      'img[alt="Data Infrastructure for AI Systems project preview"]',
    );
    expect(img?.getAttribute("src")).toBe("/project-images/analytics.svg");
  });

  it("shows a Live Demo badge on the TaskFlow featured card", () => {
    renderAt("/");
    expect(screen.getByRole("link", { name: /Live Demo/i })).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run the tests**

Run: `npm test`
Expected: all tests pass. (If a heading-name match fails, adjust the accessible-name regex to the exact copy — the copy is fixed in the components, not invented.)

- [ ] **Step 3: Verify lint + build**

Run: `npm run lint && npm run build`
Expected: both pass.

- [ ] **Step 4: Commit**

```bash
git add src/test/App.test.tsx
git commit -m "test: add routing and regression smoke tests"
```

---

### Task 11: Full verification and README update

**Files:**
- Modify: `README.md`

**Interfaces:**
- Consumes: nothing.
- Produces: passing `npm test`, `npm run lint`, `npm run build`; README documents routing and test commands.

- [ ] **Step 1: Update README**

In `README.md`:
- In the Features list, add: `- Separate pages for articles, playground and contact (client-side routing)`.
- In "Run locally", add a line after the dev command:
```text
npm test   # run vitest smoke tests
```
- Under "Deploy on Vercel", add a note: `Client-side routing uses a SPA rewrite (see vercel.json).`

- [ ] **Step 2: Run the full verification suite**

Run:
```bash
npm test
npm run lint
npm run build
```
Expected: all three pass with no errors.

- [ ] **Step 3: Final review**

`git status` should show only intended files. Confirm no `console.log`, no secrets, no placeholder URLs remain (`rg "your-vercel-link|YOUR_" .` finds nothing outside README history).

- [ ] **Step 4: Commit**

```bash
git add README.md
git commit -m "docs: document routing and test workflow"
```

---

## Self-Review Notes

**Spec coverage:**
- Multi-page routing → Task 3
- Skills band (Quick Facts) → Task 5
- Featured Projects (6 cards + demo badges) → Task 6
- About activation + tightened intro → Task 7
- Bug fixes (demo link, image path, CV hrefs) → Task 2
- SEO meta + favicon → Task 8
- Reveal animations, active nav, hover polish → Task 9
- Vitest smoke tests → Tasks 1, 10
- README/docs → Task 11

**Placeholder scan:** No TBD/TODO; every code step is concrete. The only copy-dependent values (heading regexes) are flagged as fixed-by-component, not invented.

**Type consistency:** `ProjectDetails` props `{ project: Project; onClose: () => void }` defined in Task 4 and used identically in Tasks 6 and 10. `featuredProjects` export exists in `src/data/projects.ts` and is consumed by Task 6. Component default exports match import styles throughout.
