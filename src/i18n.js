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
  'hero.cta2': { en: 'Contact me',   de: 'Kontakt aufnehmen' },

  // ── Tech strip ──
  'tech.label': {
    en: 'Tools &amp; technologies I work with',
    de: 'Tools &amp; Technologien, mit denen ich arbeite',
  },

  // ── Approach ──
  'approach.eyebrow': { en: '01 — Approach', de: '01 — Ansatz' },
  'approach.statement': {
    en: 'I get <span class="mark-box">something working</span> in front of people early, then make it <span class="mark">hold up</span>.',
    de: 'Ich bringe früh <span class="mark-box">etwas Funktionierendes</span> vor Nutzer und mache es dann <span class="mark">haltbar</span>.',
  },
  'approach.body': {
    en: 'Tests and deployment are set up from the first commit, so the early version is something to build on rather than something to throw away.',
    de: 'Tests und Deployment stehen ab dem ersten Commit — die frühe Version ist damit eine Grundlage und kein Wegwerfstück.',
  },
  'approach.cap1': { en: 'A working version first',        de: 'Zuerst eine lauffähige Version' },
  'approach.cap2': { en: "Built so it doesn't need redoing", de: 'So gebaut, dass nichts neu gemacht wird' },
  'approach.cap3': { en: 'Frontend and backend',           de: 'Frontend und Backend' },
  'approach.cap4': { en: 'AI only where it helps',         de: 'KI nur, wo sie hilft' },
  // ── Work ──
  // Blurbs say what a project DOES, in one sentence. The technical detail
  // lives on each project's own site — repeating it here just buried it.
  'work.eyebrow':  { en: '02 — Work',          de: '02 — Projekte' },
  'work.title':    { en: "Things I've built",  de: 'Was ich gebaut habe' },
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
    en: 'Eight projects grouped by what they are, plus the ones built purely for fun.',
    de: 'Acht Projekte, nach Art gruppiert — dazu die, die rein aus Spaß entstanden sind.',
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

  // ── What I've done ──
  'why.title': { en: "What I've done", de: 'Was ich gemacht habe' },
  'why.1': {
    en: 'Seven of the projects above are <span class="font-bold text-slate-900">live</span>. You can open any of them and click around before you decide anything.',
    de: 'Sieben der Projekte oben sind <span class="font-bold text-slate-900">live</span>. Du kannst jedes davon öffnen und ausprobieren, bevor du dich entscheidest.',
  },
  'why.2': {
    en: 'Watchflow updates itself <span class="font-bold text-slate-900">every trading day</span>. The staff at Fuji no Hana change their own offers without asking me.',
    de: 'Watchflow aktualisiert sich an <span class="font-bold text-slate-900">jedem Handelstag</span> selbst. Das Team von Fuji no Hana ändert seine Angebote ohne mich.',
  },
  'why.3': {
    en: 'At AIESEC, finding leads took a whole afternoon. I scoped and built the tool that brings it down to <span class="font-bold text-slate-900">three minutes</span>.',
    de: 'Bei AIESEC dauerte die Lead-Suche einen ganzen Nachmittag. Ich habe das Tool zugeschnitten und gebaut, das daraus <span class="font-bold text-slate-900">drei Minuten</span> macht.',
  },
  'why.4': {
    en: 'On the AI projects I wrote <span class="font-bold text-slate-900">both</span> the retrieval pipeline underneath and the streaming interface on top of it.',
    de: 'Bei den KI-Projekten habe ich <span class="font-bold text-slate-900">beides</span> geschrieben: die Retrieval-Pipeline darunter und das Streaming-Interface darüber.',
  },

  // ── How I work ──
  'get.title': { en: 'How I work', de: 'Wie ich arbeite' },
  'get.1': {
    en: 'You get something deployed in the <span class="font-bold text-slate-900">first days</span> — a version you can open and click, not a document describing one.',
    de: 'Du bekommst in den <span class="font-bold text-slate-900">ersten Tagen</span> etwas Deploytes — eine Version zum Öffnen und Anklicken, kein Dokument darüber.',
  },
  'get.2': {
    en: 'Tests and CI/CD from the start, so shipping a change is <span class="font-bold text-slate-900">one push</span> and not an event that needs planning.',
    de: 'Tests und CI/CD von Anfang an: Eine Änderung auszuliefern ist <span class="font-bold text-slate-900">ein Push</span> und kein Termin, den man planen muss.',
  },
  'get.3': {
    en: 'Answers <span class="font-bold text-slate-900">stream in</span> instead of making you wait, and the layout works the same on a phone as on a wide screen.',
    de: 'Antworten <span class="font-bold text-slate-900">laufen ein</span>, statt dich warten zu lassen, und das Layout sitzt am Handy wie am breiten Bildschirm.',
  },
  'get.4': {
    en: 'I say where things stand <span class="font-bold text-slate-900">before you ask</span>, in English or German, and problems come up early rather than at the deadline.',
    de: 'Ich sage, wo die Dinge stehen, <span class="font-bold text-slate-900">bevor du fragst</span>, auf Deutsch oder Englisch — und Probleme kommen früh zur Sprache, nicht erst zur Deadline.',
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
    en: "I'm a Computer Science student at FH Aachen, from Indonesia and living in Germany. I work on AI features: the retrieval pipeline underneath and the interface on top.",
    de: 'Ich bin Informatikstudent an der FH Aachen, komme aus Indonesien und lebe in Deutschland. Ich arbeite an KI-Features: die Retrieval-Pipeline darunter und das Interface darüber.',
  },
  'aboutMe.p2': {
    en: "I pick up new tools quickly and settle into a team fast. Right now I'm looking for a working student role or internship as an AI software engineer.",
    de: 'Ich arbeite mich schnell in neue Tools ein und finde mich zügig in einem Team zurecht. Aktuell suche ich eine Werkstudentenstelle oder ein Praktikum als KI-Softwareentwickler.',
  },

  // ── Contact ──
  'contact.eyebrow': { en: 'Contact', de: 'Kontakt' },
  'contact.title': {
    en: "Get in <span class=\"bg-gradient-to-b from-white to-[#7fb0ff] bg-clip-text text-transparent\">touch</span>",
    de: 'Schreib <span class="bg-gradient-to-b from-white to-[#7fb0ff] bg-clip-text text-transparent">mir</span>',
  },
  'contact.body': {
    en: "I'm looking for a working student role or internship as an AI software engineer. Email or LinkedIn, whichever is easier.",
    de: 'Ich suche eine Werkstudentenstelle oder ein Praktikum als KI-Softwareentwickler. Per E-Mail oder LinkedIn, wie es dir lieber ist.',
  },

  // ── Footer ──
  'footer.about':   { en: 'About',   de: 'Über mich' },
  'footer.contact': { en: 'Contact', de: 'Kontakt' },
  'footer.rights': {
    en: '© <span data-year>2026</span> Kenvara Solivo Lwie. All rights reserved.',
    de: '© <span data-year>2026</span> Kenvara Solivo Lwie. Alle Rechte vorbehalten.',
  },
};
