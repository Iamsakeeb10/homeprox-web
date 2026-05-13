export interface DocumentMeta {
  name: string;
  size: number;
  type: string;
}

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
  serviceOtherDetails: string; // required when "Other (Please Specify)" is selected

  // Step 3 — Coverage Area
  serviceCities: string;
  serviceCounties: string;
  zipCodes: string; // optional
  serviceRadius: string;
  travelOutsideArea: string; // "Yes" | "No"

  // Step 4 — Operational Capabilities
  epaCertified: string; // "Yes" | "No"
  backgroundCheck: string; // "Yes" | "No"
  sameDayService: string; // "Yes" | "No"
  turnaround2448: string; // "Yes" | "No"
  additionalNotes: string; // optional

  // Step 5 — Document Uploads (keyed by document id → File | DocumentMeta | null)
  documentUploads: Record<string, File | DocumentMeta | null>;

  // Terms acceptance (required before submit)
  agreeToTerms: boolean;
}

export interface VendorFormErrors {
  companyName?: string;
  contactPerson?: string;
  phone?: string;
  email?: string;
  yearsInBusiness?: string;
  serviceCategories?: string;
  serviceOtherDetails?: string;
  serviceCities?: string;
  serviceCounties?: string;
  serviceRadius?: string;
  travelOutsideArea?: string;
  epaCertified?: string;
  backgroundCheck?: string;
  sameDayService?: string;
  turnaround2448?: string;
  documentUploads?: string;
  agreeToTerms?: string;
  general?: string;
}

export interface VendorFormStep {
  id: number;
  title: string;
  description: string;
}

export interface VendorSuccessPayload {
  companyName: string;
  contactPerson: string;
  phone: string;
  email: string;
  servicesOffered: string[];
  serviceCities: string;
  serviceCounties: string;
  serviceRadius: string;
  travelOutsideArea: string;
  applicationDate: string;
  status: string;
}
