# Academic Help Website

A production-ready, light-theme-only, mobile-first academic service website for college students, optimized to run perfectly on free GitHub Pages.

This website supports student learning by providing formatting, presentation design, data organization, literature summaries, and biological workflow guidance. It enforces a strict ethical policy and contains no ghostwriting, homework completion, or exam-cheating references.

## 🚀 Features

- **Instagram-Inspired UI**: Circular service highlights, rounded cards, clean white layout, and bottom mobile navigation tabs.
- **WhatsApp-First Contact**: Pre-filled message templates that dynamically link students to support lines.
- **Automatic Work Indexing**: A build-time prebuild script scans `.pdf` and `.pptx` uploads and automatically updates the Previous Work gallery.
- **Fluid & Responsive Layout**: Responsive typography using CSS `clamp()` and grids designed to look premium on 320px mobile up to ultrawide desktop monitors.
- **Framer Motion Animations**: Gentle 3D floating academic shapes in the hero section, smooth page transitions, and expandable FAQ accordions.
- **Search Engine Optimized**: Out-of-the-box metadata tags, OpenGraph previews, and keywords.
- **Free Static Hosting**: Next.js static export configured to run directly on GitHub Pages.

---

## 🛠️ Tech Stack

- **Core**: [Next.js](https://nextjs.org/) (App Router, static export output)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI Logic**: [React](https://react.dev/) (v19)
- **Styling**: Vanilla CSS (highly optimized, no bulky third-party dependencies)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)

---

## 💻 Local Setup & Development

Make sure you have [Node.js](https://nodejs.org/) (Stable LTS version recommended) installed.

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000/Academic_Help](http://localhost:3000/Academic_Help) in your browser. Note: because of repository configuration, the local URL uses the `/Academic_Help` base path prefix.

---

## 📁 Managing Previous Work Gallery

This project implements an automated indexing pipeline:
1. Copy your previous academic work (must be `.pdf` or `.pptx` formats) into the `public/work/` folder.
2. The indexer will automatically scan files and guess categories (e.g. `project`, `dissertation`, `thesis`, `formatting`, `presentation`, `poster`, `report`, `cv`, `bioinformatics`) based on the filename keywords.
3. Example name format: `bioinformatics_genome_sequence_report.pdf` will yield:
   - **Category**: Bioinformatics
   - **Display Title**: Bioinformatics Genome Sequence Report
4. Run the build command to generate the updated index.

---

## 📦 Building & Deploying to GitHub Pages

### Repository Requirement
The repository name on GitHub must be **Academic_Help** (case-sensitive) to match the `basePath` configured in `next.config.ts`.

### Automated Deployment (Recommended)
This repository includes a GitHub Actions workflow inside `.github/workflows/deploy.yml`. 
To deploy:
1. Push your code to the `main` branch.
2. The workflow will automatically compile the static export and deploy it to your GitHub Pages.

### Manual Build & Deployment
To test or build the static pages locally:
1. Run the build script:
   ```bash
   npm run build
   ```
   This generates a static output folder named `out` in the project root.
2. Push or upload the contents of the `out` directory to your GitHub repository's hosting branch (usually `gh-pages` or `main`).
