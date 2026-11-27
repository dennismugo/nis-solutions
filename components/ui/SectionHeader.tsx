import React from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  dark?: boolean;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  centered = false,
  dark = false,
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`max-w-3xl ${
        centered ? "mx-auto text-center" : "text-left"
      } ${className}`}
    >
      <h2
        className={`gh-headline-m text-balance ${
          dark ? "text-white" : "text-nis-navy"
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-4 gh-body-m text-balance ${
            dark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
