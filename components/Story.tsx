"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import {useTranslations} from 'next-intl';

export default function Story() {
  const t = useTranslations('Story');
  const container = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.fromTo(".story-left", 
          { x: -40, opacity: 0 },
          { 
            x: 0, 
            opacity: 1, 
            duration: 1, 
            ease: "power3.out",
            scrollTrigger: {
              trigger: container.current,
              start: "top 80%",
            }
          }
        );
        gsap.fromTo(".story-right", 
          { x: 40, opacity: 0 },
          { 
            x: 0, 
            opacity: 1, 
            duration: 1, 
            ease: "power3.out",
            scrollTrigger: {
              trigger: container.current,
              start: "top 80%",
            }
          }
        );
      }
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section id="story" ref={container} className="py-24 md:py-32 px-6 max-w-7xl mx-auto w-full overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-24">
        <div className="story-left md:col-span-3 space-y-6 text-lg sm:text-xl text-[--color-text-muted] leading-relaxed">
          <p>{t('p1')}</p>
          <p>{t('p2')}</p>
          <p>{t('p3')}</p>
        </div>

        <div className="story-right md:col-span-2 flex flex-col justify-center mt-8 md:mt-0">
          <ul className="flex flex-col w-full border-b border-[--color-border]">
            {[t('affiliations.school'), t('affiliations.location')].map((item, i) => (
              <li key={i} className="py-4 border-t border-[--color-border] text-xs tracking-widest uppercase text-[--color-text-muted] font-semibold">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
