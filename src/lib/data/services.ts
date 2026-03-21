import { Service } from "@/types";

export const services: Service[] = [
  {
    id: "maintenance-plumbing",
    title: "General Property Maintenance & Minor Plumbing",
    description:
      "Avoid expensive restoration with proactive and responsive maintenance. We maintain residential and commercial properties in peak condition year after year.",
    icon: "Wrench",
    image: "/images/services/service-maintenance.jpg",
    slug: "general-maintenance",
    features: [
      "Leaking faucet repairs",
      "Running toilet fixes",
      "Clogged drain service",
      "Fixture replacement",
      "Minor plumbing maintenance",
      "General repair work",
    ],
  },
  {
    id: "gutter-cleaning",
    title: "Gutter Cleaning & Preventative Maintenance",
    description:
      "Safeguard your property against water damage and structural problems. Texas climate demands active property protection.",
    icon: "Droplets",
    image: "/images/hero/gutter-cleaning.jpg",
    slug: "gutter-cleaning",
    features: [
      "Gutter debris removal",
      "Downspout clearing",
      "Drainage inspection",
      "Seasonal preventative maintenance",
    ],
  },
  {
    id: "drywall-painting",
    title: "Drywall Repair & Interior Painting",
    description:
      "Maintain professional-grade interior conditions. Perfect for property turnovers and investment asset upgrades.",
    icon: "Paintbrush",
    image: "/images/hero/hero-card-wall-painting-2.jpg",
    slug: "drywall-painting",
    features: [
      "Drywall patching",
      "Water damage repair",
      "Interior painting",
      "Texture matching",
      "Rental property refresh",
    ],
  },
  {
    id: "property-cleaning",
    title: "Pest control",
    description:
      "Specialized cleaning services for property managers, commercial operators, and real estate professionals statewide.",
    icon: "Sparkles",
    image: "/images/services/pest-control.jpg",
    slug: "property-cleaning",
    features: [
      "Move-in / move-out cleaning",
      "Deep cleaning",
      "Post-renovation cleaning",
      "Routine maintenance cleaning",
    ],
  },
  {
    id: "landscaping-exterior",
    title: "Landscaping & Lawn Care",
    description:
      "Enhance visual appeal and build long-term property equity with strategic exterior maintenance.",
    icon: "Leaf",
    image: "/images/services/service-landscaping.jpg",
    slug: "landscaping",
    features: [
      "Lawn maintenance",
      "Hedge trimming",
      "Seasonal yard cleanups",
      "Exterior upkeep services",
    ],
  },
  {
    id: "siding-exterior-repairs",
    title: "Siding & Exterior Repairs",
    description:
      "Resilient restoration engineered for Texas environments. Protect and maintain your investment with expert exterior care.",
    icon: "Home",
    image: "/images/services/siding-repair.jpg",
    slug: "siding-exterior",
    features: [
      "Siding repair",
      "Panel replacement",
      "Storm damage repair",
      "Exterior structural maintenance",
    ],
  },
  {
    id: "property-cleanouts",
    title: "Property Cleanouts & Debris Removal",
    description:
      "Dependable and efficient cleanout service throughout Texas for property transitions, bank-owned assets, and general junk removal.",
    icon: "Trash2",
    image: "/images/services/service-cleanout.jpg",
    slug: "property-cleanouts",
    features: [
      "Full property cleanouts",
      "Furniture & debris removal",
      "Garage & shed clearing",
      "Estate cleanouts",
      "Junk hauling",
    ],
  },
];
