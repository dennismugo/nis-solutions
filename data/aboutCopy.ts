export const LAST_REVIEWED = {
  display: "26 November 2026",
  iso: "2026-11-26",
};

export interface EngagementStep {
  step: string;
  title: string;
  desc: string;
  deliverable?: string;
}

export interface FaqEntry {
  q: string;
  a: string;
}

export interface ChallengeItem {
  symptom: string;
  impact: string;
}

export interface SolutionCopyItem {
  seoTitle: string;
  metaDescription: string;
  h1: string;
  answerFirst: string;
  problem: string;
  challenges?: (string | ChallengeItem)[];
  lighterNote?: string;
  engagementStepsHeading?: string;
  engagementSteps?: EngagementStep[];
  controlsHeading?: string;
  controls?: string[];
  whoItIsFor?: string;
  isForYou?: {
    yes: string;
    no?: string;
  };
  whatWeDoHeading?: string;
  whatWeDo: string[];
  whatYouGetHeading?: string;
  whatYouGet: string[];
  firstStep?: {
    title: string;
    desc: string;
  };
  whatsappPrefill?: string;
  faqs: FaqEntry[];
  ctaText: string;
  secondaryCtaText?: string;
  relatedSlugs?: string[];
}

export const ABOUT_COPY = {
  seoTitle:
    "About Nile ICT Solutions | ICT, Software and Business Systems Partner in Nairobi",
  metaDescription:
    "Nile ICT Solutions is a Nairobi technology company supplying genuine ICT equipment and building networks, security, software and business systems for organisations across Kenya.",
  hero: {
    eyebrow: "About Nile ICT Solutions",
    h1: "A technology partner you can actually talk to.",
    subheading:
      "Nile ICT Solutions exists to make technology the quiet part of your business: genuine equipment, dependable systems and a team that picks up the phone long after the project is signed off.",
    primaryCta: "Talk to Us",
    secondaryCta: "How we work",
    answerFirst:
      "Nile ICT Solutions is a Nairobi-based technology partner serving organisations across Kenya from Posta Building on Tom Mboya Street. We supply genuine, warranted ICT equipment, design and maintain networks and security systems, build custom software, and implement core banking, insurance and document management platforms.",
  },
  proofPillars: [
    {
      num: "01",
      title: "Genuine",
      desc: "Real products sourced from reputable manufacturers and distributors, with transparent warranty documentation.",
    },
    {
      num: "02",
      title: "Joined-up",
      desc: "Networks, equipment, security, software and business systems planned as one coherent environment.",
    },
    {
      num: "03",
      title: "Plain-spoken",
      desc: "Assessments, written proposals and architecture explained in language leaders and teams can act on.",
    },
    {
      num: "04",
      title: "Accountable",
      desc: "Clear project ownership during delivery and a direct team you can reach long after go-live.",
    },
  ],
  atAGlance: [
    { label: "Company", value: "Nile ICT Solutions · Nairobi, Kenya" },
    {
      label: "What we do",
      value:
        "ICT infrastructure and security, software and applications, business systems (core banking, insurance management, document management), digital services, and genuine ICT equipment supply",
    },
    {
      label: "Office location",
      value: "Posta Building, Tom Mboya Street, Nairobi CBD, Kenya",
    },
    {
      label: "Serving",
      value: "Organisations across Nairobi and wider Kenya",
    },
    {
      label: "Key sectors",
      value:
        "Banking and finance, insurance, hospitality, NGOs and development, education, and corporate enterprises",
    },
    {
      label: "Hours & reach",
      value: "Mon–Fri: 8:00 AM – 5:00 PM · Sat: 9:00 AM – 1:00 PM · +254 795 121 583",
    },
  ],
  whoWeAre: {
    eyebrow: "Who We Are",
    h2: "Built for practical, reliable execution.",
    paragraphs: [
      "Nile ICT Solutions is a Nairobi-based technology company. We supply genuine ICT equipment, build and support networks and security systems, develop software and apps, and implement business systems such as core banking, insurance management and document management, for organisations across Kenya.",
      "We are a team of engineers, technicians and consultants who would rather explain a problem clearly than impress you with jargon.",
    ],
  },
  ourStory: {
    eyebrow: "Our Story",
    h2: "Why we’re called Nile.",
    text1:
      "A great river doesn’t make noise about its work. It connects places, feeds what grows beside it and carries things further than they could travel alone. That is how we think about technology. The best systems don’t demand attention. They connect your people, protect what matters and move the business forward, steadily, every day.",
    text2:
      "We also started from a frustration many Kenyan organisations share. The market has no shortage of counterfeit and substandard equipment, and the people who pay for it are usually the ones who trusted the cheapest quote. A router that fails in a month. A camera that records nothing. A battery that doesn’t hold. We built Nile ICT Solutions around being the partner who finds you the genuine product, installs it properly and is still there when you need it.",
  },
  mission: {
    label: "Our Mission",
    text: "To make technology dependable for Kenyan organisations by supplying genuine equipment, building and connecting the systems they run on, and standing behind every project after it goes live.",
  },
  vision: {
    label: "Our Vision",
    text: "A Kenya where every organisation, large or small, runs on technology it can trust and a partner it can reach.",
  },
  promise: {
    label: "Our Promise",
    text: "You will always know who is doing what, what it will cost, when it will be done and who to call afterwards.",
  },
  principles: {
    eyebrow: "What We Stand For",
    h2: "Six values we work by.",
    items: [
      {
        num: "1",
        title: "Integrity.",
        desc: "We supply genuine products with real warranties, and we tell you plainly whether we build a system, implement it, integrate it or support it. Nothing is overstated.",
      },
      {
        num: "2",
        title: "Clarity.",
        desc: "If we can’t explain it in plain language, we haven’t understood it well enough. Proposals, invoices and reports are written to be read.",
      },
      {
        num: "3",
        title: "Listening first.",
        desc: "The right answer depends on your problem, not on what we happen to sell. We recommend what fits, and say so when something is better handled elsewhere.",
      },
      {
        num: "4",
        title: "Craftsmanship.",
        desc: "Clean cabling, documented networks, tested software. The parts nobody sees get the same care as the parts everyone does.",
      },
      {
        num: "5",
        title: "Accountability.",
        desc: "There is always a named person responsible for your project, and they answer when you call.",
      },
      {
        num: "6",
        title: "Long-term thinking.",
        desc: "We design for the day after launch, not just the day of it, because that is when a system proves itself.",
      },
    ],
  },
  whyStay: {
    eyebrow: "Why Organisations Choose Us",
    h2: "Five reasons clients stay.",
    items: [
      {
        num: "01",
        title: "Genuine products, honestly sourced.",
        desc: "Equipment sourced through reputable distributors and manufacturers, supplied with transparent documentation and clear warranty terms.",
      },
      {
        num: "02",
        title: "One accountable team.",
        desc: "Networks, security, software and business systems under one roof means nothing falls between separate suppliers.",
      },
      {
        num: "03",
        title: "Advice before sales.",
        desc: "Every project begins with a technical assessment and a written, itemised proposal covering scope, timeline and cost.",
      },
      {
        num: "04",
        title: "Plain-language reporting.",
        desc: "Progress updates and technical recommendations written clearly, with no jargon to decode.",
      },
      {
        num: "05",
        title: "We stay after go-live.",
        desc: "Maintenance, health checks and responsive follow-up after launch, with an engineering team you can reach directly.",
      },
    ],
  },
  howWeWork: {
    eyebrow: "Delivery Framework",
    h2: "From first conversation to dependable results.",
    steps: [
      {
        num: "01",
        title: "Discover",
        desc: "We listen, visit your premises where needed and learn how your organisation really works.",
      },
      {
        num: "02",
        title: "Design",
        desc: "We write the plan: scope, approach, timeline and cost, in plain language.",
      },
      {
        num: "03",
        title: "Build or implement",
        desc: "Our team does the work, with regular check-ins and demos so nothing is a surprise.",
      },
      {
        num: "04",
        title: "Deploy",
        desc: "We launch carefully, test properly and train your people so the change sticks.",
      },
      {
        num: "05",
        title: "Support",
        desc: "Updates, monitoring, health checks and a direct number you can call.",
      },
    ],
  },
  whatItIsLike: {
    h2: "What it’s like to work with us",
    text: "You’ll get questions before answers. You’ll get a plan you can read, in words you’d use yourself. You’ll get regular updates, so progress is never a mystery. And when something needs attention, you’ll know exactly who to call.",
  },
  whatWeDo: {
    eyebrow: "Capabilities",
    h2: "From the cable in the wall to the dashboard in the boardroom.",
    items: [
      {
        title: "Enterprise ICT infrastructure and security",
        desc: "IT consulting, networking and structured cabling, cybersecurity, CCTV and security systems, and managed IT support.",
        href: "/services#infrastructure",
        cta: "Explore infrastructure services",
      },
      {
        title: "Software and digital engineering",
        desc: "Custom software, web and mobile applications, process automation and system integrations.",
        href: "/services#software",
        cta: "Explore software services",
      },
      {
        title: "Enterprise business solutions",
        desc: "Core banking, insurance management, document management and operational systems planned, implemented and supported clearly.",
        href: "/solutions",
        cta: "Explore business solutions",
      },
      {
        title: "Digital growth",
        desc: "Business websites built for search and clarity, online visibility and measurable digital campaigns.",
        href: "/services/website-development",
        cta: "Explore website development",
      },
      {
        title: "ICT equipment and office setup",
        desc: "Genuine computers, networking hardware, office furniture, stationery and consumables, plus full office setup and relocation.",
        href: "/services/equipment-supply",
        cta: "Explore equipment & workplace",
      },
    ],
  },
  whoWeWorkWith: {
    h2: "Built for organisations that can’t afford downtime.",
    text: "Financial institutions, insurers and brokers, hospitality groups, NGOs, schools and growing businesses across Kenya depend on technology to operate. That is who we are built for.",
  },
  dataStewardship: {
    eyebrow: "Data Governance",
    h2: "Your information is handled with care.",
    text: "We work inside your networks, systems and records, so we treat your data seriously. We align our working practices with the principles of Kenya’s Data Protection Act, 2019, limit access strictly to what each project requires, and document every change we make.",
  },
  ourPeople: {
    h2: "The people behind the work.",
    text: "Technology is designed, installed and supported by accountable specialists. Whether you need infrastructure engineers or systems analysts, you speak directly with the people responsible for your delivery.",
  },
  joinTeam: {
    h2: "Work with us",
    text: "We’re always glad to meet network engineers, technicians, software developers and systems consultants who enjoy fixing real operational problems cleanly.",
    ctaText: "Introduce yourself to the team",
  },
  faqs: [
    {
      q: "What is Nile ICT Solutions?",
      a: "Nile ICT Solutions is a Nairobi-based technology company that supplies genuine ICT equipment, builds and supports networks and security systems, develops custom software and implements business systems for organisations across Kenya.",
    },
    {
      q: "Where is Nile ICT Solutions based?",
      a: "Our offices are located in Nairobi’s Central Business District at Posta Building on Tom Mboya Street.",
    },
    {
      q: "Does Nile ICT Solutions supply genuine products?",
      a: "Yes. We source hardware from reputable manufacturers and distributors and provide clear documentation and product warranty details upfront.",
    },
    {
      q: "What does Nile ICT Solutions do besides hardware installation?",
      a: "We also provide IT consulting, cybersecurity, custom software and mobile application development, core banking, insurance and document management implementation, websites, digital growth and post-launch support.",
    },
    {
      q: "Do you work outside Nairobi?",
      a: "Yes. While our workshop and head office are in Nairobi CBD, we support organisations, branches, campuses and hospitality properties across Kenya.",
    },
    {
      q: "How do we start a project with you?",
      a: "With a practical conversation. Tell us what is slowing you down or what you need to put in place. We assess your environment first, then share an itemised written proposal covering scope, timeline and cost.",
    },
    {
      q: "Is Nile ICT Solutions affiliated with companies sharing a similar name outside Kenya?",
      a: "No. Nile ICT Solutions is an independent Kenyan technology partner based in Nairobi CBD at Posta Building, Tom Mboya Street.",
    },
  ],
  closing: {
    h2: "Let’s talk about what you’re building.",
    body: "Whether you have a clear brief or only a frustration, we’re happy to listen. A practical first conversation often saves time, avoids costly missteps and clarifies what should come next.",
    button: "Talk to Us",
  },
};
