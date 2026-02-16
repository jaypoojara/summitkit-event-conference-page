"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, MapPin, User, Sparkles, Coffee, MessageSquare, Zap, Mic2 } from "lucide-react";
import { SCHEDULE, TRACKS, SPEAKERS, type ScheduleSession } from "@/lib/data";

const typeConfig: Record<string, { color: string; icon: typeof Sparkles; label: string }> = {
  keynote: { color: "bg-accent text-white", icon: Sparkles, label: "Keynote" },
  talk: { color: "bg-indigo-100 text-indigo-700", icon: Mic2, label: "Talk" },
  workshop: { color: "bg-emerald-100 text-emerald-700", icon: Zap, label: "Workshop" },
  panel: { color: "bg-purple-100 text-purple-700", icon: MessageSquare, label: "Panel" },
  break: { color: "bg-stone-100 text-stone-600", icon: Coffee, label: "Break" },
  networking: { color: "bg-pink-100 text-pink-700", icon: MessageSquare, label: "Networking" },
  lightning: { color: "bg-amber-100 text-amber-700", icon: Zap, label: "Lightning Talks" },
};

const trackColors: Record<string, string> = {
  main: "border-l-cyan-500",
  "workshop-a": "border-l-emerald-500",
  "workshop-b": "border-l-amber-500",
  networking: "border-l-sky-400",
};

function SessionCard({ session }: { session: ScheduleSession }) {
  const speaker = session.speakerId
    ? SPEAKERS.find((s) => s.id === session.speakerId)
    : undefined;
  const config = typeConfig[session.type] || typeConfig.talk;
  const Icon = config.icon;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25 }}
      className={`group rounded-xl border-l-4 bg-surface-dark-secondary p-4 transition-all hover:bg-[#253049] sm:p-5 ${
        trackColors[session.track] || "border-l-muted"
      }`}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex-1">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${config.color}`}>
              <Icon className="h-3 w-3" />
              {config.label}
            </span>
            <span className="text-xs text-white/40">{session.room}</span>
          </div>
          <h4 className="font-[family-name:var(--font-display)] text-base font-semibold text-white sm:text-lg">
            {session.title}
          </h4>
          {session.description && (
            <p className="mt-1.5 text-sm leading-relaxed text-white/50">
              {session.description}
            </p>
          )}
          {speaker && (
            <div className="mt-3 flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-accent/20 text-xs font-bold text-accent">
                {speaker.avatar}
              </div>
              <div>
                <p className="text-sm font-medium text-white/80">{speaker.name}</p>
                <p className="text-xs text-white/40">
                  {speaker.title}, {speaker.company}
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="flex items-center gap-1.5 text-white/40 sm:flex-col sm:items-end">
          <Clock className="h-3.5 w-3.5" />
          <span className="text-sm font-medium">{session.time}</span>
          <span className="hidden text-xs sm:block">{session.endTime}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function ScheduleSection() {
  const [activeDay, setActiveDay] = useState(0);
  const [activeTrack, setActiveTrack] = useState("all");

  const currentDay = SCHEDULE[activeDay];
  const filteredSessions =
    activeTrack === "all"
      ? currentDay.sessions
      : currentDay.sessions.filter((s) => s.track === activeTrack);

  return (
    <section id="schedule" className="grain-overlay relative overflow-hidden bg-surface-dark py-24 sm:py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
            Schedule
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-white sm:text-4xl">
            Three Days of Insights
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/50">
            Keynotes from industry leaders, hands-on workshops, and plenty of time to connect with
            fellow attendees.
          </p>
        </motion.div>

        {/* Day Tabs */}
        <div className="mb-6 flex justify-center">
          <div className="inline-flex rounded-xl bg-white/5 p-1">
            {SCHEDULE.map((day, i) => (
              <button
                key={day.date}
                onClick={() => setActiveDay(i)}
                className={`relative rounded-lg px-4 py-2.5 text-sm font-medium transition-all sm:px-6 ${
                  activeDay === i ? "text-white" : "text-white/50 hover:text-white/70"
                }`}
              >
                {activeDay === i && (
                  <motion.div
                    layoutId="activeDay"
                    className="absolute inset-0 rounded-lg bg-accent"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10">{day.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Track Filters */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {TRACKS.map((track) => (
            <button
              key={track.id}
              onClick={() => setActiveTrack(track.id)}
              className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all sm:text-sm ${
                activeTrack === track.id
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-white/10 text-white/50 hover:border-white/20 hover:text-white/70"
              }`}
            >
              {track.label}
            </button>
          ))}
        </div>

        {/* Sessions Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeDay}-${activeTrack}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="mx-auto grid max-w-4xl gap-3"
          >
            {filteredSessions.map((session) => (
              <SessionCard key={session.id} session={session} />
            ))}
            {filteredSessions.length === 0 && (
              <div className="py-16 text-center text-white/40">
                <MapPin className="mx-auto mb-3 h-8 w-8" />
                <p>No sessions in this track for today.</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
