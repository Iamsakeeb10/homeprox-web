import { TeamPhoto } from "@/components/cards/TeamPhoto";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import {
  Award,
  Clock,
  Home,
  Paintbrush,
  ShieldCheck,
  Trash2
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "About Us | MEGAFIXX Home Services LLC",
  description: "Texas-based statewide property maintenance company serving property managers, investors, banks, and real estate professionals across Texas.",
  path: "/about"
});

const serviceCategories = [
  {
    icon: Paintbrush,
    title: "Interior Services",
    description: "Drywall repair, interior painting, property cleaning, and minor plumbing maintenance for residential and commercial properties."
  },
  {
    icon: Home,
    title: "Exterior Services",
    description: "Gutter cleaning, siding repair, landscaping, and exterior maintenance to protect and enhance property curb appeal."
  },
  {
    icon: Trash2,
    title: "Property Cleanouts",
    description: "Full property cleanouts, debris removal, and junk hauling for rental turnovers, foreclosures, and estate properties."
  }
];

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description: "We operate with full transparency — honest pricing, clear timelines, and no hidden fees."
  },
  {
    icon: Clock,
    title: "Reliability",
    description: "We show up, meet deadlines, and deliver what we promise. Every time, on every property."
  },
  {
    icon: Award,
    title: "Quality",
    description: "We take pride in our work. Every job is completed to a professional standard with lasting results."
  }
];

const regions = [
  "North Texas",
  "Central Texas",
  "East Texas",
  "West Texas",
  "South Texas"
];

export default function AboutPage() {
  const heroImageUrl = "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=80";
  const coverageImageUrl = "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80";

  return (
    <>
      {/* Page Hero — same overlay and font styles as CTABanner */}
      <section className="relative h-[40vh] min-h-[320px] md:h-[50vh] lg:h-[55vh] flex items-center justify-center overflow-hidden pt-28 sm:pt-32">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImageUrl}
            alt="MEGAFIXX professional team at work"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-charcoal/72 z-10" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-20 lg:py-24">
          <div className="text-center">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              About MEGAFIXX Home Services LLC
            </h1>
            <p className="font-body text-lg text-surface-200 max-w-2xl mx-auto">
              Texas-based. Statewide reach. Built for serious property operators.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <AnimatedSection variant="fadeLeft" className="lg:col-span-3">
              <div>
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal mb-6">
                  Our Mission
                </h2>
                <p className="font-body text-base sm:text-lg text-text-muted mb-4">
                  MEGAFIXX Home Services LLC is a Texas-based statewide property maintenance partner built for property managers, investors, financial institutions, and real estate professionals. We provide reliable, affordable, and professional maintenance services throughout Texas — designed to protect, preserve, and enhance property value.
                </p>
                <p className="font-body text-base sm:text-lg text-text-muted mb-6">
                  Many of our clients rely on us to manage routine property maintenance, emergency service calls, turnover repairs, preservation services, and compliance inspections.
                </p>
                <div className="bg-surface-100 border-l-4 border-orange rounded-lg p-4 sm:p-6 mb-8">
                  <p className="font-body text-base sm:text-lg text-orange italic font-medium">
                    &quot;We understand that every property represents an investment — and we treat it accordingly.&quot;
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
      <section className="py-20 lg:py-28 bg-surface-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeUp">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mb-4">
                What We Do
              </h2>
              <div className="w-20 h-1 bg-orange rounded-full mx-auto mb-4" />
              <p className="font-body text-base sm:text-lg text-text-muted max-w-3xl mx-auto">
                Comprehensive property maintenance solutions across Texas — from routine upkeep to full property cleanouts.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <AnimatedSection
                key={category.title}
                variant="fadeUp"
                delay={index * 0.1}
              >
                <div className="bg-white border border-surface-200 rounded-xl p-8 text-center h-full">
                  <category.icon className="w-12 h-12 text-orange mx-auto mb-4" aria-hidden="true" />
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
      <section className="relative py-20 lg:py-28 overflow-hidden">
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

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeUp">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mb-4">
                Serving Clients Across Texas
              </h2>
              <div className="w-20 h-1 bg-orange rounded-full mx-auto mb-4" />
              <p className="font-body text-base sm:text-lg text-text-muted max-w-2xl mx-auto mb-6">
                No matter where your property is located in Texas, MEGAFIXX Home Services LLC delivers dependable maintenance solutions.
              </p>
              <p className="font-body text-base sm:text-lg text-text-muted max-w-2xl mx-auto">
                Major cities: Dallas, Houston, Austin, San Antonio
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection variant="fadeUp" delay={0.2}>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {regions.map((region) => (
                <div
                  key={region}
                  className="bg-surface-100/90 border border-surface-200 rounded-full px-4 py-3 text-center hover:border-orange transition-colors duration-300"
                >
                  <span className="font-accent text-sm text-charcoal">{region}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeUp">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mb-4">
                Our Values
              </h2>
              <div className="w-20 h-1 bg-orange rounded-full mx-auto" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <AnimatedSection
                key={value.title}
                variant="fadeUp"
                delay={index * 0.1}
              >
                <div className="bg-surface-100 border border-surface-200 rounded-xl p-8 text-center h-full">
                  <value.icon className="w-12 h-12 text-orange mx-auto mb-4" aria-hidden="true" />
                  <h3 className="font-display text-2xl font-bold text-charcoal mb-3">
                    {value.title}
                  </h3>
                  <p className="font-body text-text-muted">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 lg:py-28 bg-surface-50 border-t-2 border-orange/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeUp">
            <div className="bg-surface-100 border border-orange/30 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-4">
                Ready to Protect Your Properties?
              </h2>
              <p className="font-body text-lg text-text-muted mb-8 max-w-2xl mx-auto">
                Partner with Texas&apos;s trusted property maintenance team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" size="lg" asChild>
                  <Link href="/contact">Get a Free Quote</Link>
                </Button>
                <Button variant="secondary" size="lg" asChild>
                  <a href="tel:4693789262">Call Now: (469) 378-9262</a>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
