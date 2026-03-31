"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import {useTranslations} from 'next-intl';

export default function WorkGrid() {
  const t = useTranslations('Work');
  const container = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: t('healthie.title'),
      tags: t('healthie.tags'),
      desc: t('healthie.desc'),
      year: t('healthie.year'),
      colSpan: "md:col-span-7",
      tall: true,
    },
    {
      title: t('plannie.title'),
      tags: t('plannie.tags'),
      desc: t('plannie.desc'),
      year: t('plannie.year'),
      colSpan: "md:col-span-5",
      tall: false,
    },
    {
      title: t('testprep.title'),
      tags: t('testprep.tags'),
      desc: t('testprep.desc'),
      year: t('testprep.year'),
      colSpan: "md:col-span-5",
      tall: false,
    },
    {
      title: t('homeserver.title'),
      tags: t('homeserver.tags'),
      desc: t('homeserver.desc'),
      year: t('homeserver.year'),
      colSpan: "md:col-span-7",
      tall: true,
    }
  ];

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.utils.toArray<HTMLElement>('.work-card').forEach((card, i) => {
          gsap.fromTo(card, 
            { opacity: 0, y: 30 },
            { 
              opacity: 1, 
              y: 0, 
              duration: 0.8, 
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
              }
            }
          );
          
          card.addEventListener("mouseenter", () => {
            gsap.to(card, { scale: 1.018, duration: 0.4, ease: "power2.out" });
          });
          card.addEventListener("mouseleave", () => {
            gsap.to(card, { scale: 1, duration: 0.4, ease: "power2.out" });
          });
        });
      }
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section id="work" ref={container} className="py-32 px-6 max-w-7xl mx-auto w-full">
      <p className="text-xs tracking-[0.25em] uppercase text-[--color-text-muted] mb-12 font-semibold">
        {t('label')}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {projects.map((p, i) => (
          <div 
            key={i} 
            className={`work-card bg-[--color-surface] rounded-xl border border-[--color-border] p-7 flex flex-col gap-4 ${p.colSpan} ${p.tall ? 'min-h-[400px]' : 'min-h-[280px]'}`}
          >
            <div className="flex-1">
              <h3 className="text-2xl font-[--font-display] font-bold mb-2">{p.title}</h3>
              <p className="text-xs text-[--color-accent] font-medium tracking-wide mb-4">{p.tags}</p>
              <p className="text-[--color-text-muted] text-sm leading-relaxed">{p.desc}</p>
            </div>
            {p.year && (
              <div className="mt-auto pt-4 border-t border-[--color-border]">
                <span className="text-xs text-[--color-text-muted] font-medium">{p.year}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
