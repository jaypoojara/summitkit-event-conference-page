"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, ArrowRight } from "lucide-react";
import { EVENT } from "@/lib/data";
import CountdownTimer from "./CountdownTimer";

export default function HeroSection() {
  return (
    <section className="grain-overlay relative flex min-h-screen items-center overflow-hidden bg-surface-dark">
      {/* Gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-cyan-400/20 blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-teal-400/15 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-400/10 blur-[100px]" />
      </div>

      {/* Grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent-warm/30 bg-accent-warm/10 px-4 py-1.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-warm opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-warm" />
            </span>
            <span className="text-sm font-medium text-accent-warm">
              Early Bird Tickets Available — 40% Off
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-[family-name:var(--font-display)] text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            {EVENT.name}
            <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-teal-300 to-amber-300 bg-clip-text text-transparent">
              {EVENT.year}
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-white/60 sm:text-xl"
          >
            {EVENT.description}
          </motion.p>

          {/* Date & Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
          >
            <div className="flex items-center gap-2 text-white/70">
              <Calendar className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium">{EVENT.dates.display}</span>
            </div>
            <div className="hidden h-1 w-1 rounded-full bg-white/30 sm:block" />
            <div className="flex items-center gap-2 text-white/70">
              <MapPin className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium">
                {EVENT.location.venue}, {EVENT.location.city}
              </span>
            </div>
          </motion.div>

          {/* Countdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex justify-center"
          >
            <CountdownTimer targetDate={EVENT.dates.start} />
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <a
              href="#tickets"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:bg-accent-hover hover:shadow-xl hover:shadow-accent/30"
            >
              Get Your Ticket
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#schedule"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/10"
            >
              View Schedule
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade — refined multi-stop transition */}
      <div className="absolute right-0 bottom-0 left-0 h-48 bg-gradient-to-t from-background via-surface-dark/40 to-transparent" />
    </section>
  );
}
