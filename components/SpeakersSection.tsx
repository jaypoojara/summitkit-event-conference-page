"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Twitter, Linkedin, Github, Globe, ArrowRight } from "lucide-react";
import { SPEAKERS, type Speaker } from "@/lib/data";

function SpeakerCard({
  speaker,
  index,
  onSelect,
}: {
  speaker: Speaker;
  index: number;
  onSelect: (s: Speaker) => void;
}) {
  const gradients = [
    "from-cyan-600 to-teal-700",
    "from-emerald-500 to-teal-600",
    "from-amber-500 to-orange-600",
    "from-sky-500 to-cyan-600",
    "from-teal-500 to-emerald-600",
    "from-blue-500 to-cyan-600",
  ];
  const gradient = gradients[index % gradients.length];

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onClick={() => onSelect(speaker)}
      className="group cursor-pointer text-left"
    >
      <div className="relative mb-4 aspect-[4/5] overflow-hidden rounded-2xl">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-90 transition-all duration-300 group-hover:opacity-100`}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-[family-name:var(--font-display)] text-5xl font-bold text-white/30 sm:text-6xl">
            {speaker.avatar}
          </span>
        </div>
        <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/60 to-transparent p-4 pt-12">
          <p className="text-sm font-medium text-white/80">{speaker.topic}</p>
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all group-hover:bg-black/20 group-hover:opacity-100">
          <span className="flex items-center gap-1 rounded-full bg-white px-4 py-2 text-sm font-semibold text-foreground shadow-lg">
            View Bio
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
      <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
        {speaker.name}
      </h3>
      <p className="text-sm text-muted">
        {speaker.title}, {speaker.company}
      </p>
    </motion.button>
  );
}

function SpeakerModal({
  speaker,
  onClose,
}: {
  speaker: Speaker;
  onClose: () => void;
}) {
  const socialIcons = {
    twitter: Twitter,
    linkedin: Linkedin,
    github: Github,
    website: Globe,
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 rounded-full p-2 text-muted transition-colors hover:bg-surface hover:text-foreground"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mb-6 flex items-start gap-4">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-accent/10">
            <span className="font-[family-name:var(--font-display)] text-xl font-bold text-accent">
              {speaker.avatar}
            </span>
          </div>
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-foreground">
              {speaker.name}
            </h3>
            <p className="text-sm text-muted">
              {speaker.title}, {speaker.company}
            </p>
          </div>
        </div>

        <div className="mb-4 rounded-xl bg-accent-light p-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">
            Speaking about
          </span>
          <p className="mt-1 font-[family-name:var(--font-display)] text-base font-semibold text-foreground">
            {speaker.topic}
          </p>
        </div>

        <p className="mb-6 text-sm leading-relaxed text-muted">{speaker.bio}</p>

        <div className="flex gap-2">
          {Object.entries(speaker.social).map(([platform, url]) => {
            const Icon = socialIcons[platform as keyof typeof socialIcons];
            if (!Icon || !url) return null;
            return (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted transition-all hover:border-accent hover:bg-accent-light hover:text-accent"
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function SpeakersSection() {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  return (
    <section id="speakers" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
            Speakers
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-foreground sm:text-4xl">
            Learn from the Best in Tech
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Industry leaders from the world&apos;s most innovative companies, sharing real-world insights
            you won&apos;t find anywhere else.
          </p>
        </motion.div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-3 lg:grid-cols-4">
          {SPEAKERS.map((speaker, i) => (
            <SpeakerCard
              key={speaker.id}
              speaker={speaker}
              index={i}
              onSelect={setSelectedSpeaker}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedSpeaker && (
          <SpeakerModal
            speaker={selectedSpeaker}
            onClose={() => setSelectedSpeaker(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
