export interface SolutionVisualPair {
  challengeImage: string;
  challengeAlt: string;
  valueImage: string;
  valueAlt: string;
}

const DEFAULT_VISUAL: SolutionVisualPair = {
  challengeImage: "/images/solutions/portraits/it-consulting.jpg",
  challengeAlt: "Kenyan enterprise leaders reviewing operational workflows in a modern office",
  valueImage: "/images/cta-woman-laptop-halftone.jpg",
  valueAlt: "Kenyan business leader working on integrated enterprise systems",
};

export const SOLUTION_VISUAL_MAP: Record<string, SolutionVisualPair> = {
  itConsulting: {
    challengeImage: "/images/solutions/portraits/it-consulting.jpg",
    challengeAlt: "Senior IT consultant leading a technology architecture session in a bright office",
    valueImage: "/images/cta-woman-laptop-halftone.jpg",
    valueAlt: "Kenyan executive reviewing a prioritised technology roadmap",
  },
  infrastructureNetworking: {
    challengeImage: "/images/solutions/portraits/infrastructure-networking.jpg",
    challengeAlt: "Network systems engineer monitoring enterprise server rack infrastructure",
    valueImage: "/images/industries/banking-halftone.jpg",
    valueAlt: "Connected Kenyan enterprise teams collaborating without interruption",
  },
  cybersecurity: {
    challengeImage: "/images/solutions/portraits/cybersecurity.jpg",
    challengeAlt: "Cybersecurity analyst reviewing network threat telemetry and firewall alerts in Nairobi",
    valueImage: "/images/industries/insurance-halftone.jpg",
    valueAlt: "Kenyan professionals operating with verified security and access controls",
  },
  cctvSecurity: {
    challengeImage: "/images/solutions/portraits/cctv-security.jpg",
    challengeAlt: "Security operations specialist monitoring live multi-site CCTV feeds in a control room",
    valueImage: "/images/industries/banking-halftone.jpg",
    valueAlt: "Kenyan management team with clear multi-site premise visibility",
  },
  managedItSupport: {
    challengeImage: "/images/solutions/portraits/managed-it-support.jpg",
    challengeAlt: "Managed IT support lead coordinating proactive systems troubleshooting with engineering peers",
    valueImage: "/images/industries/corporate-halftone.jpg",
    valueAlt: "Kenyan workplace team working uninterrupted with proactive IT support",
  },
  softwareDevelopment: {
    challengeImage: "/images/solutions/portraits/software-development.jpg",
    challengeAlt: "Software developer engineering custom business applications in a modern office",
    valueImage: "/images/industries/corporate-halftone.jpg",
    valueAlt: "Kenyan cross-department team collaborating on custom business software",
  },
  webMobileApps: {
    challengeImage: "/images/solutions/portraits/web-mobile-apps.jpg",
    challengeAlt: "Product engineers reviewing web and mobile application interfaces side by side",
    valueImage: "/images/cta-woman-laptop-halftone.jpg",
    valueAlt: "Kenyan team managing customer portals and mobile services",
  },
  websiteDevelopment: {
    challengeImage: "/images/solutions/portraits/website-development.jpg",
    challengeAlt: "Web developer building responsive digital experiences in a sunlit workspace",
    valueImage: "/images/industries/corporate-halftone.jpg",
    valueAlt: "Kenyan service team converting online visitors into customer enquiries",
  },
  digitalMarketing: {
    challengeImage: "/images/solutions/portraits/digital-marketing.jpg",
    challengeAlt: "Digital marketing strategist managing omnichannel campaigns and brand analytics",
    valueImage: "/images/industries/corporate-halftone.jpg",
    valueAlt: "Kenyan strategist tracking search visibility and campaign conversions",
  },
  equipmentSupply: {
    challengeImage: "/images/solutions/portraits/equipment-supply.jpg",
    challengeAlt: "IT specialist provisioning laptops and workplace hardware at a clean workstation",
    valueImage: "/images/industries/corporate-halftone.jpg",
    valueAlt: "Kenyan office equipped with compatible, enterprise-grade hardware",
  },
  officeRelocation: {
    challengeImage: "/images/solutions/portraits/office-relocation.jpg",
    challengeAlt: "Workplace infrastructure team planning office cabling and conference room technology setup",
    valueImage: "/images/cta-woman-laptop-halftone.jpg",
    valueAlt: "Kenyan team member productive from day one in a ready office",
  },
  coreBanking: {
    challengeImage: "/images/solutions/portraits/core-banking.jpg",
    challengeAlt: "Banking executive overseeing digital core banking and branch modernisation",
    valueImage: "/images/industries/insurance-halftone.jpg",
    valueAlt: "Kenyan financial leadership operating on reconciled, audit-ready data",
  },
  insuranceManagement: {
    challengeImage: "/images/solutions/portraits/insurance-management.jpg",
    challengeAlt: "Insurance operations manager reviewing policy portfolios and claims automation",
    valueImage: "/images/industries/banking-halftone.jpg",
    valueAlt: "Kenyan insurance operations team managing policies and statutory returns",
  },
  documentManagement: {
    challengeImage: "/images/solutions/portraits/document-management.jpg",
    challengeAlt: "Records specialist indexing and approving digital documents on an enterprise tablet",
    valueImage: "/images/industries/corporate-halftone.jpg",
    valueAlt: "Kenyan leadership retrieving approved documents with full audit trails",
  },
  enterpriseSoftware: {
    challengeImage: "/images/solutions/portraits/enterprise-software.jpg",
    challengeAlt: "Enterprise leadership coordinating cross-departmental software workflows",
    valueImage: "/images/cta-woman-laptop-halftone.jpg",
    valueAlt: "Kenyan executive reviewing live operational performance",
  },
  automation: {
    challengeImage: "/images/solutions/portraits/automation.jpg",
    challengeAlt: "Solutions architect mapping automated approval workflows with a tablet on a whiteboard",
    valueImage: "/images/industries/banking-halftone.jpg",
    valueAlt: "Kenyan team benefiting from automated approvals and real-time alerts",
  },
  schoolManagement: {
    challengeImage: "/images/solutions/portraits/school-management.jpg",
    challengeAlt: "Academic administrator and educator reviewing student records and school schedules",
    valueImage: "/images/cta-woman-laptop-halftone.jpg",
    valueAlt: "Kenyan school leadership using unified academic and finance portals",
  },
  supermarketPosErp: {
    challengeImage: "/images/solutions/portraits/supermarket-pos-erp.jpg",
    challengeAlt: "Retail management team aligning branch point-of-sale and inventory performance",
    valueImage: "/images/industries/banking-halftone.jpg",
    valueAlt: "Kenyan retail managers tracking multi-branch margins and inventory",
  },
  saccoSolution: {
    challengeImage: "/images/solutions/portraits/sacco-solution.jpg",
    challengeAlt: "SACCO finance analyst tracking member deposits, loans, and mobile banking trends",
    valueImage: "/images/cta-woman-laptop-halftone.jpg",
    valueAlt: "Kenyan SACCO administrator monitoring member loans and API integrations",
  },
  accountOpening: {
    challengeImage: "/images/solutions/portraits/account-opening.jpg",
    challengeAlt: "Customer onboarding specialists streamlining digital KYC and account verification",
    valueImage: "/images/industries/insurance-halftone.jpg",
    valueAlt: "Kenyan compliance team approving verified digital accounts faster",
  },
  creditManagement: {
    challengeImage: "/images/solutions/portraits/credit-management.jpg",
    challengeAlt: "Senior credit portfolio director evaluating structured lending and risk governance",
    valueImage: "/images/industries/corporate-halftone.jpg",
    valueAlt: "Kenyan lending committee monitoring portfolio quality and repayments",
  },
  debtCollection: {
    challengeImage: "/images/solutions/portraits/debt-collection.jpg",
    challengeAlt: "Collections specialist tracking structured repayment schedules on an enterprise tablet",
    valueImage: "/images/industries/banking-halftone.jpg",
    valueAlt: "Kenyan collections team improving recovery rates with structured tracking",
  },
  eventNotifications: {
    challengeImage: "/images/solutions/portraits/event-notifications.jpg",
    challengeAlt: "Operations executive receiving instant real-time transaction and system alerts on mobile",
    valueImage: "/images/cta-woman-laptop-halftone.jpg",
    valueAlt: "Kenyan operations lead tracking confirmed SMS, email and push delivery",
  },
  realEstateRental: {
    challengeImage: "/images/solutions/portraits/real-estate-rental.jpg",
    challengeAlt: "Property management director managing multi-unit leases and landlord reporting",
    valueImage: "/images/industries/corporate-halftone.jpg",
    valueAlt: "Kenyan real estate team delivering transparent landlord and tenant statements",
  },
  toursTravel: {
    challengeImage: "/images/solutions/portraits/tours-travel.jpg",
    challengeAlt: "Travel operations director coordinating regional itineraries and bookings on mobile",
    valueImage: "/images/cta-woman-laptop-halftone.jpg",
    valueAlt: "Kenyan travel operations manager coordinating bookings and supplier payouts",
  },
  whatsappBanking: {
    challengeImage: "/images/solutions/portraits/whatsapp-banking.jpg",
    challengeAlt: "Digital banking specialist testing verified WhatsApp customer self-service flows",
    valueImage: "/images/cta-woman-laptop-halftone.jpg",
    valueAlt: "Kenyan customer experience lead monitoring instant automated responses",
  },
  beneficiaryManagement: {
    challengeImage: "/images/solutions/portraits/beneficiary-management.jpg",
    challengeAlt: "Programme coordinator verifying beneficiary disbursements and field data on tablet",
    valueImage: "/images/industries/education-halftone.jpg",
    valueAlt: "Kenyan development leaders producing donor-ready impact reports",
  },
  crm: {
    challengeImage: "/images/solutions/portraits/crm.jpg",
    challengeAlt: "Commercial team reviewing unified customer pipelines and service engagements",
    valueImage: "/images/cta-woman-laptop-halftone.jpg",
    valueAlt: "Kenyan account manager reviewing unified client history and pipeline",
  },
  accountsReconciliation: {
    challengeImage: "/images/solutions/portraits/accounts-reconciliation.jpg",
    challengeAlt: "Finance and audit specialists resolving daily ledger and payment exceptions",
    valueImage: "/images/industries/insurance-halftone.jpg",
    valueAlt: "Kenyan accountants closing daily books with exception-only review",
  },
  reportingSystem: {
    challengeImage: "/images/solutions/portraits/reporting-system.jpg",
    challengeAlt: "Executive leadership team reviewing live cross-department KPI boards",
    valueImage: "/images/cta-woman-laptop-halftone.jpg",
    valueAlt: "Kenyan leadership team making decisions from reliable scheduled packs",
  },
};

export function getSolutionVisuals(copyKey: string): SolutionVisualPair {
  return SOLUTION_VISUAL_MAP[copyKey] || DEFAULT_VISUAL;
}
