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
  'nav.work':     { en: 'Projects',    de: 'Projekte' },
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
    en: 'I ship <span class="mark-box">working products fast</span> — and build them so they still stand up when they <span class="mark">grow</span>.',
    de: 'Ich liefere <span class="mark-box">funktionierende Produkte schnell</span> — und baue sie so, dass sie auch beim <span class="mark">Wachsen</span> tragen.',
  },
  'approach.body': {
    en: 'Get something real in front of people early, then let it scale. Proper infrastructure from the first commit, so growing means building on it — not starting over.',
    de: 'Früh etwas Echtes vor Nutzer bringen und es dann skalieren lassen. Ordentliche Infrastruktur ab dem ersten Commit — Wachsen heißt dann darauf aufbauen, nicht neu anfangen.',
  },
  'approach.cap1': { en: 'Ship fast, product first',    de: 'Schnell liefern, Produkt zuerst' },
  'approach.cap2': { en: 'Built to scale, not to redo', de: 'Zum Wachsen gebaut, nicht zum Neubau' },
  'approach.cap3': { en: 'Whole stack, end to end',     de: 'Ganzer Stack, Ende zu Ende' },
  'approach.cap4': { en: 'AI where it actually helps',  de: 'KI, wo sie wirklich hilft' },

  // ── Work ──
  // Blurbs say what a project DOES, in one sentence. The technical detail
  // lives on each project's own site — repeating it here just buried it.
  'work.eyebrow':  { en: '02 — Work',          de: '02 — Projekte' },
  'work.title':    { en: "Things I've built",  de: 'Was ich gebaut habe' },
  'work.subtitle': {
    en: 'Eight projects, grouped by what they are.',
    de: 'Acht Projekte, nach Art gruppiert.',
  },
  'badge.live':       { en: 'Live',              de: 'Live' },
  'badge.university': { en: 'University project', de: 'Universitätsprojekt' },
  'work.view':        { en: 'View project',      de: 'Projekt ansehen' },

  'work.cat.ai':   { en: 'Agentic AI &amp; Workflows',       de: 'Agentische KI &amp; Workflows' },
  'work.cat.web':  { en: 'Full-Stack Products',          de: 'Full-Stack-Produkte' },
  'work.cat.data': { en: 'Data Engineering &amp; Analytics', de: 'Data Engineering &amp; Analytics' },
  'work.cat.collab': { en: 'Collaborations', de: 'Kollaborationen' },
  'work.explorations': { en: 'Built for fun', de: 'Aus Spaß gebaut' },

  'work.stackpilot.body': {
    en: 'Turns any documentation into a guided lesson — an AI agent researches it, writes it, and checks its own sources.',
    de: 'Macht aus beliebiger Dokumentation eine geführte Lektion — ein KI-Agent recherchiert, schreibt und prüft seine eigenen Quellen.',
  },
  'work.align.body': {
    en: 'Reads a CV against a job description, shows where the real skill gaps are, and drafts a cover letter that only claims what the CV backs up.',
    de: 'Gleicht Lebenslauf und Stellenanzeige ab, zeigt die echten Skill-Lücken und entwirft ein Anschreiben, das nur behauptet, was der Lebenslauf hergibt.',
  },
  'work.fluen.body': {
    en: 'A language app that builds your flashcards, your reading, and a chat coach that corrects you as you go.',
    de: 'Eine Sprach-App, die deine Karteikarten und Lesetexte erstellt — plus ein Chat-Coach, der dich nebenbei korrigiert.',
  },
  'work.chatbot.body': {
    en: "Rebuilt a university chatbot's frontend with a 10-person team, so answers stream in as they're written instead of landing all at once.",
    de: 'Frontend eines Uni-Chatbots im 10-köpfigen Team neu gebaut — Antworten erscheinen jetzt beim Schreiben statt alle auf einmal.',
  },
  'work.watchflow.body': {
    en: 'Tracks the stocks you follow and refreshes itself every trading day, on its own.',
    de: 'Verfolgt deine Aktien und aktualisiert sich an jedem Handelstag von selbst.',
  },
  'work.dataco.body': {
    en: "180,000 supply-chain orders you can slice any way you like, to see what's actually driving profit.",
    de: '180.000 Lieferketten-Bestellungen, beliebig filterbar — um zu sehen, was den Gewinn wirklich treibt.',
  },
  'work.fujinohana.body': {
    en: 'A loyalty card for a ramen restaurant — guests collect points at the counter, and the staff run the offers themselves without touching the code.',
    de: 'Eine Bonuskarte für ein Ramen-Restaurant — Gäste sammeln Punkte an der Theke, und das Team pflegt die Angebote selbst, ganz ohne Code.',
  },
  'work.igta.body': {
    en: 'Finds companies hiring around Aachen, digs out their real contact details, and hands the team a HubSpot-ready file — three minutes instead of an afternoon.',
    de: 'Findet Unternehmen, die rund um Aachen einstellen, ermittelt echte Kontaktdaten und liefert dem Team eine HubSpot-fertige Datei — drei Minuten statt eines Nachmittags.',
  },
  'work.laferrari.body': {
    en: 'A LaFerrari you can spin around in 3D, lit and animated in the browser.',
    de: 'Ein LaFerrari, den du in 3D drehen kannst — beleuchtet und animiert im Browser.',
  },
  'work.kanagawa.body': {
    en: "Hokusai's wave told as a scroll — the video scrubs as you move down the page.",
    de: 'Hokusais Welle als Scroll erzählt — das Video läuft mit, während du die Seite hinunterscrollst.',
  },
  'work.cinescope.body': {
    en: "What's trending in film and games right now, pulled live and charted.",
    de: 'Was gerade bei Filmen und Spielen im Trend liegt — live geladen und visualisiert.',
  },
  'work.destination.body': {
    en: 'Move a few sliders and it ranks 23 destinations against your travel style.',
    de: 'Ein paar Regler bewegen und es bewertet 23 Reiseziele nach deinem Reisestil.',
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
    en: '<span class="text-slate-900">Fast iteration</span> — from idea to a working, deployed version.',
    de: '<span class="text-slate-900">Schnelle Iteration</span> — von der Idee zur funktionierenden, deployten Version.',
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
    en: "I'm a Computer Science student at FH Aachen — from Indonesia, now based in Germany. I build AI features end to end: the pipeline underneath and the interface on top.",
    de: 'Ich bin Informatikstudent an der FH Aachen — aus Indonesien, jetzt in Deutschland. Ich baue KI-Features von Anfang bis Ende: die Pipeline darunter und das Interface darüber.',
  },
  'aboutMe.p2': {
    en: "I'm genuinely excited about where technology is going — I pick up new tools quickly and settle into new environments and teams fast. Right now I'm looking for a mandatory internship (Pflichtpraktikum) as an AI software engineer.",
    de: 'Die Entwicklung von Technologie begeistert mich — ich arbeite mich schnell in neue Tools ein und finde mich zügig in neuen Umfeldern und Teams zurecht. Aktuell suche ich ein Pflichtpraktikum als KI-Softwareentwickler.',
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
