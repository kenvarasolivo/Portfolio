# Portfolio — Kenvara Solivo Lwie

A personal portfolio website showcasing full-stack web development, AI integration, and data science projects. Built with vanilla HTML, CSS, and JavaScript — no frameworks, no build step.

**Live site:** [kenvarasolivo.github.io](https://github.com/kenvarasolivo) <!-- replace with your actual URL -->

---

## Features

- **Animated hero** with staggered clip-path reveals and scroll-driven parallax
- **Canvas shader blobs** — five oscillating radial gradients with mouse-tracking parallax
- **Custom cursor** with a lagged ring and blend-mode overlay
- **Scroll-reveal system** via `IntersectionObserver` (translate + fade on viewport entry)
- **Stat counters** that animate from zero on scroll
- **Horizontal showcase carousel** with smooth scroll navigation
- **Page transition overlay** for cross-page navigation
- **Responsive layout** — single breakpoint at 900 px, touch-friendly carousel

---

## Project Structure

```
Portfolio/
├── index.html                  # Main landing page
├── project-chatbot.html        # Educational Chatbot detail page
├── project-abalo.html          # Abalo Marketplace detail page
├── project-dataset.html        # Exam Score Dataset Analysis detail page
├── css/
│   └── style.css               # Full design system (custom properties, dark/light)
├── js/
│   └── script.js               # All interactivity (cursor, blobs, carousel, counters)
└── images/                     # Project thumbnail images
```

---

## Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 (semantic) |
| Styling | CSS3 — Grid, Flexbox, Custom Properties, Animations |
| Scripting | Vanilla JavaScript — Canvas API, IntersectionObserver |
| Fonts | Bebas Neue · DM Mono · Manrope (Google Fonts) |
| Tooling | Git |

No npm. No bundler. No runtime dependencies.

---

## Getting Started

Clone the repo and open `index.html` in any modern browser — that's it.

```bash
git clone https://github.com/kenvarasolivo/portfolio.git
cd portfolio
open index.html          # macOS
start index.html         # Windows
xdg-open index.html      # Linux
```

For a local dev server with live reload you can use any static server:

```bash
# Python
python -m http.server 8080

# Node (npx, no install required)
npx serve .
```

---

## Sections

| Section | Description |
|---|---|
| **Hero** | Full-viewport headline with CTA buttons and scroll indicator |
| **Marquee** | Infinitely scrolling tech-stack ticker |
| **About** | Bio and animated stat counters |
| **Projects** | Three featured academic/professional projects |
| **Showcase** | Six personal side projects in a horizontal carousel |
| **Skills** | Logo grids: languages, frameworks, tools, AI assistants |
| **Education** | Academic timeline (FH Aachen, Studienkolleg Kaiserslautern) |
| **Languages** | German (C1), English (Business), Indonesian (Native) |
| **Involvement** | AIESEC & PPI Aachen |
| **Contact** | Email, LinkedIn, GitHub; open-to-work status |

---

## Featured Projects

### Educational Chatbot
Refactored to a modular RESTful architecture with a dynamic i18n language-switcher and redesigned UI for AI reasoning visualization.  
**Stack:** Vue.js · JavaScript · Docker · Tailwind CSS

### Abalo — Online Marketplace
Modular Vue.js storefront with async Axios/AJAX communication and real-time WebSocket integration.  
**Stack:** JavaScript · Vue.js · WebSockets · Axios

### Exam Score Dataset Analysis
Exploratory data analysis with correlation visualizations and ML benchmarking (Linear Regression vs. Random Forest).  
**Stack:** Python · Pandas · Scikit-learn · Matplotlib

---

## Design Tokens

The palette is defined as CSS custom properties on `:root`.

| Token | Value | Usage |
|---|---|---|
| `--cyan` | `#00e5c8` | Primary accent, glows, borders |
| `--purple` | `#7b5ef8` | Secondary accent |
| `--bg` | `#05080f` | Dark section background |
| `--light-bg` | `#f2f1ee` | Light section background |

---

## Browser Support

Targets evergreen browsers. The Canvas blob background and `IntersectionObserver` require a modern engine; no polyfills are included.

---

## License

MIT — see [LICENSE](LICENSE) for details.

---

## Contact

**Kenvara Solivo Lwie** · CS Student @ FH Aachen, Germany  
[kenvara.solivo@gmail.com](mailto:kenvara.solivo@gmail.com) · [LinkedIn](https://linkedin.com/in/kenvara-solivo-lwie-89a835234) · [GitHub](https://github.com/kenvarasolivo)
