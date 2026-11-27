import React from "react";
import { HOMEPAGE_COPY } from "@/data/copydeck";
import { MessageSquare, Wrench, FileText, ShieldCheck } from "lucide-react";
import TextReveal from "@/components/ui/TextReveal";

const PRINCIPLE_ICONS = [MessageSquare, Wrench, FileText, ShieldCheck];

export default function WhyChooseSection() {
  const { h2, items } = HOMEPAGE_COPY.whyChooseUs;

  return (
    <section className="ns-section-default bg-white hairline-b">
      <div className="ns-container-large space-y-12">
        {/* Centered Editorial Header */}
        <TextReveal className="max-w-[52.5rem] mx-auto text-center flex flex-col items-center space-y-4">
          <span className="inline-block rounded-none bg-[#FFE4D4] text-nis-navy font-mono text-xs sm:text-[13px] font-medium px-2.5 py-1">
            Why Choose Us
          </span>
          <h2 className="ns-heading-h2 text-nis-navy">{h2}</h2>
        </TextReveal>

        {/* 4 Sharp-Bordered Principle Columns in Unified Logo Blue (#0111A2) */}
        <div
          data-animate="stagger-grid"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-white/20 divide-y sm:divide-y-0 sm:divide-x divide-white/20 bg-[#0111A2]"
        >
          {items.map((item, idx) => {
            const Icon = PRINCIPLE_ICONS[idx % PRINCIPLE_ICONS.length];

            return (
              <div
                key={item.title}
                className="group p-8 sm:p-10 min-h-[290px] sm:min-h-[320px] flex flex-col justify-between bg-[#0111A2] hover:bg-[#000E88] text-white transition-colors"
              >
                <div className="w-14 h-14 bg-[#F85508] text-white flex items-center justify-center transition-transform duration-300 ease-out group-hover:scale-105">
                  <Icon className="w-7 h-7 stroke-[1.8]" />
                </div>

                <div className="pt-10 space-y-3 flex-1 flex flex-col justify-start">
                  <h3 className="font-sans text-lg font-semibold leading-snug lg:min-h-[3.1rem] text-white">
                    {item.title}
                  </h3>
                  <p className="ns-text-small leading-relaxed text-white/85">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
