// ---------------------------------------------------------------------------
// Site content — single source of truth.
// Placeholder branding: change `site.name` once the real brand is decided.
// ---------------------------------------------------------------------------

export const site = {
  name: "Meridian Labs", // placeholder brand
  tagline: "Software engineering for serious operations",
  description:
    "We engineer software, AI solutions and automation systems that help businesses grow, improve efficiency and solve complex operational challenges.",
  url: "https://example.com", // set to production domain before launch
  email: "hello@example.com",
  phone: "+61 000 000 000",
  location: "Melbourne, Australia",
};

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Work", href: "/portfolio" },
  { label: "About", href: "/about" },
];

// --- Services --------------------------------------------------------------

export type Service = {
  slug: string;
  title: string;
  summary: string;
  detail: string;
  deliverables: string[];
  group: "Build" | "Intelligence" | "Operate";
};

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    group: "Build",
    summary:
      "High-performance web platforms engineered on modern frameworks — not template sites.",
    detail:
      "We build production web applications with the same rigour as any other software system: typed codebases, automated testing, CI/CD pipelines and performance budgets. The result is a platform that loads fast, ranks well and scales with your business rather than needing a rebuild in eighteen months.",
    deliverables: [
      "Next.js / React application architecture",
      "Core Web Vitals & SEO engineering",
      "Headless CMS integration",
      "Accessibility to WCAG 2.2 AA",
    ],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    group: "Build",
    summary:
      "Native-quality iOS and Android apps from a single, maintainable codebase.",
    detail:
      "Cross-platform engineering with React Native lets us ship to both app stores without doubling your maintenance cost. We handle the full lifecycle — architecture, offline behaviour, push notifications, store submission and post-launch releases.",
    deliverables: [
      "React Native / Expo builds",
      "Offline-first data sync",
      "App Store & Play Store release management",
      "Analytics and crash monitoring",
    ],
  },
  {
    slug: "custom-software",
    title: "Custom Software Development",
    group: "Build",
    summary:
      "Purpose-built systems for the workflows off-the-shelf software can't handle.",
    detail:
      "When your operation has outgrown spreadsheets and generic SaaS, we design and build software around how your business actually works — client management, rostering, compliance, reporting — with the data model, permissions and audit trails your sector demands.",
    deliverables: [
      "Domain modelling & systems design",
      "Role-based access & audit logging",
      "Reporting and data export",
      "Documentation and handover",
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Product Design",
    group: "Build",
    summary:
      "Interfaces designed from user research, tested before a line of code is written.",
    detail:
      "Good software fails when people can't use it. Our product design practice covers research, information architecture, interaction design and usability testing — so what we build is adopted by your team and your clients, not worked around.",
    deliverables: [
      "User research & journey mapping",
      "Wireframes and interactive prototypes",
      "Design systems and component libraries",
      "Usability testing",
    ],
  },
  {
    slug: "figma-design",
    title: "Figma Design",
    group: "Build",
    summary:
      "Production-ready Figma files: design systems, prototypes and developer handoff.",
    detail:
      "Whether your team builds in-house or with us, we produce Figma work engineered for implementation — tokenised design systems, auto-layout components, annotated flows and clickable prototypes that stakeholders can test before development begins.",
    deliverables: [
      "Tokenised design systems",
      "High-fidelity screens & prototypes",
      "Developer handoff specs",
      "Brand-aligned component libraries",
    ],
  },
  {
    slug: "ai-agents",
    title: "Custom AI Agents",
    group: "Intelligence",
    summary:
      "AI agents that handle enquiries, documentation and scheduling — safely, inside guardrails.",
    detail:
      "We design agents around your actual processes: triaging enquiries, drafting session notes and reports, preparing compliance documentation, scheduling and follow-ups. Every agent ships with guardrails, human-in-the-loop review points and full logging, so quality and accountability are engineered in.",
    deliverables: [
      "Enquiry triage & response agents",
      "Documentation & report-drafting agents",
      "Retrieval over your policies and knowledge base",
      "Guardrails, evaluation and audit logs",
    ],
  },
  {
    slug: "business-automation",
    title: "Business Automation",
    group: "Intelligence",
    summary:
      "Hours of repetitive admin, removed. Reliable pipelines across the tools you already use.",
    detail:
      "We map your workflows end to end, then automate the handoffs — intake to CRM, service delivery to invoicing, incident to report. Built on robust integration platforms and custom code where it matters, with error handling and alerting so automations fail loudly, never silently.",
    deliverables: [
      "Workflow mapping & automation design",
      "Zapier / Make / n8n and custom pipelines",
      "Document generation & e-signature flows",
      "Monitoring, alerting and run logs",
    ],
  },
  {
    slug: "crm-workflow-systems",
    title: "CRM & Workflow Systems",
    group: "Intelligence",
    summary:
      "Client management built around your delivery model — bookings, notes, invoicing, reporting.",
    detail:
      "Generic CRMs force your operation into someone else's pipeline. We configure or build client management systems that mirror your service delivery: referrals, intake, scheduling, case notes, funding tracking and invoicing in one coherent system your team actually keeps updated.",
    deliverables: [
      "CRM selection, build or configuration",
      "Booking, intake and referral workflows",
      "Invoicing and funding/claims tracking",
      "Dashboards for owners and managers",
    ],
  },
  {
    slug: "enterprise-software",
    title: "Enterprise Software",
    group: "Operate",
    summary:
      "Multi-team platforms with the security, compliance and reliability enterprises require.",
    detail:
      "For larger organisations we deliver systems built for scrutiny: SSO and granular permissions, environment separation, penetration-tested infrastructure, SLAs and documented disaster recovery. Engineering practice that stands up to procurement and audit.",
    deliverables: [
      "SSO / SAML and role hierarchies",
      "Security review & compliance documentation",
      "High-availability infrastructure",
      "SLA-backed support",
    ],
  },
  {
    slug: "api-integrations",
    title: "API Integrations",
    group: "Operate",
    summary:
      "Your systems, finally talking to each other. Clean, documented, monitored integrations.",
    detail:
      "Accounting, payroll, government portals, payment gateways, industry platforms — we build and maintain the connective tissue between them. Versioned, documented APIs with retries, rate-limit handling and monitoring, so data moves once and moves correctly.",
    deliverables: [
      "Third-party & government API integration",
      "Custom REST/GraphQL API development",
      "Webhook and event architectures",
      "Integration monitoring",
    ],
  },
  {
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    group: "Operate",
    summary:
      "Secure, cost-efficient cloud architecture on AWS, Azure and Vercel.",
    detail:
      "We design cloud infrastructure that matches your risk profile and budget: data residency where regulation demands it, automated backups, infrastructure as code and cost monitoring. Migrations handled without downtime drama.",
    deliverables: [
      "Cloud architecture & migration",
      "Infrastructure as code",
      "Backup, DR and data residency",
      "Cost optimisation",
    ],
  },
  {
    slug: "support-maintenance",
    title: "Ongoing Support & Maintenance",
    group: "Operate",
    summary:
      "Software is never finished. We keep yours secure, current and improving.",
    detail:
      "Every system we ship can move onto a support agreement: proactive dependency and security updates, uptime monitoring, a real human to call, and a monthly improvement cadence so the platform keeps pace with your business.",
    deliverables: [
      "Security patching & dependency updates",
      "Uptime & performance monitoring",
      "Agreed response-time SLAs",
      "Monthly improvement sprints",
    ],
  },
];

// --- Industries --------------------------------------------------------------

export type Industry = {
  slug: string;
  title: string;
  summary: string;
  points: string[];
};

export const industries: Industry[] = [
  {
    slug: "ndis-providers",
    title: "NDIS Providers",
    summary:
      "Systems built for a sector where documentation is the difference between passing an audit and losing registration.",
    points: [
      "Client management aligned to NDIS Practice Standards",
      "Audit-ready documentation, incident and complaints workflows",
      "Rostering, service bookings and NDIA claiming automation",
      "AI-assisted progress notes and report drafting with human review",
    ],
  },
  {
    slug: "education-rtos",
    title: "Education & RTOs",
    summary:
      "Compliance-heavy training organisations need software that keeps pace with ASQA and CRICOS obligations.",
    points: [
      "Student management and enrolment automation",
      "Evidence collection for audit and re-registration",
      "Trainer, timetable and assessment workflows",
      "Integration with SMS/LMS platforms",
    ],
  },
  {
    slug: "healthcare-allied-health",
    title: "Healthcare & Allied Health",
    summary:
      "Clinical-grade privacy and reliability for practices, clinics and multidisciplinary teams.",
    points: [
      "Secure client records and session documentation",
      "Booking, reminders and telehealth integration",
      "Medicare / private billing workflows",
      "Australian data residency and privacy compliance",
    ],
  },
  {
    slug: "professional-services",
    title: "Professional Services",
    summary:
      "Firms in law, accounting and consulting run on knowledge — we turn it into leverage.",
    points: [
      "Matter/engagement management systems",
      "Document automation and templating",
      "Time, billing and reporting pipelines",
      "AI research and drafting assistants with guardrails",
    ],
  },
  {
    slug: "smb",
    title: "Small & Medium Businesses",
    summary:
      "Enterprise-grade engineering, scoped and priced for growing businesses.",
    points: [
      "Fixed-scope builds with clear pricing",
      "Automation that pays for itself in admin hours",
      "Websites and platforms that generate leads",
      "Support plans without enterprise overhead",
    ],
  },
  {
    slug: "enterprise",
    title: "Enterprise",
    summary:
      "Security-reviewed, procurement-ready delivery for large organisations.",
    points: [
      "SSO, permissions and audit logging by default",
      "Vendor security questionnaires handled properly",
      "Integration with existing enterprise systems",
      "SLA-backed delivery and support",
    ],
  },
];

// --- Process -----------------------------------------------------------------

export const process = [
  {
    step: "01",
    title: "Discovery",
    text: "We map your workflows, constraints and success metrics before proposing anything. You get a scoped plan with honest estimates — not a sales deck.",
  },
  {
    step: "02",
    title: "Design",
    text: "Architecture and interface design in parallel. Prototypes you can click, data models you can question, and a spec your team signs off on.",
  },
  {
    step: "03",
    title: "Development",
    text: "Short, visible sprints. You see working software every week, not a reveal at the end. Typed code, automated tests, staged environments.",
  },
  {
    step: "04",
    title: "Launch",
    text: "Zero-drama deployment: migration plans, training, documentation and a hypercare window while your team settles in.",
  },
  {
    step: "05",
    title: "Support",
    text: "Monitoring, security updates and a monthly improvement cadence. The system keeps getting better after go-live.",
  },
];

// --- Technologies --------------------------------------------------------------

export const technologies = [
  "TypeScript",
  "Next.js",
  "React",
  "React Native",
  "Node.js",
  "Python",
  "PostgreSQL",
  "AWS",
  "Azure",
  "Vercel",
  "Anthropic Claude",
  "OpenAI",
  "LangChain",
  "Zapier",
  "n8n",
  "Stripe",
  "Tailwind CSS",
  "Framer Motion",
  "Docker",
  "GraphQL",
];

// --- FAQ -----------------------------------------------------------------------

export const faqs = [
  {
    q: "How much does a typical project cost?",
    a: "Automation and integration projects typically start around $8k–$25k. Custom platforms and client management systems commonly range $30k–$120k depending on scope. After a discovery call we provide a fixed, itemised proposal — no open-ended hourly surprises.",
  },
  {
    q: "How long does a build take?",
    a: "Automations and integrations: 2–6 weeks. Web platforms and CRMs: 8–16 weeks. Enterprise systems: phased over 3–9 months. You see working software weekly from the second sprint onward.",
  },
  {
    q: "Can you work with our existing systems?",
    a: "Yes — most of our work connects to systems already in place: accounting platforms, practice management tools, government portals, CRMs. We integrate first and replace only where it genuinely pays off.",
  },
  {
    q: "Is our data safe with AI features?",
    a: "We design AI features with data minimisation, Australian data residency options, no training on your data, and human review points for anything consequential. Every agent ships with logging so you can see exactly what it did and why.",
  },
  {
    q: "Do you offer ongoing support?",
    a: "Every build can move onto a support agreement covering security updates, monitoring, response-time SLAs and a monthly improvement sprint. We don't ship and disappear.",
  },
  {
    q: "Who owns the code and IP?",
    a: "You do. On final payment, full IP in the bespoke work transfers to you, with source code, documentation and infrastructure access handed over.",
  },
];

// --- Portfolio placeholders -------------------------------------------------

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  problem: string;
  solution: string;
  results: string[];
  stack: string[];
};

export const projects: Project[] = [
  {
    slug: "ndis-operations-platform",
    title: "Operations Platform for an NDIS Provider",
    category: "Custom Software · Automation",
    summary:
      "A single system replacing five disconnected tools — intake, rostering, notes, claiming and compliance.",
    problem:
      "A growing provider was managing 200+ participants across spreadsheets, a generic CRM and email. Claims were delayed, documentation was inconsistent, and audit preparation consumed weeks of staff time.",
    solution:
      "We built a purpose-designed platform covering referrals, service agreements, rostering, progress notes and NDIA claiming, with an AI drafting layer for notes that staff review and approve.",
    results: [
      "Placeholder metric — e.g. claiming cycle reduced from 14 days to 2",
      "Placeholder metric — e.g. 30+ admin hours saved weekly",
      "Placeholder metric — e.g. audit preparation time cut by 80%",
    ],
    stack: ["Next.js", "PostgreSQL", "Claude", "AWS"],
  },
  {
    slug: "rto-enrolment-automation",
    title: "Enrolment Automation for an RTO",
    category: "Automation · Integrations",
    summary:
      "Enquiry-to-enrolment pipeline connecting website, SMS and finance systems with zero re-keying.",
    problem:
      "Every enrolment was typed into three systems by hand. Errors crept into compliance records and follow-ups were missed during intake peaks.",
    solution:
      "An automated pipeline validates applications, generates compliant documentation, syncs the student management system and schedules follow-ups — with exceptions routed to staff.",
    results: [
      "Placeholder metric — e.g. enrolment processing time down 90%",
      "Placeholder metric — e.g. zero data re-entry across systems",
      "Placeholder metric — e.g. enquiry response time under 5 minutes",
    ],
    stack: ["Node.js", "n8n", "REST APIs", "Azure"],
  },
  {
    slug: "allied-health-ai-documentation",
    title: "AI Documentation Assistant for Allied Health",
    category: "AI Agents",
    summary:
      "Session notes and reports drafted in minutes, reviewed by clinicians, filed automatically.",
    problem:
      "Clinicians were spending 90+ minutes a day on documentation after sessions, delaying reports and driving burnout.",
    solution:
      "A secure drafting assistant grounded in the practice's templates and policies produces structured notes and report drafts for clinician review, then files approved documents to the practice system.",
    results: [
      "Placeholder metric — e.g. documentation time reduced by 65%",
      "Placeholder metric — e.g. report turnaround from 3 weeks to 4 days",
      "Placeholder metric — e.g. 100% of drafts human-reviewed before filing",
    ],
    stack: ["Claude", "Python", "FastAPI", "Australian-region hosting"],
  },
  {
    slug: "enterprise-integration-layer",
    title: "Integration Layer for a National Services Group",
    category: "Enterprise · Cloud",
    summary:
      "An event-driven integration layer connecting payroll, scheduling and finance across four business units.",
    problem:
      "Four acquired businesses ran four incompatible systems. Consolidated reporting took finance two weeks each month.",
    solution:
      "A central integration layer with a shared data model streams events between systems in near real time, feeding a live executive dashboard.",
    results: [
      "Placeholder metric — e.g. month-end reporting from 2 weeks to 1 day",
      "Placeholder metric — e.g. single source of truth across 4 entities",
      "Placeholder metric — e.g. 99.95% pipeline uptime",
    ],
    stack: ["AWS", "TypeScript", "PostgreSQL", "GraphQL"],
  },
];

// --- Trust stats -----------------------------------------------------------

export const stats = [
  { value: "40+", label: "systems shipped to production" },
  { value: "12k+", label: "admin hours automated annually" },
  { value: "99.9%", label: "uptime across supported platforms" },
  { value: "100%", label: "client code ownership" },
];
