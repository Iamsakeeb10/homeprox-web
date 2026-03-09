"use client";

import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import {
  ClientOnboardingFormData,
  ClientOnboardingFormErrors,
  ContactFormData,
} from "@/types";
import { validateEmail, validatePhone } from "@/lib/utils/formValidation";
import { CheckCircle2, Loader2 } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const COMPANY_TYPE_OPTIONS = [
  { value: "", label: "Select company type...", disabled: true },
  { value: "property-management", label: "Property Management Company" },
  { value: "real-estate-investor", label: "Real Estate Investor" },
  { value: "asset-management", label: "Asset Management Company" },
  { value: "hoa", label: "HOA / Community Association" },
  { value: "real-estate-brokerage", label: "Real Estate Brokerage" },
  { value: "government-municipal", label: "Government / Municipal" },
  { value: "other", label: "Other" },
];

const SERVICE_OPTIONS = [
  { value: "property-maintenance", label: "Property Maintenance" },
  { value: "rental-turnovers", label: "Rental Turnovers" },
  { value: "landscaping", label: "Landscaping" },
  { value: "minor-plumbing", label: "Minor Plumbing" },
  { value: "minor-electrical", label: "Minor Electrical" },
  { value: "trash-outs-cleanouts", label: "Trash Outs / Cleanouts" },
  { value: "property-preservation", label: "Property Preservation" },
  { value: "general-repairs", label: "General Repairs" },
];

const PORTFOLIO_SIZE_OPTIONS = [
  { value: "1-10", label: "1–10" },
  { value: "10-50", label: "10–50" },
  { value: "50-200", label: "50–200" },
  { value: "200+", label: "200+" },
];

const INITIAL_DATA: ClientOnboardingFormData = {
  companyName: "",
  contactPerson: "",
  email: "",
  phone: "",
  companyType: "",
  companyWebsite: "",
  services: [],
  portfolioSize: "",
  propertyLocations: "",
  additionalNotes: "",
  agreeToTerms: false,
};

function getCompanyTypeLabel(value: string): string {
  return COMPANY_TYPE_OPTIONS.find((opt) => opt.value === value)?.label ?? "";
}

function getPortfolioSizeLabel(value: string): string {
  return PORTFOLIO_SIZE_OPTIONS.find((opt) => opt.value === value)?.label ?? value;
}

function mapToContactPayload(data: ClientOnboardingFormData): ContactFormData {
  const companyTypeLabel = getCompanyTypeLabel(data.companyType);
  const selectedServiceLabels = SERVICE_OPTIONS.filter((opt) =>
    data.services.includes(opt.value),
  ).map((opt) => opt.label);
  const portfolioSizeLabel = getPortfolioSizeLabel(data.portfolioSize);

  const notes = data.additionalNotes.trim();
  const messageLines: string[] = [];
  if (notes) {
    messageLines.push(notes);
  }
  messageLines.push(`Portfolio Size: ${portfolioSizeLabel || "Not specified"}`);

  return {
    fullName: data.contactPerson.trim(),
    companyName: data.companyName.trim(),
    email: data.email.trim(),
    phone: data.phone.trim(),
    propertyType: companyTypeLabel,
    serviceNeeded: selectedServiceLabels.join(", "),
    location: data.propertyLocations.trim(),
    message: messageLines.join("\n\n"),
    agreeToTerms: data.agreeToTerms,
    formSource: "client-onboarding",
  };
}

function validateClientOnboarding(
  form: ClientOnboardingFormData,
): ClientOnboardingFormErrors {
  const errors: ClientOnboardingFormErrors = {};

  if (!form.companyName.trim()) {
    errors.companyName = "Company name is required";
  }
  if (!form.contactPerson.trim()) {
    errors.contactPerson = "Contact person is required";
  }

  const emailResult = validateEmail(form.email);
  if (!emailResult.valid) {
    errors.email = emailResult.message;
  }

  const phoneResult = validatePhone(form.phone);
  if (!phoneResult.valid) {
    errors.phone = phoneResult.message;
  }

  if (!form.companyType) {
    errors.companyType = "Company type is required";
  }

  if (!form.services || form.services.length === 0) {
    errors.services = "Select at least one service";
  }

  if (!form.portfolioSize) {
    errors.portfolioSize = "Portfolio size is required";
  }

  if (!form.propertyLocations.trim()) {
    errors.propertyLocations = "Property locations are required";
  }

  if (!form.agreeToTerms) {
    errors.agreeToTerms =
      "You must agree to the Terms & Conditions to submit.";
  }

  return errors;
}

interface ClientOnboardingFormProps {
  onSuccess?: () => void;
}

export default function ClientOnboardingForm({
  onSuccess,
}: ClientOnboardingFormProps) {
  const [form, setForm] = useState<ClientOnboardingFormData>(INITIAL_DATA);
  const [errors, setErrors] = useState<ClientOnboardingFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const updateAndMaybeValidate = (next: ClientOnboardingFormData) => {
    setForm(next);
    setSubmitError(null);
    if (hasSubmitted) {
      setErrors(validateClientOnboarding(next));
    }
  };

  const handleFieldChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;

    const next: ClientOnboardingFormData = {
      ...form,
      [name]: type === "checkbox" ? checked : value,
    } as ClientOnboardingFormData;

    updateAndMaybeValidate(next);

    if (!hasSubmitted && errors[name as keyof ClientOnboardingFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const toggleService = (value: string) => {
    const nextServices = form.services.includes(value)
      ? form.services.filter((s) => s !== value)
      : [...form.services, value];

    const next: ClientOnboardingFormData = {
      ...form,
      services: nextServices,
    };

    updateAndMaybeValidate(next);

    if (!hasSubmitted && errors.services) {
      setErrors((prev) => ({ ...prev, services: undefined }));
    }
  };

  const handlePortfolioSelect = (value: string) => {
    const next: ClientOnboardingFormData = {
      ...form,
      portfolioSize: value,
    };

    updateAndMaybeValidate(next);

    if (!hasSubmitted && errors.portfolioSize) {
      setErrors((prev) => ({ ...prev, portfolioSize: undefined }));
    }
  };

  const handleTermsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const next: ClientOnboardingFormData = {
      ...form,
      agreeToTerms: e.target.checked,
    };

    updateAndMaybeValidate(next);

    if (!hasSubmitted && errors.agreeToTerms) {
      setErrors((prev) => ({ ...prev, agreeToTerms: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setHasSubmitted(true);
    setSubmitError(null);

    const validationErrors = validateClientOnboarding(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const payload: ContactFormData = mapToContactPayload(form);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setIsSuccess(true);
        setErrors({});
        if (onSuccess) {
          onSuccess();
        }
      } else {
        setSubmitError(
          data?.error ??
            "Something went wrong. Please try again or contact us directly at info@megafixxhomeservices.com",
        );
      }
    } catch {
      setSubmitError(
        "Something went wrong. Please try again or contact us directly at info@megafixxhomeservices.com",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <AnimatedSection variant="scaleIn">
        <div className="bg-orange-muted rounded-xl p-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/80 mb-4">
            <CheckCircle2 className="w-10 h-10 text-orange" aria-hidden="true" />
          </div>
          <h3 className="font-display text-2xl font-bold text-charcoal mb-3">
            Application Received!
          </h3>
          <p className="font-body text-text-muted text-base max-w-xl mx-auto">
            Thank you for your interest in partnering with MEGAFIXX. Our team will
            review your request and contact you within 1 business day.
          </p>
        </div>
      </AnimatedSection>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8" noValidate>
      {Object.keys(errors).length > 0 && (
        <div className="sr-only" role="alert" aria-live="polite">
          Please correct the errors in the form.
        </div>
      )}

      {/* Section 1 — Company Information */}
      <AnimatedSection variant="fadeUp">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="companyName"
              className="block font-body text-sm font-medium text-charcoal mb-1"
            >
              Company Name <span className="text-orange">*</span>
            </label>
            <input
              id="companyName"
              name="companyName"
              type="text"
              value={form.companyName}
              onChange={handleFieldChange}
              className={`w-full px-4 py-3 bg-white border ${
                errors.companyName ? "border-error" : "border-surface-200"
              } rounded-lg text-charcoal placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-orange/40 focus:border-orange transition-colors duration-200`}
              placeholder="ABC Property Management"
              aria-invalid={!!errors.companyName}
              aria-describedby={errors.companyName ? "companyName-error" : undefined}
            />
            {errors.companyName && (
              <p id="companyName-error" className="mt-1 text-xs text-error" role="alert">
                {errors.companyName}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="contactPerson"
              className="block font-body text-sm font-medium text-charcoal mb-1"
            >
              Contact Person <span className="text-orange">*</span>
            </label>
            <input
              id="contactPerson"
              name="contactPerson"
              type="text"
              value={form.contactPerson}
              onChange={handleFieldChange}
              className={`w-full px-4 py-3 bg-white border ${
                errors.contactPerson ? "border-error" : "border-surface-200"
              } rounded-lg text-charcoal placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-orange/40 focus:border-orange transition-colors duration-200`}
              placeholder="Jane Doe"
              aria-invalid={!!errors.contactPerson}
              aria-describedby={errors.contactPerson ? "contactPerson-error" : undefined}
            />
            {errors.contactPerson && (
              <p
                id="contactPerson-error"
                className="mt-1 text-xs text-error"
                role="alert"
              >
                {errors.contactPerson}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block font-body text-sm font-medium text-charcoal mb-1"
            >
              Email Address <span className="text-orange">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleFieldChange}
              className={`w-full px-4 py-3 bg-white border ${
                errors.email ? "border-error" : "border-surface-200"
              } rounded-lg text-charcoal placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-orange/40 focus:border-orange transition-colors duration-200`}
              placeholder="you@example.com"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-xs text-error" role="alert">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block font-body text-sm font-medium text-charcoal mb-1"
            >
              Phone Number <span className="text-orange">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleFieldChange}
              className={`w-full px-4 py-3 bg-white border ${
                errors.phone ? "border-error" : "border-surface-200"
              } rounded-lg text-charcoal placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-orange/40 focus:border-orange transition-colors duration-200`}
              placeholder="(469) 555-1234"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
            />
            {errors.phone && (
              <p id="phone-error" className="mt-1 text-xs text-error" role="alert">
                {errors.phone}
              </p>
            )}
          </div>
        </div>
      </AnimatedSection>

      {/* Section 2 — Business Details */}
      <AnimatedSection variant="fadeUp" delay={0.05}>
        <div className="space-y-6">
          <div>
            <label
              htmlFor="companyType"
              className="block font-body text-sm font-medium text-charcoal mb-1"
            >
              Company Type <span className="text-orange">*</span>
            </label>
            <div className="relative">
              <select
                id="companyType"
                name="companyType"
                value={form.companyType}
                onChange={handleFieldChange}
                className={`w-full px-4 py-3 pr-10 bg-white border ${
                  errors.companyType ? "border-error" : "border-surface-200"
                } rounded-lg text-charcoal focus:outline-none focus:ring-2 focus:ring-orange/40 focus:border-orange transition-colors duration-200 appearance-none cursor-pointer`}
                aria-invalid={!!errors.companyType}
                aria-describedby={errors.companyType ? "companyType-error" : undefined}
              >
                {COMPANY_TYPE_OPTIONS.map((opt) => (
                  <option
                    key={opt.value || "placeholder"}
                    value={opt.value}
                    disabled={opt.disabled}
                    className="bg-white"
                  >
                    {opt.label}
                  </option>
                ))}
              </select>
              <span
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-text-muted"
                aria-hidden="true"
              >
                ▾
              </span>
            </div>
            {errors.companyType && (
              <p id="companyType-error" className="mt-1 text-xs text-error" role="alert">
                {errors.companyType}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="companyWebsite"
              className="block font-body text-sm font-medium text-charcoal mb-1"
            >
              Company Website{" "}
              <span className="text-text-muted font-normal">(Optional)</span>
            </label>
            <input
              id="companyWebsite"
              name="companyWebsite"
              type="url"
              value={form.companyWebsite}
              onChange={handleFieldChange}
              className="w-full px-4 py-3 bg-white border border-surface-200 rounded-lg text-charcoal placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-orange/40 focus:border-orange transition-colors duration-200"
              placeholder="https://yourwebsite.com"
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Section 3 — Service Needs */}
      <AnimatedSection variant="fadeUp" delay={0.1}>
        <div className="space-y-3">
          <div>
            <p className="font-body text-sm font-medium text-charcoal">
              What services are you interested in?{" "}
              <span className="text-orange">*</span>
            </p>
            <p className="font-body text-xs text-text-muted mt-1">
              Select all that apply
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {SERVICE_OPTIONS.map((service) => {
              const checked = form.services.includes(service.value);
              return (
                <label
                  key={service.value}
                  className="flex items-center gap-3 cursor-pointer select-none"
                >
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-surface-200 text-orange focus:ring-orange/40"
                    checked={checked}
                    onChange={() => toggleService(service.value)}
                  />
                  <span className="font-body text-sm text-charcoal">
                    {service.label}
                  </span>
                </label>
              );
            })}
          </div>
          {errors.services && (
            <p className="mt-1 text-xs text-error" role="alert">
              {errors.services}
            </p>
          )}
        </div>
      </AnimatedSection>

      {/* Section 4 — Portfolio Information */}
      <AnimatedSection variant="fadeUp" delay={0.15}>
        <div className="space-y-6">
          <div>
            <p className="font-body text-sm font-medium text-charcoal mb-2">
              How many properties do you manage?{" "}
              <span className="text-orange">*</span>
            </p>
            <div className="flex flex-wrap gap-3">
              {PORTFOLIO_SIZE_OPTIONS.map((option) => {
                const selected = form.portfolioSize === option.value;
                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handlePortfolioSelect(option.value)}
                    className={`px-4 py-2 text-sm font-body rounded-full border ${
                      selected
                        ? "border-orange bg-orange-muted text-orange font-medium"
                        : "border-surface-200 bg-white text-charcoal hover:border-orange/50 hover:text-orange"
                    } transition-colors duration-200`}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
            {errors.portfolioSize && (
              <p className="mt-1 text-xs text-error" role="alert">
                {errors.portfolioSize}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="propertyLocations"
              className="block font-body text-sm font-medium text-charcoal mb-1"
            >
              Primary Property Locations <span className="text-orange">*</span>
            </label>
            <input
              id="propertyLocations"
              name="propertyLocations"
              type="text"
              value={form.propertyLocations}
              onChange={handleFieldChange}
              className={`w-full px-4 py-3 bg-white border ${
                errors.propertyLocations ? "border-error" : "border-surface-200"
              } rounded-lg text-charcoal placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-orange/40 focus:border-orange transition-colors duration-200`}
              placeholder="e.g. Dallas, Houston, Austin, San Antonio"
              aria-invalid={!!errors.propertyLocations}
              aria-describedby={
                errors.propertyLocations ? "propertyLocations-error" : undefined
              }
            />
            <p className="font-body text-xs text-text-muted mt-1">
              List major cities or regions where your properties are located
            </p>
            {errors.propertyLocations && (
              <p
                id="propertyLocations-error"
                className="mt-1 text-xs text-error"
                role="alert"
              >
                {errors.propertyLocations}
              </p>
            )}
          </div>
        </div>
      </AnimatedSection>

      {/* Section 5 — Additional Notes */}
      <AnimatedSection variant="fadeUp" delay={0.2}>
        <div>
          <label
            htmlFor="additionalNotes"
            className="block font-body text-sm font-medium text-charcoal mb-1"
          >
            Tell us about your portfolio or maintenance needs{" "}
            <span className="text-text-muted font-normal">(Optional)</span>
          </label>
          <textarea
            id="additionalNotes"
            name="additionalNotes"
            rows={5}
            value={form.additionalNotes}
            onChange={handleFieldChange}
            className="w-full px-4 py-3 bg-white border border-surface-200 rounded-lg text-charcoal placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-orange/40 focus:border-orange transition-colors duration-200 resize-y"
            placeholder="Describe your property portfolio, specific maintenance challenges, service frequency expectations, or anything else that would help us understand your needs better..."
          />
        </div>
      </AnimatedSection>

      {/* Terms Checkbox + Submit */}
      <AnimatedSection variant="fadeUp" delay={0.25}>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <input
              id="client-agreeToTerms"
              type="checkbox"
              checked={form.agreeToTerms}
              onChange={handleTermsChange}
              className="mt-1 h-4 w-4 rounded border-surface-300 text-orange focus:ring-orange focus:ring-offset-0 cursor-pointer"
              aria-invalid={!!errors.agreeToTerms}
              aria-describedby={
                errors.agreeToTerms ? "client-agreeToTerms-error" : undefined
              }
            />
            <label
              htmlFor="client-agreeToTerms"
              className="font-body text-sm text-charcoal cursor-pointer"
            >
              I agree to the{" "}
              <Link
                href="/terms"
                className="text-orange hover:text-orange-dark underline underline-offset-2"
              >
                Terms &amp; Conditions
              </Link>{" "}
              and consent to being contacted by MEGAFIXX regarding my application.
            </label>
          </div>
          {errors.agreeToTerms && (
            <p
              id="client-agreeToTerms-error"
              className="mt-1 text-xs text-error"
              role="alert"
            >
              {errors.agreeToTerms}
            </p>
          )}

          {submitError && (
            <div className="bg-red-50 border border-error text-error rounded-lg px-4 py-3 text-sm font-body">
              {submitError}
            </div>
          )}

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" aria-hidden="true" />
                Submitting...
              </>
            ) : (
              "Submit Client Application"
            )}
          </Button>
        </div>
      </AnimatedSection>
    </form>
  );
}

