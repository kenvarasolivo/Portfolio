/* ───────────────────────────────────────────────────────────────────────
   Translation dictionary.

   Each key maps to { en, de }. Values may contain inline HTML (spans, code,
   <br>…) - they are applied with innerHTML, so keep the markup trusted/static.
   Elements opt in via a `data-i18n="key"` attribute in index.html.
   ─────────────────────────────────────────────────────────────────────── */
export const translations = {
  'edit.main': { en: 'Main', de: 'Start' },
  'edit.archive': { en: 'Archive', de: 'Archiv' },
  'edit.next': { en: 'Have something in mind?', de: 'Eine Idee im Kopf?' },
  'edit.build': { en: "Let's build.", de: 'Lass uns bauen.' },
  'edit.top': { en: 'Back to top ↑', de: 'Nach oben ↑' },
  'edit.cat.all': { en: 'All', de: 'Alle' },
  'edit.cat.products': { en: 'Products', de: 'Produkte' },
  'edit.cat.ai': { en: 'Applied AI', de: 'Angewandte KI' },
  'edit.cat.data': { en: 'Data', de: 'Daten' },
  'edit.cat.collaboration': { en: 'Collaborations', de: 'Zusammenarbeit' },
  'edit.cat.play': { en: 'Built for fun', de: 'Aus Freude gebaut' },
  'edit.behind': { en: 'The person behind the products', de: 'Der Mensch hinter den Produkten' },
  'edit.story.title': { en: 'Always making<br>something.', de: 'Schon immer<br>am Bauen.' },
  'edit.story.body': { en: 'LEGO builds. Minecraft worlds. Things made from cardboard and paper. As a kid, I was always creating something, finding out what I could make from what was in front of me.', de: 'LEGO-Bauten. Minecraft-Welten. Dinge aus Pappe und Papier. Als Kind habe ich ständig etwas erschaffen und ausprobiert, was sich aus dem machen lässt, was vor mir lag.' },
  'edit.story.now': { en: "What I build has changed. The curiosity hasn't. Today, that same instinct takes me from an idea to the experience, the code, and a product people can actually use.", de: 'Was ich baue, hat sich verändert. Die Neugier ist geblieben. Heute führt mich derselbe Antrieb von einer Idee über die Nutzererfahrung und den Code bis zu einem Produkt, das Menschen wirklich nutzen können.' },
  'edit.journey.label': { en: 'The places that shape me', de: 'Die Orte, die mich prägen' },
  'edit.journey.title': { en: 'From Jakarta.<br>Building in Aachen.', de: 'Aus Jakarta.<br>Heute in Aachen.' },
  'edit.journey.intro': { en: 'I’m from Jakarta, Indonesia. Today, I’m in Aachen, Germany, finishing my Computer Science degree at FH Aachen. Different places, the same drive to make things.', de: 'Ich komme aus Jakarta, Indonesien. Heute lebe ich in Aachen und schließe mein Informatikstudium an der FH Aachen ab. Andere Orte, derselbe Antrieb, Dinge zu erschaffen.' },
  'edit.journey.home': { en: '01 / Where I’m from', de: '01 / Woher ich komme' },
  'edit.journey.jakarta': { en: 'Jakarta, Indonesia', de: 'Jakarta, Indonesien' },
  'edit.journey.home.body': { en: 'Jakarta is home. I carry that part of my story with me, even as I study and build in Germany.', de: 'Jakarta ist meine Heimat. Diesen Teil meiner Geschichte nehme ich mit, auch während ich in Deutschland studiere und Produkte entwickle.' },
  'edit.journey.skyline': { en: 'Pictured: Jakarta skyline', de: 'Im Bild: die Skyline von Jakarta' },
  'edit.journey.now': { en: '02 / Where I am now', de: '02 / Wo ich heute bin' },
  'edit.journey.aachen': { en: 'Aachen, Germany', de: 'Aachen, Deutschland' },
  'edit.journey.aachen.body': { en: 'Studying Computer Science at FH Aachen and turning ideas into full-stack products, with Applied AI where it makes the experience better.', de: 'Ich studiere Informatik an der FH Aachen und setze Ideen als Full-Stack-Produkte um, mit angewandter KI dort, wo sie die Nutzererfahrung verbessert.' },
  'edit.journey.dom': { en: 'Pictured: Aachen Cathedral', de: 'Im Bild: der Aachener Dom' },
  'edit.more': { en: 'A little more about me', de: 'Mehr über mich' },
  'edit.young': { en: 'Ken, the early years.', de: 'Ken, die frühen Jahre.' },
  'edit.approach': { en: 'From idea to iteration', de: 'Von der Idee zur Weiterentwicklung' },
  'edit.call': { en: '[ Call me Ken ]', de: '[ Nenn mich Ken ]' },
  'edit.position': { en: 'Building complete<br>digital products.', de: 'Ich entwickle komplette<br>digitale Produkte.' },
  'edit.disciplines': { en: 'Full-stack engineering · Applied AI · Product thinking', de: 'Full-Stack-Entwicklung · Angewandte KI · Produktdenken' },
  'edit.scroll': { en: 'Scroll to explore ↓', de: 'Weiter entdecken ↓' },
  'edit.selected': { en: 'Selected work', de: 'Ausgewählte Projekte' },
  'edit.all': { en: 'The full archive', de: 'Das ganze Archiv' },
  'edit.archive.label': { en: 'A collection of things I’ve built', de: 'Eine Sammlung meiner Projekte' },
  'edit.about.label': { en: 'A little more personal', de: 'Etwas persönlicher' },
  'edit.about.title': { en: 'Curious by nature.<br>A builder at heart.', de: 'Neugierig von Natur aus.<br>Im Herzen ein Macher.' },
  'edit.personal.title': { en: 'A little beyond<br>the keyboard.', de: 'Ein Blick über<br>die Tastatur hinaus.' },
  'edit.personal.body': { en: 'From Jakarta to Aachen, with a few places in between. Get to know the person behind the products.', de: 'Von Jakarta nach Aachen, mit ein paar Orten dazwischen. Lerne den Menschen hinter den Produkten kennen.' },
  'edit.matters': { en: 'What matters to me', de: 'Was mir wichtig ist' },
  'edit.values.title': { en: 'Thoughtful decisions.<br>Things that feel good to use.', de: 'Durchdachte Entscheidungen.<br>Produkte, die sich gut anfühlen.' },
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
    en: 'Software Engineer · Aachen, Germany',
    de: 'Softwareentwickler · Aachen, Deutschland',
  },
  'hero.title': {
    en: 'I build complete products, from first idea to shipped software.',
    de: 'Ich entwickle komplette Produkte – von der ersten Idee bis zur fertigen Software.',
  },
  'hero.tagline': {
    en: "I'm Ken, a final-year Computer Science student at FH Aachen. I design the experience, build the frontend and backend, and apply AI where it makes the product more useful.",
    de: 'Ich bin Ken, Informatikstudent im letzten Jahr an der FH Aachen. Ich gestalte die Nutzererfahrung, entwickle Frontend und Backend und setze KI dort ein, wo sie das Produkt nützlicher macht.',
  },
  'hero.cta1': { en: 'Explore selected work', de: 'Projekte entdecken' },
  'hero.cta2': { en: 'Get in touch', de: 'Kontakt aufnehmen' },

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
  'spec.eyebrow': { en: '02. Approach',         de: '02. Arbeitsweise' },
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
  'work.eyebrow':  { en: '01. Selected work', de: '01. Ausgewählte Projekte' },
  'work.title':    { en: 'Featured projects',  de: 'Ausgewählte Projekte' },
  // Home shows four featured projects; projects.html shows the full set.
  'work.subtitle': {
    en: 'Products that show how I turn an idea into a useful, working experience.',
    de: 'Produkte, die zeigen, wie ich aus einer Idee eine nützliche, funktionierende Anwendung mache.',
  },
  'work.seeAll': { en: 'See all my projects', de: 'Alle Projekte ansehen' },
  'work.case': { en: 'Read case study', de: 'Projekt im Detail' },

  // ── All-projects page ──
  'projects.back':    { en: 'Back to home',        de: 'Zurück zur Startseite' },
  'projects.eyebrow': { en: 'All work',            de: 'Alle Projekte' },
  'projects.title':   { en: 'More work and experiments', de: 'Weitere Projekte und Experimente' },
  'projects.subtitle': {
    en: "A wider look at the products, collaborations, and visual experiments I've built.",
    de: 'Ein breiterer Einblick in meine Produkte, Teamprojekte und visuellen Experimente.',
  },
  'badge.live':       { en: 'Live',              de: 'Live' },
  'badge.university': { en: 'University project', de: 'Universitätsprojekt' },
  'badge.development': { en: 'In development', de: 'In Entwicklung' },
  'work.view':        { en: 'View project',      de: 'Projekt ansehen' },

  'work.cat.ai':   { en: 'Agentic AI &amp; Workflows',       de: 'Agentische KI &amp; Workflows' },
  'work.cat.web':  { en: 'Full-Stack Products',          de: 'Full-Stack-Produkte' },
  'work.cat.data': { en: 'Data Engineering &amp; Analytics', de: 'Data Engineering &amp; Analytics' },
  'work.cat.collab': { en: 'Collaborations', de: 'Kollaborationen' },
  'work.vocmel.body': {
    en: 'A bilingual storefront for heritage footwear and goods, with a browsable catalog, product details, and buying guidance.',
    de: 'Eine zweisprachige Website für Heritage-Schuhe und Accessoires mit einem durchsuchbaren Katalog, Produktdetails und Kaufberatung.',
  },
  'work.explorations': { en: 'Built for fun', de: 'Aus Spaß gebaut' },

  'work.stackpilot.body': {
    en: 'Turns any documentation into a guided lesson - an AI agent researches it, writes it, and checks its own sources.',
    de: 'Macht aus beliebiger Dokumentation eine geführte Lektion - ein KI-Agent recherchiert, schreibt und prüft seine eigenen Quellen.',
  },
  'work.align.body': {
    en: 'Reads a CV against a job description, shows where the real skill gaps are, and drafts a cover letter that only claims what the CV backs up.',
    de: 'Gleicht Lebenslauf und Stellenanzeige ab, zeigt die echten Skill-Lücken und entwirft ein Anschreiben, das nur behauptet, was der Lebenslauf hergibt.',
  },
  'work.chattrolley.body': { en: "Specialized AI assistants for small and medium businesses, grounded in their own product data to answer customer questions and recommend relevant products.", de: "Spezialisierte KI-Assistenten für kleine und mittlere Unternehmen, die auf eigenen Produktdaten basieren, Kundenfragen beantworten und passende Produkte empfehlen." },
  'work.showup.body': { en: "A social app for discovering plans and meeting people offline. Built with a small team, with my work spanning product, UX, and full-stack development.", de: "Eine Social App, um Pläne zu entdecken und Menschen offline zu treffen. Im kleinen Team entwickelt, mit meinen Beiträgen zu Produkt, UX und Full-Stack-Entwicklung." },
  'work.questime.body': {
    en: "I'm actively building a playful way to turn everyday growth into an adventure, with daily quests, six life paths, and collectible companions.",
    de: 'Ich entwickle aktiv einen spielerischen Weg, alltägliche Fortschritte zum Abenteuer zu machen – mit täglichen Quests, sechs Lebensbereichen und sammelbaren Begleitern.',
  },
  'work.questime.type': { en: 'Current focus · Newest project', de: 'Aktueller Fokus · Neuestes Projekt' },
  'work.robustabgabe.body': {
    en: 'Uses agentic AI to automate assignment review, assess student submissions against rubrics, and draft feedback.',
    de: 'Nutzt agentische KI, um Abgaben automatisch anhand von Bewertungskriterien zu prüfen und Feedback zu entwerfen.',
  },
  'work.robustabgabe.type': { en: 'FH Aachen · Practice project', de: 'FH Aachen · Praxisprojekt' },
  'work.wearframe.body': {
    en: 'A personal exploration in making it easier to build outfits from clothes you already own.',
    de: 'Eine persönliche Exploration, die dabei hilft, Outfits aus der eigenen Garderobe zusammenzustellen.',
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
  'skills.eyebrow': { en: '04. Tools',        de: '04. Tools' },
  'skills.title':   { en: 'Tools I use to ship', de: 'Tools, mit denen ich ausliefere' },
  'skills.frontend.title': { en: 'Frontend',        de: 'Frontend' },
  'skills.frontend.4':     { en: 'Responsive, accessible UI', de: 'Responsive, barrierefreie UI' },
  'skills.backend.title':  { en: 'Backend &amp; AI',  de: 'Backend &amp; KI' },
  'skills.backend.3':      { en: 'RAG · structured LLM outputs', de: 'RAG · strukturierte LLM-Outputs' },
  'skills.tooling.title':  { en: 'Tooling &amp; Ops', de: 'Tooling &amp; Ops' },
  'skills.tooling.3':      { en: 'Vercel · CI/CD pipelines', de: 'Vercel · CI/CD-Pipelines' },

  // ── About me ──
  'aboutMe.eyebrow': { en: '03. About me',   de: '03. Über mich' },
  'aboutMe.title':   { en: "Hi, I'm Kenvara", de: 'Hallo, ich bin Kenvara' },
  'aboutMe.lead': {
    en: 'I study Computer Science at FH Aachen and build products across frontend, backend, and applied AI. I care about clear interfaces and the decisions that make software useful.',
    de: 'Ich studiere Informatik an der FH Aachen und entwickle Produkte über Frontend, Backend und angewandte KI hinweg. Mir sind klare Interfaces und durchdachte Produktentscheidungen wichtig.',
  },
  'aboutMe.p1.title': { en: 'Product thinking', de: 'Produktdenken' },
  'aboutMe.p1.body': {
    en: 'I start by deciding what problem to solve, what belongs in the MVP, and how the experience should work.',
    de: 'Ich beginne mit der Frage, welches Problem wir lösen, was ins MVP gehört und wie die Nutzererfahrung funktionieren soll.',
  },
  'aboutMe.p2.title': { en: 'Engineering breadth', de: 'Breite in der Entwicklung' },
  'aboutMe.p2.body': {
    en: 'I connect responsive interfaces to APIs, data, authentication, deployment, and practical AI features.',
    de: 'Ich verbinde responsive Interfaces mit APIs, Daten, Authentifizierung, Deployment und praxisnahen KI-Funktionen.',
  },
  'aboutMe.p3.title': { en: 'From idea to iteration', de: 'Von der Idee zur Weiterentwicklung' },
  'aboutMe.p3.body': {
    en: 'Chattrolley and Show Up showcase my work in AI commerce and full-stack product development.',
    de: 'Chattrolley und Show Up zeigen meine Arbeit mit KI im E-Commerce und in der Full-Stack-Produktentwicklung.',
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
    en: "I'm open to software engineering, full-stack, frontend, and Applied AI opportunities. If my work fits your team, I'd be glad to talk. Email or LinkedIn, whichever is easier.",
    de: 'Ich bin offen für Aufgaben in Softwareentwicklung, Full-Stack, Frontend und angewandter KI. Wenn meine Arbeit zu eurem Team passt, freue ich mich über ein Gespräch – per E-Mail oder LinkedIn.',
  },

  // ── Footer ──
  'footer.about':   { en: 'About',   de: 'Über mich' },
  'footer.contact': { en: 'Contact', de: 'Kontakt' },
  'footer.rights': {
    en: '© <span data-year>2026</span> Kenvara Solivo Lwie. All rights reserved.',
    de: '© <span data-year>2026</span> Kenvara Solivo Lwie. Alle Rechte vorbehalten.',
  },

  // Case studies
  'case.contact': { en: 'Contact', de: 'Kontakt' },
  'case.back': { en: '← Back to selected work', de: '← Zurück zu den Projekten' },
  'case.live': { en: 'Explore live product', de: 'Live-Produkt ansehen' },
  'case.story': { en: 'Read the story', de: 'Projekt ansehen' },
  'case.role': { en: 'Role', de: 'Rolle' },
  'case.scope': { en: 'Scope', de: 'Umfang' },
  'case.stack': { en: 'Built with', de: 'Technologien' },
  'case.context': { en: '01 / Context', de: '01 / Kontext' },
  'case.decisions': { en: '02 / Product decisions', de: '02 / Produktentscheidungen' },
  'case.result': { en: '03 / What shipped', de: '03 / Ergebnis' },
  'case.next': { en: 'Next case study', de: 'Nächstes Projekt' },
  'case.all': { en: 'Selected work', de: 'Ausgewählte Projekte' },

  'show.kicker': { en: "Small team · Full-stack engineering", de: "Kleines Team · Full-Stack-Entwicklung" },
  'show.lede': { en: 'Making it easier to discover plans and meet people offline.', de: 'Pläne entdecken und Menschen offline kennenlernen – einfacher gemacht.' },
  'show.summary': { en: "Working with a small team, I contributed across product concept, UX, branding, frontend, backend, deployment, and iteration.", de: "In einem kleinen Team habe ich an Produktidee, UX, Branding, Frontend, Backend, Deployment und Weiterentwicklung mitgearbeitet." },
  'show.role': { en: "Full-stack engineer in a small team", de: "Full-Stack-Entwickler in einem kleinen Team" },
  'show.scope': { en: 'Product · UX · Frontend · Backend · Deployment', de: 'Produkt · UX · Frontend · Backend · Deployment' },
  'show.context.title': { en: 'From online discovery to showing up in person.', de: 'Von der Online-Entdeckung zum Treffen vor Ort.' },
  'show.context.body': { en: "Show Up is a social app built around a simple idea: help people find plans worth joining and meet others offline. Working with a small team, I helped shape the concept and experience, build the product, and deploy it.", de: "Show Up basiert auf einer einfachen Idee: Menschen sollen passende Pläne finden und sich offline treffen können. In einem kleinen Team habe ich Konzept und Nutzererfahrung mitgestaltet und an Entwicklung und Deployment mitgearbeitet." },
  'show.decisions.title': { en: 'An MVP focused on the next real-world step.', de: 'Ein MVP mit Fokus auf den nächsten Schritt im echten Leben.' },
  'show.d1.title': { en: 'Start with plans', de: 'Pläne in den Mittelpunkt' },
  'show.d1.body': { en: 'Make discovering something to do the center of the experience, so the product has a clear purpose from the first screen.', de: 'Die Suche nach Aktivitäten steht im Mittelpunkt, damit der Zweck des Produkts vom ersten Bildschirm an klar ist.' },
  'show.d2.title': { en: 'Keep the experience approachable', de: 'Einfach zugänglich gestalten' },
  'show.d2.body': { en: 'Use clear language, considered visual design, and responsive flows to reduce friction between interest and action.', de: 'Klare Sprache, durchdachtes Design und responsive Abläufe verringern die Hürde zwischen Interesse und Teilnahme.' },
  'show.d3.title': { en: 'Own the whole journey', de: 'Den ganzen Weg verantworten' },
  'show.d3.body': { en: 'Connect product decisions to implementation, deployment, and iteration instead of treating the interface as a standalone mockup.', de: 'Produktentscheidungen mit Implementierung, Deployment und Weiterentwicklung verbinden – über einen reinen Prototyp hinaus.' },
  'show.result.title': { en: 'A live product, built end to end.', de: 'Ein Live-Produkt, vollständig umgesetzt.' },
  'show.result.body': { en: "Show Up reflects how I work within a small team: connect product decisions, UX, frontend, backend, deployment, and ongoing improvements.", de: "Show Up zeigt meine Arbeit in einem kleinen Team: Produktentscheidungen, UX, Frontend, Backend, Deployment und laufende Verbesserungen verbinden." },
  'show.next.body': { en: 'A playful take on everyday growth, built around quests and companions.', de: 'Ein spielerischer Ansatz für persönliche Entwicklung mit Quests und Begleitern.' },

  'quest.kicker': { en: 'Current focus · My newest project', de: 'Aktueller Fokus · Mein neuestes Projekt' },
  'quest.lede': { en: 'A more playful way to make progress in everyday life.', de: 'Ein spielerischerer Weg zu Fortschritten im Alltag.' },
  'quest.summary': { en: "Questime turns personal growth into an adventure with daily quests, six life paths, and collectible companions. It's one of the products I'm actively working on most.", de: 'Questime macht persönliche Entwicklung mit täglichen Quests, sechs Lebensbereichen und sammelbaren Begleitern zum Abenteuer. Es ist eines der Produkte, an denen ich derzeit am meisten arbeite.' },
  'quest.fact1.label': { en: 'Status', de: 'Status' },
  'quest.fact1.value': { en: 'Live and actively evolving', de: 'Live und in aktiver Weiterentwicklung' },
  'quest.fact2.label': { en: 'Core experience', de: 'Kern des Erlebnisses' },
  'quest.fact2.value': { en: 'Daily quests · Six life paths · Companions', de: 'Tägliche Quests · Sechs Lebensbereiche · Begleiter' },
  'quest.fact3.label': { en: 'Focus', de: 'Fokus' },
  'quest.fact3.value': { en: 'Making everyday growth engaging', de: 'Persönliche Entwicklung motivierender gestalten' },
  'quest.context.title': { en: 'Small actions should feel like progress.', de: 'Kleine Schritte sollen sich wie Fortschritt anfühlen.' },
  'quest.context.body': { en: 'Questime brings game-like structure to everyday goals. Instead of presenting growth as a plain checklist, it gives people quests to complete, paths to explore, and companions to collect along the way.', de: 'Questime bringt spielerische Struktur in alltägliche Ziele. Statt persönlicher Entwicklung als einfacher Checkliste gibt es Quests, Wege zum Erkunden und Begleiter zum Sammeln.' },
  'quest.decisions.title': { en: 'A simple loop with room to explore.', de: 'Ein einfacher Ablauf mit Raum zum Entdecken.' },
  'quest.d1.title': { en: 'Make it daily', de: 'Täglich dranbleiben' },
  'quest.d1.body': { en: 'Daily quests give the experience a concrete next action and make progress easier to return to.', de: 'Tägliche Quests geben eine konkrete nächste Aufgabe und machen es leichter, zum eigenen Fortschritt zurückzukehren.' },
  'quest.d2.title': { en: 'Give growth direction', de: 'Entwicklung eine Richtung geben' },
  'quest.d2.body': { en: 'Six life paths let people explore different areas of growth within one coherent product.', de: 'Sechs Lebensbereiche ermöglichen es, unterschiedliche Seiten der persönlichen Entwicklung in einem Produkt zu erkunden.' },
  'quest.d3.title': { en: 'Make it memorable', de: 'In Erinnerung bleiben' },
  'quest.d3.body': { en: 'Collectible companions bring personality and a sense of discovery to the journey.', de: 'Sammelbare Begleiter geben dem Weg Persönlichkeit und ein Gefühl von Entdeckung.' },
  'quest.result.title': { en: 'A live product I keep building.', de: 'Ein Live-Produkt, an dem ich weiterarbeite.' },
  'quest.result.body': { en: "Questime is live, and I'm continuing to work on how its quests, paths, and companions come together as one experience. It's my newest and most playful project.", de: 'Questime ist live. Ich arbeite weiter daran, wie Quests, Lebensbereiche und Begleiter zu einem stimmigen Erlebnis werden. Es ist mein neuestes und spielerischstes Projekt.' },
  'quest.next.body': { en: "Specialized AI assistants for small and medium businesses, grounded in their own product data.", de: "Spezialisierte KI-Assistenten für kleine und mittlere Unternehmen auf Basis eigener Produktdaten." },

  'chat.kicker': { en: "Business-specific AI assistants · Applied AI", de: "KI-Assistenten für Unternehmen · Angewandte KI" },
  'chat.lede': { en: "Specialized AI assistants for small and medium businesses.", de: "Spezialisierte KI-Assistenten für kleine und mittlere Unternehmen." },
  'chat.summary': { en: "Chattrolley uses a business's own product data to tailor an AI assistant to its catalog. Customers can ask questions, get relevant in-stock recommendations, and continue to the business's existing checkout.", de: "Chattrolley nutzt die eigenen Produktdaten eines Unternehmens, um einen KI-Assistenten auf dessen Katalog abzustimmen. Kunden können Fragen stellen, passende verfügbare Produkte finden und zum bestehenden Checkout gelangen." },
  'chat.role': { en: "Full-stack development", de: "Full-Stack-Entwicklung" },
  'chat.scope': { en: "Business data · AI grounding · Recommendation validation", de: "Unternehmensdaten · KI-Kontext · Empfehlungsvalidierung" },
  'chat.context.title': { en: "An assistant that knows the business.", de: "Ein Assistent, der das Unternehmen kennt." },
  'chat.context.body': { en: "Small and medium businesses need customer assistance that reflects what they actually sell. Chattrolley focuses on connecting AI conversations to each business's product catalog, prices, variants, and availability.", de: "Kleine und mittlere Unternehmen brauchen Kundenberatung, die zu ihrem tatsächlichen Angebot passt. Chattrolley verbindet KI-Gespräche mit dem Produktkatalog, den Preisen, Varianten und der Verfügbarkeit des jeweiligen Unternehmens." },
  'chat.decisions.title': { en: "Ground the assistant in business data.", de: "Den Assistenten auf Unternehmensdaten abstimmen." },
  'chat.d1.title': { en: "Validate recommendations", de: "Empfehlungen validieren" },
  'chat.d1.body': { en: "The assistant selects products from the merchant's catalog. The server validates recommended product IDs against in-stock items before returning product cards.", de: "Der Assistent wählt Produkte aus dem Händlerkatalog aus. Der Server prüft empfohlene Produkt-IDs gegen verfügbare Artikel, bevor Produktkarten zurückgegeben werden." },
  'chat.d2.title': { en: 'Show the product', de: 'Produkte sichtbar machen' },
  'chat.d2.body': { en: 'Bring product details into the interface so shoppers can inspect options as the assistant explains them.', de: 'Produktdetails erscheinen direkt im Interface, sodass Kunden Optionen während des Gesprächs ansehen können.' },
  'chat.d3.title': { en: 'Keep checkout connected', de: 'Checkout anschließen' },
  'chat.d3.body': { en: 'The conversation is useful when it helps customers make a decision and gives them a clear route to purchase.', de: 'Das Gespräch hilft bei der Entscheidung und bietet einen klaren Weg zum Kauf.' },
  'chat.result.title': { en: "A working assistant tailored to the business.", de: "Ein funktionierender Assistent für das Unternehmen." },
  'chat.result.body': { en: "Chattrolley is an AI assistant project for small and medium businesses. Its commerce implementation uses merchant catalog data as AI context, validates recommended products on the server, and connects product discovery to existing checkout.", de: "Chattrolley ist ein KI-Assistenten-Projekt für kleine und mittlere Unternehmen. Die Commerce-Implementierung nutzt Händlerkatalogdaten als KI-Kontext, validiert empfohlene Produkte auf dem Server und verbindet Produktsuche mit dem bestehenden Checkout." },
  'chat.next.body': { en: "A social app built with a small team, from idea to deployment.", de: "Eine Social App, im kleinen Team von der Idee bis zum Deployment entwickelt." },
};
