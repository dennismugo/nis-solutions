"use client";

import React, { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import {
  Briefcase,
  Cpu,
  Shield,
  Calculator,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

interface Persona {
  id: string;
  role: string;
  title: string;
  badge: string;
  corePriority: string;
  icon: React.ElementType;
  headline: string;
  challenge: string;
  solution: string;
  keyBenefits: string[];
  metrics: { label: string; value: string }[];
  ctaText: string;
}

export default function PersonaSwitcherSection() {
  const personas: Persona[] = [
    {
      id: "ceo",
      role: "CEOs & Managing Directors",
      title: "Executive Leadership",
      badge: "Commercial Continuity & Risk",
      corePriority: "Operational Risk & Revenue Protection",
      icon: Briefcase,
      headline: "Protect revenue and eliminate reputational risk caused by unexpected IT crashes.",
      challenge:
        "Every minute of network or software downtime paralyzes staff, halts branch customer service, and damages institutional trust. Most executives have no visibility into the true vulnerability of their infrastructure until an outage occurs.",
      solution:
        "Nile ICT Solutions delivers standards-certified infrastructure, air-gapped backups, and contracted SLA accountability so your leadership team can focus entirely on business growth without worrying about technology failure.",
      keyBenefits: [
        "99.99% infrastructure uptime guaranteed under formal SLA",
        "Full legal alignment with Kenya Data Protection Act regulations",
        "Predictable IT expenditure with zero emergency repair budget spikes",
      ],
      metrics: [
        { label: "Uptime SLA", value: "99.99%" },
        { label: "Risk Mitigation", value: "Enterprise" },
      ],
      ctaText: "Book a Call",
    },
    {
      id: "cio",
      role: "CIOs & IT Directors",
      title: "Technical Governance",
      badge: "Architecture & Zero Packet Loss",
      corePriority: "Network Architecture & Security Posture",
      icon: Cpu,
      headline: "Scalable 10G fiber backbones, clean rack cable topologies, and Next-Gen firewalls.",
      challenge:
        "Managing hybrid enterprise networks with undocumented patch cords, congested Wi-Fi channels, and unsegmented subnets leaves your perimeter vulnerable and makes routine troubleshooting a nightmare.",
      solution:
        "We serve as your specialized implementation arm: deploying Fluke-certified Cat6A and fiber backbones, Cisco/Fortinet Layer 3 switching, and strict 802.1Q VLAN separation with full port documentation.",
      keyBenefits: [
        "Every single cable drop calibrated with Fluke DSX-8000 analyzers",
        "VLAN isolation between staff, guest Wi-Fi, financial servers, and CCTV",
        "Direct access to tier-3 senior network engineers during escalations",
      ],
      metrics: [
        { label: "Core Latency", value: "< 1.0 ms" },
        { label: "Cabling Standard", value: "Cat6A / Fiber" },
      ],
      ctaText: "Talk to an Engineer",
    },
    {
      id: "operations",
      role: "Operations & Facility Leaders",
      title: "Premises & Physical Safety",
      badge: "Surveillance & Access Control",
      corePriority: "Physical Security & Uninterrupted Power",
      icon: Shield,
      headline: "Crystal-clear commercial IP CCTV surveillance and automated biometric access.",
      challenge:
        "Grainy legacy cameras, blind spots in warehouse/branch perimeters, and untracked manual visitor registers compromise facility security and leave management blind during incident audits.",
      solution:
        "We install high-definition 4MP to 4K IP cameras with AI human/vehicle classification, smart motion storage optimization, biometric access controls, and online double-conversion UPS backups.",
      keyBenefits: [
        "Encrypted remote smartphone streaming with multi-factor authentication",
        "Smart H.265+ compression providing 30 to 90 days of continuous recording",
        "Automated biometric time-and-attendance clocking integrated with payroll",
      ],
      metrics: [
        { label: "Recording Retention", value: "30-90 Days" },
        { label: "Video Clarity", value: "4K PoE IP" },
      ],
      ctaText: "Book Site Survey",
    },
    {
      id: "procurement",
      role: "Finance & Procurement",
      title: "Value & Commercial Integrity",
      badge: "Fixed Pricing & Accountability",
      corePriority: "Transparent BoM & Accountable Warranty",
      icon: Calculator,
      headline: "Transparent itemized bills of materials with authorized tier-1 manufacturer warranties.",
      challenge:
        "Dealing with multiple fragmented IT dealers leads to gray-market equipment with no local warranty, hidden variation charges, and finger-pointing between vendors when hardware fails.",
      solution:
        "Nile ICT Solutions provides single-point procurement accountability: authorized hardware from Cisco, Fortinet, UniFi, and MikroTik, itemized pricing without surprise extras, and certified local warranty support.",
      keyBenefits: [
        "100% itemized BoM with guaranteed fixed project pricing",
        "Official authorized manufacturer warranty on all active equipment",
        "Flexible payment milestones tied to verifiable delivery stages",
      ],
      metrics: [
        { label: "Pricing Accuracy", value: "Fixed BoM" },
        { label: "Hardware Warranty", value: "Official Local" },
      ],
      ctaText: "Get a Quote",
    },
  ];

  const [activePersonaIndex, setActivePersonaIndex] = useState(0);
  const activePersona = personas[activePersonaIndex];
  const IconComponent = activePersona.icon;

  return (
    <section className="bg-nis-surface py-20 lg:py-28 border-b border-gray-200">
      <div className="max-w-[90rem] mx-auto px-5 sm:px-8 lg:px-10">
        <SectionHeader
          badge="Tailored Commercial Value"
          title="Engineered for every enterprise decision-maker."
          subtitle="Whether you are assessing bottom-line business risk, technical network architecture, physical security, or procurement accountability, we speak your language."
          centered
          className="mb-14"
        />

        {/* Persona Tabs (Jasper-Style Horizontal Role Selector) */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {personas.map((persona, index) => {
            const isActive = activePersonaIndex === index;
            const TabIcon = persona.icon;
            return (
              <button
                key={persona.id}
                type="button"
                onClick={() => setActivePersonaIndex(index)}
                className={`inline-flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-xl font-heading text-xs sm:text-sm font-bold transition-all ${
                  isActive
                    ? "bg-nis-blue text-white shadow-elevated border border-blue-400/40"
                    : "bg-white text-nis-navy border border-gray-200 hover:bg-gray-50"
                }`}
              >
                <TabIcon
                  className={`w-4 h-4 ${
                    isActive ? "text-nis-orange" : "text-nis-blue"
                  }`}
                />
                <span>{persona.role}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Persona Solution Card */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-10 lg:p-12 shadow-subtle grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left 7 Columns: Challenge & Strategy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-nis-blue/10 text-nis-blue">
                <IconComponent className="w-5 h-5 text-nis-orange" />
              </div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-nis-orange">
                {activePersona.badge}
              </span>
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-nis-navy leading-tight">
              {activePersona.headline}
            </h3>

            {/* Pain Point */}
            <div className="p-4 rounded-xl bg-rose-50/70 border border-rose-100 space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-800 block">
                The Core Vulnerability You Face
              </span>
              <p className="text-xs text-rose-950/80 leading-relaxed">
                {activePersona.challenge}
              </p>
            </div>

            {/* Nile ICT Solution */}
            <div className="p-4 rounded-xl bg-nis-blue/5 border border-nis-blue/15 space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-nis-blue block">
                The Nile ICT Delivery Model
              </span>
              <p className="text-xs text-nis-navy leading-relaxed font-medium">
                {activePersona.solution}
              </p>
            </div>

            {/* Key Deliverables Bullets */}
            <div className="pt-2 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block">
                Strategic Benefits:
              </span>
              <div className="space-y-1.5 text-xs text-gray-700">
                {activePersona.keyBenefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right 5 Columns: Metrics & Persona CTA Box */}
          <div className="lg:col-span-5 bg-nis-navy-950 text-white rounded-xl p-6 sm:p-8 space-y-6">
            <div className="space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-nis-orange font-bold">
                Priority Mandate
              </span>
              <div className="font-heading text-xl font-bold text-white">
                {activePersona.corePriority}
              </div>
            </div>

            {/* Outcome Metric Cards */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {activePersona.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-lg bg-white/5 border border-white/10"
                >
                  <div className="font-heading text-2xl font-extrabold text-white">
                    {m.value}
                  </div>
                  <div className="text-[11px] text-gray-300 mt-0.5">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300 space-y-2">
              <div className="font-bold text-white flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-nis-orange" />
                <span>Executive Guarantee</span>
              </div>
              <p className="text-[11px] leading-relaxed text-gray-400">
                All solutions are documented, non-disclosure protected, and aligned with Central Bank and Kenya Data Protection Act standards.
              </p>
            </div>

            <div className="pt-2">
              <Button
                href="/contact"
                variant="orange"
                size="md"
                className="w-full"
                withArrow
              >
                {activePersona.ctaText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
