"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Train, Car, Plane, Hotel } from "lucide-react";
import { EVENT } from "@/lib/data";

const directions = [
  {
    icon: Plane,
    title: "By Air",
    description: "SFO International Airport is 13 miles away. BART runs directly from SFO to Powell St. station (25 min).",
  },
  {
    icon: Train,
    title: "By Transit",
    description: "Powell St. BART station is a 6-minute walk. Muni bus lines 14 and 30 stop directly outside.",
  },
  {
    icon: Car,
    title: "By Car",
    description: "Parking available at 5th & Mission Garage. Valet parking offered for VIP attendees.",
  },
  {
    icon: Hotel,
    title: "Nearby Hotels",
    description: "Partner hotels include Marriott Marquis (next door), W San Francisco, and Hotel Nikko — all within walking distance.",
  },
];

export default function VenueSection() {
  return (
    <section id="venue" className="bg-background py-24 sm:py-32">
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
            Venue
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-foreground sm:text-4xl">
            Where It All Happens
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Located in the heart of San Francisco&apos;s SoMa district, with world-class facilities
            and easy access from anywhere.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-2xl border border-border"
          >
            <iframe
              src={EVENT.location.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 400 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Venue Map"
            />
          </motion.div>

          {/* Venue Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Venue Card */}
            <div className="mb-8 rounded-2xl border border-border bg-surface p-6">
              <div className="mb-4 flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-light">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-foreground">
                    {EVENT.location.venue}
                  </h3>
                  <p className="text-sm text-muted">
                    {EVENT.location.address}, {EVENT.location.city},{" "}
                    {EVENT.location.state} {EVENT.location.zip}
                  </p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-muted">
                The Moscone Center is San Francisco&apos;s premier convention facility, hosting the
                world&apos;s biggest tech events. Our summit takes place in the West building,
                featuring 70,000 sq ft of flexible space across three floors.
              </p>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                  `${EVENT.location.address}, ${EVENT.location.city}, ${EVENT.location.state}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
              >
                <Navigation className="h-4 w-4" />
                Get Directions
              </a>
            </div>

            {/* Getting There */}
            <div className="grid gap-4 sm:grid-cols-2">
              {directions.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="rounded-xl border border-border p-4"
                >
                  <item.icon className="mb-2 h-5 w-5 text-accent" />
                  <h4 className="mb-1 text-sm font-semibold text-foreground">
                    {item.title}
                  </h4>
                  <p className="text-xs leading-relaxed text-muted">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
