"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { Envelope, LinkedinLogo } from "@phosphor-icons/react/dist/ssr";

export default function Connect() {
  const t = useTranslations("Connect");

  return (
    <section id="connect" className="py-32 px-6 bg-[--color-bg] w-full border-t border-[--color-border] mt-16">
      <div className="max-w-7xl mx-auto flex flex-col items-start">
        <h2 className="text-[clamp(2.5rem,5.5vw,6rem)] font-[--font-display] font-extrabold uppercase leading-none mb-6">
          {t("heading")}
        </h2>
        
        <p className="text-[--color-text-muted] text-base sm:text-lg max-w-xl mb-16">
          {t("subtext")}
        </p>

        <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 mb-8">
          <a 
            href="mailto:martin.lehocky2007@gmail.com" 
            className="group relative text-2xl font-semibold font-[--font-display] text-[--color-text] inline-flex items-center gap-3"
          >
            <Envelope size={28} weight="regular" />
            <span>{t("email")}</span>
            <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-current scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
          </a>
          <a 
            href="https://www.linkedin.com/in/martinlehocky" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative text-2xl font-semibold font-[--font-display] text-[--color-text] inline-flex items-center gap-3"
          >
            <LinkedinLogo size={28} weight="regular" />
            <span>{t("linkedin")}</span>
            <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-current scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
          </a>
        </div>

        <p className="text-xs text-[--color-text-muted] mt-6">
          martin.lehocky2007@gmail.com
        </p>
      </div>
    </section>
  );
}
