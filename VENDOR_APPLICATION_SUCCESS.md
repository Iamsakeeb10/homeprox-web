"use client";

import { Button } from "@/components/ui/Button";
import type { VendorSuccessPayload } from "@/types/vendor";
import {
BriefcaseBusiness,
CheckCircle2,
CircleAlert,
ClipboardCheck,
Mail,
MapPin,
MessageCircle,
Phone,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const VENDOR_SUCCESS_STORAGE_KEY = "vendorApplicationSuccessPayload";

const FALLBACK_PAYLOAD: VendorSuccessPayload = {
companyName: "Recently submitted application",
contactPerson: "Provided in your application",
phone: "Available in submitted details",
email: "Provided email address",
servicesOffered: ["Submitted service categories"],
serviceCities: "Submitted service cities",
serviceCounties: "Submitted service counties",
serviceRadius: "Submitted service radius",
travelOutsideArea: "Submitted response",
applicationDate: new Date().toISOString(),
status: "Under Review",
};

export default function VendorApplicationSuccess() {
const [payload, setPayload] =
useState<VendorSuccessPayload>(FALLBACK_PAYLOAD);

useEffect(() => {
const rawData = localStorage.getItem(VENDOR_SUCCESS_STORAGE_KEY);
if (!rawData) return;

try {
const parsed = JSON.parse(rawData) as Partial<VendorSuccessPayload>;
const safePayload: VendorSuccessPayload = {
companyName: parsed.companyName || FALLBACK_PAYLOAD.companyName,
contactPerson: parsed.contactPerson || FALLBACK_PAYLOAD.contactPerson,
phone: parsed.phone || FALLBACK_PAYLOAD.phone,
email: parsed.email || FALLBACK_PAYLOAD.email,
servicesOffered:
parsed.servicesOffered && parsed.servicesOffered.length > 0
? parsed.servicesOffered
: FALLBACK_PAYLOAD.servicesOffered,
serviceCities: parsed.serviceCities || FALLBACK_PAYLOAD.serviceCities,
serviceCounties:
parsed.serviceCounties || FALLBACK_PAYLOAD.serviceCounties,
serviceRadius: parsed.serviceRadius || FALLBACK_PAYLOAD.serviceRadius,
travelOutsideArea:
parsed.travelOutsideArea || FALLBACK_PAYLOAD.travelOutsideArea,
applicationDate:
parsed.applicationDate || FALLBACK_PAYLOAD.applicationDate,
status: parsed.status || "Under Review",
};
setPayload(safePayload);
} catch {
setPayload(FALLBACK_PAYLOAD);
}
}, []);

const applicationDate = useMemo(
() =>
new Date(payload.applicationDate).toLocaleDateString("en-US", {
month: "long",
day: "2-digit",
year: "numeric",
}),
[payload.applicationDate],
);

const visibleServices = payload.servicesOffered.slice(0, 6);
const remainingServices =
payload.servicesOffered.length - visibleServices.length;

return (

   <section className="py-20 lg:py-28 bg-surface-50">
     <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
       {/* ── Hero confirmation card ─────────────────────────────── */}
       <div className="bg-white border border-surface-200 rounded-2xl shadow-card overflow-hidden">
         {/* orange top bar */}
         <div className="h-1 w-full bg-orange" />

         <div className="p-8 md:p-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
           {/* icon */}
           <div className="shrink-0 w-16 h-16 rounded-full bg-success/10 flex items-center justify-center">
             <CheckCircle2 className="w-8 h-8 text-success" />
           </div>


           <div className="flex-1">
             <p className="font-accent text-sm font-semibold text-orange uppercase tracking-widest mb-1">
               Application Received
             </p>
             <h1 className="font-display text-2xl md:text-3xl font-bold text-charcoal leading-snug">
               Thank You! Your Application Has Been Received.
             </h1>
             <p className="mt-2 font-body text-text-muted text-base max-w-2xl">
               We appreciate your interest in partnering with Megafixx Home
               Services LLC. Our team has received your application and will
               review it shortly.
             </p>
           </div>


           {/* decorative envelope illustration */}
           <div className="hidden md:flex shrink-0 w-28 h-28 items-center justify-center rounded-2xl bg-surface-50 border border-surface-200">
             <ClipboardCheck className="w-12 h-12 text-orange opacity-80" />
           </div>
         </div>
       </div>


       {/* ── What Happens Next ──────────────────────────────────── */}
       <div className="bg-white border border-surface-200 rounded-2xl shadow-card p-8 md:p-10">
         <h2 className="font-display text-xl font-bold text-charcoal text-center mb-8">
           What Happens Next?
         </h2>


         <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
           {/* connector line (desktop only) */}
           <div className="hidden md:block absolute top-8 left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] h-px bg-surface-200 z-0" />


           {[
             {
               icon: <ClipboardCheck className="w-5 h-5 text-orange" />,
               step: "1",
               title: "Application Review",
               body: "Our team will review your application and submitted documents within 1–2 business days.",
             },
             {
               icon: <Mail className="w-5 h-5 text-orange" />,
               step: "2",
               title: "You'll Receive an Email",
               body: "We will email you once your application is approved or if we need any additional information.",
             },
             {
               icon: <BriefcaseBusiness className="w-5 h-5 text-orange" />,
               step: "3",
               title: "Start Receiving Work",
               body: "Once approved, you'll gain access to our vendor portal and start receiving work opportunities.",
             },
           ].map(({ icon, step, title, body }) => (
             <div
               key={step}
               className="relative z-10 flex flex-col items-center text-center gap-3"
             >
               {/* icon circle */}
               <div className="w-16 h-16 rounded-full bg-surface-50 border border-surface-200 flex items-center justify-center shadow-sm">
                 {icon}
               </div>
               {/* step badge */}
               <div className="inline-flex items-center gap-1.5">
                 <span className="w-5 h-5 rounded-full bg-orange text-white text-xs font-bold font-accent flex items-center justify-center">
                   {step}
                 </span>
                 <p className="font-display text-sm font-semibold text-charcoal">
                   {title}
                 </p>
               </div>
               <p className="font-body text-sm text-text-muted leading-relaxed">
                 {body}
               </p>
             </div>
           ))}
         </div>
       </div>


       {/* ── Application Summary ────────────────────────────────── */}
       <div className="bg-white border border-surface-200 rounded-2xl shadow-card overflow-hidden">
         {/* header bar */}
         <div className="flex items-center gap-3 px-8 py-5 border-b border-surface-200 bg-surface-50">
           <div className="w-8 h-8 rounded-lg bg-orange/10 flex items-center justify-center">
             <ClipboardCheck className="w-4 h-4 text-orange" />
           </div>
           <h2 className="font-display text-lg font-bold text-charcoal">
             Application Summary
           </h2>
         </div>


         <div className="p-8 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-surface-200">
           {/* col 1 – contact */}
           <div className="pb-8 md:pb-0 md:pr-8 space-y-4">
             {[
               { label: "Business Name", value: payload.companyName },
               { label: "Contact Person", value: payload.contactPerson },
               { label: "Phone", value: payload.phone },
               { label: "Email", value: payload.email },
               { label: "Application Date", value: applicationDate },
             ].map(({ label, value }) => (
               <div key={label}>
                 <p className="font-body text-xs text-text-muted uppercase tracking-wide mb-0.5">
                   {label}
                 </p>
                 <p className="font-body text-sm font-semibold text-charcoal break-words">
                   {value}
                 </p>
               </div>
             ))}


             {/* status badge */}
             <div>
               <p className="font-body text-xs text-text-muted uppercase tracking-wide mb-1.5">
                 Status
               </p>
               <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-success/10 text-success font-accent text-xs font-bold">
                 <span className="w-1.5 h-1.5 rounded-full bg-success" />
                 {payload.status}
               </span>
             </div>
           </div>


           {/* col 2 – services */}
           <div className="py-8 md:py-0 md:px-8">
             <p className="font-body text-xs text-text-muted uppercase tracking-wide mb-3">
               Services Offered
             </p>
             <ul className="space-y-2">
               {visibleServices.map((service) => (
                 <li key={service} className="flex items-start gap-2">
                   <CheckCircle2 className="w-4 h-4 text-success mt-0.5 shrink-0" />
                   <span className="font-body text-sm text-charcoal">
                     {service}
                   </span>
                 </li>
               ))}
             </ul>
             {remainingServices > 0 && (
               <p className="mt-3 font-body text-xs font-semibold text-orange">
                 +{remainingServices} more services
               </p>
             )}
           </div>


           {/* col 3 – coverage */}
           <div className="pt-8 md:pt-0 md:pl-8 space-y-4">
             <p className="font-body text-xs text-text-muted uppercase tracking-wide">
               Coverage Area
             </p>


             {[
               { label: "Primary Cities", value: payload.serviceCities },
               { label: "Counties", value: payload.serviceCounties },
               { label: "Service Radius", value: payload.serviceRadius },
               {
                 label: "Willing to Travel Outside Area?",
                 value: payload.travelOutsideArea,
               },
             ].map(({ label, value }) => (
               <div key={label}>
                 <p className="font-body text-xs font-semibold text-charcoal flex items-center gap-1 mb-0.5">
                   {label === "Primary Cities" && (
                     <MapPin className="w-3 h-3 text-orange" />
                   )}
                   {label}
                 </p>
                 <p className="font-body text-sm text-text-body">{value}</p>
               </div>
             ))}
           </div>
         </div>
       </div>


       {/* ── Important Notes ────────────────────────────────────── */}
       <div className="bg-white border border-surface-200 rounded-2xl shadow-card overflow-hidden">
         <div className="flex items-center gap-3 px-8 py-5 border-b border-surface-200 bg-surface-50">
           <CircleAlert className="w-5 h-5 text-orange" />
           <h2 className="font-display text-base font-bold text-charcoal">
             Important Notes
           </h2>
         </div>
         <ul className="px-8 py-6 space-y-3">
           {[
             "Make sure your contact information is correct so we can reach you.",
             "Approval timelines may vary depending on document verification and operational review.",
             "Submission of an application does not guarantee work assignments or vendor approval.",
             "Approved vendors are selected based on service coverage, responsiveness, compliance, and operational needs.",
           ].map((note) => (
             <li
               key={note}
               className="flex items-start gap-2.5 font-body text-sm text-text-body"
             >
               <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange shrink-0" />
               {note}
             </li>
           ))}
         </ul>
       </div>


       {/* ── Questions ─────────────────────────────────────────── */}
       <div className="bg-white border border-surface-200 rounded-2xl shadow-card p-8 md:p-10 text-center">
         <h2 className="font-display text-xl font-bold text-charcoal">
           Questions?
         </h2>
         <p className="font-body text-text-muted text-sm mt-1 mb-6">
           We're here to help! Contact our vendor team if you have any
           questions.
         </p>


         <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
           <a
             href="tel:+8176622012"
             className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-surface-200 font-body text-sm text-charcoal hover:border-orange hover:text-orange transition-colors"
           >
             <Phone className="w-4 h-4 text-orange" />
             (817) 662-2012
           </a>
           <a
             href="mailto:vendor@megafixx.com"
             className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-surface-200 font-body text-sm text-charcoal hover:border-orange hover:text-orange transition-colors"
           >
             <Mail className="w-4 h-4 text-orange" />
             vendor@megafixxx.com
           </a>
           <a
             href="https://www.megafixxx.com/"
             target="_blank"
             rel="noreferrer"
             className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-surface-200 font-body text-sm text-charcoal hover:border-orange hover:text-orange transition-colors"
           >
             <MapPin className="w-4 h-4 text-orange" />
             www.megafixxx.com
           </a>
         </div>


         <div className="flex items-center justify-center gap-3">
           <Button variant="secondary" asChild>
             <Link href="/vendors">Back to Vendors</Link>
           </Button>
           <Button asChild>
             <Link href="/contact">
               <MessageCircle className="w-4 h-4" />
               Contact Team
             </Link>
           </Button>
         </div>
       </div>
     </div>

   </section>
 );
}
