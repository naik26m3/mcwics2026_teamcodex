"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-card p-12 text-center md:p-20">
          {/* Background glow */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.08] blur-[80px]"
            style={{ background: "hsl(75, 100%, 62%)" }}
            aria-hidden="true"
          />

          {/* Halftone dots decoration */}
          <div className="pointer-events-none absolute -right-4 -top-4 grid grid-cols-6 gap-3 opacity-20" aria-hidden="true">
            {Array.from({ length: 36 }).map((_, i) => (
              <div
                key={i}
                className="h-1.5 w-1.5 rounded-full bg-primary"
              />
            ))}
          </div>

          <div className="relative">
            <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl text-balance">
              Start your friendship journey{" "}
              <span className="text-primary">today.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
              Join thousands of introverts who have already found their people.
              No rush, no pressure — just real connections waiting to happen.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="group rounded-full px-8 text-base font-medium"
              >
                Join Now
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 text-base font-medium bg-transparent"
              >
                Create Account
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
