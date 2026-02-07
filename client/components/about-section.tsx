"use client"

import { Heart, Shield, Brain } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Genuine Friendships",
    description:
      "We help introverts build authentic, meaningful connections — not superficial networks. Every match is designed to create lasting bonds based on shared values and interests.",
  },
  {
    icon: Shield,
    title: "Privacy-First & Judgment-Free",
    description:
      "Your comfort is our priority. Start anonymous, stay private, and only reveal yourself when you're truly ready. No pressure, no timelines, no judgment.",
  },
  {
    icon: Brain,
    title: "AI-Driven Personality Matching",
    description:
      "Our advanced AI understands introvert communication styles and matches you with people who complement your personality, not just share your interests.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Our Mission
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl text-balance">
            Friendship should feel natural,{" "}
            <span className="text-primary">not forced.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
            We believe introverts deserve a space that respects their pace and
            energy. Quietly was built to remove the anxiety of making friends and
            replace it with thoughtful, meaningful connections.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="group rounded-2xl border border-border/50 bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <value.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-3 font-display text-xl font-semibold text-foreground">
                {value.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
