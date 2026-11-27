import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { Search, Compass, Wrench, ShieldCheck } from "lucide-react";

export default function MethodologySection() {
  const steps = [
    {
      num: "01",
      icon: Search,
      title: "Discover & Audit",
      desc: "Comprehensive on-site physical walk-through, RF wireless heatmap analysis, bandwidth traffic audit, and power resilience testing.",
    },
    {
      num: "02",
      icon: Compass,
      title: "Architect & Scope",
      desc: "Creating detailed network topology blueprints, bill of materials (BoM) with authorized tier-1 hardware, and clear SLA schedules.",
    },
    {
      num: "03",
      icon: Wrench,
      title: "Deploy & Certify",
      desc: "Precision structured trunking, clean rack termination, Fluke calibration testing, and firmware security hardening.",
    },
    {
      num: "04",
      icon: ShieldCheck,
      title: "Maintain & Protect",
      desc: "Continuous proactive monitoring, scheduled physical preventative maintenance, employee helpdesk, and rapid emergency dispatch.",
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-28 border-b border-gray-100">
      <div className="max-w-[90rem] mx-auto px-5 sm:px-8 lg:px-10">
        <SectionHeader
          badge="Execution Methodology"
          title="A systematic delivery process with zero surprises."
          subtitle="Every project follows a proven engineering cycle that ensures timeline adherence, transparent documentation, and clean operational handovers."
          centered
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative rounded-2xl border border-gray-200 p-7 bg-white hover:border-nis-blue/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-heading font-extrabold text-3xl text-nis-blue/20 group-hover:text-nis-blue transition-colors">
                      {step.num}
                    </span>
                    <div className="p-2.5 rounded-xl bg-nis-surface text-nis-navy group-hover:bg-nis-orange/10 group-hover:text-nis-orange transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-nis-navy mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-gray-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-1.5 text-[11px] font-bold text-nis-blue uppercase tracking-wider">
                  <span>Phase {step.num} Verified</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
