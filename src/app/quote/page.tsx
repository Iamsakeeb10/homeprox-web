import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Get a Quote | HomeProX Services LLC",
  description:
    "Request a free quote for property maintenance across Texas. Fill out the form and we'll get back to you within 24 hours.",
  path: "/quote",
});

export default function QuotePage() {
  redirect("/contact?tab=quote");
}
