import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { TeamPhoto } from "@/components/cards/TeamPhoto";
import {
  Wrench,
  Paintbrush,
  Home,
  ShieldCheck,
  Clock,
  Award
} from "lucide-react";

import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "About MEGAFIXX Home Services LLC | Texas Statewide Property Maintenance",
  description: "Learn about MEGAFIXX Home Services LLC and our commitment to professional property maintenance across Texas. Texas-based. Statewide reach. Built for serious property operators.",
  path: "/about"
});

const serviceCategories = [
  {
    icon: Wrench,
    title: "Maintenance & Repairs",
    description: "Comprehensive property maintenance and minor plumbing repairs to keep properties running smoothly."
  },
  {
    icon: Paintbrush,
    title: "Interior Services",
    description: "Drywall repair, interior painting, and property cleaning services for move-ins and turnovers."
  },
  {
    icon: Home,
    title: "Exterior Services",
    description: "Gutter cleaning, landscaping, siding repairs, and exterior maintenance to protect property value."
  }
];

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description: "We do what we say we'll do, when we say we'll do it. Honest communication and transparent pricing."
  },
  {
    icon: Clock,
    title: "Reliability",
    description: "Consistent, dependable service that you can count on. We show up on time and complete projects on schedule."
  },
  {
    icon: Award,
    title: "Quality",
    description: "Every job is completed to the highest standards. We take pride in our workmanship and attention to detail."
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
      {/* Page Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImageUrl}
            alt="MEGAFIXX professional team at work"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-navy-950/75 z-10" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            About MEGAFIXX Home Services LLC
          </h1>
          <p className="font-body text-xl text-muted max-w-3xl mx-auto">
            Texas-based. Statewide reach. Built for serious property operators.
          </p>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-20 lg:py-28 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <AnimatedSection variant="fadeLeft" className="lg:col-span-3">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                  Our Mission
                </h2>
                <p className="font-body text-lg text-muted mb-4">
                  MEGAFIXX Home Services LLC is a trusted statewide property maintenance partner 
                  serving property managers, investors, financial institutions, and real estate 
                  professionals across Texas. We understand that every property represents an 
                  investment — and we treat it accordingly.
                </p>
                <p className="font-body text-lg text-muted mb-8">
                  Our mission is to deliver reliable, professional property maintenance services 
                  that protect your assets, enhance property value, and provide peace of mind. 
                  We build long-term partnerships based on trust, quality workmanship, and 
                  exceptional communication.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="primary" size="lg" asChild>
                    <Link href="/services">View Services</Link>
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
      <section className="py-20 lg:py-28 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeUp">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
                What We Do
              </h2>
              <div className="w-20 h-1 bg-gold rounded-full mx-auto" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <AnimatedSection
                key={category.title}
                variant="fadeUp"
                delay={index * 0.1}
              >
                <div className="bg-navy-950 border border-navy-700 rounded-xl p-8 text-center h-full">
                  <category.icon className="w-12 h-12 text-gold mx-auto mb-4" aria-hidden="true" />
                  <h3 className="font-display text-xl font-bold text-white mb-3">
                    {category.title}
                  </h3>
                  <p className="font-body text-muted">
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
        <div className="absolute inset-0 bg-navy-950/80 z-10" />

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeUp">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
                Serving Clients Across Texas
              </h2>
              <div className="w-20 h-1 bg-gold rounded-full mx-auto mb-6" />
              <p className="font-body text-lg text-muted max-w-2xl mx-auto">
                Major cities: Dallas, Houston, Austin, San Antonio
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection variant="fadeUp" delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
              {regions.map((region) => (
                <div
                  key={region}
                  className="bg-navy-800/90 border border-navy-700 rounded-full px-4 py-3 text-center hover:border-gold transition-colors duration-300"
                >
                  <span className="font-accent text-sm text-white">{region}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-28 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeUp">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
                Our Values
              </h2>
              <div className="w-20 h-1 bg-gold rounded-full mx-auto" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <AnimatedSection
                key={value.title}
                variant="fadeUp"
                delay={index * 0.1}
              >
                <div className="bg-navy-800 border border-navy-700 rounded-xl p-8 text-center h-full">
                  <value.icon className="w-12 h-12 text-gold mx-auto mb-4" aria-hidden="true" />
                  <h3 className="font-display text-2xl font-bold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="font-body text-muted">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 lg:py-28 bg-navy-900 border-t-2 border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeUp">
            <div className="bg-navy-800 border border-gold/30 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Work with MEGAFIXX?
              </h2>
              <p className="font-body text-lg text-muted mb-8 max-w-2xl mx-auto">
                Let&apos;s discuss how we can help maintain and protect your property portfolio across Texas.
              </p>
              <Button variant="primary" size="lg" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
