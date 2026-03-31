"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import {useTranslations} from 'next-intl';

export default function Hero() {
  const t = useTranslations('Hero');
  const container = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.from(".hero-word", {
          opacity: 0,
          y: 80,
          stagger: 0.1,
          duration: 1.1,
          ease: "power4.out",
          delay: 0.2,
        });
      }
    }, container);
    return () => ctx.revert();
  }, []);

  const name = t('name').split(" ");

  return (
    <section ref={container} className="min-h-svh flex flex-col justify-between pt-16 md:pt-24 pb-8 md:pb-12 px-6 max-w-7xl mx-auto w-full">
      <div className="flex-1 flex flex-col justify-center">
        <p className="text-xs tracking-[0.3em] uppercase text-[--color-text-muted] mb-6 md:mb-8 font-semibold">
          {t('label')}
        </p>
        
        <h1 className="font-[--font-display] font-extrabold leading-[0.9] tracking-tight uppercase text-[clamp(2.5rem,13vw,13rem)]">
          {name.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden mr-3 sm:mr-8 mb-2">
              <span className="hero-word inline-block">{word}</span>
            </span>
          ))}
        </h1>

        <p className="text-base sm:text-lg text-[--color-text-muted] max-w-[48ch] mt-6 md:mt-8 font-medium leading-relaxed">
          {t('subtext')}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 text-sm font-semibold text-[--color-text] opacity-80 mt-12 pb-8">
        <a href="#work" className="hover:text-[--color-accent] transition-colors">{t('viewWork')}</a>
        <a href="#connect" className="hover:text-[--color-accent] transition-colors">{t('getInTouch')}</a>
      </div>
    </section>
  );
}
