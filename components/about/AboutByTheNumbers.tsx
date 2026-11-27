"use client";

import React, { useEffect, useRef, useState } from "react";

interface StatItem {
  prefix?: string;
  target: number;
  suffix?: string;
  title: string;
  description: string;
}

const ABOUT_STATS: StatItem[] = [
  {
    target: 100,
    suffix: "%",
    title: "Genuine Equipment",
    description:
      "Hardware sourced from reputable manufacturers and distributors, backed by real warranties.",
  },
  {
    target: 30,
    suffix: "+",
    title: "Turnkey Capabilities",
    description:
      "End-to-end delivery spanning ICT infrastructure, custom software, banking and ERP systems.",
  },
  {
    prefix: "<",
    target: 4,
    suffix: "hr",
    title: "On-Site Nairobi SLA",
    description:
      "Sub-1-hour remote triage and sub-4-hour engineering dispatch for contracted enterprise clients.",
  },
  {
    target: 24,
    suffix: "/7",
    title: "Critical Escalation",
    description:
      "Direct senior engineering escalation protecting mission-critical systems long after launch.",
  },
];

function AnimatedCounter({
  prefix,
  target,
  suffix,
  active,
  delayMs = 0,
}: {
  prefix?: string;
  target: number;
  suffix?: string;
  active: boolean;
  delayMs?: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setCount(target);
      return;
    }

    let rafId = 0;
    let startTime = 0;
    const duration = 1350;

    const timeoutId = window.setTimeout(() => {
      const tick = (now: number) => {
        if (!startTime) startTime = now;
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(eased * target));

        if (progress < 1) {
          rafId = window.requestAnimationFrame(tick);
        }
      };

      rafId = window.requestAnimationFrame(tick);
    }, delayMs);

    return () => {
      window.clearTimeout(timeoutId);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, [active, target, delayMs]);

  return (
    <span className="tabular-nums">
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export default function AboutByTheNumbers() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="mt-14 pt-12 border-t border-nis-navy/10 space-y-8"
    >
      <div className="inline-flex items-center gap-2.5">
        <span
          aria-hidden="true"
          className="w-4 h-4 bg-[#F85508] text-white inline-flex items-center justify-center font-mono text-[11px] font-bold leading-none"
        >
          +
        </span>
        <span className="font-mono text-xs font-semibold uppercase tracking-wider text-nis-navy">
          By the Numbers
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
        {ABOUT_STATS.map((stat, idx) => (
          <div key={stat.title} className="flex flex-col">
            <div className="font-heading font-normal text-3xl sm:text-5xl lg:text-[3.25rem] leading-[1.18] tracking-[-0.025em] text-nis-navy">
              <AnimatedCounter
                prefix={stat.prefix}
                target={stat.target}
                suffix={stat.suffix}
                active={hasEntered}
                delayMs={idx * 90}
              />
            </div>
            <div
              aria-hidden="true"
              data-animate="hairline"
              className="border-b border-dotted border-nis-navy/30 my-4"
            />
            <h3 className="font-sans font-semibold text-base text-nis-navy mb-1.5">
              {stat.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
