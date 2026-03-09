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

  // Step 3 — Documents & Attachments (optional)
  attachments?: File[];

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
  coverageAreas?: string;
  serviceRadius?: string;
  attachments?: string;
  agreeToTerms?: string;
  general?: string;
}

export interface VendorFormStep {
  id: number;
  title: string;
  description: string;
}
