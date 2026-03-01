import type { Metadata } from "next";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://megafixxhomeservices.com";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | MEGAFIXX Home Services LLC",
    default: "MEGAFIXX Home Services LLC | Texas Statewide Property Maintenance"
  },
  description: "Professional property maintenance services across Texas. Serving property managers, investors, banks, and REO departments statewide.",
  keywords: [
    "property maintenance",
    "Texas property services",
    "property management",
    "REO maintenance",
    "property repairs",
    "Texas statewide",
    "property cleaning",
    "gutter cleaning",
    "drywall repair",
    "landscaping services"
  ],
  authors: [{ name: "MEGAFIXX Home Services LLC" }],
  creator: "MEGAFIXX Home Services LLC",
  publisher: "MEGAFIXX Home Services LLC",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "MEGAFIXX Home Services LLC",
    title: "MEGAFIXX Home Services LLC | Texas Statewide Property Maintenance",
    description: "Professional property maintenance services across Texas. Serving property managers, investors, banks, and REO departments statewide.",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "MEGAFIXX Home Services LLC"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "MEGAFIXX Home Services LLC | Texas Statewide Property Maintenance",
    description: "Professional property maintenance services across Texas. Serving property managers, investors, banks, and REO departments statewide.",
    images: [`${SITE_URL}/og-image.jpg`]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export function generatePageMetadata({
  title,
  description,
  path
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    ...defaultMetadata,
    title,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      ...defaultMetadata.openGraph,
      url,
      title,
      description
    },
    twitter: {
      ...defaultMetadata.twitter,
      title,
      description
    }
  };
}
