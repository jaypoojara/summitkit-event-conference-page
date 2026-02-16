// ============================================================
// SummitKit — Event & Conference Template Data
// Edit this file to customize your event details
// ============================================================

export const EVENT = {
  name: "TechForward Summit",
  year: "2026",
  tagline: "Where Ideas Converge",
  description:
    "Three days of groundbreaking talks, hands-on workshops, and meaningful connections with 2,000+ engineers, designers, and product leaders shaping the future of technology.",
  dates: {
    start: "2026-03-15",
    end: "2026-03-17",
    display: "March 15–17, 2026",
  },
  location: {
    venue: "Moscone Center West",
    address: "747 Howard Street",
    city: "San Francisco",
    state: "CA",
    zip: "94103",
    country: "United States",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086124709523!2d-122.40141548468188!3d37.78393657975754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807dd6e1e2ff%3A0xb019e6ee6a44e40e!2sMoscone%20Center!5e0!3m2!1sen!2sus!4v1708000000000!5m2!1sen!2sus",
  },
  stats: {
    attendees: "2,000+",
    speakers: "40+",
    tracks: "3",
    days: "3",
    workshops: "12",
    countries: "30+",
  },
  social: {
    twitter: "https://twitter.com/techforwardsummit",
    linkedin: "https://linkedin.com/company/techforwardsummit",
    youtube: "https://youtube.com/@techforwardsummit",
    instagram: "https://instagram.com/techforwardsummit",
  },
};

export interface Speaker {
  id: string;
  name: string;
  title: string;
  company: string;
  bio: string;
  topic: string;
  avatar: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    website?: string;
  };
}

export const SPEAKERS: Speaker[] = [
  {
    id: "sarah-chen",
    name: "Dr. Sarah Chen",
    title: "AI Research Lead",
    company: "DeepMind",
    bio: "Dr. Sarah Chen leads responsible AI research at DeepMind, focusing on alignment and safety in large-scale AI systems. She holds a Ph.D. from MIT and has published over 50 papers on machine learning fairness and interpretability.",
    topic: "The Future of Responsible AI",
    avatar: "SC",
    social: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: "marcus-johnson",
    name: "Marcus Johnson",
    title: "Chief Technology Officer",
    company: "Stripe",
    bio: "Marcus has been building financial infrastructure for over 15 years. At Stripe, he leads the engineering organization responsible for processing billions of dollars in payments across 46 countries.",
    topic: "Building Financial Infrastructure for Tomorrow",
    avatar: "MJ",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: "priya-sharma",
    name: "Priya Sharma",
    title: "VP of Engineering",
    company: "Figma",
    bio: "Priya leads the design systems team at Figma, where she's built the infrastructure that powers collaboration for millions of designers. Previously, she led frontend architecture at Airbnb.",
    topic: "Design Systems at Scale",
    avatar: "PS",
    social: {
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: "james-rodriguez",
    name: "James Rodriguez",
    title: "Head of Product",
    company: "Vercel",
    bio: "James drives the product vision for Vercel's developer platform, shaping how millions of developers build and deploy web applications. He's passionate about developer experience and the future of the web.",
    topic: "The Edge of Web Development",
    avatar: "JR",
    social: {
      twitter: "#",
      github: "#",
      website: "#",
    },
  },
  {
    id: "amara-okafor",
    name: "Amara Okafor",
    title: "Director of Cloud Architecture",
    company: "AWS",
    bio: "Amara architects cloud solutions at AWS, specializing in serverless and event-driven systems. She has helped Fortune 500 companies migrate critical infrastructure and is a frequent keynote speaker at cloud conferences worldwide.",
    topic: "Serverless Architecture Patterns",
    avatar: "AO",
    social: {
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: "david-kim",
    name: "David Kim",
    title: "Principal Engineer",
    company: "Google",
    bio: "David is a principal engineer at Google working on WebAssembly and browser performance. He's a core contributor to the V8 engine and has been instrumental in bringing Wasm to production workloads.",
    topic: "WebAssembly: Beyond the Browser",
    avatar: "DK",
    social: {
      twitter: "#",
      github: "#",
    },
  },
  {
    id: "elena-volkov",
    name: "Elena Volkov",
    title: "Head of Security Engineering",
    company: "Cloudflare",
    bio: "Elena leads security engineering at Cloudflare, protecting millions of websites from threats. With a background in cryptography and network security, she's a recognized authority on zero-trust architecture.",
    topic: "Zero Trust in Practice",
    avatar: "EV",
    social: {
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: "alex-torres",
    name: "Alex Torres",
    title: "CEO & Co-founder",
    company: "Linear",
    bio: "Alex co-founded Linear to rethink project management for engineering teams. Under his leadership, Linear has grown to serve thousands of teams and pioneered the product-led growth model in the developer tools space.",
    topic: "Product-Led Growth Engineering",
    avatar: "AT",
    social: {
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: "rachel-green",
    name: "Rachel Green",
    title: "Staff ML Engineer",
    company: "OpenAI",
    bio: "Rachel works on the applied ML team at OpenAI, helping developers integrate large language models into production applications. She previously built ML infrastructure at Meta and has a deep focus on practical AI deployment.",
    topic: "Building Production LLM Applications",
    avatar: "RG",
    social: {
      twitter: "#",
      github: "#",
    },
  },
  {
    id: "yuki-tanaka",
    name: "Yuki Tanaka",
    title: "Platform Engineering Lead",
    company: "Spotify",
    bio: "Yuki leads Spotify's platform engineering team, managing the microservices infrastructure that serves 600 million users. She's a recognized expert in distributed systems and developer experience.",
    topic: "Scaling Microservices to 600M Users",
    avatar: "YT",
    social: {
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: "omar-hassan",
    name: "Omar Hassan",
    title: "Head of Developer Relations",
    company: "GitHub",
    bio: "Omar leads developer relations at GitHub, fostering the world's largest open-source community. He's built developer programs that have reached millions of developers and is a passionate advocate for open-source sustainability.",
    topic: "Building Thriving Open Source Communities",
    avatar: "OH",
    social: {
      twitter: "#",
      github: "#",
      website: "#",
    },
  },
  {
    id: "lisa-park",
    name: "Lisa Park",
    title: "Senior Distributed Systems Architect",
    company: "Netflix",
    bio: "Lisa architects Netflix's real-time data pipeline, processing petabytes of data daily. She's a leading voice in event-driven architecture and has contributed to several open-source projects in the streaming space.",
    topic: "Real-time Systems at Netflix Scale",
    avatar: "LP",
    social: {
      twitter: "#",
      linkedin: "#",
    },
  },
];

export interface ScheduleSession {
  id: string;
  time: string;
  endTime: string;
  title: string;
  speakerId?: string;
  track: "main" | "workshop-a" | "workshop-b" | "networking";
  room: string;
  type: "keynote" | "talk" | "workshop" | "panel" | "break" | "networking" | "lightning";
  description?: string;
}

export interface ScheduleDay {
  date: string;
  label: string;
  sessions: ScheduleSession[];
}

export const SCHEDULE: ScheduleDay[] = [
  {
    date: "2026-03-15",
    label: "Day 1 — March 15",
    sessions: [
      {
        id: "d1-s1",
        time: "8:00 AM",
        endTime: "9:30 AM",
        title: "Registration & Breakfast",
        track: "networking",
        room: "Main Lobby",
        type: "break",
        description: "Pick up your badge, grab coffee, and meet fellow attendees.",
      },
      {
        id: "d1-s2",
        time: "10:00 AM",
        endTime: "11:00 AM",
        title: "The Future of Responsible AI",
        speakerId: "sarah-chen",
        track: "main",
        room: "Main Stage",
        type: "keynote",
        description:
          "Opening keynote exploring how we build AI systems that are not only powerful but aligned with human values.",
      },
      {
        id: "d1-s3",
        time: "11:30 AM",
        endTime: "12:15 PM",
        title: "Building Financial Infrastructure for Tomorrow",
        speakerId: "marcus-johnson",
        track: "main",
        room: "Main Stage",
        type: "talk",
        description:
          "How Stripe is rethinking payment infrastructure for the next decade of global commerce.",
      },
      {
        id: "d1-s4",
        time: "11:30 AM",
        endTime: "12:45 PM",
        title: "Design Systems Workshop: From Zero to Scale",
        speakerId: "priya-sharma",
        track: "workshop-a",
        room: "Workshop Hall A",
        type: "workshop",
        description:
          "Hands-on workshop building a design system from scratch using modern tooling and component architecture.",
      },
      {
        id: "d1-s5",
        time: "12:15 PM",
        endTime: "1:30 PM",
        title: "Lunch Break",
        track: "networking",
        room: "Exhibition Hall",
        type: "break",
        description: "Catered lunch with sponsor booths and networking.",
      },
      {
        id: "d1-s6",
        time: "1:30 PM",
        endTime: "2:15 PM",
        title: "The Edge of Web Development",
        speakerId: "james-rodriguez",
        track: "main",
        room: "Main Stage",
        type: "talk",
        description:
          "How edge computing is transforming web development and what it means for your next project.",
      },
      {
        id: "d1-s7",
        time: "1:30 PM",
        endTime: "2:45 PM",
        title: "Cloud Architecture Patterns Workshop",
        speakerId: "amara-okafor",
        track: "workshop-a",
        room: "Workshop Hall A",
        type: "workshop",
        description:
          "Deep dive into serverless patterns: event sourcing, CQRS, and saga orchestration on AWS.",
      },
      {
        id: "d1-s8",
        time: "3:00 PM",
        endTime: "3:45 PM",
        title: "WebAssembly: Beyond the Browser",
        speakerId: "david-kim",
        track: "main",
        room: "Main Stage",
        type: "talk",
        description:
          "Exploring Wasm's potential in server-side applications, edge functions, and embedded systems.",
      },
      {
        id: "d1-s9",
        time: "3:00 PM",
        endTime: "4:15 PM",
        title: "Zero Trust Security Workshop",
        speakerId: "elena-volkov",
        track: "workshop-b",
        room: "Workshop Hall B",
        type: "workshop",
        description:
          "Hands-on implementation of zero-trust architecture patterns for modern applications.",
      },
      {
        id: "d1-s10",
        time: "5:00 PM",
        endTime: "7:00 PM",
        title: "Welcome Reception & Networking",
        track: "networking",
        room: "Rooftop Terrace",
        type: "networking",
        description:
          "Drinks, appetizers, and live music. The perfect way to kick off three days of learning.",
      },
    ],
  },
  {
    date: "2026-03-16",
    label: "Day 2 — March 16",
    sessions: [
      {
        id: "d2-s1",
        time: "8:30 AM",
        endTime: "9:30 AM",
        title: "Breakfast & Coffee",
        track: "networking",
        room: "Main Lobby",
        type: "break",
      },
      {
        id: "d2-s2",
        time: "10:00 AM",
        endTime: "10:45 AM",
        title: "Product-Led Growth Engineering",
        speakerId: "alex-torres",
        track: "main",
        room: "Main Stage",
        type: "talk",
        description:
          "How engineering decisions drive product adoption — lessons from building Linear.",
      },
      {
        id: "d2-s3",
        time: "10:00 AM",
        endTime: "11:30 AM",
        title: "Building Production LLM Applications",
        speakerId: "rachel-green",
        track: "workshop-a",
        room: "Workshop Hall A",
        type: "workshop",
        description:
          "From prototype to production: RAG pipelines, fine-tuning, evaluation, and deployment strategies.",
      },
      {
        id: "d2-s4",
        time: "11:00 AM",
        endTime: "11:45 AM",
        title: "Scaling Microservices to 600M Users",
        speakerId: "yuki-tanaka",
        track: "main",
        room: "Main Stage",
        type: "talk",
        description:
          "Lessons from Spotify's journey scaling microservices and building internal developer platforms.",
      },
      {
        id: "d2-s5",
        time: "11:00 AM",
        endTime: "11:45 AM",
        title: "Building Thriving Open Source Communities",
        speakerId: "omar-hassan",
        track: "workshop-b",
        room: "Workshop Hall B",
        type: "talk",
        description:
          "Strategies for building sustainable open-source projects that attract and retain contributors.",
      },
      {
        id: "d2-s6",
        time: "12:00 PM",
        endTime: "1:15 PM",
        title: "Lunch & Sponsor Showcase",
        track: "networking",
        room: "Exhibition Hall",
        type: "break",
        description: "Explore sponsor booths, demos, and grab lunch.",
      },
      {
        id: "d2-s7",
        time: "1:30 PM",
        endTime: "2:15 PM",
        title: "Real-time Systems at Netflix Scale",
        speakerId: "lisa-park",
        track: "main",
        room: "Main Stage",
        type: "talk",
        description:
          "How Netflix processes petabytes of real-time data for personalization and content delivery.",
      },
      {
        id: "d2-s8",
        time: "1:30 PM",
        endTime: "2:30 PM",
        title: "Panel: The Future of Engineering Leadership",
        track: "workshop-a",
        room: "Workshop Hall A",
        type: "panel",
        description:
          "Industry leaders discuss evolving engineering management, remote teams, and AI-assisted development.",
      },
      {
        id: "d2-s9",
        time: "3:00 PM",
        endTime: "4:30 PM",
        title: "Lightning Talks",
        track: "main",
        room: "Main Stage",
        type: "lightning",
        description:
          "Ten 8-minute talks covering everything from new frameworks to unconventional debugging techniques.",
      },
      {
        id: "d2-s10",
        time: "5:00 PM",
        endTime: "7:00 PM",
        title: "Speaker Dinner",
        track: "networking",
        room: "Private Dining Room",
        type: "networking",
        description: "Exclusive dinner with speakers. VIP ticket holders only.",
      },
    ],
  },
  {
    date: "2026-03-17",
    label: "Day 3 — March 17",
    sessions: [
      {
        id: "d3-s1",
        time: "8:30 AM",
        endTime: "9:30 AM",
        title: "Breakfast",
        track: "networking",
        room: "Main Lobby",
        type: "break",
      },
      {
        id: "d3-s2",
        time: "10:00 AM",
        endTime: "12:00 PM",
        title: "Unconference & Open Spaces",
        track: "workshop-a",
        room: "Workshop Halls A & B",
        type: "workshop",
        description:
          "Attendee-driven sessions. Propose a topic, gather a group, and dive deep.",
      },
      {
        id: "d3-s3",
        time: "10:00 AM",
        endTime: "11:00 AM",
        title: "Panel: AI, Ethics & the Developer's Role",
        track: "main",
        room: "Main Stage",
        type: "panel",
        description:
          "A candid conversation about the responsibilities of developers building AI-powered products.",
      },
      {
        id: "d3-s4",
        time: "11:30 AM",
        endTime: "12:15 PM",
        title: "The State of Web Performance in 2026",
        track: "main",
        room: "Main Stage",
        type: "talk",
        description:
          "Data-driven analysis of web performance trends and what top-performing teams do differently.",
      },
      {
        id: "d3-s5",
        time: "12:30 PM",
        endTime: "1:30 PM",
        title: "Farewell Lunch",
        track: "networking",
        room: "Exhibition Hall",
        type: "break",
        description: "Final lunch together before the closing keynote.",
      },
      {
        id: "d3-s6",
        time: "2:00 PM",
        endTime: "3:00 PM",
        title: "Closing Keynote: Building What Matters",
        track: "main",
        room: "Main Stage",
        type: "keynote",
        description:
          "A powerful closing talk on purpose-driven engineering and the impact we can make as technologists.",
      },
      {
        id: "d3-s7",
        time: "3:30 PM",
        endTime: "5:00 PM",
        title: "Farewell Networking & Photo Wall",
        track: "networking",
        room: "Main Lobby",
        type: "networking",
        description:
          "Exchange contacts, take photos at the community wall, and say goodbye — until next year.",
      },
    ],
  },
];

export interface TicketTier {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  features: string[];
  highlighted: boolean;
  badge?: string;
  cta: string;
}

export const TICKETS: TicketTier[] = [
  {
    id: "early-bird",
    name: "Early Bird",
    price: 299,
    originalPrice: 499,
    description: "Limited availability — grab yours before they're gone.",
    features: [
      "All main stage talks",
      "3 days of content",
      "Catered breakfast & lunch",
      "Conference swag bag",
      "Community Slack access",
      "Session recordings (30-day access)",
    ],
    highlighted: false,
    badge: "40% Off",
    cta: "Grab Early Bird",
  },
  {
    id: "general",
    name: "General",
    price: 499,
    description: "The full conference experience, no compromises.",
    features: [
      "Everything in Early Bird",
      "All workshop sessions",
      "Networking events access",
      "Session recordings (lifetime)",
      "Attendee directory access",
      "Certificate of attendance",
    ],
    highlighted: true,
    badge: "Most Popular",
    cta: "Get Your Ticket",
  },
  {
    id: "vip",
    name: "VIP",
    price: 899,
    description: "The ultimate experience for serious professionals.",
    features: [
      "Everything in General",
      "Front-row reserved seating",
      "Exclusive speaker dinner",
      "1-on-1 sessions with speakers",
      "VIP lounge access",
      "Priority workshop enrollment",
      "Complimentary hotel shuttle",
    ],
    highlighted: false,
    badge: "All Access",
    cta: "Go VIP",
  },
];

export interface Sponsor {
  name: string;
  tier: "gold" | "silver" | "bronze";
  logo?: string;
}

export const SPONSORS: Sponsor[] = [
  { name: "TechCorp", tier: "gold" },
  { name: "InnovateLabs", tier: "gold" },
  { name: "CloudScale", tier: "gold" },
  { name: "DevTools Inc", tier: "silver" },
  { name: "CodeStream", tier: "silver" },
  { name: "DataFlow", tier: "silver" },
  { name: "NetPrime", tier: "silver" },
  { name: "StartupKit", tier: "bronze" },
  { name: "BuildFast", tier: "bronze" },
  { name: "CodeCraft", tier: "bronze" },
  { name: "WebForge", tier: "bronze" },
  { name: "PixelPerfect", tier: "bronze" },
  { name: "APIHub", tier: "bronze" },
];

export interface ReplaySession {
  id: string;
  title: string;
  speaker: string;
  duration: string;
  thumbnail?: string;
}

export const REPLAYS: ReplaySession[] = [
  {
    id: "r1",
    title: "The Future of Responsible AI",
    speaker: "Dr. Sarah Chen",
    duration: "52 min",
  },
  {
    id: "r2",
    title: "Building Financial Infrastructure",
    speaker: "Marcus Johnson",
    duration: "41 min",
  },
  {
    id: "r3",
    title: "The Edge of Web Development",
    speaker: "James Rodriguez",
    duration: "38 min",
  },
  {
    id: "r4",
    title: "Product-Led Growth Engineering",
    speaker: "Alex Torres",
    duration: "44 min",
  },
  {
    id: "r5",
    title: "Real-time Systems at Netflix Scale",
    speaker: "Lisa Park",
    duration: "47 min",
  },
  {
    id: "r6",
    title: "Scaling Microservices to 600M Users",
    speaker: "Yuki Tanaka",
    duration: "39 min",
  },
];

export const TRACKS = [
  { id: "all", label: "All Tracks" },
  { id: "main", label: "Main Stage" },
  { id: "workshop-a", label: "Workshop Hall A" },
  { id: "workshop-b", label: "Workshop Hall B" },
  { id: "networking", label: "Networking" },
] as const;

export const NAV_LINKS = [
  { label: "Schedule", href: "#schedule" },
  { label: "Speakers", href: "#speakers" },
  { label: "Tickets", href: "#tickets" },
  { label: "Venue", href: "#venue" },
  { label: "Sponsors", href: "#sponsors" },
] as const;
