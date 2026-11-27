"use client";

import React, { useState } from "react";
import Link from "next/link";
import TextReveal from "@/components/ui/TextReveal";
import {
  ArrowRight,
  ChevronRight,
  Cpu,
  Database,
  Layers,
  Network,
  Shield,
} from "lucide-react";

export interface ArchitectureLayer {
  code: string;
  label: string;
  shortTab: string;
  title: string;
  summary: string;
  components: string[];
  dependencyNote: string;
  metricValue: string;
  metricLabel: string;
}

const ARCH_PRESETS: Record<string, ArchitectureLayer[]> = {
  infrastructure: [
    {
      code: "01",
      label: "Physical & Premises",
      shortTab: "Premises",
      title: "Structured Cabling, Racks & Power",
      summary:
        "Organised Cat6A and fiber runs, labelled patch panels, camera mounts and online UPS power forming the dependable baseline.",
      components: [
        "Cat6A & Fiber Trunks",
        "Lockable Network Racks",
        "Clean UPS Protection",
        "Camera & AP Mounts",
      ],
      dependencyNote: "Scoped after site survey, port counts and ceiling routes.",
      metricValue: "100%",
      metricLabel: "Labelled and tested cabling links",
    },
    {
      code: "02",
      label: "Switching & Perimeter",
      shortTab: "Network",
      title: "Switching, VLANs, Firewalls & Wi-Fi",
      summary:
        "Segmented office, guest, surveillance and business system traffic governed by enterprise switching and firewall policies.",
      components: [
        "VLAN Segmentation",
        "Next-Gen Firewalls",
        "Enterprise Wi-Fi Coverage",
        "Dual-ISP Failover",
      ],
      dependencyNote: "Keeps ISP links resilient across departments and branches.",
      metricValue: "<1s",
      metricLabel: "Automatic dual-ISP failover",
    },
    {
      code: "03",
      label: "Endpoints & Access",
      shortTab: "Access",
      title: "Workstations, MFA & Surveillance NVRs",
      summary:
        "Hardened user computers, multi-factor authentication, encrypted backups and role-restricted surveillance storage.",
      components: [
        "MFA & Identity Controls",
        "Endpoint Protection",
        "Sized NVR Retention",
        "Automated Offsite Backups",
      ],
      dependencyNote: "Aligned to company policies and Kenyan Data Protection rules.",
      metricValue: "2FA",
      metricLabel: "Required across privileged accounts",
    },
    {
      code: "04",
      label: "Care & Governance",
      shortTab: "Support",
      title: "Documentation, Alerts & Support",
      summary:
        "Complete port maps, saved configurations, routine health checks and one Nairobi engineering team on call.",
      components: [
        "Port & IP Documentation",
        "Uptime Monitoring",
        "Warranty & RMA Handling",
        "Preventive Health Checks",
      ],
      dependencyNote: "Ensures any engineer can diagnose and maintain cleanly.",
      metricValue: "<4hr",
      metricLabel: "Nairobi on-site response SLA",
    },
  ],
  software: [
    {
      code: "01",
      label: "Experience Layer",
      shortTab: "Interface",
      title: "Web, Mobile & Client Interfaces",
      summary:
        "Fast browser portals, Android and iOS mobile apps and search-ready websites built for everyday connections.",
      components: [
        "Responsive Web Portals",
        "Mobile Apps & PWAs",
        "Structured Search Schema",
        "Accessible Intake Forms",
      ],
      dependencyNote: "Tested across desktop browsers and modest mobile devices.",
      metricValue: "99.9%",
      metricLabel: "Cross-device availability target",
    },
    {
      code: "02",
      label: "Application Logic",
      shortTab: "Workflows",
      title: "Workflow Engine & API Services",
      summary:
        "Domain rules enforcing approvals, validations, role permissions, automated jobs and full change logs.",
      components: [
        "Role-Based Permissions",
        "Approval State Machines",
        "REST & Webhook APIs",
        "Input & Session Security",
      ],
      dependencyNote: "Delivered in staged releases with team walkthroughs.",
      metricValue: "RBAC",
      metricLabel: "Maker-checker approval controls",
    },
    {
      code: "03",
      label: "Integration Bus",
      shortTab: "Integrations",
      title: "Payments, Messaging & Core Links",
      summary:
        "Controlled links to mobile money wallets, bank APIs, email or SMS gateways and existing ERPs so data is entered once.",
      components: [
        "Payment Gateway APIs",
        "SMS, Email & WhatsApp",
        "ERP & Accounting Sync",
        "Idempotent Event Queues",
      ],
      dependencyNote: "Connected using approved provider APIs and credentials.",
      metricValue: "Zero",
      metricLabel: "Duplicate webhook postings",
    },
    {
      code: "04",
      label: "Data & Operations",
      shortTab: "Governance",
      title: "Structured Storage, Backups & Support",
      summary:
        "Relational databases with point-in-time backups, migration reconciliation checks and documented ongoing care.",
      components: [
        "Structured Databases",
        "Encrypted Automated Backups",
        "Handover Documentation",
        "Iterative Enhancements",
      ],
      dependencyNote: "Ownership and licensing terms agreed clearly upfront.",
      metricValue: "Daily",
      metricLabel: "Automated encrypted database backups",
    },
  ],
  banking: [
    {
      code: "01",
      label: "Member & Channels",
      shortTab: "Channels",
      title: "Branch, Portal, App & WhatsApp Access",
      summary:
        "Consistent digital onboarding, teller screens, member mobile apps and verified WhatsApp service channels.",
      components: [
        "Digital Onboarding & KYC",
        "Member Portal & App",
        "Verified Chat Queries",
        "Teller Workspaces",
      ],
      dependencyNote: "All channels enforce strong authentication and KYC rules.",
      metricValue: "4-in-1",
      metricLabel: "Connected customer service channels",
    },
    {
      code: "02",
      label: "Core & Credit Engine",
      shortTab: "Ledgers",
      title: "Accounts, Loans, Claims & Ledgers",
      summary:
        "Real-time central ledgers, loan appraisal, policy schedules, collections queues and double-entry accuracy.",
      components: [
        "Core Member Ledger",
        "Maker-Checker Controls",
        "Credit & Arrears Rules",
        "Policy & Claims Core",
      ],
      dependencyNote: "Trial-migrated and reconciled line by line before go-live.",
      metricValue: "Live",
      metricLabel: "Double-entry ledger posting",
    },
    {
      code: "03",
      label: "Reconciliation & APIs",
      shortTab: "Reconcile",
      title: "Wallets, Bank Feeds & API Gateway",
      summary:
        "Governed API gateway matching MPESA and bank transactions automatically while routing exceptions to finance.",
      components: [
        "MPESA & Bank Matching",
        "API Rate & Token Rules",
        "Exception Review Queues",
        "Automated Notices",
      ],
      dependencyNote: "Separates matched clearing from exception disputes.",
      metricValue: "Auto",
      metricLabel: "Matched settlements and exception flags",
    },
    {
      code: "04",
      label: "Audit & Reporting",
      shortTab: "Audit",
      title: "Compliance Packs & Business Intelligence",
      summary:
        "Immutable action logs, archive indexing and structured extracts for executive boards and statutory oversight.",
      components: [
        "Immutable Audit Trail",
        "Board & Executive Packs",
        "Document Archive Links",
        "Disaster Recovery Drills",
      ],
      dependencyNote: "Supports clean audits across branches and periods.",
      metricValue: "100%",
      metricLabel: "Traceable statutory audit history",
    },
  ],
};

function pickPreset(category: string): ArchitectureLayer[] {
  const c = category.toLowerCase();
  if (
    c.includes("bank") ||
    c.includes("sacco") ||
    c.includes("insurance") ||
    c.includes("lending") ||
    c.includes("reconciliation") ||
    c.includes("credit") ||
    c.includes("collection")
  ) {
    return ARCH_PRESETS.banking;
  }
  if (
    c.includes("software") ||
    c.includes("digital") ||
    c.includes("records") ||
    c.includes("automation") ||
    c.includes("crm") ||
    c.includes("notification") ||
    c.includes("reporting") ||
    c.includes("travel") ||
    c.includes("education") ||
    c.includes("property") ||
    c.includes("retail") ||
    c.includes("programmes") ||
    c.includes("channels") ||
    c.includes("onboarding")
  ) {
    return ARCH_PRESETS.software;
  }
  return ARCH_PRESETS.infrastructure;
}

const ARTBOARD_THEMES = [
  "linear-gradient(135deg, #527DFF 0%, #314ED8 100%)",
  "linear-gradient(135deg, #7E6EFF 0%, #503FD6 100%)",
  "linear-gradient(135deg, #FF7D45 0%, #D9480F 100%)",
  "linear-gradient(135deg, #1B6B54 0%, #0E4D3B 100%)",
];

const LAYER_ICONS = [Network, Layers, Shield, Database];

export default function SolutionArchitectureDiagram({
  category,
  title,
}: {
  category: string;
  title: string;
}) {
  const layers = pickPreset(category);
  const [selected, setSelected] = useState(0);
  const current = layers[selected] || layers[0];
  const ActiveIcon = LAYER_ICONS[selected % LAYER_ICONS.length] || Cpu;

  return (
    <section className="py-16 lg:py-24 bg-[#F7F5F2] border-b border-nis-navy/10">
      <div className="ns-container-large space-y-10">
        <TextReveal className="max-w-3xl space-y-3">
          <span className="inline-block bg-[#FFE4D4] text-nis-navy font-mono text-xs sm:text-[13px] font-medium px-2.5 py-1">
            System Architecture &amp; Integration
          </span>
          <h2 className="font-heading font-normal text-[1.75rem] sm:text-4xl lg:text-[2.75rem] leading-[1.2] lg:leading-[1.18] tracking-[-0.025em] text-nis-navy">
            How equipment, networks, software and security connect around {title}.
          </h2>
        </TextReveal>

        {/* Maze-Style Pure-White Interactive Showcase Sheet */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-[0_24px_60px_-24px_rgba(0,25,79,0.1)] p-5 sm:p-8 lg:p-10 space-y-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 border-b border-slate-200/70 pb-1">
            {layers.map((layer, idx) => {
              const active = idx === selected;
              return (
                <button
                  key={layer.code}
                  type="button"
                  onClick={() => setSelected(idx)}
                  className={`relative text-left px-4 py-4 sm:px-5 sm:py-5 rounded-t-xl transition-all cursor-pointer ${
                    active
                      ? "bg-[#EFECE6] text-[#00194F]"
                      : "text-slate-400 hover:text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <span className="block font-heading text-xl sm:text-2xl lg:text-[1.9rem] leading-none tracking-tight">
                    {layer.shortTab}
                  </span>
                  {active && (
                    <span
                      aria-hidden="true"
                      className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#0111A2]"
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-2">
            <div className="lg:col-span-5 space-y-5">
              <div className="text-xs font-medium text-[#0111A2]">
                {current.label}
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl text-[#00194F] leading-tight tracking-tight">
                {current.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {current.summary}
              </p>

              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                {current.dependencyNote}
              </p>

              <div className="pt-1">
                <Link
                  href={`/contact?solution=${encodeURIComponent(
                    title
                  )}&intent=architecture`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0111A2] hover:text-[#F85508] transition-colors group"
                >
                  <span>Discuss {current.shortTab.toLowerCase()} architecture</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div
                className="relative rounded-2xl overflow-hidden p-5 sm:p-8"
                style={{
                  background: ARTBOARD_THEMES[selected % ARTBOARD_THEMES.length],
                }}
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-25"
                  style={{
                    backgroundImage: `
                      linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)
                    `,
                    backgroundSize: "32px 32px",
                  }}
                />

                <div className="relative z-10 flex flex-col">
                  {/* Maze-style Component Stack Card */}
                  <div className="bg-white rounded-xl shadow-[0_24px_60px_-14px_rgba(0,25,79,0.28)] border border-white/90 p-4 sm:p-5 sm:w-[88%] sm:ml-auto space-y-2">
                    {current.components.map((comp) => (
                      <div
                        key={comp}
                        className="rounded-lg border border-slate-200/80 bg-white px-3.5 py-2.5 flex items-center justify-between gap-3"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <span className="w-7 h-7 rounded-lg bg-[#EEF2FF] text-[#0111A2] flex items-center justify-center shrink-0">
                            <ActiveIcon className="w-3.5 h-3.5" />
                          </span>
                          <span className="text-xs sm:text-[13px] font-medium text-[#00194F] truncate">
                            {comp}
                          </span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
                      </div>
                    ))}
                  </div>

                  {/* Overlapping GetProven Highlight Card */}
                  <div className="relative z-20 -mt-4 sm:-mt-6 bg-white rounded-xl border border-slate-200/90 shadow-[0_24px_56px_-12px_rgba(0,25,79,0.26)] p-4 sm:p-5 sm:w-[76%] sm:mr-auto flex items-center justify-between gap-4">
                    <div className="space-y-0.5">
                      <div className="text-xs font-medium text-slate-500">
                        {current.label}
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-[#00194F]">
                        {current.metricLabel}
                      </div>
                    </div>
                    <div className="shrink-0 rounded-lg bg-[#E6F4EE] text-[#1B6B54] font-heading text-xl sm:text-2xl font-medium px-3.5 py-1.5">
                      {current.metricValue}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
