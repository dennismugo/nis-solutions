import type {
  ChallengeItem,
  EngagementStep,
  FaqEntry,
  SolutionCopyItem,
} from "./aboutCopy";
import type { SolutionModuleItem } from "@/components/solutions/StackingSolutionCards";

export interface RichSolutionItem extends SolutionCopyItem {
  solutionNumber?: string;
  categoryGroup?: "Infrastructure & Security" | "Software & Digital" | "Equipment & Workplace" | "Business Systems";
  heroOutcomeSubtitle?: string;
  challenges?: (string | ChallengeItem)[];
  modules?: SolutionModuleItem[];
  nextStepBody?: string;
}

export const TEN_CORE_SOLUTIONS: Record<string, RichSolutionItem> = {
  itConsulting: {
    solutionNumber: "SOLUTION 01 / INFRASTRUCTURE & SECURITY",
    categoryGroup: "Infrastructure & Security",
    seoTitle: "IT Consulting Services in Kenya | Strategic Technology Guidance | Nile ICT",
    metaDescription:
      "Make technology decisions that move your business forward. Practical IT consulting, infrastructure assessments and technology roadmaps in Kenya by Nile ICT Solutions.",
    h1: "Make technology decisions that move your business forward.",
    heroOutcomeSubtitle: "IT Consulting · Practical planning & strategic technical guidance",
    answerFirst:
      "Technology should make running your business easier, not more complicated. Without the right strategy, businesses can invest in disconnected systems, unnecessary software, outdated infrastructure and technology that cannot keep up with growth. Nile ICT Solutions helps organisations make informed technology decisions through practical IT consulting, strategic planning and technical guidance.",
    problem:
      "Businesses often invest in disconnected systems, outdated infrastructure or overlapping vendor recommendations without a clear roadmap connecting technology spend to operational goals.",
    challenges: [
      {
        symptom: "Unplanned spend that rarely improves daily work",
        impact:
          "Without an operational roadmap, businesses buy software licences and servers piecemeal—paying recurring bills for tools staff work around.",
      },
      {
        symptom: "Disconnected systems hiding critical numbers",
        impact:
          "Finance, operations and branches maintain separate databases, forcing teams to reconcile reports manually every week.",
      },
      {
        symptom: "Recurring technical fires slowing down teams",
        impact:
          "Reactive patching instead of root-cause architecture keeps staff waiting on slow systems, outages and workarounds during peak hours.",
      },
      {
        symptom: "Security & scalability blind spots as you grow",
        impact:
          "Outdated configurations expose sensitive data while blocking new branches, digital channels or compliance requirements.",
      },
    ],
    modules: [
      {
        title: "IT infrastructure assessment",
        desc: "Review hardware, networks, systems and IT processes to identify weaknesses, inefficiencies and improvement opportunities.",
      },
      {
        title: "Technology strategy and roadmapping",
        desc: "Develop a practical roadmap that prioritises investments, implementation stages and business objectives.",
      },
      {
        title: "IT procurement advisory",
        desc: "Identify suitable products, specifications and solutions based on requirements and budget.",
      },
      {
        title: "IT risk and security assessment",
        desc: "Identify potential exposure across systems, access, infrastructure and data management, then recommend appropriate controls.",
      },
      {
        title: "Digital transformation guidance",
        desc: "Identify opportunities to modernise manual processes, integrate business systems and improve productivity.",
      },
      {
        title: "Technology project planning",
        desc: "Support project scoping, technical requirements, vendor coordination, implementation planning and quality evaluation.",
      },
    ],
    engagementStepsHeading: "How we deliver",
    engagementSteps: [
      { step: "01", title: "Understand your business", desc: "Understand your business, operations, challenges, objectives and expectations." },
      { step: "02", title: "Assess current environment", desc: "Assess existing infrastructure, software, hardware, connectivity, security and IT processes.", deliverable: "Assessment summary of current environment." },
      { step: "03", title: "Identify risks & waste", desc: "Identify inefficiencies, risks, unnecessary expenditure and opportunities for improvement." },
      { step: "04", title: "Develop prioritised roadmap", desc: "Develop a roadmap prioritised by business impact, urgency, budget and implementation complexity.", deliverable: "Board-ready technology roadmap & budget sequence." },
      { step: "05", title: "Support implementation", desc: "Support agreed implementation activities and coordinate with internal teams where required." },
      { step: "06", title: "Review & improve", desc: "Review results and identify opportunities for continued improvement." },
    ],
    whatWeDoHeading: "Core advisory capabilities",
    whatWeDo: [
      "IT infrastructure assessment across hardware, networks and processes",
      "Technology strategy, sequencing and board-ready roadmapping",
      "Vendor-aligned procurement specifications matched to budget",
      "IT risk review and project implementation oversight",
    ],
    whatYouGetHeading: "The value to your business",
    whatYouGet: [
      "Better-informed technology investments.",
      "Reduced unnecessary IT expenditure.",
      "Improved system reliability and operational efficiency.",
      "Greater visibility into technology risks.",
      "Better alignment between IT and business objectives.",
      "A scalable technology foundation for future growth.",
    ],
    whoItIsFor:
      "Small and medium-sized businesses, enterprises, educational institutions, NGOs, professional service firms and organisations planning technology upgrades or digital transformation.",
    nextStepBody:
      "Your next technology investment deserves a clear plan. Let’s evaluate where you are, identify what needs improvement and establish the right direction for your business.",
    ctaText: "Book an IT Consultation",
    whatsappPrefill: "Hello Nile ICT Solutions, I’d like to book an IT Consultation.",
    faqs: [
      {
        q: "Do you work with businesses that already have an IT department?",
        a: "Yes. Consulting can complement an internal IT team with additional technical expertise, independent assessment and strategic guidance.",
      },
      {
        q: "Can you assess our current systems before recommending anything?",
        a: "Yes. Assessment should come before recommendations so proposed solutions are relevant to the existing environment.",
      },
      {
        q: "Do you help with implementation or only provide advice?",
        a: "We can support agreed implementation activities as well as planning, depending on the project scope.",
      },
    ],
    relatedSlugs: ["infrastructure-networking", "cybersecurity", "software-development"],
  },

  infrastructureNetworking: {
    solutionNumber: "SOLUTION 02 / INFRASTRUCTURE & SECURITY",
    categoryGroup: "Infrastructure & Security",
    seoTitle: "Network Infrastructure & Structured Cabling in Kenya | Nile ICT Solutions",
    metaDescription:
      "Build a connected workplace that works without interruption. Structured cabling, LAN/WAN, enterprise Wi-Fi and server rack setup by Nile ICT Solutions.",
    h1: "Build a connected workplace that works without interruption.",
    heroOutcomeSubtitle: "Infrastructure & Networking · Reliable connectivity across offices & sites",
    answerFirst:
      "Every successful digital operation depends on a reliable network. From employees accessing business applications to departments sharing information and managing daily operations, network infrastructure keeps everything moving. Nile ICT Solutions designs, implements and supports network infrastructure that connects people, devices and business systems cleanly.",
    problem:
      "Unstable Wi-Fi, slow file transfers, poorly documented cabling and dead zones silently stall daily collaboration across offices and branches.",
    challenges: [
      {
        symptom: "Wi-Fi drops and dead zones breaking calls & tills",
        impact:
          "Consumer routers and poorly placed access points knock cloud apps, VoIP calls and POS checkouts offline right when customers wait.",
      },
      {
        symptom: "Tangled, undocumented cabling that slows every fix",
        impact:
          "When patch panels and racks lack labels or testing records, tracking one faulty port takes hours of disruptive guesswork.",
      },
      {
        symptom: "Network congestion & exposed internal switches",
        impact:
          "Flat, unsegmented networks let guest devices share bandwidth and visibility with accounting servers, printers and cameras.",
      },
      {
        symptom: "Infrastructure that chokes as headcount & sites grow",
        impact:
          "Ad-hoc switches and unlinked branches fail silently when teams add users, cloud backups, new desks or extra floors.",
      },
    ],
    modules: [
      {
        title: "Structured cabling",
        desc: "Plan and install Cat5e, Cat6 and Cat6A cabling where appropriate, including patch panels, network cabinets, termination, labelling and testing.",
      },
      {
        title: "LAN and WAN networking",
        desc: "Design local and wide-area networks, including switches, routers, VLANs, network segmentation and inter-office connectivity.",
      },
      {
        title: "Wi-Fi design and installation",
        desc: "Assess wireless coverage, position access points, configure business and guest Wi-Fi, and optimise coverage.",
      },
      {
        title: "Network security and management",
        desc: "Configure firewalls, segmentation, secure remote access, access controls and network monitoring where included.",
      },
      {
        title: "Server room and network cabinet setup",
        desc: "Organise racks, cabinets, cable management, power planning and network equipment integration.",
      },
    ],
    engagementStepsHeading: "How we deliver",
    engagementSteps: [
      { step: "01", title: "Site survey", desc: "Conduct a site survey of building layout, current infrastructure, users and connectivity needs.", deliverable: "Survey findings & cable route notes." },
      { step: "02", title: "Architecture & plan", desc: "Prepare the network architecture, cabling plan, equipment specifications and deployment approach.", deliverable: "Network architecture & itemised bill of materials." },
      { step: "03", title: "Approved sourcing", desc: "Source approved equipment and prepare installation components." },
      { step: "04", title: "Physical installation", desc: "Install cabling, network cabinets, switches, routers and wireless access points." },
      { step: "05", title: "Security & configuration", desc: "Configure devices, security controls, wireless access and connectivity." },
      { step: "06", title: "Test & hand over", desc: "Test connectivity, coverage and performance, then provide agreed documentation and handover.", deliverable: "Port documentation & test records." },
      { step: "07", title: "Maintain", desc: "Provide maintenance, troubleshooting and network improvements under the agreed support arrangement." },
    ],
    whatWeDoHeading: "Infrastructure scope",
    whatWeDo: [
      "Structured Cat5e / Cat6 / Cat6A cabling, patch panels and termination testing",
      "Enterprise LAN/WAN design, VLAN segmentation and dual-link failover",
      "Floor-wide business and guest Wi-Fi access point planning",
      "Clean server rack dressing, UPS power protection and documentation",
    ],
    whatYouGetHeading: "The value to your business",
    whatYouGet: [
      "Consistent connectivity across workspaces.",
      "Improved collaboration and communication.",
      "Better network performance and resource sharing.",
      "More organised and manageable infrastructure.",
      "Improved security through appropriate network controls.",
      "Infrastructure that can expand with the business.",
      "Reduced disruption caused by preventable network issues.",
    ],
    whoItIsFor:
      "Corporate offices, schools, universities, hospitals, hotels, retail facilities, warehouses, commercial buildings and multi-site organisations.",
    nextStepBody:
      "Your business deserves a network built for performance. Let’s design the infrastructure that keeps your people, systems and operations connected.",
    ctaText: "Plan Your Network Infrastructure",
    whatsappPrefill: "Hello Nile ICT Solutions, I’d like to plan our Network Infrastructure.",
    faqs: [
      {
        q: "Can you upgrade our existing network without replacing everything?",
        a: "Yes. We assess what is already installed and determine which components can be retained, improved or replaced.",
      },
      {
        q: "Can you install Wi-Fi across an entire building?",
        a: "Yes. We assess coverage requirements, identify access point locations and design a wireless network around the building and expected users.",
      },
      {
        q: "Do you provide network maintenance?",
        a: "Yes. Ongoing support and maintenance can be arranged according to the infrastructure and support requirements.",
      },
    ],
    relatedSlugs: ["it-consulting", "cybersecurity", "office-setup-relocation"],
  },

  cybersecurity: {
    solutionNumber: "SOLUTION 03 / INFRASTRUCTURE & SECURITY",
    categoryGroup: "Infrastructure & Security",
    seoTitle: "Business Cybersecurity Services in Kenya | Nile ICT Solutions",
    metaDescription:
      "Protect your business before threats become costly disruptions. Practical cybersecurity assessments, firewalls, endpoint security and awareness in Kenya.",
    h1: "Protect your business before threats become costly disruptions.",
    heroOutcomeSubtitle: "Cybersecurity · Practical risk reduction & access protection",
    answerFirst:
      "Your business depends on customer records, financial data and internal systems that need protection. Nile ICT Solutions strengthens cybersecurity across Nairobi and Kenya through practical assessments, protective controls, access governance and staff training—closing exposure without overcomplicating daily work.",
    problem:
      "Phishing links, unpatched vulnerabilities, weak passwords and untested backups frequently go unnoticed until an active incident locks down operations.",
    challenges: [
      {
        symptom: "Phishing, ransomware & account compromise risks",
        impact:
          "One persuasive email or reused password can lock operational servers, expose payroll or client data and freeze revenue for days.",
      },
      {
        symptom: "Ex-staff and shared logins holding live access",
        impact:
          "Without central MFA, role-based access and timely offboarding, former employees and shared accounts stay open to sensitive systems.",
      },
      {
        symptom: "Unpatched firewalls, laptops & legacy servers",
        impact:
          "Missed OS updates and default router settings leave known entry points open long after security fixes were released.",
      },
      {
        symptom: "Untested backups discovered only during crises",
        impact:
          "Teams assume cloud sync equals recovery—only learning during hardware failure or encryption attacks that clean restores aren’t viable.",
      },
    ],
    modules: [
      {
        title: "Security assessment and risk identification",
        desc: "Review the IT environment to identify weaknesses, exposed systems, access risks and gaps in security controls. Deliverables may include an assessment report, risk register and remediation roadmap.",
      },
      {
        title: "Network and firewall security",
        desc: "Help protect the network through firewall deployment, configuration, traffic control and network segmentation.",
      },
      {
        title: "Endpoint protection",
        desc: "Strengthen computers, laptops and other business devices through appropriate endpoint protection, configuration and update practices.",
      },
      {
        title: "Identity and access management",
        desc: "Control who can access systems and what they are permitted to do, including permissions, multi-factor authentication and account reviews.",
      },
      {
        title: "Data protection and backup",
        desc: "Safeguard important information through backup strategies, access restrictions, encryption where applicable and recovery planning.",
      },
      {
        title: "Security awareness & monitoring",
        desc: "Help employees recognise phishing attempts and suspicious links, alongside reviewing security events, configurations and controls over time.",
      },
    ],
    engagementStepsHeading: "How we deliver",
    engagementSteps: [
      { step: "01", title: "Discover", desc: "Discover the business, systems, data, users and existing security arrangements." },
      { step: "02", title: "Assess exposure", desc: "Assess vulnerabilities, access controls, infrastructure and potential threats within the agreed scope.", deliverable: "Security assessment report & risk register." },
      { step: "03", title: "Prioritise risks", desc: "Prioritise risks according to potential business impact.", deliverable: "Ranked remediation roadmap." },
      { step: "04", title: "Implement safeguards", desc: "Implement agreed measures such as firewalls, endpoint protection, access controls and backup improvements." },
      { step: "05", title: "Validate & test", desc: "Validate configurations and test agreed controls and backup restores." },
      { step: "06", title: "Ongoing reviews", desc: "Provide recommendations for ongoing security maintenance and periodic posture reviews." },
    ],
    whatWeDoHeading: "Security controls covered",
    whatWeDo: [
      "Security posture audits, risk registers and prioritised remediation roadmaps",
      "Next-gen firewall hardening, VLAN segmentation and Wi-Fi isolation",
      "Multi-factor authentication (MFA), role permissions and endpoint protection",
      "Backup strategy testing and staff phishing awareness",
    ],
    whatYouGetHeading: "The value to your business",
    whatYouGet: [
      "Reduced exposure to cyber threats.",
      "Better protection of sensitive information.",
      "Stronger control over employee and system access.",
      "Improved business continuity readiness.",
      "Greater awareness of security risks.",
      "Increased confidence among customers and business partners.",
      "A clearer understanding of your security posture.",
    ],
    whoItIsFor:
      "Businesses handling customer information, financial records, confidential documents or critical digital systems—particularly financial services, education, healthcare, professional services and retail.",
    nextStepBody:
      "Don’t wait for a security incident to expose the gaps. Start by understanding your risks and building a stronger security foundation.",
    ctaText: "Request a Security Assessment",
    whatsappPrefill: "Hello Nile ICT Solutions, I’d like to request a Security Assessment.",
    faqs: [
      {
        q: "Does cybersecurity only apply to large organisations?",
        a: "No. Businesses of every size can be exposed to cyber threats. Appropriate protection depends on the systems, information and risks involved.",
      },
      {
        q: "Can you secure our existing IT infrastructure?",
        a: "Yes. We can assess the existing environment and recommend improvements before considering major replacements.",
      },
      {
        q: "Can you help if we have already experienced a security incident?",
        a: "We can help assess the affected IT environment and coordinate technical remediation within an agreed scope. Serious incidents may also require specialist incident-response, legal and regulatory support.",
      },
    ],
    relatedSlugs: ["infrastructure-networking", "cctv-security-systems", "it-consulting"],
  },

  cctvSecurity: {
    solutionNumber: "SOLUTION 04 / INFRASTRUCTURE & SECURITY",
    categoryGroup: "Infrastructure & Security",
    seoTitle: "CCTV Installation & Security Systems in Nairobi | Nile ICT Solutions",
    metaDescription:
      "See more. Protect better. Stay in control. Site survey, camera placement, NVR storage and privacy-aware CCTV installation by Nile ICT Solutions.",
    h1: "See more. Protect better. Stay in control.",
    heroOutcomeSubtitle: "CCTV & Security Systems · Premise surveillance & control",
    answerFirst:
      "Knowing what is happening across your premises is essential to maintaining a safe, well-managed environment. Nile ICT Solutions designs, installs and maintains commercial CCTV and integrated security systems in Nairobi and Kenya—from site walk and camera angles to NVR recording, retention sizing and handset viewing.",
    problem:
      "Blind spots at gates, grainy night footage and recorders that quietly stopped storing weeks earlier leave premises unprotected when clarity matters most.",
    challenges: [
      {
        symptom: "Critical blind spots at tills, gates & loading bays",
        impact:
          "Poorly angled cameras leave entrances, stock rooms and perimeter yards uncovered right where inventory shrinkage or disputes happen.",
      },
      {
        symptom: "Blurry night footage useless for incident review",
        impact:
          "Low-grade sensors and glare turn faces, cash notes and number plates into smears precisely when evidence is needed most.",
      },
      {
        symptom: "Recorders discovered offline only after a theft",
        impact:
          "Failing hard drives and short retention loops overwrite key evidence before management even realises an incident occurred.",
      },
      {
        symptom: "Siloed cameras across branches with slow playback",
        impact:
          "Operations managers waste hours visiting sites physically instead of reviewing incidents cleanly from authorised devices.",
      },
    ],
    modules: [
      {
        title: "CCTV camera installation",
        desc: "Supply and install suitable IP, dome, bullet, PTZ, night-vision and weather-protected cameras according to project needs.",
      },
      {
        title: "NVR and DVR systems",
        desc: "Configure recording systems to capture, manage and store footage, including storage planning and recording configuration.",
      },
      {
        title: "Remote monitoring access",
        desc: "Where supported by the equipment and network, configure secure access to feeds and recordings for authorised users.",
      },
      {
        title: "Surveillance infrastructure",
        desc: "Install supporting network cabling, power arrangements, equipment cabinets and connectivity.",
      },
      {
        title: "Maintenance and optimisation",
        desc: "Provide agreed camera checks, connectivity troubleshooting, recording verification, equipment replacement and configuration reviews.",
      },
    ],
    engagementStepsHeading: "How we deliver",
    engagementSteps: [
      { step: "01", title: "Premises risk walk", desc: "Assess the premises, access points, vulnerable areas and surveillance objectives.", deliverable: "Site risk walk notes & blind-spot assessment." },
      { step: "02", title: "Coverage planning", desc: "Plan camera positions, viewing angles, image quality and areas requiring special attention.", deliverable: "Marked camera coverage layout & itemised specification." },
      { step: "03", title: "Equipment specification", desc: "Specify cameras, recorders, storage capacity, network requirements and supporting equipment." },
      { step: "04", title: "Clean installation", desc: "Install cameras, cabling, recording equipment and infrastructure." },
      { step: "05", title: "Recording & permissions", desc: "Configure recording schedules, user permissions, network access and supported monitoring features." },
      { step: "06", title: "Verification & handover", desc: "Verify camera feeds, recording quality, storage operation and authorised viewing access." },
      { step: "07", title: "Ongoing servicing", desc: "Provide agreed servicing and technical support to help keep the system operational." },
    ],
    controlsHeading: "Privacy & Data Protection Considerations",
    controls: [
      "Intentional camera framing focused on authorised premises to avoid neighbouring intrusion",
      "Role-separated NVR viewing credentials and audit logs rather than shared logins",
      "Defined hard-drive retention schedules sized honestly to operational risk",
      "Notice signage and technical specifications supporting your legal/ODPC compliance review under Kenya’s Data Protection Act, 2019",
    ],
    whatWeDoHeading: "Surveillance & security scope",
    whatWeDo: [
      "IP dome, bullet, PTZ and weather-protected night-vision camera systems",
      "NVR / DVR storage sizing for continuous or motion-triggered retention",
      "PoE structured cabling, dedicated UPS backup and secured cabinets",
      "Remote authenticated mobile viewing and scheduled maintenance checks",
    ],
    whatYouGetHeading: "The value to your business",
    whatYouGet: [
      "Improved visibility across the premises.",
      "Better monitoring of entrances and critical areas.",
      "Recorded evidence to support incident investigations.",
      "Greater awareness of activity across the facility.",
      "More organised security monitoring.",
      "Ability to expand coverage as requirements change.",
    ],
    whoItIsFor:
      "Schools, office buildings, retail shops, shopping centres, warehouses, factories, residential properties, hotels and commercial facilities.",
    nextStepBody:
      "Make every important area easier to monitor. Let’s assess your premises and design a surveillance system that meets your security requirements.",
    ctaText: "Request a CCTV Site Survey",
    whatsappPrefill: "Hello Nile ICT Solutions, I’d like to request a CCTV Site Survey.",
    faqs: [
      {
        q: "Can I view my cameras remotely?",
        a: "Yes, where the selected system supports remote access and the required secure network configuration is available.",
      },
      {
        q: "Can you upgrade an existing CCTV system?",
        a: "Yes. We assess existing cameras and recording equipment to determine what can be retained, upgraded or replaced.",
      },
      {
        q: "How long can CCTV footage be stored?",
        a: "This depends on the number of cameras, recording resolution, recording settings, storage capacity and retention requirements.",
      },
    ],
    relatedSlugs: ["cybersecurity", "infrastructure-networking", "office-setup-relocation"],
  },

  softwareDevelopment: {
    solutionNumber: "SOLUTION 05 / SOFTWARE & DIGITAL",
    categoryGroup: "Software & Digital",
    seoTitle: "Custom Software Development in Kenya | Nile ICT Solutions",
    metaDescription:
      "Software designed around the way your business actually works. Business management systems, workflow automation, APIs and modernisation in Kenya.",
    h1: "Software designed around the way your business actually works.",
    heroOutcomeSubtitle: "Software Development · Tailored operational platforms & integrations",
    answerFirst:
      "When rigid applications fail your workflows, teams end up relying on scattered spreadsheets and repetitive manual checks. Nile ICT Solutions develops custom business management software, internal tools, workflow automation and API integrations tailored directly around your operations.",
    problem:
      "Repetitive admin work, isolated departmental spreadsheets and rigid off-the-shelf software slow reporting and create avoidable manual errors.",
    challenges: [
      {
        symptom: "Operations running on disconnected Excel workbooks",
        impact:
          "Critical approvals, reconciliations and pricing rules live in scattered spreadsheets where one broken formula stalls whole departments.",
      },
      {
        symptom: "Teams duplicating entries across siloed software",
        impact:
          "Staff export data from one platform and retype it into accounting, messaging or portals—slowing fulfilment and multiplying errors.",
      },
      {
        symptom: "Delayed operational & margin visibility",
        impact:
          "Without unified workflow tracking and API links, management spots delays, customer churn or cost overruns days after the fact.",
      },
      {
        symptom: "Rigid tools blocking unique service advantages",
        impact:
          "Generic packages force your team to slow down and follow foreign processes instead of automating the way you win clients.",
      },
    ],
    modules: [
      {
        title: "Business management systems",
        desc: "Develop custom inventory, stock, HR, payroll, CRM, financial and operational management applications.",
      },
      {
        title: "Enterprise applications",
        desc: "Build applications supporting complex workflows, multiple departments, user roles, reporting and operational management.",
      },
      {
        title: "Workflow automation",
        desc: "Reduce repetitive work by automating tasks, approvals, notifications, data handling and recurring processes.",
      },
      {
        title: "Database and information management",
        desc: "Design structured databases and management interfaces to organise, retrieve and manage business information.",
      },
      {
        title: "API and system integration",
        desc: "Connect compatible applications so information can move between systems with less duplication and manual intervention.",
      },
      {
        title: "Software modernisation",
        desc: "Assess existing applications and improve usability, performance, functionality, architecture or integration capabilities where appropriate.",
      },
    ],
    engagementStepsHeading: "How we deliver",
    engagementSteps: [
      { step: "01", title: "Requirements discovery", desc: "Gather requirements by understanding the business problem, users, workflows and expected outcomes." },
      { step: "02", title: "Architecture & roadmap", desc: "Define software structure, functionality, data requirements, integrations, security and roadmap.", deliverable: "Written functional scope & phased release plan." },
      { step: "03", title: "Journeys & interface design", desc: "Map user journeys and design intuitive interfaces.", deliverable: "Reviewed interactive screen prototypes." },
      { step: "04", title: "Build & integrate", desc: "Build agreed functionality, configure systems and implement integrations." },
      { step: "05", title: "Test controls & flows", desc: "Test workflows, permissions, data handling, functionality, responsiveness and relevant security controls." },
      { step: "06", title: "Deploy & onboard", desc: "Deploy the application and help users understand the system cleanly." },
      { step: "07", title: "Maintain & enhance", desc: "Provide agreed maintenance, issue resolution and future enhancements." },
    ],
    whatWeDoHeading: "Core software engineering",
    whatWeDo: [
      "Custom internal operational, finance, HR, stock and service software",
      "Multi-department workflows with role permissions and approvals",
      "Two-way API connections across accounting, payments and CRM tools",
      "Phased modernisation of brittle legacy applications",
    ],
    whatYouGetHeading: "The value to your business",
    whatYouGet: [
      "Less repetitive manual work.",
      "More consistent business processes.",
      "Improved accuracy and information management.",
      "Better visibility into operational performance.",
      "Easier collaboration between departments.",
      "Greater control over business workflows.",
      "Software that can grow with changing requirements.",
    ],
    whoItIsFor:
      "SMEs, corporate organisations, schools, healthcare facilities, logistics companies, financial service providers, retail businesses, NGOs and institutions with specialised processes.",
    nextStepBody:
      "Your business processes deserve better than workarounds. Tell us what is slowing your operations down. Let’s develop a system that makes the work easier.",
    ctaText: "Discuss Your Software Project",
    whatsappPrefill: "Hello Nile ICT Solutions, I’d like to discuss a Custom Software project.",
    faqs: [
      {
        q: "Do you develop software from scratch?",
        a: "Yes. Custom development is suitable when existing products cannot adequately address your requirements.",
      },
      {
        q: "Can you improve an existing software system?",
        a: "Yes. We can assess existing applications and establish a modernisation or enhancement plan.",
      },
      {
        q: "Will the software work on mobile devices?",
        a: "The interface can be designed for desktop, tablet and mobile usage according to project requirements.",
      },
      {
        q: "Can you integrate the software with other platforms?",
        a: "Yes, where the relevant platforms provide suitable APIs or other supported integration methods.",
      },
    ],
    relatedSlugs: ["web-mobile-applications", "enterprise-software", "automation"],
  },

  webMobileApps: {
    solutionNumber: "SOLUTION 06 / SOFTWARE & DIGITAL",
    categoryGroup: "Software & Digital",
    seoTitle: "Web & Mobile Application Development in Kenya | Nile ICT Solutions",
    metaDescription:
      "Bring your business closer to the people who use it. Customer portals, mobile apps, PWAs and system integrations built by Nile ICT Solutions.",
    h1: "Bring your business closer to the people who use it.",
    heroOutcomeSubtitle: "Web & Mobile Applications · Connected apps & client portals",
    answerFirst:
      "Customers and staff expect fast, accessible digital tools across phones and browsers. Nile ICT Solutions designs and develops web portals, mobile apps and integrated customer platforms—turning operational needs into intuitive experiences tailored for everyday Kenyan connectivity and devices.",
    problem:
      "Manual booking and registration bottlenecks, poor mobile usability and disconnected portals keep customers calling support desks for tasks they could complete in seconds.",
    challenges: [
      {
        symptom: "Phone & walk-in queues for routine service tasks",
        impact:
          "Forcing clients to call, email or fill paper slips for orders, bookings or status checks raises support costs and loses impatient buyers.",
      },
      {
        symptom: "Clunky portals that fail on Kenya mobile data",
        impact:
          "Desktop-heavy interfaces stall on low-bandwidth smartphones, causing abandoned sign-ups and failed M-Pesa payment hand-offs.",
      },
      {
        symptom: "Apps disconnected from back-office finance & stock",
        impact:
          "When customer portals don't sync via clean APIs, teams end up retyping online orders manually into ERP or accounting ledgers.",
      },
      {
        symptom: "Zero unified view of digital customer accounts",
        impact:
          "Fragmented login tools make it hard to enforce role access, inspect transaction logs or maintain clean security governance.",
      },
    ],
    modules: [
      {
        title: "Web applications",
        desc: "Build browser-based customer portals, employee self-service platforms, booking systems, dashboards, client portals and operational platforms.",
      },
      {
        title: "Mobile applications",
        desc: "Develop Android, iOS or cross-platform applications for customer engagement, field operations and business management.",
      },
      {
        title: "Progressive Web Applications",
        desc: "Where appropriate, develop web applications with selected app-like capabilities, including installability and supported offline functions.",
      },
      {
        title: "User experience and interface design",
        desc: "Map user journeys and develop intuitive, accessible interfaces.",
      },
      {
        title: "Application integrations",
        desc: "Connect applications with supported services, databases, payment gateways, notification systems and existing business software.",
      },
    ],
    engagementStepsHeading: "How we deliver",
    engagementSteps: [
      { step: "01", title: "Audience & purpose", desc: "Identify the target audience, business purpose and problem the application must solve." },
      { step: "02", title: "Scope & priorities", desc: "Define user roles, functionality, workflows, integrations and project priorities." },
      { step: "03", title: "Wireframes & UI", desc: "Create user journeys, wireframes and interface designs before development.", deliverable: "Interactive mobile & browser UI prototypes." },
      { step: "04", title: "Full-stack build", desc: "Build the front end, back end, database and required integrations." },
      { step: "05", title: "Device & usability test", desc: "Test functionality, responsiveness, usability and compatibility across devices." },
      { step: "06", title: "Channel rollout", desc: "Deploy the application through the appropriate web or store channels." },
      { step: "07", title: "Support & scale", desc: "Provide agreed technical support, updates and future enhancements." },
    ],
    whatWeDoHeading: "Web & mobile capabilities",
    whatWeDo: [
      "Self-service customer portals, booking engines and operational dashboards",
      "Android, iOS and cross-platform mobile apps for staff and clients",
      "Progressive Web Apps (PWAs) supporting installability and resilient loading",
      "Payment gateway, alert and backend core platform integration",
    ],
    whatYouGetHeading: "The value to your business",
    whatYouGet: [
      "Easier access to services.",
      "Improved customer and employee experiences.",
      "More efficient digital transactions.",
      "Better communication and engagement.",
      "Reduced manual administration.",
      "Greater accessibility across devices.",
      "A digital platform that can evolve with the organisation.",
    ],
    whoItIsFor:
      "Businesses seeking customer portals, booking systems, mobile services, employee applications or operational platforms.",
    nextStepBody:
      "Have an application idea? Let’s make it work. From the first concept to a fully functional digital product, let’s build something that makes a difference.",
    ctaText: "Build Your Application",
    whatsappPrefill: "Hello Nile ICT Solutions, I’d like to talk about building a Web or Mobile Application.",
    faqs: [
      {
        q: "What is the difference between a website and a web application?",
        a: "A website primarily communicates information, while a web application provides interactive functionality such as accounts, bookings, transactions or operational tools. Some projects combine both.",
      },
      {
        q: "Do you build applications for both Android and iOS?",
        a: "We can scope native or cross-platform development based on audience, functionality, budget and technical requirements.",
      },
      {
        q: "Can my application connect to an existing business system?",
        a: "Yes, provided the existing system offers suitable integration capabilities.",
      },
      {
        q: "Can an application be developed in phases?",
        a: "Yes. We can prioritise a minimum viable product and introduce additional functionality in later releases.",
      },
    ],
    relatedSlugs: ["software-development", "website-development", "sacco-solutions-apps-api-gateway"],
  },

  websiteDevelopment: {
    solutionNumber: "SOLUTION 07 / SOFTWARE & DIGITAL",
    categoryGroup: "Software & Digital",
    seoTitle: "Professional Website Development in Kenya | Nile ICT Solutions",
    metaDescription:
      "Your website should do more than look good. Modern, responsive corporate websites, e-commerce platforms and technical SEO by Nile ICT Solutions.",
    h1: "Your website should do more than look good. It should move your business forward.",
    heroOutcomeSubtitle: "Website Development · Conversion architecture & technical SEO",
    answerFirst:
      "Your website is often the first place prospective clients, partners and evaluators inspect to decide whether to trust your organisation. Nile ICT Solutions designs and develops fast, mobile-first business websites in Nairobi structured around clear messaging, conversion paths and technical search foundations.",
    problem:
      "Outdated layouts, slow mobile loading, buried service pages and unclear calls to action quietly send qualified prospects elsewhere.",
    challenges: [
      {
        symptom: "A generic website that undersells your credibility",
        impact:
          "When procurement teams or institutional buyers compare websites before shortlisting vendors, dated templates cost deals silently.",
      },
      {
        symptom: "Visitors unclear on what you actually solve",
        impact:
          "Vague brochure headlines force prospective clients to bounce before ever spotting how your services solve their urgent need.",
      },
      {
        symptom: "Slow mobile pages & buried contact paths",
        impact:
          "Heavy unoptimised pages frustrate phone visitors on mobile data while unclear CTAs starve your sales desk of qualified leads.",
      },
      {
        symptom: "Weak technical SEO & missing trust proof",
        impact:
          "Poor search structure leaves high-intent Kenyan searchers landing on competitors instead of finding clear answers on your pages.",
      },
    ],
    modules: [
      {
        title: "Corporate and business websites",
        desc: "Create professional websites communicating the organisation, services, expertise and value proposition.",
      },
      {
        title: "E-commerce websites",
        desc: "Build online stores with product catalogues, carts, checkout, payment integration, order management, inventory features and customer accounts where required.",
      },
      {
        title: "Website redesign & landing pages",
        desc: "Transform outdated websites with improved navigation, content hierarchy, visual design and focused landing pages built for campaigns and conversions.",
      },
      {
        title: "Content management systems",
        desc: "Implement content management functionality so authorised users can update pages, images, articles and other content.",
      },
      {
        title: "Technical SEO foundations",
        desc: "Build logical page architecture, search-friendly URLs, metadata, heading structure, sitemaps, image optimisation, mobile responsiveness and structured data where relevant.",
      },
      {
        title: "Website maintenance and support",
        desc: "Provide agreed updates, technical maintenance, security checks and support.",
      },
    ],
    engagementStepsHeading: "How we deliver",
    engagementSteps: [
      { step: "01", title: "Objectives & audience", desc: "Understand the business, audience, competitors, services and website objectives." },
      { step: "02", title: "Sitemap & journeys", desc: "Develop the sitemap, page hierarchy, navigation structure and user journeys." },
      { step: "03", title: "Content hierarchy", desc: "Organise and write content that communicates services clearly and encourages action." },
      { step: "04", title: "Visual & UI direction", desc: "Create visual direction, page layouts, responsive components and interaction patterns." },
      { step: "05", title: "Engineering & build", desc: "Develop the website and integrate required functionality." },
      { step: "06", title: "Speed & SEO check", desc: "Test responsiveness, browser compatibility, loading performance, accessibility and SEO fundamentals." },
      { step: "07", title: "Deploy & verify", desc: "Configure deployment, connect the domain, verify functionality and provide handover." },
      { step: "08", title: "Ongoing optimisation", desc: "Continue with agreed maintenance, content updates and optimisation." },
    ],
    whatWeDoHeading: "Website deliverables",
    whatWeDo: [
      "Corporate websites, campaign landing pages and e-commerce builds",
      "Responsive mobile-first design systems and accessible navigation",
      "Technical SEO: clean URLs, schema markup, sitemaps and image speed",
      "CMS editing workflows, analytics and ongoing maintenance",
    ],
    whatYouGetHeading: "The value to your business",
    whatYouGet: [
      "A more credible digital presence.",
      "Clearer communication of services.",
      "Better experiences across desktop and mobile.",
      "Improved discoverability through search engines.",
      "Stronger opportunities to generate enquiries.",
      "Website architecture that can expand with the business.",
      "Better control over digital content and brand presentation.",
    ],
    whoItIsFor:
      "Startups, SMEs, established companies, schools, professional firms, NGOs, e-commerce businesses and organisations seeking a stronger online presence.",
    nextStepBody:
      "Let’s turn your website into a stronger business asset. Build a website that represents your business professionally and gives customers a reason to take the next step.",
    ctaText: "Start Your Website Project",
    whatsappPrefill: "Hello Nile ICT Solutions, I’d like to start a Website Development project.",
    faqs: [
      {
        q: "Will my website work on mobile devices?",
        a: "Yes. Responsive design is an essential part of our development approach.",
      },
      {
        q: "Will my website be optimised for Google?",
        a: "We build with technical SEO fundamentals in mind. Rankings depend on content quality, competition, authority and ongoing optimisation, so specific positions are not guaranteed.",
      },
      {
        q: "Can I update the website myself?",
        a: "Where a content management system is included, authorised users can manage supported website content.",
      },
      {
        q: "Can you redesign my existing website?",
        a: "Yes. We assess the current website and plan improvements around business goals, content and user experience.",
      },
    ],
    relatedSlugs: ["digital-marketing", "web-mobile-applications", "it-consulting"],
  },

  digitalMarketing: {
    solutionNumber: "SOLUTION 08 / SOFTWARE & DIGITAL",
    categoryGroup: "Software & Digital",
    seoTitle: "Digital Marketing, SEO, AEO & GEO Services in Kenya | Nile ICT Solutions",
    metaDescription:
      "Get discovered by the right people. Strategic SEO, AEO, GEO, content marketing, paid search and conversion optimisation in Kenya by Nile ICT Solutions.",
    h1: "Get discovered by the right people. Turn attention into business opportunities.",
    heroOutcomeSubtitle: "Digital Marketing · Search visibility, AEO/GEO & measurable leads",
    answerFirst:
      "Having a website is only part of building an effective digital presence—buyers also need to find you across Google and AI-assisted answer experiences. Nile ICT Solutions combines SEO, AEO, GEO, useful content and targeted campaigns so visibility turns into real commercial enquiries.",
    problem:
      "Low search visibility, fragmented social activity and non-converting landing pages consume marketing budgets without showing which channels generate enquiries.",
    challenges: [
      {
        symptom: "Invisible search presence for buyer-intent terms",
        impact:
          "Active Kenyan buyers search daily for the exact systems or services you sell—and shortlist competitors who appear cleanly in local results.",
      },
      {
        symptom: "Paid ad clicks that never turn into leads",
        impact:
          "Sending campaign traffic to unfocused pages or broad audiences burns marketing budget without delivering sales conversations.",
      },
      {
        symptom: "Disconnected social & search effort with zero rhythm",
        impact:
          "Sporadic posts without a clear positioning funnel fail to build familiarity among procurement leads and decision-makers.",
      },
      {
        symptom: "Zero clarity on which channel generates revenue",
        impact:
          "Without clean conversion tracking tied to enquiry quality, teams double down on vanity clicks instead of profitable channels.",
      },
    ],
    modules: [
      {
        title: "Search Engine Optimisation (SEO)",
        desc: "Improve technical foundations, content relevance and search visibility through audits, keyword research, on-page optimisation, content planning and monitoring.",
      },
      {
        title: "Answer Engine & Generative Optimisation (AEO / GEO)",
        desc: "Structure credible, answer-first information and structured schema so modern search engines and AI-assisted discovery tools accurately interpret your expertise.",
      },
      {
        title: "Paid search advertising",
        desc: "Plan targeted search campaigns with keyword targeting, ad creation, landing page alignment and performance analysis.",
      },
      {
        title: "Social media & content marketing",
        desc: "Develop articles, service guides and consistent social visibility answering genuine buyer questions.",
      },
      {
        title: "Conversion optimisation & analytics",
        desc: "Improve visitor-to-enquiry journeys through sharper calls to action, forms and properly configured analytics attribution.",
      },
    ],
    engagementStepsHeading: "How we deliver",
    engagementSteps: [
      { step: "01", title: "Objectives & buyers", desc: "Understand services, objectives, customer profiles and competitive environment." },
      { step: "02", title: "Digital audit", desc: "Audit website, search visibility, content, social channels and existing campaigns.", deliverable: "Priority visibility & conversion audit." },
      { step: "03", title: "Channel strategy", desc: "Identify relevant channels, priorities, messaging and campaign opportunities." },
      { step: "04", title: "Campaign execution", desc: "Execute agreed SEO, content, advertising and social media activities." },
      { step: "05", title: "Conversion refinement", desc: "Improve landing pages, calls to action and user journeys." },
      { step: "06", title: "Track & attribute", desc: "Track performance and identify what generates meaningful engagement and enquiries." },
      { step: "07", title: "Iterate continuously", desc: "Refine the strategy using performance insights and changing requirements." },
    ],
    whatWeDoHeading: "Growth & visibility scope",
    whatWeDo: [
      "Technical and content SEO paired with AEO / GEO structuring",
      "High-intent Google Ads & landing-page alignment",
      "Buyer-answering content & consistent brand messaging",
      "Conversion funnel tuning and enquiry attribution reporting",
    ],
    whatYouGetHeading: "The value to your business",
    whatYouGet: [
      "Improved online visibility.",
      "Better opportunities to reach relevant customers.",
      "Stronger brand awareness and positioning.",
      "More effective use of marketing budgets.",
      "Better understanding of audience behaviour.",
      "Improved website conversion opportunities.",
      "Measurable activity tied to business objectives.",
    ],
    whoItIsFor:
      "Businesses seeking stronger search visibility, more relevant website traffic, campaign management, brand awareness and measurable lead generation.",
    nextStepBody:
      "Your next customer could already be searching for you. Let’s build a digital marketing strategy that helps the right people discover your business and take action.",
    ctaText: "Grow Your Digital Presence",
    whatsappPrefill: "Hello Nile ICT Solutions, I’d like to discuss growing our Digital Presence.",
    faqs: [
      {
        q: "How long does SEO take to produce results?",
        a: "SEO is a long-term activity. Progress depends on competition, website condition, content quality and the work involved.",
      },
      {
        q: "Do you run paid advertising?",
        a: "We can plan and manage paid campaigns within an agreed scope and budget.",
      },
      {
        q: "Can you market a new business?",
        a: "Yes. We can develop a strategy to establish your digital presence and build awareness.",
      },
      {
        q: "Will you provide reports?",
        a: "Reporting can show agreed performance indicators, campaign activity and recommended improvements.",
      },
    ],
    relatedSlugs: ["website-development", "web-mobile-applications", "customer-relationship-management-crm"],
  },

  equipmentSupply: {
    solutionNumber: "SOLUTION 09 / EQUIPMENT & WORKPLACE",
    categoryGroup: "Equipment & Workplace",
    seoTitle: "ICT Equipment Supply in Kenya | Genuine Hardware & Procurement | Nile ICT",
    metaDescription:
      "The right technology. Sourced for your business. Ready to perform. Laptops, networking gear, servers, power backup and office equipment by Nile ICT Solutions.",
    h1: "The right technology. Sourced for your business. Ready to perform.",
    heroOutcomeSubtitle: "ICT Equipment Supply · Genuine sourcing, matching & deployment",
    answerFirst:
      "Every hardware purchase affects daily productivity and support longevity. Nile ICT Solutions equips offices in Nairobi and across Kenya through requirement-led specification, genuine hardware sourcing with transparent warranty records, pre-delivery configuration and deployment support.",
    problem:
      "Unclear hardware comparisons, inconsistent workstation specs across teams and counterfeit or incompatible equipment drive unplanned replacement costs.",
    challenges: [
      {
        symptom: "Grey-market hardware & disputed warranties",
        impact:
          "Unclear serial origins and cut-rate quotes leave IT teams stuck with failing batteries, slow disks or counterfeit routers with zero vendor support.",
      },
      {
        symptom: "Mismatched specs bought without compatibility checks",
        impact:
          "Devices procured purely by unit price often clash with PoE switches, firewall throughput, printer drivers or domain security policies.",
      },
      {
        symptom: "Mixed hardware fleet draining IT support time",
        impact:
          "Every department buying ad-hoc brands leaves technicians juggling spares, chargers and drivers instead of strategic projects.",
      },
      {
        symptom: "Boxes delivered without setup or accountability",
        impact:
          "Generic box-movers vanish at the reception desk, leaving internal staff to configure switches, printers and imaging unassisted.",
      },
    ],
    modules: [
      {
        title: "Computing equipment",
        desc: "Business laptops and desktops, workstations, monitors, tablets, accessories, docking stations and peripherals.",
      },
      {
        title: "Networking equipment",
        desc: "Routers, switches, wireless access points, firewalls, network cabinets, racks, patch panels and connectivity accessories.",
      },
      {
        title: "Server and storage equipment",
        desc: "Business servers, network storage, storage drives, backup storage hardware and server components.",
      },
      {
        title: "Printing and office technology",
        desc: "Printers, multifunction devices, scanners, projectors, presentation displays and document equipment.",
      },
      {
        title: "Power protection & licensing",
        desc: "UPS systems, surge/power protection, racks and business software licensing arrangements where supported.",
      },
    ],
    engagementStepsHeading: "How we deliver",
    engagementSteps: [
      { step: "01", title: "Establish workload", desc: "Establish equipment needs, intended users, operational environment and budget." },
      { step: "02", title: "Verify specifications", desc: "Identify suitable specifications, compatibility requirements and performance considerations." },
      { step: "03", title: "Present curated options", desc: "Present appropriate equipment options based on requirements and available supply." },
      { step: "04", title: "Itemised quotation", desc: "Provide a quotation outlining products, specifications, quantities and commercial terms.", deliverable: "Itemised part-number quotation & warranty terms." },
      { step: "05", title: "Coordinate genuine sourcing", desc: "Coordinate sourcing, order processing and delivery according to agreed terms." },
      { step: "06", title: "Setup & bench test", desc: "Where included, assist with setup, integration, configuration and testing." },
      { step: "07", title: "Handover & support", desc: "Provide agreed documentation, handover and support arrangements." },
    ],
    whatWeDoHeading: "Procurement scope",
    whatWeDo: [
      "Workstations, business laptops, displays and office peripherals",
      "Enterprise switches, routers, firewalls, racks and UPS power protection",
      "Servers, NAS storage, printers, scanners and workplace equipment",
      "Pre-delivery imaging, compatibility checks and local warranty coordination",
    ],
    whatYouGetHeading: "The value to your business",
    whatYouGet: [
      "Better-informed procurement decisions.",
      "Equipment matched to actual operational needs.",
      "Improved compatibility across the technology environment.",
      "Reduced risk of purchasing unsuitable products.",
      "More organised technology procurement.",
      "Smoother equipment deployment.",
      "Clearer approach to future upgrades and replacements.",
    ],
    whoItIsFor:
      "Corporate offices, educational institutions, healthcare facilities, NGOs, retail businesses and companies setting up or expanding IT environments.",
    nextStepBody:
      "Make every technology purchase count. Tell us what your organisation needs. We will help identify the right equipment and coordinate the next steps.",
    ctaText: "Request an Equipment Quotation",
    whatsappPrefill: "Hello Nile ICT Solutions, I’d like to request an Equipment Quotation.",
    faqs: [
      {
        q: "Can you supply equipment for an entire office?",
        a: "Yes. We can specify and coordinate multiple equipment categories based on project requirements and supply availability.",
      },
      {
        q: "Can you recommend equipment based on a budget?",
        a: "Yes. We can compare suitable specifications and identify practical options within an agreed budget.",
      },
      {
        q: "Do you install the equipment?",
        a: "Installation and configuration can be included as part of the project scope.",
      },
      {
        q: "Can you supply equipment for existing infrastructure?",
        a: "Yes. We assess compatibility requirements before recommending products.",
      },
    ],
    relatedSlugs: ["office-setup-relocation", "infrastructure-networking", "it-consulting"],
  },

  officeRelocation: {
    solutionNumber: "SOLUTION 10 / EQUIPMENT & WORKPLACE",
    categoryGroup: "Equipment & Workplace",
    seoTitle: "Office ICT Setup & Relocation in Kenya | Nile ICT Solutions",
    metaDescription:
      "Moving your office shouldn't mean putting your business on hold. Workplace ICT planning, structured cabling, server relocation and workstation setup in Nairobi.",
    h1: "Moving your office shouldn’t mean putting your business on hold.",
    heroOutcomeSubtitle: "Office Setup & Relocation · Connected desks from day one",
    answerFirst:
      "Opening a new floor or relocating an existing office involves coordinating computers, servers, structured cabling, ISP connections, security systems and business apps together. Nile ICT Solutions manages the technical planning, movement and handover so teams start working without disruption.",
    problem:
      "Delayed internet installs, unlabelled cable bundles, damaged transit hardware and unconfigured desks turn Monday move-in morning into days of stalled work.",
    challenges: [
      {
        symptom: "Days of lost productivity after moving offices",
        impact:
          "Unplanned cabling, delayed ISP hand-offs and tangled switch setups leave staff idle with no internet, printers or telephones on Monday morning.",
      },
      {
        symptom: "Hardware damage & undocumented patch cables",
        impact:
          "Packing servers, firewalls and UPS units like ordinary office furniture causes silent port failures and frantic troubleshooting post-move.",
      },
      {
        symptom: "CCTV, access control & Wi-Fi offline post-move",
        impact:
          "Moving without a unified IT & physical-security plan leaves entrances unmonitored and server racks exposed in the new space.",
      },
      {
        symptom: "Cluttered desks & patchy workstation readiness",
        impact:
          "Engineers spend days re-terminating cables and pairing staff docks one desk at a time instead of welcoming teams to a ready office.",
      },
    ],
    modules: [
      {
        title: "New office technology planning",
        desc: "Plan IT infrastructure, workstation and equipment requirements, network points, connectivity, server rooms, printers and power considerations.",
      },
      {
        title: "Workstation installation and configuration",
        desc: "Set up desktops, laptops, monitors, peripherals, business software, user accounts, printers and network access.",
      },
      {
        title: "Network and connectivity setup",
        desc: "Deploy structured cabling, switches, routers, Wi-Fi access points and network configuration.",
      },
      {
        title: "IT equipment & server relocation",
        desc: "Coordinate identification, disconnection, backup safety, downtime windows, movement and reconnection of critical hardware.",
      },
      {
        title: "Office technology integration",
        desc: "Bring computers, printers, networks, surveillance and relevant applications together in the intended environment.",
      },
    ],
    engagementStepsHeading: "How we deliver",
    engagementSteps: [
      { step: "01", title: "Workplace & inventory review", desc: "Discuss the current workplace, new location, requirements, equipment inventory and proposed schedule." },
      { step: "02", title: "Dependencies mapping", desc: "Identify devices, systems, connections and dependencies that need moving, installing or reconfiguring." },
      { step: "03", title: "Floor & network layout", desc: "Prepare network layout, cabling, equipment positions, connectivity and workstation arrangements.", deliverable: "Coordinated ICT floor layout & move timeline." },
      { step: "04", title: "Safe backup & move prep", desc: "Coordinate agreed technology relocation activities with preparation and backup arrangements for critical systems." },
      { step: "05", title: "Reconnection & setup", desc: "Reconnect and configure workstations, networking equipment, printers and other systems." },
      { step: "06", title: "Full-floor verification", desc: "Verify connectivity, access, device functionality and essential business applications." },
      { step: "07", title: "Handover & launch support", desc: "Confirm agreed systems are ready, document outstanding issues and provide handover and support." },
    ],
    whatWeDoHeading: "Office setup scope",
    whatWeDo: [
      "Early architectural floor-plan ICT layout & internet lead-time planning",
      "Structured cabling, Wi-Fi, server cabinet build and workstation staging",
      "Tagged equipment disconnection, backup prep and scheduled relocation",
      "End-to-end connectivity, printing, CCTV and application go-live checks",
    ],
    whatYouGetHeading: "The value to your business",
    whatYouGet: [
      "A more organised office transition.",
      "Reduced risk of avoidable downtime.",
      "Better coordination of IT equipment and infrastructure.",
      "Workstations prepared for employee productivity.",
      "Improved network and system readiness.",
      "Less disruption to business operations.",
      "A workplace technology environment ready for future growth.",
    ],
    whoItIsFor:
      "Companies moving offices, expanding to new branches, setting up new premises, renovating workplaces, relocating departments and establishing new business facilities.",
    nextStepBody:
      "A new workspace should be the beginning of better operations. Let’s plan your technology transition so your people and systems are ready when you need them.",
    ctaText: "Plan Your Office Setup",
    whatsappPrefill: "Hello Nile ICT Solutions, we want to plan our Office Setup or Relocation.",
    faqs: [
      {
        q: "Can you set up an entirely new office?",
        a: "Yes. We can plan and implement the ICT components of a new workplace according to the project scope.",
      },
      {
        q: "Can you relocate existing IT equipment?",
        a: "Yes. We can coordinate the handling, movement and reconnection of approved equipment.",
      },
      {
        q: "Will you help minimise downtime?",
        a: "We plan activities around operational requirements and can coordinate suitable migration windows. Actual downtime depends on system complexity and external dependencies.",
      },
      {
        q: "Can you set up the network at the new location?",
        a: "Yes. Network installation and configuration can be incorporated into the office setup project.",
      },
    ],
    relatedSlugs: ["infrastructure-networking", "ict-equipment-supply", "cctv-security-systems"],
  },
};
