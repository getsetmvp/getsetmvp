export const SITE_CONFIG = {
  name: "GetSetMVP",
  tagline: "Your Idea, Live in 2 Weeks",
  description: "Stop dreaming, start building. Get your MVP up and running in just 2-3 weeks.",
  cta: "Get Your Idea Online Today"
} as const;

export const HERO_SECTION = {
  title: "Your Idea, Live in 2 Weeks",
  subtitle: "Stop dreaming, start building. Get your MVP up and running in just 2-3 weeks.",
  ctaButton: "Turn Your Idea Into Reality →"
} as const;

export const STARTUP_STRUGGLE = {
  title: "The Startup Struggle is Real",
  subtitle: "You have a brilliant idea, but it's stuck in your head. Why?",
  points: [
    {
      icon: "💰",
      title: "High Development Costs",
      description: "Developers are expensive, freelancers are unreliable, and agencies take ages to even start working."
    },
    {
      icon: "🕒",
      title: "The Endless Waiting Game",
      description: "Months of back-and-forth, missed deadlines, and still no results."
    },
    {
      icon: "🧩",
      title: "Perfectionist Paralysis",
      description: "You think you need the perfect product from day one, but the truth is, you just need to start."
    },
    {
      icon: "⚙️",
      title: "Technical Overwhelm",
      description: "Coding, hosting, databases - it's all too much to build it yourself from scratch."
    }
  ]
} as const;

export const RESULTS_SECTION = {
  title: "THE RESULT?",
  subtitle: "IDEAS THAT NEVER SEE DAYLIGHT, WASTED\nRESOURCES, AND MISSED MARKET OPPORTUNITIES.",
  stats: [
    {
      value: "90%",
      description: "of startups fail before reaching product-market fit"
    },
    {
      value: "6-12 months",
      description: "average time to develop a full-featured product"
    },
    {
      value: "$0",
      description: "revenue generated while stuck in development"
    }
  ]
} as const;

export const FOUNDER_INFO = {
  title: "Meet The Founder",
  description: "Hi, I'm Ibtesam, the founder of GetSetMVP. I have over 8 years of experience in web development, working with startups from pre-seed to Series A. I've built products for companies like TechCorp, StartupXYZ, and helped dozens of entrepreneurs turn their ideas into reality.",
  story: "After launching 7 MVPs within 2 years in Dubai, I realized my calling was helping entrepreneurs transform their vision into actionable products. Now I'm dedicated to helping you do the same - quickly, affordably, and without the typical development headaches.",
  cta: "Book a Free Call",
  achievements: "Launched 50+ MVPs • 95% Client Satisfaction • 8 Years Experience"
} as const;

export const TWO_WEEKS_SECTION = {
  title: "2 WEEKS. THAT'S IT.",
  points: [
    {
      icon: "🚀",
      title: "FAST AF",
      description: "From idea to live site in 14 days."
    },
    {
      icon: "💸",
      title: "AFFORDABLE",
      description: "A fraction of what agencies or developers charge."
    },
    {
      icon: "🚫",
      title: "NO FLUFF",
      description: "Just the features you need. Nothing more."
    },
    {
      icon: "✅",
      title: "WE GOT THIS",
      description: "You sit back. We build and ship everything."
    }
  ],
  cta: "READY?",
  ctaButton: "Get Started Now"
} as const;

export const PROCESS_STEPS = {
  title: "From Idea to MVP in 4 Simple Steps",
  steps: [
    {
      step: "1",
      title: "Idea Dump",
      description: "Tell us your vision, target audience, and key features you want.",
      icon: "idea.svg"
    },
    {
      step: "2",
      title: "MVP Blueprint",
      description: "We create a focused plan and wireframes for your MVP.",
      icon: "compute.svg"
    },
    {
      step: "3",
      title: "Rapid Build",
      description: "Our team builds your MVP using proven frameworks and tools.",
      icon: "rocket.svg"
    },
    {
      step: "4",
      title: "Launch & Iterate",
      description: "We deploy your MVP and help you gather user feedback for improvements.",
      icon: "stats.svg"
    }
  ]
} as const;

export const QUALITY_FIRST = {
  title: "Quality First",
  description: "Fast doesn't mean cheap. Every MVP is built to last, scale, and grow with your business. We use industry-standard frameworks and best practices."
} as const;

export const PROJECTS_BUILT = {
  title: "Projects Built",
  projects: [
    {
      name: "FitTrack",
      description: "Comprehensive fitness tracker app with custom workout routine builder, progress tracking, and analytics. Users can create personalized workouts and monitor their fitness journey.",
      image: "/images/fittrack.jpg",
      url: "https://fittrack.getsetmvp.com"
    },
    {
      name: "Restabook - Italian Restaurant",
      description: "Full-featured Italian restaurant website with online reservation booking, digital menu display, food ordering system, customer reviews, and restaurant information management.",
      image: "/images/restabook.png",
      url: "https://restabook.getsetmvp.com"
    }
  ]
} as const;

export const PRICING = {
  title: "Simple Pricing, Explosive Value",
  price: "$979 Launch Price",
  originalPrice: "",
  savings: "",
  features: [
    "One Full Core Feature of Your Choice",
    "User authentication and landing page",
    "Fast 2-Week Development",
    "Responsive design",
    "2 Rounds of Changes & Updates"
  ],
  guarantee: "",
  note: "First 3 clients get started at $979 before prices increase",
  cta: "Book a Call",
  spotCount: "3 spots left"
} as const;

export const FAQ_ITEMS = [
  {
    question: "What exactly do I get with my MVP?",
    answer: "You get a fully functional web application with user authentication, database integration, responsive design, and basic features needed to validate your idea. We also include hosting setup and launch support."
  },
  {
    question: "What if I need changes after the 2-week build?",
    answer: "We include one round of minor revisions. For major changes or additional features, we offer affordable post-launch development packages."
  },
  {
    question: "Do you only work with startups founders?",
    answer: "While we specialize in startups, we work with anyone who has a validated business idea and wants to build an MVP quickly and affordably."
  },
  {
    question: "What happens after my MVP launches?",
    answer: "We provide launch support and can help you with ongoing maintenance, feature additions, and scaling as your business grows."
  },
  {
    question: "Do you provide templates?",
    answer: "No, each MVP is custom-built for your specific needs and requirements. We don't use templates - we build from scratch using modern frameworks and best practices."
  }
] as const;

export const FINAL_CTA = {
  title: "Ready to Turn Your Idea Into Reality?",
  subtitle: "Don't let your brilliant idea become another \"what if\". Let's build your MVP in just 2-3 weeks and get you on the fast track to startup success!",
  primaryButton: "Book a Call",
  secondaryButton: "Share your idea"
} as const;

export const FOOTER = {
  name: "GetSetMVP",
  links: {
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    contact: "Contact"
  }
} as const;
