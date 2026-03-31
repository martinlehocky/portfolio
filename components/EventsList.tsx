"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useTranslations } from "next-intl";

const events = [
  { id: "halovamake", name: "HalovaMake", roleKey: "organizer", year: "2026" },
  { id: "campfire", name: "Hack Club Campfire", roleKey: "gamejam", year: "2026" },
  { id: "halovajam", name: "HalovaJam", roleKey: "hackathon", year: "2025" }
];

export default function EventsList() {
  const container = useRef<HTMLDivElement>(null);
  const t = useTranslations("Events");

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.fromTo(
          ".event-row",
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: container.current,
              start: "top 80%",
            },
          }
        );
      }
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="py-24 px-6 max-w-5xl mx-auto w-full overflow-hidden">
      <p className="text-xs tracking-[0.25em] uppercase text-[--color-text-muted] mb-8 font-semibold">
        {t("label")}
      </p>

      <div className="border-t border-[--color-border] flex flex-col">
        {events.map((event, i) => (
          <div 
            key={i} 
            className="event-row group border-b border-[--color-border] py-8 sm:py-10 flex flex-col sm:flex-row justify-between items-start sm:items-center hover:bg-[--color-surface] transition-colors duration-500 sm:-mx-4 sm:px-4 rounded-lg"
          >
            <div className="flex flex-col gap-2 transform transition-transform duration-500 sm:group-hover:translate-x-4">
              <h3 className="font-[--font-display] text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-[--color-text]">
                {event.name}
              </h3>
              <p className="text-xs sm:text-sm text-[--color-accent] font-semibold tracking-[0.2em] uppercase">
                {t(event.roleKey as "organizer" | "gamejam" | "hackathon")}
              </p>
            </div>
            
            <div className="mt-6 sm:mt-0 flex items-center gap-6 text-[--color-text-muted] transform transition-transform duration-500 sm:group-hover:-translate-x-4">
              <span className="font-mono text-lg font-medium">{event.year}</span>
              <span className="hidden sm:inline-block opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-xl">
                &rarr;
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
