"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Calendar, MapPin } from "lucide-react";
import Link from "next/link";

export default function CheckoutSuccess() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-surface-dark px-4">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 h-[400px] w-[400px] rounded-full bg-accent/15 blur-[120px]" />
        <div className="absolute right-1/3 bottom-1/4 h-[300px] w-[300px] rounded-full bg-teal-400/10 blur-[100px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-lg text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent/20"
        >
          <CheckCircle className="h-10 w-10 text-accent" />
        </motion.div>

        <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold text-white sm:text-4xl">
          You&apos;re In!
        </h1>
        <p className="mt-3 text-lg text-white/60">
          Your ticket to TechForward Summit 2026 is confirmed. Check your email for the receipt
          and ticket details.
        </p>

        <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center justify-center gap-6 text-sm text-white/50">
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-accent" />
              March 15–17, 2026
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-accent" />
              San Francisco, CA
            </span>
          </div>
        </div>

        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-hover"
        >
          Back to Homepage
          <ArrowRight className="h-4 w-4" />
        </Link>
      </motion.div>
    </div>
  );
}
