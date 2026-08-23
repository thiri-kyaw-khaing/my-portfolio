export const siteConfig = {
  name: "Thiri Kyaw Khaing",
  role: "Web Developer | UI/UX Designer | Software Engineer",
  email: "thirikyawkhaing04@gmail.com",
  linkedin:
    "https://www.linkedin.com/in/thiri-kyaw-khaing-70992b380?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  github: "https://github.com/thiri-kyaw-khaing",
  resumeUrl: "/resume.pdf",
  intro:
    "Hi, I'm Thiri Kyaw Khaing. I build digital experiences that are both visually engaging and strategically designed. As a Software Engineering student specializing in Frontend Development, UI/UX Design, and Business Analysis, I combine technical expertise with user-centered thinking to create scalable and impactful solutions.",
};

export type SkillGroup = {
  title: string;
  accent: string;
  skills: { name: string; level: number }[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    accent: "from-amber-500 to-orange-400",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 88 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 92 },
    ],
  },
  {
    title: "Design",
    accent: "from-orange-400 to-yellow-300",
    skills: [
      { name: "UI/UX Design", level: 90 },
      { name: "Figma", level: 92 },
      { name: "Wireframing", level: 88 },
      { name: "Canva", level: 85 },
      { name: "Prototyping", level: 86 },
    ],
  },
  {
    title: "Business Analysis",
    accent: "from-yellow-500 to-amber-300",
    skills: [
      { name: "Requirements Elicitation", level: 88 },
      { name: "User Stories", level: 90 },
      { name: "Process Modeling", level: 82 },
      { name: "Stakeholder Communication", level: 88 },
      { name: "Agile / Scrum", level: 85 },
    ],
  },
  {
    title: "Tools",
    accent: "from-amber-400 to-orange-500",
    skills: [
      { name: "Git", level: 88 },
      { name: "Docker", level: 70 },
      { name: "Postman", level: 84 },
      { name: "Playwright", level: 80 },
      { name: "Jira", level: 86 },
      { name: "VS Code", level: 94 },
    ],
  },
];

export type ProjectCategory = "fullstack" | "ba" | "uiux";

export const projectCategories: {
  id: ProjectCategory | "all";
  label: string;
}[] = [
  { id: "all", label: "All Projects" },
  { id: "fullstack", label: "Full Stack" },
  { id: "uiux", label: "UI/UX Design" },
  { id: "ba", label: "Business Analyst" },
];

export type ProjectLink = {
  label: string;
  href: string;
  icon: "demo" | "github" | "case" | "design" | "walkthrough";
};

export type CaseStudyScreen = {
  image: string;
  alt: string;
  caption: string;
};

export type CaseStudyDecision = {
  title: string;
  detail: string;
};

export type ProjectCaseStudy = {
  slug: string;
  /** Must match a Project.title exactly, for linking from the project card. */
  projectTitle: string;
  role: string;
  year: string;
  overview: string;
  problem: string;
  features: string[];
  decisions: CaseStudyDecision[];
  /** Reuses the same screen format as the homepage spotlight. Omitted when no real screens exist yet. */
  walkthrough?: {
    intro: string;
    frame: "mobile" | "browser";
    screens: CaseStudyScreen[];
  };
};

export const projectCaseStudies: ProjectCaseStudy[] = [
  {
    slug: "doi-tung-dashboard",
    projectTitle: "Doi Tung Training Dashboard — Web UI/UX Design",
    role: "UI/UX Design",
    year: "2025 — Present",
    overview:
      "A role-based web dashboard for Doi Tung Foundation's Training & Record Management System, designed for two different users on the same team: a manager tracking department training, and an admin overseeing the whole organization.",
    problem:
      "Staff training records were split across manual processes with no single view of who was trained, when, or by whom. Managers had no fast way to check department status, register staff for a session, or avoid double-booking someone already registered.",
    features: [
      "Role-based entry point that routes Manager and Staff into distinct experiences from the first screen",
      "Manager dashboard with department KPI cards and an embedded training calendar",
      "Staff registration flow that flags already-registered participants inline",
      "Org-wide admin dashboard with training-hours and participation-rate trend charts",
      "Centralized notifications feed and an OJT records table with attendance status",
    ],
    decisions: [
      {
        title: "Split by role before login",
        detail:
          "Manager and staff needs overlap so little that merging them into one dashboard would have meant hiding most of the UI behind conditionals. Splitting at the entry point kept each experience focused.",
      },
      {
        title: "KPIs before the calendar, not instead of it",
        detail:
          "Early drafts led with just the calendar. Checking that against what a manager actually looks for first — headcount, active training, hours — showed the numbers needed to come first, with the calendar as the follow-up.",
      },
      {
        title: "Surface conflicts inline, not after submission",
        detail:
          "Rather than letting a manager select an already-registered staff member and fail on submit, the registration list flags that status directly next to their name.",
      },
      {
        title: "Give admin a different shape of dashboard entirely",
        detail:
          "An admin isn't managing a single day — they're watching trends. Swapping the calendar for training-hours and participation-rate charts matched the actual question admins ask: is engagement going up or down?",
      },
    ],
    walkthrough: {
      intro: "Six screens from the live app, each shaped around what that role actually needs to do.",
      frame: "browser",
      screens: [
        {
          image: "/case-studies/doi-tung/01-role-select.png",
          alt: "Role selection landing screen offering Manager or Staff entry points",
          caption: "Splits the app by role right away — Manager or Staff — instead of one generic login.",
        },
        {
          image: "/case-studies/doi-tung/02-manager-dashboard.png",
          alt: "Manager dashboard with department KPI cards and an embedded training calendar",
          caption: "Manager view leads with department KPIs, then a calendar for what's scheduled next.",
        },
        {
          image: "/case-studies/doi-tung/03-register-staff.png",
          alt: "Register staff checklist showing staff list with an already-registered badge",
          caption: "Registration list flags who's already signed up, so no one gets double-booked.",
        },
        {
          image: "/case-studies/doi-tung/04-admin-dashboard.png",
          alt: "Admin dashboard with training hours and participation rate trend charts",
          caption: "Admin gets trend charts instead of a calendar — built for spotting patterns, not single days.",
        },
        {
          image: "/case-studies/doi-tung/05-notifications.png",
          alt: "Notifications feed listing training reminders and updates with unread items highlighted",
          caption: "One feed for every training update, with unread items highlighted in green.",
        },
        {
          image: "/case-studies/doi-tung/06-ojt-records.png",
          alt: "OJT records table showing attendance status per course",
          caption: "A single table for attendance status — Attended, Register, Absent — per course.",
        },
      ],
    },
  },
  {
    slug: "ratewise",
    projectTitle: "RateWise — UI Design",
    role: "UI Design",
    year: "2025",
    overview:
      "A UI design for RateWise, a platform where Mae Fah Luang University students search, rate, and review courses and professors before registration.",
    problem:
      "Students choosing electives had no reliable way to compare courses or professors beyond word of mouth. The interface needed to make searching, comparing, and reviewing fast enough that students would actually use it, not browse once and leave.",
    features: [
      "Course and professor search with fast, readable results",
      "Rating and review submission flow with minimal required steps",
      "Responsive layouts that hold up across desktop and mobile browsing",
      "Consistent typography and spacing system applied across every screen",
    ],
    decisions: [
      {
        title: "Optimized for scanning, not reading",
        detail:
          "Students comparing several courses back to back need to scan ratings, not read paragraphs. Layouts lead with scores and short tags before any long-form review text.",
      },
      {
        title: "Kept the review form short on purpose",
        detail:
          "The more fields a review form has, the fewer reviews get submitted. The submission flow was trimmed to the minimum that still produces a useful review.",
      },
      {
        title: "One consistent pattern for every list",
        detail:
          "Course lists, professor lists, and review lists all reuse the same card and typography pattern, so the interface stays predictable as students move between sections.",
      },
    ],
    walkthrough: {
      intro: "Four screens from the live app, and the reasoning behind each one.",
      frame: "browser",
      screens: [
        {
          image: "/case-studies/ratewise/01-home.png",
          alt: "RateWise home screen with search, filters, stat cards, and top-rated professors and courses",
          caption:
            "Search and filters sit above three at-a-glance stats, with top-rated professors and popular courses surfaced immediately below.",
        },
        {
          image: "/case-studies/ratewise/02-courses.png",
          alt: "RateWise course listing grid with ratings, review counts, and credit badges",
          caption:
            "Course cards lead with the rating and review count before the description, so students can compare at a glance.",
        },
        {
          image: "/case-studies/ratewise/03-professors.png",
          alt: "RateWise professor listing grid with photo, department, email, and rating",
          caption:
            "Professor cards pair a photo with department, contact, and rating — enough to judge fit before opening a profile.",
        },
        {
          image: "/case-studies/ratewise/04-my-reviews.png",
          alt: "RateWise My Reviews screen with tabs for All Review, Courses, and Professors",
          caption:
            "A tabbed view separates a student's own course and professor reviews, so managing past feedback doesn't mean scrolling through everyone else's.",
        },
      ],
    },
  },
  {
    slug: "mfu-election",
    projectTitle: "MFU Student Election — UI Design",
    role: "UI Design",
    year: "2025 — Present",
    overview:
      "Interface design for a secure, web-based voting platform for MFU's International Student Election — candidate browsing, ballot casting, and results — designed alongside the business analysis work behind the same system.",
    problem:
      "The existing election process had no digital, auditable voting flow. The design needed to reduce voter error and build enough visible trust that students would believe their vote was actually counted correctly.",
    features: [
      "Candidate browsing screens with clear, comparable information per candidate",
      "A ballot-casting flow designed to prevent accidental or duplicate votes",
      "Results views built for transparency after voting closes",
      "Accessible, high-contrast UI suited to a one-time, high-stakes interaction",
    ],
    decisions: [
      {
        title: "Design for a voter who's never used it before",
        detail:
          "Unlike a habitual app, most students touch this flow exactly once. Every screen favors clarity and confirmation over speed, since a confused voter is worse than a slightly slower one.",
      },
      {
        title: "Make the irreversible step feel irreversible",
        detail:
          "Casting a ballot needed an explicit confirmation step, visually distinct from routine navigation, so no one submits a vote by accident while scrolling.",
      },
      {
        title: "Built the UI alongside the requirements, not after them",
        detail:
          "This project paired directly with the AS-IS/TO-BE process models from the business analysis case study, so screens map to documented requirements instead of guessed-at ones.",
      },
    ],
    walkthrough: {
      intro: "Three screens from the live app, and the reasoning behind each one.",
      frame: "browser",
      screens: [
        {
          image: "/case-studies/mfu-election/01-sign-in.png",
          alt: "Voting app sign-in screen with email and password fields",
          caption:
            "Sign-in is deliberately plain — one form, no distractions — since the only job of this screen is to confirm a student is who they say they are before anything else happens.",
        },
        {
          image: "/case-studies/mfu-election/02-candidates.png",
          alt: "Candidate browsing screen with position tabs and a Vote button on each candidate card",
          caption:
            "Positions are tabbed across the top and every candidate gets the same card layout with a clear Vote button, so comparing candidates within a position stays consistent race to race.",
        },
        {
          image: "/case-studies/mfu-election/03-results.png",
          alt: "Election results screen with a horizontal bar chart of vote percentages per candidate",
          caption:
            "Results reuse the same position tabs as voting, then switch to horizontal bars ranked by percentage — a format built for a quick, transparent read once polls close.",
        },
      ],
    },
  },
  {
    slug: "finfocus",
    projectTitle: "FinFocus — Mobile Finance Management App",
    role: "Mobile UI/UX",
    year: "2025",
    overview:
      "A mobile finance management app concept focused on quick expense logging and reviewing spend against a monthly goal.",
    problem:
      "Personal finance apps often lose users at the logging step — if adding an expense takes too long, people stop doing it within a week. FinFocus needed an entry flow fast enough to survive daily use, plus two lenses for reviewing where money actually went: by category and by time.",
    features: [
      "Balance-first home dashboard with one-tap category shortcuts",
      "A three-field expense entry form per category",
      "Category breakdown view with running totals",
      "Month-filterable history paired with a goal / spent / saving summary",
    ],
    decisions: [
      {
        title: "Lead with one number",
        detail:
          "The home screen shows available balance before anything else, with category shortcuts directly beneath it, so logging an expense never takes more than two taps.",
      },
      {
        title: "Three fields, no more",
        detail:
          "Each entry form is deliberately just amount, date, and note — trading flexibility for speed, since most entries get logged in the moment, not reviewed later.",
      },
      {
        title: "Two lenses on the same data",
        detail:
          "Category view sums totals so users can spot overspending at a glance; History pairs a month filter with a goal/spent/saving header, giving the same data a time-based read.",
      },
    ],
    walkthrough: {
      intro:
        "Four screens from the FinFocus prototype and the reasoning behind each one — from first glance at the dashboard to reviewing spend against a goal.",
      frame: "mobile",
      screens: [
        {
          image: "/case-studies/finfocus/01-home.png",
          alt: "FinFocus home dashboard showing available balance and category shortcuts",
          caption:
            "The dashboard leads with one number — available balance — and puts category shortcuts directly beneath it, so logging a new expense never takes more than two taps from the home screen.",
        },
        {
          image: "/case-studies/finfocus/02-expense-entry.png",
          alt: "FinFocus expense entry form for the Food category with amount, date, and note fields",
          caption:
            "Each category's entry form is deliberately three fields — amount, date, note. Cutting it down to the essentials trades flexibility for speed, since most entries get logged in the moment.",
        },
        {
          image: "/case-studies/finfocus/03-category.png",
          alt: "FinFocus category breakdown screen listing spending totals per category",
          caption:
            "Category view sums totals instead of listing every transaction, so a user can spot which category is eating their budget at a glance before drilling into individual entries.",
        },
        {
          image: "/case-studies/finfocus/04-history.png",
          alt: "FinFocus history screen with monthly filter and goal, spent, and saving totals",
          caption:
            "History pairs a month-by-month filter with a goal / spent / saving summary up top, giving the category view a time-based counterpart for tracking progress against a monthly goal.",
        },
      ],
    },
  },
  {
    slug: "liffquestly",
    projectTitle: "LiffQuestly — LIFF Reward Campaign App",
    role: "Mobile UI/UX",
    year: "Hackathon",
    overview:
      "A reward-campaign app built for LINE's in-chat mini-app framework (LIFF), designed during a hackathon around discovering quests, completing tasks, and redeeming rewards.",
    problem:
      "LIFF apps live inside a chat window, not a home screen — users arrive with low intent and a small window of attention. The design needed to hook someone browsing a chat into completing a quest within a single short session, on a hackathon timeline that left no room for a slow, iterative process.",
    features: [
      "Campaign discovery screen for browsing active quests",
      "A task-completion flow scoped for a single short session",
      "Reward redemption screen closing the loop",
      "A playful visual identity built for in-chat, mobile-first use",
    ],
    decisions: [
      {
        title: "Designed for a chat window, not a home screen",
        detail:
          "LIFF apps open inside LINE itself, so the UI had to read clearly in a compact embedded viewport rather than assume full-screen mobile space.",
      },
      {
        title: "Shrunk the funnel to fit a hackathon session",
        detail:
          "With limited time to build and test, the quest-to-reward flow was kept to three screens instead of a fuller app structure, so the core loop could actually ship.",
      },
      {
        title: "Playful over corporate",
        detail:
          "Since the app lives inside a casual chat context, the visual identity leaned bright and game-like rather than adopting a typical utility-app look.",
      },
    ],
  },
  {
    slug: "getwhatyouneed",
    projectTitle: "GetWhatYouNeed (GWN) — E-Commerce App",
    role: "Mobile UI/UX",
    year: "2025",
    overview:
      "A 12-screen mobile e-commerce app design system for GetWhatYouNeed (GWN) — from browsing categories and flash sales through product details to a complete checkout flow.",
    problem:
      "A general marketplace app spanning five very different categories needed to feel focused rather than cluttered — fast enough for someone hunting a specific product, but still able to surface flash sales and recommendations without competing for attention.",
    features: [
      "Category-first home screen with quick shortcuts, a flash-sale countdown, and personalized recommendations",
      "Search with recent searches and trending suggestions to speed up product discovery",
      "Product detail screens with variant selection, seller info, and reviews",
      "A full checkout flow — delivery address, shipping method, and payment — before placing an order",
      "Consistent 12-screen design system built in Plus Jakarta Sans",
    ],
    decisions: [
      {
        title: "Search leads with history and trends, not a blank box",
        detail:
          "Recent searches and trending terms appear the moment the search field is tapped, so returning shoppers don't have to retype what they already searched for.",
      },
      {
        title: "Flash sale gets a countdown, not just a badge",
        detail:
          "A live countdown timer next to flash-sale items creates urgency that a plain percentage-off badge can't, without needing extra screens.",
      },
      {
        title: "Checkout surfaces shipping trade-offs upfront",
        detail:
          "Standard, Express, and Same-Day delivery are shown side-by-side with price and delivery date before payment, so the cost of speed is a clear, upfront choice rather than a surprise at the end.",
      },
    ],
    walkthrough: {
      intro: "Three screens from the 12-screen system, and the reasoning behind each one.",
      frame: "mobile",
      screens: [
        {
          image: "/case-studies/getwhatyouneed/01-home.png",
          alt: "GetWhatYouNeed home screen with category shortcuts, a banner, and a flash sale countdown",
          caption:
            "Home leads with five category shortcuts before anything else, then a flash-sale countdown — so browsing starts with a destination, not an endless feed.",
        },
        {
          image: "/case-studies/getwhatyouneed/02-product-detail.png",
          alt: "GetWhatYouNeed product detail screen for Sony headphones with color, quantity, and seller info",
          caption:
            "Product detail keeps color, quantity, and the seller's rating on one screen, with Add to Cart and Buy Now separated so a confident buyer can skip the cart entirely.",
        },
        {
          image: "/case-studies/getwhatyouneed/03-checkout.png",
          alt: "GetWhatYouNeed checkout screen with delivery address, items, and shipping method options",
          caption:
            "Checkout shows delivery address, items, and shipping method on one scroll — no multi-step wizard — so the total cost is visible before the final tap.",
        },
      ],
    },
  },
];

export type Project = {
  title: string;
  year: string;
  category: ProjectCategory;
  description: string;
  tech: string[];
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    title: "Doi Tung Training Plan Management System",
    year: "2025 — Present",
    category: "fullstack",
    description:
      "Senior project: a responsive training management dashboard built with Next.js and TypeScript. Integrated frontend components with REST APIs for participant and training data, designed relational database structures in MySQL, and built reusable UI components optimized for desktop and mobile.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "REST API", "MySQL"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/thiri-kyaw-khaing/admin-dashboard",
        icon: "github",
      },
      {
        label: "Figma Design",
        href: "https://www.figma.com/design/e0WscmFOFsSuAGxI7ZPfG0/Training-Plan-and-Record-Application?node-id=0-1&t=J6oXIRwur2Ddj56B-1",
        icon: "design",
      },
    ],
  },
  {
    title: "RateWise — Course & Professor Review Platform",
    year: "2025",
    category: "fullstack",
    description:
      "A review platform where students rate and review courses and professors. Implemented dynamic routing, reusable components, and responsive interfaces with Next.js, developed TypeScript frontend features integrated with REST APIs, and designed structured data models for courses, professors, and reviews.",
    tech: ["Next.js", "React", "TypeScript", "Node.js"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/thiri-kyaw-khaing/course-professor-review-hub",
        icon: "github",
      },
      {
        label: "Figma Design",
        href: "https://www.figma.com/design/hybhd16GDjBvoTeMNBA0VM/C-P-Review-Hub---3NCODE?node-id=0-1&t=qfH8I0o3OVIXQrZD-1",
        icon: "design",
      },
    ],
  },
  {
    title: "Furniture E-Commerce Website",
    year: "2024",
    category: "fullstack",
    description:
      "A responsive e-commerce website for browsing and purchasing furniture. Implemented shopping cart functionality, product pages, and user authentication, integrating the frontend with backend REST APIs and a MySQL database while applying responsive design principles across devices.",
    tech: ["React", "Node.js", "REST APIs", "MySQL"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/thiri-kyaw-khaing/furniture-app",
        icon: "github",
      },
    ],
  },
  {
    title: "E-Commerce Shopping App",
    year: "2025",
    category: "fullstack",
    description:
      "A responsive e-commerce shopping application built with React and TypeScript. Implemented product browsing, cart management, and checkout flows with reusable, strongly-typed components and a fast Vite build pipeline.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/thiri-kyaw-khaing/e-commerce-shopping-app",
        icon: "github",
      },
    ],
  },
  {
    title: "Doi Tung Training Dashboard — Web UI/UX Design",
    year: "2025 — Present",
    category: "uiux",
    description:
      "Web UI/UX and dashboard design for the Doi Tung training management system. Designed a user-friendly dashboard focused on usability and information organization, created responsive layouts and intuitive navigation flows for managing schedules and participants, and developed reusable design components with consistent interface patterns in Figma.",
    tech: ["Figma", "Web UI/UX Design", "Dashboard Design", "Design System"],
    links: [
      {
        label: "Case Study",
        href: "/case-study/doi-tung-dashboard",
        icon: "walkthrough",
      },
      {
        label: "Figma Prototype",
        href: "https://www.figma.com/design/e0WscmFOFsSuAGxI7ZPfG0/Training-Plan-and-Record-Application?node-id=0-1&t=J6oXIRwur2Ddj56B-1",
        icon: "design",
      },
    ],
  },
  {
    title: "RateWise — UI Design",
    year: "2025",
    category: "uiux",
    description:
      "UI design for a review platform that lets students browse and review courses and professors efficiently. Created wireframes and responsive interface layouts focused on readability and interaction, improved user flow and navigation for easier course discovery and review submission, and applied consistent typography, spacing, and modern UI principles.",
    tech: ["Figma", "UI Design", "Responsive Web Design", "Wireframing"],
    links: [
      {
        label: "Case Study",
        href: "/case-study/ratewise",
        icon: "walkthrough",
      },
      {
        label: "Figma Prototype",
        href: "https://www.figma.com/design/hybhd16GDjBvoTeMNBA0VM/C-P-Review-Hub---3NCODE?node-id=0-1&t=qfH8I0o3OVIXQrZD-1",
        icon: "design",
      },
    ],
  },
  {
    title: "MFU Student Election — UI Design",
    year: "2025 — Present",
    category: "uiux",
    description:
      "Interface design for the MFU International Student Election platform. Designed clear, trustworthy voting flows in Figma — candidate browsing, ballot casting, and result views — with an emphasis on transparency, accessibility, and reducing voter error.",
    tech: ["Figma", "UI Design", "Wireframing", "Prototyping"],
    links: [
      {
        label: "Case Study",
        href: "/case-study/mfu-election",
        icon: "walkthrough",
      },
      {
        label: "Figma Prototype",
        href: "https://www.figma.com/design/F9vnGLbfyARlatMVY40EgZ/Untitled?node-id=0-1&t=CKRolCh5XvGb9Aus-1",
        icon: "design",
      },
    ],
  },
  {
    title: "FinFocus — Mobile Finance Management App",
    year: "2025",
    category: "uiux",
    description:
      "A modern finance management mobile app design focused on expense tracking and financial organization. Created low- and high-fidelity wireframes for dashboard, transaction history, and budget management flows, and built interactive, responsive prototypes in Figma with an emphasis on accessibility and clean visual hierarchy.",
    tech: ["Figma", "Mobile UI/UX", "Wireframing", "Prototyping"],
    links: [
      {
        label: "Case Study",
        href: "/case-study/finfocus",
        icon: "walkthrough",
      },
      {
        label: "Figma Prototype",
        href: "https://www.figma.com/design/4x1NYQOdQqjmhspPZFx9Se/Mobile-App?node-id=0-1&t=rWj2QiKyliKwwkUj-1",
        icon: "design",
      },
    ],
  },
  {
    title: "LiffQuestly — LIFF Reward Campaign App",
    year: "Hackathon",
    category: "uiux",
    description:
      "Hackathon project: a reward campaign app built on the LINE Front-end Framework (LIFF). Designed the quest and reward journey in Figma — campaign discovery, task completion, and reward redemption flows — with a playful visual identity optimized for in-chat mobile use.",
    tech: ["Figma", "LIFF", "Mobile UI/UX", "Prototyping"],
    links: [
      {
        label: "Case Study",
        href: "/case-study/liffquestly",
        icon: "walkthrough",
      },
      {
        label: "Figma Prototype",
        href: "https://www.figma.com/design/vU9zgPGwl4YzWAtjVvgZ9C/LIFFQuestly?node-id=0-1&t=5Go7tjlWkhGIKJao-1",
        icon: "design",
      },
    ],
  },
  {
    title: "GetWhatYouNeed (GWN) — E-Commerce App",
    year: "2025",
    category: "uiux",
    description:
      "A 12-screen mobile e-commerce app design system for GetWhatYouNeed — browsing across Electronics, Fashion, Home, Beauty, and Sports categories, flash sales, product details, and a complete checkout flow, built in Figma with Plus Jakarta Sans.",
    tech: ["Figma", "Mobile UI/UX", "E-Commerce", "Design System"],
    links: [
      {
        label: "Case Study",
        href: "/case-study/getwhatyouneed",
        icon: "walkthrough",
      },
      {
        label: "Figma Prototype",
        href: "https://www.figma.com/design/C6gM6XAcqPPd6f7S0ZUgh1/Untitled?node-id=3-27577&t=ytNkuQ4xzXM8dlA4-1",
        icon: "design",
      },
    ],
  },
  {
    title: "MFU International Student Election System",
    year: "2025 — Present",
    category: "ba",
    description:
      "Business analysis case study in requirements engineering: analyzed the existing student election process, documented functional and non-functional requirements for a secure web-based election platform, created user stories, use cases, and acceptance criteria, and designed AS-IS / TO-BE process models backed by stakeholder analysis and risk assessments.",
    tech: [
      "Requirements Engineering",
      "User Stories",
      "AS-IS / TO-BE",
      "Agile",
    ],
    links: [
      {
        label: "Case Study PDF",
        href: "/case-studies/mfu-student-election-case-study.pdf",
        icon: "case",
      },
      {
        label: "Figma Design",
        href: "https://www.figma.com/design/F9vnGLbfyARlatMVY40EgZ/Untitled?node-id=0-1&t=CKRolCh5XvGb9Aus-1",
        icon: "design",
      },
    ],
  },
  {
    title: "Training Plan Management System — BA Case Study",
    year: "2025 — Present",
    category: "ba",
    description:
      "Process optimization case study: analyzed manual, spreadsheet-and-email training workflows to identify inefficiencies, documented requirements for a centralized system, created user stories and process flows connecting trainers, administrators, and participants, and defined business rules for scheduling consistency and role-based access control.",
    tech: [
      "Process Modeling",
      "Requirements Documentation",
      "Business Rules",
      "Agile",
    ],
    links: [
      {
        label: "Case Study PDF",
        href: "/case-studies/doi-tung-training-plan-case-study.pdf",
        icon: "case",
      },
      {
        label: "Figma Design",
        href: "https://www.figma.com/design/e0WscmFOFsSuAGxI7ZPfG0/Training-Plan-and-Record-Application?node-id=0-1&t=J6oXIRwur2Ddj56B-1",
        icon: "design",
      },
    ],
  },
];

export type TimelineItem = {
  period: string;
  title: string;
  org: string;
  description: string;
  type: "experience" | "education";
};

export const timeline: TimelineItem[] = [
  {
    period: "2023 — Present",
    title: "B.Eng. Software Engineering",
    org: "Mae Fah Luang University",
    description:
      "Specializing in Frontend Development, UI/UX Design, and Business Analysis. Coursework in software architecture, HCI, and agile project management.",
    type: "education",
  },
  {
    period: "2025",
    title: "Frontend Developer — Student Projects",
    org: "University & Freelance",
    description:
      "Built responsive web apps with React, Next.js, and Tailwind CSS. Translated Figma designs into pixel-perfect, accessible interfaces.",
    type: "experience",
  },
  {
    period: "2024",
    title: "UI/UX Designer — Design Sprints",
    org: "Hackathons & Coursework",
    description:
      "Led wireframing and prototyping for mobile and web products in Figma. Ran usability tests and iterated designs based on user feedback.",
    type: "experience",
  },
  {
    period: "2024",
    title: "Business Analyst — Team Projects",
    org: "University Capstone",
    description:
      "Elicited requirements from stakeholders, wrote user stories, and modeled processes to align development teams in Agile/Scrum settings using Jira.",
    type: "experience",
  },
];

export type Certification = {
  title: string;
  issuer: string;
  year: string;
  description: string;
  image: string;
  verifyUrl?: string;
};

export const certifications: Certification[] = [
  {
    title: "Business Analysis & Process Management",
    issuer: "Coursera",
    year: "2026",
    description:
      "Hands-on guided project covering business analysis fundamentals — mapping processes, documenting requirements, and applying process management techniques to improve business workflows.",
    image: "/certificates/coursera-business-analysis.jpg",
    verifyUrl: "https://coursera.org/verify/WIBV31P5L2SE",
  },
  {
    title: "AI Fluency: Framework & Foundations",
    issuer: "Anthropic",
    year: "2026",
    description:
      "Anthropic's AI Fluency curriculum on collaborating with AI effectively and responsibly — the 4D framework of Delegation, Description, Discernment, and Diligence for real-world AI workflows.",
    image: "/certificates/anthropic-ai-fluency.jpg",
  },
  {
    title: "Foundations of Digital Marketing and E-commerce",
    issuer: "Google",
    year: "2025",
    description:
      "First course of the Google Digital Marketing & E-commerce Professional Certificate — core concepts of digital marketing, e-commerce, and measuring campaign performance.",
    image: "/certificates/google-digital-marketing.jpg",
    verifyUrl: "https://coursera.org/verify/M6VQ316UJ166",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
