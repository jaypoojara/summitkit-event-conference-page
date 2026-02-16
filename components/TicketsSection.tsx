"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { TICKETS } from "@/lib/data";

export default function TicketsSection() {
  return (
    <section
      id="tickets"
      className="grain-overlay relative overflow-hidden bg-surface-dark py-24 sm:py-32"
    >
      {/* Gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 h-[400px] w-[400px] rounded-full bg-accent/15 blur-[120px]" />
        <div className="absolute right-1/4 bottom-0 h-[300px] w-[300px] rounded-full bg-teal-400/10 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
            Tickets
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-white sm:text-4xl">
            Invest in Your Growth
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/50">
            Every ticket includes three full days of content, meals, and networking. Choose the
            experience that fits your goals.
          </p>
        </motion.div>

        {/* Tickets Grid */}
        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-3">
          {TICKETS.map((ticket, i) => (
            <motion.div
              key={ticket.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex flex-col rounded-2xl border p-6 sm:p-8 ${
                ticket.highlighted
                  ? "border-accent bg-gradient-to-b from-accent/10 to-surface-dark-secondary shadow-lg shadow-accent/10"
                  : "border-white/10 bg-surface-dark-secondary"
              }`}
            >
              {/* Badge */}
              {ticket.badge && (
                <div
                  className={`absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${
                    ticket.highlighted
                      ? "bg-accent text-white"
                      : "bg-accent-warm text-surface-dark"
                  }`}
                >
                  {ticket.highlighted && <Sparkles className="h-3 w-3" />}
                  {ticket.badge}
                </div>
              )}

              {/* Name & Price */}
              <div className="mb-6">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-white">
                  {ticket.name}
                </h3>
                <p className="mt-1 text-sm text-white/50">{ticket.description}</p>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-[family-name:var(--font-display)] text-4xl font-bold text-white">
                    ${ticket.price}
                  </span>
                  {ticket.originalPrice && (
                    <span className="text-lg text-white/30 line-through">
                      ${ticket.originalPrice}
                    </span>
                  )}
                </div>
              </div>

              {/* Features */}
              <ul className="mb-8 flex-1 space-y-3">
                {ticket.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        ticket.highlighted ? "text-accent" : "text-emerald-400"
                      }`}
                    />
                    <span className="text-sm text-white/70">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#"
                className={`flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition-all ${
                  ticket.highlighted
                    ? "bg-accent text-white shadow-lg shadow-accent/25 hover:bg-accent-hover hover:shadow-xl hover:shadow-accent/30"
                    : "border border-white/20 bg-white/5 text-white hover:border-white/30 hover:bg-white/10"
                }`}
              >
                {ticket.cta}
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Guarantee */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center text-sm text-white/40"
        >
          Full refund available up to 30 days before the event. Group discounts available for
          teams of 5+.
        </motion.p>
      </div>
    </section>
  );
}
