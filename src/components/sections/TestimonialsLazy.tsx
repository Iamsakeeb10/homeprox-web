"use client";

import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/Skeleton";

// Loading fallback component
const TestimonialsSkeleton = () => (
  <section className="py-20 lg:py-28 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <Skeleton width="100%" height={60} variant="text" className="max-w-2xl mx-auto mb-4" />
        <Skeleton width="60%" height={40} variant="text" className="max-w-md mx-auto" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} height={300} variant="card" />
        ))}
      </div>
    </div>
  </section>
);

// Dynamically import Testimonials with SSR disabled
export const TestimonialsLazy = dynamic(
  () => import("@/components/sections/Testimonials").then((mod) => ({ default: mod.Testimonials })),
  {
    ssr: false,
    loading: () => <TestimonialsSkeleton />
  }
);
