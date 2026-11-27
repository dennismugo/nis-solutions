import React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark" | "mark-only";
  size?: "sm" | "md" | "lg";
}

export default function Logo({
  className = "",
  variant = "light",
  size = "md",
}: LogoProps) {
  const isDarkBg = variant === "dark";

  const heightClasses = {
    sm: "h-7 sm:h-8",
    md: "h-9 sm:h-10",
    lg: "h-12 sm:h-14",
  };

  return (
    <Link
      href="/"
      className={`inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-nis-orange ${
        isDarkBg ? "bg-white px-2.5 py-1" : ""
      } ${className}`}
      aria-label="Nile ICT Solutions Homepage"
    >
      <img
        src="/logo-primary.png"
        alt="Nile ICT Solutions"
        className={`${heightClasses[size]} w-auto object-contain block`}
      />
    </Link>
  );
}
