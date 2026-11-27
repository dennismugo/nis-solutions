"use client";

import React, { useState, useEffect } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  Search,
  Compass,
  Wrench,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Activity,
  Layers,
  Zap,
} from "lucide-react";

interface WorkflowStep {
  id: string;
  num: string;
  tabLabel: string;
  title: string;
  lead: string;
  description: string;
  deliverables: string[];
  metrics: { label: string; value: string }[];
  technicalSpecs: { key: string; val: string }[];
}

export default function WorkflowProgressSection() {
  const steps: WorkflowStep[] = [
    {
      id: "discover",
      num: "01",
      tabLabel: "Discovery & RF Survey",
      title: "Physical Site Assessment & Spectrum Heatmap",
      lead: "We never quote without physical verification of conduit runs, electromagnetic interference, and RF signal dropouts.",
      description:
        "Our certified engineers conduct on-site physical walk-throughs across your facilities in Nairobi or regional offices. We map floorplans, measure cable distances against the 90-meter Cat6A attenuation threshold, inspect electrical grounding, and run RF spectrum analyzers to map Wi-Fi deadzones.",
      deliverables: [
        "Floorplan Heatmap & RF Coverage Matrix",
        "Cable Pathway & Conduit Capacity Audit",
        "Utility Power Quality & Surge Vulnerability Report",
      ],
      metrics: [
        { label: "Survey Accuracy", value: "100%" },
        { label: "Deadzone Detection", value: "Sub-Meter" },
      ],
      technicalSpecs: [
        { key: "Tooling", val: "Ekahau Pro & Spectrum Analyzer" },
        { key: "Output", val: "Predictive RF Heatmap (5GHz / 6GHz)" },
      ],
    },
    {
      id: "topology",
      num: "02",
      tabLabel: "Topology & Itemized BoM",
      title: "Network Architecture & Transparent Procurement",
      lead: "Zero unbudgeted extras. Every switch port, patch lead, and SFP transceiver is itemized upfront.",
      description:
        "We draft comprehensive Layer 2 and Layer 3 topology diagrams with explicit 802.1Q VLAN boundaries separating corporate workstations, guest Wi-Fi, financial servers, and IP surveillance cameras. Our Bill of Materials specifies authorized tier-1 hardware with official manufacturer warranties.",
      deliverables: [
        "Layer 2/3 Network Topology Architecture",
        "VLAN & Subnet Segmentation Blueprint",
        "Itemized Bill of Materials with Guaranteed Pricing",
      ],
      metrics: [
        { label: "Budget Variance", value: "0.0%" },
        { label: "Hardware Tier", value: "Tier-1 Certified" },
      ],
      technicalSpecs: [
        { key: "Switching", val: "Cisco Catalyst / MikroTik Cloud Router" },
        { key: "Firewall", val: "Fortinet FortiGate Next-Gen IPS" },
      ],
    },
    {
      id: "deploy",
      num: "03",
      tabLabel: "Deploy & Fluke Certify",
      title: "Structured Cabling & Fluke DSX-8000 Calibration",
      lead: "Every single cable run is tested and certified. You receive printed Fluke test results proving signal fidelity.",
      description:
        "Our technicians install clean, structured trunking, mount server racks with horizontal and vertical wire managers, and terminate Cat6A keystone jacks. We calibrate every run with a Fluke DSX-8000 analyzer, validating WireMap, NEXT (Near-End Crosstalk), return loss, and resistance.",
      deliverables: [
        "Fluke Networks Certified Test Reports for Every Drop",
        "Laser-Etched Patch Panel & Faceplate Port Numbers",
        "Online Double-Conversion UPS & Power Balancing",
      ],
      metrics: [
        { label: "Bandwidth Certified", value: "10 Gbps" },
        { label: "Fluke Pass Rate", value: "100% Guaranteed" },
      ],
      technicalSpecs: [
        { key: "Standards", val: "TIA/EIA-568.2-D & ISO 11801" },
        { key: "Warranty", val: "15-Year Cabling System Warranty" },
      ],
    },
    {
      id: "sla",
      num: "04",
      tabLabel: "24/7 SLA Operations",
      title: "Contracted SLA & Preventative Maintenance",
      lead: "We protect your operational continuity long after handover with guaranteed emergency response times.",
      description:
        "Under our enterprise Managed IT agreements, your systems are continuously monitored with SNMP telemetry. When an anomaly occurs, our Nairobi CBD dispatch desk mobilizes immediately. We perform routine scheduled visits for thermal cleaning, UPS health checks, and firmware patching.",
      deliverables: [
        "Guaranteed Sub-2-Hour Remote / Sub-4-Hour On-Site SLA",
        "Monthly Preventative Maintenance Inspections",
        "Executive Quarterly Uptime & Capacity Reports",
      ],
      metrics: [
        { label: "Remote Triage", value: "< 1 Hour" },
        { label: "On-Site Dispatch", value: "< 4 Hours" },
      ],
      technicalSpecs: [
        { key: "Coverage", val: "Nairobi CBD, Industrial Area & Regional" },
        { key: "Emergency Line", val: "24/7 Direct Senior Engineer Access" },
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(0);
  const [progress, setProgress] = useState(0);

  // Auto-advancing timer like Jasper.ai (fills over 6 seconds per tab)
  useEffect(() => {
    const duration = 6000; // 6s per tab
    const interval = 50; // update every 50ms
    const increment = (interval / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveTab((current) => (current + 1) % steps.length);
          return 0;
        }
        return prev + increment;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [activeTab, steps.length]);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    setProgress(0);
  };

  const currentStep = steps[activeTab];

  return (
    <section className="bg-white py-20 lg:py-28 border-b border-gray-100 relative overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-5 sm:px-8 lg:px-10">
        <SectionHeader
          badge="Systematic Methodology"
          title="Start with the engineering, not the sales pitch."
          subtitle="How Nile ICT delivers zero-downtime technology from initial physical site inspection through to guaranteed 24/7 operational continuity."
          centered
          className="mb-14"
        />

        {/* 4 Horizontal Progress Tabs (Jasper-Style) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {steps.map((step, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={step.id}
                type="button"
                onClick={() => handleTabClick(idx)}
                className={`relative text-left p-4 sm:p-5 rounded-xl border transition-all overflow-hidden flex flex-col justify-between ${
                  isActive
                    ? "bg-nis-navy text-white border-nis-navy shadow-elevated"
                    : "bg-nis-surface text-gray-700 border-gray-200 hover:bg-gray-100"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span
                      className={`text-xs font-mono font-bold ${
                        isActive ? "text-nis-orange" : "text-gray-400"
                      }`}
                    >
                      PHASE {step.num}
                    </span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-nis-orange animate-ping" />
                    )}
                  </div>
                  <div className="font-heading font-bold text-sm sm:text-base leading-snug">
                    {step.tabLabel}
                  </div>
                </div>

                {/* Animated Progress Line */}
                <div className="w-full bg-white/20 h-1 rounded-full mt-4 overflow-hidden">
                  <div
                    className="h-full bg-nis-orange transition-all duration-75 ease-linear rounded-full"
                    style={{
                      width: isActive ? `${progress}%` : idx < activeTab ? "100%" : "0%",
                    }}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Interactive Stage Canvas (Jasper-Style Large Canvas) */}
        <div className="rounded-2xl border border-gray-200 bg-nis-navy-950 text-white p-6 sm:p-10 lg:p-12 shadow-elevated relative overflow-hidden">
          {/* Subtle Background Circuit Dots */}
          <div className="absolute inset-0 bg-tech-dots-dark opacity-15 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Left 7 Columns: Stage Narrative & Deliverables */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-nis-orange">
                <span>PHASE {currentStep.num} OF 04</span>
                <span>•</span>
                <span>SYSTEMATIC PROTOCOL</span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                {currentStep.title}
              </h3>

              <p className="text-sm sm:text-base text-blue-100 font-medium leading-relaxed">
                {currentStep.lead}
              </p>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {currentStep.description}
              </p>

              {/* Verified Deliverables List */}
              <div className="pt-2 space-y-2.5">
                <span className="text-xs font-mono uppercase tracking-wider text-gray-400 block font-bold">
                  Documented Deliverables:
                </span>
                <div className="space-y-2">
                  {currentStep.deliverables.map((deliv, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-200">
                      <CheckCircle2 className="w-4 h-4 text-nis-orange flex-shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Technical Spec Console & Outcome Metrics */}
            <div className="lg:col-span-5 bg-[#001033] border border-white/10 rounded-xl p-6 sm:p-7 space-y-6">
              {/* Outcome Metrics */}
              <div className="space-y-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-nis-orange font-bold">
                  Target Outcome Metrics
                </span>
                <div className="grid grid-cols-2 gap-3">
                  {currentStep.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-lg bg-white/5 border border-white/10"
                    >
                      <div className="font-heading text-2xl font-extrabold text-white">
                        {m.value}
                      </div>
                      <div className="text-[11px] text-gray-400 mt-0.5">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400 font-bold">
                  Engineering Specifications
                </span>
                <div className="space-y-2 font-mono text-xs">
                  {currentStep.technicalSpecs.map((spec, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-lg bg-white/5 flex items-center justify-between text-gray-300"
                    >
                      <span className="text-gray-400">{spec.key}:</span>
                      <span className="text-white font-bold">{spec.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-2">
                <a
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-nis-blue hover:bg-nis-blue-600 text-white font-heading font-semibold text-xs transition-colors shadow-glow-blue"
                >
                  <span>Request Phase {currentStep.num} Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5 text-nis-orange" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
