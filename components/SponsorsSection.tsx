"use client";

import { motion } from "framer-motion";
import { ArrowRight, Crown, Award, Medal } from "lucide-react";
import { SPONSORS } from "@/lib/data";

const goldGradients = [
  "from-amber-400 to-yellow-500",
  "from-yellow-400 to-amber-500",
  "from-orange-400 to-amber-500",
];

const silverGradients = [
  "from-slate-300 to-slate-400",
  "from-gray-300 to-slate-400",
  "from-zinc-300 to-gray-400",
  "from-slate-300 to-gray-400",
];

const bronzeGradients = [
  "from-orange-300 to-amber-400",
  "from-amber-300 to-orange-400",
  "from-yellow-400 to-orange-300",
  "from-orange-400 to-yellow-300",
  "from-amber-400 to-yellow-400",
  "from-orange-300 to-amber-300",
];

export default function SponsorsSection() {
  const gold = SPONSORS.filter((s) => s.tier === "gold");
  const silver = SPONSORS.filter((s) => s.tier === "silver");
  const bronze = SPONSORS.filter((s) => s.tier === "bronze");

  return (
    <section id="sponsors" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center"
        >
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
            Our Sponsors
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Backed by Industry Leaders
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            These companies make TechForward possible. Meet them at their booths —
            they&apos;re hiring and building remarkable products.
          </p>
        </motion.div>

        {/* ===== GOLD TIER ===== */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-8 flex items-center gap-4"
          >
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-amber-400 to-yellow-500 shadow-md shadow-amber-200/50">
                <Crown className="h-4 w-4 text-white" />
              </div>
              <span className="font-[family-name:var(--font-display)] text-lg font-bold text-foreground">
                Gold Partners
              </span>
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-amber-200 to-transparent" />
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {gold.map((sponsor, i) => {
              const initials = sponsor.name
                .replace(/([a-z])([A-Z])/g, "$1 $2")
                .split(" ")
                .map((w) => w[0])
                .join("")
                .slice(0, 2);
              return (
                <motion.a
                  key={sponsor.name}
                  href="#"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group relative block"
                >
                  {/* Outer glow on hover */}
                  <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-b from-amber-300 to-amber-100 opacity-0 blur transition-opacity duration-500 group-hover:opacity-60" />

                  <div className="relative overflow-hidden rounded-2xl border border-amber-200/70 bg-white transition-all duration-300 group-hover:border-amber-300 group-hover:shadow-xl group-hover:shadow-amber-100/40">
                    {/* Top accent bar */}
                    <div className={`h-1.5 bg-gradient-to-r ${goldGradients[i % 3]}`} />

                    <div className="flex flex-col items-center px-8 pt-8 pb-7">
                      {/* Logo circle */}
                      <div className={`mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${goldGradients[i % 3]} shadow-lg shadow-amber-200/50 transition-transform duration-300 group-hover:scale-105`}>
                        <span className="font-[family-name:var(--font-display)] text-2xl font-bold text-white drop-shadow-sm">
                          {initials}
                        </span>
                      </div>

                      <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-foreground">
                        {sponsor.name}
                      </h3>
                      <p className="mt-1 text-sm text-muted">Gold Partner</p>

                      {/* Hover CTA */}
                      <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-amber-600 opacity-0 transition-all duration-300 group-hover:opacity-100">
                        Visit Booth
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* ===== SILVER TIER ===== */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-8 flex items-center gap-4"
          >
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-slate-300 to-slate-400 shadow-md shadow-slate-200/50">
                <Award className="h-4 w-4 text-white" />
              </div>
              <span className="font-[family-name:var(--font-display)] text-lg font-bold text-foreground">
                Silver Partners
              </span>
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent" />
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {silver.map((sponsor, i) => {
              const initials = sponsor.name
                .replace(/([a-z])([A-Z])/g, "$1 $2")
                .split(" ")
                .map((w) => w[0])
                .join("")
                .slice(0, 2);
              return (
                <motion.a
                  key={sponsor.name}
                  href="#"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group relative block overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-100/60"
                >
                  {/* Top accent bar */}
                  <div className={`h-1 bg-gradient-to-r ${silverGradients[i % 4]}`} />

                  <div className="flex items-center gap-4 px-5 py-5">
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${silverGradients[i % 4]} shadow-sm`}>
                      <span className="font-[family-name:var(--font-display)] text-sm font-bold text-white">
                        {initials}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-[family-name:var(--font-display)] text-base font-bold text-foreground transition-colors group-hover:text-accent">
                        {sponsor.name}
                      </h3>
                      <p className="text-xs text-muted">Silver Partner</p>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* ===== BRONZE TIER ===== */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-8 flex items-center gap-4"
          >
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-orange-300 to-amber-400 shadow-md shadow-orange-100/50">
                <Medal className="h-4 w-4 text-white" />
              </div>
              <span className="font-[family-name:var(--font-display)] text-lg font-bold text-foreground">
                Bronze Partners
              </span>
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-orange-200 to-transparent" />
          </motion.div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {bronze.map((sponsor, i) => (
              <motion.a
                key={sponsor.name}
                href="#"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="group flex flex-col items-center gap-2.5 rounded-xl border border-orange-100 bg-white px-4 py-5 transition-all duration-300 hover:border-orange-200 hover:shadow-md hover:shadow-orange-50"
              >
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${bronzeGradients[i % 6]} shadow-sm transition-transform duration-300 group-hover:scale-110`}>
                  <span className="text-sm font-bold text-white">
                    {sponsor.name.charAt(0)}
                  </span>
                </div>
                <span className="font-[family-name:var(--font-display)] text-center text-sm font-semibold text-foreground/70 transition-colors group-hover:text-foreground">
                  {sponsor.name}
                </span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* ===== BECOME A SPONSOR CTA ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative overflow-hidden rounded-2xl bg-surface-dark p-10 sm:p-14">
            {/* BG decoration */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-cyan-400/10 blur-[80px]" />
              <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-amber-400/10 blur-[80px]" />
            </div>

            <div className="relative z-10 flex flex-col items-center gap-8 text-center lg:flex-row lg:text-left">
              <div className="flex-1">
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-white sm:text-3xl">
                  Want to Sponsor TechForward?
                </h3>
                <p className="mt-3 max-w-xl text-white/60">
                  Put your brand in front of 2,000+ engineers and tech leaders. Packages start
                  at $2,500 and include booth space, stage time, and direct attendee access.
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-surface-dark shadow-lg transition-all hover:bg-white/90 hover:shadow-xl"
                >
                  View Packages
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/30 hover:bg-white/5"
                >
                  Download Prospectus
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
