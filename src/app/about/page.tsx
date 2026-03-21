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
  title: "About Us | HomeProX Services LLC",
  description: "Texas-based statewide property maintenance company serving property managers, investors, banks, and real estate professionals across Texas.",
  path: "/about"
});

const serviceCategories = [
  {
    icon: Paintbrush,
    title: "Interior Services",
    description: "Drywall restoration, interior painting, property cleaning, and plumbing support for homes and commercial operations."
  },
  {
    icon: Home,
    title: "Exterior Services",
    description: "Gutter systems, siding solutions, landscaping services, and exterior maintenance protecting property curb appeal."
  },
  {
    icon: Trash2,
    title: "Property Cleanouts",
    description: "Complete property cleanouts, unwanted item removal, and debris hauling for transitions, bank properties, and general cleanup."
  }
];

const values = [
  {
    icon: ShieldCheck,
    title: "Honesty",
    description: "We practice complete transparency — straightforward pricing, realistic timelines, and no unexpected charges."
  },
  {
    icon: Clock,
    title: "Dependability",
    description: "We show up on schedule, fulfill our commitments, and deliver results consistently across all properties."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain high standards on every project. Every task receives professional-level execution with proven durability."
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
            Rooted in Texas. Serving statewide. Engineered for professional operations.
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
                  HomeProX Services LLC operates as a Texas-based statewide maintenance provider serving property owners, asset managers, institutional partners, and commercial clients. We deliver consistent, affordable, and professional maintenance solutions throughout Texas — designed to safeguard, maintain, and grow property investments.
                </p>
                <p className="font-body text-base sm:text-lg text-text-muted mb-6">
                  Our clients depend on us to handle regular maintenance duties, urgent service needs, transition preparations, asset preservation, and property inspections.
                </p>
                <div className="bg-surface-100 border-l-4 border-teal rounded-lg p-4 sm:p-6 mb-8">
                  <p className="font-body text-base sm:text-lg text-teal italic font-medium">
                    &quot;We view every property as a valued investment — and we manage it that way.&quot;
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
                Complete property maintenance systems throughout Texas—providing targeted expertise in interior solutions, exterior offerings, and property cleanout services.
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
                  <category.icon className="w-12 h-12 text-teal mx-auto mb-4" aria-hidden="true" />
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
                From the boundaries to the center, HomeProX Services LLC serves properties anywhere throughout Texas. Specialized knowledge. Regional connections. Statewide infrastructure.
              </p>
              <p className="font-body text-lg text-surface-200 max-w-2xl mx-auto">
                Supporting Dallas, Houston, Austin, San Antonio, and surrounding areas
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
                  <span className="font-accent text-sm text-white">{region}</span>
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
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mb-4">
                Our Values
              </h2>
              <div className="w-20 h-1 bg-teal rounded-full mx-auto" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <AnimatedSection
                key={value.title}
                variant="fadeUp"
                delay={index * 0.1}
              >
                <div className="pl-4 border-l-2 border-teal/40">
                  <h3 className="font-display font-semibold text-charcoal mb-2 text-xl">{value.title}</h3>
                  <p className="font-body text-text-muted">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
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
                Join hundreds of successful property professionals across Texas who depend on HomeProX for dependable maintenance solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button variant="primary" size="lg" asChild>
                  <Link href="/quote">Get a Free Quote</Link>
                </Button>
                <span className="text-surface-300">or</span>
                <a
                  href="tel:4693789262"
                  className="font-body text-teal hover:text-teal-light transition-colors"
                >
                  Call: (469) 378-9262
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
