/* ───────────────────────────────────────────────────────────────────────
   Translation dictionary.

   Each key maps to { en, de }. Values may contain inline HTML (spans, code,
   <br>…) - they are applied with innerHTML, so keep the markup trusted/static.
   Elements opt in via a `data-i18n="key"` attribute in index.html.
   ─────────────────────────────────────────────────────────────────────── */
export const translations = {
  // ── Accessibility ──
  'skip': {
    en: 'Skip to content',
    de: 'Zum Inhalt springen',
  },

  // ── Nav ──
  'nav.work':      { en: 'Projects',     de: 'Projekte' },
  'nav.specialty': { en: 'Approach',     de: 'Arbeitsweise' },
  'nav.skills':    { en: 'Skills',       de: 'Kenntnisse' },
  'nav.aboutMe':   { en: 'About me',     de: 'Über mich' },
  'nav.cta':       { en: 'Get in touch', de: 'Kontakt' },

  // ── Hero ──
  'hero.eyebrow': {
    en: 'Software Engineer / Full-Stack Engineer',
    de: 'Softwareentwickler / Full-Stack-Entwickler',
  },
  'hero.title': {
    en: 'Building ideas into reality with modern web and AI.',
    de: 'Ideen mit modernen Webtechnologien und KI in die Realität umsetzen.',
  },
  'hero.tagline': {
    en: "I'm Ken, a final-year Computer Science student at FH Aachen. I take products from the user experience and frontend through backend systems, deployment, and practical AI features.",
    de: 'Ich bin Ken, Informatikstudent im letzten Jahr an der FH Aachen. Ich entwickle Produkte von der User Experience und dem Frontend über Backend-Systeme und Deployment bis zu praxisnahen KI-Features.',
  },
  'hero.cta1': { en: 'View my work', de: 'Meine Projekte' },
  'hero.cta2': { en: 'Contact me',   de: 'Kontakt aufnehmen' },

  // ── Mindset ──
  // Three short lines, not one sentence - the German has to keep the same
  // three-beat shape or the <br> breaks land mid-thought.
  'mindset.eyebrow': { en: '01. Mindset', de: '01. Haltung' },
  // No inline <span> highlight here: .scroll-fill paints the whole element with
  // one clipped gradient, and a child with its own colour would sit out of it.
  'mindset.statement': {
    en: 'Ship it live.<br />Solve something real.<br />Build it to last.',
    de: 'Live bringen.<br />Echte Probleme lösen.<br />Auf Dauer bauen.',
  },
  'mindset.k1': { en: 'Quality product',     de: 'Qualität im Produkt' },
  'mindset.k2': { en: 'Live in days',        de: 'In Tagen live' },
  'mindset.k3': { en: 'Real problems',       de: 'Echte Probleme' },
  'mindset.k4': { en: 'Built to scale',      de: 'Skalierbar gebaut' },
  'mindset.k5': { en: 'Automated pipelines', de: 'Automatisierte Pipelines' },
  'mindset.k6': { en: 'End to end',          de: 'Ende zu Ende' },
  'mindset.k7': { en: 'MVP first',           de: 'MVP zuerst' },
  'mindset.k8': { en: 'Built around users',  de: 'Nutzerorientiert gebaut' },

  // ── Approach ──
  'spec.eyebrow': { en: '03. Approach',         de: '03. Arbeitsweise' },
  'spec.title':   { en: 'How I build products',  de: 'Wie ich Produkte entwickle' },

  'spec.1.title': {
    en: 'Product-minded engineering',
    de: 'Produktorientierte Entwicklung',
  },
  'spec.1.a': { en: 'Turn ambiguous problems into focused product decisions', de: 'Unklare Probleme in fokussierte Produktentscheidungen übersetzen' },
  'spec.1.b': { en: 'Design clear user flows, onboarding, and feedback', de: 'Klare User Flows, Onboarding und Feedback gestalten' },
  'spec.1.c': { en: 'Build accessible, responsive interfaces that feel considered', de: 'Barrierefreie, responsive und durchdachte Interfaces entwickeln' },

  'spec.2.title': {
    en: 'Applied AI',
    de: 'Angewandte KI',
  },
  'spec.2.a': { en: 'Use AI to solve a real user need, not as decoration', de: 'KI für echte Nutzerbedürfnisse einsetzen, nicht als Dekoration' },
  'spec.2.b': { en: 'Build retrieval, structured outputs, and useful tool flows', de: 'Retrieval, strukturierte Ausgaben und hilfreiche Tool-Flows entwickeln' },
  'spec.2.c': { en: 'Keep AI interactions clear, grounded, and integrated into the product', de: 'KI-Interaktionen klar, fundiert und in das Produkt integriert gestalten' },

  'spec.3.title': {
    en: 'End-to-end delivery',
    de: 'End-to-End-Umsetzung',
  },
  'spec.3.a': { en: 'Connect frontend, APIs, databases, and authentication', de: 'Frontend, APIs, Datenbanken und Authentifizierung verbinden' },
  'spec.3.b': { en: 'Ship, deploy, and own the details that make a product work', de: 'Produkte ausliefern, deployen und die Details verantworten, die sie funktionieren lassen' },
  'spec.3.c': { en: 'Test quickly, learn from use, and iterate deliberately', de: 'Schnell testen, aus der Nutzung lernen und gezielt iterieren' },

  // ── Work ──
  // Blurbs say what a project DOES, in one sentence. The technical detail
  // lives on each project's own site - repeating it here just buried it.
  'work.eyebrow':  { en: '04. Work',          de: '04. Projekte' },
  'work.title':    { en: 'Featured projects',  de: 'Ausgewählte Projekte' },
  // Home shows four featured projects; projects.html shows the full set.
  'work.subtitle': {
    en: 'Four I’m proudest of. The rest are one click away.',
    de: 'Vier, auf die ich am stolzesten bin. Der Rest ist einen Klick entfernt.',
  },
  'work.seeAll': { en: 'See all my projects', de: 'Alle Projekte ansehen' },

  // ── All-projects page ──
  'projects.back':    { en: 'Back to home',        de: 'Zurück zur Startseite' },
  'projects.eyebrow': { en: 'All work',            de: 'Alle Projekte' },
  'projects.title':   { en: 'Everything I’ve built', de: 'Alles, was ich gebaut habe' },
  'projects.subtitle': {
    en: 'Ten projects grouped by what they are, plus the ones built purely for fun.',
    de: 'Zehn Projekte, nach Art gruppiert - dazu die, die rein aus Spaß entstanden sind.',
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
    en: 'Turns any documentation into a guided lesson - an AI agent researches it, writes it, and checks its own sources.',
    de: 'Macht aus beliebiger Dokumentation eine geführte Lektion - ein KI-Agent recherchiert, schreibt und prüft seine eigenen Quellen.',
  },
  'work.align.body': {
    en: 'Reads a CV against a job description, shows where the real skill gaps are, and drafts a cover letter that only claims what the CV backs up.',
    de: 'Gleicht Lebenslauf und Stellenanzeige ab, zeigt die echten Skill-Lücken und entwirft ein Anschreiben, das nur behauptet, was der Lebenslauf hergibt.',
  },
  'work.chattrolley.body': {
    en: 'An AI sales assistant that recommends products, checks inventory, and directs customers to checkout.',
    de: 'Ein KI-Verkaufsassistent, der Produkte empfiehlt, Verfügbarkeit prüft und Kunden zum Checkout führt.',
  },
  'work.showup.body': {
    en: 'A social app for discovering plans and meeting people offline.',
    de: 'Eine Social App, um Pläne zu entdecken und Menschen offline zu treffen.',
  },
  'work.fluen.body': {
    en: 'A language app that builds your flashcards, your reading, and a chat coach that corrects you as you go.',
    de: 'Eine Sprach-App, die deine Karteikarten und Lesetexte erstellt - plus ein Chat-Coach, der dich nebenbei korrigiert.',
  },
  'work.chatbot.body': {
    en: "Rebuilt a university chatbot's frontend with a 10-person team, so answers stream in as they're written instead of landing all at once.",
    de: 'Frontend eines Uni-Chatbots im 10-köpfigen Team neu gebaut - Antworten erscheinen jetzt beim Schreiben statt alle auf einmal.',
  },
  'work.watchflow.body': {
    en: 'Tracks the stocks you follow and refreshes itself every trading day, on its own.',
    de: 'Verfolgt deine Aktien und aktualisiert sich an jedem Handelstag von selbst.',
  },
  'work.dataco.body': {
    en: "180,000 supply-chain orders you can slice any way you like, to see what's actually driving profit.",
    de: '180.000 Lieferketten-Bestellungen, beliebig filterbar - um zu sehen, was den Gewinn wirklich treibt.',
  },
  'work.fujinohana.body': {
    en: 'A loyalty card for a ramen restaurant - guests collect points at the counter, and the staff run the offers themselves without touching the code.',
    de: 'Eine Bonuskarte für ein Ramen-Restaurant - Gäste sammeln Punkte an der Theke, und das Team pflegt die Angebote selbst, ganz ohne Code.',
  },
  'work.igta.body': {
    en: 'Finds companies hiring around Aachen, digs out their real contact details, and hands the team a HubSpot-ready file - three minutes instead of an afternoon.',
    de: 'Findet Unternehmen, die rund um Aachen einstellen, ermittelt echte Kontaktdaten und liefert dem Team eine HubSpot-fertige Datei - drei Minuten statt eines Nachmittags.',
  },
  'work.elsewhere.body': {
    en: "An atlas of the world's great cities, ranked and told through their own photography.",
    de: 'Ein Atlas der großen Städte der Welt - gerankt und durch ihre eigene Fotografie erzählt.',
  },
  'work.cinescope.body': {
    en: "What's trending in film and games right now, pulled live and charted.",
    de: 'Was gerade bei Filmen und Spielen im Trend liegt - live geladen und visualisiert.',
  },
  'work.laferrari.body': {
    en: 'A LaFerrari you can spin around in 3D, lit and animated in the browser.',
    de: 'Ein LaFerrari, den du in 3D drehen kannst - beleuchtet und animiert im Browser.',
  },
  'work.kanagawa.body': {
    en: "Hokusai's wave told as a scroll - the video scrubs as you move down the page.",
    de: 'Hokusais Welle als Scroll erzählt - das Video läuft mit, während du die Seite hinunterscrollst.',
  },

  // ── Skills ──
  'skills.eyebrow': { en: '05. Tools',        de: '05. Tools' },
  'skills.title':   { en: 'Tools I use to ship', de: 'Tools, mit denen ich ausliefere' },
  'skills.frontend.title': { en: 'Frontend',        de: 'Frontend' },
  'skills.frontend.4':     { en: 'Responsive, accessible UI', de: 'Responsive, barrierefreie UI' },
  'skills.backend.title':  { en: 'Backend &amp; AI',  de: 'Backend &amp; KI' },
  'skills.backend.3':      { en: 'RAG · structured LLM outputs', de: 'RAG · strukturierte LLM-Outputs' },
  'skills.tooling.title':  { en: 'Tooling &amp; Ops', de: 'Tooling &amp; Ops' },
  'skills.tooling.3':      { en: 'Vercel · CI/CD pipelines', de: 'Vercel · CI/CD-Pipelines' },

  // ── About me ──
  'aboutMe.eyebrow': { en: '02. About me',   de: '02. Über mich' },
  'aboutMe.title':   { en: "Hi, I'm Kenvara", de: 'Hallo, ich bin Kenvara' },
  'aboutMe.lead': {
    en: 'Computer Science at FH Aachen. Indonesian, building in Germany.',
    de: 'Informatik an der FH Aachen. Indonesier, baue in Deutschland.',
  },
  'aboutMe.p1.title': { en: 'Lifelong learner', de: 'Lebenslang neugierig' },
  'aboutMe.p1.body': {
    en: 'New stack, new tools, new models - I keep up on my own time.',
    de: 'Neuer Stack, neue Tools, neue Modelle - ich bleibe in meiner Freizeit dran.',
  },
  'aboutMe.p2.title': { en: 'I take ownership', de: 'Ich übernehme Verantwortung' },
  'aboutMe.p2.body': {
    en: 'If I shipped it, I answer for it - including when it breaks.',
    de: 'Was ich ausliefere, verantworte ich - auch dann, wenn es bricht.',
  },
  'aboutMe.p3.title': { en: "I'm passionate and creative", de: 'Ich bin leidenschaftlich und kreativ' },
  'aboutMe.p3.body': {
    en: 'I bring curiosity and creativity to every project I build.',
    de: 'Ich bringe Neugier und Kreativität in jedes Projekt ein, das ich entwickle.',
  },

  // ── Contact ──
  'contact.eyebrow': { en: 'Contact', de: 'Kontakt' },
  // The band runs on white now, so the highlight is .mark - the old white-to-blue
  // gradient fill was built to sit on the dark band and would vanish here.
  'contact.title': {
    en: "Let's <span class=\"mark\">talk</span>",
    de: 'Reden <span class="mark">wir</span>',
  },
  'contact.body': {
    en: "I'm looking for a working student role or internship in software engineering, full-stack development, or Applied AI. Email or LinkedIn, whichever is easier.",
    de: 'Ich suche eine Werkstudentenstelle oder ein Praktikum in Softwareentwicklung, Full-Stack-Entwicklung oder angewandter KI. Per E-Mail oder LinkedIn, wie es dir lieber ist.',
  },

  // ── Footer ──
  'footer.about':   { en: 'About',   de: 'Über mich' },
  'footer.contact': { en: 'Contact', de: 'Kontakt' },
  'footer.rights': {
    en: '© <span data-year>2026</span> Kenvara Solivo Lwie. All rights reserved.',
    de: '© <span data-year>2026</span> Kenvara Solivo Lwie. Alle Rechte vorbehalten.',
  },
};
