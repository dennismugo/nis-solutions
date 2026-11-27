"use client";

import React, { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { Plus, Minus, ArrowRight } from "lucide-react";
import type { FaqEntry } from "@/data/aboutCopy";
import TextReveal from "@/components/ui/TextReveal";

interface InnerQuickAnswersProps {
  eyebrow?: string;
  heading?: string;
  subtitle?: string;
  items: FaqEntry[];
  ctaHref?: string;
  ctaLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

export default function InnerQuickAnswers({
  eyebrow = "Quick Answers",
  heading = "What Our Clients Ask",
  subtitle = "Straight answers on scope, integrations, security and ongoing support.",
  items,
  ctaHref = "/contact",
  ctaLabel = "Ask Us Directly",
  secondaryHref = "/solutions",
  secondaryLabel = "Browse our solutions",
}: InnerQuickAnswersProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!items || items.length === 0) return null;

  return (
    <section className="ns-section-default bg-white hairline-b">
      <div className="ns-container-large">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Sticky Left Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <TextReveal className="space-y-5">
              <div>
                <span className="inline-block rounded-none bg-[#FFE4D4] text-nis-navy font-mono text-xs sm:text-[13px] font-medium px-2.5 py-1">
                  {eyebrow}
                </span>
              </div>

              <h2 className="ns-heading-h2 text-nis-navy">{heading}</h2>
              <p className="ns-text-medium text-gray-600 leading-relaxed">
                {subtitle}
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-5">
                <Button href={ctaHref} variant="primary" size="md" withArrow>
                  {ctaLabel}
                </Button>
                {secondaryHref && secondaryLabel && (
                  <Link
                    href={secondaryHref}
                    className="inline-flex items-center gap-2 font-semibold text-sm text-nis-blue hover:text-nis-orange transition-colors group"
                  >
                    <span>{secondaryLabel}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                )}
              </div>
            </TextReveal>
          </div>

          {/* Interactive Left-Accent Accordion Right Column */}
          <div
            data-animate="stagger-grid"
            className="lg:col-span-7 border-t border-nis-navy/15 divide-y divide-nis-navy/15"
          >
            {items.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={faq.q}
                  className={`py-6 px-4 sm:px-5 transition-colors border-l-2 ${
                    isOpen
                      ? "bg-[#F7F9FC] border-l-[#001B9B]"
                      : "bg-transparent border-l-transparent hover:bg-[#F9FAFC]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="w-full flex items-start justify-between gap-6 text-left group"
                  >
                    <h3 className="font-sans text-lg sm:text-xl font-medium text-nis-navy group-hover:text-nis-blue transition-colors">
                      {faq.q}
                    </h3>
                    <span
                      className={`w-7 h-7 shrink-0 border flex items-center justify-center transition-colors mt-0.5 ${
                        isOpen
                          ? "bg-[#001B9B] border-[#001B9B] text-white"
                          : "border-nis-navy/20 text-nis-navy group-hover:border-nis-blue group-hover:text-nis-blue"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-4 pr-8">
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
