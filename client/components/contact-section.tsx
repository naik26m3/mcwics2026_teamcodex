"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Send } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Info */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              Contact
            </p>
            <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl text-balance">
              Got questions?{" "}
              <span className="text-primary">We are here.</span>
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
              Whether you have feedback, need help, or just want to say hi — our
              team is always ready to listen.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Support email</p>
                  <p className="font-medium text-foreground">
                    hello@quietly.app
                  </p>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex gap-3 pt-4">
                {["X", "IG", "DC", "GH"].map((label) => (
                  <a
                    key={label}
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/50 text-sm font-medium text-muted-foreground transition-all hover:border-primary/30 hover:text-primary"
                    aria-label={label}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-border/50 bg-card p-8">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-5"
            >
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Name
                </label>
                <Input
                  id="contact-name"
                  placeholder="Your name"
                  className="rounded-xl border-border/50 bg-background"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Email
                </label>
                <Input
                  id="contact-email"
                  type="email"
                  placeholder="you@example.com"
                  className="rounded-xl border-border/50 bg-background"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <Textarea
                  id="contact-message"
                  placeholder="Tell us what's on your mind..."
                  rows={5}
                  className="rounded-xl border-border/50 bg-background"
                />
              </div>
              <Button className="group w-full rounded-xl font-medium" size="lg">
                Send Message
                <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
