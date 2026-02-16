"use client";

import { motion } from "framer-motion";
import { Users, Mic2, Layers, CalendarDays, Wrench, Globe } from "lucide-react";
import { EVENT } from "@/lib/data";

const stats = [
  { icon: Users, value: EVENT.stats.attendees, label: "Attendees" },
  { icon: Mic2, value: EVENT.stats.speakers, label: "Speakers" },
  { icon: Layers, value: EVENT.stats.tracks, label: "Tracks" },
  { icon: CalendarDays, value: EVENT.stats.days, label: "Days" },
  { icon: Wrench, value: EVENT.stats.workshops, label: "Workshops" },
  { icon: Globe, value: EVENT.stats.countries, label: "Countries" },
];

export default function StatsSection() {
  return (
    <section className="relative -mt-16 z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl border border-border bg-white p-6 shadow-xl shadow-black/5 sm:p-8"
      >
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent-light">
                <stat.icon className="h-5 w-5 text-accent" />
              </div>
              <span className="font-[family-name:var(--font-display)] text-2xl font-bold text-foreground">
                {stat.value}
              </span>
              <span className="mt-0.5 text-sm text-muted">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
