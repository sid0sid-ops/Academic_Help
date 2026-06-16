# Project Handoff: Academic Help Website

This document serves as a complete transition guide for future developers (human or AI) to resume, update, and deploy the **Academic Help** codebase.

---

## 📌 Project Overview
A production-ready, mobile-first academic service website for college students, styled with optimized Vanilla CSS and featuring Framer Motion animations. The application is built with Next.js (App Router) and configured for static export to run on free **GitHub Pages** under the subpath `/Academic_Help`.

---

## 🛠️ Tech Stack & Key Files
* **Next.js 16.2.9 & React 19.2.4**: Modern App Router setup.
* **Vanilla CSS**: Optimized stylesheets, avoiding CSS frameworks to maintain custom design flexibility and zero performance bloat.
* **Framer Motion 12.40.0**: Handles smooth page entry/exit animations, 3D hero floating shapes, and FAQ accordion transitions.
* **Auto-indexing script (`scripts/generate-work-index.js`)**: Runs automatically before builds to index PDF/PPTX work assets placed under `public/work` into `src/data/work-index.json`.

---

## ⚡ Hardships Faced & Resolved Errors

### 1. GitHub Pages deployment fails with `actions/configure-pages` HTTP 404
* **Error**: `Error: Get Pages site failed. Please verify that the repository has Pages enabled... Error: HttpError: Not Found`
* **Root Cause**: The repository does not have GitHub Pages enabled, or is configured to build using a branch instead of GitHub Actions.
* **Resolution**:
  1. Go to repository **Settings** -> **Pages** on GitHub.
  2. Under **Build and deployment** -> **Source**, select **GitHub Actions**.
  3. Re-run the workflow or push a new commit to trigger the build.

### 2. Broken Static Assets (CSS, JS, Images) on GitHub Pages
* **Error**: Deploying to GitHub Pages under a subpath (e.g. `username.github.io/Academic_Help`) causes asset references to break with `404` errors.
* **Resolution**: 
  - Configured `output: "export"` and `basePath: "/Academic_Help"` in `next.config.ts`.
  - Used Next.js `Image` component with `unoptimized: true` to bypass server-side image optimization (unsupported in static exports).
  - Linked standard HTML images using prefix pathways or CSS background paths relative to the subpath.

### 3. Dynamic Previous Work Indexing
* **Error**: Manually editing JSON files every time a sample paper is uploaded is tedious and prone to errors.
* **Resolution**: Written an automated prebuild Node.js script `scripts/generate-work-index.js`. Whenever `npm run build` is run, it scans `public/work`, extracts details, determines categories via filename keywords, and generates `work-index.json`.

---

## 🚨 Critical Guidelines (Do Not Repeat These Mistakes)

1. **GitHub Repository Name Matching**:
   * The repository name on GitHub **must** be exactly `Academic_Help` (case-sensitive) to align with `basePath` in `next.config.ts`.
   * **If the repo name changes**, the developer **must** update `basePath` in `next.config.ts` to prevent broken assets and routes.
2. **Do Not Add Tailwind CSS**:
   * All styles are written in Vanilla CSS to keep the design system extremely modular and lightweight. Maintain the layout patterns using CSS Grid, custom properties (variables), and `clamp()`.
3. **Keep `unoptimized: true` for Images**:
   * If you introduce new images using the Next.js `<Image />` component, do not remove `images: { unoptimized: true }` from the configuration since static hosting cannot process dynamic image optimization.

---

## 🚀 How to Resume Development in the Future

If you have deleted the files locally to save space, follow these steps to resume development:

### 1. Re-clone the Repository
```bash
git clone git@github.com:sid0sid-ops/Academic_Help.git
cd Academic_Help
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000/Academic_Help](http://localhost:3000/Academic_Help) in your browser.

### 4. Add/Update Previous Work
* Simply place new PDF or PPTX files into `public/work/`.
* Filename naming pattern: `category_title_name.ext` (e.g. `bioinformatics_gene_sequencing_study.pdf`). The indexer will auto-categorize it as `Bioinformatics` and clean the title to `Gene Sequencing Study`.

### 5. Deploy Changes
* Simply commit and push your changes to the `main` branch. GitHub Actions will handle compiling, indexing, building, and deploying to GitHub Pages automatically.
