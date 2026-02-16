"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { EVENT } from "@/lib/data";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent via-cyan-700 to-teal-700 p-10 text-center sm:p-16"
        >
          {/* Background decoration */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
          </div>

          <div className="relative z-10">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Ready to Join 2,000+ Engineers?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
              Three days of learning, networking, and inspiration. Early Bird pricing won&apos;t last
              forever — secure your spot today.
            </p>

            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <div className="flex items-center gap-2 text-white/70">
                <Calendar className="h-4 w-4" />
                <span className="text-sm font-medium">{EVENT.dates.display}</span>
              </div>
              <div className="hidden h-1 w-1 rounded-full bg-white/30 sm:block" />
              <div className="flex items-center gap-2 text-white/70">
                <MapPin className="h-4 w-4" />
                <span className="text-sm font-medium">
                  {EVENT.location.venue}, {EVENT.location.city}
                </span>
              </div>
            </div>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="#tickets"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-accent shadow-lg transition-all hover:bg-white/90 hover:shadow-xl"
              >
                Get Your Ticket Now
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#schedule"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10"
              >
                Explore the Schedule
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
