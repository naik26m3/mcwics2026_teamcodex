"use client"

import {
  Sparkles,
  EyeOff,
  ShieldCheck,
  Coffee,
  HeartHandshake,
  Lock,
} from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Matching",
    description:
      "Smart algorithms that understand introvert personalities and find your perfect friendship match.",
  },
  {
    icon: EyeOff,
    title: "Anonymous First Interactions",
    description:
      "Start every connection anonymously. Share only what you are comfortable with, when you are ready.",
  },
  {
    icon: ShieldCheck,
    title: "Safe Environment",
    description:
      "Moderated community with strict anti-harassment policies to ensure every interaction feels secure.",
  },
  {
    icon: Coffee,
    title: "Designed for Introverts",
    description:
      "Every feature was built with introvert needs in mind — from low-pressure chats to quiet conversation starters.",
  },
  {
    icon: HeartHandshake,
    title: "No Pressure Socializing",
    description:
      "Take conversations at your own speed. No read receipts, no online status, no social pressure.",
  },
  {
    icon: Lock,
    title: "Privacy Protection",
    description:
      "End-to-end encryption, minimal data collection, and full control over your personal information.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Features
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl text-balance">
            Everything you need,{" "}
            <span className="text-primary">nothing you do not.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
            We stripped away the noise and built only what matters for meaningful
            introvert-friendly connections.
          </p>
        </div>

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Subtle corner glow */}
              <div
                className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-20"
                style={{ background: "hsl(75, 100%, 62%)" }}
                aria-hidden="true"
              />

              <div className="relative">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
