/**
 * ==========================================================================
 * PORTFOLIO ENOCK KABORÉ - JAVASCRIPT CORE
 * Glassmorphism, Bilinguisme FR/EN, Filtres, Modal Études de Cas & Animations
 * ==========================================================================
 */

// État Global de l'application
const appState = {
  currentLang: 'fr',
  currentCategory: 'all',
  currentProjectId: 1
};

// Base de données des Projets & Études de Cas
const projectsDatabase = [
  {
    id: 1,
    title: {
      fr: "NexFlow — Plateforme SaaS Cloud & Automatisation",
      en: "NexFlow — Cloud SaaS Platform & Automation"
    },
    category: "dev",
    categoryLabel: {
      fr: "Informatique & Web",
      en: "Software & Web"
    },
    client: "NexFlow Global Inc. (Canada)",
    year: "2025",
    role: {
      fr: "Architecte Full-Stack & Designer UI",
      en: "Full-Stack Architect & UI Designer"
    },
    links: {
      live: "https://example.com/nexflow-demo",
      github: "https://github.com/enockkabore/nexflow-core"
    },
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker", "Tailwind Glass"],
    context: {
      fr: "NexFlow avait besoin d'une interface SaaS capable de gérer des flux de travail automatisés pour des équipes de 50+ collaborateurs en temps réel, sans latence perceptible.",
      en: "NexFlow needed a SaaS dashboard capable of handling real-time automated workflows for 50+ teammates with ultra-low latency."
    },
    solution: {
      fr: "Conception d'une architecture orientée micro-services avec WebSocket pour les mises à jour instantanées. Côté interface, création d'un design system fluide avec des cartes à contraste élevé et une hiérarchie visuelle intuitive inspirée du Glassmorphism.",
      en: "Engineered a micro-services architecture using WebSockets for instant updates. Designed a slick glassmorphic design system with high contrast components and intuitive visual hierarchy."
    },
    impact: [
      { number: "-45%", label: { fr: "Temps d'exécution moyen", en: "Average runtime" } },
      { number: "99.9%", label: { fr: "Taux de disponibilité (SLA)", en: "Uptime SLA" } },
      { number: "4.9/5", label: { fr: "Score satisfaction utilisateur", en: "User satisfaction rating" } }
    ],
    mockupType: "code",
    codeSnippet: `// NexFlow Workflow Pipeline
export async function executeTrigger(event: PipelineEvent): Promise<Result> {
  const verified = await authGuard(event.token);
  if (!verified) throw new SecurityError("Unauthorized stream");
  
  return await telemetry.track('pipeline_run', async () => {
    return pipelineDispatcher.route(event.payload);
  });
}`
  },
  {
    id: 2,
    title: {
      fr: "CyberVision — Spot Publicitaire & Brand Reel 4K",
      en: "CyberVision — 4K Commercial Brand Reel"
    },
    category: "video",
    categoryLabel: {
      fr: "Montage & Motion",
      en: "Video & Motion"
    },
    client: "CyberVision Robotics (France)",
    year: "2024",
    role: {
      fr: "Monteur Vidéo, Frame Artist & VFX",
      en: "Video Editor, Frame Artist & VFX"
    },
    links: {
      live: "https://youtube.com/watch?v=demo-cybervision"
    },
    tags: ["Premiere Pro", "After Effects", "Blender 3D", "DaVinci Resolve", "Sound Design"],
    context: {
      fr: "Lancement d'une gamme de casques et robots connectés. Le client souhaitait un film commercial d'1 minute capable d'électriser les spectateurs et de susciter les précommandes.",
      en: "Launch of next-gen smart eyewear and robotic gear. The brand needed a 60-second high-energy commercial to drive pre-orders at a major tech expo."
    },
    solution: {
      fr: "Découpage rythmé synchrone avec un sound design percutant composé sur-mesure. Intégration de modèles 3D Blender incrustés dans After Effects avec tracking de mouvement précis et étalonnage cinématographique profond aux tonalités bordeaux et néons.",
      en: "Rhythmic cut timed to custom sound engineering. Integrated 3D Blender models into After Effects with camera tracking, deep wine/crimson LUT grading and kinetic title cards."
    },
    impact: [
      { number: "1.2M", label: { fr: "Vues cumulées sur les réseaux", en: "Total social impressions" } },
      { number: "+210%", label: { fr: "Augmentation des précommandes", en: "Pre-order conversion surge" } },
      { number: "Top 3", label: { fr: "Sélection Meilleur Spot Tech 2024", en: "Best Tech Ad nomination" } }
    ],
    mockupType: "motion",
    previewText: "Showreel 4K 60FPS • Compositing After Effects & Color Grading DaVinci"
  },
  {
    id: 3,
    title: {
      fr: "Aura Luxe — Identité de Marque & Direction Artistique",
      en: "Aura Luxe — Brand Identity & Art Direction"
    },
    category: "design",
    categoryLabel: {
      fr: "Design Graphique & Branding",
      en: "Graphic Design & Branding"
    },
    client: "Aura Luxe Cosmetics (Suisse / Côte d'Ivoire)",
    year: "2024",
    role: {
      fr: "Directeur Artistique & Designer Visuel",
      en: "Art Director & Brand Designer"
    },
    links: {
      live: "https://behance.net/enockkabore-auraluxe"
    },
    tags: ["Adobe Illustrator", "Photoshop", "Brand Guide", "Packaging 3D", "Typographie"],
    context: {
      fr: "Création d'une marque de cosmétiques haut de gamme éco-responsable. Nécessité d'un logo raffiné et d'un système visuel déclinable sur packaging verre, coffrets et supports digitaux.",
      en: "Launch of an eco-luxury cosmetics line. Needed a timeless minimalist monogram, packaging system for frosted glass containers, and responsive digital guidelines."
    },
    solution: {
      fr: "Conception d'un logotype monogramme élégant avec typographie personnalisée à empattements légers. Sélection d'une palette chromatique noble (Rouge Carmin, Rose Poudré et Noir profond) et modélisation de mockups photoréalistes sous Photoshop.",
      en: "Designed a bespoke monogram with tailored serifs. Curated an opulent palette (Carmine Red, Powder Blush, Deep Wine) and modeled photorealistic packaging textures."
    },
    impact: [
      { number: "100%", label: { fr: "Adoption de la charte de marque", en: "Full brand guidelines rollout" } },
      { number: "15k+", label: { fr: "Packaging vendus au lancement", en: "Units sold on launch day" } },
      { number: "Featured", label: { fr: "Publié sur Behance Best Branding", en: "Curated on Behance Curated" } }
    ],
    mockupType: "design",
    palette: ["#241705", "#7A2A0B", "#BC430D", "#F09410", "#F0D0C7", "#FEEAF0"]
  },
  {
    id: 4,
    title: {
      fr: "PayPulse — Application Mobile Fintech & Sécurité",
      en: "PayPulse — Fintech Mobile App & Biometrics"
    },
    category: "dev",
    categoryLabel: {
      fr: "Informatique & Mobile",
      en: "Software & Mobile"
    },
    client: "PayPulse Solutions",
    year: "2024",
    role: {
      fr: "Lead Mobile Developer & UI Prototyper",
      en: "Lead Mobile Developer & UI Prototyper"
    },
    links: {
      live: "https://example.com/paypulse-app"
    },
    tags: ["Flutter", "Dart", "Firebase", "Biometric Auth", "Figma"],
    context: {
      fr: "Offrir aux utilisateurs une solution bancaire mobile ultra-rapide pour les transferts instantanés avec sécurité biométrique et suivi des dépenses par IA.",
      en: "Deliver an ultra-fast mobile banking experience with instant peer-to-peer transfers, biometric safety, and AI budget breakdown."
    },
    solution: {
      fr: "Architecture Flutter multiplateforme avec gestion d'état réactive (Bloc/Riverpod). Prototypage de micro-interactions tactiles sur Figma et implémentation du mode sombre avec reflets de verre.",
      en: "Built on cross-platform Flutter with robust state management. Designed tactile micro-interactions on Figma and sleek dark mode glass surfaces."
    },
    impact: [
      { number: "50k+", label: { fr: "Téléchargements au premier mois", en: "First-month downloads" } },
      { number: "0.2s", label: { fr: "Temps d'exécution transfert", en: "Transfer speed" } },
      { number: "4.8/5", label: { fr: "Note App Store / Play Store", en: "Store rating" } }
    ],
    mockupType: "mobile"
  },
  {
    id: 5,
    title: {
      fr: "Echoes Fest — Campagne Vidéo & Motion Design Glitch",
      en: "Echoes Fest — Event Video Campaign & Motion Graphics"
    },
    category: "video",
    categoryLabel: {
      fr: "Montage & Motion",
      en: "Video & Motion"
    },
    client: "Echoes Music Festival",
    year: "2023",
    role: {
      fr: "Directeur Vidéo & Motion Artist",
      en: "Video Director & Motion Artist"
    },
    links: {
      live: "https://instagram.com/p/echoes-teaser"
    },
    tags: ["After Effects", "Premiere Pro", "Kinetic Type", "Sound FX"],
    context: {
      fr: "Le festival devait susciter l'urgence et afficher le line-up d'artistes à travers une série de Reels et Stories dynamiques à forte viralité.",
      en: "The festival organizers needed high-octane vertical videos to reveal the artist line-up and trigger ticket sales on Instagram and TikTok."
    },
    solution: {
      fr: "Animations typographiques cinétiques rythmées par un montage syncopé, effets visuels de glitch stylisés et titrages néon contrastés.",
      en: "Crafted kinetic typography syncing with heavy bass hits, chromatic aberrations, glitch art, and glowing neon typography overlays."
    },
    impact: [
      { number: "800k+", label: { fr: "Vues TikTok & Instagram", en: "Views across platforms" } },
      { number: "Sold Out", label: { fr: "Billetterie épuisée en 48h", en: "Tickets sold out in 48h" } },
      { number: "+350%", label: { fr: "Partages organiques", en: "Organic shares jump" } }
    ],
    mockupType: "motion",
    previewText: "Format 9:16 Optimisé Réseaux Sociaux • Kinetic Type & SFX"
  },
  {
    id: 6,
    title: {
      fr: "Kora Sound — Identité Musicale, Pochette & Supports",
      en: "Kora Sound — Music Album Cover & Merch Suite"
    },
    category: "design",
    categoryLabel: {
      fr: "Design Graphique & Print",
      en: "Graphic Design & Print"
    },
    client: "Kora Sound Collective",
    year: "2023",
    role: {
      fr: "Graphiste & Directeur de Création",
      en: "Graphic Designer & Creative Director"
    },
    links: {
      live: "https://behance.net/enockkabore-korasound"
    },
    tags: ["Illustrator", "Photoshop", "Print / Merch", "Vector Art"],
    context: {
      fr: "Projet d'album fusionnant sonorités traditionnelles africaines et beats électro modernes. Création d'une pochette marquante et de goodies exclusifs.",
      en: "An album blending traditional West African harp scales with futuristic electro beats. Required iconic cover art and premium concert merch."
    },
    solution: {
      fr: "Composition graphique combinant illustration vectorielle stylisée de la kora avec dégradés rose framboise et bordeaux profond. Déclinaisons en affiches sérigraphiées et t-shirts.",
      en: "Created an artwork mixing vector kora silhouettes with crimson and blush hues, adapted for silk-screen posters and tour merchandise."
    },
    impact: [
      { number: "10k+", label: { fr: "Vinyles & éditions collector", en: "Collector vinyls sold" } },
      { number: "100%", label: { fr: "Stock textile épuisé en tournée", en: "Tour merch sold out" } },
      { number: "5/5", label: { fr: "Critique design presse culturelle", en: "Cultural press design score" } }
    ],
    mockupType: "design",
    palette: ["#241705", "#3A1D0A", "#7A2A0B", "#BC430D", "#F09410"]
  }
];

// Dictionnaire Bilingue Complet FR / EN
const i18nDictionary = {
  fr: {
    nav_home: "Accueil",
    nav_about: "À propos",
    nav_portfolio: "Portfolio",
    nav_services: "Services",
    nav_contact: "Contact",
    btn_contact_me: "Me contacter",
    hero_status: "Disponible pour projets & collaborations",
    hero_roles: "Tech & Création Visuelle",
    hero_tagline: "Informaticien, Graphic & Motion Designer et Monteur Vidéo. Je conçois des solutions logicielles performantes et des univers visuels captivants.",
    btn_explore_works: "Voir mes réalisations",
    btn_contact_hero: "Démarrer un projet",
    btn_download_cv_hero: "CV (PDF)",
    stat_exp: "Années d'expérience",
    stat_projects: "Projets Réalisés",
    stat_clients: "Clients & Partenaires",
    stat_satisfaction: "Satisfaction Client",
    about_tag: "Mon Parcours",
    about_title: "Créativité Visuelle & Rigueur Informatique",
    about_subtitle: "Découvrez qui je suis, ma vision transversale et les technologies qui alimentent mes projets du concept au produit final.",
    profile_role_desc: "Informaticien & Créatif Multidisciplinaire",
    profile_available: "Ouvert aux opportunités 2026",
    hover_reveal: "Survolez-moi",
    bio_title_1: "L'alliance de la logique et de l'émotion",
    bio_p1: "Passionné par les sciences informatiques et les arts visuels depuis mes débuts, j'ai développé une approche hybride unique. Je ne me contente pas de coder des interfaces : je conçois des univers complets où la performance technique soutient une direction artistique percutante.",
    bio_p2: "Qu'il s'agisse de concevoir une architecture logicielle robuste, de prototyper un produit digital intuitif sur Figma, ou de monter un film promotionnel dynamique rythmé avec des effets After Effects & 3D, mon objectif reste invariable : l'excellence d'exécution et l'impact mémorable.",
    bio_title_2: "Mon engagement professionnel",
    bio_p3: "Chaque projet est traité avec rigueur : code propre, documentation soignée, ergonomie étudiée et respect strict des délais. Je collabore aussi bien avec des startups ambitieuses qu'avec des marques établies pour propulser leur présence digitale.",
    pillar_dev_title: "Informatique & Dév",
    pillar_dev_desc: "Développement de solutions web et mobiles fiables, APIs performantes et architectures modulaires.",
    pillar_design_title: "Design Graphique & UI/UX",
    pillar_design_desc: "Identités visuelles distinctives, ergonomie utilisateur, chartes graphiques et prototypage de haut niveau.",
    pillar_motion_title: "Montage Vidéo & Motion",
    pillar_motion_desc: "Storytelling visuel percutant, animations graphiques 2D/3D, étalonnage cinématique et sound design.",
    tools_title: "Environnement de Travail & Outils Maîtrisés",
    timeline_edu_title: "Formation & Diplômes",
    edu_deg_1: "Licence en Sciences Informatiques",
    edu_desc_1: "Spécialisation en génie logiciel, algorithmique, développement web/mobile et bases de données relationnelles.",
    edu_deg_2: "Certification Motion Design & Étalonnage",
    edu_desc_2: "Perfectionnement aux techniques avancées de compositing, keyframing cinématique et intégration 3D.",
    timeline_exp_title: "Expériences Professionnelles",
    exp_role_1: "Lead Designer & Développeur Full-Stack",
    exp_desc_1: "Conception de plateformes SaaS, chartes graphiques complètes, et vidéos commerciales pour clients en Afrique et en Europe.",
    exp_role_2: "Monteur Vidéo & Graphiste Digital",
    exp_desc_2: "Production de contenus réseaux sociaux (TikTok, Reels), affiches publicitaires et animations d'écrans pour conférences.",
    btn_download_cv: "Télécharger mon CV complet (PDF)",
    btn_download_cv_fr: "Télécharger le CV français",
    btn_download_cv_en: "Télécharger le CV anglais",
    portfolio_tag: "Galerie des Projets",
    portfolio_title: "Sélection de Mes Réalisations",
    portfolio_subtitle: "Explorez mes projets récents en développement d'applications, identités visuelles et créations motion design.",
    filter_all: "Tout",
    filter_dev: "Informatique & Web/Mobile",
    filter_design: "Design Graphique & Branding",
    filter_video: "Montage Vidéo & Motion",
    btn_view_study: "Voir l'étude de cas",
    modal_prev: "Projet Précédent",
    modal_next: "Projet Suivant",
    services_tag: "Mes Offres",
    services_title: "Des Solutions Conçues Pour Votre Réussite",
    services_subtitle: "Bénéficiez d'une synergie unique entre code performant, identité visuelle remarquable et contenu vidéo captivant.",
    service_popular: "Le Plus Demandé",
    service_1_title: "Développement Web & App",
    service_1_desc: "Création de plateformes sur-mesure, applications réactives, intégration d'interfaces ergonomiques et optimisées SEO.",
    service_2_title: "Design Graphique & Branding",
    service_2_desc: "Identités mémorables de A à Z : logotypes percutants, maquettes UI Figma interactives et déclinaisons marketing.",
    service_3_title: "Production Vidéo & Motion",
    service_3_desc: "Montage storytellé pour captiver votre audience sur toutes les plateformes (YouTube, Reels, TikTok, publicité).",
    btn_choose_service: "Demander un devis",
    workflow_title: "Comment Nous Allons Travailler Ensemble",
    workflow_subtitle: "Une méthodologie transparente et éprouvée pour garantir des résultats à la hauteur de vos ambitions.",
    step_1_title: "Brief & Analyse",
    step_1_desc: "Compréhension approfondie de vos objectifs, de votre audience cible et définition du cahier des charges.",
    step_2_title: "Conception & Maquettage",
    step_2_desc: "Élaboration des wireframes, storyboards vidéo et planches de style soumises à votre validation.",
    step_3_title: "Dév & Montage",
    step_3_desc: "Phase de production intensive : écriture du code, compositing vidéo, sound design et finitions minutieuses.",
    step_4_title: "Livraison & Révisions",
    step_4_desc: "Déploiement en ligne ou export haute définition, retouches incluses et accompagnement au lancement.",
    contact_tag: "Prenons Contact",
    contact_title: "Discutons de Votre Prochain Projet",
    contact_subtitle: "Une idée, un besoin technique ou une opportunité de collaboration ? Envoyez-moi un message et je vous réponds sous 24h.",
    contact_info_title: "Coordonnées Directes",
    label_email: "Adresse E-mail",
    label_phone: "Téléphone / WhatsApp",
    label_location: "Localisation & Mobilité",
    val_location: "Ouagadougou, BF • Collaborations Mondiales à Distance",
    contact_socials_title: "Réseaux & Plateformes Pro",
    contact_socials_sub: "Retrouvez mes publications, codes et créations sur le web :",
    form_name: "Nom complet *",
    form_email: "Adresse E-mail *",
    form_subject: "Sujet *",
    form_types_title: "Type de projet (Cochez vos besoins) :",
    chk_dev: "Informatique & Web/Mobile",
    chk_design: "Design Graphique & Branding",
    chk_video: "Montage Vidéo & Motion",
    form_budget: "Budget estimé :",
    budget_opt_1: "Moins de 1 000 $ / 500 000 FCFA",
    budget_opt_2: "1 000 $ — 3 000 $ / 1M — 2M FCFA",
    budget_opt_3: "Plus de 3 000 $ / 2M+ FCFA",
    form_msg: "Votre Message *",
    btn_send_msg: "Envoyer le message",
    footer_cta_title: "Un projet en tête ? Travaillons ensemble.",
    footer_cta_desc: "Transformons vos idées en solutions logicielles percutantes et en créations visuelles inoubliables.",
    btn_lets_talk: "Démarrer une collaboration",
    footer_copy: "© 2026 Enock Kaboré. Tous droits réservés. Conçu avec passion & Glassmorphism."
  },
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_portfolio: "Portfolio",
    nav_services: "Services",
    nav_contact: "Contact",
    btn_contact_me: "Get In Touch",
    hero_status: "Available for new projects & collaborations",
    hero_roles: "Tech & Visual Artistry",
    hero_tagline: "Software Engineer, Graphic & Motion Designer, and Video Editor. I build high-performance digital solutions and captivating visual worlds.",
    btn_explore_works: "Explore My Works",
    btn_contact_hero: "Start a Project",
    btn_download_cv_hero: "CV (PDF)",
    stat_exp: "Years of Experience",
    stat_projects: "Completed Projects",
    stat_clients: "Clients & Partners",
    stat_satisfaction: "Client Satisfaction",
    about_tag: "My Journey",
    about_title: "Visual Artistry & Engineering Precision",
    about_subtitle: "Discover who I am, my cross-disciplinary philosophy, and the tools that bring projects from concept to fruition.",
    profile_role_desc: "Software Engineer & Multidisciplinary Creative",
    profile_available: "Open to Opportunities 2026",
    hover_reveal: "Hover to reveal",
    bio_title_1: "Bridging logic and emotion",
    bio_p1: "Passionate about computer science and visual arts from day one, I have forged a unique hybrid approach. I do not merely code interfaces: I craft complete digital experiences where technical performance elevates bold art direction.",
    bio_p2: "Whether engineering reliable cloud backend services, prototyping clean UX flows on Figma, or cutting dynamic commercial reels in After Effects and 3D, my drive is consistent: pristine execution and lasting impact.",
    bio_title_2: "Professional standard",
    bio_p3: "Every project is executed with precision: clean code, thoughtful architecture, intuitive ergonomics, and punctual delivery. I collaborate with fast-moving startups and established brands alike.",
    pillar_dev_title: "Software & Web/App",
    pillar_dev_desc: "Development of robust web and mobile apps, scalable REST APIs, and modular architectures.",
    pillar_design_title: "Graphic Design & UI/UX",
    pillar_design_desc: "Iconic brand identities, ergonomic Figma design systems, and high-impact marketing visuals.",
    pillar_motion_title: "Video Editing & Motion",
    pillar_motion_desc: "High-energy storytelling, 2D/3D kinetic graphics, cinematic color grading, and custom sound design.",
    tools_title: "Tech Stack & Daily Arsenal",
    timeline_edu_title: "Education & Degrees",
    edu_deg_1: "Bachelor of Science in Computer Science",
    edu_desc_1: "Focused on software engineering, algorithm optimization, full-stack systems, and database architecture.",
    edu_deg_2: "Certified Motion Designer & Colorist",
    edu_desc_2: "Advanced compositing, dynamic keyframing, VFX workflows, and 3D asset integration.",
    timeline_exp_title: "Work Experience",
    exp_role_1: "Lead Creative Designer & Full-Stack Developer",
    exp_desc_1: "Architecting SaaS products, comprehensive branding packages, and high-converting video ads for international clients.",
    exp_role_2: "Video Editor & Digital Graphic Artist",
    exp_desc_2: "Produced social-first viral video edits (Reels, TikTok), event promotional posters, and motion stage visuals.",
    btn_download_cv: "Download Full Resume (PDF)",
    btn_download_cv_fr: "Download French resume",
    btn_download_cv_en: "Download English resume",
    portfolio_tag: "Selected Works",
    portfolio_title: "Featured Works & Case Studies",
    portfolio_subtitle: "Browse recent applications, visual identities, and motion design productions.",
    filter_all: "All",
    filter_dev: "Software & Web/Mobile",
    filter_design: "Graphic Design & Branding",
    filter_video: "Video Editing & Motion",
    btn_view_study: "View Case Study",
    modal_prev: "Previous Project",
    modal_next: "Next Project",
    services_tag: "What I Offer",
    services_title: "Tailored Solutions Designed To Scale Your Vision",
    services_subtitle: "Benefit from a seamless blend of clean code, memorable visual design, and cinematic video content.",
    service_popular: "Most Popular",
    service_1_title: "Web & App Development",
    service_1_desc: "Custom high-speed websites, reactive PWAs, sleek dashboards, and search engine optimization.",
    service_2_title: "Graphic Design & Branding",
    service_2_desc: "End-to-end brand ecosystems: striking vector logos, interactive Figma prototypes, and print collateral.",
    service_3_title: "Video Production & Motion",
    service_3_desc: "Story-driven edits built to captivate modern viewers across YouTube, Instagram Reels, and ads.",
    btn_choose_service: "Request a Quote",
    workflow_title: "How We Will Work Together",
    workflow_subtitle: "A proven four-step agile roadmap ensuring quality, speed, and creative excellence.",
    step_1_title: "Brief & Analysis",
    step_1_desc: "In-depth discovery of your goals, target audience, technical scope, and creative boundaries.",
    step_2_title: "Concept & Prototyping",
    step_2_desc: "Drafting wireframes, video storyboards, and mood boards tailored for your validation.",
    step_3_title: "Development & Edit",
    step_3_desc: "Intensive production phase: code execution, video compositing, sound design, and refinements.",
    step_4_title: "Delivery & Revisions",
    step_4_desc: "Cloud deployment or 4K master export, handover of all assets, and ongoing post-launch support.",
    contact_tag: "Get In Touch",
    contact_title: "Let's Discuss Your Next Big Idea",
    contact_subtitle: "Have a technical need, creative concept, or contract opportunity? Drop me a message and I'll respond within 24h.",
    contact_info_title: "Direct Channels",
    label_email: "Email Address",
    label_phone: "Phone / WhatsApp",
    label_location: "Location & Availability",
    val_location: "Ouagadougou, BF • Global Remote Collaborations",
    contact_socials_title: "Professional Networks",
    contact_socials_sub: "Follow my latest builds, open-source repositories, and creative work:",
    form_name: "Full Name *",
    form_email: "Email Address *",
    form_subject: "Subject *",
    form_types_title: "Project Scope (Select what applies):",
    chk_dev: "Software & Web/Mobile",
    chk_design: "Graphic Design & Branding",
    chk_video: "Video Editing & Motion",
    form_budget: "Estimated Budget:",
    budget_opt_1: "Under $1,000",
    budget_opt_2: "$1,000 — $3,000",
    budget_opt_3: "$3,000+",
    form_msg: "Your Message *",
    btn_send_msg: "Send Message",
    footer_cta_title: "Have a project in mind? Let's work together.",
    footer_cta_desc: "Let's turn your ideas into performant software and unforgettable visual experiences.",
    btn_lets_talk: "Start a Collaboration",
    footer_copy: "© 2026 Enock Kaboré. All rights reserved. Crafted with passion & Glassmorphism."
  }
};

/**
 * Gestion du Changement de Langue (FR / EN)
 */
function setLanguage(lang) {
  if (!i18nDictionary[lang]) return;
  appState.currentLang = lang;

  // Mise à jour des boutons du sélecteur
  const btnFr = document.getElementById('btnLangFr');
  const btnEn = document.getElementById('btnLangEn');
  if (btnFr && btnEn) {
    btnFr.classList.toggle('active', lang === 'fr');
    btnEn.classList.toggle('active', lang === 'en');
  }

  // Remplacement de tous les textes balisés
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18nDictionary[lang][key]) {
      el.textContent = i18nDictionary[lang][key];
    }
  });

  // Re-rendre la modal si elle est actuellement ouverte
  const modal = document.getElementById('caseStudyModal');
  if (modal && modal.classList.contains('active')) {
    renderCaseStudyModal(appState.currentProjectId);
  }
}

/**
 * Changement d'onglets sur la carte Hero (Code / UI / Motion)
 */
function switchHeroTab(tabName) {
  const tabs = ['code', 'ui', 'motion'];
  tabs.forEach(tab => {
    const btn = document.getElementById(`tabBtn${capitalize(tab)}`);
    const content = document.getElementById(`tabContent${capitalize(tab)}`);
    if (btn && content) {
      if (tab === tabName) {
        btn.classList.add('active');
        content.classList.add('active');
      } else {
        btn.classList.remove('active');
        content.classList.remove('active');
      }
    }
  });
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Filtrage dynamique de la Galerie des Projets
 */
function filterProjects(category) {
  appState.currentCategory = category;

  // Mise à jour des boutons de filtre
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-filter') === category);
  });

  // Filtrage des articles avec transition visuelle
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    const cardCat = card.getAttribute('data-category');
    if (category === 'all' || cardCat === category) {
      card.style.display = 'flex';
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, 50);
    } else {
      card.style.opacity = '0';
      card.style.transform = 'translateY(15px)';
      setTimeout(() => {
        card.style.display = 'none';
      }, 250);
    }
  });
}

/**
 * Modal d'Étude de Cas (Project Case Study Modal)
 */
function openCaseStudy(projectId) {
  appState.currentProjectId = projectId;
  renderCaseStudyModal(projectId);

  const modal = document.getElementById('caseStudyModal');
  if (modal) {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
}

function closeCaseStudy() {
  const modal = document.getElementById('caseStudyModal');
  if (modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = 'auto';
  }
}

function navigateCaseStudy(direction) {
  const currentIndex = projectsDatabase.findIndex(p => p.id === appState.currentProjectId);
  if (currentIndex === -1) return;

  let newIndex = currentIndex + direction;
  if (newIndex < 0) newIndex = projectsDatabase.length - 1;
  if (newIndex >= projectsDatabase.length) newIndex = 0;

  const nextProject = projectsDatabase[newIndex];
  if (nextProject) {
    openCaseStudy(nextProject.id);
  }
}

function renderCaseStudyModal(projectId) {
  const project = projectsDatabase.find(p => p.id === projectId);
  if (!project) return;

  const lang = appState.currentLang;
  const container = document.getElementById('modalDynamicContent');
  if (!container) return;

  // Rendu de la prévisualisation visuelle selon le type de projet
  let visualPreviewHtml = '';
  if (project.mockupType === 'code') {
    visualPreviewHtml = `
      <div class="case-visual-preview">
        <div class="code-preview-block" style="text-align: left; max-width: 700px; margin: 0 auto;">
          <div style="color: var(--pink-accent); font-size: 0.8rem; margin-bottom: 0.5rem;">// Code Architecture Snapshot</div>
          <pre><code>${project.codeSnippet}</code></pre>
        </div>
      </div>
    `;
  } else if (project.mockupType === 'motion') {
    visualPreviewHtml = `
      <div class="case-visual-preview">
        <div class="motion-orb-preview" style="margin: 0 auto 1.5rem auto;">
          <i class="ri-movie-2-line" style="font-size: 2.2rem; color: #fff;"></i>
        </div>
        <h4 style="color: #fff; font-family: var(--font-display);">${project.title[lang]}</h4>
        <p style="color: var(--pastel-blush); font-size: 0.9rem; margin-top: 0.5rem;">${project.previewText}</p>
        <div class="video-timeline" style="max-width: 450px; margin: 1.5rem auto 0 auto;">
          <div class="video-progress"></div>
        </div>
      </div>
    `;
  } else if (project.mockupType === 'design' && project.palette) {
    const swatches = project.palette.map(color => `
      <div style="background: ${color}; width: 60px; height: 60px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.2); box-shadow: 0 4px 12px rgba(0,0,0,0.4);" title="${color}"></div>
    `).join('');

    visualPreviewHtml = `
      <div class="case-visual-preview">
        <h5 style="color: var(--pink-accent); text-transform: uppercase; font-size: 0.85rem; letter-spacing: 1px; margin-bottom: 1rem;">Palette Chromatique Exclusive</h5>
        <div style="display: flex; justify-content: center; gap: 0.85rem; flex-wrap: wrap;">
          ${swatches}
        </div>
      </div>
    `;
  } else {
    visualPreviewHtml = `
      <div class="case-visual-preview">
        <i class="ri-smartphone-line" style="font-size: 3.5rem; color: var(--coral-rose);"></i>
        <h4 style="color: #fff; margin-top: 0.5rem;">Mobile Responsive Architecture</h4>
      </div>
    `;
  }

  // Rendu des résultats / impacts
  const impactBoxes = project.impact.map(item => `
    <div class="res-stat-box">
      <h3>${item.number}</h3>
      <p>${item.label[lang]}</p>
    </div>
  `).join('');

  // Rendu des liens directs
  let linksHtml = '';
  if (project.links.live) {
    linksHtml += `<a href="${project.links.live}" target="_blank" rel="noopener" class="btn-primary" style="padding: 0.5rem 1.2rem; font-size: 0.85rem;"><i class="ri-external-link-line"></i> Live Demo</a>`;
  }
  if (project.links.github) {
    linksHtml += `<a href="${project.links.github}" target="_blank" rel="noopener" class="btn-secondary" style="padding: 0.5rem 1.2rem; font-size: 0.85rem;"><i class="ri-github-line"></i> GitHub Repo</a>`;
  }

  // Assemblage complet du contenu
  container.innerHTML = `
    <div class="case-header-content">
      <span class="project-category-badge" style="position: static; margin-bottom: 0.75rem; display: inline-block;">
        ${project.categoryLabel[lang]}
      </span>
      <h2 class="section-title" style="font-size: 2.2rem; margin-bottom: 0.5rem;">${project.title[lang]}</h2>
      <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; margin-top: 1rem;">
        ${linksHtml}
      </div>
    </div>

    <div class="case-header-meta">
      <div class="meta-item">
        <h5>${lang === 'fr' ? 'Client / Cadre' : 'Client / Context'}</h5>
        <p>${project.client}</p>
      </div>
      <div class="meta-item">
        <h5>${lang === 'fr' ? 'Année' : 'Year'}</h5>
        <p>${project.year}</p>
      </div>
      <div class="meta-item">
        <h5>${lang === 'fr' ? 'Rôle Joué' : 'Assigned Role'}</h5>
        <p>${project.role[lang]}</p>
      </div>
      <div class="meta-item">
        <h5>${lang === 'fr' ? 'Technologies' : 'Stack & Tools'}</h5>
        <p>${project.tags.slice(0, 3).join(', ')}</p>
      </div>
    </div>

    ${visualPreviewHtml}

    <div class="case-section-block">
      <h4><i class="ri-question-line"></i> ${lang === 'fr' ? 'Contexte & Problématique' : 'Context & Problem Statement'}</h4>
      <p>${project.context[lang]}</p>
    </div>

    <div class="case-section-block">
      <h4><i class="ri-lightbulb-line"></i> ${lang === 'fr' ? 'La Solution & Le Processus' : 'The Solution & Process'}</h4>
      <p>${project.solution[lang]}</p>
    </div>

    <div class="case-section-block">
      <h4><i class="ri-line-chart-line"></i> ${lang === 'fr' ? 'Résultats & Impact Mesuré' : 'Results & Measured Impact'}</h4>
      <div class="results-stats-row">
        ${impactBoxes}
      </div>
    </div>
  `;
}

/**
 * Pré-sélection d'un type de service lors du clic sur une offre
 */
function preselectService(serviceName) {
  const chkDev = document.getElementById('chkDev');
  const chkDesign = document.getElementById('chkDesign');
  const chkVideo = document.getElementById('chkVideo');

  if (chkDev && chkDesign && chkVideo) {
    chkDev.checked = serviceName === 'Informatique';
    chkDesign.checked = serviceName === 'Graphisme';
    chkVideo.checked = serviceName === 'Vidéo';
  }
}

/**
 * Prépare le formulaire de contact pour un échange WhatsApp.
 */
function handleFormSubmit(event) {
  event.preventDefault();
  const lang = appState.currentLang;

  const form = document.getElementById('contactForm');
  if (!form) return;

  const formData = new FormData(form);
  const projectTypes = formData.getAll('projectType');
  const labels = lang === 'fr'
    ? { name: 'Nom', email: 'E-mail', subject: 'Sujet', types: 'Type de projet', budget: 'Budget', message: 'Message' }
    : { name: 'Name', email: 'Email', subject: 'Subject', types: 'Project type', budget: 'Budget', message: 'Message' };
  const whatsappMessage = [
    `Bonjour Enock,`,
    `${labels.name} : ${formData.get('name')}`,
    `${labels.email} : ${formData.get('email')}`,
    `${labels.subject} : ${formData.get('subject')}`,
    `${labels.types} : ${projectTypes.length ? projectTypes.join(', ') : '-'}`,
    `${labels.budget} : ${formData.get('budget')}`,
    `${labels.message} : ${formData.get('message')}`
  ].join('\n');
  const whatsappUrl = `https://wa.me/22662782098?text=${encodeURIComponent(whatsappMessage)}`;

  // Navigation directe : elle fonctionne aussi quand le navigateur bloque les pop-ups.
  window.location.href = whatsappUrl;
  showToast(
    lang === 'fr'
      ? "WhatsApp vient de s'ouvrir avec votre message prérempli."
      : 'WhatsApp opened with your pre-filled message.'
  );
}

function downloadCV(event) {
  event.preventDefault();
  const cvPath = appState.currentLang === 'en' ? 'CV_enock ing.pdf' : 'CV_enocke.pdf';
  const downloadName = appState.currentLang === 'en' ? 'CV_Enock_Kabore_EN.pdf' : 'CV_Enock_Kabore_FR.pdf';
  const link = document.createElement('a');
  link.href = cvPath;
  link.download = downloadName;
  document.body.appendChild(link);
  link.click();
  link.remove();
  showToast(
    appState.currentLang === 'fr'
      ? 'Téléchargement du CV français lancé.'
      : 'English resume download started.'
  );
}

/* Kept as a compatibility alias for older links. */
function downloadCVMock(event) {
  downloadCV(event);
}

function showToast(message) {
  const toast = document.getElementById('glassToast');
  const toastMsg = document.getElementById('toastMessage');
  if (toast && toastMsg) {
    toastMsg.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  }
}

/**
 * Animation des Compteurs Numériques au défilement
 */
function initStatsCounter() {
  const statNumbers = document.querySelectorAll('.stat-number');
  let hasAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        statNumbers.forEach(el => {
          const target = parseInt(el.getAttribute('data-target'), 10);
          if (isNaN(target)) return;

          let current = 0;
          const step = Math.max(1, Math.floor(target / 40));
          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              current = target;
              clearInterval(timer);
              if (target === 100) {
                el.textContent = "100%";
              } else {
                el.textContent = `+${target}`;
              }
            } else {
              el.textContent = `+${current}`;
            }
          }, 35);
        });
      }
    });
  }, { threshold: 0.3 });

  statNumbers.forEach(el => observer.observe(el));
}

/**
 * Effet d'inclinaison 3D (Tilt) sur les cartes Glassmorphism
 */
function initGlassTiltEffect() {
  const cards = document.querySelectorAll('.glass-hero-card, .profile-card, .service-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotateX = -(y / rect.height) * 10;
      const rotateY = (x / rect.width) * 10;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    });
  });
}

/**
 * Détection du Scroll pour le Header et le Menu Actif
 */
function initScrollSpy() {
  const header = document.getElementById('siteHeader');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    // Header verre foncé au défilement
    if (scrollY > 50) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }

    // Active link highlighting
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
}

/**
 * Menu Burger Mobile
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    // Fermer le menu lors du clic sur un lien
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }
}

/**
 * Fermeture de la modal avec la touche Échap et clic extérieur
 */
function initModalListeners() {
  const modal = document.getElementById('caseStudyModal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeCaseStudy();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCaseStudy();
    }
  });
}

function initPortfolioLogos() {
  const track = document.querySelector('.portfolio-logo-track');
  if (!track) return;

  const logos = [
    ['1010847078898416216.png', 'Laravel'],
    ['788130003588546294.png', 'Python'],
    ['all.png', 'Illustrator'],
    ['after.png', 'After Effects'],
    ['bblender.png', 'Blender'],
    ['3d%20rendered%20photoshop%20icon%20_%20Premium%20PSD.png', 'Photoshop'],
    ['Adobe%20xd%203d%20icon%20_%20Premium%20PSD.png', 'Adobe XD'],
    ['Angular%20js%203d%20icon%20_%20Premium%20PSD.png', 'Angular'],
    ['Baixar%20design%20de%20logotipo%20javascript%203D.png', 'JavaScript'],
    ['Bootstrap%203d%20icon%20_%20Premium%20PSD.png', 'Bootstrap'],
    ['DaVinci%20Resolve%20-%20Wikipedia.png', 'DaVinci Resolve'],
    ['Download%20GitHub%20Logo%20Rounded.png', 'GitHub'],
    ['Flutter%20Logo%20-%20development%20SDK%20Pin.png', 'Flutter'],
    ['Html%203d%20icon%20_%20Premium%20PSD.png', 'HTML'],
    ['LinkedIn%203D%20Icon%20transparent%20background.png', 'LinkedIn'],
    ['React%20js%203d%20icon%20_%20Premium%20PSD.png', 'React'],
    ['Tailwind%203d%20icon%20_%20Premium%20Psd%20%23Freepik%20%23psd%E2%80%A6.png', 'Tailwind CSS'],
    ['Tiktok%20PSD,%20High%20Quality%20Free%20PSD%20Templates%20for%20Download%20_%20Magnific%20(formerly%20Freepik).png', 'TikTok'],
    ['Vue%20js%203d%20icon%20_%20Premium%20PSD.png', 'Vue.js']
  ];

  track.innerHTML = [...logos, ...logos].map(([src, name]) => `
    <div class="portfolio-logo-item">
      <img class="portfolio-logo-image" src="${src}" alt="${name}" loading="lazy">
      <span>${name}</span>
    </div>
  `).join('');
}

// Initialisation globale au chargement du DOM
document.addEventListener('DOMContentLoaded', () => {
  initStatsCounter();
  initGlassTiltEffect();
  initScrollSpy();
  initMobileMenu();
  initModalListeners();
  initPortfolioLogos();
});
