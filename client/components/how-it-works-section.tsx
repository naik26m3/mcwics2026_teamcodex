"use client"

import { MessageCircle, Sparkles, Clock, UserCheck } from "lucide-react"

const steps = [
  {
    icon: MessageCircle,
    step: "01",
    title: "Personality Questions",
    description:
      "AI asks thoughtful questions about your personality, interests, and friendship preferences to understand who you truly are.",
  },
  {
    icon: Sparkles,
    step: "02",
    title: "Smart Matching",
    description:
      "Our AI analyzes your answers and suggests compatible matches based on personality compatibility, shared interests, and communication style.",
  },
  {
    icon: Clock,
    step: "03",
    title: "Temporary Friendship",
    description:
      "Connect anonymously for 2 days. Only basic information is shared — interests, hobbies, and general location. No pressure to reveal more.",
  },
  {
    icon: UserCheck,
    step: "04",
    title: "Decide to Connect",
    description:
      "After 2 days, both sides decide. If you both agree, profiles are revealed and your friendship continues. If not, the connection ends quietly.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-24 lg:py-32">
      {/* Subtle background accent */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.04] blur-[100px]"
        style={{ background: "hsl(75, 100%, 62%)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            How It Works
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl text-balance">
            Four simple steps to{" "}
            <span className="text-primary">meaningful connections.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
            Our process is designed to feel natural and comfortable at every
            stage. Take your time — there is no rush.
          </p>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.step} className="group relative">
              {/* Connector line for desktop */}
              {i < steps.length - 1 && (
                <div className="pointer-events-none absolute right-0 top-16 hidden h-px w-6 translate-x-full bg-border lg:block" aria-hidden="true" />
              )}

              <div className="relative flex h-full flex-col rounded-2xl border border-border/50 bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <span className="font-display text-3xl font-bold text-border">
                    {s.step}
                  </span>
                </div>
                <h3 className="mb-3 font-display text-lg font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
