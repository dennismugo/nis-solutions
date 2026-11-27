import type { EngagementStep, FaqEntry } from "./aboutCopy";

export interface ServiceCopyItem {
  seoTitle: string;
  metaDescription: string;
  h1: string;
  answerFirst: string;
  problem: string;
  processHeading: string;
  processSteps: EngagementStep[];
  specialNote?: {
    title: string;
    body: string;
  };
  waysToEngage?: string[];
  productCategories?: string[];
  whatWeDoHeading?: string;
  whatWeDo: string[];
  whatYouGetHeading?: string;
  whatYouGet: string[];
  isForYou: {
    yes: string;
    no?: string;
  };
  firstStep: {
    title: string;
    desc: string;
  };
  faqs: FaqEntry[];
  ctaText: string;
  whatsappPrefill: string;
}

export const SERVICES_PAGES_COPY: {
  overview: {
    seoTitle: string;
    metaDescription: string;
    h1: string;
    answerFirst: string;
    intro: string;
    triageNote: string;
    ctaText: string;
    faqs: FaqEntry[];
  };
  items: Record<string, ServiceCopyItem>;
} & Record<string, any> = {
  overview: {
    seoTitle:
      "ICT Services in Nairobi, Kenya | Networks, Security, Software, Equipment | Nile ICT",
    metaDescription:
      "IT consulting, networking, cybersecurity, CCTV, managed IT support, software, websites and genuine ICT equipment for organisations in Nairobi and across Kenya.",
    h1: "The technology services your organisation runs on.",
    answerFirst:
      "Nile ICT Solutions provides practical ICT services to organisations in Nairobi and across Kenya: IT consulting, networking and structured cabling, cybersecurity, CCTV and security systems, managed IT support, custom software, web and mobile apps, websites, digital marketing, genuine ICT equipment supply and office setup. One accountable team from the cable in the wall to the app in your customer’s hand.",
    intro:
      "Start with the challenge in front of you. We design, supply, build and support the systems your organisation depends on—without splitting accountability across five separate suppliers.",
    triageNote:
      "Not sure where to start? Tell us the problem in front of you, and we’ll point you to the service that solves it—even when the right answer isn’t ours to give.",
    ctaText: "Book a short consultation",
    faqs: [
      {
        q: "What ICT services does Nile ICT Solutions offer?",
        a: "We deliver IT consulting, structured cabling and networking, cybersecurity, CCTV and security systems, managed IT support, custom software, web and mobile apps, business websites, digital marketing, genuine ICT equipment supply, and full office ICT setup and relocation.",
      },
      {
        q: "Can one team handle equipment supply, installation and ongoing support?",
        a: "Yes. Having one accountable partner specify, supply, install and support your environment eliminates finger-pointing between separate vendors.",
      },
      {
        q: "Do you serve organisations outside Nairobi?",
        a: "Yes. While our workshop is in Nairobi CBD at Posta Building on Tom Mboya Street, we support offices, campuses and field sites across Kenya.",
      },
      {
        q: "How do I get a proposal?",
        a: "Tell us what you need. For most projects we visit your site or hold a short discovery conversation first, then send an itemised written proposal.",
      },
    ],
  },
  items: {
    itConsulting: {
      seoTitle:
        "IT Consulting for Organisations in Nairobi | Assessments and Roadmaps | Nile ICT",
      metaDescription:
        "Practical IT consulting that turns technology decisions into clear plans, budgets and priorities. Speak to Nile ICT Solutions about strategy, systems and infrastructure in Kenya.",
      h1: "Clear advice on technology, in plain language.",
      answerFirst:
        "IT consulting helps an organisation decide what technology it needs, how to roll it out safely and how to avoid expensive mistakes. Nile ICT Solutions provides practical IT consulting in Nairobi and across Kenya: honest assessments, clear roadmaps and vendor-neutral recommendations tied directly to your business goals.",
      problem:
        "Technology decisions pile up. One vendor says you need one platform; another pushes something completely different. Your team is busy, budgets are tight, and nobody wants to sign off on the wrong system.",
      processHeading: "How a consulting engagement runs",
      processSteps: [
        {
          step: "01",
          title: "Listen",
          desc: "Interviews with leadership, finance and the people running systems day to day.",
          deliverable: "A clear summary of what we heard, in your own words.",
        },
        {
          step: "02",
          title: "Assess",
          desc: "A review of your network, software systems, security posture, support setup, licences and spend.",
          deliverable: "A written findings report with risks ranked by real operational impact.",
        },
        {
          step: "03",
          title: "Plan",
          desc: "Practical priorities, project sequence, budget ranges and clear internal owners.",
          deliverable: "A technology roadmap you can present clearly to your board.",
        },
        {
          step: "04",
          title: "Choose",
          desc: "Evaluate external vendors and proposals against your real requirements, flagging padded or vague quotes.",
        },
        {
          step: "05",
          title: "Oversee",
          desc: "Independent technical oversight during key milestones so what was promised is what arrives.",
        },
      ],
      waysToEngage: [
        "One-off comprehensive IT Assessment",
        "12-to-24-month Technology Roadmap project",
        "Vendor selection & implementation advisory",
      ],
      whatWeDoHeading: "Core advisory scope",
      whatWeDo: [
        "Review current infrastructure, business applications, security risks and IT spend in plain terms",
        "Define realistic project priorities, sequence and budget expectations",
        "Evaluate third-party software and hardware quotes on your behalf",
        "Track critical rollouts against documented scope and deliverables",
      ],
      whatYouGetHeading: "What you get",
      whatYouGet: [
        "A practical technology plan you can explain clearly to your board",
        "Money spent on priorities that genuinely reduce risk or save time",
        "One plain-spoken technical advisor between you and vendors",
      ],
      isForYou: {
        yes: "Organisations about to buy, replace or relocate critical systems—or leadership teams unsure whether current IT spend is delivering value.",
        no: "If you simply need a quick hardware quote without broader architecture questions, go straight to ICT Equipment Supply.",
      },
      firstStep: {
        title: "IT Health Check Questionnaire",
        desc: "Twenty focused questions taking roughly ten minutes to highlight risks across infrastructure, security, backups and systems.",
      },
      faqs: [
        {
          q: "What does an IT assessment include?",
          a: "A review of your network, core systems, security controls, backup health, support setup and IT costs, followed by a plain-language written report with ranked recommendations.",
        },
        {
          q: "Do you recommend only your own services?",
          a: "No. We recommend what solves the real problem—and tell you plainly when something is better handled by another specialist or kept as it is.",
        },
        {
          q: "How long does an IT assessment take?",
          a: "Timing depends on your number of sites, staff count and systems. We confirm the schedule and fee transparently before starting.",
        },
        {
          q: "What will we have at the end?",
          a: "A written findings summary, a prioritised multi-phase roadmap with budget ranges, and a walkthrough meeting to align leadership.",
        },
      ],
      ctaText: "Request an IT assessment",
      whatsappPrefill:
        "Hello Nile ICT Solutions, I’d like to discuss an IT Consulting assessment.",
    },

    infrastructureNetworking: {
      seoTitle:
        "Network Infrastructure and Structured Cabling in Nairobi | Nile ICT Solutions",
      metaDescription:
        "Reliable office networks, structured cabling, Wi-Fi and infrastructure design in Nairobi. Nile ICT Solutions builds, documents and maintains the foundation your business runs on.",
      h1: "Networks that don’t flinch.",
      answerFirst:
        "ICT infrastructure is the physical and digital foundation of an organisation: structured cabling, switching, Wi-Fi, server racks, power backup and connectivity. Nile ICT Solutions designs, installs and maintains resilient network infrastructure in Nairobi and across Kenya, so teams stay connected and critical systems never stumble at peak hours.",
      problem:
        "It is 9:15 on a Monday. The whole floor comes online at once, a video call freezes, a payment screen hangs, and someone asks the question every IT team dreads: “Is the internet down?” It rarely is. More often, the internal network was never designed for how the office operates today.",
      processHeading: "How a network project runs",
      processSteps: [
        {
          step: "01",
          title: "Site survey",
          desc: "We walk the premises, count users and devices, trace existing drops and map wireless dead zones.",
          deliverable: "A site survey summary with site photos and bottleneck notes.",
        },
        {
          step: "02",
          title: "Design",
          desc: "Cabling routes, rack layout, switching tiers, Wi-Fi coverage and failover internet paths sized for real load plus growth.",
          deliverable: "A documented network topology and itemised bill of quantities.",
        },
        {
          step: "03",
          title: "Install",
          desc: "Structured Cat6A/fiber cabling, racks, switches and access points mounted neatly, labelled and scheduled cleanly around occupied offices.",
        },
        {
          step: "04",
          title: "Configure",
          desc: "Network VLAN segmentation, secure Wi-Fi policies, failover routing and monitoring alerts configured cleanly.",
        },
        {
          step: "05",
          title: "Test and hand over",
          desc: "Calibrated cable testing, neat port maps and complete rack documentation so you never rely on one person’s memory.",
          deliverable: "A complete network documentation pack and port schedule.",
        },
        {
          step: "06",
          title: "Maintain",
          desc: "Ongoing monitoring, firmware checks, hardware health reviews and scheduled maintenance.",
        },
      ],
      whatWeDoHeading: "Core engineering scope",
      whatWeDo: [
        "Structured Cat6/Cat6A and fiber backbone cabling cleanly trunked and labelled",
        "Server rack cleanup, patch management and UPS clean-power protection",
        "High-density enterprise Wi-Fi planning and VLAN security segmentation",
        "Genuine switching, routing and wireless hardware supplied and supported",
      ],
      whatYouGetHeading: "What you get",
      whatYouGet: [
        "Consistent network speed and wireless coverage across the entire building",
        "Far fewer dropouts during peak business transactions and meetings",
        "Cleanly labelled cabling and diagrams any competent engineer can follow",
        "Headroom to add desks and floors without ripping everything out",
      ],
      isForYou: {
        yes: "Offices, hotels, schools, clinics and commercial campuses dealing with sluggish networks or fitting out new space.",
        no: "If you only need a single router replacement or basic home setup, a commercial overhaul isn’t necessary.",
      },
      firstStep: {
        title: "Seven Signs Your Network Needs an Upgrade",
        desc: "A concise office diagnostic checklist to identify local cabling, switch or Wi-Fi bottlenecks before blaming your ISP.",
      },
      faqs: [
        {
          q: "What is structured cabling?",
          a: "A standardised, organised cabling layout carrying data and voice across a building—terminated into labelled patch panels and tested so maintenance and expansion are predictable.",
        },
        {
          q: "How do I know if my office network needs upgrading?",
          a: "Frequent peak-hour slowdowns, patchy Wi-Fi across rooms, untraceable dangling cables and overheating consumer switches are the clearest signs. A physical site survey confirms the root cause.",
        },
        {
          q: "Do you install in occupied offices without halting operations?",
          a: "Yes. We sequence noisy or disruptive cutovers out of hours or by zone so staff stay productive.",
        },
        {
          q: "Do you supply the active networking hardware too?",
          a: "Yes—genuine switches, routers, access points and racks supplied with documentation and installed by the same team.",
        },
      ],
      ctaText: "Book a site assessment",
      whatsappPrefill:
        "Hello Nile ICT Solutions, I’d like to discuss ICT Infrastructure and Networking.",
    },

    cybersecurity: {
      seoTitle:
        "Cybersecurity Services for Businesses in Kenya | Assessments and Protection | Nile ICT",
      metaDescription:
        "Understand your real risks and close the gaps that matter. Nile ICT Solutions provides practical cybersecurity assessment, protection and staff training for organisations across Kenya.",
      h1: "Security you can see working.",
      answerFirst:
        "Cybersecurity brings together the controls, monitoring and habits that protect an organisation’s networks, devices and records from theft, ransomware and misuse. Nile ICT Solutions helps organisations in Nairobi and across Kenya assess exposure honestly, prioritise practical fixes and build lasting protection.",
      problem:
        "Most organisations don’t uncover their security weaknesses intentionally. They find out the hard way: a compromised mailbox, a locked server or a diverted supplier payment. By then the damage is public and every question is expensive.",
      processHeading: "How a security engagement runs",
      processSteps: [
        {
          step: "01",
          title: "Assess",
          desc: "We inspect networks, endpoints, user accounts, email rules, backups, physical access and habits.",
          deliverable: "A plain-language exposure summary showing where risk truly sits.",
        },
        {
          step: "02",
          title: "Prioritise",
          desc: "Practical fixes ranked by severity and cost so budget goes to real gaps first.",
          deliverable: "A concise, prioritised remediation action plan.",
        },
        {
          step: "03",
          title: "Protect",
          desc: "Firewalls, multi-factor authentication, role access controls, endpoint defence, patching and verified offline/cloud backups.",
        },
        {
          step: "04",
          title: "Train",
          desc: "Practical staff workshops and phishing awareness because informed people form your sharpest line of defence.",
        },
        {
          step: "05",
          title: "Prepare",
          desc: "A usable incident response sheet: who to contact, what to isolate and how recovery runs.",
        },
        {
          step: "06",
          title: "Review",
          desc: "Periodic posture checks so controls keep pace as staff and systems change.",
        },
      ],
      whatWeDoHeading: "Core security scope",
      whatWeDo: [
        "Network, device, account and backup vulnerability reviews",
        "Firewall configuration, MFA rollout and endpoint protection hardening",
        "Encrypted backup strategies with tested restore drills",
        "Practical employee security awareness training",
      ],
      whatYouGetHeading: "What you get",
      whatYouGet: [
        "An honest, jargon-free view of where your organisation is exposed",
        "Layered controls right-sized for your staffing and budget",
        "Teams trained to spot invoice fraud and phishing attempts early",
        "Tested backups you know can actually restore operations cleanly",
      ],
      isForYou: {
        yes: "Banks, SACCOs, NGOs, schools, hotels and businesses handling customer, donor or financial data—large or small.",
        no: "Organisations looking merely for a tick-box certificate without fixing genuine configuration or human gaps.",
      },
      firstStep: {
        title: "Cybersecurity Starter Checklist",
        desc: "Essential baseline hygiene checks covering MFA, backups, email spoofing and access controls for Kenyan teams.",
      },
      faqs: [
        {
          q: "What should I ask before choosing a cybersecurity partner?",
          a: "Ask exactly what they inspect, who performs the remediation, how findings are explained and what ongoing support looks like. Avoid anyone selling fear or a generic package before understanding your setup.",
        },
        {
          q: "Is our organisation too small to worry about cyber threats?",
          a: "No. Smaller and mid-sized organisations are frequently targeted precisely because basic controls like MFA and offline backups are often missing.",
        },
        {
          q: "Can you coordinate specialised testing if required?",
          a: "Yes—where specialist external penetration testing is required beyond baseline posture and configuration reviews, we scope that transparently upfront.",
        },
        {
          q: "How does cybersecurity connect to Kenya’s Data Protection Act, 2019?",
          a: "The Act requires organisations holding personal data to maintain appropriate technical and organisational safeguards. We help implement practical security controls; for formal legal advice, consult qualified legal counsel.",
        },
      ],
      ctaText: "Request a security assessment",
      whatsappPrefill:
        "Hello Nile ICT Solutions, I’d like to discuss a Cybersecurity Assessment.",
    },

    cctvSecurity: {
      seoTitle:
        "CCTV Installation in Nairobi | Security Systems for Offices and Sites | Nile ICT",
      metaDescription:
        "Professional CCTV and security system design, installation and maintenance in Nairobi, with privacy-aware setup. Nile ICT Solutions serves offices, hotels, schools and commercial sites.",
      h1: "Know what’s happening on your premises, even when you’re not there.",
      answerFirst:
        "A commercial CCTV and security system combines well-placed cameras, recorders, reliable storage and secure access to safeguard people, assets and premises. Nile ICT Solutions designs, installs and maintains surveillance and access systems in Nairobi and across Kenya, planned around real blind spots and privacy responsibilities.",
      problem:
        "A camera that captures nothing usable is worse than no camera at all—it creates false confidence without protection. Often lenses are aimed poorly or storage silently stopped overwriting in March, leaving an empty screen the day footage is actually needed.",
      processHeading: "How a CCTV project runs",
      processSteps: [
        {
          step: "01",
          title: "Site survey and risk walk",
          desc: "We inspect gates, corridors, blind spots, lighting contrast and perimeter sightlines.",
          deliverable: "A coverage plan marked clearly against your site layout.",
        },
        {
          step: "02",
          title: "Design",
          desc: "Matching camera optics, night clarity, PoE cabling routes, UPS backup and storage retention sizing.",
          deliverable: "A clear coverage specification and itemised quote.",
        },
        {
          step: "03",
          title: "Install",
          desc: "Genuine cameras, NVRs and cabling mounted securely, neatly sealed and labelled.",
        },
        {
          step: "04",
          title: "Configure",
          desc: "Recording schedules, multi-tier viewing roles, encrypted remote mobile viewing and storage alerts.",
        },
        {
          step: "05",
          title: "Hand over",
          desc: "Practical walkthrough on finding and exporting footage cleanly plus documented logins and maps.",
        },
        {
          step: "06",
          title: "Maintain",
          desc: "Routine health checks confirming cameras stay clear, disks record cleanly and timestamps stay accurate.",
        },
      ],
      specialNote: {
        title: "Privacy and compliance, handled sensibly.",
        body: "Cameras capturing identifiable people typically bring obligations as a data controller under Kenya’s Data Protection Act, 2019. We help you apply sensible engineering choices—responsible camera angles that avoid neighbouring intrusion, clear notice signage guidance, restricted NVR viewing accounts and defined storage retention. These are practical design steps, not legal advice; always verify specific statutory obligations with your legal counsel.",
      },
      whatWeDoHeading: "What we can help with",
      whatWeDo: [
        "High-definition IP CCTV cameras, NVRs and dedicated surveillance storage",
        "Perimeter, entrance, reception and cash-desk sightline planning",
        "Structured PoE cabling and dedicated backup power for uninterrupted recording",
        "Door access control and alarm coordination where required",
      ],
      whatYouGetHeading: "What you get",
      whatYouGet: [
        "Sharp, usable footage across key entrances and operational zones",
        "Fast footage retrieval when reviewing specific timestamps or incidents",
        "Secure authenticated viewing on mobile and office screens",
        "An installation partner who tests and supports the system ongoing",
      ],
      isForYou: {
        yes: "Offices, hotels and lodges, schools and campuses, shops, warehouses and commercial buildings across Kenya.",
      },
      firstStep: {
        title: "CCTV Buyer’s Checklist",
        desc: "Practical questions to ask any installer—covering genuine hardware, night clarity, storage calculation and privacy setup.",
      },
      faqs: [
        {
          q: "How much does CCTV installation cost in Nairobi?",
          a: "Cost depends on camera count, optical resolution, cabling distance, power backup and how many days of footage you want archived. We issue an itemised written quote after inspecting the premises.",
        },
        {
          q: "Can I view cameras securely from my phone?",
          a: "Yes. We configure secure remote mobile viewing with individual credentials and walk your authorised staff through safe usage.",
        },
        {
          q: "How long should CCTV footage be retained?",
          a: "It depends on your operational risks and institutional policies—commonly 30 to 90 days. We size hard drives explicitly around your target retention window.",
        },
        {
          q: "Do we need to consider Office of the Data Protection Commissioner rules?",
          a: "Many commercial, hospitality and school CCTV deployments involve registration and notice obligations under Kenya’s Data Protection Act. Check ODPC guidance or consult your lawyer; we provide clear technical system specs to support your compliance.",
        },
        {
          q: "Can you add biometric access control alongside CCTV?",
          a: "Yes—integrated door access and time-attendance readers can be scoped alongside surveillance where needed.",
        },
      ],
      ctaText: "Book a site survey",
      whatsappPrefill:
        "Hello Nile ICT Solutions, I’d like to discuss CCTV and Security Systems.",
    },

    managedItSupport: {
      seoTitle:
        "Managed IT Support in Nairobi | IT Support for Businesses | Nile ICT Solutions",
      metaDescription:
        "Reliable ongoing IT support, monitoring, maintenance and a real person to call. Nile ICT Solutions supports offices and organisations across Nairobi and Kenya.",
      h1: "Your IT team, without the overhead.",
      answerFirst:
        "Managed IT support is an ongoing service that keeps an organisation’s computers, networks, accounts, backups and software running reliably through proactive maintenance, monitoring and responsive help-desk care. Nile ICT Solutions supports offices across Nairobi and Kenya with clear scopes and a named contact.",
      problem:
        "The printer stalls, the Wi-Fi dips before a client presentation, a new employee needs laptop setup, and every minor issue lands on the same overloaded colleague—or waits unattended until systems seize up.",
      processHeading: "How managed support runs",
      processSteps: [
        {
          step: "01",
          title: "Onboard",
          desc: "We inventory workstations, servers, network devices, licences and warranties and fix pressing bottlenecks first.",
          deliverable: "A documented ICT asset and warranty register.",
        },
        {
          step: "02",
          title: "Agree the service",
          desc: "Define hours, covered sites, response channels, on-site visits and escalation clearly before retainers begin.",
          deliverable: "A plain-language service agreement with zero hidden terms.",
        },
        {
          step: "03",
          title: "Support daily",
          desc: "Direct help-desk access via phone, WhatsApp and email—combining quick remote fixes with scheduled or priority on-site support.",
        },
        {
          step: "04",
          title: "Maintain proactively",
          desc: "Operating system patches, backup verification, cleanups, account onboarding/offboarding and firmware updates.",
        },
        {
          step: "05",
          title: "Report simply",
          desc: "A concise periodic summary of resolved tickets, asset health and upcoming lifecycle renewals.",
        },
      ],
      whatWeDoHeading: "What is covered",
      whatWeDo: [
        "Employee help-desk troubleshooting across laptops, desktops and printers",
        "Network, router, switch, Wi-Fi and backup health monitoring",
        "New-hire workstation setup and clean leaver access removal",
        "Coordinating ISPs, telco links and vendor warranty claims on your behalf",
      ],
      whatYouGetHeading: "What you get",
      whatYouGet: [
        "Fewer workday interruptions and faster recovery when glitches appear",
        "Predictable monthly IT budgeting rather than erratic emergency callout bills",
        "One team who already knows your cabling, logins and equipment history",
      ],
      isForYou: {
        yes: "Growing offices, NGOs, SACCOs, schools and hospitality teams that want dependable IT care without hiring multiple full-time specialists.",
      },
      firstStep: {
        title: "IT Support & Asset Baseline Review",
        desc: "Start with an audit of your device fleet, backup reliability and support pain points to right-size your cover.",
      },
      faqs: [
        {
          q: "How is managed support different from calling a technician when things break?",
          a: "Break-fix waits for downtime before acting. Managed support maintains updates, backups and network health proactively so most disruptions are prevented before staff notice.",
        },
        {
          q: "What is included in a support retainer?",
          a: "Everything defined in your agreed schedule—help desk, routine maintenance, monitoring and agreed site visits. Out-of-scope hardware or major projects are always quoted upfront.",
        },
        {
          q: "Can you support computers and networks we already own?",
          a: "Yes, in most cases. We start with a physical inventory and health audit so any pre-existing risks are documented clearly.",
        },
        {
          q: "How is managed IT support priced?",
          a: "Usually a predictable monthly retainer matched to your user/device count, number of sites and required coverage hours.",
        },
      ],
      ctaText: "Request a support proposal",
      whatsappPrefill:
        "Hello Nile ICT Solutions, I’d like to discuss Managed IT Support for our organisation.",
    },

    softwareDevelopment: {
      seoTitle:
        "Custom Software Development in Nairobi | From Idea to Launch | Nile ICT Solutions",
      metaDescription:
        "Turn an idea or a spreadsheet-driven process into secure, maintainable software. Nile ICT Solutions designs, builds and supports custom software in Nairobi and across Kenya.",
      h1: "Software that fits your business like it was made for it. Because it was.",
      answerFirst:
        "Custom software development creates tailored applications—from internal operations platforms and customer portals to new digital products—designed cleanly around specific workflows. Nile ICT Solutions engineers maintainable software in Nairobi and across Kenya in clear, visible phases so you keep full control from scope to launch.",
      problem:
        "You have a clear process or service idea held together by spreadsheets and manual effort—but you have heard of software projects running over budget and late with nothing usable to show.",
      processHeading: "How a software build runs",
      processSteps: [
        {
          step: "01",
          title: "Scoping workshop",
          desc: "We turn your concept or spreadsheet process into a clear scope—defining what belongs in Release 1 and what waits.",
          deliverable: "A concise scope document and phased cost/time estimate.",
        },
        {
          step: "02",
          title: "Smallest useful first release",
          desc: "We prioritise a focused core version so real staff or customers test value early.",
        },
        {
          step: "03",
          title: "Short cycles with demos",
          desc: "Working software every few weeks with plain progress summaries.",
        },
        {
          step: "04",
          title: "Quality & security checks",
          desc: "Scenario validation, role permissions, input sanitisation and backup routines verified before release.",
        },
        {
          step: "05",
          title: "Launch & handover",
          desc: "Production deployment, documentation and hands-on team onboarding.",
        },
        {
          step: "06",
          title: "Support & iteration",
          desc: "Bug fixes and measured improvements guided by how real users operate.",
        },
      ],
      whatWeDoHeading: "Core build scope",
      whatWeDo: [
        "Turn raw product ideas or manual processes into structured functional scopes",
        "Clean user interfaces your staff can adopt without thick manuals",
        "Maintainable web platforms, portals and supporting APIs",
        "Integrations with payments, messaging and existing business databases",
      ],
      whatYouGetHeading: "What you get",
      whatYouGet: [
        "Software shaped around your exact workflows rather than forcing workarounds",
        "Regular live software demos instead of months of silence",
        "A cleanly documented codebase built to maintain and grow",
      ],
      isForYou: {
        yes: "Startups, SMEs and departments turning an idea or complex spreadsheet workflow into dedicated software. For multi-department integrations, also explore Enterprise Software.",
      },
      firstStep: {
        title: "Software Brief Template",
        desc: "Organise your core users, key actions and must-have goals onto one clear page before gathering quotes.",
      },
      faqs: [
        {
          q: "How much does custom software cost?",
          a: "Cost depends on scope and integrations. After an initial scoping session, we provide a phased written estimate so you can start focused and expand cleanly.",
        },
        {
          q: "How is code ownership and licensing handled?",
          a: "Ownership, repository handover and licensing arrangements are stated explicitly in the project contract before coding begins.",
        },
        {
          q: "How long does it take to launch a first version?",
          a: "Focused initial releases typically take weeks to a few months depending on complexity. We commit to a realistic milestone schedule in writing.",
        },
        {
          q: "Can you rescue or improve software built previously?",
          a: "Often, yes—starting with a short architecture and code quality audit so we can advise honestly whether to refactor or rebuild.",
        },
      ],
      ctaText: "Discuss your software project",
      whatsappPrefill:
        "Hello Nile ICT Solutions, I’d like to discuss a Custom Software Development project.",
    },

    webMobileApps: {
      seoTitle: "Web and Mobile App Development in Kenya | Nile ICT Solutions",
      metaDescription:
        "Web apps and mobile apps designed around your users and built to work on modest phones and uneven connections. Nile ICT Solutions builds, launches and supports them across Kenya.",
      h1: "Apps your customers and teams will actually enjoy using.",
      answerFirst:
        "A web or mobile application lets customers or field teams order, book, pay, learn, submit records or check statuses through a browser or smartphone. Nile ICT Solutions designs and builds fast, intuitive apps in Nairobi and across Kenya, optimised for everyday Android devices and real local network conditions.",
      problem:
        "A great app gets out of the user’s way so they finish what they came to do in seconds. A cluttered one generates support calls asking how to log in or why forms hang on slower mobile data.",
      processHeading: "How an app project runs",
      processSteps: [
        {
          step: "01",
          title: "Understand the users",
          desc: "Who uses the app, on what devices, in what bandwidth conditions and what task matters most.",
          deliverable: "A focused user brief and priority journey list.",
        },
        {
          step: "02",
          title: "Design the journey",
          desc: "Clean mobile-first flows built for small screens and restrained data usage.",
          deliverable: "Clickable prototypes ready for user feedback.",
        },
        {
          step: "03",
          title: "Build lean",
          desc: "Web app, mobile app or paired platform keeping Release 1 cleanly focused.",
        },
        {
          step: "04",
          title: "Integrate",
          desc: "Connect payments, SMS/email alerts, maps and your backend databases safely.",
        },
        {
          step: "05",
          title: "Test on real devices",
          desc: "Verified across modest Android handsets and intermittent connections.",
        },
        {
          step: "06",
          title: "Launch and support",
          desc: "Web or store rollout, usage analytics and ongoing compatibility maintenance.",
        },
      ],
      whatWeDoHeading: "Our app engineering focus",
      whatWeDo: [
        "Fast browser web applications and dedicated mobile apps",
        "Low-bandwidth, mobile-first layouts tailored to Kenyan user habits",
        "Seamless integration with mobile money, notifications and core platforms",
        "App lifecycle support across OS updates and new feature releases",
      ],
      whatYouGetHeading: "What you get",
      whatYouGet: [
        "A digital experience customers and field staff trust and use easily",
        "Lower pressure on customer support lines",
        "An application designed to grow feature by feature",
      ],
      isForYou: {
        yes: "Organisations launching customer portals, member apps, field collection tools or digital services across mobile and web.",
      },
      firstStep: {
        title: "App Idea Canvas",
        desc: "A concise one-page worksheet to clarify target users, core screens and offline/payment needs before spending on build.",
      },
      faqs: [
        {
          q: "Should we build a web app or a native mobile app first?",
          a: "If customers need instant access from any phone without installing anything, a responsive web app often wins first. Where offline field sync, GPS or native push notifications are central, a mobile app makes sense.",
        },
        {
          q: "Can our app keep working offline in the field?",
          a: "Yes—where offline data capture and background sync are required, we design local storage and conflict-handling in from day one.",
        },
        {
          q: "Do you handle Google Play and Apple App Store publishing?",
          a: "We prepare signed store builds and compliance assets cleanly and support publishing directly to your organisation’s developer accounts.",
        },
        {
          q: "Will you maintain the app after launch?",
          a: "Yes. OS updates, dependency patches, bug fixes and incremental features are covered through ongoing support.",
        },
      ],
      ctaText: "Talk about your app idea",
      whatsappPrefill:
        "Hello Nile ICT Solutions, I’d like to talk about a Web or Mobile App idea.",
    },

    websiteDevelopment: {
      seoTitle:
        "Business Website Design and Development in Nairobi | Nile ICT Solutions",
      metaDescription:
        "Fast, search-friendly business websites that build trust and bring in enquiries. Nile ICT Solutions designs and builds websites for organisations across Kenya.",
      h1: "A website that works as hard as your best salesperson.",
      answerFirst:
        "A business website is your organisation’s most visible digital front door—the first check customers, partners and tenders run before making contact. Nile ICT Solutions designs and builds fast, accessible, search-friendly websites in Nairobi that explain your offer clearly, support Google and AI answer visibility, and convert the right enquiries.",
      problem:
        "Too many websites are built simply to sit online. They look adequate, explain very little, bury answers and leave visitors unsure why they should call—sending strong prospects quietly elsewhere.",
      processHeading: "How a website project runs",
      processSteps: [
        {
          step: "01",
          title: "Message first",
          desc: "We clarify who visits, what builds trust and what action matters most.",
          deliverable: "A clear messaging hierarchy and structured sitemap.",
        },
        {
          step: "02",
          title: "Clear copy & structure",
          desc: "Plain-language copy structured cleanly for buyers, search engines and AI answer engines.",
        },
        {
          step: "03",
          title: "Design",
          desc: "Crisp, responsive layouts aligned with your brand that read cleanly on any screen size.",
        },
        {
          step: "04",
          title: "Build for speed & SEO",
          desc: "Fast loading, semantic HTML, accessible navigation, structured metadata, schema and clean URLs built from day one.",
        },
        {
          step: "05",
          title: "Enquiry set-up",
          desc: "Working forms, WhatsApp/call actions, email routing and privacy-conscious analytics.",
        },
        {
          step: "06",
          title: "Launch & care",
          desc: "Redirect mapping from legacy URLs, pre-launch checks and optional maintenance cover.",
        },
      ],
      whatWeDoHeading: "What is built in",
      whatWeDo: [
        "Audience-led site architecture and clear value messaging",
        "Modern responsive Next.js / web development engineered for speed",
        "Technical SEO, canonical URLs, sitemaps and accurate JSON-LD schema",
        "Conversion-focused forms, WhatsApp integration and redirect hygiene",
      ],
      whatYouGetHeading: "What you get",
      whatYouGet: [
        "Visitors understand what you do and why to trust you within seconds",
        "Higher-quality enquiries from customers who already understand your fit",
        "A fast, maintainable foundation you can expand smoothly",
      ],
      isForYou: {
        yes: "Organisations replacing outdated brochure sites or launching credible digital presences engineered for real commercial enquiries.",
      },
      firstStep: {
        title: "Website First-Impressions Review",
        desc: "A concise structural walkthrough showing what confuses visitors, slows mobile loading or leaks enquiries on your existing site.",
      },
      faqs: [
        {
          q: "How long does a business website project take?",
          a: "Most focused corporate sites complete in weeks rather than months, largely paced by copy sign-off and content readiness. We set a clear milestone calendar upfront.",
        },
        {
          q: "Can you help structure or write the website content?",
          a: "Yes—clear words sell and rank far better than filler, so messaging architecture is part of how we plan sites.",
        },
        {
          q: "Will our website automatically appear at number one on Google or AI answers?",
          a: "No ethical agency can promise rankings. What we guarantee is clean technical speed, crawlable HTML, structured schema and clear answer-first copy that gives search engines and AI assistants accurate facts to cite.",
        },
        {
          q: "Who owns our domain, hosting and website code?",
          a: "Everything is registered and documented transparently under your agreed ownership and contract terms.",
        },
        {
          q: "Can you redesign our old site without losing existing search visibility?",
          a: "Yes. We map every legacy URL via clean 301 redirects before launch so existing links and search equity transfer intact.",
        },
      ],
      ctaText: "Request a website proposal",
      whatsappPrefill:
        "Hello Nile ICT Solutions, I’d like to request a Website Development proposal.",
    },

    digitalMarketing: {
      seoTitle:
        "Digital Marketing for Businesses in Nairobi | SEO and Online Campaigns | Nile ICT",
      metaDescription:
        "Search, content and social campaigns tied to enquiries, not vanity numbers. Nile ICT Solutions helps organisations in Kenya grow online with honest reporting.",
      h1: "Be found by people already looking for you.",
      answerFirst:
        "Digital marketing uses search visibility, practical content, email and targeted campaigns to connect your services with active buyers online. Nile ICT Solutions helps organisations in Nairobi and across Kenya attract qualified prospects and turn clicks into real enquiries with transparent reporting.",
      problem:
        "Everyone tells you to post more, boost more and join every platform. Yet months later, the simple question stays unanswered: which spend is actually bringing paying clients?",
      processHeading: "How a marketing engagement runs",
      processSteps: [
        {
          step: "01",
          title: "Audit",
          desc: "Inspect your website conversion flow, search visibility, local profile and competitor landscape.",
          deliverable: "A focused audit pinpointing your highest-impact opportunities.",
        },
        {
          step: "02",
          title: "Strategy",
          desc: "Define target buyers, real questions they search, channels that fit and clear enquiry metrics.",
          deliverable: "A practical campaign and content plan.",
        },
        {
          step: "03",
          title: "Set up tracking",
          desc: "Google Business Profile hygiene, privacy-aware analytics, form/WhatsApp/call attribution.",
        },
        {
          step: "04",
          title: "Run campaigns",
          desc: "Publish buyer-answering search content and targeted campaigns where decision-makers look.",
        },
        {
          step: "05",
          title: "Report honestly",
          desc: "Monthly summaries showing real enquiries generated, cost per enquiry and next actions.",
        },
        {
          step: "06",
          title: "Refine",
          desc: "Cut underperforming spend and double down on channels proving genuine ROI.",
        },
      ],
      whatWeDoHeading: "What we can help with",
      whatWeDo: [
        "Search engine optimisation (SEO), answer-ready content and local business profile hygiene",
        "Targeted search and digital awareness campaigns tied to landing pages",
        "Conversion-focused copy and enquiry tracking setup",
        "Plain-language monthly performance reporting",
      ],
      whatYouGetHeading: "What you get",
      whatYouGet: [
        "Traffic aligned with organisations that actually need your work",
        "Transparent enquiry numbers rather than vanity impression counts",
        "Search authority that compounds month by month",
      ],
      isForYou: {
        yes: "B2B firms, schools, hospitality groups and service brands ready to tie digital spend directly to tracked enquiries.",
      },
      firstStep: {
        title: "Digital Presence & Search Snapshot",
        desc: "A quick look at how clearly your services appear for buyers searching in Nairobi and across Kenya.",
      },
      faqs: [
        {
          q: "How long before we see enquiries?",
          a: "Targeted search campaigns can bring relevant leads quickly once landing pages are ready. Organic SEO compounds over months. We set realistic expectations upfront and never promise overnight rankings.",
        },
        {
          q: "How do you structure pricing?",
          a: "Depending on scope, engagements run either as focused setup projects or monthly retainers with ad media spend kept completely separate and transparent.",
        },
        {
          q: "Do you handle full daily social media management?",
          a: "We focus primarily on search visibility, campaign acquisition and conversion journeys, and scope light channel support only where agreed.",
        },
        {
          q: "What counts as a real marketing result?",
          a: "Qualified forms submitted, phone calls, WhatsApp conversations and consultation bookings from prospects matching your ideal client profile.",
        },
      ],
      ctaText: "Request a digital review",
      whatsappPrefill:
        "Hello Nile ICT Solutions, I’d like to discuss Digital Marketing and Search Visibility.",
    },

    equipmentSupply: {
      seoTitle:
        "ICT Equipment Supplier in Nairobi | Genuine Computers, Networking, Furniture | Nile ICT",
      metaDescription:
        "Genuine computers, networking hardware, CCTV, office furniture, stationery and consumables, supplied and set up by Nile ICT Solutions for offices in Nairobi and across Kenya.",
      h1: "Genuine equipment, chosen for your work and set up properly.",
      answerFirst:
        "ICT equipment supply covers specifying, sourcing, configuring and delivering genuine workstations, servers, networking hardware, peripherals and workplace essentials. Nile ICT Solutions equips offices in Nairobi and across Kenya with warranted products chosen specifically for how teams work—not whatever happens to sit in a warehouse.",
      problem:
        "A bargain laptop battery that dies in a month. A router that overheats by noon. Toner cartridges that ruin drum units. The market is crowded with counterfeit and grey-market hardware, and the cheapest quote is rarely the cheapest outcome.",
      processHeading: "How supply works",
      processSteps: [
        {
          step: "01",
          title: "Understand the workload",
          desc: "What software staff run, how many workstations are needed, and what must connect cleanly.",
          deliverable: "A concise hardware specification brief.",
        },
        {
          step: "02",
          title: "Itemised options",
          desc: "Clear itemised quotations comparing dependable budget, business and executive specifications so you decide knowingly.",
        },
        {
          step: "03",
          title: "Source genuinely",
          desc: "Procured through reputable suppliers with verifiable serials and manufacturer warranty documentation.",
        },
        {
          step: "04",
          title: "Configure before delivery",
          desc: "Bench-test, label assets and pre-configure agreed operating systems and software before arrival.",
        },
        {
          step: "05",
          title: "Deliver and install",
          desc: "Put in place and connected cleanly so equipment is ready for day one.",
        },
        {
          step: "06",
          title: "After-sales care",
          desc: "Straightforward warranty support and troubleshooting through one team.",
        },
      ],
      productCategories: [
        "Computers, laptops & workstations",
        "Networking switches, routers & access points",
        "Printers, scanners & genuine consumables",
        "CCTV cameras, NVRs & security hardware",
        "Servers, storage & UPS power backup",
        "Office furniture & ergonomic setups",
        "Office stationery & everyday consumables",
        "Licensed software & business tools",
      ],
      whatWeDoHeading: "Core supply scope",
      whatWeDo: [
        "Workload-matched specification instead of one-size-fits-all selling",
        "Genuine computers, servers, networking gear and peripherals with documentation",
        "Workspace furniture, stationery and ongoing office consumables",
        "Pre-delivery imaging, setup, installation and warranty support",
      ],
      whatYouGetHeading: "What you get",
      whatYouGet: [
        "Hardware matched accurately to staff tasks and longevity targets",
        "Authentic products backed by clear warranties you can actually claim",
        "One accountable partner handling sourcing, installation and after-sales support",
      ],
      isForYou: {
        yes: "Organisations buying workstations, upgrading office networks, replacing servers or equipping new floors and branches.",
      },
      firstStep: {
        title: "ICT Procurement Checklist",
        desc: "Ten direct questions every procurement and IT team should ask before signing off on hardware quotes in Kenya.",
      },
      faqs: [
        {
          q: "How do we know supplied equipment is genuine?",
          a: "We source from reputable channel distributors and provide clear itemised invoices, serial records and official warranty documentation.",
        },
        {
          q: "Can you supply hardware and handle full installation together?",
          a: "Yes—our technical team configures, labels, installs and tests what we supply so nothing falls between separate dealers and installers.",
        },
        {
          q: "Do you also supply office furniture, stationery and consumables?",
          a: "Yes—alongside ICT hardware, we help equip offices with ergonomic furniture, printers, toners, stationery and ongoing workplace consumables.",
        },
        {
          q: "Can you quote across different specification tiers?",
          a: "Yes. We lay out good, better and executive hardware options side by side with pros and cons so budgets stretch smartly.",
        },
      ],
      ctaText: "Request an equipment quote",
      whatsappPrefill:
        "Hello Nile ICT Solutions, I’d like to request an ICT Equipment quote.",
    },

    officeRelocation: {
      seoTitle: "Office ICT Setup and Relocation in Nairobi | Nile ICT Solutions",
      metaDescription:
        "Moving or opening an office? Nile ICT Solutions plans and delivers networks, equipment, security and furniture so you start working from day one.",
      h1: "Move offices. Keep working.",
      answerFirst:
        "Office ICT setup and relocation covers planning, coordinating and installing everything technology-related when opening or moving premises—cabling, racks, Wi-Fi, connectivity, CCTV, workstations and office setup. Nile ICT Solutions coordinates the complete move in Nairobi so staff sit down to working desks on day one.",
      problem:
        "Monday morning, new office. Leases are signed, desks are assembled, yet cables trail loose, the internet connection isn’t live and nobody knows which crate holds the firewall.",
      processHeading: "How an office move runs",
      processSteps: [
        {
          step: "01",
          title: "Plan early",
          desc: "Once the lease is signed, we review floor plans alongside your fit-out contractor or landlord.",
          deliverable: "A coordinated ICT floor layout and move-backwards timeline.",
        },
        {
          step: "02",
          title: "Order in time",
          desc: "Factor lead times for ISP relocation, fiber trunks, furniture and racks before move week.",
        },
        {
          step: "03",
          title: "Prepare new premises",
          desc: "Structured cabling, server rack, Wi-Fi and CCTV installed ahead of furniture placement.",
        },
        {
          step: "04",
          title: "Move cleanly",
          desc: "Tag, disconnect, transport and reconnect existing servers and workstations outside peak hours.",
        },
        {
          step: "05",
          title: "Test every point",
          desc: "Verify internet failover, every network socket, printer, camera and voice desk before Monday arrival.",
        },
        {
          step: "06",
          title: "Day-one floor support",
          desc: "Engineers remain on hand during initial launch days to catch minor desk tweaks smoothly.",
        },
      ],
      whatWeDoHeading: "Core relocation scope",
      whatWeDo: [
        "Pre-move ICT site survey, floor-plan coordination and cabling blueprint",
        "ISP link transfer coordination and server rack build at the new site",
        "Supply and placement of workstations, CCTV, access control and furniture",
        "Weekend/out-of-hours decommissioning, transport and day-one testing",
      ],
      whatYouGetHeading: "What you get",
      whatYouGet: [
        "A working, tested office from the very first morning in the new space",
        "Clean network documentation rather than hurried temporary patch leads",
        "Dedicated engineers supporting staff directly on move-in day",
      ],
      isForYou: {
        yes: "Organisations moving offices, opening regional branches or fitting out newly leased corporate floors.",
      },
      firstStep: {
        title: "Office Move ICT Checklist",
        desc: "A move-backwards sequence covering ISP lead times, cabling milestones, backups and day-one testing.",
      },
      faqs: [
        {
          q: "How early should we involve Nile ICT Solutions in an office move?",
          a: "Ideally as soon as the new lease or floor plan is agreed. ISP link transfers and interior trunking almost always take longer than moving furniture.",
        },
        {
          q: "Can you prepare a new office from an empty shell floor?",
          a: "Yes. We coordinate ceiling/trunk cabling routes during fit-out, equip the server closet, install Wi-Fi and CCTV, and stage desks ready for arrival.",
        },
        {
          q: "What should we send you first when planning a move?",
          a: "Your floor plan, target move date, total staff count, current ISP details and an inventory of equipment migrating vs. being replaced.",
        },
        {
          q: "Will our team face downtime during cutover?",
          a: "We build the new environment parallel where possible and execute final server/workstation migration over weekends or evenings to keep disruption minimal.",
        },
      ],
      ctaText: "Plan your office move with us",
      whatsappPrefill:
        "Hello Nile ICT Solutions, we’re planning an office setup or relocation in Nairobi.",
    },
  },
};

// Expose legacy direct property accessors gracefully so no existing code breaks
Object.assign(SERVICES_PAGES_COPY, SERVICES_PAGES_COPY.items);
