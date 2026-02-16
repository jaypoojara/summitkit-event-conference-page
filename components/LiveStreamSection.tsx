"use client";

import { motion } from "framer-motion";
import { Play, Wifi, MessageSquare, Globe, Monitor } from "lucide-react";

export default function LiveStreamSection() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Video Preview */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-surface-dark">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-purple-500/10 to-accent-warm/10" />

              {/* Grid pattern */}
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                }}
              />

              {/* Play Button */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent shadow-lg shadow-accent/30 transition-transform hover:scale-105">
                  <Play className="ml-1 h-6 w-6 text-white" fill="white" />
                </div>
                <p className="font-[family-name:var(--font-display)] text-lg font-semibold text-white">
                  Watch Live
                </p>
                <p className="text-sm text-white/50">Main Stage Stream Preview</p>
              </div>

              {/* Live Badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-red-500/90 px-3 py-1 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
                </span>
                <span className="text-xs font-semibold text-white">LIVE</span>
              </div>

              {/* Viewer count */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-black/40 px-3 py-1 backdrop-blur-sm">
                <Monitor className="h-3 w-3 text-white/70" />
                <span className="text-xs font-medium text-white/70">1.2K watching</span>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
              Virtual Attendance
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-foreground sm:text-4xl">
              Can&apos;t Make It In Person?
            </h2>
            <p className="mt-4 text-muted">
              Join the summit from anywhere. All main stage sessions are streamed live with
              real-time chat, Q&A, and networking — included with every ticket.
            </p>

            <div className="mt-8 space-y-5">
              {[
                {
                  icon: Wifi,
                  title: "HD Live Streaming",
                  description: "All main stage sessions broadcast in 1080p with multi-camera angles.",
                },
                {
                  icon: MessageSquare,
                  title: "Real-time Q&A",
                  description: "Submit questions to speakers and vote on the best ones from the audience.",
                },
                {
                  icon: Globe,
                  title: "Virtual Networking",
                  description: "Join breakout rooms and 1-on-1 video chats with other remote attendees.",
                },
              ].map((feature, i) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-light">
                    <feature.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{feature.title}</h3>
                    <p className="mt-0.5 text-sm text-muted">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#tickets"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/25"
            >
              Get a Virtual Ticket
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
