import { ClientImage } from "@/components/cards/ClientImage";
import { ClientTypeCard } from "@/components/cards/ClientTypeCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import ClientsPageInteractive from "@/components/sections/ClientsPageInteractive";
import { clients } from "@/lib/data/clients";
import { Award, BarChart, Bell, Camera, Clock, MessageSquare, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Our Clients | MEGAFIXX Home Services LLC",
  description: "Trusted property maintenance partner for property managers, financial institutions, real estate professionals, and investors across Texas.",
  path: "/clients"
});

export default function ClientsPage() {
  const heroImageUrl = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80";

  return (
    <>
      {/* Page Hero — same overlay and font styles as CTABanner */}
      <section className="relative h-[40vh] min-h-[320px] md:h-[50vh] lg:h-[55vh] flex items-center justify-center overflow-hidden pt-28 sm:pt-32">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImageUrl}
            alt="Property management professionals"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-charcoal/72 z-10" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-20 lg:py-24 text-center">
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Clients
          </h1>
          <p className="font-body text-lg text-surface-200 max-w-2xl mx-auto">
            Trusted Property Maintenance Partner Across Texas
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection variant="fadeLeft">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-6">
                  Building Long-Term Partnerships
                </h2>
                <p className="font-body text-lg text-text-muted mb-4">
                  At MEGAFIXX Home Services LLC, we take pride in building long-term partnerships with clients across Texas. Our reputation is built on reliability, professional execution, and consistent performance across residential and commercial properties.
                </p>
                <p className="font-body text-lg text-text-muted mb-4">
                  We understand that every property represents an investment — and we treat it accordingly. Many of our clients rely on us to manage routine property maintenance, emergency service calls, turnover repairs, preservation services, and compliance inspections.
                </p>
                <p className="font-body text-lg text-orange italic font-medium">
                  &quot;We build relationships based on performance, accountability, and trust.&quot;
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection variant="fadeRight">
              <div className="bg-surface-100 border border-surface-200 rounded-xl p-8">
                <h3 className="font-display text-2xl font-bold text-charcoal mb-6">By The Numbers</h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-4xl font-display font-bold text-orange mb-2">500+</div>
                    <div className="font-body text-text-muted">Properties Maintained</div>
                  </div>
                  <div>
                    <div className="text-4xl font-display font-bold text-orange mb-2">Texas</div>
                    <div className="font-body text-text-muted">Statewide Coverage</div>
                  </div>
                  <div>
                    <div className="text-4xl font-display font-bold text-orange mb-2">100%</div>
                    <div className="font-body text-text-muted">Fully Insured</div>
                  </div>
                  <div>
                    <div className="text-4xl font-display font-bold text-orange mb-2">10+</div>
                    <div className="font-body text-text-muted">Years Experience</div>
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
            className={`py-20 lg:py-28 ${index % 2 === 0 ? "bg-surface-100" : "bg-white"}`}
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
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeUp">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mb-4">
                Why Clients Choose MEGAFIXX
              </h2>
              <div className="w-20 h-1 bg-orange rounded-full mx-auto" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Clock,
                title: "Reliability",
                description: "We understand that time is critical. Our team responds quickly, meets deadlines, and ensures projects move forward without delays."
              },
              {
                icon: Award,
                title: "Quality Workmanship",
                description: "Every service is completed with attention to detail and durability in mind. We focus on long-term solutions — not temporary fixes."
              },
              {
                icon: BarChart,
                title: "Scalable Solutions",
                description: "Whether you need one-time repairs or ongoing maintenance contracts, we tailor our services to fit your operational needs."
              },
              {
                icon: MessageSquare,
                title: "Professional Communication",
                description: "We maintain clear communication before, during, and after each project. Our clients stay informed at every stage."
              }
            ].map((feature, index) => (
              <AnimatedSection
                key={feature.title}
                variant="fadeUp"
                delay={index * 0.1}
              >
                <div className="bg-surface-100 border border-surface-200 rounded-xl p-6 h-full">
                  <feature.icon className="w-10 h-10 text-orange mb-4" aria-hidden="true" />
                  <h3 className="font-display text-xl font-bold text-charcoal mb-3">
                    {feature.title}
                  </h3>
                  <p className="font-body text-text-muted">
                    {feature.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance Process Section */}
      <section className="py-20 lg:py-28 bg-surface-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeUp">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-4">
                Quality Assurance Process
              </h2>
              <div className="w-20 h-1 bg-orange rounded-full mx-auto" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting Line (Desktop Only) */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 border-t border-orange/30" />

            {[
              {
                number: "01",
                icon: Camera,
                title: "Detailed Documentation",
                description: "We provide before photos, progress documentation, and completion photos. This ensures transparency, accountability, and verifiable results."
              },
              {
                number: "02",
                icon: ShieldCheck,
                title: "Vendor & Team Screening",
                description: "We conduct thorough background checks and verify qualifications to ensure that only professional and trustworthy team members represent MEGAFIXX on your property."
              },
              {
                number: "03",
                icon: Bell,
                title: "Proactive Communication",
                description: "We notify stakeholders before service visits and provide status updates throughout the job lifecycle. Upon completion, we follow up to confirm satisfaction."
              }
            ].map((step, index) => (
              <AnimatedSection
                key={step.number}
                variant="fadeUp"
                delay={index * 0.2}
                className="h-full"
              >
                <div className="relative bg-surface-50 border border-surface-200 rounded-xl p-8 text-center h-full flex flex-col hover:border-orange/30 hover:shadow-card transition-all duration-300">
                  {/* Step Number Badge */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-charcoal text-white font-display text-2xl font-bold mb-6 ring-2 ring-charcoal/20 shadow-md">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <step.icon className="w-10 h-10 text-orange mx-auto mb-4" aria-hidden="true" />

                  {/* Title */}
                  <h3 className="font-display text-xl font-bold text-charcoal mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-text-muted flex-grow">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <ClientsPageInteractive />
    </>
  );
}
