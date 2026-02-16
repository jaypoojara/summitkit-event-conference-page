"use client";

import { Twitter, Linkedin, Youtube, Instagram } from "lucide-react";
import { EVENT, NAV_LINKS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-surface-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid gap-10 border-b border-white/10 py-16 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent">
                <span className="text-sm font-bold text-white">TF</span>
              </div>
              <span className="font-[family-name:var(--font-display)] text-lg font-bold text-white">
                {EVENT.name}
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-white/40">
              {EVENT.tagline}. {EVENT.dates.display} at {EVENT.location.venue},{" "}
              {EVENT.location.city}.
            </p>
            {/* Social */}
            <div className="mt-6 flex gap-3">
              {[
                { icon: Twitter, href: EVENT.social.twitter, label: "Twitter" },
                { icon: Linkedin, href: EVENT.social.linkedin, label: "LinkedIn" },
                { icon: Youtube, href: EVENT.social.youtube, label: "YouTube" },
                { icon: Instagram, href: EVENT.social.instagram, label: "Instagram" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/40 transition-all hover:border-white/20 hover:text-white/70"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Event */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/60">
              Event
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/40 transition-colors hover:text-white/70"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/60">
              Information
            </h4>
            <ul className="space-y-2.5">
              {[
                "Code of Conduct",
                "Accessibility",
                "Diversity & Inclusion",
                "FAQ",
                "Contact Us",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-white/40 transition-colors hover:text-white/70"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/60">
              Stay Updated
            </h4>
            <p className="mb-4 text-sm text-white/40">
              Get speaker announcements and event updates straight to your inbox.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@email.com"
                className="min-w-0 flex-1 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/30 outline-none transition-all focus:border-accent focus:ring-1 focus:ring-accent"
              />
              <button
                type="submit"
                className="shrink-0 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-accent-hover"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} {EVENT.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-white/30 transition-colors hover:text-white/50"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
