import { TeamPhoto } from "@/components/cards/TeamPhoto";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import {
  BadgeCheck,
  Briefcase,
  Building2,
  FileCheck2,
  Home,
  Mail,
  MapPin,
  Paintbrush,
  Shield,
  Trash2,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "About Us | HomeProX Services LLC",
  description:
    "Texas-based statewide property maintenance company serving property managers, investors, banks, and real estate professionals across Texas.",
  path: "/about",
});

const serviceCategories = [
  {
    icon: Paintbrush,
    title: "Interior Services",
    description:
      "Drywall restoration, interior painting, property cleaning, and plumbing support for homes and commercial operations.",
  },
  {
    icon: Home,
    title: "Exterior Services",
    description:
      "Gutter systems, siding solutions, landscaping services, and exterior maintenance protecting property curb appeal.",
  },
  {
    icon: Trash2,
    title: "Property Cleanouts",
    description:
      "Complete property cleanouts, unwanted item removal, and debris hauling for transitions, bank properties, and general cleanup.",
  },
];

const complianceCards = [
  {
    icon: Shield,
    title: "General Liability",
    subtitle: "GL Insurance",
    status: "Active Coverage",
    certificate: "COI Available",
  },
  {
    icon: Briefcase,
    title: "Workers’ Compensation",
    subtitle: "WC Insurance",
    status: "Active Coverage",
    certificate: "COI Available",
  },
  {
    icon: FileCheck2,
    title: "Errors & Omissions",
    subtitle: "E&O Insurance",
    status: "Active Coverage",
    certificate: "COI Available",
  },
  {
    icon: Building2,
    title: "Texas LLC",
    subtitle: "Registered Entity",
    status: "Active Registration",
    certificate: "Certificate Available",
  },
];

const trustDetails = [
  {
    icon: Building2,
    label: "Business Entity",
    value: "HomeProX Services LLC — Texas Registered · EIN on File",
  },
  {
    icon: MapPin,
    label: "Primary Market",
    value: "Dallas–Fort Worth · Texas Statewide",
  },
  {
    icon: Mail,
    label: "Request Documents",
    value: "info@homeproxsvcs.com",
  },
  {
    icon: BadgeCheck,
    label: "Vendor Compliance",
    value: "All vendors background-checked & insured",
  },
];

const regions = [
  "North Texas",
  "Central Texas",
  "East Texas",
  "West Texas",
  "South Texas",
];

export default function AboutPage() {
  const heroImageUrl = "/images/heroes/hero-about.jpg";
  const coverageImageUrl = "/images/about/coverage-bg.jpg";

  return (
    <>
      {/* Page Hero — same overlay and font styles as CTABanner */}
      <section className="relative h-[40vh] min-h-[320px] md:h-[50vh] lg:h-[55vh] flex items-center justify-center overflow-hidden pt-28 sm:pt-32">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImageUrl}
            alt="HomeProX professional team at work"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-charcoal/72 z-10" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-20 lg:py-24">
          <div className="text-center">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              About HomeProX Services LLC
            </h1>
            <div className="flex justify-center my-3">
              <div className="h-px w-16 bg-teal/50" />
            </div>
            <p className="font-body text-lg text-surface-200 max-w-2xl mx-auto">
              Rooted in Texas. Serving statewide. Engineered for professional
              operations.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      {/* Mission Statement Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <AnimatedSection variant="fadeLeft" className="lg:col-span-3">
              <div>
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal mb-6">
                  Our Purpose
                </h2>
                <p className="font-body text-base sm:text-lg text-text-muted mb-4">
                  HomeProX Services LLC operates as a Texas-based statewide
                  maintenance provider serving property owners, asset managers,
                  institutional partners, and commercial clients. We deliver
                  consistent, affordable, and professional maintenance solutions
                  throughout Texas — designed to safeguard, maintain, and grow
                  property investments.
                </p>
                <p className="font-body text-base sm:text-lg text-text-muted mb-6">
                  Our clients depend on us to handle regular maintenance duties,
                  urgent service needs, transition preparations, asset
                  preservation, and property inspections.
                </p>
                <div className="bg-surface-100 border-l-4 border-teal rounded-lg p-4 sm:p-6 mb-8">
                  <p className="font-body text-base sm:text-lg text-teal italic font-medium">
                    &quot;We view every property as a valued investment — and we
                    manage it that way.&quot;
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="primary" size="lg" asChild>
                    <Link href="/services">View Our Services</Link>
                  </Button>
                  <Button variant="secondary" size="lg" asChild>
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection variant="fadeRight" className="lg:col-span-2">
              <TeamPhoto />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 lg:py-32 bg-surface-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeUp">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mb-4">
                Our Capabilities
              </h2>
              <div className="w-20 h-1 bg-teal rounded-full mx-auto mb-4" />
              <p className="font-body text-base sm:text-lg text-text-muted max-w-3xl mx-auto">
                Complete property maintenance systems throughout Texas—providing
                targeted expertise in interior solutions, exterior offerings,
                and property cleanout services.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceCategories.map((category, index) => (
              <AnimatedSection
                key={category.title}
                variant="fadeUp"
                delay={index * 0.1}
              >
                <div className="bg-white border border-surface-200 rounded-2xl p-8 text-center h-full hover:border-teal/40 hover:shadow-card transition-all duration-300">
                  <category.icon
                    className="w-12 h-12 text-teal mx-auto mb-4"
                    aria-hidden="true"
                  />
                  <h3 className="font-display text-xl font-bold text-charcoal mb-3">
                    {category.title}
                  </h3>
                  <p className="font-body text-text-muted">
                    {category.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={coverageImageUrl}
            alt="Texas property maintenance coverage"
            fill
            className="object-cover"
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-charcoal/72 z-10" />

        {/* Content — same design and font colors as CTABanner dark variant */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeUp">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Across the Entire Lone Star State
              </h2>
              <p className="font-body text-lg text-surface-200 max-w-2xl mx-auto mb-6">
                From the boundaries to the center, HomeProX Services LLC serves
                properties anywhere throughout Texas. Specialized knowledge.
                Regional connections. Statewide infrastructure.
              </p>
              <p className="font-body text-lg text-surface-200 max-w-2xl mx-auto">
                Supporting Dallas, Houston, Austin, San Antonio, and surrounding
                areas
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection variant="fadeUp" delay={0.2}>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {regions.map((region) => (
                <div
                  key={region}
                  className="bg-white/10 border border-white/20 rounded-full px-4 py-3 text-center hover:bg-white/20 transition-colors duration-300"
                >
                  <span className="font-accent text-sm text-white">
                    {region}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeUp">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className="font-accent text-xs sm:text-sm tracking-[0.22em] text-teal uppercase mb-4">
                Compliance & Trust
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mb-5">
                Fully Licensed, Insured & Verified
              </h2>
              <div className="w-24 h-1 bg-teal rounded-full mx-auto mb-5" />
              <p className="font-body text-base sm:text-lg text-text-muted">
                HomeProX Services operates as a registered Texas LLC. We carry
                comprehensive insurance and make all certificates available on
                request.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
            {complianceCards.map((card, index) => (
              <AnimatedSection
                key={card.title}
                variant="fadeUp"
                delay={index * 0.1}
              >
                <div className="group h-full bg-white border border-surface-200 rounded-2xl shadow-card hover:border-teal/40 hover:shadow-card-hover transition-all duration-300 overflow-hidden">
                  <div className="h-1.5 w-full bg-gradient-to-r from-teal to-skyblue" />
                  <div className="p-6">
                    <card.icon
                      className="w-10 h-10 text-teal mb-4"
                      aria-hidden="true"
                    />
                    <h3 className="font-display font-bold text-charcoal text-xl mb-1">
                      {card.title}
                    </h3>
                    <p className="font-accent text-[11px] uppercase tracking-[0.14em] text-text-muted mb-4">
                      {card.subtitle}
                    </p>
                    <p className="font-body text-sm text-teal-dark font-medium mb-4">
                      ✓ {card.status}
                    </p>
                    <span className="inline-flex items-center rounded-md bg-teal-muted px-3 py-1.5 font-accent text-[10px] uppercase tracking-[0.12em] text-charcoal">
                      {card.certificate}
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection variant="fadeUp" delay={0.15}>
            <div className="rounded-2xl border border-surface-200 bg-surface-50 shadow-card px-4 py-4 sm:px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                {trustDetails.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-3 border-b border-surface-200 pb-4 last:border-b-0 last:pb-0 md:border-b-0 md:pb-0 xl:border-r xl:pr-4 last:xl:border-r-0"
                  >
                    <item.icon
                      className="w-5 h-5 text-teal shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-accent text-[10px] uppercase tracking-[0.14em] text-charcoal-muted mb-1">
                        {item.label}
                      </p>
                      <p className="font-body text-sm text-charcoal leading-snug">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 lg:py-32 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeUp">
            <div className="text-center">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Want to Begin?
              </h2>
              <p className="font-body text-lg text-surface-300 mb-10 max-w-2xl mx-auto">
                Join hundreds of successful property professionals across Texas
                who depend on HomeProX for dependable maintenance solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button variant="primary" size="lg" asChild>
                  <Link href="/contact?tab=quote">Get a Free Quote</Link>
                </Button>
                <span className="text-surface-300">or</span>
                <a
                  href="tel:6822773555 "
                  className="font-body text-teal hover:text-teal-light transition-colors"
                >
                  Call: (682) 277-3555
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
