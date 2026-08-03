# Kenvara Solivo Lwie — Portfolio

![Portfolio screenshot](docs/screenshot.png)

The personal portfolio of Kenvara Solivo Lwie — a CS student and full-stack & AI software engineer. A fast, single-page site built to showcase selected work, skills, and a way to get in touch.

---

## 🚀 Features

*   **Responsive Design:** Fully optimized for mobile, tablet, and desktop views.
*   **Bilingual (EN / DE):** In-page language switch powered by a lightweight `data-i18n` system — no reload, no framework.
*   **Animated, accessible UI:** Scroll-reveal sections, gradient washes, and a marquee tech strip, with a skip link, ARIA labels, and `prefers-reduced-motion` support.
*   **Fast & SEO-friendly:** Vite-built static output, optimized images (`sharp`), lazy-loaded assets, and Open Graph + meta tags for rich link previews.

---

## 🛠️ Tech Stack

*   **Frontend:** Vanilla JavaScript (ES modules), Tailwind CSS, HTML
*   **Build / Tooling:** Vite, PostCSS, Autoprefixer, `sharp` (image optimization)
*   **Deployment:** GitHub Pages (automated via GitHub Actions)

---

## ⚙️ Local Development

Follow these steps to get a local development server running on your machine.

### Prerequisites

Make sure you have Node.js installed.
```bash
node -v
npm -v
```

### Setup

1.  Clone the repository:
    ```bash
    git clone https://github.com/kenvarasolivo/Portfolio.git
    cd Portfolio
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Start the development server (opens at `http://localhost:5173`):
    ```bash
    npm run dev
    ```

### Available Scripts

| Command                   | Description                                            |
| ------------------------- | ------------------------------------------------------ |
| `npm run dev`             | Start the Vite dev server with hot-reload.             |
| `npm run build`           | Build the production site into `dist/`.                |
| `npm run preview`         | Preview the production build locally.                  |
| `npm run optimize-images` | Optimize images in place via `scripts/optimize-images.mjs`. |

---

## 📁 Project Structure

```
.
├── index.html              # Single-page markup (nav, hero, work, skills, contact)
├── src/
│   ├── main.js             # Interactions: nav, scroll reveal, language switch
│   ├── i18n.js             # EN / DE translation strings
│   └── style.css           # Tailwind layers + custom styles
├── scripts/
│   └── optimize-images.mjs # Image optimization script
├── public/                 # Static assets copied verbatim (images, favicon)
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── .github/workflows/deploy.yml  # CI/CD: build & deploy to GitHub Pages
```

---

## 🚀 Deployment

Deployment is fully automated via GitHub Actions. Every push to `main` triggers
the [`deploy.yml`](.github/workflows/deploy.yml) workflow, which builds the site
with Vite and publishes the `dist/` output to **GitHub Pages** — no manual steps
required. The workflow can also be run on demand from the Actions tab
(`workflow_dispatch`).

---

<p align="center"><i>Open to an AI Software Engineer working student role or internship and collaboration — let's build something.</i></p>
