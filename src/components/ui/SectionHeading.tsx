import React from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className = ""
}: SectionHeadingProps) {
  const alignmentClasses = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 mb-12 ${alignmentClasses} ${className}`}>
      <h2 className="font-display text-4xl md:text-5xl font-bold text-navy">
        {title}
      </h2>
      {subtitle && (
        <p className="font-body text-lg text-text-muted max-w-2xl">
          {subtitle}
        </p>
      )}
      <div className="mt-4 flex items-center gap-3">
        <span className="block h-0.5 w-12 bg-blue rounded-full" />
        <span className="block h-0.5 w-4 bg-surface-300 rounded-full" />
      </div>
    </div>
  );
}
