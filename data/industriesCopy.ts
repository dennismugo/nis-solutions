import type { FaqEntry } from "./aboutCopy";

export interface IndustryDetail {
  id: string;
  name: string;
  eyebrow: string;
  h1: string;
  desc: string;
  imageSrc: string;
  imageAlt: string;
  systemsFocus: string[];
  faqs: FaqEntry[];
  relatedSolutions: { label: string; href: string }[];
}

export const INDUSTRIES_COPY = {
  seoTitle:
    "Industries We Serve | Enterprise ICT Solutions in Kenya | Nile ICT Solutions",
  metaDescription:
    "Sector-specific ICT infrastructure, cybersecurity, CCTV, custom software and enterprise systems for banking, insurance, hospitality, education, NGOs and corporate organisations in Kenya.",
  hero: {
    eyebrow: "Industries We Serve",
    h1: "We speak your sector’s language.",
    answerFirst:
      "Nile ICT Solutions partners with financial institutions, insurers, hospitality groups, schools, NGOs and corporate enterprises in Nairobi and across Kenya. We tailor ICT infrastructure, security, custom software and business systems to the compliance standards, peak demands and operational realities of each industry.",
    intro:
      "A bank, a safari camp and a school share the need for dependable technology, yet they face very different audits, customers and peak pressures. We begin every engagement by understanding how your sector operates.",
  },
  sectors: [
    {
      id: "banking",
      name: "Banking & Finance",
      eyebrow: "01 · Regulated Financial Institutions & SACCOs",
      h1: "Trust runs on uptime, reconciliations and clean audit trails.",
      desc: "Banks, SACCOs and microfinance lenders require reliable core ledgers, maker-checker governance, controlled access to member records, automated mobile money reconciliations and hardened branch connectivity.",
      imageSrc: "/images/industries/banking-halftone.jpg",
      imageAlt:
        "Financial institution leadership reviewing core banking ledgers in Nairobi",
      systemsFocus: [
        "Core Banking, SACCO & Credit Management Platforms",
        "Automated Bank & Mobile Wallet Reconciliation",
        "Hardened Branch Networking & Redundant Failover",
        "Role-Based Access Control & Cybersecurity",
      ],
      faqs: [
        {
          q: "What technology do banks, SACCOs and lenders need most?",
          a: "Dependable core ledger software, controlled record access, clean reconciliations and resilient branch/head-office networks so members and customers experience seamless service.",
        },
        {
          q: "Can you work alongside our current core banking system?",
          a: "Often, yes. We assess existing ledgers and recommend the lightest reliable path—such as integrating reporting, reconciliation or member channels cleanly.",
        },
        {
          q: "How do you help protect sensitive financial and member data?",
          a: "Through maker-checker approvals, segmented VLAN networks, encrypted backups, audit trails and access controls planned alongside your internal risk team.",
        },
      ],
      relatedSolutions: [
        { label: "Core Banking Systems", href: "/solutions/core-banking" },
        {
          label: "SACCO Solution & API Gateway",
          href: "/solutions/sacco-solutions-apps-api-gateway",
        },
        {
          label: "Accounts Reconciliation",
          href: "/solutions/accounts-wallets-reconciliation",
        },
      ],
    },
    {
      id: "insurance",
      name: "Insurance",
      eyebrow: "02 · Underwriters, Brokers & Bancassurance",
      h1: "Clear visibility from quotation and claims to regulatory returns.",
      desc: "Underwriters and brokers lose hours reconciling fragmented files between underwriting, claims, finance and quarterly compliance returns. Unified administration keeps renewals timely and claims transparent.",
      imageSrc: "/images/industries/insurance-halftone.jpg",
      imageAlt: "Insurance advisors reviewing policy administration and claims data",
      systemsFocus: [
        "Policy Administration, Renewals & Commission Workflows",
        "Structured Claims Handling & Status Visibility",
        "Searchable Electronic Policy & KYB Records",
        "Executive & Regulatory Return Reporting Datasets",
      ],
      faqs: [
        {
          q: "How can technology cut delays in claims and policy renewals?",
          a: "By bringing quotes, policy endorsements, payment histories and claims milestones into one shared workspace with automated renewal reminders.",
        },
        {
          q: "Can old policy schedules be migrated safely without losing history?",
          a: "Yes. We clean legacy spreadsheets, run trial migrations and reconcile active cover before switching teams over.",
        },
        {
          q: "Can document management pair cleanly with insurance administration?",
          a: "Yes—linking claimant evidence, policy certificates and correspondence directly to each policy reference stops manual file hunting.",
        },
      ],
      relatedSolutions: [
        {
          label: "Insurance Management Systems",
          href: "/solutions/insurance-management",
        },
        { label: "Document Management", href: "/solutions/document-management" },
        {
          label: "Process Automation",
          href: "/solutions/automation",
        },
      ],
    },
    {
      id: "hospitality",
      name: "Hospitality",
      eyebrow: "03 · Hotels, Lodges & Tours Operators",
      h1: "Invisible infrastructure for seamless guest stays.",
      desc: "Guests judge Wi-Fi stability within five minutes of check-in, while managers need smooth booking desks, POS reliability and discreet perimeter CCTV across properties that operate around the clock.",
      imageSrc: "/images/industries/hospitality-halftone.jpg",
      imageAlt: "Modern hotel reception powered by dependable connectivity",
      systemsFocus: [
        "High-Density Property Wi-Fi & Redundant Links",
        "Discreet, Privacy-Aware CCTV Coverage",
        "Tours, Itinerary & Booking Management Workflows",
        "Point-of-Sale & Hospitality Property Reliability",
      ],
      faqs: [
        {
          q: "What technology matters most to hotel and lodge guests?",
          a: "Consistent high-speed Wi-Fi across rooms and common lounges, responsive point-of-sale billing and discreet security that protects premises without intruding.",
        },
        {
          q: "Can you install or upgrade networks inside a busy hotel?",
          a: "Yes. We phase rooms and floor schedules cleanly around low-occupancy hours so guest stays remain undisturbed.",
        },
        {
          q: "Do you support lodges and tour operators beyond Nairobi?",
          a: "Yes. We scope connectivity, remote monitoring, booking software and hardware deployments for hospitality sites across Kenya.",
        },
      ],
      relatedSolutions: [
        {
          label: "Tours & Travel Solution",
          href: "/solutions/tours-travel-management-system",
        },
        {
          label: "Infrastructure & Networking",
          href: "/services/ict-infrastructure-networking",
        },
        { label: "CCTV & Security", href: "/services/cctv-security" },
      ],
    },
    {
      id: "education",
      name: "Education",
      eyebrow: "04 · Schools, Academies & Campuses",
      h1: "Safer campuses and connected school administration.",
      desc: "Schools balance reliable campus connectivity and safeguarding cameras with clear academic administration, streamlined fee tracking and dependable parent communication.",
      imageSrc: "/images/industries/education-halftone.jpg",
      imageAlt: "Students in a connected Kenyan learning environment",
      systemsFocus: [
        "School Management, Fees, Attendance & LMS",
        "Campus-Wide Structured Cabling & Wi-Fi",
        "Safeguarding-Conscious Campus CCTV",
        "ICT Computer Labs & Genuine Hardware Supply",
      ],
      faqs: [
        {
          q: "What technology foundation do schools need most?",
          a: "Safe, well-monitored premises, resilient campus Wi-Fi and one connected system for learner records, fees, attendance and parent notices.",
        },
        {
          q: "What rules apply to CCTV cameras in schools?",
          a: "Schools operating CCTV must respect Kenya’s Data Protection Act rules on purpose, notice signage, restricted viewing and retention. We configure camera sightlines and permissions responsibly; consult legal counsel for policy sign-off.",
        },
        {
          q: "Can you link fee statements and academic reports together?",
          a: "Yes—integrated school platforms bring learner profiles, exam results, attendance and bursar receipts into one unified record.",
        },
      ],
      relatedSolutions: [
        {
          label: "School Management & LMS",
          href: "/solutions/school-management-learning-systems",
        },
        { label: "ICT Equipment Supply", href: "/services/equipment-supply" },
        { label: "CCTV & Security", href: "/services/cctv-security" },
      ],
    },
    {
      id: "ngos",
      name: "NGOs & Development",
      eyebrow: "05 · Non-Profits, Foundations & Field Programmes",
      h1: "Lean, accountable systems built for donor trust and field impact.",
      desc: "Programme funding belongs in communities, not swallowed by bloated software licences. Non-profits need transparent beneficiary records, protected personal data and reliable field office IT.",
      imageSrc: "/images/industries/ngos-halftone.jpg",
      imageAlt: "Field programme coordination backed by accountable systems",
      systemsFocus: [
        "Beneficiary Registration, Aid & Impact Records",
        "Data Protection & Access-Controlled Document Archives",
        "Cost-Effective Cloud & Office Networking",
        "Genuine Hardware Procurement & Grant Reporting",
      ],
      faqs: [
        {
          q: "How can smart IT choices help an NGO control operational overhead?",
          a: "By choosing durable equipment, right-sized systems with zero bloated modules, and workflow automation that cuts manual donor reporting hours.",
        },
        {
          q: "How do you safeguard sensitive beneficiary records?",
          a: "Through role-restricted permissions, consent logging, encrypted cloud/local backups and retention schedules aligned with Kenya’s Data Protection Act, 2019.",
        },
        {
          q: "Can our regional field offices link cleanly to Nairobi HQ?",
          a: "Yes—secure cloud access, VPNs, remote IT help desk and offline-capable programme workflows keep field officers connected.",
        },
      ],
      relatedSolutions: [
        {
          label: "Beneficiary Management",
          href: "/solutions/beneficiary-management-system",
        },
        { label: "Document Management", href: "/solutions/document-management" },
        { label: "Managed IT Support", href: "/services/managed-it-support" },
      ],
    },
    {
      id: "corporate",
      name: "Corporate Organisations",
      eyebrow: "06 · Enterprises, Retail & Multi-Branch Commercial Firms",
      h1: "Joined-up systems from headquarters cabling to boardroom KPIs.",
      desc: "Growing enterprises need every move cleanly coordinated: structured office relocations, retail POS/ERP links, real-estate and CRM visibility, and one dependable team on call.",
      imageSrc: "/images/industries/corporate-halftone.jpg",
      imageAlt: "Corporate leadership team reviewing operational reporting",
      systemsFocus: [
        "Office Setup, Relocation & Structured Networking",
        "Custom Enterprise Software & Process Automation",
        "Executive Reporting Dashboards & CRM Pipelines",
        "Genuine Hardware Supply & SLA IT Support",
      ],
      faqs: [
        {
          q: "Can you coordinate both physical office fit-outs and business software?",
          a: "Yes. Having one accountable partner oversee cabling, hardware supply, Wi-Fi, CCTV and core systems eliminates supplier coordination gaps.",
        },
        {
          q: "How do you avoid vendor lock-in on corporate projects?",
          a: "By delivering clear port maps, admin documentation, source/ownership clarity and modular architectures your team genuinely understands.",
        },
        {
          q: "How quickly can you step in when our office expands or relocates?",
          a: "Engage us as soon as a floor plan or lease is agreed so cabling, ISP links and equipment staging finish well before staff move day.",
        },
      ],
      relatedSolutions: [
        { label: "Enterprise Software", href: "/solutions/enterprise-software" },
        { label: "Office Setup & Relocation", href: "/services/office-relocation" },
        { label: "Business Reporting", href: "/solutions/business-reporting-system" },
      ],
    },
  ] as IndustryDetail[],
  overviewFaqs: [
    {
      q: "Which sectors does Nile ICT Solutions serve?",
      a: "We serve banking and finance (including SACCOs and lenders), insurance, hospitality, education, NGOs and development programmes, and corporate enterprises across Nairobi and Kenya.",
    },
    {
      q: "Do you adapt your delivery approach to each industry?",
      a: "Yes. A regulated financial institution, an active hotel and a field NGO carry completely different uptime pressures, compliance requirements and workflows—we learn yours before proposing.",
    },
    {
      q: "Can we discuss relevant work in our sector before starting?",
      a: "Yes. We happily walk prospective teams through relevant technical approaches, architecture samples and non-confidential references in an initial discovery call.",
    },
  ],
};
