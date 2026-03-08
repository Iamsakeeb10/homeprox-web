# MEGAFIXX — Vendor Page Implementation Guide

**For Cursor AI. Follow every chunk in order. Do not skip steps.**  
This guide adds a `/vendors` route with a multi-step application form that emails submissions via Nodemailer (reusing the existing mailer utility) and supports file attachments.

---

## Chunk 0 — Read Before Starting

### Design Consistency Rules (from existing codebase)
- Colors: `text-charcoal`, `text-orange`, `bg-surface-50/100`, `border-surface-200`, `bg-hero-bg`
- Fonts: `font-display` (headings), `font-body` (body), `font-accent` (buttons/nav)
- Section padding: `py-20 lg:py-28`; container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Cards: `bg-white border border-surface-200 rounded-xl shadow-card hover:border-orange/40 hover:shadow-card-hover`
- Buttons: use existing `<Button>` component with `variant="primary"` or `"secondary"`
- Section titles: use existing `<SectionHeading>` component
- Scroll animations: wrap sections in `<AnimatedSection variant="fadeUp">`
- Inner page hero pattern: `section` with `bg-hero-bg h-[40vh] min-h-[320px] md:h-[50vh] lg:h-[55vh] pt-28 sm:pt-32`
- All interactive components must include `"use client"` at top
- Respect `useReducedMotion()` in any Framer Motion usage

### Files to Create
```
src/app/vendors/page.tsx
src/components/sections/VendorHero.tsx
src/components/sections/VendorWhyPartner.tsx
src/components/sections/VendorOnboarding.tsx
src/components/sections/VendorRequirements.tsx
src/components/sections/VendorServices.tsx
src/components/sections/VendorFAQ.tsx
src/components/sections/VendorCTABanner.tsx
src/components/forms/VendorApplicationForm.tsx
src/app/api/vendor/route.ts
src/types/vendor.ts
```

### Files to Modify
```
src/components/layout/Navbar.tsx       — add "Vendors" nav link
src/components/layout/Footer.tsx       — add "Vendors" to Quick Links
src/app/sitemap.ts                     — add /vendors route
```

---

## Chunk 1 — Types

**File:** `src/types/vendor.ts`

Create this file with all TypeScript types for the vendor feature.

```typescript
export interface VendorFormData {
  // Step 1 — Company Information
  companyName: string;
  contactPerson: string;
  phone: string;
  email: string;
  website: string; // optional
  yearsInBusiness: string;

  // Step 2 — Services Offered
  serviceCategories: string[];
  coverageAreas: string;
  serviceRadius: string;

  // Step 3 — Compliance & Documentation
  insuranceCertificate: File | null;
  license: File | null;
  w9Form: File | null;
  backgroundCheckAuth: File | null;
}

export interface VendorFormErrors {
  companyName?: string;
  contactPerson?: string;
  phone?: string;
  email?: string;
  yearsInBusiness?: string;
  serviceCategories?: string;
  coverageAreas?: string;
  serviceRadius?: string;
  insuranceCertificate?: string;
  general?: string;
}

export interface VendorFormStep {
  id: number;
  title: string;
  description: string;
}
```

---

## Chunk 2 — Vendor Page Route

**File:** `src/app/vendors/page.tsx`

```typescript
import { generatePageMetadata } from "@/lib/metadata";
import VendorHero from "@/components/sections/VendorHero";
import VendorWhyPartner from "@/components/sections/VendorWhyPartner";
import VendorOnboarding from "@/components/sections/VendorOnboarding";
import VendorRequirements from "@/components/sections/VendorRequirements";
import VendorServices from "@/components/sections/VendorServices";
import VendorApplicationForm from "@/components/forms/VendorApplicationForm";
import VendorFAQ from "@/components/sections/VendorFAQ";
import VendorCTABanner from "@/components/sections/VendorCTABanner";

export const metadata = generatePageMetadata({
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
```

---

## Chunk 3 — Hero Section

**File:** `src/components/sections/VendorHero.tsx`

Match the exact inner-page hero pattern used by `/about`, `/services`, `/clients`, `/contact`.

```typescript
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function VendorHero() {
  return (
    <section className="relative h-[40vh] min-h-[320px] md:h-[50vh] lg:h-[55vh] flex items-center justify-center overflow-hidden bg-hero-bg pt-28 sm:pt-32">
      {/* Optional subtle texture overlay — matches home hero */}
      <div className="hero-texture absolute inset-0 z-0" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-20 lg:py-24 text-center">
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          Join the MEGAFIXX Property Maintenance Network
        </h1>
        <p className="font-body text-lg text-surface-200 max-w-2xl mx-auto mb-8">
          Become part of a structured, performance-driven property maintenance
          team supporting residential portfolios and managed assets across Texas.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary" size="lg" asChild>
            <Link href="#vendor-application">Apply Now</Link>
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-charcoal"
            asChild
          >
            <Link href="#vendor-application">Vendor Login</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
```

---

## Chunk 4 — Subtext Strip + Why Partner Section

**File:** `src/components/sections/VendorWhyPartner.tsx`

```typescript
import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const benefits = [
  {
    title: "Consistent Work Opportunities",
    description:
      "We provide steady work orders across property maintenance, turnovers, preservation, and exterior services.",
  },
  {
    title: "Fast & Transparent Payments",
    description:
      "Clear scope approvals, structured invoicing, and timely payments.",
  },
  {
    title: "Professional Work Environment",
    description:
      "Work within a system that values documentation, communication, and accountability.",
  },
  {
    title: "Statewide Coverage Opportunities",
    description:
      "Serve properties in your preferred service areas with scalable growth potential.",
  },
];

export default function VendorWhyPartner() {
  return (
    <>
      {/* Subtext strip */}
      <div className="bg-charcoal text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-accent text-sm sm:text-base text-center text-surface-300 tracking-wide">
            Serving Residential Portfolios&nbsp;•&nbsp;Investment
            Properties&nbsp;•&nbsp;Managed Communities&nbsp;•&nbsp;Institutional
            Assets
          </p>
        </div>
      </div>

      {/* Why partner section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeUp">
            <SectionHeading
              title="Why Partner With MEGAFIXX?"
              subtitle="Built for Professionals. Designed for Growth."
              align="center"
            />
          </AnimatedSection>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedSection
                key={benefit.title}
                variant="fadeUp"
                delay={index * 0.1}
              >
                <div className="bg-white border border-surface-200 rounded-xl shadow-card p-6 hover:border-orange/40 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex gap-4">
                  <span className="mt-1 flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-orange" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-charcoal mb-2">
                      {benefit.title}
                    </h3>
                    <p className="font-body text-text-muted">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
```

---

## Chunk 5 — 3-Step Onboarding Section

**File:** `src/components/sections/VendorOnboarding.tsx`

```typescript
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const steps = [
  {
    number: "01",
    title: "Submit Application",
    description:
      "Provide your company details, service types, coverage areas, and compliance documents.",
  },
  {
    number: "02",
    title: "Review & Approval",
    description:
      "Our team reviews your qualifications, insurance, experience, and service capabilities.",
  },
  {
    number: "03",
    title: "Start Receiving Work Orders",
    description:
      "Once approved, you'll begin receiving structured work assignments within your coverage area.",
  },
];

export default function VendorOnboarding() {
  return (
    <section className="py-20 lg:py-28 bg-surface-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp">
          <SectionHeading
            title="A Structured Path to Getting Work Orders"
            subtitle="Simple 3-step onboarding process"
            align="center"
          />
        </AnimatedSection>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line — desktop only */}
          <div
            className="hidden md:block absolute top-10 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-0.5 bg-surface-200"
            aria-hidden="true"
          />

          {steps.map((step, index) => (
            <AnimatedSection key={step.number} variant="fadeUp" delay={index * 0.15}>
              <div className="relative bg-white border border-surface-200 rounded-xl shadow-card p-8 text-center hover:border-orange/40 hover:shadow-card-hover transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange text-white font-display text-xl font-bold mb-5 shadow-orange-glow">
                  {step.number}
                </div>
                <h3 className="font-display text-xl font-bold text-charcoal mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-text-muted">{step.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## Chunk 6 — Requirements Section

**File:** `src/components/sections/VendorRequirements.tsx`

```typescript
import { CheckCircle2, Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const required = [
  "Active General Liability Insurance",
  "Valid Identification & Business Registration",
  "Relevant Trade Experience",
  "Ability to provide Before/During/After Photo Documentation",
  "Reliable Communication & Timely Completion",
];

const preferred = [
  "Property Maintenance Experience",
  "Turnover or Preservation Background",
  "Multi-trade Capability",
];

export default function VendorRequirements() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp">
          <SectionHeading
            title="What We Look For in Vendors"
            subtitle="We partner with licensed and insured professionals who meet our service standards."
            align="center"
          />
        </AnimatedSection>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Required */}
          <AnimatedSection variant="fadeLeft" delay={0.1}>
            <div className="bg-white border border-surface-200 rounded-xl shadow-card p-8 h-full">
              <h3 className="font-display text-xl font-bold text-charcoal mb-6 flex items-center gap-2">
                <span className="w-2 h-6 rounded-full bg-orange inline-block" />
                Requirements
              </h3>
              <ul className="space-y-4">
                {required.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange mt-0.5 flex-shrink-0" />
                    <span className="font-body text-text-body">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Preferred */}
          <AnimatedSection variant="fadeRight" delay={0.2}>
            <div className="bg-surface-50 border border-surface-200 rounded-xl shadow-card p-8 h-full">
              <h3 className="font-display text-xl font-bold text-charcoal mb-6 flex items-center gap-2">
                <span className="w-2 h-6 rounded-full bg-amber inline-block" />
                Preferred
              </h3>
              <ul className="space-y-4">
                {preferred.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-amber fill-amber mt-0.5 flex-shrink-0" />
                    <span className="font-body text-text-body">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
```

---

## Chunk 7 — Services We Assign Section

**File:** `src/components/sections/VendorServices.tsx`

```typescript
import {
  Wrench,
  RefreshCcw,
  Leaf,
  Droplets,
  Trash2,
  Shield,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const serviceCategories = [
  { icon: Wrench, label: "General Property Maintenance" },
  { icon: RefreshCcw, label: "Rental Turnovers" },
  { icon: Leaf, label: "Landscaping & Exterior Work" },
  { icon: Droplets, label: "Minor Plumbing & Electrical" },
  { icon: Trash2, label: "Trash Outs & Cleanouts" },
  { icon: Shield, label: "Property Preservation" },
];

export default function VendorServices() {
  return (
    <section className="py-20 lg:py-28 bg-surface-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp">
          <SectionHeading
            title="Services We Assign"
            subtitle="Vendors may receive work in the following categories."
            align="center"
          />
        </AnimatedSection>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {serviceCategories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <AnimatedSection key={cat.label} variant="scaleIn" delay={index * 0.08}>
                <div className="bg-white border border-surface-200 rounded-xl shadow-card p-6 text-center hover:border-orange/40 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col items-center gap-3">
                  <span className="w-12 h-12 rounded-lg bg-orange-muted flex items-center justify-center">
                    <Icon className="w-6 h-6 text-orange" />
                  </span>
                  <p className="font-body text-sm font-medium text-charcoal leading-snug">
                    {cat.label}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
```

---

## Chunk 8 — Multi-Step Vendor Application Form

**File:** `src/components/forms/VendorApplicationForm.tsx`

This is the most complex component. It is a 3-step form with file attachment support.  
Mark `"use client"` at the top.

```typescript
"use client";

import { useState, useRef } from "react";
import { Upload, X, CheckCircle2, ChevronRight, ChevronLeft, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { VendorFormData, VendorFormErrors } from "@/types/vendor";

// ─── Constants ──────────────────────────────────────────────────────────────

const SERVICE_CATEGORIES = [
  "General Property Maintenance",
  "Rental Turnovers",
  "Landscaping & Exterior Work",
  "Minor Plumbing & Electrical",
  "Trash Outs & Cleanouts",
  "Property Preservation",
];

const STEPS = [
  { id: 1, title: "Company Information", description: "Tell us about your business" },
  { id: 2, title: "Services Offered", description: "What you do and where you work" },
  { id: 3, title: "Compliance & Docs", description: "Insurance, licenses, and documents" },
];

const INITIAL_DATA: VendorFormData = {
  companyName: "",
  contactPerson: "",
  phone: "",
  email: "",
  website: "",
  yearsInBusiness: "",
  serviceCategories: [],
  coverageAreas: "",
  serviceRadius: "",
  insuranceCertificate: null,
  license: null,
  w9Form: null,
  backgroundCheckAuth: null,
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

function validateStep(step: number, data: VendorFormData): VendorFormErrors {
  const errors: VendorFormErrors = {};
  if (step === 1) {
    if (!data.companyName.trim()) errors.companyName = "Company name is required.";
    if (!data.contactPerson.trim()) errors.contactPerson = "Contact person is required.";
    if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      errors.email = "A valid email address is required.";
    if (!data.phone.trim() || data.phone.replace(/\D/g, "").length < 10)
      errors.phone = "A valid phone number (at least 10 digits) is required.";
    if (!data.yearsInBusiness.trim())
      errors.yearsInBusiness = "Years in business is required.";
  }
  if (step === 2) {
    if (data.serviceCategories.length === 0)
      errors.serviceCategories = "Select at least one service category.";
    if (!data.coverageAreas.trim())
      errors.coverageAreas = "Coverage areas are required.";
    if (!data.serviceRadius.trim())
      errors.serviceRadius = "Service radius is required.";
  }
  if (step === 3) {
    if (!data.insuranceCertificate)
      errors.insuranceCertificate = "Certificate of Insurance is required.";
  }
  return errors;
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function FileUploadField({
  label,
  fieldName,
  file,
  required,
  onChange,
}: {
  label: string;
  fieldName: keyof VendorFormData;
  file: File | null;
  required?: boolean;
  onChange: (field: keyof VendorFormData, file: File | null) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <label className="block font-body text-sm font-medium text-charcoal mb-2">
        {label}
        {required && <span className="text-orange ml-1">*</span>}
        {!required && <span className="text-text-muted ml-1 font-normal">(Optional)</span>}
      </label>
      {file ? (
        <div className="flex items-center gap-3 p-3 bg-orange-muted border border-orange/30 rounded-lg">
          <CheckCircle2 className="w-5 h-5 text-orange flex-shrink-0" />
          <span className="font-body text-sm text-charcoal flex-1 truncate">{file.name}</span>
          <button
            type="button"
            onClick={() => onChange(fieldName, null)}
            className="text-text-muted hover:text-error transition-colors"
            aria-label="Remove file"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="w-full flex flex-col items-center justify-center gap-2 p-6 border-2 border-dashed border-surface-200 rounded-lg hover:border-orange/60 hover:bg-orange-muted/40 transition-all duration-200 cursor-pointer"
        >
          <Upload className="w-6 h-6 text-orange" />
          <span className="font-body text-sm text-text-muted">
            Click to upload (PDF, JPG, PNG — max 10MB)
          </span>
        </button>
      )}
      <input
        ref={inputRef}
        type="file"
        accept=".pdf,.jpg,.jpeg,.png"
        className="sr-only"
        onChange={(e) => onChange(fieldName, e.target.files?.[0] ?? null)}
      />
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function VendorApplicationForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<VendorFormData>(INITIAL_DATA);
  const [errors, setErrors] = useState<VendorFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // ── Field helpers ──
  const handleChange = (field: keyof VendorFormData, value: string | File | null) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof VendorFormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const toggleServiceCategory = (cat: string) => {
    setFormData((prev) => ({
      ...prev,
      serviceCategories: prev.serviceCategories.includes(cat)
        ? prev.serviceCategories.filter((c) => c !== cat)
        : [...prev.serviceCategories, cat],
    }));
    if (errors.serviceCategories) setErrors((prev) => ({ ...prev, serviceCategories: undefined }));
  };

  // ── Navigation ──
  const handleNext = () => {
    const stepErrors = validateStep(currentStep, formData);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }
    setErrors({});
    setCurrentStep((prev) => prev + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    setErrors({});
    setCurrentStep((prev) => prev - 1);
  };

  // ── Submit ──
  const handleSubmit = async () => {
    const stepErrors = validateStep(3, formData);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const body = new FormData();

      // Text fields
      const textFields: (keyof VendorFormData)[] = [
        "companyName", "contactPerson", "phone", "email", "website",
        "yearsInBusiness", "coverageAreas", "serviceRadius",
      ];
      textFields.forEach((key) => {
        body.append(key, (formData[key] as string) ?? "");
      });
      body.append("serviceCategories", formData.serviceCategories.join(", "));

      // File attachments
      const fileFields: (keyof VendorFormData)[] = [
        "insuranceCertificate", "license", "w9Form", "backgroundCheckAuth",
      ];
      fileFields.forEach((key) => {
        const file = formData[key] as File | null;
        if (file) body.append(key, file);
      });

      const res = await fetch("/api/vendor", { method: "POST", body });
      if (!res.ok) throw new Error("Submission failed. Please try again.");
      setIsSuccess(true);
    } catch (err: unknown) {
      setSubmitError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // ── Success state ──
  if (isSuccess) {
    return (
      <div className="max-w-2xl mx-auto text-center py-16">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-orange-muted mb-6">
          <CheckCircle2 className="w-10 h-10 text-orange" />
        </div>
        <h2 className="font-display text-3xl font-bold text-charcoal mb-4">
          Application Submitted!
        </h2>
        <p className="font-body text-text-muted text-lg">
          Thank you for applying to the MEGAFIXX Vendor Network. Our team will
          review your application and respond within 5–10 business days.
        </p>
      </div>
    );
  }

  // ── Step indicator ──
  const StepIndicator = () => (
    <div className="flex items-center justify-center gap-2 mb-10">
      {STEPS.map((step, i) => (
        <div key={step.id} className="flex items-center gap-2">
          <div
            className={`flex items-center justify-center w-9 h-9 rounded-full font-accent text-sm font-semibold transition-colors duration-300 ${
              currentStep === step.id
                ? "bg-orange text-white shadow-orange-glow"
                : currentStep > step.id
                ? "bg-charcoal text-white"
                : "bg-surface-100 text-text-muted border border-surface-200"
            }`}
          >
            {currentStep > step.id ? <CheckCircle2 className="w-4 h-4" /> : step.id}
          </div>
          <span
            className={`hidden sm:block font-accent text-sm ${
              currentStep === step.id ? "text-charcoal font-semibold" : "text-text-muted"
            }`}
          >
            {step.title}
          </span>
          {i < STEPS.length - 1 && (
            <div
              className={`w-8 h-0.5 mx-1 rounded-full transition-colors duration-300 ${
                currentStep > step.id ? "bg-charcoal" : "bg-surface-200"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );

  // ── Input class helper ──
  const inputClass = (field: keyof VendorFormErrors) =>
    `w-full font-body text-sm px-4 py-3 border rounded-lg bg-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange focus:border-orange placeholder:text-text-muted ${
      errors[field]
        ? "border-error text-error"
        : "border-surface-200 text-text-body"
    }`;

  return (
    <div>
      <SectionHeading
        title="Vendor Application"
        subtitle="Complete all three steps to submit your application."
        align="center"
      />

      <div className="mt-10 max-w-3xl mx-auto">
        <StepIndicator />

        <div className="bg-white border border-surface-200 rounded-2xl shadow-card p-8 sm:p-10">
          {/* Step label */}
          <p className="font-accent text-xs uppercase tracking-widest text-orange mb-1">
            Step {currentStep} of {STEPS.length}
          </p>
          <h3 className="font-display text-2xl font-bold text-charcoal mb-1">
            {STEPS[currentStep - 1].title}
          </h3>
          <p className="font-body text-text-muted mb-8">
            {STEPS[currentStep - 1].description}
          </p>

          {/* ── Step 1: Company Information ─────────────────── */}
          {currentStep === 1 && (
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-body text-sm font-medium text-charcoal mb-1.5">
                    Company Name <span className="text-orange">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="ACME Maintenance LLC"
                    value={formData.companyName}
                    onChange={(e) => handleChange("companyName", e.target.value)}
                    className={inputClass("companyName")}
                  />
                  {errors.companyName && (
                    <p className="mt-1 text-xs text-error">{errors.companyName}</p>
                  )}
                </div>
                <div>
                  <label className="block font-body text-sm font-medium text-charcoal mb-1.5">
                    Contact Person <span className="text-orange">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="John Smith"
                    value={formData.contactPerson}
                    onChange={(e) => handleChange("contactPerson", e.target.value)}
                    className={inputClass("contactPerson")}
                  />
                  {errors.contactPerson && (
                    <p className="mt-1 text-xs text-error">{errors.contactPerson}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-body text-sm font-medium text-charcoal mb-1.5">
                    Phone Number <span className="text-orange">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="(555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className={inputClass("phone")}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-error">{errors.phone}</p>
                  )}
                </div>
                <div>
                  <label className="block font-body text-sm font-medium text-charcoal mb-1.5">
                    Email Address <span className="text-orange">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className={inputClass("email")}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-error">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-body text-sm font-medium text-charcoal mb-1.5">
                    Business Website{" "}
                    <span className="text-text-muted font-normal">(Optional)</span>
                  </label>
                  <input
                    type="url"
                    placeholder="https://yourcompany.com"
                    value={formData.website}
                    onChange={(e) => handleChange("website", e.target.value)}
                    className={inputClass("general")}
                  />
                </div>
                <div>
                  <label className="block font-body text-sm font-medium text-charcoal mb-1.5">
                    Years in Business <span className="text-orange">*</span>
                  </label>
                  <select
                    value={formData.yearsInBusiness}
                    onChange={(e) => handleChange("yearsInBusiness", e.target.value)}
                    className={inputClass("yearsInBusiness")}
                  >
                    <option value="">Select...</option>
                    <option value="Less than 1 year">Less than 1 year</option>
                    <option value="1–2 years">1–2 years</option>
                    <option value="3–5 years">3–5 years</option>
                    <option value="6–10 years">6–10 years</option>
                    <option value="10+ years">10+ years</option>
                  </select>
                  {errors.yearsInBusiness && (
                    <p className="mt-1 text-xs text-error">{errors.yearsInBusiness}</p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* ── Step 2: Services Offered ─────────────────────── */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <label className="block font-body text-sm font-medium text-charcoal mb-3">
                  Service Categories <span className="text-orange">*</span>{" "}
                  <span className="text-text-muted font-normal">(Select all that apply)</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {SERVICE_CATEGORIES.map((cat) => {
                    const selected = formData.serviceCategories.includes(cat);
                    return (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => toggleServiceCategory(cat)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg border text-left font-body text-sm transition-all duration-200 ${
                          selected
                            ? "border-orange bg-orange-muted text-charcoal font-medium"
                            : "border-surface-200 text-text-muted hover:border-orange/50 hover:bg-surface-50"
                        }`}
                      >
                        <span
                          className={`w-4 h-4 rounded border flex-shrink-0 flex items-center justify-center transition-colors ${
                            selected ? "bg-orange border-orange" : "border-surface-300"
                          }`}
                        >
                          {selected && <CheckCircle2 className="w-3 h-3 text-white" />}
                        </span>
                        {cat}
                      </button>
                    );
                  })}
                </div>
                {errors.serviceCategories && (
                  <p className="mt-2 text-xs text-error">{errors.serviceCategories}</p>
                )}
              </div>

              <div>
                <label className="block font-body text-sm font-medium text-charcoal mb-1.5">
                  Coverage Areas <span className="text-orange">*</span>{" "}
                  <span className="text-text-muted font-normal">(City / County / Region)</span>
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Dallas County, Tarrant County, Fort Worth, Arlington..."
                  value={formData.coverageAreas}
                  onChange={(e) => handleChange("coverageAreas", e.target.value)}
                  className={inputClass("coverageAreas")}
                />
                {errors.coverageAreas && (
                  <p className="mt-1 text-xs text-error">{errors.coverageAreas}</p>
                )}
              </div>

              <div>
                <label className="block font-body text-sm font-medium text-charcoal mb-1.5">
                  Service Radius <span className="text-orange">*</span>
                </label>
                <select
                  value={formData.serviceRadius}
                  onChange={(e) => handleChange("serviceRadius", e.target.value)}
                  className={inputClass("serviceRadius")}
                >
                  <option value="">Select radius...</option>
                  <option value="Up to 25 miles">Up to 25 miles</option>
                  <option value="Up to 50 miles">Up to 50 miles</option>
                  <option value="Up to 100 miles">Up to 100 miles</option>
                  <option value="Statewide">Statewide (Texas)</option>
                </select>
                {errors.serviceRadius && (
                  <p className="mt-1 text-xs text-error">{errors.serviceRadius}</p>
                )}
              </div>
            </div>
          )}

          {/* ── Step 3: Compliance & Documentation ──────────── */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <FileUploadField
                label="Certificate of Insurance"
                fieldName="insuranceCertificate"
                file={formData.insuranceCertificate}
                required
                onChange={handleChange}
              />
              {errors.insuranceCertificate && (
                <p className="-mt-4 text-xs text-error">{errors.insuranceCertificate}</p>
              )}

              <FileUploadField
                label="Business License"
                fieldName="license"
                file={formData.license}
                onChange={handleChange}
              />

              <FileUploadField
                label="W9 Form"
                fieldName="w9Form"
                file={formData.w9Form}
                onChange={handleChange}
              />

              <FileUploadField
                label="Background Check Authorization"
                fieldName="backgroundCheckAuth"
                file={formData.backgroundCheckAuth}
                onChange={handleChange}
              />

              {submitError && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="font-body text-sm text-error">{submitError}</p>
                </div>
              )}
            </div>
          )}

          {/* ── Navigation buttons ───────────────────────────── */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-surface-200">
            <div>
              {currentStep > 1 && (
                <Button
                  variant="secondary"
                  size="md"
                  onClick={handleBack}
                  disabled={isSubmitting}
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Back
                </Button>
              )}
            </div>

            <div>
              {currentStep < STEPS.length ? (
                <Button variant="primary" size="md" onClick={handleNext}>
                  Continue
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              ) : (
                <Button
                  variant="primary"
                  size="md"
                  onClick={handleSubmit}
                  loading={isSubmitting}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

---

## Chunk 9 — FAQ Section

**File:** `src/components/sections/VendorFAQ.tsx`

```typescript
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const faqs = [
  {
    question: "How quickly are vendors approved?",
    answer:
      "Approval timelines vary, but most qualified vendors receive a response within 5–10 business days.",
  },
  {
    question: "How are payments processed?",
    answer:
      "Payments are issued based on approved work orders and submitted documentation.",
  },
  {
    question: "Can I choose my coverage area?",
    answer: "Yes. Vendors select their preferred service areas during onboarding.",
  },
  {
    question: "Do you guarantee work volume?",
    answer:
      "Work volume depends on service demand and performance consistency.",
  },
];

export default function VendorFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Common questions from prospective vendor partners."
            align="center"
          />
        </AnimatedSection>

        <div className="mt-10 space-y-3">
          {faqs.map((faq, index) => (
            <AnimatedSection key={faq.question} variant="fadeUp" delay={index * 0.08}>
              <div className="border border-surface-200 rounded-xl overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-surface-50 transition-colors duration-200"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-display text-base font-semibold text-charcoal">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-orange flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-5">
                    <p className="font-body text-text-muted">{faq.answer}</p>
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## Chunk 10 — Final CTA Banner Section

**File:** `src/components/sections/VendorCTABanner.tsx`

Reuse the same dark CTA banner pattern used on the home page.

```typescript
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function VendorCTABanner() {
  return (
    <section className="relative py-20 lg:py-28 bg-charcoal overflow-hidden">
      {/* Accent overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #E8621A 0, #E8621A 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
        aria-hidden="true"
      />
      {/* Top orange rule */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-orange to-transparent opacity-40" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          Ready to Join the MEGAFIXX Vendor Network?
        </h2>
        <p className="font-body text-lg text-surface-300 mb-8">
          Partner with a structured, professional property maintenance operator.
        </p>
        <Button variant="primary" size="lg" asChild>
          <Link href="#vendor-application">Apply Now</Link>
        </Button>
      </div>
    </section>
  );
}
```

---

## Chunk 11 — API Route (Nodemailer with Attachments)

**File:** `src/app/api/vendor/route.ts`

This reuses the existing `mailer.ts` utility pattern. If `mailer.ts` exports a `sendEmail` function, import and call it; otherwise replicate the Nodemailer setup directly. The route uses `multipart/form-data` via the Next.js `request.formData()` API — **no extra body parser needed**.

```typescript
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// File size guard (10 MB per file)
const MAX_FILE_BYTES = 10 * 1024 * 1024;

// Label map for readable email display
const FILE_FIELD_LABELS: Record<string, string> = {
  insuranceCertificate: "Certificate of Insurance",
  license: "Business License",
  w9Form: "W9 Form",
  backgroundCheckAuth: "Background Check Authorization",
};

export async function POST(request: NextRequest) {
  try {
    const data = await request.formData();

    // ── Extract text fields ──────────────────────────────────
    const companyName = data.get("companyName") as string;
    const contactPerson = data.get("contactPerson") as string;
    const phone = data.get("phone") as string;
    const email = data.get("email") as string;
    const website = data.get("website") as string;
    const yearsInBusiness = data.get("yearsInBusiness") as string;
    const serviceCategories = data.get("serviceCategories") as string;
    const coverageAreas = data.get("coverageAreas") as string;
    const serviceRadius = data.get("serviceRadius") as string;

    // Basic server-side validation
    if (!companyName || !contactPerson || !email || !phone) {
      return NextResponse.json(
        { error: "Required fields are missing." },
        { status: 400 }
      );
    }

    // ── Extract file attachments ─────────────────────────────
    const attachments: nodemailer.SendMailOptions["attachments"] = [];
    const fileFields = ["insuranceCertificate", "license", "w9Form", "backgroundCheckAuth"];

    for (const field of fileFields) {
      const file = data.get(field) as File | null;
      if (file && file.size > 0) {
        if (file.size > MAX_FILE_BYTES) {
          return NextResponse.json(
            { error: `File "${file.name}" exceeds the 10 MB size limit.` },
            { status: 400 }
          );
        }
        const buffer = Buffer.from(await file.arrayBuffer());
        attachments.push({
          filename: `[${FILE_FIELD_LABELS[field] ?? field}] ${file.name}`,
          content: buffer,
          contentType: file.type,
        });
      }
    }

    // ── Build email HTML ─────────────────────────────────────
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; color: #1C1C1E;">
        <div style="background: #1C1C1E; padding: 24px 32px; border-radius: 8px 8px 0 0;">
          <h1 style="color: #ffffff; margin: 0; font-size: 22px;">New Vendor Application</h1>
          <p style="color: #E8621A; margin: 6px 0 0; font-size: 14px;">MEGAFIXX Property Maintenance Network</p>
        </div>
        <div style="background: #f9f9f9; padding: 32px; border: 1px solid #e4e4e7; border-top: none; border-radius: 0 0 8px 8px;">

          <h2 style="font-size: 16px; color: #E8621A; margin: 0 0 12px;">Company Information</h2>
          <table style="width:100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr><td style="padding: 6px 0; color: #71717a; width: 180px;">Company Name</td><td style="padding: 6px 0; font-weight: 600;">${companyName}</td></tr>
            <tr><td style="padding: 6px 0; color: #71717a;">Contact Person</td><td style="padding: 6px 0; font-weight: 600;">${contactPerson}</td></tr>
            <tr><td style="padding: 6px 0; color: #71717a;">Phone</td><td style="padding: 6px 0;">${phone}</td></tr>
            <tr><td style="padding: 6px 0; color: #71717a;">Email</td><td style="padding: 6px 0;"><a href="mailto:${email}" style="color: #E8621A;">${email}</a></td></tr>
            <tr><td style="padding: 6px 0; color: #71717a;">Website</td><td style="padding: 6px 0;">${website || "—"}</td></tr>
            <tr><td style="padding: 6px 0; color: #71717a;">Years in Business</td><td style="padding: 6px 0;">${yearsInBusiness}</td></tr>
          </table>

          <h2 style="font-size: 16px; color: #E8621A; margin: 0 0 12px;">Services & Coverage</h2>
          <table style="width:100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr><td style="padding: 6px 0; color: #71717a; width: 180px;">Service Categories</td><td style="padding: 6px 0;">${serviceCategories}</td></tr>
            <tr><td style="padding: 6px 0; color: #71717a;">Coverage Areas</td><td style="padding: 6px 0;">${coverageAreas}</td></tr>
            <tr><td style="padding: 6px 0; color: #71717a;">Service Radius</td><td style="padding: 6px 0;">${serviceRadius}</td></tr>
          </table>

          <h2 style="font-size: 16px; color: #E8621A; margin: 0 0 12px;">Attachments</h2>
          <p style="color: #71717a; font-size: 14px;">${
            attachments.length > 0
              ? `${attachments.length} file(s) attached: ${attachments.map((a) => a.filename).join(", ")}`
              : "No files uploaded."
          }</p>

        </div>
        <p style="text-align: center; color: #a1a1aa; font-size: 12px; margin-top: 16px;">
          MEGAFIXX Home Services LLC &nbsp;•&nbsp; Vendor Network Application
        </p>
      </div>
    `;

    // ── Configure transporter (reuse .env vars from existing contact form) ──
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"MEGAFIXX Vendor Portal" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL ?? process.env.SMTP_USER,
      replyTo: email,
      subject: `New Vendor Application — ${companyName}`,
      html,
      attachments,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("[/api/vendor] Error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}

// Required for Next.js App Router to handle multipart/form-data
export const dynamic = "force-dynamic";
```

**Environment variables used (already in your `.env.local` for the contact form):**
```
SMTP_HOST=
SMTP_PORT=
SMTP_SECURE=
SMTP_USER=
SMTP_PASS=
CONTACT_EMAIL=
```
No new env vars needed.

---

## Chunk 12 — Navigation & Footer Updates

### 12a — Navbar

**File:** `src/components/layout/Navbar.tsx`

Locate the `navLinks` array and add the Vendors entry **after "Our Clients"** and **before "About"**:

```typescript
// Find the navLinks array (similar to):
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/clients", label: "Our Clients" },
  // ↓ ADD THIS
  { href: "/vendors", label: "Vendors" },
  // ↑ ADD THIS
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
```

### 12b — Footer

**File:** `src/components/layout/Footer.tsx`

Locate the Quick Links list and add `/vendors`:

```typescript
// Find the Quick Links section (list of { href, label }) and add:
{ href: "/vendors", label: "Vendors" }
// Place it after "Our Clients" for consistency with the nav order
```

---

## Chunk 13 — Sitemap Update

**File:** `src/app/sitemap.ts`

Add the `/vendors` route to the sitemap entries array:

```typescript
// In the routes/entries array, add:
{
  url: `${SITE_URL}/vendors`,
  lastModified: new Date(),
  changeFrequency: "monthly" as const,
  priority: 0.8,
},
```

---

## Chunk 14 — Checklist Before Done

After all files are created and modifications are saved, verify:

- [ ] `src/types/vendor.ts` — types file exists
- [ ] `src/app/vendors/page.tsx` — page exports metadata and renders all sections
- [ ] `src/components/sections/VendorHero.tsx` — hero uses `bg-hero-bg` pattern
- [ ] `src/components/sections/VendorWhyPartner.tsx` — subtext strip + 4 benefit cards
- [ ] `src/components/sections/VendorOnboarding.tsx` — 3-step numbered process
- [ ] `src/components/sections/VendorRequirements.tsx` — required + preferred two columns
- [ ] `src/components/sections/VendorServices.tsx` — 6-category icon grid
- [ ] `src/components/forms/VendorApplicationForm.tsx` — 3-step form with file uploads
- [ ] `src/components/sections/VendorFAQ.tsx` — accordion with 4 FAQs
- [ ] `src/components/sections/VendorCTABanner.tsx` — dark CTA banner
- [ ] `src/app/api/vendor/route.ts` — POST handler with Nodemailer + file attachments
- [ ] `Navbar.tsx` — "Vendors" link added after "Our Clients"
- [ ] `Footer.tsx` — "Vendors" in Quick Links
- [ ] `sitemap.ts` — `/vendors` route added
- [ ] Run `npm run build` — no TypeScript errors
- [ ] Test form: fill all 3 steps → submit → verify email with attachments arrives

---

*End of VENDOR_PAGE_IMPLEMENTATION.md — MEGAFIXX Home Services LLC*
