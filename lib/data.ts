// ---------------------------------------------------------------------------
// Site content — single source of truth for TrivaSoft Technology.
// Renaming the company or editing any service/industry is a one-file change.
// ---------------------------------------------------------------------------

export const site = {
  name: "TrivaSoft Technology",
  tagline: "Software engineering for serious operations",
  description:
    "TrivaSoft Technology engineers custom software, AI solutions and automation that help businesses improve efficiency, reduce manual work and transform how they operate.",
  url: "https://www.trivasofttechnology.com.au",
  email: "hello@trivasofttechnology.com.au",
  location: "Australia",
};

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  // { label: "Work", href: "/portfolio" }, // hidden from nav for now — route still live at /portfolio
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
    slug: "custom-software-development",
    title: "Custom Software Development",
    group: "Build",
    summary:
      "Purpose-built platforms engineered around the way your business actually works — not forced into off-the-shelf software.",
    detail:
      "When spreadsheets and generic SaaS start dictating how your team operates, it's time for software built around your processes. We design the data model, workflows, permissions and reporting your operation needs, then build it to production standards with typed code, automated testing and proper documentation.",
    deliverables: [
      "Systems design and data modelling",
      "Role-based access and audit logging",
      "Reporting, dashboards and data exports",
      "Documentation and full handover",
    ],
  },
  {
    slug: "ai-solutions-ai-agents",
    title: "AI Solutions & AI Agents",
    group: "Intelligence",
    summary:
      "Practical AI that handles real work — enquiries, documentation, research and scheduling — safely, inside clear guardrails.",
    detail:
      "We build AI into your operation where it genuinely saves time: triaging enquiries, drafting notes and reports, answering questions from your own knowledge base and preparing documentation. Every solution ships with guardrails, human review points and full logging, so quality and accountability are engineered in from the start.",
    deliverables: [
      "Enquiry triage and response agents",
      "Document and report drafting with human review",
      "Retrieval over your policies and knowledge base",
      "Guardrails, evaluation and audit logging",
    ],
  },
  {
    slug: "business-process-automation",
    title: "Business Process Automation",
    group: "Intelligence",
    summary:
      "Hours of repetitive admin removed with reliable, monitored automations across the tools you already use.",
    detail:
      "We map your workflows end to end, then automate the handoffs between them — intake to CRM, delivery to invoicing, incident to report. Built with robust integration platforms and custom code where it matters, with error handling and alerting so automations fail loudly, never silently.",
    deliverables: [
      "Workflow mapping and automation design",
      "Integration and custom automation pipelines",
      "Document generation and e-signature flows",
      "Monitoring, alerting and run logs",
    ],
  },
  {
    slug: "web-application-development",
    title: "Web Application Development",
    group: "Build",
    summary:
      "Fast, secure web applications engineered on modern frameworks — built to scale, not to be rebuilt in eighteen months.",
    detail:
      "We build web platforms with the rigour of any serious software system: typed codebases, automated testing, performance budgets and CI/CD. The result loads fast, ranks well, meets accessibility standards and grows with your business rather than needing a rebuild.",
    deliverables: [
      "Next.js / React application architecture",
      "Core Web Vitals and SEO engineering",
      "Headless CMS and integrations",
      "Accessibility to WCAG 2.2 AA",
    ],
  },
  {
    slug: "mobile-application-development",
    title: "Mobile Application Development",
    group: "Build",
    summary:
      "Native-quality iOS and Android apps from a single, maintainable codebase.",
    detail:
      "Cross-platform engineering lets us ship to both app stores without doubling your maintenance cost. We handle the full lifecycle — architecture, offline behaviour, notifications, store submission and ongoing releases.",
    deliverables: [
      "Cross-platform iOS and Android builds",
      "Offline-first data sync",
      "App Store and Play Store release management",
      "Analytics and crash monitoring",
    ],
  },
  {
    slug: "client-portals",
    title: "Client Portals",
    group: "Build",
    summary:
      "Secure self-service portals that give your clients and staff a single place to get things done.",
    detail:
      "We build branded portals where clients, participants or partners can submit information, track progress, access documents and communicate — reducing inbound admin while improving the experience. Role-based access and audit trails come as standard.",
    deliverables: [
      "Branded, responsive portal experience",
      "Secure authentication and role-based access",
      "Document sharing, forms and status tracking",
      "Notifications and activity logging",
    ],
  },
  {
    slug: "crm-systems",
    title: "CRM Systems",
    group: "Intelligence",
    summary:
      "Client management built around your delivery model — bookings, records, invoicing and reporting in one coherent system.",
    detail:
      "Generic CRMs force your operation into someone else's pipeline. We build or configure client management that mirrors how you actually deliver: referrals, intake, scheduling, records, funding and invoicing — in one system your team will actually keep up to date.",
    deliverables: [
      "CRM build or configuration",
      "Booking, intake and referral workflows",
      "Invoicing and funding / claims tracking",
      "Dashboards for owners and managers",
    ],
  },
  {
    slug: "rto-management-systems",
    title: "RTO Management Systems",
    group: "Operate",
    summary:
      "Compliance-ready student and training management for registered training organisations.",
    detail:
      "RTOs run on evidence. We build systems that keep enrolment, delivery, assessment and compliance records aligned to ASQA obligations — reducing the manual effort of staying audit-ready and freeing trainers to focus on students instead of paperwork.",
    deliverables: [
      "Student management and enrolment workflows",
      "Assessment, trainer and timetable tracking",
      "Audit-ready evidence and reporting",
      "Integration with SMS / LMS platforms",
    ],
  },
  {
    slug: "ndis-healthcare-software",
    title: "NDIS & Healthcare Software",
    group: "Operate",
    summary:
      "Purpose-built platforms for NDIS providers and healthcare teams, where documentation and privacy are non-negotiable.",
    detail:
      "We build systems designed for sectors where the paperwork is the difference between passing an audit and losing registration: participant and client management, progress notes, incident and compliance workflows, secure records and claiming — with privacy and Australian data residency built in.",
    deliverables: [
      "Participant and client management",
      "Progress notes, incidents and compliance workflows",
      "Claiming and billing automation",
      "Secure records and data residency",
    ],
  },
  {
    slug: "api-integrations",
    title: "API Integrations",
    group: "Operate",
    summary:
      "Your systems, finally talking to each other — clean, documented, monitored integrations.",
    detail:
      "Accounting, payroll, government portals, payment gateways and industry platforms — we build and maintain the connective tissue between them. Versioned, documented APIs with retries, rate-limit handling and monitoring, so data moves once and moves correctly.",
    deliverables: [
      "Third-party and government API integration",
      "Custom REST / GraphQL API development",
      "Webhook and event architectures",
      "Integration monitoring and alerting",
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    group: "Build",
    summary:
      "Interfaces designed from real user needs and tested before a line of code is written.",
    detail:
      "Good software fails when people can't use it. Our design practice covers research, information architecture, interaction design and usability testing, along with tokenised design systems and developer-ready handoff — so what we build gets adopted, not worked around.",
    deliverables: [
      "User research and journey mapping",
      "Wireframes and interactive prototypes",
      "Design systems and component libraries",
      "Usability testing and developer handoff",
    ],
  },
  {
    slug: "software-maintenance-support",
    title: "Software Maintenance & Support",
    group: "Operate",
    summary:
      "Software is never finished. We keep yours secure, current and improving.",
    detail:
      "Every system we build can move onto a support agreement: proactive dependency and security updates, uptime and performance monitoring, a real person to reach, and a regular improvement cadence so the platform keeps pace with your business.",
    deliverables: [
      "Security patching and dependency updates",
      "Uptime and performance monitoring",
      "Agreed response-time SLAs",
      "Ongoing improvement sprints",
    ],
  },
  {
    slug: "digital-transformation-consulting",
    title: "Digital Transformation Consulting",
    group: "Operate",
    summary:
      "A clear-eyed plan for modernising how your business runs — before anyone writes code.",
    detail:
      "We help you see where technology will actually move the needle: mapping current workflows, identifying the highest-value opportunities for software, automation and AI, and sequencing them into a practical roadmap with honest estimates — so investment goes where it pays off.",
    deliverables: [
      "Operations and workflow assessment",
      "Technology and automation roadmap",
      "Prioritised, costed opportunity map",
      "Vendor-neutral, honest recommendations",
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
    slug: "healthcare-allied-health",
    title: "Healthcare & Allied Health",
    summary:
      "Clinical-grade privacy and reliability for practices, clinics and multidisciplinary teams.",
    points: [
      "Secure client records and session documentation",
      "Booking, reminders and telehealth integration",
      "Medicare and private billing workflows",
      "Australian data residency and privacy compliance",
    ],
  },
  {
    slug: "ndis-providers",
    title: "NDIS Providers",
    summary:
      "Systems built for a sector where documentation is the difference between passing an audit and keeping your registration.",
    points: [
      "Client management aligned to NDIS Practice Standards",
      "Audit-ready documentation, incident and complaints workflows",
      "Rostering, service bookings and claiming automation",
      "AI-assisted progress notes and reports with human review",
    ],
  },
  {
    slug: "registered-training-organisations",
    title: "Registered Training Organisations",
    summary:
      "Compliance-heavy training providers need software that keeps pace with ASQA obligations without drowning trainers in admin.",
    points: [
      "Student management and enrolment automation",
      "Evidence collection for audit and re-registration",
      "Trainer, timetable and assessment workflows",
      "Integration with SMS and LMS platforms",
    ],
  },
  {
    slug: "professional-services",
    title: "Professional Services",
    summary:
      "Firms in law, accounting and consulting run on knowledge — we turn it into leverage.",
    points: [
      "Matter and engagement management systems",
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
    text: "Monitoring, security updates and a regular improvement cadence. The system keeps getting better after go-live.",
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
  "AI / LLMs",
  "RAG Pipelines",
  "Vector Databases",
  "REST & GraphQL APIs",
  "n8n",
  "Zapier",
  "Stripe",
  "Tailwind CSS",
  "Docker",
];

// --- FAQ -----------------------------------------------------------------------

export const faqs = [
  {
    q: "How much does a project cost?",
    a: "Every project is scoped and quoted individually. After a short discovery call we provide a fixed, itemised proposal — scope, timeline and cost in writing — so there are no open-ended hourly surprises.",
  },
  {
    q: "How long does a build take?",
    a: "It depends on scope. Automations and integrations are typically the fastest to deliver, web platforms and CRMs take longer, and enterprise systems are delivered in phases. Either way, you see working software regularly rather than waiting for a single reveal at the end.",
  },
  {
    q: "Can you work with our existing systems?",
    a: "Yes — most of our work connects to systems already in place: accounting platforms, practice management tools, government portals and CRMs. We integrate first and replace only where it genuinely pays off.",
  },
  {
    q: "Is our data safe with AI features?",
    a: "We design AI features with data minimisation, Australian data residency options, no training of external models on your data, and human review points for anything consequential. Every AI workflow is logged, so you can see exactly what it did and why.",
  },
  {
    q: "Do you offer ongoing support?",
    a: "Every build can move onto a support agreement covering security updates, monitoring, response-time SLAs and a regular improvement cadence. We don't ship and disappear.",
  },
  {
    q: "Who owns the code and IP?",
    a: "You do. On final payment, full IP in the bespoke work transfers to you, with source code, documentation and infrastructure access handed over.",
  },
];

// --- Portfolio: solution showcases -----------------------------------------
// Representative examples of what we build — not named client work.

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
    slug: "healthcare-platform",
    title: "Healthcare Platform",
    category: "Custom Software · Healthcare & Allied Health",
    summary:
      "A secure platform bringing client records, scheduling, documentation and billing into one clinical-grade system.",
    problem:
      "Healthcare and allied health teams often run on a patchwork of booking tools, spreadsheets and email — making records hard to trust, billing slow and privacy difficult to guarantee.",
    solution:
      "We build unified platforms covering secure client records, session documentation, bookings and reminders, telehealth and billing, with privacy and Australian data residency engineered in from the first commit.",
    results: [
      "Client records, notes and billing in one secure system",
      "Faster documentation with structured, reusable templates",
      "Fewer no-shows through automated reminders",
      "Privacy and data-residency controls built in",
    ],
    stack: ["Next.js", "PostgreSQL", "Node.js", "AWS"],
  },
  {
    slug: "ndis-operations-platform",
    title: "NDIS Operations Platform",
    category: "Custom Software · NDIS",
    summary:
      "A single system replacing disconnected tools across intake, rostering, notes, claiming and compliance.",
    problem:
      "Growing NDIS providers commonly manage participants across spreadsheets, a generic CRM and email — delaying claims, fragmenting documentation and turning audit preparation into weeks of work.",
    solution:
      "We build purpose-designed platforms covering referrals, service agreements, rostering, progress notes and claiming, with an AI drafting layer for notes that staff review and approve before anything is filed.",
    results: [
      "Intake, delivery, claiming and compliance in one place",
      "Audit-ready documentation and incident workflows",
      "Faster, more consistent progress notes with human review",
      "Less admin, more time for participant support",
    ],
    stack: ["Next.js", "PostgreSQL", "AI / LLMs", "AWS"],
  },
  {
    slug: "rto-management-system",
    title: "RTO Management System",
    category: "Custom Software · Training & Compliance",
    summary:
      "Enrolment, delivery and compliance records kept continuously audit-ready for registered training organisations.",
    problem:
      "RTOs lose time re-keying data across systems and scrambling to assemble evidence at audit time, with errors creeping into the compliance records that matter most.",
    solution:
      "We build training management systems that connect enrolment, assessment, trainer and timetable data, generate compliant documentation automatically and keep an audit-ready evidence trail aligned to ASQA obligations.",
    results: [
      "Student, trainer and assessment data in one system",
      "Evidence continuously ready for audit and re-registration",
      "Less manual re-keying across platforms",
      "Integration with existing SMS / LMS tools",
    ],
    stack: ["Next.js", "Node.js", "REST APIs", "Azure"],
  },
  {
    slug: "business-automation-platform",
    title: "Business Automation Platform",
    category: "Automation · Integrations",
    summary:
      "An enquiry-to-invoice pipeline that connects the tools a business already runs on — with no re-keying.",
    problem:
      "Teams re-enter the same information across three or four systems by hand, losing hours to admin and letting errors and missed follow-ups slip through during busy periods.",
    solution:
      "We map the workflow end to end, then automate the handoffs — validating data, generating documents, syncing systems and scheduling follow-ups, with exceptions routed to a person and every run logged.",
    results: [
      "Hours of repetitive admin removed each week",
      "Data entered once and synced across systems",
      "Faster, more reliable follow-up",
      "Monitoring and alerting on every automation",
    ],
    stack: ["Node.js", "n8n", "REST APIs", "AWS"],
  },
  {
    slug: "client-portal",
    title: "Client Portal",
    category: "Web · Client Portals",
    summary:
      "A branded self-service portal giving clients one secure place to submit, track and access their information.",
    problem:
      "When clients rely on phone calls and email for updates and documents, teams drown in repetitive inbound admin and clients are left in the dark.",
    solution:
      "We build secure, branded portals where clients can submit forms, track progress, access documents and communicate — with role-based access, notifications and full activity logging.",
    results: [
      "Reduced inbound calls and email admin",
      "Clients self-serve documents and status updates",
      "Secure, role-based access to sensitive information",
      "A more professional, transparent client experience",
    ],
    stack: ["Next.js", "React", "PostgreSQL", "Vercel"],
  },
  {
    slug: "enterprise-crm",
    title: "Enterprise CRM",
    category: "CRM · Enterprise",
    summary:
      "A CRM shaped around a real delivery model, with the integrations and reporting leadership needs.",
    problem:
      "Off-the-shelf CRMs force teams into a generic pipeline, so data goes stale, reporting is manual and leadership never gets a single, trustworthy view.",
    solution:
      "We build or configure CRM systems that mirror how the business actually delivers — from referral to invoice — integrate them with finance and operations, and surface live dashboards for owners and managers.",
    results: [
      "A CRM that matches your real delivery model",
      "Integrated finance, operations and reporting",
      "Live dashboards and a single source of truth",
      "Higher adoption because it fits how teams work",
    ],
    stack: ["Next.js", "PostgreSQL", "GraphQL", "AWS"],
  },
];

// --- Business strengths (shown where headline stats used to sit) ------------

export const stats = [
  { value: "Custom", label: "software engineered around your workflows" },
  { value: "AI-first", label: "automation and AI agents, with guardrails" },
  { value: "Lifecycle", label: "from discovery to launch and support" },
  { value: "Owned", label: "your source code, IP and infrastructure" },
];
