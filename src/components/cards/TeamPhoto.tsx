"use client";

import React, { useState } from "react";
import Image from "next/image";

export function TeamPhoto() {
  const [imgError, setImgError] = useState(false);
  const teamImageUrl = "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80";

  return (
    <div className="relative w-full h-full min-h-[500px] rounded-2xl shadow-xl overflow-hidden">
      {!imgError ? (
        <Image
          src={teamImageUrl}
          alt="MEGAFIXX professional team"
          fill
          className="object-cover"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="w-full h-full bg-surface-100 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-blue/20 flex items-center justify-center">
            <span className="font-display text-5xl font-bold text-blue">M</span>
          </div>
        </div>
      )}
    </div>
  );
}
