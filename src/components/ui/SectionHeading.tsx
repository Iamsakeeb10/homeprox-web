interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className = "",
  titleClassName = "",
  subtitleClassName = "",
}: SectionHeadingProps) {
  const alignmentClasses =
    align === "center" ? "text-center items-center" : "text-left items-start";

  const accentElement = (
    <div className="flex items-center gap-2 mt-3">
      <div className="h-1 w-8 bg-teal rounded-full" />
      <div className="h-1 w-1 bg-teal/50 rounded-full" />
      <div className="h-1 w-1 bg-teal/30 rounded-full" />
    </div>
  );

  return (
    <div
      className={`flex flex-col gap-3 mb-10 ${alignmentClasses} ${className}`}
    >
      <h2
        className={`font-display text-4xl md:text-5xl font-bold text-charcoal ${titleClassName}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`font-body text-lg text-text-muted max-w-2xl ${subtitleClassName}`}
        >
          {subtitle}
        </p>
      )}
      {align === "center" ? (
        <div className="flex justify-center">{accentElement}</div>
      ) : (
        accentElement
      )}
    </div>
  );
}
