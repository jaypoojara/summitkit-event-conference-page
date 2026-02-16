"use client";

import { motion, useInView } from "framer-motion";
import { Users, Mic2, Layers, CalendarDays, Wrench, Globe } from "lucide-react";
import { EVENT } from "@/lib/data";
import { useRef, useEffect, useState } from "react";

const stats = [
  { icon: Users, value: EVENT.stats.attendees, label: "Attendees", color: "from-cyan-500 to-teal-600" },
  { icon: Mic2, value: EVENT.stats.speakers, label: "Speakers", color: "from-amber-500 to-orange-600" },
  { icon: Layers, value: EVENT.stats.tracks, label: "Tracks", color: "from-violet-500 to-purple-600" },
  { icon: CalendarDays, value: EVENT.stats.days, label: "Days", color: "from-rose-500 to-pink-600" },
  { icon: Wrench, value: EVENT.stats.workshops, label: "Workshops", color: "from-emerald-500 to-green-600" },
  { icon: Globe, value: EVENT.stats.countries, label: "Countries", color: "from-blue-500 to-indigo-600" },
];

function AnimatedNumber({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    const numericMatch = value.match(/(\d+)/);
    if (!numericMatch) {
      setDisplay(value);
      return;
    }

    const target = parseInt(numericMatch[1]);
    const prefix = value.slice(0, value.indexOf(numericMatch[1]));
    const suffix = value.slice(value.indexOf(numericMatch[1]) + numericMatch[1].length);
    const duration = 1500;
    const steps = 40;
    const stepTime = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += 1;
      const progress = current / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      const num = Math.round(eased * target);

      if (target >= 1000) {
        setDisplay(`${prefix}${num.toLocaleString()}${suffix}`);
      } else {
        setDisplay(`${prefix}${num}${suffix}`);
      }

      if (current >= steps) {
        clearInterval(timer);
        setDisplay(value);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return <span ref={ref}>{display}</span>;
}

export default function StatsSection() {
  return (
    <section className="relative -mt-20 z-10 pb-16 pt-0">
      {/* Background that bridges hero → content */}
      <div className="absolute inset-0 -top-8 bg-gradient-to-b from-transparent via-background/80 to-background" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 sm:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.21, 0.68, 0.35, 1.0] }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/80 bg-white/90 backdrop-blur-sm p-5 sm:p-6 shadow-lg shadow-black/[0.06] transition-shadow duration-300 hover:shadow-xl hover:shadow-black/[0.1]">
                {/* Gradient accent line at top */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} opacity-80 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Subtle gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300`} />

                <div className="relative flex flex-col items-center text-center">
                  {/* Icon with gradient background */}
                  <div className={`mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${stat.color} shadow-md transition-transform duration-300 group-hover:scale-110`}>
                    <stat.icon className="h-5 w-5 text-white" strokeWidth={2} />
                  </div>

                  {/* Animated number */}
                  <span className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    <AnimatedNumber value={stat.value} />
                  </span>

                  {/* Label */}
                  <span className="mt-1 text-xs sm:text-sm font-medium text-muted uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
