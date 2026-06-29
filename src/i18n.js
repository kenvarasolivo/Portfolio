/* ───────────────────────────────────────────────────────────────────────
   Translation dictionary.

   Each key maps to { en, de }. Values may contain inline HTML (spans, code,
   <br>…) — they are applied with innerHTML, so keep the markup trusted/static.
   Elements opt in via a `data-i18n="key"` attribute in index.html.
   ─────────────────────────────────────────────────────────────────────── */
export const translations = {
  // ── Accessibility ──
  'skip': {
    en: 'Skip to content',
    de: 'Zum Inhalt springen',
  },

  // ── Nav ──
  'nav.work':     { en: 'Work',        de: 'Projekte' },
  'nav.approach': { en: 'Approach',    de: 'Ansatz' },
  'nav.skills':   { en: 'Skills',      de: 'Kenntnisse' },
  'nav.aboutMe':  { en: 'About me',    de: 'Über mich' },
  'nav.cta':      { en: 'Get in touch', de: 'Kontakt' },

  // ── Hero ──
  'hero.eyebrow': {
    en: 'Full-Stack &amp; AI Software Engineer · Aachen, DE',
    de: 'Full-Stack- &amp; KI-Softwareentwickler · Aachen, DE',
  },
  'hero.tagline': {
    en: 'I build full-stack web apps with AI features, using <span class="font-semibold text-white">Next.js</span>, <span class="font-semibold text-white">FastAPI</span> &amp; <span class="font-semibold text-white">Python</span>.',
    de: 'Ich entwickle Full-Stack-Webanwendungen mit KI-Funktionen, mit <span class="font-semibold text-white">Next.js</span>, <span class="font-semibold text-white">FastAPI</span> &amp; <span class="font-semibold text-white">Python</span>.',
  },
  'hero.cta1': { en: 'View my work', de: 'Meine Projekte' },
  'hero.cta2': { en: "Let's talk",   de: 'Sprechen wir' },

  // ── Tech strip ──
  'tech.label': {
    en: 'Tools &amp; technologies I work with',
    de: 'Tools &amp; Technologien, mit denen ich arbeite',
  },

  // ── Approach ──
  'approach.eyebrow': { en: '01 — Approach', de: '01 — Ansatz' },
  'approach.statement': {
    en: 'I build web apps where <span class="mark-box">AI features are part of the design</span>, not bolted on later — pairing <span class="mark">clean architecture</span> with <span class="mark">structured outputs</span> and <span class="mark">responsive streaming</span>.',
    de: 'Ich entwickle Webanwendungen, in denen <span class="mark-box">KI-Funktionen Teil des Designs</span> sind und nicht nachträglich angefügt — mit <span class="mark">sauberer Architektur</span>, <span class="mark">strukturierten Outputs</span> und <span class="mark">responsivem Streaming</span>.',
  },
  'approach.body': {
    en: 'My approach: ship typed AI interfaces, RAG pipelines, and tested LLM eval harnesses, with the same rigor on the backend logic as on the pixels. The result is software that stays fast, predictable, and easy to extend.',
    de: 'Mein Ansatz: typsichere KI-Schnittstellen, RAG-Pipelines und getestete LLM-Eval-Harnesses ausliefern — mit derselben Sorgfalt für die Backend-Logik wie für die Pixel. Das Ergebnis ist Software, die schnell, vorhersehbar und leicht erweiterbar bleibt.',
  },
  'approach.cap1': { en: 'Full-stack web engineering',     de: 'Full-Stack-Webentwicklung' },
  'approach.cap2': { en: 'AI integration &amp; LLM tooling', de: 'KI-Integration &amp; LLM-Tooling' },
  'approach.cap3': { en: 'Clean, typed architecture',      de: 'Saubere, typsichere Architektur' },
  'approach.cap4': { en: 'Testing &amp; CI/CD rigor',        de: 'Testing &amp; CI/CD-Disziplin' },

  // ── Work ──
  'work.eyebrow':  { en: '02 — Selected work',  de: '02 — Ausgewählte Arbeiten' },
  'work.title':    { en: "Things I've built",   de: 'Was ich gebaut habe' },
  'work.subtitle': {
    en: 'A few projects that show how I think about product, AI, and architecture.',
    de: 'Einige Projekte, die zeigen, wie ich über Produkt, KI und Architektur denke.',
  },
  'badge.live':       { en: 'Live',               de: 'Live' },
  'badge.university': { en: 'University project',  de: 'Universitätsprojekt' },
  'badge.exploration':{ en: 'Personal exploration', de: 'Persönliches Projekt' },

  'work.fluen.title': { en: 'Fluen — AI Language Platform', de: 'Fluen — KI-Sprachplattform' },
  'work.fluen.body': {
    en: 'Distraction-free SaaS uniting a spaced-repetition system (FSRS), an immersive comprehensible-input hub, and a live AI coach — with structured JSON-schema outputs and token streaming for real-time chat.',
    de: 'Ablenkungsfreie SaaS, die ein Spaced-Repetition-System (FSRS), einen immersiven Comprehensible-Input-Hub und einen Live-KI-Coach vereint — mit strukturierten JSON-Schema-Outputs und Token-Streaming für Echtzeit-Chat.',
  },
  'work.align.title': { en: 'Align — AI Application Optimizer', de: 'Align — KI-Bewerbungsoptimierer' },
  'work.align.body': {
    en: 'Decoupled async FastAPI + React app enforcing type-safe LLM outputs via Pydantic, hardened with a 94-test Pytest suite (96% coverage) and a RAG pipeline citing sources through pgvector cosine-KNN.',
    de: 'Entkoppelte asynchrone FastAPI-+-React-App, die typsichere LLM-Outputs über Pydantic erzwingt — abgesichert durch eine Pytest-Suite mit 94 Tests (96 % Coverage) und eine RAG-Pipeline, die Quellen über pgvector-Cosine-KNN zitiert.',
  },
  'work.chatbot.title': { en: 'FH Aachen Chatbot — Frontend Refactor', de: 'FH Aachen Chatbot — Frontend-Refactoring' },
  'work.chatbot.body': {
    en: 'Broke a monolithic <code class="rounded bg-slate-100 px-1 py-0.5 text-[0.8em]">Chat.vue</code> into four encapsulated feature modules and reusable Vue 3 composables, decoupled frontend and backend behind resource-based REST endpoints, and cut perceived latency with non-blocking token streaming, thinking skeletons, and a "thinking / answering" status.',
    de: 'Eine monolithische <code class="rounded bg-slate-100 px-1 py-0.5 text-[0.8em]">Chat.vue</code> in vier gekapselte Feature-Module und wiederverwendbare Vue-3-Composables aufgeteilt, Frontend und Backend hinter ressourcenbasierten REST-Endpunkten entkoppelt und die gefühlte Latenz durch nicht-blockierendes Token-Streaming, „Thinking"-Skeletons und einen „Thinking / Answering"-Status reduziert.',
  },
  'work.explorations':     { en: 'Personal explorations',   de: 'Persönliche Projekte' },
  'work.explorationsNote': { en: 'Built for fun &amp; learning', de: 'Aus Spaß &amp; zum Lernen' },
  'work.cinescope.body': {
    en: 'Movie analytics dashboard powered by the TMDB API — data visualizations, trending analysis, and film discovery.',
    de: 'Film-Analytics-Dashboard auf Basis der TMDB-API — Datenvisualisierungen, Trend-Analysen und Filmentdeckung.',
  },
  'work.laferrari.body': {
    en: 'Interactive 3D WebGL experience showcasing a LaFerrari model with dynamic lighting, orbit controls, and smooth camera animations.',
    de: 'Interaktives 3D-WebGL-Erlebnis mit einem LaFerrari-Modell — dynamische Beleuchtung, Orbit-Steuerung und sanfte Kamera-Animationen.',
  },
  'work.kanagawa.body': {
    en: "Immersive scrollytelling on Hokusai's iconic artwork — scroll-linked video scrubbing, custom cursors, and dynamic typography.",
    de: 'Immersives Scrollytelling zu Hokusais ikonischem Kunstwerk — scrollgekoppeltes Video-Scrubbing, individuelle Cursor und dynamische Typografie.',
  },
  'work.destination.body': {
    en: 'A travel recommendation engine that ranks 23 curated destinations in real time — tune sliders and travel personas to instantly match destinations to your style.',
    de: 'Eine Reise-Empfehlungs-Engine, die 23 kuratierte Reiseziele in Echtzeit bewertet — über Schieberegler und Reise-Personas werden passende Ziele sofort auf deinen Stil abgestimmt.',
  },

  // ── Why work with me ──
  'why.title': { en: 'Why work with me', de: 'Warum mit mir arbeiten' },
  'why.1': {
    en: '<span class="text-slate-900">Product-minded engineer</span> — I think about users, not just tickets.',
    de: '<span class="text-slate-900">Produktorientierter Entwickler</span> — ich denke an die Nutzer, nicht nur an Tickets.',
  },
  'why.2': {
    en: 'Comfortable across the <span class="text-slate-900">whole stack</span>, frontend to database.',
    de: 'Sicher über den <span class="text-slate-900">gesamten Stack</span> hinweg, vom Frontend bis zur Datenbank.',
  },
  'why.3': {
    en: '<span class="text-slate-900">AI features</span> in real projects I\'ve shipped and deployed.',
    de: '<span class="text-slate-900">KI-Funktionen</span> in echten Projekten, die ich ausgeliefert und deployt habe.',
  },
  'why.4': {
    en: 'Multilingual &amp; international — fluent in DE, EN, ID.',
    de: 'Mehrsprachig &amp; international — fließend in DE, EN, ID.',
  },

  // ── What you get ──
  'get.title': { en: 'What you get', de: 'Was du bekommst' },
  'get.1': {
    en: '<span class="text-slate-900">Clean, typed code</span> that the next person can read.',
    de: '<span class="text-slate-900">Sauberer, typsicherer Code</span>, den auch der Nächste lesen kann.',
  },
  'get.2': {
    en: 'Tested interfaces with <span class="text-slate-900">CI/CD</span> from day one.',
    de: 'Getestete Schnittstellen mit <span class="text-slate-900">CI/CD</span> ab dem ersten Tag.',
  },
  'get.3': {
    en: 'Fast, <span class="text-slate-900">responsive UX</span> with streaming where it counts.',
    de: 'Schnelle, <span class="text-slate-900">responsive UX</span> mit Streaming, wo es zählt.',
  },
  'get.4': {
    en: 'Clear communication and <span class="text-slate-900">reliable delivery</span>.',
    de: 'Klare Kommunikation und <span class="text-slate-900">verlässliche Lieferung</span>.',
  },

  // ── Skills ──
  'skills.eyebrow': { en: '03 — Stack',        de: '03 — Stack' },
  'skills.title':   { en: 'Skills &amp; tooling', de: 'Kenntnisse &amp; Tools' },
  'skills.frontend.title': { en: 'Frontend',        de: 'Frontend' },
  'skills.frontend.4':     { en: 'Responsive, accessible UI', de: 'Responsive, barrierefreie UI' },
  'skills.backend.title':  { en: 'Backend &amp; AI',  de: 'Backend &amp; KI' },
  'skills.backend.3':      { en: 'RAG · structured LLM outputs', de: 'RAG · strukturierte LLM-Outputs' },
  'skills.tooling.title':  { en: 'Tooling &amp; Ops', de: 'Tooling &amp; Ops' },
  'skills.tooling.3':      { en: 'Vercel · CI/CD pipelines', de: 'Vercel · CI/CD-Pipelines' },

  // ── About me ──
  'aboutMe.eyebrow': { en: '04 — About me',   de: '04 — Über mich' },
  'aboutMe.title':   { en: "Hi, I'm Kenvara", de: 'Hallo, ich bin Kenvara' },
  'aboutMe.p1': {
    en: "I'm a Computer Science student at FH Aachen, originally from Indonesia and now based in Aachen, Germany. I build full-stack web software with AI features — from typed interfaces and RAG pipelines to tested LLM eval harnesses — and I care just as much about the backend logic as the pixels.",
    de: 'Ich bin Informatikstudent an der FH Aachen, ursprünglich aus Indonesien und heute in Aachen ansässig. Ich entwickle Full-Stack-Websoftware mit KI-Funktionen — von typsicheren Schnittstellen und RAG-Pipelines bis zu getesteten LLM-Eval-Harnesses — und mir liegt die Backend-Logik genauso am Herzen wie die Pixel.',
  },
  'aboutMe.p2': {
    en: "When I'm not shipping, I'm usually exploring new tools, sketching out side projects, and learning how to make software feel fast and effortless. I'm currently looking for a mandatory internship (Pflichtpraktikum) as an AI software engineer.",
    de: 'Wenn ich nicht gerade etwas ausliefere, erkunde ich meist neue Tools, skizziere Nebenprojekte und lerne, wie sich Software schnell und mühelos anfühlen lässt. Aktuell suche ich ein Pflichtpraktikum als KI-Softwareentwickler.',
  },

  // ── Contact ──
  'contact.eyebrow': { en: 'Available for opportunities', de: 'Offen für Möglichkeiten' },
  'contact.title': {
    en: "Let's <span class=\"bg-gradient-to-b from-white to-[#7fb0ff] bg-clip-text text-transparent\">build</span> something together",
    de: 'Lass uns gemeinsam etwas <span class="bg-gradient-to-b from-white to-[#7fb0ff] bg-clip-text text-transparent">bauen</span>',
  },
  'contact.body': {
    en: "Currently seeking a mandatory internship (Pflichtpraktikum) as an AI software engineer. Drop me a line — I'd be glad to hear from you.",
    de: 'Aktuell suche ich ein Pflichtpraktikum als KI-Softwareentwickler. Schreib mir gerne.',
  },

  // ── Footer ──
  'footer.about':   { en: 'About',   de: 'Über mich' },
  'footer.contact': { en: 'Contact', de: 'Kontakt' },
  'footer.rights': {
    en: '© <span data-year>2026</span> Kenvara Solivo Lwie. All rights reserved.',
    de: '© <span data-year>2026</span> Kenvara Solivo Lwie. Alle Rechte vorbehalten.',
  },
};
