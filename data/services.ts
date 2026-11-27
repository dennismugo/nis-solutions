export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  pillar: string;
  iconName: string;
  headline: string;
  problem: string;
  solution: string;
  capabilities: string[];
  businessBenefits: { title: string; desc: string }[];
  methodology: { step: string; title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
}

export const PILLARS = [
  {
    id: "infrastructure",
    name: "ICT Infrastructure & Security",
    description: "Enterprise networking, structured cabling, data center topology, CCTV and proactive cybersecurity.",
    badge: "Core Engineering",
  },
  {
    id: "enterprise-systems",
    name: "Enterprise Systems & Software",
    description: "Core banking platforms, insurance management systems, and tailored ERP workflows.",
    badge: "Enterprise Systems",
  },
  {
    id: "digital-solutions",
    name: "Digital Solutions & Engineering",
    description: "Custom web applications, client portals, mobile solutions, and enterprise API integrations.",
    badge: "Digital Engineering",
  },
  {
    id: "support",
    name: "Business Technology Support",
    description: "SLA-backed IT management, routine preventative maintenance, and 24/7 on-call engineering.",
    badge: "Operational Continuity",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "ict-infrastructure-networking",
    slug: "ict-infrastructure-networking",
    title: "ICT Infrastructure & Networking",
    pillar: "ICT Infrastructure & Security",
    shortDescription: "Structured fiber cabling, enterprise routing, server room architecture, and resilient switching for corporate offices.",
    iconName: "Network",
    headline: "Reliable, High-Speed Infrastructure Engineered for Zero Downtime",
    problem: "Outdated wiring, unmanaged switches, and ad-hoc WiFi expansions create silent bottlenecks, frequent network drops, and costly employee downtime.",
    solution: "We design, install, and certify structured Cat6A/Fiber optic backbones, managed SD-WAN/routing, and enterprise wireless networks with failover resilience.",
    capabilities: [
      "Structured Cat6A and Single/Multi-Mode Fiber Cabling",
      "Server Room & Data Rack Optimization with Cable Management",
      "Enterprise Switching, VLAN Segmentation & Routing (Cisco, Mikrotik)",
      "High-Density Wi-Fi 6 Deployments (UniFi, Aruba, Ruckus)",
      "Power Redundancy (Online Double-Conversion UPS & PDU)",
      "Fiber Splicing, OTDR Testing & Certified Documentation",
    ],
    businessBenefits: [
      { title: "99.9% Uptime Guarantee", desc: "Redundant links and enterprise-grade hardware eliminate random network crashes." },
      { title: "Speed & Low Latency", desc: "Gigabit-certified backbones ensure smooth ERP, VoIP, and video conference traffic." },
      { title: "Future-Proof Scalability", desc: "Easily accommodate team expansion and high-bandwidth IoT systems without recabling." },
      { title: "Standardized Documentation", desc: "Complete port mapping and label schemas save hours during future maintenance." },
    ],
    methodology: [
      { step: "01", title: "Site Survey & Heatmap", desc: "Physical walkthrough, architectural assessment, RF spectrum analysis, and cable run mapping." },
      { step: "02", title: "Topology Architecture", desc: "Designing structured switch distribution, core backbone, VLAN security schemes, and equipment bill of materials." },
      { step: "03", title: "Installation & Fluke Testing", desc: "Clean trunking, precision termination, patch panel labeling, and calibrated signal testing." },
      { step: "04", title: "Handover & Active Monitoring", desc: "Commissioning with certified test reports, admin credentials handover, and SNMP telemetry setup." },
    ],
    faqs: [
      {
        question: "How long does an office network cabling overhaul take?",
        answer: "A standard corporate office (30 to 80 network drops) typically takes 3 to 5 business days, frequently executed after-hours or over weekends to prevent business interruption.",
      },
      {
        question: "Do you supply the network active equipment (switches, routers, APs)?",
        answer: "Yes, Nile ICT Solutions is an authorized procurement partner for tier-1 network vendors including Cisco, Ubiquiti UniFi, MikroTik, TP-Link Omada, and Fortinet.",
      },
      {
        question: "Can you certify existing network cabling runs?",
        answer: "Yes, our engineers utilize calibrated network analyzers to test continuity, cross-talk, attenuation, and speed compliance, providing signed compliance documentation.",
      },
    ],
  },
  {
    id: "cybersecurity-it-support",
    slug: "cybersecurity-it-support",
    title: "Cybersecurity & Security Systems",
    pillar: "ICT Infrastructure & Security",
    shortDescription: "Enterprise Next-Gen Firewalls, endpoint security, commercial IP CCTV surveillance, and access control systems.",
    iconName: "ShieldCheck",
    headline: "Multi-Layered Physical & Digital Protection for Modern Operations",
    problem: "Modern businesses face double-edged vulnerabilities: sophisticated ransomware / phishing on the digital side, and inventory shrinkage or unmonitored premises physically.",
    solution: "We deploy unified security postures combining perimeter firewalls, automated endpoint protection, AI-assisted IP CCTV camera matrices, and biometric access control.",
    capabilities: [
      "Next-Generation Firewall Deployment (Fortinet, Sophos, pfSense)",
      "Commercial IP CCTV Surveillance with NVR Remote Telemetry",
      "Biometric Access Control & Time-and-Attendance Clocking",
      "Endpoint Threat Detection & Centralized Antivirus",
      "Automated Off-Site Cloud & Encrypted NAS Backups",
      "Vulnerability Scanning & Cyber Hygiene Policy Implementation",
    ],
    businessBenefits: [
      { title: "Risk Mitigation", desc: "Protect proprietary customer financial data, trade secrets, and internal communications." },
      { title: "24/7 Physical Oversight", desc: "Crystal-clear high-definition recording with smartphone remote streaming." },
      { title: "Regulatory Compliance", desc: "Align your IT posture with Kenya Data Protection Act (KDPA) standards." },
      { title: "Rapid Incident Containment", desc: "Automated isolation prevents infected laptops from spreading malware across the LAN." },
    ],
    methodology: [
      { step: "01", title: "Threat & Vulnerability Audit", desc: "Auditing open ports, unmanaged devices, surveillance blindspots, and password policies." },
      { step: "02", title: "Defensive Matrix Design", desc: "Configuring zone-based firewall rules, camera sight-lines, storage retention, and backup cadence." },
      { step: "03", title: "Deployment & Hardening", desc: "Installing security appliances, high-spec cameras, biometric readers, and hardening default credentials." },
      { step: "04", title: "User Training & SLA Monitoring", desc: "Staff cybersecurity awareness briefing, alert notification setup, and routine firmware patching." },
    ],
    faqs: [
      {
        question: "Can I view the CCTV camera feeds securely from my phone when abroad?",
        answer: "Yes. All modern NVR systems we deploy are securely integrated with encrypted P2P remote access apps for iOS, Android, and desktop, protected by multi-factor authentication.",
      },
      {
        question: "How long can the CCTV footage be stored?",
        answer: "Storage retention is engineered to your requirements: typical enterprise deployments range from 30 days to 90+ days of continuous high-resolution recording with motion analytics.",
      },
      {
        question: "Do you help with Kenya Data Protection Act compliance?",
        answer: "Yes, we audit data storage, encryption at rest and in transit, employee access permissions, and backup resilience to ensure alignment with statutory regulatory standards.",
      },
    ],
  },
  {
    id: "enterprise-systems-software",
    slug: "enterprise-systems-software",
    title: "Enterprise Systems & Software",
    pillar: "Enterprise Systems & Software",
    shortDescription: "Tailored core banking software, insurance policy management platforms, ERP integrations, and workflow automation.",
    iconName: "Database",
    headline: "Mission-Critical Software Built for Financial Institutions and Growing Enterprises",
    problem: "Siloed spreadsheets, disconnected legacy programs, and manual data re-entry cause reconciling errors, customer frustration, and painful regulatory reporting.",
    solution: "We implement, configure, and customize robust enterprise software platforms tailored to banking, microfinance, insurance, and complex commercial supply chains.",
    capabilities: [
      "Core Banking & Microfinance Transaction Engines",
      "Insurance Policy, Underwriting & Claims Processing Systems",
      "Enterprise Resource Planning (ERP) & Inventory Automation",
      "Document Management Systems (DMS) & Digital Archiving",
      "Automated Financial Reconciliation & MPESA Payment Gateways",
      "Role-Based Access Control, Audit Logs & Compliance Reporting",
    ],
    businessBenefits: [
      { title: "Zero Accounting Discrepancies", desc: "Automated ledger balancing and real-time transaction reconciliation." },
      { title: "Faster Customer Service", desc: "Loan approvals, policy renewals, and account lookups in seconds instead of hours." },
      { title: "Tamper-Proof Audit Trails", desc: "Every record edit, approval, and transaction is timestamped and cryptographically logged." },
      { title: "Customized to Your Process", desc: "Software that adapts to your exact operational workflows, rather than forcing you into rigid templates." },
    ],
    methodology: [
      { step: "01", title: "Workflow Discovery", desc: "Deep-dive mapping of accounting charts, user roles, transactional bottlenecks, and compliance mandates." },
      { step: "02", title: "Architecture & Integration", desc: "Database schema design, payment gateway connections, and legacy data migration pipelines." },
      { step: "03", title: "User Acceptance Testing (UAT)", desc: "Controlled sandbox testing with actual staff, validating edge cases and performance thresholds." },
      { step: "04", title: "Go-Live & Dedicated Support", desc: "Production rollout, parallel run validation, user training documentation, and on-site go-live support." },
    ],
    faqs: [
      {
        question: "Can your systems integrate with Safaricom MPESA Daraja API?",
        answer: "Yes, our systems support native C2B, B2C, and B2B MPESA Daraja API integration with automatic reconciliation, instant receipt SMS triggers, and ledger allocation.",
      },
      {
        question: "Can our existing legacy financial data be migrated safely?",
        answer: "Yes, we execute structured ETL (Extract, Transform, Load) routines with rigorous balance validation, ensuring historical member records, loans, and ledgers carry over intact.",
      },
    ],
  },
  {
    id: "digital-solutions",
    slug: "digital-solutions",
    title: "Digital Solutions & Web Engineering",
    pillar: "Digital Solutions",
    shortDescription: "High-performance enterprise websites, secure customer portals, and bespoke web platforms engineered for business conversion.",
    iconName: "Globe",
    headline: "Fast, Credible, and Search-Optimized Digital Experiences",
    problem: "Most corporate websites are slow, generic brochures that fail to generate qualified leads, break on mobile devices, and offer zero credibility to institutional buyers.",
    solution: "We build modern, server-rendered web applications with Next.js, tailored design systems, structured schema for AEO/GEO, and high-converting inquiry journeys.",
    capabilities: [
      "Next.js App Router & React Modern Web Engineering",
      "Enterprise Design Systems with Accessible UX (WCAG 2.2 AA)",
      "AEO / GEO & Technical Search Engine Optimization",
      "Self-Service Client Portals & B2B Dashboards",
      "API Integrations with CRMs, ERPs, and Cloud Backends",
      "Blazing Fast Performance (90+ Core Web Vitals)",
    ],
    businessBenefits: [
      { title: "Institutional Credibility", desc: "Position your brand as a market leader with bespoke, polished digital craft." },
      { title: "High Conversion Rates", desc: "Intentional user journeys that convert high-value corporate inquiries." },
      { title: "Search Dominance", desc: "Semantic HTML, structured data, and sub-second load times engineered for Google and AI engines." },
      { title: "Security & Clean Code", desc: "Zero vulnerable WordPress plugins; static edge deployments resistant to DDoS." },
    ],
    methodology: [
      { step: "01", title: "Strategic Positioning", desc: "Defining target audience personas, value proposition clarity, and commercial conversion paths." },
      { step: "02", title: "UI/UX & Design Tokens", desc: "Art-directed Figma layouts, interactive prototypes, and typography hierarchy." },
      { step: "03", title: "Production Development", desc: "TypeScript, clean component modularity, micro-animations, and responsive testing." },
      { step: "04", title: "Optimization & Launch", desc: "Lighthouse 95+ score tuning, automated SEO schema verification, and DNS cutover." },
    ],
    faqs: [
      {
        question: "Why Next.js instead of standard WordPress?",
        answer: "Next.js offers enterprise-grade security (no database exposed to the public internet, no vulnerable plugins), sub-second page loads, and optimal AI search engine readability.",
      },
      {
        question: "Will our team be able to update content easily?",
        answer: "Yes, we integrate lightweight, modern headless content management (like Sanity or markdown-based schemas) so your team can easily update insights, services, and team information.",
      },
    ],
  },
  {
    id: "business-technology-support",
    slug: "business-technology-support",
    title: "Business Technology Support & SLA",
    pillar: "Business Technology Support",
    shortDescription: "Managed IT services, scheduled hardware maintenance, server administration, and reliable on-call engineering.",
    iconName: "Headphones",
    headline: "Proactive IT Operations That Ensure Your Business Stays Online",
    problem: "Waiting until equipment breaks causes unpredicted downtime, data loss, panicked scramble for technicians, and frustrated employees.",
    solution: "We provide contracted Managed IT services with strict Service Level Agreements (SLAs), routine preventative maintenance visits, and immediate emergency dispatch.",
    capabilities: [
      "Scheduled Preventative Maintenance (Cleaning, Thermal, Disk Health)",
      "Rapid Response SLAs (Sub-2-Hour Remote / Sub-4-Hour On-Site)",
      "Server, NAS, and Operating System Patch Management",
      "Employee IT Helpdesk & Workstation Provisioning",
      "ICT Asset Inventory Tracking & Lifecycle Planning",
      "Vendor Management (ISPs, Telcos, Software Providers)",
    ],
    businessBenefits: [
      { title: "Predictable IT Budget", desc: "Fixed monthly retainer replaces erratic, expensive emergency repair invoices." },
      { title: "Extended Equipment Lifespan", desc: "Dust cleaning and thermal management extend hardware life by 2-3 years." },
      { title: "Uninterrupted Productivity", desc: "Issues are resolved before staff even notice disruptions." },
      { title: "Single Point of Accountability", desc: "Never deal with finger-pointing between your internet provider and hardware vendor." },
    ],
    methodology: [
      { step: "01", title: "Infrastructure Onboarding", desc: "Cataloging all PCs, servers, network nodes, serial numbers, and warranty dates." },
      { step: "02", title: "Baseline Optimization", desc: "Applying firmware updates, standardizing operating systems, and deploying remote monitoring tools." },
      { step: "03", title: "Routine Support & Checks", desc: "Scheduled monthly physical visits plus instant daily remote helpdesk for staff." },
      { step: "04", title: "Quarterly Executive Review", desc: "Delivering uptime reports, incident logs, and strategic technology upgrade plans." },
    ],
    faqs: [
      {
        question: "What response times are covered in the SLA?",
        answer: "Our standard enterprise SLA provides guaranteed sub-1-hour acknowledgment, sub-2-hour remote diagnosis, and sub-4-hour on-site dispatch within Nairobi CBD and industrial zones.",
      },
      {
        question: "Do you support both Mac and Windows corporate fleets?",
        answer: "Yes, our engineering team manages mixed environments including Windows workstations, Apple macOS devices, Linux application servers, and mobile endpoints.",
      },
    ],
  },
];
