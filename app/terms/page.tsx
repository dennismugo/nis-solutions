import React from "react";
import type { Metadata } from "next";
import JasperLegalLayout, {
  type LegalSectionItem,
} from "@/components/legal/JasperLegalLayout";
import BasetenPatternDivider from "@/components/sections/BasetenPatternDivider";
import ClosingCta from "@/components/sections/ClosingCta";
import { BRAND } from "@/data/copydeck";

export const metadata: Metadata = {
  title: "Service Terms & Engagement Standards | Nile ICT Solutions",
  description:
    "Commercial engagement terms, Article 46 Kenyan consumer protections, OEM warranty rules, intellectual property rights and SLA liability limits at Nile ICT Solutions.",
  alternates: {
    canonical: "https://nileictsolutions.com/terms",
  },
};

const SECTIONS: LegalSectionItem[] = [
  {
    num: "01",
    title: "Engagement Scope, Consumer Transparency & Written Variations",
    paragraphs: [
      "In alignment with Article 46 of the Constitution of Kenya (Consumer Rights to services of reasonable quality and clear product/pricing information) and the Consumer Protection Act, every assignment begins with an agreed written Proposal, Scope of Work (SoW), Service Level Agreement (SLA) or itemised Bill of Materials.",
      "No unapproved charges are billed informally. Any expansion of scope, additional branch rollouts, extra hardware drops or custom integrations requested after sign-off are documented and priced upfront via written variation orders before execution.",
    ],
  },
  {
    num: "02",
    title: "Genuine Hardware Sourcing & Manufacturer Warranties",
    paragraphs: [
      "Nile ICT Solutions supplies genuine ICT hardware, networking gear, servers, UPS equipment and CCTV systems sourced strictly through reputable manufacturers and channel distributors. Every delivery is accompanied by serialised packing slips, clear invoicing and applicable warranty documentation agreed upfront.",
      "Unless an extended on-site spare-swap SLA is expressly contracted, hardware defects are governed by the original equipment manufacturer (OEM) warranty and transparent RMA coordination handled by our engineering desk. Consumables, physical site damage, irregular electrical surges lacking agreed surge/UPS protection, or unauthorised third-party tampering fall outside manufacturer warranty cover.",
    ],
  },
  {
    num: "03",
    title: "Commercial Terms, Milestones & Delivery Dependencies",
    paragraphs: [
      "Hardware procurement orders generally require agreed deposit settlement prior to supplier dispatch, while software engineering and infrastructure rollouts follow milestone schedules clearly stated in each quotation or LPO contract.",
      "Project timelines depend mutually on timely client inputs—such as premises access for cabling/CCTV installation, third-party ISP provisioning, clean power availability, official API credentials (e.g., MPESA, KRA or bank feeds) and timely staging user sign-off. Where client approvals or third-party dependencies pause delivery, completion dates adjust proportionately without penalty.",
    ],
  },
  {
    num: "04",
    title: "Intellectual Property & Client Data Ownership",
    paragraphs: [
      "Your organisation retains 100% ownership of all business data, member ledgers, academic files, databases, content, branding and surveillance footage processed through any system built or maintained by Nile ICT Solutions.",
      "Ownership or licensing terms for custom-developed software repositories are defined explicitly in each Scope of Work: generally, bespoke client-funded application modules transfer upon full milestone settlement, while pre-existing Nile ICT frameworks, generic utilities, standard templates and third-party open-source/commercial libraries remain governed by their respective licences.",
    ],
  },
  {
    num: "05",
    title: "Support Commitments, Security & Limitation of Liability",
    paragraphs: [
      "Managed IT Support and post-launch maintenance SLAs specify exact coverage hours, remote triage windows, Nairobi/regional site-visit commitments and escalation tiers in writing. No SLA credit or remedy implies liability for upstream external events outside Nile ICT's control—such as telecom fibre cuts, national grid outages, KPLC/ISP downtime or third-party payment gateway interruptions.",
      "Under Section 56 of the Computer Misuse and Cybercrimes Act, 2018, Nile ICT Solutions shall not incur civil or criminal liability for third-party content or unauthorised network misuse absent actual knowledge or wilful intent. Subject to mandatory statutory rights under Kenyan law that cannot legally be excluded, either party’s aggregate commercial liability under a given work order is capped cleanly at the direct fees paid under that specific phase, excluding indirect or consequential loss of profits.",
    ],
  },
  {
    num: "06",
    title: "Confidentiality, Force Majeure & Kenyan Governing Law",
    paragraphs: [
      "Both Nile ICT Solutions and the client undertake to keep commercial pricing, credentials, architectural diagrams and proprietary workflows strictly confidential during and after project completion. Neither party is liable for delays caused by unforeseeable events beyond reasonable control (Force Majeure), provided prompt written notice is given.",
      `All commercial quotations, hardware supply invoices and software agreements entered into with Nile ICT Solutions are governed by and construed in accordance with the laws of the Republic of Kenya. Any dispute will first be addressed in good faith by senior representatives of both organisations within 14 days, failing which parties may pursue mediation or arbitration in Nairobi under the Arbitration Act (Cap. 49) before resorting to the Courts of Kenya. Contractual enquiries may be directed to ${BRAND.email} or ${BRAND.phone}.`,
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <>
      <JasperLegalLayout
        eyebrow="Commercial & Delivery Terms"
        title="Service Terms & Engagement Standards"
        subtitle="Clear written scopes, Article 46 Kenyan consumer safeguards, genuine OEM warranties, IP clarity and balanced protections for both clients and Nile ICT Solutions."
        sections={SECTIONS}
      />

      <BasetenPatternDivider />
      <ClosingCta />
    </>
  );
}
