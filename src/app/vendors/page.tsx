import { generatePageMetadata } from "@/lib/metadata";
import VendorHero from "@/components/sections/VendorHero";
import VendorWhyPartner from "@/components/sections/VendorWhyPartner";
import VendorOnboarding from "@/components/sections/VendorOnboarding";
import VendorRequirements from "@/components/sections/VendorRequirements";
import VendorServices from "@/components/sections/VendorServices";
import VendorApplicationForm from "@/components/forms/VendorApplicationForm";
import VendorFAQ from "@/components/sections/VendorFAQ";
import VendorCTABanner from "@/components/sections/VendorCTABanner";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Vendor Partners",
  description:
    "Join the MEGAFIXX Property Maintenance Network. Apply to become a vendor partner and receive consistent work orders across Texas residential portfolios and managed assets.",
  path: "/vendors",
});

export default function VendorsPage() {
  return (
    <>
      <VendorHero />
      <VendorWhyPartner />
      <VendorOnboarding />
      <VendorRequirements />
      <VendorServices />
      {/* Application form section — anchor targeted by hero CTA */}
      <section id="vendor-application" className="py-20 lg:py-28 bg-surface-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <VendorApplicationForm />
        </div>
      </section>
      <VendorFAQ />
      <VendorCTABanner />
    </>
  );
}
