import { ContactTabsForms } from "@/components/sections/ContactTabsForms";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CheckCircle2, Clock, Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Contact Us | HomeProX Services LLC",
  description:
    "Contact HomeProX Services LLC. Reach us by phone, email, or send a message. Property maintenance, client partnerships, and vendor inquiries across Texas.",
  path: "/contact",
});

const CONTACT_HERO_IMAGE = "/images/about/team-photo.jpg";

const TRUST_ITEMS = [
  "Professional Property Services",
  "Quick Turnaround",
  "Supporting Residential & Commercial Properties",
];

type ContactPageProps = {
  searchParams?: Promise<{
    tab?: string | string[];
  }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const resolvedSearchParams = await searchParams;
  const tabParam = resolvedSearchParams?.tab;
  const activeTab =
    (Array.isArray(tabParam) ? tabParam[0] : tabParam) === "quote"
      ? "quote"
      : "contact";

  return (
    <>
      {/* Page Hero — same overlay and font styles as Services, About */}
      <section className="relative h-[40vh] min-h-[320px] md:h-[50vh] lg:h-[55vh] flex items-center justify-center overflow-hidden pt-28 sm:pt-32">
        <div className="absolute inset-0 z-0">
          <Image
            src={CONTACT_HERO_IMAGE}
            alt="Contact HomeProX Services"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-charcoal/72 z-10" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-20 lg:py-24 text-center">
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Contact HomeProX
          </h1>
          <div className="flex justify-center my-3">
            <div className="h-px w-16 bg-teal/50" />
          </div>
          <p className="font-body text-lg text-surface-200 max-w-2xl mx-auto">
            Questions about available services, business development, or
            partnership opportunities? Reach out to discuss your property care
            requirements.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      {/* Contact Layout - Card Grid + Form */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Quick Contact Cards - 2x2 Grid */}
          <div className="mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-10 text-center">
              Get in Touch
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {/* Phone */}
              <AnimatedSection variant="fadeUp">
                <div className="bg-gradient-to-br from-teal/5 to-transparent rounded-2xl p-8 border border-teal/20 hover:border-teal/40 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-teal/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-teal" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-charcoal mb-2">
                        Phone
                      </h3>
                      <a
                        href="tel:6822773555 "
                        className="font-body text-lg text-teal hover:text-teal-dark transition-colors"
                      >
                        (682) 277-3555
                      </a>
                      <p className="font-body text-sm text-text-muted mt-1">
                        Available during business hours
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Email */}
              <AnimatedSection variant="fadeUp" delay={0.1}>
                <div className="bg-gradient-to-br from-teal/5 to-transparent rounded-2xl p-8 border border-teal/20 hover:border-teal/40 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-teal/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-teal" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-charcoal mb-2">
                        Email
                      </h3>
                      <a
                        href="mailto:info@homeproxsvcs.com"
                        className="font-body text-lg text-teal hover:text-teal-dark transition-colors"
                      >
                        info@homeproxsvcs.com
                      </a>
                      <p className="font-body text-sm text-text-muted mt-1">
                        Responded within 24 hours
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Service Area */}
              <AnimatedSection variant="fadeUp" delay={0.2}>
                <div className="bg-gradient-to-br from-teal/5 to-transparent rounded-2xl p-8 border border-teal/20 hover:border-teal/40 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-teal/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-teal" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-charcoal mb-2">
                        Service Area
                      </h3>
                      <p className="font-body text-lg text-charcoal">
                        All of Texas Statewide
                      </p>
                      <p className="font-body text-sm text-text-muted mt-1">
                        Comprehensive coverage everywhere
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Hours */}
              <AnimatedSection variant="fadeUp" delay={0.3}>
                <div className="bg-gradient-to-br from-teal/5 to-transparent rounded-2xl p-8 border border-teal/20 hover:border-teal/40 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-teal/20 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-teal" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-charcoal mb-2">
                        Hours
                      </h3>
                      <p className="font-body text-charcoal">
                        Mon–Fri: 8am–6pm
                      </p>
                      <p className="font-body text-text-muted text-sm mt-1">
                        Saturday: Closed
                      </p>
                      <p className="font-body text-text-muted text-sm mt-1">
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Contact Form */}
          <AnimatedSection variant="fadeUp">
            <ContactTabsForms initialTab={activeTab} />
          </AnimatedSection>
        </div>
      </section>

      {/* Trust Indicators Strip */}
      <section className="py-12 bg-surface-50 border-t border-surface-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {TRUST_ITEMS.map((label, index) => (
              <AnimatedSection
                key={label}
                variant="fadeUp"
                delay={index * 0.05}
              >
                <div className="flex flex-col items-center gap-2">
                  <CheckCircle2
                    className="text-teal"
                    size={24}
                    aria-hidden="true"
                  />
                  <span className="font-body font-medium text-charcoal text-sm">
                    {label}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA strip */}
      <section className="py-12 bg-charcoal">
        <AnimatedSection variant="fadeUp">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="font-body text-surface-300 mb-1 text-sm uppercase tracking-wider font-accent">
              Prefer to talk?
            </p>
            <a
              href="tel:+6822773555 "
              className="font-display text-2xl sm:text-3xl font-bold text-white hover:text-teal transition-colors duration-200 flex items-center justify-center gap-3"
            >
              <Phone className="text-teal" size={28} aria-hidden="true" />
              (682) 277-3555
            </a>
            <p className="font-body text-surface-300 mt-2 text-sm">
              Monday – Friday: 8:00 AM – 6:00 PM &nbsp;·&nbsp; Saturday: closed
              &nbsp;·&nbsp; Sunday: Closed
            </p>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
