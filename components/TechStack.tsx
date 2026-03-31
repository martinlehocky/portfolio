"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useTranslations } from "next-intl";

const stackData = [
  {
    key: "frontend",
    technologies: ["Swift", "SwiftUI", "React Native", "Vue", "Nuxt", "HTML", "CSS", "Tailwind CSS"]
  },
  {
    key: "backend",
    technologies: ["Go", "Node.js", "TypeScript", "JavaScript", "Java", "C#", "PostgreSQL", "REST APIs"]
  },
  {
    key: "infra",
    technologies: ["Linux", "Red Hat Enterprise Linux (RHEL)", "Server Administration", "Storage Systems", "Cloud Deployments"]
  },
  {
    key: "game",
    technologies: ["Unity", "Asset Design", "Gameplay Logic", "C# Scripting"]
  }
];

export default function TechStack() {
  const container = useRef<HTMLDivElement>(null);
  const t = useTranslations("TechStack");

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.fromTo(
          ".stack-row",
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: container.current,
              start: "top 75%",
            },
          }
        );
      }
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section id="stack" ref={container} className="py-24 md:py-32 px-6 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-24 relative">
        
        {/* Left Column: Outer column stretches, inner div is sticky */}
        <div className="md:col-span-2 relative">
          <div className="md:sticky md:top-32 md:pb-12">
            <h2 className="text-[clamp(3rem,6vw,6rem)] font-[--font-display] font-extrabold uppercase leading-none tracking-tight mb-4">
              {t("title").split(" ")[0]} <br className="hidden md:block" /> {t("title").split(" ").slice(1).join(" ")}
            </h2>
            <p className="text-[--color-text-muted] text-sm sm:text-base max-w-xs leading-relaxed mt-4 md:mt-0">
              {t("subtext")}
            </p>
          </div>
        </div>

        {/* Right Column: Editorial Dictionary */}
        <div className="md:col-span-3 flex flex-col border-t border-[--color-border]">
          {stackData.map((group, index) => (
            <div 
              key={index} 
              className="stack-row py-8 sm:py-10 border-b border-[--color-border] group hover:bg-[--color-surface] transition-colors duration-500 sm:-mx-4 sm:px-4 rounded-xl"
            >
              <h3 className="text-xs tracking-[0.2em] uppercase text-[--color-accent] font-semibold mb-4 sm:mb-6">
                {t(group.key as "frontend" | "backend" | "infra" | "game")}
              </h3>
              <p className="text-2xl sm:text-3xl font-[--font-display] font-medium leading-[1.4] text-[--color-text] opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                {group.technologies.join(", ")}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
