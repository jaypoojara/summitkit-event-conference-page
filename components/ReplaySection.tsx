"use client";

import { motion } from "framer-motion";
import { Play, Clock, User } from "lucide-react";
import { REPLAYS } from "@/lib/data";

const gradients = [
  "from-cyan-600 to-teal-700",
  "from-emerald-600 to-teal-600",
  "from-amber-600 to-orange-600",
  "from-sky-600 to-cyan-600",
  "from-teal-600 to-emerald-600",
  "from-blue-600 to-cyan-600",
];

export default function ReplaySection() {
  return (
    <section className="grain-overlay relative overflow-hidden bg-surface-dark py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-0 h-[300px] w-[300px] rounded-full bg-accent/10 blur-[100px]" />
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
            Post-Event
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-white sm:text-4xl">
            Missed a Session? Watch the Replay
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/50">
            All main stage talks and select workshops are recorded and available to ticket holders.
            General tickets get 30-day access, VIP gets lifetime access.
          </p>
        </motion.div>

        {/* Replays Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REPLAYS.map((replay, i) => (
            <motion.div
              key={replay.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="relative mb-3 aspect-video overflow-hidden rounded-xl">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${gradients[i % gradients.length]} opacity-80 transition-all group-hover:opacity-90`}
                />
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-transform group-hover:scale-110">
                    <Play className="ml-0.5 h-5 w-5 text-white" fill="white" />
                  </div>
                </div>
                <div className="absolute right-2 bottom-2 rounded-md bg-black/60 px-2 py-0.5 text-xs font-medium text-white backdrop-blur-sm">
                  {replay.duration}
                </div>
              </div>

              {/* Info */}
              <h4 className="font-[family-name:var(--font-display)] text-base font-semibold text-white transition-colors group-hover:text-accent">
                {replay.title}
              </h4>
              <div className="mt-1 flex items-center gap-3 text-sm text-white/40">
                <span className="flex items-center gap-1">
                  <User className="h-3 w-3" />
                  {replay.speaker}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {replay.duration}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/10"
          >
            Browse All Recordings →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
