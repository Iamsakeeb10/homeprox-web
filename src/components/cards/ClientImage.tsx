"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Building2,
  Landmark,
  KeyRound,
  TrendingUp
} from "lucide-react";
import { ClientType } from "@/types";

// Icon mapping for client types
const clientIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2,
  Landmark,
  KeyRound,
  TrendingUp
};

interface ClientImageProps {
  client: ClientType;
}

export function ClientImage({ client }: ClientImageProps) {
  const [imgError, setImgError] = useState(false);
  const IconComponent = clientIconMap[client.icon] || Building2;

  return (
    <div className="relative w-full h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl">
      {!imgError ? (
        <Image
          src={client.image}
          alt={client.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="w-full h-full bg-surface-100 flex items-center justify-center">
          <IconComponent className="w-16 h-16 text-blue" aria-hidden="true" />
        </div>
      )}
    </div>
  );
}
