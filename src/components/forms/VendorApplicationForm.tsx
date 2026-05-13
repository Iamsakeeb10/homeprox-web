"use client";

import {
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  FileText,
  Pencil,
  ShieldCheck,
  Upload,
  X,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type {
  DocumentMeta,
  VendorFormData,
  VendorFormErrors,
  VendorSuccessPayload,
} from "@/types/vendor";

// ─────────────────────────────────────────────────────────────────────────────
// DOCUMENT FIELDS — updated per client brief
// ─────────────────────────────────────────────────────────────────────────────

const REQUIRED_DOCUMENT_FIELDS = [
  {
    id: "w9",
    label: "Completed W-9 Form",
    description: "Please upload a current W-9 form.",
  },
] as const;

const OPTIONAL_DOCUMENT_GROUPS = [
  {
    groupTitle: "Business & Insurance",
    docs: [
      {
        id: "coi",
        label: "Certificate of Insurance (COI)",
        description: "Proof of general liability insurance.",
      },
      {
        id: "business_license",
        label: "Business License",
        description: "Your current business license (if applicable).",
      },
      {
        id: "workers_comp",
        label: "Workers' Compensation Insurance",
        description:
          "Proof of workers' compensation insurance (if applicable).",
      },
      {
        id: "voided_check",
        label: "Voided Check (Bank)",
        description: "Voided check or bank letter for payment setup.",
      },
    ],
  },
  {
    groupTitle: "Identity & Licensing",
    docs: [
      {
        id: "drivers_license",
        label: "Driver's License / Government ID",
        description: "Only required if specifically requested.",
      },
      {
        id: "trade_license",
        label: "Trade License / Certification",
        description: "Professional license or certification (if applicable).",
      },
    ],
  },
  {
    groupTitle: "Agreements & Authorization",
    docs: [
      {
        id: "direct_deposit",
        label: "Direct Deposit Authorization",
        description: "Authorization form for direct payments.",
      },
      {
        id: "background_check",
        label: "Background Check Authorization",
        description: "Authorization for background check (if requested).",
      },
      {
        id: "other",
        label: "Other Supporting Documents",
        description:
          "Upload any other documents that support your application.",
      },
    ],
  },
] as const;

// Flat list of ALL document IDs — used to key the documentUploads map
type RequiredDocId = (typeof REQUIRED_DOCUMENT_FIELDS)[number]["id"];
type OptionalDocId =
  (typeof OPTIONAL_DOCUMENT_GROUPS)[number]["docs"][number]["id"];
export type DocumentId = RequiredDocId | OptionalDocId;

const ALL_DOCUMENT_IDS: DocumentId[] = [
  ...REQUIRED_DOCUMENT_FIELDS.map((d) => d.id),
  ...OPTIONAL_DOCUMENT_GROUPS.reduce<DocumentId[]>(
    (acc, g) => [...acc, ...g.docs.map((d) => d.id)],
    [],
  ),
];

// ─────────────────────────────────────────────────────────────────────────────
// REST OF CONSTANTS
// ─────────────────────────────────────────────────────────────────────────────

const SERVICE_GROUPS = [
  {
    title: "General Maintenance",
    services: [
      "General Property Maintenance",
      "Handyman Services",
      "Preventive Maintenance",
      "Emergency Maintenance",
      "Occupied Property Services",
      "Vacant Property Services",
    ],
  },
  {
    title: "Turnovers / Make-Ready",
    services: [
      "Rental Turnovers / Unit Turns",
      "Make-Ready Services",
      "Move-in / Move-Out Repairs",
      "Punch List Completion",
      "Tenant Damage Repairs",
    ],
  },
  {
    title: "Property Preservation",
    services: [
      "Property Preservation",
      "REO Services",
      "Foreclosure Cleanouts",
      "Winterization / De-Winterization",
      "Lock Changes & Securing",
      "Board-Ups",
      "Vacancy Checks",
      "Eviction Support / Lockouts",
    ],
  },
  {
    title: "Trash Outs & Cleanouts",
    services: [
      "Trash Outs & Cleanouts",
      "Junk Removal / Hauling",
      "Deep Cleaning / Janitorial",
      "Carpet Cleaning",
      "Pressure Washing",
    ],
  },
  {
    title: "Landscaping & Exterior",
    services: [
      "Landscaping & Lawn Care",
      "Tree Trimming",
      "Fence & Gate Repair",
      "Exterior Repairs",
      "Gutter Cleaning",
      "Seasonal Maintenance",
    ],
  },
  {
    title: "Trades",
    services: [
      "Painting (Interior & Exterior)",
      "Flooring Installation & Repair",
      "Carpentry",
      "Doors & Windows",
      "Fencing",
      "Plumbing",
      "Electrical",
      "HVAC / HVACR",
      "Appliance Repair",
      "Roofing",
      "Drywall & Sheetrock",
    ],
  },
  {
    title: "Inspections & Documentation",
    services: [
      "Property Inspections",
      "Move-in / Move-Out Inspections",
      "Photo Documentation",
      "Insurance Claim Inspections",
      "Estimate Services",
    ],
  },
  {
    title: "Other Services",
    services: [
      "Mold / Water Damage Mitigation",
      "Smoke Detector Compliance",
      "Pool & Spa Maintenance",
      "Pest Control Coordination",
      "Other (Please Specify)",
    ],
  },
] as const;

const OTHER_SERVICE_OPTION = "Other (Please Specify)";

const STEPS = [
  {
    id: 1,
    title: "Company Information",
    description: "Tell us about your business",
  },
  {
    id: 2,
    title: "Services Offered",
    description: "Select all services your business is qualified to perform",
  },
  {
    id: 3,
    title: "Coverage Area",
    description: "Where are you available to provide services?",
  },
  {
    id: 4,
    title: "Operational Capabilities",
    description: "Tell us more about your business operations",
  },
  {
    id: 5,
    title: "Document Upload / Checklist",
    description: "Upload supporting documents",
  },
  {
    id: 6,
    title: "Review & Submit",
    description: "Confirm your details before submitting",
  },
];

const INITIAL_DATA: VendorFormData = {
  companyName: "",
  contactPerson: "",
  phone: "",
  email: "",
  website: "",
  yearsInBusiness: "",
  serviceCategories: [],
  serviceOtherDetails: "",
  serviceCities: "",
  serviceCounties: "",
  zipCodes: "",
  serviceRadius: "",
  travelOutsideArea: "",
  epaCertified: "",
  backgroundCheck: "",
  sameDayService: "",
  turnaround2448: "",
  additionalNotes: "",
  documentUploads: Object.fromEntries(ALL_DOCUMENT_IDS.map((id) => [id, null])),
  agreeToTerms: false,
};

const VENDOR_SUCCESS_STORAGE_KEY = "vendorApplicationSuccessPayload";
const VENDOR_FORM_DRAFT_STORAGE_KEY = "vendorApplicationDraft";
const MIN_STEP = 1;
const MAX_STEP = STEPS.length;

type VendorDraftData = Omit<VendorFormData, "documentUploads"> & {
  documentUploads: Record<string, DocumentMeta | null>;
};

function serializeDraftFormData(formData: VendorFormData): VendorDraftData {
  return {
    ...formData,
    documentUploads: Object.fromEntries(
      Object.entries(formData.documentUploads).map(([id, val]) => {
        if (!val) return [id, null];
        // If it's a File, persist only metadata; if it's already metadata, keep it
        if ((val as File).name && typeof (val as File).size === "number") {
          const f = val as File;
          return [
            id,
            { name: f.name, size: f.size, type: f.type } as DocumentMeta,
          ];
        }
        return [id, val as DocumentMeta];
      }),
    ),
  };
}

function persistVendorDraft(currentStep: number, formData: VendorFormData) {
  if (typeof window === "undefined") return;
  localStorage.setItem(
    VENDOR_FORM_DRAFT_STORAGE_KEY,
    JSON.stringify({ currentStep, formData: serializeDraftFormData(formData) }),
  );
}

function validateStep(
  step: number,
  data: VendorFormData,
  fileRefs?: Record<string, File | null>,
): VendorFormErrors {
  const errors: VendorFormErrors = {};

  if (step === 1) {
    if (!data.companyName.trim())
      errors.companyName = "Company name is required.";
    if (!data.contactPerson.trim())
      errors.contactPerson = "Contact person is required.";
    if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      errors.email = "A valid email address is required.";
    if (!data.phone.trim() || data.phone.replace(/\D/g, "").length < 10)
      errors.phone = "A valid phone number (at least 10 digits) is required.";
    if (!data.yearsInBusiness.trim())
      errors.yearsInBusiness = "Years in business is required.";
  }

  if (step === 2) {
    if (data.serviceCategories.length === 0)
      errors.serviceCategories = "Select at least one service.";
    if (
      data.serviceCategories.includes(OTHER_SERVICE_OPTION) &&
      !data.serviceOtherDetails.trim()
    )
      errors.serviceOtherDetails =
        "Please specify the other service you offer.";
  }

  if (step === 3) {
    if (!data.serviceCities.trim())
      errors.serviceCities = "Service cities are required.";
    if (!data.serviceCounties.trim())
      errors.serviceCounties = "Service counties are required.";
    if (!data.serviceRadius.trim())
      errors.serviceRadius = "Service radius is required.";
    if (!data.travelOutsideArea.trim())
      errors.travelOutsideArea = "Please select one option.";
  }

  if (step === 4) {
    if (!data.epaCertified) errors.epaCertified = "Please select Yes or No.";
    if (!data.backgroundCheck)
      errors.backgroundCheck = "Please select Yes or No.";
    if (!data.sameDayService)
      errors.sameDayService = "Please select Yes or No.";
    if (!data.turnaround2448)
      errors.turnaround2448 = "Please select Yes or No.";
  }

  // ── Step 5: W-9 is mandatory ──────────────────────────────────────────────
  if (step === 5) {
    // If fileRefs provided (in-memory Files), require actual File objects;
    // otherwise fall back to persisted metadata in formData.
    const w9Present = fileRefs
      ? Boolean(fileRefs["w9"])
      : Boolean(data.documentUploads["w9"]);
    if (!w9Present) {
      errors.documentUploads = "A completed W-9 form is required to continue.";
    }
  }

  return errors;
}

// ─────────────────────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────────────────────

function ReviewRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 py-3 border-b border-surface-100 last:border-0">
      <span className="font-body text-xs uppercase tracking-wider text-text-muted sm:w-52 flex-shrink-0 pt-0.5">
        {label}
      </span>
      <span className="font-body text-sm text-charcoal font-medium break-words line-clamp-3">
        {value || (
          <span className="text-text-muted italic font-normal">
            Not provided
          </span>
        )}
      </span>
    </div>
  );
}

/** Single upload card — shared between required and optional docs */
function UploadCard({
  id,
  label,
  description,
  required,
  file,
  cleared,
  onUpload,
  onRemove,
}: {
  id: string;
  label: string;
  description: string;
  required?: boolean;
  file: File | null;
  cleared?: boolean;
  onUpload: (id: string, file: File | null) => void;
  onRemove: (id: string) => void;
}) {
  return (
    <div
      className={`border rounded-xl p-4 bg-surface-50 h-full flex flex-col gap-3 ${
        required && !file
          ? "border-teal/40 bg-teal-muted/30"
          : "border-surface-200"
      }`}
    >
      {/* Label row */}
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="font-body text-sm font-semibold text-charcoal leading-snug truncate">
            {label}
            {required && (
              <span className="ml-1 text-teal" aria-label="required">
                *
              </span>
            )}
          </p>
          <p className="font-body text-xs text-text-muted mt-0.5 line-clamp-2">
            {description}
          </p>
        </div>
        {required && (
          <span className="shrink-0 inline-flex items-center gap-1 rounded-full bg-teal-muted px-2 py-0.5 text-[10px] font-accent font-semibold text-charcoal uppercase tracking-wide">
            Required
          </span>
        )}
      </div>

      {/* Upload / preview area */}
      {!file ? (
        <>
          <label
            htmlFor={`doc-${id}`}
            className="flex flex-col items-center justify-center gap-1.5 border-2 border-dashed border-surface-300 rounded-lg p-4 cursor-pointer hover:border-teal/50 hover:bg-white transition-colors bg-white text-center"
          >
            <Upload className="w-4 h-4 text-teal" aria-hidden />
            <span className="font-body text-sm font-medium text-charcoal">
              Upload File
            </span>
            <span className="font-body text-xs text-text-muted">
              or drag and drop
            </span>
            <input
              id={`doc-${id}`}
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              className="hidden"
              onChange={(e) => onUpload(id, e.target.files?.[0] ?? null)}
              aria-label={`Upload ${label}`}
            />
          </label>
          {cleared && (
            <p className="text-xs text-error mt-1">
              File cleared — please re-upload.
            </p>
          )}
        </>
      ) : (
        <div className="flex items-center justify-between gap-3 bg-white border border-surface-200 rounded-lg px-4 py-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <FileText className="w-4 h-4 text-teal shrink-0" aria-hidden />
            <div className="min-w-0">
              <p className="font-body text-sm text-charcoal font-medium truncate">
                {file.name}
              </p>
              <p className="font-body text-xs text-text-muted">
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onRemove(id)}
            className="ml-2 text-text-muted hover:text-error transition-colors shrink-0"
            aria-label={`Remove ${label}`}
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main form component
// ─────────────────────────────────────────────────────────────────────────────

export default function VendorApplicationForm() {
  const router = useRouter();
  const hasRestoredDraftRef = useRef(false);
  const skipNextPersistRef = useRef(true);
  // Store actual File objects in a ref so they survive in-memory navigation and retries.
  const fileUploadsRef = useRef<Record<string, File | null>>({});
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<VendorFormData>(INITIAL_DATA);
  const [errors, setErrors] = useState<VendorFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // ── Draft restore ──────────────────────────────────────────────────────────
  useEffect(() => {
    const savedDraft =
      localStorage.getItem(VENDOR_FORM_DRAFT_STORAGE_KEY) ??
      sessionStorage.getItem(VENDOR_FORM_DRAFT_STORAGE_KEY);
    if (!savedDraft) {
      hasRestoredDraftRef.current = true;
      return;
    }
    try {
      const parsed = JSON.parse(savedDraft) as {
        currentStep?: number;
        formData?: Partial<VendorDraftData>;
      };
      const draftFormData = parsed.formData;
      if (draftFormData) {
        setFormData((prev) => ({
          ...prev,
          ...draftFormData,
          serviceCategories: Array.isArray(draftFormData.serviceCategories)
            ? draftFormData.serviceCategories
            : prev.serviceCategories,
          documentUploads:
            (draftFormData as Partial<VendorDraftData>).documentUploads ??
            prev.documentUploads,
        }));
      }
      if (typeof parsed.currentStep === "number") {
        setCurrentStep(
          Math.min(
            MAX_STEP,
            Math.max(MIN_STEP, Math.floor(parsed.currentStep)),
          ),
        );
      }
    } catch {
      localStorage.removeItem(VENDOR_FORM_DRAFT_STORAGE_KEY);
      sessionStorage.removeItem(VENDOR_FORM_DRAFT_STORAGE_KEY);
    } finally {
      hasRestoredDraftRef.current = true;
    }
  }, []);

  useEffect(() => {
    if (!hasRestoredDraftRef.current) return;
    if (skipNextPersistRef.current) {
      skipNextPersistRef.current = false;
      return;
    }
    persistVendorDraft(currentStep, formData);
  }, [currentStep, formData]);

  // ── Helpers ────────────────────────────────────────────────────────────────
  const inputClass = (field: keyof VendorFormErrors) =>
    `w-full font-body text-sm px-4 py-3 border rounded-lg bg-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal focus:border-teal placeholder:text-text-muted ${
      errors[field]
        ? "border-error text-error"
        : "border-surface-200 text-text-body"
    }`;

  const handleChange = (
    field: keyof VendorFormData,
    value: string | boolean,
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof VendorFormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const toggleServiceCategory = (service: string) => {
    const isRemoving = formData.serviceCategories.includes(service);
    setFormData((prev) => ({
      ...prev,
      serviceCategories: isRemoving
        ? prev.serviceCategories.filter((item) => item !== service)
        : [...prev.serviceCategories, service],
      serviceOtherDetails:
        isRemoving && service === OTHER_SERVICE_OPTION
          ? ""
          : prev.serviceOtherDetails,
    }));
    if (errors.serviceCategories)
      setErrors((prev) => ({ ...prev, serviceCategories: undefined }));
    if (
      isRemoving &&
      service === OTHER_SERVICE_OPTION &&
      errors.serviceOtherDetails
    )
      setErrors((prev) => ({ ...prev, serviceOtherDetails: undefined }));
  };

  const handleDocumentUpload = (id: string, file: File | null) => {
    if (!file) return;
    if (file.size > 10 * 1024 * 1024) {
      toast.error(`File exceeds the 10 MB size limit: ${file.name}`);
      return;
    }
    // Keep the real File in a ref (not serializable). Store only metadata in state.
    fileUploadsRef.current[id] = file;
    toast.success(`File "${file.name}" uploaded successfully`);
    setFormData((prev) => ({
      ...prev,
      documentUploads: {
        ...prev.documentUploads,
        [id]: { name: file.name, size: file.size, type: file.type },
      },
    }));
  };

  const removeDocument = (id: string) => {
    // Clear both the File ref and the persisted metadata
    fileUploadsRef.current[id] = null;
    setFormData((prev) => ({
      ...prev,
      documentUploads: { ...prev.documentUploads, [id]: null },
    }));
  };

  const handleNext = () => {
    const stepErrors = validateStep(
      currentStep,
      formData,
      currentStep === 5 ? fileUploadsRef.current : undefined,
    );
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      // Show toast for the first error
      const firstErrorMessage = Object.values(stepErrors)[0] as string;
      if (firstErrorMessage) {
        toast.error(firstErrorMessage);
      }
      return;
    }
    setErrors({});
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setErrors({});
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = async () => {
    // Validate operational step and documents step (W-9 required)
    const stepErrors4 = validateStep(4, formData);
    const stepErrors5 = validateStep(5, formData, fileUploadsRef.current);
    if (Object.keys(stepErrors4).length > 0) {
      setErrors(stepErrors4);
      const firstErrorMessage = Object.values(stepErrors4)[0] as string;
      if (firstErrorMessage) toast.error(firstErrorMessage);
      return;
    }
    if (Object.keys(stepErrors5).length > 0) {
      setErrors(stepErrors5);
      const firstErrorMessage = Object.values(stepErrors5)[0] as string;
      if (firstErrorMessage) toast.error(firstErrorMessage);
      setCurrentStep(5);
      return;
    }
    if (!formData.agreeToTerms) {
      setErrors((prev) => ({
        ...prev,
        agreeToTerms: "You must agree before submitting.",
      }));
      toast.error("You must agree to the terms and conditions to submit.");
      return;
    }
    // File ref guards — check before starting submit/loading state
    if (!fileUploadsRef.current["w9"]) {
      toast.error("A completed W-9 form is required. Please upload the W-9.");
      setCurrentStep(5);
      return;
    }

    for (const [id, f] of Object.entries(fileUploadsRef.current)) {
      if (!f) continue;
      if (f.size === 0) {
        toast.error(
          `File \"${f.name}\" appears to be empty. Please re-upload.`,
        );
        setCurrentStep(5);
        return;
      }
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const body = new FormData();
      body.append("companyName", formData.companyName);
      body.append("contactPerson", formData.contactPerson);
      body.append("phone", formData.phone);
      body.append("email", formData.email);
      body.append("website", formData.website);
      body.append("yearsInBusiness", formData.yearsInBusiness);
      body.append("serviceCategories", formData.serviceCategories.join(", "));
      body.append("serviceOtherDetails", formData.serviceOtherDetails.trim());
      body.append("serviceCities", formData.serviceCities);
      body.append("serviceCounties", formData.serviceCounties);
      body.append("zipCodes", formData.zipCodes);
      body.append("serviceRadius", formData.serviceRadius);
      body.append("travelOutsideArea", formData.travelOutsideArea);
      body.append("epaCertified", formData.epaCertified);
      body.append("backgroundCheck", formData.backgroundCheck);
      body.append("sameDayService", formData.sameDayService);
      body.append("turnaround2448", formData.turnaround2448);
      body.append("additionalNotes", formData.additionalNotes);

      // AFTER
      let docIndex = 0;
      ALL_DOCUMENT_IDS.forEach((id) => {
        const file = fileUploadsRef.current[id];
        if (file) {
          body.append(`document_${docIndex}`, file, file.name);
          body.append(`document_label_${docIndex}`, id);
          docIndex++;
        }
      });
      body.append("documentCount", String(docIndex));

      const res = await fetch("/api/vendor", { method: "POST", body });
      if (!res.ok) throw new Error("Submission failed. Please try again.");

      const successPayload: VendorSuccessPayload = {
        companyName: formData.companyName.trim(),
        contactPerson: formData.contactPerson.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        servicesOffered: formData.serviceCategories.includes(
          OTHER_SERVICE_OPTION,
        )
          ? [
              ...formData.serviceCategories,
              `Other Service: ${formData.serviceOtherDetails.trim() || "Not provided"}`,
            ]
          : formData.serviceCategories,
        serviceCities: formData.serviceCities.trim(),
        serviceCounties: formData.serviceCounties.trim(),
        serviceRadius: formData.serviceRadius.trim(),
        travelOutsideArea: formData.travelOutsideArea.trim(),
        applicationDate: new Date().toISOString(),
        status: "Under Review",
      };

      localStorage.setItem(
        VENDOR_SUCCESS_STORAGE_KEY,
        JSON.stringify(successPayload),
      );
      localStorage.removeItem(VENDOR_FORM_DRAFT_STORAGE_KEY);
      sessionStorage.removeItem(VENDOR_FORM_DRAFT_STORAGE_KEY);
      toast.success("Application submitted successfully!");
      router.push("/vendors/success");
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.";
      toast.error(errorMessage);
      setSubmitError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  // ── Derived values for Review step ────────────────────────────────────────
  // Count persisted metadata entries (these persist across refresh), but actual
  // File objects live in `fileUploadsRef`.
  const uploadedCount = Object.values(formData.documentUploads).filter(
    Boolean,
  ).length;
  const uploadedDocuments = Object.entries(formData.documentUploads).filter(
    ([, v]) => Boolean(v),
  ) as Array<[string, DocumentMeta]>;

  const formatList = (value: string) =>
    value
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);

  const applicationDate = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  const sectionComplete = {
    company:
      Boolean(formData.companyName.trim()) &&
      Boolean(formData.contactPerson.trim()) &&
      Boolean(formData.phone.trim()) &&
      Boolean(formData.email.trim()) &&
      Boolean(formData.yearsInBusiness.trim()),
    services: formData.serviceCategories.length > 0,
    coverage:
      Boolean(formData.serviceCities.trim()) &&
      Boolean(formData.serviceCounties.trim()) &&
      Boolean(formData.serviceRadius.trim()) &&
      Boolean(formData.travelOutsideArea.trim()),
    operational:
      Boolean(formData.epaCertified) &&
      Boolean(formData.backgroundCheck) &&
      Boolean(formData.sameDayService) &&
      Boolean(formData.turnaround2448),
    // W-9 required; all others optional
    documents: Boolean(formData.documentUploads["w9"]),
  };
  const allSectionsComplete = Object.values(sectionComplete).every(Boolean);

  // ── Step indicator ─────────────────────────────────────────────────────────
  // ── Step indicator ─────────────────────────────────────────────────────────
  const StepIndicator = () => (
    <div className="w-full max-w-6xl mx-auto mb-10 px-4">
      {/* Desktop — centered flex with consistent gaps */}
      <div className="hidden xl:flex items-center justify-center gap-4">
        {STEPS.map((step, i) => (
          <div key={step.id} className="flex items-center gap-3">
            {/* Step circle */}
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full font-accent text-xs font-semibold transition-colors duration-300 ${
                currentStep === step.id
                  ? "bg-teal text-white shadow-teal-glow"
                  : currentStep > step.id
                    ? "bg-charcoal text-white"
                    : "bg-surface-100 text-text-muted border border-surface-200"
              }`}
            >
              {currentStep > step.id ? (
                <CheckCircle2 className="w-4 h-4" />
              ) : (
                step.id
              )}
            </div>

            {/* Step label */}
            <span
              className={`font-accent text-xs whitespace-nowrap ${
                currentStep === step.id
                  ? "text-charcoal font-semibold"
                  : "text-text-muted"
              }`}
            >
              {step.title}
            </span>

            {/* Connector line (not after last step) */}
            {i < STEPS.length - 1 && (
              <div
                className={`w-10 h-0.5 rounded-full transition-colors duration-300 ${
                  currentStep > step.id ? "bg-charcoal" : "bg-surface-200"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Mobile/Tablet — circles only, centered */}
      <div className="flex xl:hidden items-center justify-center gap-2">
        {STEPS.map((step, i) => (
          <div key={step.id} className="flex items-center">
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full font-accent text-xs font-semibold transition-colors duration-300 ${
                currentStep === step.id
                  ? "bg-teal text-white shadow-teal-glow"
                  : currentStep > step.id
                    ? "bg-charcoal text-white"
                    : "bg-surface-100 text-text-muted border border-surface-200"
              }`}
            >
              {currentStep > step.id ? (
                <CheckCircle2 className="w-4 h-4" />
              ) : (
                step.id
              )}
            </div>
            {i < STEPS.length - 1 && (
              <div
                className={`w-4 h-0.5 mx-1 rounded-full transition-colors duration-300 ${
                  currentStep > step.id ? "bg-charcoal" : "bg-surface-200"
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );

  // ─────────────────────────────────────────────────────────────────────────
  // RENDER
  // ─────────────────────────────────────────────────────────────────────────
  return (
    <div>
      <SectionHeading
        title="Vendor Application"
        subtitle="Complete all six steps to submit your application."
        align="center"
      />

      <div className="mt-10" suppressHydrationWarning>
        <StepIndicator />

        <div className="max-w-6xl mx-auto bg-white border border-surface-200 rounded-2xl shadow-card p-8 sm:p-10">
          <p className="font-accent text-xs uppercase tracking-widest text-teal mb-1">
            Step {currentStep} of {STEPS.length}
          </p>
          <h3 className="font-display text-2xl font-bold text-charcoal mb-1 truncate">
            {STEPS[currentStep - 1].title}
          </h3>
          <p className="font-body text-text-muted mb-8 truncate">
            {STEPS[currentStep - 1].description}
          </p>

          {/* ── Step 1: Company Information ─────────────────────────────── */}
          {currentStep === 1 && (
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-body text-sm font-medium text-charcoal mb-1.5">
                    Company Name <span className="text-teal">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="ACME Maintenance LLC"
                    value={formData.companyName}
                    onChange={(e) =>
                      handleChange("companyName", e.target.value)
                    }
                    className={inputClass("companyName")}
                  />
                </div>
                <div>
                  <label className="block font-body text-sm font-medium text-charcoal mb-1.5">
                    Contact Person <span className="text-teal">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="John Smith"
                    value={formData.contactPerson}
                    onChange={(e) =>
                      handleChange("contactPerson", e.target.value)
                    }
                    className={inputClass("contactPerson")}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-body text-sm font-medium text-charcoal mb-1.5">
                    Phone Number <span className="text-teal">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="(555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className={inputClass("phone")}
                  />
                </div>
                <div>
                  <label className="block font-body text-sm font-medium text-charcoal mb-1.5">
                    Email Address <span className="text-teal">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className={inputClass("email")}
                    suppressHydrationWarning
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-body text-sm font-medium text-charcoal mb-1.5">
                    Business Website
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
                    Years in Business <span className="text-teal">*</span>
                  </label>
                  <div className="relative">
                    <select
                      value={formData.yearsInBusiness}
                      onChange={(e) =>
                        handleChange("yearsInBusiness", e.target.value)
                      }
                      className={`${inputClass("yearsInBusiness")} appearance-none pr-12`}
                    >
                      <option value="">Select...</option>
                      <option value="Less than 1 year">Less than 1 year</option>
                      <option value="1–2 years">1–2 years</option>
                      <option value="3–5 years">3–5 years</option>
                      <option value="6–10 years">6–10 years</option>
                      <option value="10+ years">10+ years</option>
                    </select>
                    <ChevronDown
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted pointer-events-none"
                      aria-hidden
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ── Step 2: Services Offered ─────────────────────────────────── */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <p className="font-body text-sm text-text-muted">
                Selecting more services increases your chances of receiving more
                work orders.
              </p>
              {SERVICE_GROUPS.map((group) => (
                <div key={group.title}>
                  <h4 className="font-display text-lg font-semibold text-charcoal mb-3">
                    {group.title}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {group.services.map((service) => {
                      const selected =
                        formData.serviceCategories.includes(service);
                      return (
                        <button
                          key={service}
                          type="button"
                          onClick={() => toggleServiceCategory(service)}
                          className={`flex items-center gap-3 px-4 py-3 rounded-lg border text-left font-body text-sm transition-all duration-200 ${
                            selected
                              ? "border-teal bg-teal-muted text-charcoal font-medium"
                              : "border-surface-200 text-text-muted hover:border-teal/50 hover:bg-surface-50"
                          }`}
                        >
                          <span
                            className={`w-4 h-4 rounded border flex-shrink-0 flex items-center justify-center transition-colors ${
                              selected
                                ? "bg-teal border-teal"
                                : "border-surface-300"
                            }`}
                          >
                            {selected && (
                              <CheckCircle2 className="w-3 h-3 text-white" />
                            )}
                          </span>
                          {service}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
              {errors.serviceCategories && (
                <p className="text-xs text-error">{errors.serviceCategories}</p>
              )}
              {formData.serviceCategories.includes(OTHER_SERVICE_OPTION) && (
                <div>
                  <label className="block font-body text-sm font-medium text-charcoal mb-1.5">
                    Other Service (Please Specify){" "}
                    <span className="text-teal">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.serviceOtherDetails}
                    onChange={(e) =>
                      handleChange("serviceOtherDetails", e.target.value)
                    }
                    placeholder="Enter your service"
                    className={inputClass("serviceOtherDetails")}
                  />
                </div>
              )}
            </div>
          )}

          {/* ── Step 3: Coverage Area ────────────────────────────────────── */}
          {currentStep === 3 && (
            <div className="space-y-5">
              <div>
                <label className="block font-body text-sm font-medium text-charcoal mb-1.5">
                  Service Cities <span className="text-teal">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter cities (comma separated)"
                  value={formData.serviceCities}
                  onChange={(e) =>
                    handleChange("serviceCities", e.target.value)
                  }
                  className={inputClass("serviceCities")}
                />
              </div>
              <div>
                <label className="block font-body text-sm font-medium text-charcoal mb-1.5">
                  Service Counties <span className="text-teal">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter counties (comma separated)"
                  value={formData.serviceCounties}
                  onChange={(e) =>
                    handleChange("serviceCounties", e.target.value)
                  }
                  className={inputClass("serviceCounties")}
                />
              </div>
              <div>
                <label className="block font-body text-sm font-medium text-charcoal mb-1.5">
                  ZIP Codes
                </label>
                <input
                  type="text"
                  placeholder="Enter ZIP codes (comma separated)"
                  value={formData.zipCodes}
                  onChange={(e) => handleChange("zipCodes", e.target.value)}
                  className={inputClass("general")}
                />
              </div>
              <div>
                <label className="block font-body text-sm font-medium text-charcoal mb-1.5">
                  Service Radius <span className="text-teal">*</span>
                </label>
                <div className="relative">
                  <select
                    value={formData.serviceRadius}
                    onChange={(e) =>
                      handleChange("serviceRadius", e.target.value)
                    }
                    className={`${inputClass("serviceRadius")} appearance-none pr-12`}
                  >
                    <option value="">Select radius...</option>
                    <option value="Up to 25 miles">Up to 25 miles</option>
                    <option value="Up to 50 miles">Up to 50 miles</option>
                    <option value="Up to 100 miles">Up to 100 miles</option>
                  </select>
                  <ChevronDown
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted pointer-events-none"
                    aria-hidden
                  />
                </div>
              </div>
              <div>
                <label className="block font-body text-sm font-medium text-charcoal mb-1.5">
                  Willing to travel outside regular area?{" "}
                  <span className="text-teal">*</span>
                </label>
                <div className="relative">
                  <select
                    value={formData.travelOutsideArea}
                    onChange={(e) =>
                      handleChange("travelOutsideArea", e.target.value)
                    }
                    className={`${inputClass("travelOutsideArea")} appearance-none pr-12`}
                  >
                    <option value="">Select one</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                  <ChevronDown
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted pointer-events-none"
                    aria-hidden
                  />
                </div>
              </div>
            </div>
          )}

          {/* ── Step 4: Operational Capabilities ────────────────────────── */}
          {currentStep === 4 && (
            <div className="space-y-5">
              {(
                [
                  { field: "epaCertified", label: "EPA Certified" },
                  { field: "backgroundCheck", label: "Background Check" },
                  {
                    field: "sameDayService",
                    label: "Same-Day Service Available?",
                  },
                  {
                    field: "turnaround2448",
                    label: "Can meet 24–48 hour turnaround?",
                  },
                ] as const
              ).map(({ field, label }) => (
                <div key={field}>
                  <label className="block font-body text-sm font-medium text-charcoal mb-1.5">
                    {label} <span className="text-teal">*</span>
                  </label>
                  <div className="relative">
                    <select
                      value={formData[field]}
                      onChange={(e) => handleChange(field, e.target.value)}
                      className={`${inputClass(field)} appearance-none pr-12`}
                    >
                      <option value="">Yes / No</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                    <ChevronDown
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted pointer-events-none"
                      aria-hidden
                    />
                  </div>
                </div>
              ))}
              <div>
                <label className="block font-body text-sm font-medium text-charcoal mb-1.5">
                  Additional Notes or Specialties
                </label>
                <textarea
                  rows={4}
                  placeholder="Share additional details about specialties or operating strengths"
                  value={formData.additionalNotes}
                  onChange={(e) =>
                    handleChange("additionalNotes", e.target.value)
                  }
                  className={inputClass("general")}
                />
              </div>
            </div>
          )}

          {/* ── Step 5: Document Upload ──────────────────────────────────── */}
          {currentStep === 5 && (
            <div className="space-y-8">
              {/* File-type notice */}
              <div className="flex items-center gap-3 rounded-lg border border-surface-200 bg-surface-50 px-4 py-3">
                <FileText className="w-4 h-4 text-teal shrink-0" aria-hidden />
                <p className="font-body text-sm text-charcoal">
                  Accepted file types:{" "}
                  <span className="font-medium">PDF, JPG, PNG</span> &mdash; Max
                  file size: <span className="font-medium">10 MB per file</span>
                </p>
              </div>

              {/* ── Required documents ──────────────────────────────────── */}
              <section aria-labelledby="req-docs-heading">
                <div className="flex items-center gap-3 mb-4">
                  <h4
                    id="req-docs-heading"
                    className="font-display text-lg font-bold text-charcoal"
                  >
                    Required Documents
                  </h4>
                  <span
                    className="h-0.5 w-8 rounded-full bg-teal"
                    aria-hidden
                  />
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {REQUIRED_DOCUMENT_FIELDS.map((doc) => (
                    <UploadCard
                      key={doc.id}
                      id={doc.id}
                      label={doc.label}
                      description={doc.description}
                      required
                      file={fileUploadsRef.current[doc.id] ?? null}
                      cleared={
                        Boolean(formData.documentUploads[doc.id]) &&
                        !fileUploadsRef.current[doc.id]
                      }
                      onUpload={handleDocumentUpload}
                      onRemove={removeDocument}
                    />
                  ))}
                </div>
              </section>

              {/* ── Optional documents (grouped) ─────────────────────────── */}
              <section aria-labelledby="opt-docs-heading">
                <div className="flex items-center gap-3 mb-1">
                  <h4
                    id="opt-docs-heading"
                    className="font-display text-lg font-bold text-charcoal"
                  >
                    Optional Documents
                  </h4>
                  <span
                    className="h-0.5 w-8 rounded-full bg-surface-300"
                    aria-hidden
                  />
                </div>
                <p className="font-body text-sm text-text-muted mb-5">
                  Please upload any documents you have available.
                </p>

                <div className="space-y-6">
                  {OPTIONAL_DOCUMENT_GROUPS.map((group) => (
                    <div key={group.groupTitle}>
                      <p className="font-accent text-xs font-semibold uppercase tracking-widest text-text-muted mb-3">
                        {group.groupTitle}
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {group.docs.map((doc) => (
                          <UploadCard
                            key={doc.id}
                            id={doc.id}
                            label={doc.label}
                            description={doc.description}
                            required={false}
                            file={fileUploadsRef.current[doc.id] ?? null}
                            cleared={
                              Boolean(formData.documentUploads[doc.id]) &&
                              !fileUploadsRef.current[doc.id]
                            }
                            onUpload={handleDocumentUpload}
                            onRemove={removeDocument}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Security notice */}
              <div className="flex items-start gap-3 rounded-xl border border-surface-200 bg-surface-50 p-4">
                <ShieldCheck
                  className="w-5 h-5 text-teal shrink-0 mt-0.5"
                  aria-hidden
                />
                <p className="font-body text-sm text-charcoal">
                  Your information is secure. All documents are securely stored
                  and used only for vendor verification purposes.
                </p>
              </div>
            </div>
          )}

          {/* ── Step 6: Review & Submit ──────────────────────────────────── */}
          {currentStep === 6 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                {/* Left column — review sections */}
                <div className="xl:col-span-2 space-y-5">
                  <div>
                    <h4 className="font-display text-2xl font-bold text-charcoal">
                      Review Your Application
                    </h4>
                    <p className="font-body text-sm text-text-muted mt-1">
                      Please review all information below before submitting your
                      application.
                    </p>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-surface-50 border border-surface-200 rounded-xl">
                    <CheckCircle2 className="w-5 h-5 text-teal mt-0.5 shrink-0" />
                    <p className="font-body text-sm text-charcoal">
                      Make sure all information is correct and up to date. You
                      can edit any section if needed.
                    </p>
                  </div>

                  {/* Company Information */}
                  <div className="border border-surface-200 rounded-xl p-5">
                    <div className="flex items-center justify-between gap-3">
                      <h5 className="font-display text-lg font-bold text-charcoal">
                        1. Company Information
                      </h5>
                      <button
                        type="button"
                        onClick={() => setCurrentStep(1)}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-surface-200 px-3 py-1.5 text-sm font-body text-charcoal hover:border-teal/50 hover:text-teal transition-colors"
                      >
                        <Pencil className="w-3.5 h-3.5" />
                        Edit
                      </button>
                    </div>
                    <div className="bg-surface-50 rounded-xl border border-surface-200 px-5 py-1 mt-4">
                      <ReviewRow
                        label="Company Name"
                        value={formData.companyName}
                      />
                      <ReviewRow
                        label="Contact Person"
                        value={formData.contactPerson}
                      />
                      <ReviewRow label="Phone" value={formData.phone} />
                      <ReviewRow label="Email" value={formData.email} />
                      <ReviewRow label="Website" value={formData.website} />
                      <ReviewRow
                        label="Years in Business"
                        value={formData.yearsInBusiness}
                      />
                    </div>
                  </div>

                  {/* Services */}
                  <div className="border border-surface-200 rounded-xl p-5">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <h5 className="font-display text-lg font-bold text-charcoal">
                          2. Services Offered
                        </h5>
                        <span className="px-2 py-1 rounded-full bg-teal-muted text-charcoal text-xs font-body font-medium">
                          {formData.serviceCategories.length} Selected
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setCurrentStep(2)}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-surface-200 px-3 py-1.5 text-sm font-body text-charcoal hover:border-teal/50 hover:text-teal transition-colors"
                      >
                        <Pencil className="w-3.5 h-3.5" />
                        Edit
                      </button>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {formData.serviceCategories.length > 0 ? (
                        formData.serviceCategories.map((service) => (
                          <span
                            key={service}
                            className="inline-flex items-center gap-1.5 rounded-full bg-surface-50 border border-surface-200 px-3 py-1.5 text-xs font-body text-charcoal"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-teal" />
                            {service}
                          </span>
                        ))
                      ) : (
                        <p className="font-body text-sm text-text-muted italic">
                          No services selected
                        </p>
                      )}
                    </div>
                    {formData.serviceCategories.includes(
                      OTHER_SERVICE_OPTION,
                    ) && (
                      <div className="mt-4">
                        <ReviewRow
                          label="Other Service"
                          value={formData.serviceOtherDetails}
                        />
                      </div>
                    )}
                  </div>

                  {/* Coverage Area */}
                  <div className="border border-surface-200 rounded-xl p-5">
                    <div className="flex items-center justify-between gap-3">
                      <h5 className="font-display text-lg font-bold text-charcoal">
                        3. Coverage Area
                      </h5>
                      <button
                        type="button"
                        onClick={() => setCurrentStep(3)}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-surface-200 px-3 py-1.5 text-sm font-body text-charcoal hover:border-teal/50 hover:text-teal transition-colors"
                      >
                        <Pencil className="w-3.5 h-3.5" />
                        Edit
                      </button>
                    </div>
                    <div className="bg-surface-50 rounded-xl border border-surface-200 px-5 py-1 mt-4">
                      <ReviewRow
                        label="Service Cities"
                        value={formData.serviceCities}
                      />
                      <ReviewRow
                        label="Service Counties"
                        value={formData.serviceCounties}
                      />
                      <ReviewRow label="ZIP Codes" value={formData.zipCodes} />
                      <ReviewRow
                        label="Service Radius"
                        value={formData.serviceRadius}
                      />
                      <ReviewRow
                        label="Willing to travel outside regular area?"
                        value={formData.travelOutsideArea}
                      />
                    </div>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
                      {[
                        { heading: "Cities", value: formData.serviceCities },
                        {
                          heading: "Counties",
                          value: formData.serviceCounties,
                        },
                        { heading: "ZIP Codes", value: formData.zipCodes },
                      ].map(({ heading, value }) => (
                        <div
                          key={heading}
                          className="rounded-lg border border-surface-200 bg-surface-50 p-3"
                        >
                          <p className="font-body text-xs uppercase tracking-wide text-text-muted mb-1">
                            {heading}
                          </p>
                          <p className="font-body text-sm text-charcoal">
                            {formatList(value).join(", ") || "Not provided"}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Operational Capabilities */}
                  <div className="border border-surface-200 rounded-xl p-5">
                    <div className="flex items-center justify-between gap-3">
                      <h5 className="font-display text-lg font-bold text-charcoal">
                        4. Operational Capabilities
                      </h5>
                      <button
                        type="button"
                        onClick={() => setCurrentStep(4)}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-surface-200 px-3 py-1.5 text-sm font-body text-charcoal hover:border-teal/50 hover:text-teal transition-colors"
                      >
                        <Pencil className="w-3.5 h-3.5" />
                        Edit
                      </button>
                    </div>
                    <div className="bg-surface-50 rounded-xl border border-surface-200 px-5 py-1 mt-4">
                      <ReviewRow
                        label="EPA Certified"
                        value={formData.epaCertified}
                      />
                      <ReviewRow
                        label="Background Check"
                        value={formData.backgroundCheck}
                      />
                      <ReviewRow
                        label="Same-Day Service Available?"
                        value={formData.sameDayService}
                      />
                      <ReviewRow
                        label="Can meet 24–48 hour turnaround?"
                        value={formData.turnaround2448}
                      />
                      <ReviewRow
                        label="Additional Notes or Specialties"
                        value={formData.additionalNotes}
                      />
                    </div>
                  </div>

                  {/* Documents */}
                  <div className="border border-surface-200 rounded-xl p-5">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <h5 className="font-display text-lg font-bold text-charcoal">
                          5. Documents Uploaded
                        </h5>
                        <span className="px-2 py-1 rounded-full bg-teal-muted text-charcoal text-xs font-body font-medium">
                          {uploadedCount}{" "}
                          {uploadedCount === 1 ? "Document" : "Documents"}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setCurrentStep(5)}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-surface-200 px-3 py-1.5 text-sm font-body text-charcoal hover:border-teal/50 hover:text-teal transition-colors"
                      >
                        <Pencil className="w-3.5 h-3.5" />
                        Edit
                      </button>
                    </div>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                      {uploadedDocuments.length > 0 ? (
                        uploadedDocuments.map(([id, file]) => (
                          <div
                            key={id}
                            className="rounded-lg border border-surface-200 bg-surface-50 p-3 flex items-start gap-2.5"
                          >
                            <FileText
                              className="w-4 h-4 text-teal shrink-0 mt-0.5"
                              aria-hidden
                            />
                            <div className="min-w-0">
                              <p className="font-body text-sm font-medium text-charcoal">
                                {(
                                  [
                                    ...REQUIRED_DOCUMENT_FIELDS,
                                    ...OPTIONAL_DOCUMENT_GROUPS.reduce<
                                      Array<{
                                        id: string;
                                        label: string;
                                        description: string;
                                      }>
                                    >((acc, g) => [...acc, ...g.docs], []),
                                  ] as any
                                ).find((d: any) => d.id === id)?.label ?? id}
                              </p>
                              <p className="font-body text-xs text-text-muted mt-0.5 truncate">
                                {file.name}
                              </p>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p className="font-body text-sm text-text-muted italic">
                          No documents uploaded
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right column — sidebar */}
                <aside className="space-y-4">
                  {/* Application summary */}
                  <div className="rounded-xl border border-surface-200 p-5 bg-white">
                    <h5 className="font-display text-lg font-bold text-charcoal mb-4">
                      Application Summary
                    </h5>
                    <div className="space-y-3">
                      {[
                        { label: "Business Name", value: formData.companyName },
                        {
                          label: "Contact Person",
                          value: formData.contactPerson,
                        },
                        { label: "Phone", value: formData.phone },
                        { label: "Email", value: formData.email },
                        { label: "Application Date", value: applicationDate },
                      ].map(({ label, value }) => (
                        <div key={label}>
                          <p className="font-body text-xs text-text-muted uppercase tracking-wide">
                            {label}
                          </p>
                          <p className="font-body text-sm text-charcoal font-medium">
                            {value || "Not provided"}
                          </p>
                        </div>
                      ))}
                      <div>
                        <p className="font-body text-xs text-text-muted uppercase tracking-wide">
                          Status
                        </p>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-muted text-charcoal text-xs font-body font-medium px-2.5 py-1">
                          <ShieldCheck className="w-3.5 h-3.5 text-teal" />
                          {allSectionsComplete
                            ? "Ready to Submit"
                            : "In Progress"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Review checklist */}
                  <div className="rounded-xl border border-surface-200 p-5 bg-white">
                    <h5 className="font-display text-lg font-bold text-charcoal mb-4">
                      Review Checklist
                    </h5>
                    <div className="space-y-2.5">
                      {(
                        [
                          ["Company Information", sectionComplete.company],
                          ["Services Offered", sectionComplete.services],
                          ["Coverage Area", sectionComplete.coverage],
                          [
                            "Operational Capabilities",
                            sectionComplete.operational,
                          ],
                          ["W-9 Uploaded", sectionComplete.documents],
                        ] as [string, boolean][]
                      ).map(([label, done]) => (
                        <div key={label} className="flex items-center gap-2">
                          <CheckCircle2
                            className={`w-4 h-4 ${done ? "text-teal" : "text-surface-300"}`}
                          />
                          <span className="font-body text-sm text-charcoal">
                            {label}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 rounded-lg border border-surface-200 bg-surface-50 px-3 py-2">
                      <p className="font-body text-xs text-charcoal">
                        {allSectionsComplete
                          ? "All required sections completed"
                          : "Please complete all required sections before submitting"}
                      </p>
                    </div>
                  </div>

                  {/* Terms agreement */}
                  <div className="rounded-xl border border-teal/20 bg-teal-muted/40 p-5">
                    <h5 className="font-display text-lg font-bold text-charcoal mb-3">
                      I Agree
                    </h5>
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="vendor-agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={(e) =>
                          handleChange("agreeToTerms", e.target.checked)
                        }
                        className="mt-1 h-4 w-4 rounded border-surface-300 text-teal focus:ring-teal focus:ring-offset-0 cursor-pointer"
                        aria-describedby={
                          errors.agreeToTerms
                            ? "vendor-agreeToTerms-error"
                            : undefined
                        }
                        aria-invalid={errors.agreeToTerms ? "true" : "false"}
                      />
                      <label
                        htmlFor="vendor-agreeToTerms"
                        className="font-body text-sm text-charcoal cursor-pointer"
                      >
                        I agree to the{" "}
                        <Link
                          href="/vendors/terms"
                          onClick={() =>
                            persistVendorDraft(currentStep, formData)
                          }
                          className="text-teal hover:text-teal-dark underline underline-offset-2"
                        >
                          Vendor Terms & Onboarding Agreement
                        </Link>
                        . I confirm that all submitted information is accurate
                        and that I operate as an independent contractor with all
                        required licenses and insurance.
                      </label>
                    </div>
                    {errors.agreeToTerms && (
                      <p
                        id="vendor-agreeToTerms-error"
                        className="mt-1 text-sm text-error"
                        role="alert"
                      >
                        {errors.agreeToTerms}
                      </p>
                    )}
                  </div>

                  {/* What happens next */}
                  <div className="rounded-xl border border-surface-200 p-5 bg-white">
                    <h5 className="font-display text-lg font-bold text-charcoal mb-3">
                      What happens next?
                    </h5>
                    <ul className="space-y-2">
                      <li className="font-body text-sm text-charcoal">
                        Our team will review your application within 1–2
                        business days.
                      </li>
                      <li className="font-body text-sm text-charcoal">
                        You will receive an email once your application is
                        approved.
                      </li>
                      <li className="font-body text-sm text-charcoal">
                        Approved vendors will start receiving work
                        opportunities.
                      </li>
                    </ul>
                  </div>

                  {/* Submit info */}
                  <div className="rounded-xl border border-surface-200 p-5 bg-white">
                    <p className="font-body text-sm text-charcoal font-medium">
                      Submit Application
                    </p>
                    <p className="font-body text-xs text-text-muted mt-1">
                      Once confirmed, use the submit button below to complete
                      your application.
                    </p>
                    <div className="mt-3 rounded-lg bg-surface-50 border border-surface-200 p-3 flex items-center gap-2">
                      <FileText className="w-4 h-4 text-teal" aria-hidden />
                      <p className="font-body text-xs text-charcoal">
                        Your information is secure and used only for vendor
                        onboarding and verification.
                      </p>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          )}

          {/* ── Navigation buttons ───────────────────────────────────────── */}
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
                  {currentStep === 5 ? "Review Application" : "Continue"}
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
