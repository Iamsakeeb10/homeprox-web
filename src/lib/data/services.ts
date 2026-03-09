import { Service } from "@/types";

export const services: Service[] = [
  {
    id: "maintenance-plumbing",
    title: "General Property Maintenance & Minor Plumbing",
    description: "Prevent costly repairs with routine and responsive property maintenance. We keep residential and commercial properties operating efficiently year-round.",
    icon: "Wrench",
    image: "/images/services/service-maintenance.jpg",
    slug: "general-maintenance",
    features: [
      "Leaking faucet repairs",
      "Running toilet fixes",
      "Clogged drain service",
      "Fixture replacement",
      "Minor plumbing maintenance",
      "General repair work"
    ]
  },
  {
    id: "gutter-cleaning",
    title: "Gutter Cleaning & Preventative Maintenance",
    description: "Protect your property from water damage and foundation issues. Texas weather demands proactive property care.",
    icon: "Droplets",
    image: "/images/hero/hero-card-gutter.jpg",
    slug: "gutter-cleaning",
    features: [
      "Gutter debris removal",
      "Downspout clearing",
      "Drainage inspection",
      "Seasonal preventative maintenance"
    ]
  },
  {
    id: "drywall-painting",
    title: "Drywall Repair & Interior Painting",
    description: "Maintain a clean, professional interior. Ideal for rental turnovers and investment properties.",
    icon: "Paintbrush",
    image: "/images/hero/hero-card-painting.jpg",
    slug: "drywall-painting",
    features: [
      "Drywall patching",
      "Water damage repair",
      "Interior painting",
      "Texture matching",
      "Rental property refresh"
    ]
  },
  {
    id: "property-cleaning",
    title: "Pest control",
    description: "Professional cleaning solutions for landlords, commercial spaces, and property managers across Texas.",
    icon: "Sparkles",
    image: "/images/services/service-cleaning.jpg",
    slug: "property-cleaning",
    features: [
      "Move-in / move-out cleaning",
      "Deep cleaning",
      "Post-renovation cleaning",
      "Routine maintenance cleaning"
    ]
  },
  {
    id: "landscaping-exterior",
    title: "Landscaping & Lawn Care",
    description: "Improve curb appeal and long-term property value with professional exterior maintenance.",
    icon: "Leaf",
    image: "/images/services/service-landscaping.jpg",
    slug: "landscaping",
    features: [
      "Lawn maintenance",
      "Hedge trimming",
      "Seasonal yard cleanups",
      "Exterior upkeep services"
    ]
  },
  {
    id: "siding-exterior-repairs",
    title: "Siding & Exterior Repairs",
    description: "Durable solutions designed for Texas conditions. Protect your investment with professional exterior repair.",
    icon: "Home",
    image: "/images/services/service-siding.jpg",
    slug: "siding-exterior",
    features: [
      "Siding repair",
      "Panel replacement",
      "Storm damage repair",
      "Exterior structural maintenance"
    ]
  },
  {
    id: "property-cleanouts",
    title: "Property Cleanouts & Debris Removal",
    description: "Fast, reliable cleanout service across Texas for rental turnovers, foreclosures, and general junk removal.",
    icon: "Trash2",
    image: "/images/services/service-cleanout.jpg",
    slug: "property-cleanouts",
    features: [
      "Full property cleanouts",
      "Furniture & debris removal",
      "Garage & shed clearing",
      "Estate cleanouts",
      "Junk hauling"
    ]
  }
];
