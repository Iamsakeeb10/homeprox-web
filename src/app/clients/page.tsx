import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { clients } from "@/lib/data/clients";
import { ClientTypeCard } from "@/components/cards/ClientTypeCard";
import { ClientImage } from "@/components/cards/ClientImage";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import {
  Clock,
  Award,
  BarChart,
  MessageSquare,
  Camera,
  ShieldCheck,
  Bell,
  Phone,
  Mail
} from "lucide-react";

import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Our Clients | MEGAFIXX Home Services LLC",
  description: "Trusted by property managers, investors, financial institutions, and real estate professionals across Texas.",
  path: "/clients"
});

export default function ClientsPage() {
  const heroImageUrl = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80";

  return (
    <>
      {/* Page Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImageUrl}
            alt="Property management professionals"
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
            Our Clients
          </h1>
          <p className="font-body text-xl text-muted max-w-3xl mx-auto">
            Trusted Property Maintenance Partner Across Texas
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 lg:py-28 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection variant="fadeLeft">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                  Building Long-Term Partnerships
                </h2>
                <p className="font-body text-lg text-muted mb-4">
                  At MEGAFIXX Home Services LLC, we take pride in building long-term partnerships 
                  with property managers, investors, financial institutions, and real estate professionals 
                  across Texas. Our commitment to reliability, quality, and professional communication 
                  has made us the trusted choice for property maintenance statewide.
                </p>
                <p className="font-body text-lg text-muted">
                  We understand that every property represents an investment, and we treat it accordingly. 
                  From single-family homes to large portfolios, we deliver consistent, professional 
                  service that protects your assets and enhances property value.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection variant="fadeRight">
              <div className="bg-navy-800 border border-navy-700 rounded-xl p-8">
                <h3 className="font-display text-2xl font-bold text-white mb-6">By The Numbers</h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-4xl font-display font-bold text-gold mb-2">10+</div>
                    <div className="font-body text-muted">Years of Experience</div>
                  </div>
                  <div>
                    <div className="text-4xl font-display font-bold text-gold mb-2">500+</div>
                    <div className="font-body text-muted">Properties Maintained</div>
                  </div>
                  <div>
                    <div className="text-4xl font-display font-bold text-gold mb-2">100%</div>
                    <div className="font-body text-muted">Client Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-4xl font-display font-bold text-gold mb-2">Statewide</div>
                    <div className="font-body text-muted">Texas Coverage</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Client Type Sections - Alternating Layout */}
      {clients.map((client, index) => {
        const isEven = index % 2 === 0;
        const animationVariant = isEven ? "fadeLeft" : "fadeRight";

        return (
          <section
            key={client.id}
            className={`py-20 lg:py-28 ${index % 2 === 0 ? "bg-navy-800" : "bg-navy-950"}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                isEven ? "" : "lg:grid-flow-dense"
              }`}>
                {/* Text Content */}
                <div className={isEven ? "" : "lg:col-start-2"}>
                  <AnimatedSection variant={animationVariant}>
                    <ClientTypeCard client={client} variant="full" />
                  </AnimatedSection>
                </div>

                {/* Image */}
                <div className={isEven ? "" : "lg:col-start-1 lg:row-start-1"}>
                  <AnimatedSection variant={isEven ? "fadeRight" : "fadeLeft"}>
                    <ClientImage client={client} />
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Why Clients Choose MEGAFIXX Section */}
      <section className="py-20 lg:py-28 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeUp">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
                Why Clients Choose MEGAFIXX
              </h2>
              <div className="w-20 h-1 bg-gold rounded-full mx-auto" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Clock,
                title: "Reliability",
                description: "We respond quickly, meet deadlines, and keep projects moving forward. Your properties are our priority."
              },
              {
                icon: Award,
                title: "Quality Workmanship",
                description: "Every service is completed with attention to detail and professional standards that exceed expectations."
              },
              {
                icon: BarChart,
                title: "Scalable Solutions",
                description: "One-time repairs or ongoing contracts, we tailor our services to fit your portfolio's unique needs."
              },
              {
                icon: MessageSquare,
                title: "Professional Communication",
                description: "Clear updates before, during, and after every project. You always know what's happening and when."
              }
            ].map((feature, index) => (
              <AnimatedSection
                key={feature.title}
                variant="fadeUp"
                delay={index * 0.1}
              >
                <div className="bg-navy-800 border border-navy-700 rounded-xl p-6 h-full">
                  <feature.icon className="w-10 h-10 text-gold mb-4" aria-hidden="true" />
                  <h3 className="font-display text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="font-body text-muted">
                    {feature.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance Process Section */}
      <section className="py-20 lg:py-28 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeUp">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
                Quality Assurance Process
              </h2>
              <div className="w-20 h-1 bg-gold rounded-full mx-auto" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting Line (Desktop Only) */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 border-t border-gold/30" />

            {[
              {
                number: "01",
                icon: Camera,
                title: "Detailed Documentation",
                description: "Every project includes comprehensive before and after photos, detailed reports, and complete documentation for your records."
              },
              {
                number: "02",
                icon: ShieldCheck,
                title: "Vendor & Team Screening",
                description: "All team members and vendors undergo thorough screening and background checks to ensure the highest standards."
              },
              {
                number: "03",
                icon: Bell,
                title: "Proactive Communication",
                description: "We keep you informed at every step with regular updates, progress reports, and immediate notification of any issues."
              }
            ].map((step, index) => (
              <AnimatedSection
                key={step.number}
                variant="fadeUp"
                delay={index * 0.2}
              >
                <div className="relative bg-navy-950 border border-navy-700 rounded-xl p-8 text-center">
                  {/* Step Number Badge */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold text-navy-950 font-display text-2xl font-bold mb-6">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <step.icon className="w-10 h-10 text-gold mx-auto mb-4" aria-hidden="true" />

                  {/* Title */}
                  <h3 className="font-display text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-muted">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Partner CTA Banner */}
      <section className="py-20 lg:py-28 bg-navy-900 border-t-2 border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeUp">
            <div className="bg-navy-800 border border-gold/30 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Partner with MEGAFIXX?
              </h2>
              <p className="font-body text-lg text-muted mb-8 max-w-2xl mx-auto">
                Join the property professionals across Texas who trust MEGAFIXX for reliable, 
                professional property maintenance services.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
                <a
                  href="tel:4693789262"
                  className="flex items-center gap-2 font-body text-white hover:text-gold transition-colors duration-300"
                >
                  <Phone className="w-5 h-5 text-gold" aria-hidden="true" />
                  (469) 378-9262
                </a>
                <a
                  href="mailto:info@megafixxhomeservices.com"
                  className="flex items-center gap-2 font-body text-white hover:text-gold transition-colors duration-300"
                >
                  <Mail className="w-5 h-5 text-gold" aria-hidden="true" />
                  info@megafixxhomeservices.com
                </a>
              </div>
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
