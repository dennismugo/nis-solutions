"use client";

import React, { useState } from "react";
import Button from "@/components/ui/Button";
import { HOMEPAGE_COPY } from "@/data/copydeck";
import { Plus, Minus } from "lucide-react";
import TextReveal from "@/components/ui/TextReveal";

export default function QuickAnswersSection() {
  const { h2, items } = HOMEPAGE_COPY.faqs;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="ns-section-default bg-white">
      <div className="ns-container-large">
        {/* Jasper-style Sticky Split-Layout FAQ (.ns-faq_component_sticky) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Sticky Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <TextReveal className="space-y-6">
              <span className="inline-block rounded-none bg-[#FFE4D4] text-nis-navy font-mono text-xs sm:text-[13px] font-medium px-2.5 py-1">
                FAQs
              </span>
              <h2 className="ns-heading-h2 text-nis-navy">{h2}</h2>
              <p className="ns-text-medium text-gray-600">
                Clear, direct answers about how we work, where we operate, and how projects start.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-5">
                <Button href="/contact" variant="primary" size="md" withArrow>
                  Ask Us Directly
                </Button>
              </div>
            </TextReveal>
          </div>

          {/* Right Accordion List with 1px Hairline Dividers */}
          <div
            data-animate="stagger-grid"
            className="lg:col-span-7 border-t border-nis-navy/15 divide-y divide-nis-navy/15"
          >
            {items.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={faq.q} className="py-6">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="w-full flex items-start justify-between gap-6 text-left group"
                  >
                    <h3 className="font-sans text-lg sm:text-xl font-medium text-nis-navy group-hover:text-nis-blue transition-colors">
                      {faq.q}
                    </h3>
                    <span className="w-7 h-7 shrink-0 border border-nis-navy/20 flex items-center justify-center text-nis-navy group-hover:border-nis-blue group-hover:text-nis-blue transition-colors mt-0.5">
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-4 pr-10">
                      <p className="ns-text-regular text-gray-600 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
