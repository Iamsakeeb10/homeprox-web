import { Button } from "@/components/ui/Button";
import { generatePageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = generatePageMetadata({
  title: "404 - Page Not Found | HomeProX Services LLC",
  description: "The page you're looking for doesn't exist.",
  path: "/404",
});

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      {/* Animated Background Element */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-surface-100 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-surface-200 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <div className="mb-8">
          <Image
            src="/images/logo.png"
            alt="HomeProX Services LLC"
            width={150}
            height={45}
            className="h-8 w-auto object-contain mx-auto"
            priority
          />
        </div>
        <h1 className="font-display text-9xl font-bold text-surface-100 mb-4">
          404
        </h1>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-4">
          Page Not Found
        </h2>
        <p className="font-body text-text-muted text-lg mb-8 max-w-md mx-auto">
          The property you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" size="md" asChild>
            <Link href="/">Go Home</Link>
          </Button>
          <Button variant="secondary" size="md" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
