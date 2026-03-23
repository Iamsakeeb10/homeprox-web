import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { services } from "@/lib/data/services";
import { generatePageMetadata } from "@/lib/metadata";
import {
  CheckCircle,
  Droplets,
  Home,
  Leaf,
  Paintbrush,
  Sparkles,
  Trash2,
  Wrench,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = generatePageMetadata({
  title: "Our Services | HomeProX Services LLC",
  description:
    "Professional property maintenance services across Texas including plumbing, gutter cleaning, drywall repair, landscaping, and more.",
  path: "/services",
});

// Icon mapping for service cards
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Wrench,
  Droplets,
  Paintbrush,
  Sparkles,
  Leaf,
  Home,
  Trash2,
};

// Helper component to render service icons
function ServiceIconComponent({
  iconName,
  className,
}: {
  iconName: string;
  className?: string;
}) {
  const Icon = iconMap[iconName] || Wrench;
  return <Icon className={className} aria-hidden="true" />;
}

export default function ServicesPage() {
  const heroImageUrl = "/images/heroes/hero.jpg";

  return (
    <>
      {/* Page Hero — Split Layout: Text Left (Charcoal), Image Right */}
      <section className="flex flex-col md:flex-row min-h-[60vh] md:min-h-[55vh] overflow-hidden pt-20 md:pt-28">
        {/* Left: Charcoal Text Section */}
        <div className="w-full md:w-1/2 bg-charcoal flex items-center justify-center px-6 sm:px-8 md:px-12 py-16 sm:py-20 md:py-24">
          <div className="text-center md:text-left max-w-2xl">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Complete Maintenance Solutions
            </h1>
            <div className="flex justify-center md:justify-start mb-6">
              <div className="h-px w-16 bg-teal/50" />
            </div>
            <p className="font-body text-base sm:text-lg text-surface-200">
              Seven specialized maintenance areas addressing every property
              requirement across Texas. From regular maintenance to urgent
              service calls, we deliver expert results for homes, commercial
              spaces, and investment portfolios.
            </p>
          </div>
        </div>

        {/* Right: Image Section */}
        <div className="relative w-full md:w-1/2 h-48 md:h-auto overflow-hidden">
          <Image
            src={heroImageUrl}
            alt="Professional property maintenance services"
            fill
            priority
            className="object-cover"
          />
        </div>
      </section>

      {/* Services: Introduction Section with Stat Strip */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Left-Bordered Heading */}
          <AnimatedSection variant="fadeUp" className="mb-12">
            <div className="border-l-4 border-teal pl-6 mb-12">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-4">
                Seven Specialized Services
              </h2>
              <p className="font-body text-lg text-text-muted max-w-3xl">
                HomeProX provides specialized support across all property
                maintenance areas. From preventive maintenance through urgent
                repairs, we deliver the right solution for your investment.
              </p>
            </div>
          </AnimatedSection>

          {/* Stat Strip with Dividers */}
          <AnimatedSection variant="fadeUp" className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-surface-200 bg-surface-50 rounded-2xl overflow-hidden">
              <div className="px-6 sm:px-8 py-8 text-center">
                <span className="font-display text-teal font-bold text-2xl md:text-3xl block mb-1">
                  Statewide
                </span>
                <p className="font-body text-sm text-text-muted">Coverage</p>
              </div>
              <div className="px-6 sm:px-8 py-8 text-center">
                <span className="font-display text-teal font-bold text-2xl md:text-3xl block mb-1">
                  Licensed
                </span>
                <p className="font-body text-sm text-text-muted">& Insured</p>
              </div>
              <div className="px-6 sm:px-8 py-8 text-center">
                <span className="font-display text-teal font-bold text-2xl md:text-3xl block mb-1">
                  24-Hour
                </span>
                <p className="font-body text-sm text-text-muted">Response</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Services Gallery — Alternating Horizontal Rows */}
          <div className="mb-16 space-y-6">
            {services.map((service, index) => (
              <AnimatedSection
                key={service.id}
                variant="fadeUp"
                delay={index * 0.08}
              >
                <div
                  className={`flex flex-col ${
                    index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                  } border border-surface-200 rounded-2xl overflow-hidden hover:border-teal/40 hover:shadow-card-hover transition-all duration-300`}
                >
                  {/* Image: 40% on desktop, full on mobile */}
                  <div className="relative w-full md:w-2/5 h-48 md:h-auto md:min-h-[320px] flex-shrink-0">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content: 60% on desktop, full on mobile */}
                  <div className="flex flex-col justify-between p-6 sm:p-8 w-full md:w-3/5">
                    {/* Icon Badge */}
                    <div className="w-10 h-10 rounded-xl bg-teal-muted flex items-center justify-center mb-3">
                      <ServiceIconComponent
                        iconName={service.icon}
                        className="w-5 h-5 text-teal"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-2xl font-bold text-charcoal mb-3">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="font-body text-text-muted mb-4">
                      {service.description}
                    </p>

                    {/* Coverage Badge */}
                    <div className="mb-4">
                      <span className="inline-flex items-center px-3 py-1 bg-skyblue-light rounded-full text-xs font-accent text-skyblue">
                        Available Statewide Across Texas
                      </span>
                    </div>

                    {/* Features List */}
                    <ul className="space-y-2 mb-6 flex-grow">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle
                            className="w-5 h-5 text-teal mt-0.5 flex-shrink-0"
                            aria-hidden="true"
                          />
                          <span className="font-body text-text-muted text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Button
                      variant="secondary"
                      size="md"
                      className="mt-auto"
                      asChild
                    >
                      <Link href="/quote">Get a Quote</Link>
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Bottom CTA Banner — Two Column Layout */}
          <AnimatedSection variant="fadeUp">
            <div className="bg-charcoal rounded-2xl p-8 sm:p-10 md:p-14 flex flex-col md:flex-row items-center md:items-center justify-between gap-8">
              {/* Left: Text Content */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                  Prepared to Begin?
                </h2>
                <p className="font-body text-surface-200">
                  Get a personalized estimate tailored to your property
                  maintenance requirements. We'll get back to you within 24
                  hours.
                </p>
              </div>

              {/* Right: CTA Buttons Stack */}
              <div className="flex flex-col items-center gap-0">
                <Button variant="primary" size="lg" asChild>
                  <Link href="/quote">Get a Free Quote</Link>
                </Button>
                <div className="h-px w-12 bg-teal my-4" />
                <a
                  href="tel:4693789262"
                  className="font-body text-teal hover:text-teal-light transition-colors"
                >
                  (469) 378-9262
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
