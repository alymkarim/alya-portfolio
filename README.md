# Alya Karim Portfolio

A responsive personal portfolio built with React, TypeScript and Vite.

## Features

- Responsive navigation
- Hero and personal introduction
- Skills grouped by category
- Reusable project cards
- Experience and education sections
- CV download button
- GitHub, LinkedIn and email links
- Vercel-ready deployment

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite, usually `http://localhost:5173`.

## Before deploying

Replace every placeholder:

- `YOUR_USERNAME`
- `YOUR_LINKEDIN`
- `YOUR_EMAIL@example.com`

Add your CV:

```text
public/cv.pdf
```

Project information is stored in:

```text
src/data/projects.ts
```

Skills are stored in:

```text
src/data/skills.ts
```

## Build

```bash
npm run build
```

## Push to GitHub

```bash
git init
git add .
git commit -m "Build personal portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/alya-portfolio.git
git push -u origin main
```

## Deploy on Vercel

1. Log in to Vercel with GitHub.
2. Select **Add New Project**.
3. Import the `alya-portfolio` repository.
4. Keep the detected Vite settings.
5. Deploy.

Vercel build settings:

```text
Build command: npm run build
Output directory: dist
```
