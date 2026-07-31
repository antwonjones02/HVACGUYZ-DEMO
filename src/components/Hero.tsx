"use client";

import Image from "next/image";
import { PHONE, PHONE_HREF } from "@/lib/constants";
import { openScheduler } from "@/components/AiScheduler";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-hvac-atlanta.png"
          alt="Professional HVAC technician servicing equipment in Atlanta"
          fill
          priority
          className="hero-image object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(26,34,41,0.85) 0%, rgba(26,34,41,0.55) 35%, transparent 65%), linear-gradient(to right, rgba(26,34,41,0.7) 0%, transparent 50%)",
          }}
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-6 pb-16 pt-32 lg:px-10 lg:pb-24">
        <div className="mx-auto w-full max-w-7xl">
          <div className="hero-content max-w-2xl">
            <p className="font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
              HVAC Guyz ATL
            </p>
            <h1 className="mt-5 font-display text-2xl font-bold leading-tight tracking-tight text-white/95 sm:text-3xl lg:text-4xl">
              Elevate Your Comfort Today
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/80 sm:text-lg">
              Premier heating and cooling for Atlanta homes and businesses.
              Expert service, honest pricing, and rapid response when you need
              it most.
            </p>
            <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
              <button
                type="button"
                onClick={() => openScheduler()}
                className="btn-press inline-flex items-center justify-center bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-accent-hover"
              >
                Schedule Service
              </button>
              <a
                href={PHONE_HREF}
                className="text-sm font-semibold uppercase tracking-wider text-white underline-offset-4 transition-colors hover:text-accent-muted hover:underline"
              >
                Call {PHONE}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
