export const siteMetadata = {
  name: "ClientFlow",
  domain: "clientflow.app",
  url: "https://clientflow.app",
  tagLine: "Close clients faster — without the busywork.",
  description:
    "ClientFlow unifies intake forms, AI-assisted proposals, scheduling, files, chat, and analytics so freelance consultants convert leads in one streamlined workspace.",
  twitter: "@clientflow",
  trialCopy: "Start a 14-day trial — no card required",
  ogImage: "https://dummyimage.com/1200x630/071428/ffffff&text=ClientFlow",
};

export const primaryNav = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/docs", label: "Docs" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const featureHighlights = [
  {
    title: "AI proposals in seconds",
    description:
      "Generate polished, on-brand proposals with Gemini, edit in place, and send with one link that tracks opens and signatures.",
    icon: "sparkles",
  },
  {
    title: "Smart intake forms",
    description:
      "Drag-and-drop forms, file requests, and conditional logic capture the right info from every lead the first time.",
    icon: "form",
  },
  {
    title: "Calendar built in",
    description:
      "Offer instant scheduling options with timezone awareness and personalized availability windows.",
    icon: "calendar",
  },
  {
    title: "Realtime lead desk",
    description:
      "Chat, comments, files, and analytics update instantly so you always know what each client needs next.",
    icon: "activity",
  },
];

export const guidedFlow = [
  {
    step: "Connect",
    title: "Capture every lead",
    body: "Sync inboxes, embed forms, and pipe DMs into a single lead queue with auto-tagging.",
  },
  {
    step: "Qualify",
    title: "Intake that feels human",
    body: "Glassmorphism forms feel premium and support uploads, video asks, and scoped packages.",
  },
  {
    step: "Propose",
    title: "AI-assisted proposals",
    body: "Gemini drafts proposals, pricing sections, and next steps using your templates and tone.",
  },
  {
    step: "Schedule",
    title: "One-click scheduling",
    body: "Share a magical booking link that auto-adds conferencing details and reminders.",
  },
];

export const onboardingJourney = [
  { title: "Connect calendar", copy: "Link Google or Outlook in 2 clicks." },
  { title: "Build intake form", copy: "Start from templates for designers, marketers, and consultants." },
  { title: "Enable AI proposals", copy: "Pick tone, add deliverables, and preview." },
  { title: "Run first flow", copy: "Send clients a guided intake + proposal sequence." },
];

export const pricingTiers = [
  {
    name: "Starter",
    price: "$0",
    cadence: "14-day trial",
    description:
      "Full platform access with limited AI credits to prove the value before subscribing.",
    cta: "Start free",
    featured: false,
    perks: [
      "Unlimited leads during trial",
      "2 proposal templates",
      "Basic analytics",
      "Email + password auth",
    ],
  },
  {
    name: "Grow",
    price: "$49",
    cadence: "per month",
    description: "Everything you need to run a freelance practice with automation and AI.",
    cta: "Upgrade to Grow",
    featured: true,
    perks: [
      "Unlimited proposals & forms",
      "Calendar booking + reminders",
      "Supabase storage 100 GB",
      "Realtime chat + push alerts",
      "Export & delete controls",
    ],
  },
  {
    name: "Scale",
    price: "$89",
    cadence: "per month",
    description: "Advanced analytics, personalization, and workspace automation for teams of 2+.",
    cta: "Talk to sales",
    featured: false,
    perks: [
      "Multi-brand dashboards",
      "Priority Gemini requests",
      "Custom AI guardrails",
      "Webhook & API limits boosted",
      "Dedicated success partner",
    ],
  },
];

export const faqEntries = [
  {
    question: "Do I need a credit card for the trial?",
    answer:
      "No card required. After 14 days you'll be prompted to add billing to keep automations live.",
  },
  {
    question: "Where is my data stored?",
    answer:
      "ClientFlow runs on Supabase (Postgres + Storage) in SOC2 data centers with encryption at rest and in transit.",
  },
  {
    question: "Can I export or delete my data?",
    answer:
      "Yes — settings include self-serve export and deletion actions plus an email confirmation trail for compliance.",
  },
  {
    question: "How does AI billing work?",
    answer:
      "Each plan includes monthly Gemini credits. You can add pay-as-you-go credits or limit proposal generations per teammate.",
  },
];

export const blogPosts = [
  {
    title: "Client intake form template for freelance web designers",
    category: "Templates",
    estimate: "8 min read",
  },
  {
    title: "How to automate proposal follow-ups without sounding robotic",
    category: "Automation",
    estimate: "6 min read",
  },
  {
    title: "AI proposal generator prompts that close consulting deals",
    category: "AI",
    estimate: "7 min read",
  },
  {
    title: "Booking links that actually get clicked — UX tips",
    category: "UX",
    estimate: "5 min read",
  },
  {
    title: "Using Supabase to power a modern client portal",
    category: "Engineering",
    estimate: "9 min read",
  },
  {
    title: "Analytics to watch in the first 30 days of a freelance business",
    category: "Analytics",
    estimate: "10 min read",
  },
  {
    title: "Realtime lead desks for solo consultants",
    category: "Product",
    estimate: "6 min read",
  },
  {
    title: "GDPR checklist for US-based freelancers",
    category: "Compliance",
    estimate: "4 min read",
  },
  {
    title: "Personalizing proposals based on behavioral data",
    category: "Personalization",
    estimate: "6 min read",
  },
  {
    title: "Building trust with glassmorphism UI patterns",
    category: "Design",
    estimate: "5 min read",
  },
  {
    title: "Why Supabase + Next.js is perfect for indie agencies",
    category: "Engineering",
    estimate: "8 min read",
  },
  {
    title: "From lead to booked project: a 24-hour game plan",
    category: "Playbooks",
    estimate: "11 min read",
  },
];

export const docsTopics = [
  {
    title: "Getting started",
    items: [
      "Create an account & start trial",
      "Invite clients into shared rooms",
      "Configure brand + domain",
    ],
  },
  {
    title: "Intake & forms",
    items: [
      "Form builder overview",
      "Embed on Webflow, Notion, or Wix",
      "File upload best practices",
    ],
  },
  {
    title: "AI proposals",
    items: [
      "Prompting Gemini",
      "Template variables",
      "Approval workflow",
    ],
  },
  {
    title: "Automation & APIs",
    items: [
      "Webhook payloads",
      "Events schema",
      "Rate limits",
    ],
  },
];

export const contactChannels = [
  {
    title: "Sales",
    detail: "sales@clientflow.app",
    description: "Strategy sessions, custom plans, and product demos.",
  },
  {
    title: "Support",
    detail: "support@clientflow.app",
    description: "24-hour response SLA during business days.",
  },
  {
    title: "SMS",
    detail: "+1 (415) 555-0149",
    description: "Text updates for proposal opens and signatures.",
  },
];

export const analyticsEvents = [
  "page_view",
  "lead_created",
  "proposal_generated",
  "proposal_sent",
  "proposal_signed",
  "meeting_booked",
];

export const acceptanceTests = [
  "User signs up, completes onboarding wizard, and lands on dashboard",
  "Create an intake form, share preview link, and capture a response",
  "Generate AI proposal stub and save it to proposals list",
  "Upload a file via signed URL flow and see it in Files page",
  "Book a meeting through calendar mock and confirm event appears",
  "Request data export from settings and receive confirmation state",
];

export const deploymentChecklist = [
  "Set NEXT_PUBLIC_SUPABASE_URL & NEXT_PUBLIC_SUPABASE_ANON_KEY",
  "Store GEMINI_API_KEY in Vercel dashboard",
  "Configure STRIPE_WEBHOOK_SECRET placeholder",
  "Add domain to Supabase auth redirect whitelist",
  "Enable Vercel Analytics after cookie consent",
];
