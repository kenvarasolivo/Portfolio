# Kenvara Solivo Lwie — Portfolio

![Portfolio screenshot](docs/screenshot.png)
<!-- [![Website](https://img.shields.io/badge/Website-Live-brightgreen)](https://your-live-website.com) -->

The personal portfolio of Kenvara Solivo Lwie — a CS student and full-stack & AI software engineer. A fast, single-page site built to showcase selected work, skills, and a way to get in touch, aimed at recruiters and collaborators looking for an AI-native engineer.

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
*   **Deployment:** Vercel

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
└── vite.config.js
```

---

<p align="center"><i>Open to an AI Software Engineer internship (Pflichtpraktikum) and collaboration — let's build something.</i></p>
