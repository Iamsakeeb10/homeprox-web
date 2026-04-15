import { ClientImage } from "@/components/cards/ClientImage";
import ClientsPageInteractive from "@/components/sections/ClientsPageInteractive";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { clients } from "@/lib/data/clients";
import { Bell, Camera, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Our Clients | HomeProX Services LLC",
  description:
    "Trusted property maintenance partner for property managers, financial institutions, real estate professionals, and investors across Texas.",
  path: "/clients",
});

export default function ClientsPage() {
  const heroImageUrl = "/images/heroes/hero-clients-2.jpg";

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
          <div className="flex justify-center my-3">
            <div className="h-px w-16 bg-teal/50" />
          </div>
          <p className="font-body text-lg text-surface-200 max-w-2xl mx-auto">
            Trusted Property Maintenance Partner Across Texas
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      {/* Intro Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection variant="fadeLeft">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-6">
                  Excellence Through Collaboration
                </h2>
                <p className="font-body text-lg text-text-muted mb-4">
                  HomeProX Services LLC partners with Texas business leaders and
                  institutions seeking consistent maintenance, measurable
                  results, and reliable service delivery. Our track record
                  centers on dependable operations, transparent communication,
                  and proven success managing hundreds of properties.
                </p>
                <p className="font-body text-lg text-text-muted mb-4">
                  Property professionals, banking organizations, real estate
                  specialists, and asset managers depend on us for maintenance,
                  emergency support, asset care, and property compliance.
                </p>
                <p className="font-body text-lg text-teal italic font-medium">
                  &quot;Real outcomes create lasting partnerships.&quot;
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection variant="fadeRight">
              <div className="bg-surface-100 border border-surface-200 rounded-xl p-8">
                <h3 className="font-display text-2xl font-bold text-charcoal mb-6">
                  By The Numbers
                </h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-4xl font-display font-bold text-teal mb-2">
                      500+
                    </div>
                    <div className="font-body text-text-muted">
                      Properties Maintained
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl font-display font-bold text-teal mb-2">
                      Texas
                    </div>
                    <div className="font-body text-text-muted">
                      Statewide Coverage
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl font-display font-bold text-teal mb-2">
                      100%
                    </div>
                    <div className="font-body text-text-muted">
                      Fully Insured
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl font-display font-bold text-teal mb-2">
                      10+
                    </div>
                    <div className="font-body text-text-muted">
                      Years Experience
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div
        className="h-px bg-gradient-to-r from-transparent via-surface-300 to-transparent"
        aria-hidden="true"
      />

      {/* Client Types - New Stacked + Featured Layout */}
      {clients.map((client, index) => {
        return (
          <section
            key={client.id}
            className={`py-24 lg:py-32 ${index % 2 === 0 ? "bg-white" : "bg-surface-50"}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Section number badge */}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal/10 border border-teal/30 mb-6">
                <span className="font-display text-lg font-bold text-teal">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
                {/* Left: Title + Description */}
                <div className="lg:col-span-2">
                  <AnimatedSection variant="fadeLeft">
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-4">
                      {client.title}
                    </h2>
                    <p className="font-body text-lg text-text-muted mb-6">
                      {client.description}
                    </p>
                    <div className="space-y-3">
                      {client.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <span className="text-teal font-bold text-lg mt-0.5">
                            →
                          </span>
                          <span className="font-body text-text-muted">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </AnimatedSection>
                </div>

                {/* Right: Card + Image */}
                <div className="lg:col-span-3">
                  <AnimatedSection variant="fadeRight" className="space-y-6">
                    <ClientImage client={client} />
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Why Choose HomeProX Section */}
      <div
        className="h-px bg-gradient-to-r from-transparent via-surface-300 to-transparent"
        aria-hidden="true"
      />
      <WhyChooseUs />

      {/* Divider */}
      <div
        className="h-px bg-gradient-to-r from-transparent via-surface-300 to-transparent"
        aria-hidden="true"
      />

      {/* Quality Assurance Process Section - Redesigned */}
      <section className="py-24 lg:py-32 bg-surface-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeUp">
            <div className="max-w-3xl mx-auto mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-6 text-center">
                How We Ensure Quality
              </h2>
              <p className="font-body text-lg text-text-muted text-center">
                Every HomeProX engagement follows a rigorous three-step quality
                protocol designed to protect your investment and ensure
                professional outcomes.
              </p>
            </div>
          </AnimatedSection>

          {/* Process Steps - Vertical Timeline */}
          <div className="max-w-2xl mx-auto">
            {[
              {
                number: "01",
                icon: Camera,
                title: "Detailed Documentation",
                description:
                  "We provide before photos, progress documentation, and completion photos. This ensures transparency, accountability, and verifiable results.",
              },
              {
                number: "02",
                icon: ShieldCheck,
                title: "Vendor & Team Screening",
                description:
                  "We conduct thorough background checks and verify qualifications to ensure that only professional and trustworthy team members represent HomeProX on your property.",
              },
              {
                number: "03",
                icon: Bell,
                title: "Proactive Communication",
                description:
                  "We notify stakeholders before service visits and provide status updates throughout the job lifecycle. Upon completion, we follow up to confirm satisfaction.",
              },
            ].map((step, index) => (
              <AnimatedSection
                key={step.number}
                variant="fadeUp"
                delay={index * 0.15}
                className="mb-8 last:mb-0"
              >
                <div className="flex gap-6">
                  {/* Number + Line */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-teal text-white flex items-center justify-center font-display font-bold text-lg mb-4">
                      {step.number}
                    </div>
                    {index < 2 && <div className="w-1 h-24 bg-teal/20" />}
                  </div>

                  {/* Content */}
                  <div className="pb-4 flex-grow">
                    <h3 className="font-display text-2xl font-bold text-charcoal mb-2">
                      {step.title}
                    </h3>
                    <p className="font-body text-text-muted">
                      {step.description}
                    </p>
                  </div>
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
