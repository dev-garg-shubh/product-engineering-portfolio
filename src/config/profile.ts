import type { LucideIcon } from "lucide-react";
import type { CaseStudyKey } from "./platform";
import {
  Brush,
  ChartNoAxesCombined,
  Code2,
  Component,
  GitBranch,
  LayoutDashboard,
  MonitorSmartphone,
  Sparkles,
  TestTube2,
  WandSparkles,
} from "lucide-react";

export type CaseStudy = {
  title: string;
  label: string;
  summary: string;
  impact: string;
  stack: string[];
  icon: LucideIcon;
};

export type TechKey = "react" | "next" | "java" | "node" | "python" | "aws";

export type WorkProject = {
  id: string;
  status: "WIP" | "Completed";
  caseStudyKey: CaseStudyKey;
  preview: "trading" | "cloud" | "platform" | "pipeline" | "intelligence";
  title: string;
  kicker: string;
  summary: string;
  linkLabel?: string;
  proof?: string;
  featured?: boolean;
  techs: TechKey[];
  tags: string[];
};

export type ProjectCaseStudy = {
  id: string;
  eyebrow: string;
  title: string;
  ownership: string;
  value: string;
  indices: string[];
  problem: string;
  solution: string;
  reliability: string[];
  cloud: string[];
  proof: string;
  stack: string[];
};

export type FlagshipCaseStudy = {
  id: string;
  eyebrow: string;
  title: string;
  ownership: string;
  value: string;
  universe: string[];
  problem: string;
  role: string;
  challenges: Array<{ title: string; summary: string }>;
  capabilities: string[];
  proof: string[];
  lessons: string[];
  stack: string[];
};

export type CompanyPlatformCaseStudy = {
  id: string;
  eyebrow: string;
  title: string;
  ownership: string;
  value: string;
  tenure: string;
  boundary: string;
  context: string;
  role: string;
  productSurfaces: string[];
  engineering: string[];
  proof: string;
  stack: string[];
  website: string;
};

export type TimelineItem = {
  role: string;
  organization: string;
  location: string;
  period: string;
  points: string[];
  overviewOnlyPoints?: string[];
};

export type AIWorkflow = {
  title: string;
  summary: string;
  tools: string[];
  outcomes: string[];
};

export type SkillGroup = {
  title: string;
  icon: LucideIcon;
  skills: string[];
};

export const profile = {
  name: "Shubh Garg",
  role: "Full-Stack Developer",
  email: "jan22.sg@gmail.com",
  linkedin: "https://linkedin.com/in/shubh-garg-22x1",
  cv: "/Shubh_Garg_CV.pdf",
  availability: "Freelancing now - open to full-stack roles",
  intro: {
    overview:
      "Welcome. I build products end to end and stay close to the people using them. This portfolio focuses on the ownership I took, the systems I shipped, and how I collaborate through ambiguity. If the work suggests a role, a useful conversation, or candid feedback, I would be glad to hear from you.",
    technical:
      "Welcome. I care about the full path from an interaction on screen to the services, data, and operational decisions behind it. This view opens the architecture, reliability constraints, and tradeoffs inside my work. I value thoughtful critique, technical exchange, and systems that remain understandable as they grow.",
  },
  positioning:
    "A full-stack developer who cares about the complete product path: clean interfaces, useful APIs, reliable data flows, cloud-ready systems, and maintainable delivery.",
};

export const workProjects: WorkProject[] = [
  {
    id: "trader-buddy",
    status: "WIP",
    caseStudyKey: "optionsIntelligence",
    preview: "intelligence",
    title: "Real-Time Options Intelligence & Replay Platform",
    kicker: "Independent flagship full-stack product",
    summary:
      "A full-stack analytics platform for Indian index options combining live broker data, market-state analysis, point-in-time replay, event-driven backtesting, mock execution, structured journaling, risk controls, and advisory decision support.",
    linkLabel: "Explore flagship case study",
    proof: "Live, replay, backtest, journal, and advisory workflows implemented",
    featured: true,
    techs: ["react", "python"],
    tags: ["React", "TypeScript", "FastAPI", "PostgreSQL", "WebSockets", "Dhan API"],
  },
  {
    id: "option-data",
    status: "Completed",
    caseStudyKey: "cloudPipeline",
    preview: "pipeline",
    title: "Cloud Options Pipeline",
    kicker: "Independent production-grade build",
    summary:
      "Python service collecting Dhan option-chain Greeks and futures prices into PostgreSQL with market-aware scheduling, reliability controls, and AWS deployment.",
    linkLabel: "Explore case study",
    proof: "32 tests guarding critical paths before deployment",
    techs: ["python", "aws"],
    tags: ["Python", "PostgreSQL", "AWS ECS", "Docker", "GitHub Actions", "Dhan API"],
  },
  {
    id: "sprih-platform",
    status: "Completed",
    caseStudyKey: "sprihPlatform",
    preview: "platform",
    title: "Sprih Enterprise Sustainability Platform",
    kicker: "Early engineering team · 2022–2026",
    summary:
      "Helped build the platform from its early foundations into a production sustainability product, contributing across carbon workflows, data-heavy dashboards, management surfaces, reusable charts, async operations, and Java-backed services.",
    linkLabel: "Explore company platform work",
    techs: ["react", "java"],
    tags: ["React", "TypeScript", "Java", "D3.js", "REST APIs", "Enterprise SaaS"],
  },
];

export const traderPlatformCaseStudy: FlagshipCaseStudy = {
  id: "trader-platform-case-study",
  eyebrow: "Flagship independent full-stack product",
  title: "Real-Time Options Intelligence & Replay Platform",
  ownership: "Designed and built across product UI, backend services, data flows, storage, and research tooling",
  value:
    "A full-stack analytics workspace for Indian index options that connects live broker data with market-state analysis, historically correct replay, event-driven backtesting, mock execution, risk and PnL tracking, structured trade review, and advisory decision support.",
  universe: ["NIFTY", "BANKNIFTY", "SENSEX"],
  problem:
    "Options research is fragmented across live chains, charts, broker screens, replay tools, spreadsheets, and post-trade notes. The difficult part is not drawing another dashboard; it is keeping fast and slow market signals honest, reconstructing the past without future leakage, and connecting research decisions to simulated execution and review.",
  role:
    "I owned the product end to end: React and Material UI workflows, chart interactions, Zustand state, FastAPI services, broker normalization, event streaming, PostgreSQL models, Redis fanout, replay and backtest engines, journal workflows, risk lifecycle, and Docker-based local delivery. It is positioned as an independent production-grade build, not client work.",
  challenges: [
    {
      title: "Async live-data architecture",
      summary:
        "Dhan ticks and option-chain events enter an async coordinator, are normalized into typed events, and fan out through an internal event bus, Redis, and WebSockets. Heartbeats, stale-feed detection, disconnect handling, and reconnect backoff make data health visible instead of silently presenting old state.",
    },
    {
      title: "Point-in-time-safe replay",
      summary:
        "Replay analytics are rebuilt at the selected playhead and kept separate from latest live state. Historical candles, option snapshots, market context, markers, and decisions are gated by replay time while chart updates preserve the user’s zoom and context instead of resetting on each step.",
    },
    {
      title: "Different freshness cadences",
      summary:
        "Price ticks can update quickly while option-chain and OI snapshots arrive more slowly. The interface tracks these as different freshness signals, lets tick-driven views stay responsive, and provides explicit manual chain refresh behavior for OI-sensitive analysis.",
    },
  ],
  capabilities: [
    "Live market-state intelligence using pressure building, expansion, failure, and regime language",
    "Historical replay synchronized to a protected point-in-time clock",
    "Event-driven backtesting and mock execution with position, risk, and PnL lifecycle",
    "Structured broker-backed journal with trade stories, review context, and performance analysis",
    "Advisory-only Shock Detector using deterministic scoring, ATM IV comparison, catalyst context, and backtest skip analysis",
  ],
  proof: [
    "Active live-market scope is explicitly constrained to NIFTY, BANKNIFTY, and SENSEX.",
    "Focused backend tests cover backtesting, journal evaluation, Dhan normalization, security, order deduplication, and Shock Detector behavior.",
    "The current frontend passes a strict TypeScript no-emit check.",
  ],
  lessons: [
    "Freshness is plural: ticks, chains, OI, and historical context need separate timestamps and trust signals.",
    "Replay correctness starts with a hard time boundary; visual similarity to live mode is secondary to historical truth.",
    "Decision support should explain market state and uncertainty without presenting advisory analysis as automated execution.",
  ],
  stack: [
    "React",
    "TypeScript",
    "Material UI",
    "Zustand",
    "Lightweight Charts",
    "Recharts",
    "FastAPI",
    "Python",
    "PostgreSQL",
    "Redis",
    "WebSockets",
    "Docker",
    "Dhan API",
  ],
};

export const optionDataCaseStudy: ProjectCaseStudy = {
  id: "cloud-options-case-study",
  eyebrow: "Independent full-stack + cloud case study",
  title: "Cloud-Native Options Market Data Pipeline",
  ownership: "Designed, built, tested, and deployed independently",
  value:
    "A production-grade Python ingestion service that turns live Dhan option-chain Greeks and futures prices into reliable PostgreSQL snapshots for NIFTY, BANKNIFTY, and SENSEX.",
  indices: ["NIFTY", "BANKNIFTY", "SENSEX"],
  problem:
    "Market data collection is not just an API call. It has to respect trading sessions, survive token expiry and transient failures, resolve changing contracts, and avoid duplicating snapshots when work is retried.",
  solution:
    "I built a config-driven service that onboards assets without code changes, renews access through PIN and TOTP, discovers option expiries and active futures dynamically, and schedules collection only when the relevant exchange is open.",
  reliability: [
    "Exchange-session, weekend, and holiday gating",
    "API rate limiting, retries, and auth cooldowns",
    "Retry-safe batched idempotent PostgreSQL writes",
    "Dynamic option-expiry and futures resolution",
    "Container health checks and ingestion run records",
  ],
  cloud: [
    "Docker image deployed on AWS ECS Fargate",
    "RDS PostgreSQL with versioned migrations",
    "Secrets Manager for runtime credentials",
    "CloudWatch health and runtime visibility",
    "GitHub Actions test, build, migrate, and deploy flow",
  ],
  proof: "32 automated tests currently pass across auth, configuration, market guards, HTTP behavior, database writes, instrument resolution, and workers.",
  stack: ["Python", "PostgreSQL", "AWS ECS Fargate", "Docker", "GitHub Actions", "Dhan API"],
};

export const sprihPlatformCaseStudy: CompanyPlatformCaseStudy = {
  id: "sprih-platform-case-study",
  eyebrow: "Company platform · early engineering team",
  title: "Sprih Enterprise Sustainability Platform",
  ownership: "Software Developer Intern → Member of Technical Staff, Full Stack",
  value:
    "I joined Sprih in its initial engineering phase and helped turn early product foundations into production software used for complex sustainability data, workflows, analysis, and reporting.",
  tenure: "2022–2026",
  boundary: "Former team member · contributions shown through May 2026",
  context:
    "Sustainability teams need to collect fragmented operational data, apply trustworthy calculations, investigate results, and move that work toward audit and reporting. The product challenge was to make those dense workflows understandable without hiding the underlying data or status.",
  role:
    "I worked across the product path: translating designs into React workflows, shaping reusable components and charts, integrating Java APIs, handling long-running and bulk operations, and refining management experiences for users, facilities, emissions data, and platform administration.",
  productSurfaces: [
    "Carbon and sustainability dashboards with dense analytical views",
    "Facility, user, and administrative management workflows",
    "Data capture, bulk upload, validation, and progress experiences",
    "Reusable D3.js charting foundations through SprihCharts",
    "Reporting and review surfaces for complex enterprise data",
  ],
  engineering: [
    "Reusable React and TypeScript product architecture across repeated workflows",
    "Java-backed REST integrations with clear loading, failure, and completion states",
    "Async operation visibility for uploads, updates, deletes, and background work",
    "Role-aware interfaces and reusable management patterns",
    "AI-assisted E2E workflows and custom skills to accelerate reliable delivery",
  ],
  proof:
    "Progressed from intern to Member of Technical Staff while contributing across foundational and production features throughout the platform's early growth. This case study reflects only the work completed during my tenure.",
  stack: ["React", "TypeScript", "Redux", "Java", "REST APIs", "D3.js", "Tailwind CSS", "Mantine UI"],
  website: "https://www.sprih.com/",
};

export const aiWorkflow: AIWorkflow = {
  title: "AI-assisted development workflow",
  summary:
    "I use AI as a development accelerator, not as a shortcut around engineering judgment. Codex, Cursor, MCP tools, and custom skills help me move faster from context to implementation, tests, and iteration.",
  tools: ["Codex", "Cursor", "MCP", "Custom skills"],
  outcomes: [
    "Automated workflows and skills for generating E2E tests from existing patterns.",
    "Faster design-to-code handoff by pulling structured context from Figma through MCP.",
    "Quicker debugging, refactoring, and implementation loops while keeping review and ownership human.",
  ],
};

export const caseStudies: CaseStudy[] = [
  {
    title: "SprihCharts",
    label: "Data visualization",
    summary:
      "Architected an in-house D3.js charting library that grew from a single chart into the reusable standard powering product visualizations.",
    impact:
      "Improved consistency, extensibility, and chart delivery speed across dashboard surfaces.",
    stack: ["React", "D3.js", "TypeScript", "Design systems"],
    icon: ChartNoAxesCombined,
  },
  {
    title: "Dashboard UI Systems",
    label: "Product interfaces",
    summary:
      "Designed and shipped responsive dashboard surfaces, management pages, and data-heavy workflows for different user groups.",
    impact:
      "Turned complex platform actions into scannable, reliable interfaces that product users could operate every day.",
    stack: ["React", "Redux", "Tailwind CSS", "Mantine UI"],
    icon: LayoutDashboard,
  },
  {
    title: "Design-to-React Components",
    label: "UI implementation",
    summary:
      "Translated Figma designs into polished, reusable, responsive components while keeping visual details and interaction states intact.",
    impact:
      "Improved delivery speed and consistency across repeated product surfaces.",
    stack: ["React", "TypeScript", "Figma", "Responsive UI"],
    icon: Component,
  },
  {
    title: "Async Workflow UX",
    label: "Interaction design",
    summary:
      "Created user-facing flows for file uploads, bulk updates, deletes, progress states, and notifications around long-running operations.",
    impact:
      "Made complex background work feel understandable, trackable, and safer for users.",
    stack: ["React", "REST APIs", "State management", "Notifications"],
    icon: MonitorSmartphone,
  },
  {
    title: "Freelance Product Builds",
    label: "Current focus",
    summary:
      "Currently building freelance product work with an emphasis on modern interfaces, API-ready flows, smooth experiences, clean handoff, and fast iteration.",
    impact:
      "Turns ambiguous product ideas into working systems through deliberate product, interface, and implementation decisions.",
    stack: ["React", "TypeScript", "Node.js", "Remote delivery"],
    icon: WandSparkles,
  },
];

export const timeline: TimelineItem[] = [
  {
    role: "Freelance Full-Stack Developer",
    organization: "Independent",
    location: "Remote",
    period: "May 2026 - Present",
    points: [
      "Building freelance product work across interfaces, API-ready flows, data views, and clear user experiences.",
    ],
    overviewOnlyPoints: [
      "Open to full-stack roles and product teams that value detail-oriented implementation across the stack.",
    ],
  },
  {
    role: "Member of Technical Staff - Full Stack",
    organization: "Sprih Inc.",
    location: "Onsite",
    period: "June 2023 - May 2026",
    points: [
      "As part of the early engineering team, owned product features across dashboards, user management, facility workflows, data visualization, management pages, and API integrations.",
      "Built with React, Redux, Tailwind CSS, Mantine UI, D3.js, Java, REST APIs, and automation workflows.",
      "Improved engineering velocity through reusable components, backend-aware workflows, AI-assisted E2E automation, custom skills, and modern tooling.",
    ],
  },
  {
    role: "Software Developer Intern",
    organization: "Sprih Inc.",
    location: "Onsite",
    period: "June 2022 - April 2023",
    points: [
      "Developed reusable UI components, integrated REST APIs, and collaborated with designers on responsive product experiences.",
      "Contributed to dashboard UI, API integration, and product flows from design to implementation.",
    ],
  },
  {
    role: "B.Tech in Computer Science",
    organization: "Madhav Institute of Technology and Science",
    location: "Gwalior",
    period: "August 2019 - May 2023",
    points: ["Built the computer-science foundation behind full-stack engineering, systems thinking, and practical delivery."],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Engineering",
    icon: Code2,
    skills: ["React.js", "TypeScript", "Redux", "D3.js", "Tailwind CSS", "Mantine UI", "Responsive UI"],
  },
  {
    title: "UI Craft",
    icon: Brush,
    skills: ["Figma handoff", "Design systems", "Micro-interactions", "Layout polish", "Accessibility", "Visual QA"],
  },
  {
    title: "Dashboards & Charts",
    icon: ChartNoAxesCombined,
    skills: ["SprihCharts", "D3.js", "Recharts", "Data-heavy UI", "Chart architecture", "Product analytics"],
  },
  {
    title: "Automation",
    icon: TestTube2,
    skills: ["Playwright", "Cypress", "Jest", "Test architecture", "AI-assisted workflows"],
  },
  {
    title: "Tooling",
    icon: GitBranch,
    skills: ["Git", "Vite", "pnpm", "Webpack", "Postman", "Chrome DevTools", "VS Code"],
  },
  {
    title: "Product Craft",
    icon: Sparkles,
    skills: ["Dashboards", "Design collaboration", "Performance tuning", "Ownership", "Maintainability", "Remote delivery"],
  },
];
