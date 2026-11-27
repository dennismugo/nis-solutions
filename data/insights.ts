export interface InsightItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  dateIso: string;
  lastReviewed: string;
  author: {
    name: string;
    role: string;
  };
  excerpt: string;
  relatedService: {
    label: string;
    href: string;
  };
  content: {
    heading: string;
    paragraphs: string[];
  }[];
  faq: {
    question: string;
    answer: string;
  };
}

export const INSIGHTS_PAGE_COPY = {
  seoTitle: "Technology Insights & Guides for Kenyan Organisations | Nile ICT",
  metaDescription:
    "Practical insights on ICT equipment authenticity, Data Protection Act CCTV design, insurance reporting, networking and business systems for organisations in Kenya.",
  h1: "Straight answers to important technology questions.",
  answerFirst:
    "Nile ICT Solutions publishes practical technology guides for leaders, IT teams and procurement managers in Nairobi and across Kenya—covering genuine ICT equipment sourcing, privacy-conscious CCTV design, core banking architecture and operational software decisions without jargon or sales hype.",
  subtitle:
    "Technology decisions deserve clear facts, not buzzwords. Practical perspectives written to help Kenyan teams plan with confidence.",
  faqs: [
    {
      q: "Who writes the Insights articles?",
      a: "Our technical leads, systems consultants and engineering strategists who work inside Kenyan networks, software deployments and hardware rooms daily. Every guide shows its author, role and latest review date.",
    },
    {
      q: "Can our organisation suggest a topic or technical question?",
      a: "Yes. Send your question via our contact page or WhatsApp—if the answer helps other Kenyan organisations decide more clearly, we will publish a practical guide covering it.",
    },
    {
      q: "Are the Insights guides free to read and share?",
      a: "Yes. All Insights guides are completely free and ungated to read and share with your leadership or procurement teams.",
    },
  ],
};

export const INSIGHTS: InsightItem[] = [
  {
    id: "spotting-counterfeit-ict-equipment-genuine-warranty",
    slug: "spotting-counterfeit-ict-equipment-genuine-warranty",
    title:
      "How to spot counterfeit ICT equipment and what a genuine warranty looks like",
    category: "Equipment & Procurement",
    readTime: "6 min read",
    date: "November 2026",
    dateIso: "2026-11-26",
    lastReviewed: "26 November 2026",
    author: {
      name: "Nile ICT Engineering Desk",
      role: "Hardware Sourcing & Infrastructure Team",
    },
    excerpt:
      "The cheapest quote on networking hardware, laptops or consumables often hides grey-market imports or counterfeits. Here is what authentic documentation and warranties actually include in Kenya.",
    relatedService: {
      label: "Explore ICT Equipment Supply",
      href: "/services/equipment-supply",
    },
    content: [
      {
        heading: "Why ‘Cheapest Quote’ Failures Cost Three Times More",
        paragraphs: [
          "Across Kenyan offices, one pattern repeats constantly: a procurement team compares three hardware quotes, selects the cheapest line by a slim margin, and finds batteries swelling in six weeks, power bricks overheating or toner cartridges leaking inside new printers.",
          "In a market saturated with refurbished laptops sold as new and counterfeit Cat6 copper-clad aluminium cable packaged as solid pure copper, initial unit price tells only half the commercial story. A sub-standard core switch failing on Monday morning costs vastly more in stalled payroll and team downtime than the original saving.",
        ],
      },
      {
        heading: "Four Concrete Checks Before Approving a Hardware Order",
        paragraphs: [
          "First, verify serial numbers directly against the original manufacturer’s online warranty lookup tool prior to sign-off—authentic enterprise switches, firewalls and business laptops register clear country eligibility and start dates.",
          "Second, ask explicitly who honours warranty claims: is repair handled locally through an authorised service centre in Nairobi or shipped out indefinitely at your cost? Third, insist on pure bare copper (not CCA) ratings for structured cabling runs. Fourth, confirm itemised model part numbers rather than generic line descriptions such as ‘8-port switch’ or ‘business laptop’.",
        ],
      },
      {
        heading: "One Accountable Team From Specification to After-Sales",
        paragraphs: [
          "Separating who sells boxes from who installs and maintains them creates endless excuses when a port drops out. Pairing genuine sourcing with installation and warranty management ensures one accountable team owns the outcome from day one.",
        ],
      },
    ],
    faq: {
      question:
        "How can we confirm whether ICT hardware quotes include genuine, warranted products?",
      answer:
        "Require exact manufacturer part numbers on every quote, verify factory serial status upon delivery, insist on pure-copper cable ratings where cabling is involved, and confirm clear written local warranty handling before purchase.",
    },
  },
  {
    id: "cctv-data-protection-act-kenya-guide",
    slug: "cctv-data-protection-act-kenya-guide",
    title:
      "CCTV and the Data Protection Act, 2019: what Kenyan organisations should plan for",
    category: "CCTV & Compliance",
    readTime: "6 min read",
    date: "November 2026",
    dateIso: "2026-11-26",
    lastReviewed: "26 November 2026",
    author: {
      name: "Dennis Mugo",
      role: "Digital Strategy & Technology Architecture",
    },
    excerpt:
      "Under Kenya’s Data Protection Act, operating cameras capturing identifiable people brings practical responsibilities around angles, signage, access logs and retention. Here are the engineering decisions that help.",
    relatedService: {
      label: "Explore CCTV & Security Systems",
      href: "/services/cctv-security",
    },
    content: [
      {
        heading: "Cameras Protect Premises—But Sightlines Carry Responsibilities",
        paragraphs: [
          "Video surveillance has become essential for offices, hotels, schools and commercial yards across Nairobi. Yet many installers still bolt wide-angle cameras onto walls wherever cabling feels easiest, capturing public pavements, neighbouring compounds or unguarded monitors.",
          "Under Kenya’s Data Protection Act, 2019, recordings showing identifiable staff, visitors or members of the public constitute personal data. Recent rulings and guidance from the Office of the Data Protection Commissioner (ODPC) make clear that camera placement, notice and storage discipline matter as much as resolution.",
        ],
      },
      {
        heading: "Four Technical Controls Every Commercial Installation Needs",
        paragraphs: [
          "1. Intentional sightlines & privacy masking: Position cameras strictly on authorised premises and apply digital privacy zones over adjoining properties or sensitive screens. 2. Clear notice signage: Pair entry cameras with visible signage explaining surveillance purpose and controller contact details.",
          "3. Role-restricted viewing & audit logs: Never leave NVR viewing apps on shared default passwords; enforce separate user logins and strong credentials. 4. Right-sized retention: Define clear auto-overwrite periods (for example 30 or 60 days) sized honestly to operational risk rather than hoarding footage indefinitely.",
        ],
      },
      {
        heading: "Engineering Guidance, Paired with Legal Review",
        paragraphs: [
          "Good installation design prevents common privacy mistakes upfront—tightening sightlines, locking down NVR access and sizing clean retention. This overview reflects practical engineering choices rather than formal legal advice; organisations should confirm ODPC registration thresholds and notices with qualified legal counsel.",
        ],
      },
    ],
    faq: {
      question:
        "Do Kenyan businesses and schools running CCTV need to consider the Data Protection Act, 2019?",
      answer:
        "Yes. Cameras capturing identifiable individuals trigger data protection principles including lawful purpose, clear signage notices, restricted NVR access, minimal neighbouring intrusion and defined retention periods, alongside verifying ODPC registration guidance with legal counsel.",
    },
  },
  {
    id: "insurance-returns-claims-kenya-operational-gaps",
    slug: "insurance-returns-claims-kenya-operational-gaps",
    title:
      "Insurance returns and claims: where Kenyan insurers and brokers lose operational time",
    category: "Enterprise Systems",
    readTime: "7 min read",
    date: "November 2026",
    dateIso: "2026-11-26",
    lastReviewed: "26 November 2026",
    author: {
      name: "Dennis Mugo",
      role: "Digital Strategy & Technology Architecture",
    },
    excerpt:
      "When policies, claims notes and accounts sit in separate files, quarter-end IRA returns become a stressful scramble and policyholders wait blindly. Fixing the record layer resolves both.",
    relatedService: {
      label: "Explore Insurance Management Systems",
      href: "/solutions/insurance-management",
    },
    content: [
      {
        heading: "Why Quarterly Reporting Feels Harder Than Underwriting",
        paragraphs: [
          "Regulatory oversight from the Insurance Regulatory Authority (IRA) demands consistent, timely quarterly returns alongside clearer standards for structured claims processing. Yet inside many insurers and brokerage desks, the bottleneck isn’t underwriting skill—it is fragmented record-keeping.",
          "When policy schedules live in one tool, premium receipts in finance spreadsheets and claims correspondence inside personal email threads, assembling an accurate return requires days of manual cross-checking and clean-up before anyone can sign it off.",
        ],
      },
      {
        heading: "Connecting Underwriting, Claims and Finance on One Record",
        paragraphs: [
          "A cohesive insurance management system enforces one shared reference from quotation to renewal. Every endorsement, premium allocation, commission split and claim milestone links automatically to the same master policy record.",
          "Instead of chasing colleagues on leave to confirm whether supporting documents arrived, claims handlers see missing items immediately, managers inspect open turnaround times, and compliance extracts structured reporting datasets cleanly.",
        ],
      },
      {
        heading: "A Practical Migration Path Without Disrupting Policyholders",
        paragraphs: [
          "Modernising insurance operations does not require an overnight gamble. Starting with workflow mapping, cleaning active cover registers and rehearsing trial balance migrations ensures active policies, renewals and open claims move cleanly with zero gap in customer care.",
        ],
      },
    ],
    faq: {
      question:
        "What is the biggest quick win for an insurer or broker modernising systems in Kenya?",
      answer:
        "Unifying policy schedules, premium collection status and claims stage logs onto a single verified record so renewal notices run automatically and quarterly reporting data compiles straight from live operations.",
    },
  },
  {
    id: "modernizing-enterprise-ict-kenya",
    slug: "modernizing-enterprise-ict-kenya",
    title:
      "Modernizing Enterprise ICT Infrastructure in Kenya: A Guide for Operations Leaders",
    category: "Infrastructure & Networking",
    readTime: "6 min read",
    date: "November 2026",
    dateIso: "2026-11-25",
    lastReviewed: "26 November 2026",
    author: {
      name: "Dennis Mugo",
      role: "Digital Strategy & Technology Architecture",
    },
    excerpt:
      "Why legacy cabling and unmanaged consumer switches cost Kenyan enterprises productivity—and how structured design transforms operational continuity.",
    relatedService: {
      label: "Explore Infrastructure & Networking",
      href: "/services/ict-infrastructure-networking",
    },
    content: [
      {
        heading: "The Cost of Invisible Network Congestion",
        paragraphs: [
          "In many growing offices in Nairobi, IT infrastructure expands organically. New desks are added, desktop mini-switches are daisy-chained under desks, and patch leads run untraced across ceiling tiles.",
          "Over time, packet storms, loops and erratic ERP freezes frustrate staff daily. While teams instinctively blame the ISP, physical-layer bottlenecks inside the office are just as often the real culprit.",
        ],
      },
      {
        heading: "Why Structured Cat6A and Fiber Backbones Matter",
        paragraphs: [
          "Proper structured cabling acts as a clean communications highway—terminated neatly into labelled patch panels, shielded from electrical interference and segmented via VLANs so guest Wi-Fi never competes with critical finance traffic.",
        ],
      },
      {
        heading: "Clean Power and Documentation",
        paragraphs: [
          "Online double-conversion UPS protection shields core racks against voltage spikes, while complete port schedules ensure any incoming engineer understands the layout without guesswork.",
        ],
      },
    ],
    faq: {
      question:
        "What is the primary indicator that an office needs an infrastructure overhaul?",
      answer:
        "Peak-hour slowdowns during routine ERP use, patchy wireless rooms, VoIP call drops and zero port documentation in the server rack are reliable indicators of accumulated network debt.",
    },
  },
  {
    id: "evaluating-core-banking-software",
    slug: "evaluating-core-banking-software",
    title:
      "Evaluating Core Banking & Financial Software for Growing Financial Institutions",
    category: "Enterprise Systems",
    readTime: "7 min read",
    date: "November 2026",
    dateIso: "2026-11-25",
    lastReviewed: "26 November 2026",
    author: {
      name: "Dennis Mugo",
      role: "Digital Strategy & Technology Architecture",
    },
    excerpt:
      "Architectural criteria, maker-checker auditability and automated reconciliation considerations for Kenyan SACCOs, microfinance lenders and financial institutions.",
    relatedService: {
      label: "Explore Core Banking Systems",
      href: "/solutions/core-banking",
    },
    content: [
      {
        heading: "From Siloed Spreadsheets to Unified Transaction Ledgers",
        paragraphs: [
          "Members and customers expect clear statements, responsive loan turnaround and accurate mobile money posting without end-of-month bottlenecks.",
          "When product launches force manual workarounds outside the core ledger, reconciliation errors multiply rapidly across branches and channels.",
        ],
      },
      {
        heading: "Maker-Checker Controls and Migration Discipline",
        paragraphs: [
          "Every strong financial platform enforces dual-authorisation workflows, role-based access and immutable transaction logs. Equally vital is disciplined trial migration and line-by-line opening balance reconciliation before cutover.",
        ],
      },
    ],
    faq: {
      question:
        "Can core banking implementations connect with mobile money reconciliation?",
      answer:
        "Yes. Where supported APIs or structured statement feeds are configured cleanly, mobile wallet transactions can match against customer accounts automatically while routing exceptions to human review.",
    },
  },
  {
    id: "cctv-surveillance-governance-kenya",
    slug: "cctv-surveillance-governance-kenya",
    title:
      "Commercial IP CCTV Surveillance Governance: Storage, Sightlines & Practical Controls",
    category: "Cybersecurity & Security",
    readTime: "5 min read",
    date: "November 2026",
    dateIso: "2026-11-25",
    lastReviewed: "26 November 2026",
    author: {
      name: "Dennis Mugo",
      role: "Digital Strategy & Technology Architecture",
    },
    excerpt:
      "How to plan IP camera coverage that balances sharp incident evidence with bandwidth discipline, reliable retention and sensible privacy settings.",
    relatedService: {
      label: "Explore CCTV & Security Systems",
      href: "/services/cctv-security",
    },
    content: [
      {
        heading: "Beyond Mere Cameras: Usable Clarity When It Counts",
        paragraphs: [
          "Too many businesses realise only after an incident that footage is too grainy to inspect or stopped recording weeks earlier. Deliberate lens angles, night illumination checks and PoE stability separate dependable security from decoration.",
        ],
      },
      {
        heading: "Retention Sizing and Disk Health Checks",
        paragraphs: [
          "Storage hard drives should always match your target retention window explicitly—and periodic system health checks verify that cameras remain focused and drives record cleanly without silent failure.",
        ],
      },
    ],
    faq: {
      question: "How long should commercial security footage be archived?",
      answer:
        "Most commercial offices and institutions retain 30 to 90 days of active NVR footage sized to camera resolution, while exporting verified incident clips securely.",
    },
  },
];
