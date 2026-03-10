import { ContactForm } from "@/components/forms/ContactForm";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import {
  Building2,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  Clock,
  Mail,
  MapPin,
  Phone,
  Wrench,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Contact Us | MEGAFIXX Home Services LLC",
  description:
    "Contact MEGAFIXX Home Services. Reach us by phone, email, or send a message. Property maintenance, client partnerships, and vendor inquiries across Texas.",
  path: "/contact",
});

const CONTACT_HERO_IMAGE = "/images/about/team-photo.jpg";

const TRUST_ITEMS = [
  "Reliable Property Maintenance",
  "Fast Response Times",
  "Serving Residential & Investment Properties",
];

export default function ContactPage() {
  return (
    <>
      {/* Page Hero — same overlay and font styles as Services, About */}
      <section className="relative h-[40vh] min-h-[320px] md:h-[50vh] lg:h-[55vh] flex items-center justify-center overflow-hidden pt-28 sm:pt-32">
        <div className="absolute inset-0 z-0">
          <Image
            src={CONTACT_HERO_IMAGE}
            alt="Contact MEGAFIXX Home Services"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-charcoal/72 z-10" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-20 lg:py-24 text-center">
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Contact MEGAFIXX
          </h1>
          <p className="font-body text-lg text-surface-200 max-w-2xl mx-auto">
            Have a question about property maintenance, partnerships, or vendor opportunities? Send
            us a message and our team will respond shortly.
          </p>
        </div>
      </section>

      {/* Two-column: Contact Info (left) + Form (right) */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left — Contact Information */}
            <AnimatedSection variant="fadeLeft">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-charcoal mb-2">
                Contact Information
              </h2>
              <div className="h-0.5 w-12 bg-orange rounded-full mb-8" />

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-5 rounded-xl bg-surface-50 border border-surface-200 hover:border-orange/40 hover:shadow-card-hover transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-orange-muted flex items-center justify-center flex-shrink-0">
                    <Phone className="text-orange" size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-accent text-xs font-semibold text-text-muted uppercase tracking-wider mb-0.5">
                      Phone
                    </p>
                    <a
                      href="tel:+14693789262"
                      className="font-body text-charcoal font-medium hover:text-orange transition-colors"
                    >
                      (469) 378-9262
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl bg-surface-50 border border-surface-200 hover:border-orange/40 hover:shadow-card-hover transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-orange-muted flex items-center justify-center flex-shrink-0">
                    <Mail className="text-orange" size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-accent text-xs font-semibold text-text-muted uppercase tracking-wider mb-0.5">
                      Email
                    </p>
                    <a
                      href="mailto:info@megafixxhomeservices.com"
                      className="font-body text-charcoal font-medium hover:text-orange transition-colors"
                    >
                      info@megafixxhomeservices.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl bg-surface-50 border border-surface-200 hover:border-orange/40 hover:shadow-card-hover transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-orange-muted flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-orange" size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-accent text-xs font-semibold text-text-muted uppercase tracking-wider mb-0.5">
                      Service Coverage
                    </p>
                    <p className="font-body text-charcoal font-medium">
                      Serving Residential & Investment Properties
                    </p>
                    <p className="font-body text-text-muted text-sm mt-0.5">Statewide — Texas</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl bg-surface-50 border border-surface-200 hover:border-orange/40 hover:shadow-card-hover transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-orange-muted flex items-center justify-center flex-shrink-0">
                    <Clock className="text-orange" size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-accent text-xs font-semibold text-text-muted uppercase tracking-wider mb-0.5">
                      Business Hours
                    </p>
                    <p className="font-body text-charcoal font-medium">
                      Monday – Friday: 8:00 AM – 6:00 PM
                    </p>
                    <p className="font-body text-charcoal font-medium mt-2">Saturday: closed</p>
                    <p className="font-body text-charcoal font-medium">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-surface-200">
                <p className="font-accent text-xs font-semibold text-text-muted uppercase tracking-wider mb-4">
                  Looking for something specific?
                </p>
                <div className="flex flex-col gap-3">
                  <Link
                    href="/clients"
                    className="flex items-center gap-3 group font-body text-charcoal hover:text-orange transition-colors duration-200"
                  >
                    <Building2 className="text-orange" size={18} aria-hidden="true" />
                    <span className="font-medium">Become a Client</span>
                    <ChevronRight
                      size={16}
                      className="text-text-muted group-hover:text-orange group-hover:translate-x-1 transition-all duration-200 ml-auto"
                      aria-hidden="true"
                    />
                  </Link>
                  <Link
                    href="/vendors"
                    className="flex items-center gap-3 group font-body text-charcoal hover:text-orange transition-colors duration-200"
                  >
                    <Wrench className="text-orange" size={18} aria-hidden="true" />
                    <span className="font-medium">Become a Vendor</span>
                    <ChevronRight
                      size={16}
                      className="text-text-muted group-hover:text-orange group-hover:translate-x-1 transition-all duration-200 ml-auto"
                      aria-hidden="true"
                    />
                  </Link>
                  <Link
                    href="#contact-form"
                    className="flex items-center gap-3 group font-body text-charcoal hover:text-orange transition-colors duration-200"
                  >
                    <ClipboardList className="text-orange" size={18} aria-hidden="true" />
                    <span className="font-medium">Request Service</span>
                    <ChevronRight
                      size={16}
                      className="text-text-muted group-hover:text-orange group-hover:translate-x-1 transition-all duration-200 ml-auto"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            {/* Right — Form card with id for anchor */}
            <AnimatedSection variant="fadeRight" delay={0.1}>
              <div id="contact-form" className="bg-white rounded-2xl border border-surface-200 shadow-card p-8 sm:p-10">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-charcoal mb-2">
                  Send Us a Message
                </h2>
                <div className="h-0.5 w-12 bg-orange rounded-full mb-8" />
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="py-12 bg-surface-50 border-t border-surface-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {TRUST_ITEMS.map((label, index) => (
              <AnimatedSection key={label} variant="fadeUp" delay={index * 0.05}>
                <div className="flex flex-col items-center gap-2">
                  <CheckCircle2 className="text-orange" size={24} aria-hidden="true" />
                  <span className="font-body font-medium text-charcoal text-sm">{label}</span>
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
              href="tel:+14693789262"
              className="font-display text-2xl sm:text-3xl font-bold text-white hover:text-orange transition-colors duration-200 flex items-center justify-center gap-3"
            >
              <Phone className="text-orange" size={28} aria-hidden="true" />
              (469) 378-9262
            </a>
            <p className="font-body text-surface-300 mt-2 text-sm">
              Monday – Friday: 8:00 AM – 6:00 PM &nbsp;·&nbsp; Saturday: closed &nbsp;·&nbsp; Sunday: Closed
            </p>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
