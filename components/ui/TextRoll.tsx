import React from "react";

/**
 * Reusable vertical text-roll wrapper activated by parent `.group` hover/focus.
 * Guarantees crisp mechanical dual-track text roll across all buttons and action triggers.
 */
export default function TextRoll({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`relative inline-flex overflow-hidden leading-[1.25] align-middle ${className}`}
    >
      <span className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full group-focus-visible:-translate-y-full">
        {children}
      </span>
      <span
        aria-hidden="true"
        className="inline-block absolute inset-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] translate-y-full group-hover:translate-y-0 group-focus-visible:translate-y-0"
      >
        {children}
      </span>
    </span>
  );
}
