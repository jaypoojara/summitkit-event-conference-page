"use client";

import { motion } from "framer-motion";
import { Users, MessageCircle, Handshake, QrCode } from "lucide-react";

const features = [
  {
    icon: QrCode,
    title: "Smart Badges",
    description:
      "NFC-enabled badges let you exchange contact info with a tap. No more fumbling with business cards.",
  },
  {
    icon: MessageCircle,
    title: "Event App Chat",
    description:
      "Connect with attendees before, during, and after the event. Join interest-based channels and DM speakers directly.",
  },
  {
    icon: Handshake,
    title: "1-on-1 Matchmaking",
    description:
      "Our AI-powered matchmaking pairs you with attendees who share your interests and goals. Book 15-minute meetings through the app.",
  },
  {
    icon: Users,
    title: "Community Tables",
    description:
      "Themed lunch tables on Day 2 — sit with people interested in the same topics. From AI to open source to career growth.",
  },
];

export default function NetworkingSection() {
  return (
    <section className="grain-overlay relative overflow-hidden bg-surface-dark py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-40 left-1/3 h-[400px] w-[400px] rounded-full bg-pink-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
              Networking
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-white sm:text-4xl">
              More Than Just Talks
            </h2>
            <p className="mt-4 text-white/50">
              The best ideas happen in the hallways. We&apos;ve designed every aspect of the event
              to help you make connections that matter — from smart badges to AI matchmaking.
            </p>

            <div className="mt-10 space-y-6">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  className="flex gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <feature.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-base font-semibold text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm text-white/50">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual - Attendee Directory Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl border border-white/10 bg-surface-dark-secondary p-6">
              <div className="mb-4 flex items-center justify-between">
                <h4 className="text-sm font-semibold text-white">Attendee Directory</h4>
                <span className="rounded-full bg-accent/10 px-2 py-0.5 text-xs text-accent">
                  2,000+ profiles
                </span>
              </div>

              {/* Mock Directory Entries */}
              {[
                { initials: "AK", name: "Anna Kim", role: "Staff Engineer", company: "Meta", interest: "AI/ML" },
                { initials: "RJ", name: "Raj Patel", role: "Engineering Manager", company: "Shopify", interest: "Platform" },
                { initials: "LW", name: "Lena Weber", role: "Founding Engineer", company: "Startup", interest: "Web3" },
                { initials: "TC", name: "Tom Chen", role: "Senior SRE", company: "DataDog", interest: "Observability" },
                { initials: "MN", name: "Maya Nakamura", role: "Product Designer", company: "Figma", interest: "Design Systems" },
              ].map((person, i) => (
                <div
                  key={person.name}
                  className={`flex items-center gap-3 py-3 ${
                    i !== 4 ? "border-b border-white/5" : ""
                  }`}
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent/20 to-purple-500/20 text-xs font-bold text-accent">
                    {person.initials}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-white/80">
                      {person.name}
                    </p>
                    <p className="truncate text-xs text-white/40">
                      {person.role} at {person.company}
                    </p>
                  </div>
                  <span className="rounded-full bg-white/5 px-2 py-0.5 text-xs text-white/40">
                    {person.interest}
                  </span>
                </div>
              ))}

              <button className="mt-4 w-full rounded-lg border border-white/10 py-2.5 text-sm font-medium text-white/50 transition-all hover:border-white/20 hover:text-white/70">
                Browse Full Directory →
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
