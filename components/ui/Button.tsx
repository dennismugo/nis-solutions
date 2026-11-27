import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "white" | "orange";
  size?: "sm" | "md" | "lg";
  withArrow?: boolean;
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  href,
  variant = "primary",
  size = "md",
  withArrow = false,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "group inline-flex items-center justify-center font-sans font-semibold rounded-none transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98]";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2 gap-1.5",
    md: "text-sm px-4 sm:px-5 py-2.5 gap-2",
    lg: "text-sm sm:text-base px-5 py-3 sm:px-7 sm:py-3.5 gap-2 sm:gap-2.5",
  };

  const variantStyles = {
    // Primary Tech Blue
    primary:
      "bg-nis-blue text-white hover:bg-nis-blue-600 focus-visible:ring-nis-blue shadow-sm hover:shadow-glow-blue",
    // Orange Accent for High Conversion
    orange:
      "bg-nis-orange text-white hover:bg-nis-orange-600 focus-visible:ring-nis-orange shadow-sm hover:shadow-glow-orange",
    // Enterprise Navy
    secondary:
      "bg-nis-navy text-white hover:bg-nis-navy-850 focus-visible:ring-nis-navy",
    // Crisp White Button on Dark Backdrops
    white:
      "bg-white text-nis-navy hover:bg-gray-100 hover:text-nis-blue focus-visible:ring-white shadow-elevated",
    // Outlined
    outline:
      "border border-nis-navy/20 bg-transparent text-nis-navy hover:bg-nis-navy/5 hover:border-nis-navy focus-visible:ring-nis-navy",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const rollContent = (
    <>
      <span className="relative inline-flex overflow-hidden leading-[1.25]">
        <span className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
          {children}
        </span>
        <span
          aria-hidden="true"
          className="inline-block absolute inset-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] translate-y-full group-hover:translate-y-0"
        >
          {children}
        </span>
      </span>
      {withArrow && (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {rollContent}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {rollContent}
    </button>
  );
}
