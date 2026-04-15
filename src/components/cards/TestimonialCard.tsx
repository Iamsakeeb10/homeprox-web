"use client";

import { Testimonial } from "@/types";
import { Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

function getInitials(name: string): string {
  const parts = name.split(" ");
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  }
  return name.substring(0, 2).toUpperCase();
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const [imgError, setImgError] = useState(false);
  const initials = getInitials(testimonial.name);

  return (
    <div className="bg-white border border-surface-200 rounded-2xl shadow-card p-4 sm:p-6 h-full hover:border-teal/40 hover:shadow-card-hover transition-all duration-300 flex flex-col">
      {/* Author Info — moved to top */}
      <div className="flex items-center gap-3 mb-4">
        {/* Avatar */}
        <div className="flex-shrink-0 w-12 h-12 relative">
          {!imgError ? (
            <Image
              src={testimonial.avatar}
              alt={testimonial.name}
              width={48}
              height={48}
              className="w-12 h-12 rounded-full object-cover ring-2 ring-teal/25"
              style={{ aspectRatio: "1 / 1" }}
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-surface-100 flex items-center justify-center ring-2 ring-teal/25">
              <span className="font-display text-sm font-bold text-charcoal">
                {initials}
              </span>
            </div>
          )}
        </div>

        {/* Name and Role */}
        <div className="flex-grow">
          <p className="font-body text-charcoal font-semibold">
            {testimonial.name}
          </p>
          <p className="font-body text-text-muted text-sm">
            {testimonial.role}
            {testimonial.company && `, ${testimonial.company}`}
          </p>
        </div>
      </div>

      {/* Stars — yellow accent */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className="w-5 h-5 text-yellow-400 fill-yellow-400"
            aria-hidden="true"
          />
        ))}
      </div>

      {/* Quote with left border accent */}
      <p className="font-body text-sm sm:text-base text-text-muted italic border-l-2 border-teal/30 pl-3 flex-grow">
        &quot;{testimonial.content}&quot;
      </p>
    </div>
  );
}
