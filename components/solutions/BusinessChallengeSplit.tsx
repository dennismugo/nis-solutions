import React from "react";
import { AlertCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import TextReveal from "@/components/ui/TextReveal";
import ChallengeEditorialPortrait from "@/components/solutions/ChallengeEditorialPortrait";
import type { ChallengeItem } from "@/data/aboutCopy";

interface BusinessChallengeSplitProps {
  heading: string;
  problem: string;
  challenges?: (string | ChallengeItem)[];
  whoItIsFor?: string;
  solutionTitle: string;
  portraitSrc: string;
  portraitAlt: string;
  waysToEngage?: string[];
}

export default function BusinessChallengeSplit({
  heading,
  problem,
  challenges,
  whoItIsFor,
  solutionTitle,
  portraitSrc,
  portraitAlt,
  waysToEngage,
}: BusinessChallengeSplitProps) {
  const assessmentHref = `/contact?solution=${encodeURIComponent(
    solutionTitle
  )}&message=${encodeURIComponent(
    `Hello Nile ICT Solutions, we are experiencing some of these operational bottlenecks around ${solutionTitle} and would like a clear workflow assessment.`
  )}`;

  return (
    <section className="ns-section-default bg-white hairline-b">
      <div className="ns-container-large">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          <div className="lg:col-span-6 space-y-5 flex flex-col justify-center">
            <TextReveal className="space-y-3">
              <span className="inline-block rounded-none bg-[#FFE4D4] text-nis-navy font-mono text-xs font-medium px-2.5 py-1">
                The Business Challenge
              </span>
              <h2 className="ns-heading-h2 text-nis-navy">{heading}</h2>
            </TextReveal>

            <p className="font-heading text-lg sm:text-xl text-nis-navy/90 leading-relaxed border-l-4 border-[#E6602C] pl-4">
              &ldquo;{problem}&rdquo;
            </p>

            {challenges && challenges.length > 0 && (
              <div className="space-y-2.5 pt-1">
                <span className="block font-mono text-[11px] font-bold uppercase tracking-wider text-[#001B9B]">
                  What this costs your team when left manual
                </span>
                <ul data-animate="stagger-grid" className="space-y-2.5">
                  {challenges.map((ch) => {
                    if (typeof ch === "string") {
                      return (
                        <li
                          key={ch}
                          className="bg-[#FAFBFD] border border-nis-navy/10 border-l-2 border-l-[#E6602C] p-3 flex items-start gap-2.5 text-sm text-gray-700"
                        >
                          <AlertCircle className="w-4 h-4 text-[#E6602C] shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{ch}</span>
                        </li>
                      );
                    }

                    return (
                      <li
                        key={ch.symptom}
                        className="bg-[#FAFBFD] border border-nis-navy/10 border-l-2 border-l-[#E6602C] p-3.5 space-y-1"
                      >
                        <div className="flex items-start gap-2.5">
                          <AlertCircle className="w-4 h-4 text-[#E6602C] shrink-0 mt-0.5" />
                          <span className="font-sans font-semibold text-sm sm:text-[15px] text-nis-navy leading-snug">
                            {ch.symptom}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pl-6">
                          {ch.impact}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            {waysToEngage && waysToEngage.length > 0 && (
              <div className="bg-[#FFF4EE] border-l-4 border-[#E6602C] p-5 space-y-3">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#00194F] block">
                  Ways to engage
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-sm text-nis-navy">
                  {waysToEngage.map((way) => (
                    <div
                      key={way}
                      className="bg-white border border-nis-navy/10 p-3 font-medium"
                    >
                      {way}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div
              data-animate="reveal-item"
              className="bg-[#F3F6FF] border border-[#001B9B]/18 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="space-y-1">
                <span className="block font-mono text-[11px] font-bold uppercase tracking-wider text-[#001B9B]">
                  Sound familiar?
                </span>
                <p className="text-xs sm:text-sm text-nis-navy/85 leading-relaxed">
                  {whoItIsFor ||
                    "Built for Kenyan organisations replacing manual workarounds with auditable, dependable systems."}
                </p>
              </div>
              <div className="shrink-0">
                <Button href={assessmentHref} variant="primary" size="md">
                  Assess Your Setup
                </Button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <ChallengeEditorialPortrait src={portraitSrc} alt={portraitAlt} />
          </div>
        </div>
      </div>
    </section>
  );
}
