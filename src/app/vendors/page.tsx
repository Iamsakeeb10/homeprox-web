import VendorApplicationForm from "@/components/forms/VendorApplicationForm";
import VendorCTABanner from "@/components/sections/VendorCTABanner";
import VendorFAQ from "@/components/sections/VendorFAQ";
import VendorHero from "@/components/sections/VendorHero";
import VendorOnboarding from "@/components/sections/VendorOnboarding";
import VendorRequirements from "@/components/sections/VendorRequirements";
import VendorServices from "@/components/sections/VendorServices";
import VendorWhyPartner from "@/components/sections/VendorWhyPartner";
import { generatePageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Vendor Partners",
  description:
    "Join the HomeProX Property Maintenance Network. Apply to become a vendor partner and receive consistent work orders across Texas residential portfolios and managed assets.",
  path: "/vendors",
});

export default function VendorsPage() {
  return (
    <>
      <VendorHero />
      <VendorWhyPartner />
      <div
        className="h-px bg-gradient-to-r from-transparent via-teal/30 to-transparent"
        aria-hidden="true"
      />
      <VendorOnboarding />
      <div
        className="h-px bg-gradient-to-r from-transparent via-surface-300 to-transparent"
        aria-hidden="true"
      />
      <VendorRequirements />
      <VendorServices />

      {/* Application form section — anchor targeted by hero CTA */}
      <section id="vendor-application" className="py-20 lg:py-28 bg-surface-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
              Ready to Apply?
            </h2>
            <p className="font-body text-lg text-text-muted">
              Complete the form below and we'll review your application within
              2-3 business days.
            </p>
          </div>
          <VendorApplicationForm />
        </div>
      </section>

      <div
        className="h-px bg-gradient-to-r from-transparent via-surface-300 to-transparent"
        aria-hidden="true"
      />
      <VendorFAQ />
      <VendorCTABanner />
    </>
  );
}
