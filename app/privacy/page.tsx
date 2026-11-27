import React from "react";
import type { Metadata } from "next";
import JasperLegalLayout, {
  type LegalSectionItem,
} from "@/components/legal/JasperLegalLayout";
import BasetenPatternDivider from "@/components/sections/BasetenPatternDivider";
import ClosingCta from "@/components/sections/ClosingCta";
import { BRAND } from "@/data/copydeck";

export const metadata: Metadata = {
  title: "Data Privacy Policy | Nile ICT Solutions",
  description:
    "How Nile ICT Solutions upholds Article 31 & Article 35 of the Constitution of Kenya and the Data Protection Act, 2019 to protect client organisations and personal data.",
  alternates: {
    canonical: "https://nileictsolutions.com/privacy",
  },
};

const SECTIONS: LegalSectionItem[] = [
  {
    num: "01",
    title: "Constitutional & Statutory Foundation",
    paragraphs: [
      "Nile ICT Solutions upholds the fundamental right to privacy guaranteed under Article 31 of the Constitution of Kenya, 2010—which protects every person against unnecessary disclosure of family or private affairs and infringement of the privacy of their communications—as well as the right of access to and correction of untrue or misleading information under Article 35.",
      "Our internal controls and client delivery standards are structured around the Kenya Data Protection Act, 2019 (Act No. 24 of 2019), the Data Protection (General) Regulations, 2021, and guidance issued by the Office of the Data Protection Commissioner (ODPC).",
    ],
  },
  {
    num: "02",
    title: "Information We Collect & Lawful Bases (Sections 25 & 30)",
    paragraphs: [
      "Under Section 25 of the Data Protection Act, personal data is collected strictly for explicit, specified and legitimate purposes, kept accurate, limited to what is necessary, and processed lawfully and transparently under Section 30 based on contractual necessity, unambiguous consent, compliance with Kenyan law, or documented legitimate operational interests.",
    ],
    bullets: [
      "Organisational & Contact Records: Names, roles, business emails, telephone numbers, entity details and project requirements shared via enquiry forms, email, phone or WhatsApp solely to scope, propose and deliver requested ICT services.",
      "Technical & Delivery Information: Network topology notes, IP allocation records, firewall configuration backups, CCTV camera placement plans and user acceptance logs created strictly within authorised assignments.",
      "Commercial & Billing Records: Invoices, delivery notes, LPOs, withholding/tax compliance references and support ticket histories retained as required under Kenyan tax and commercial statutes.",
    ],
  },
  {
    num: "03",
    title: "Data Controller vs. Data Processor Boundaries",
    paragraphs: [
      "When you engage Nile ICT Solutions for Core Banking, SACCO, Insurance, ERP, Document Management, CCTV surveillance, cloud hosting or Managed IT Support, your organisation remains the Data Controller (retaining full legal ownership and control over your member, employee, student, patient or camera records).",
      "Nile ICT Solutions acts strictly as a technical Data Processor under your written instructions and signed Scope of Work or NDA. Engineers are bound by confidentiality, access is limited on a least-privilege need-to-know basis, credentials are rotated or revoked promptly upon engagement handover or staff exit, and client datasets are never sold, mined for advertising, or shared with unauthorised third parties.",
    ],
  },
  {
    num: "04",
    title: "Security by Design, Incident Cooperation & Transfers (Sections 41, 43 & 48)",
    paragraphs: [
      "In accordance with Section 41 (Data Protection by Design and by Default), we embed role-based access controls (RBAC), multi-factor authentication, TLS/encryption safeguards and automated backup discipline into the systems we configure and deploy.",
      "Where an actual security compromise affects personal data in an environment we actively manage, we will notify the affected client organisation promptly so statutory timelines—including Section 43 ODPC breach notifications within 72 hours and Section 40 Computer Misuse and Cybercrimes Act (CMCA) notifications to the NC4 within 24 hours—can be met together.",
      "Where project delivery requires approved cloud hosting, SSL/TLS certificates, OEM vendor warranty registration or messaging APIs hosted outside Kenya, transfers are conducted strictly under Section 48 safeguards (adequate jurisdiction, contractual data-processing safeguards, or client instruction).",
    ],
  },
  {
    num: "05",
    title: "Client Ownership, Retention & Mutual Protections",
    paragraphs: [
      "Organisations retain full ownership of their production databases, application content and CCTV recordings at all times. Enquiry notes and technical diagnostics held by Nile ICT Solutions are retained only for as long as necessary to fulfil the active project, honour warranty/SLA obligations, or satisfy mandatory Kenyan statutory limitation and accounting periods.",
      "Under Section 56 of the Computer Misuse and Cybercrimes Act, 2018, while supplying network connectivity, infrastructure or software maintenance, Nile ICT Solutions is not responsible for unlawful acts committed independently by third parties without our actual notice or wilful involvement, and complies strictly with lawful Kenyan court or regulatory production orders.",
    ],
  },
  {
    num: "06",
    title: "Your Data Subject Rights Under Kenyan Law (Section 26)",
    paragraphs: [
      "Every individual whose personal contact data is held directly by Nile ICT Solutions has the statutory right to:",
    ],
    bullets: [
      "Be informed of the purpose and use of any personal data collected from you.",
      "Request access to personal data we hold about you in a readable format.",
      "Request correction or deletion of untrue, outdated or misleading information (Article 35 of the Constitution & Section 26 DPA).",
      "Object to direct marketing communications or withdraw consent where consent is the lawful basis.",
      "Lodge a complaint directly with our Governance Desk first, or escalate unresolved concerns to the Office of the Data Protection Commissioner (ODPC) in Kenya.",
    ],
  },
  {
    num: "07",
    title: "Governance Desk & Contact Information",
    paragraphs: [
      `To exercise your rights under the Constitution of Kenya or the Data Protection Act, 2019, or to request a signed Mutual Non-Disclosure Agreement (NDA) or Data Processing Addendum (DPA) prior to technical discovery, contact Nile ICT Solutions at ${BRAND.email} or call ${BRAND.phone} (Posta Building, Tom Mboya Street, Nairobi CBD, Kenya).`,
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <JasperLegalLayout
        eyebrow="Data Governance"
        title="Data Privacy Policy"
        subtitle="Aligned with Article 31 & Article 35 of the Constitution of Kenya and the Data Protection Act, 2019—protecting both client organisations and the people behind the systems we build."
        sections={SECTIONS}
      />

      <BasetenPatternDivider />
      <ClosingCta />
    </>
  );
}
