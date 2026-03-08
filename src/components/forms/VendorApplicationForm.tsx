"use client";

import { useState, useRef } from "react";
import { Upload, X, CheckCircle2, ChevronRight, ChevronLeft, ChevronDown } from "lucide-react";
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
  { id: 4, title: "Review & Submit", description: "Confirm your details before submitting" },
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

function ReviewRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 py-3 border-b border-surface-100 last:border-0">
      <span className="font-body text-xs uppercase tracking-wider text-text-muted sm:w-44 flex-shrink-0 pt-0.5">
        {label}
      </span>
      <span className="font-body text-sm text-charcoal font-medium break-words">
        {value || <span className="text-text-muted italic font-normal">Not provided</span>}
      </span>
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

      <div className="mt-10 max-w-3xl mx-auto" suppressHydrationWarning>
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
                    suppressHydrationWarning
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
                  <div className="relative">
                    <select
                      value={formData.yearsInBusiness}
                      onChange={(e) => handleChange("yearsInBusiness", e.target.value)}
                      className={`${inputClass("yearsInBusiness")} appearance-none pr-12`}
                    >
                      <option value="">Select...</option>
                      <option value="Less than 1 year">Less than 1 year</option>
                      <option value="1–2 years">1–2 years</option>
                      <option value="3–5 years">3–5 years</option>
                      <option value="6–10 years">6–10 years</option>
                      <option value="10+ years">10+ years</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted pointer-events-none" aria-hidden />
                  </div>
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
                <div className="relative">
                  <select
                    value={formData.serviceRadius}
                    onChange={(e) => handleChange("serviceRadius", e.target.value)}
                    className={`${inputClass("serviceRadius")} appearance-none pr-12`}
                  >
                    <option value="">Select radius...</option>
                    <option value="Up to 25 miles">Up to 25 miles</option>
                    <option value="Up to 50 miles">Up to 50 miles</option>
                    <option value="Up to 100 miles">Up to 100 miles</option>
                    <option value="Statewide">Statewide (Texas)</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted pointer-events-none" aria-hidden />
                </div>
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
            </div>
          )}

          {/* ── Step 4: Review & Submit ──────────────────────── */}
          {currentStep === 4 && (
            <div className="space-y-6">

              {/* Company Information */}
              <div>
                <h4 className="font-display text-base font-bold text-charcoal mb-1 flex items-center gap-2">
                  <span className="w-1.5 h-5 rounded-full bg-orange inline-block" />
                  Company Information
                </h4>
                <div className="bg-surface-50 rounded-xl border border-surface-200 px-5 py-1 mt-3">
                  <ReviewRow label="Company Name" value={formData.companyName} />
                  <ReviewRow label="Contact Person" value={formData.contactPerson} />
                  <ReviewRow label="Phone" value={formData.phone} />
                  <ReviewRow label="Email" value={formData.email} />
                  <ReviewRow label="Website" value={formData.website} />
                  <ReviewRow label="Years in Business" value={formData.yearsInBusiness} />
                </div>
                <button
                  type="button"
                  onClick={() => { setErrors({}); setCurrentStep(1); }}
                  className="mt-2 font-accent text-xs text-orange hover:text-orange-dark hover:underline transition-colors"
                >
                  Edit
                </button>
              </div>

              {/* Services Offered */}
              <div>
                <h4 className="font-display text-base font-bold text-charcoal mb-1 flex items-center gap-2">
                  <span className="w-1.5 h-5 rounded-full bg-orange inline-block" />
                  Services Offered
                </h4>
                <div className="bg-surface-50 rounded-xl border border-surface-200 px-5 py-1 mt-3">
                  <ReviewRow
                    label="Service Categories"
                    value={
                      formData.serviceCategories.length > 0
                        ? formData.serviceCategories.join(", ")
                        : ""
                    }
                  />
                  <ReviewRow label="Coverage Areas" value={formData.coverageAreas} />
                  <ReviewRow label="Service Radius" value={formData.serviceRadius} />
                </div>
                <button
                  type="button"
                  onClick={() => { setErrors({}); setCurrentStep(2); }}
                  className="mt-2 font-accent text-xs text-orange hover:text-orange-dark hover:underline transition-colors"
                >
                  Edit
                </button>
              </div>

              {/* Compliance & Documents */}
              <div>
                <h4 className="font-display text-base font-bold text-charcoal mb-1 flex items-center gap-2">
                  <span className="w-1.5 h-5 rounded-full bg-orange inline-block" />
                  Compliance & Documents
                </h4>
                <div className="bg-surface-50 rounded-xl border border-surface-200 px-5 py-1 mt-3">
                  <ReviewRow
                    label="Certificate of Insurance"
                    value={formData.insuranceCertificate?.name ?? ""}
                  />
                  <ReviewRow
                    label="Business License"
                    value={formData.license?.name ?? ""}
                  />
                  <ReviewRow
                    label="W9 Form"
                    value={formData.w9Form?.name ?? ""}
                  />
                  <ReviewRow
                    label="Background Check Auth"
                    value={formData.backgroundCheckAuth?.name ?? ""}
                  />
                </div>
                <button
                  type="button"
                  onClick={() => { setErrors({}); setCurrentStep(3); }}
                  className="mt-2 font-accent text-xs text-orange hover:text-orange-dark hover:underline transition-colors"
                >
                  Edit
                </button>
              </div>

              {/* Confirmation notice */}
              <div className="flex items-start gap-3 p-4 bg-orange-muted border border-orange/20 rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-orange mt-0.5 flex-shrink-0" />
                <p className="font-body text-sm text-charcoal">
                  By submitting this application you confirm that all information provided
                  is accurate and that you meet MEGAFIXX&apos;s vendor requirements.
                </p>
              </div>

              {/* Submit error */}
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
                  {currentStep === 3 ? "Review Application" : "Continue"}
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
