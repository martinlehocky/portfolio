"use client"

import {useEffect, useRef} from "react"
import gsap from "gsap"
import {ArrowRight} from "@phosphor-icons/react"
import {useTranslations} from "next-intl"
import {Button} from "@/components/ui/button"

export function Hero() {
  const t = useTranslations("hero")
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return
    }

    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray<HTMLElement>("[data-hero='item']")
      gsap.fromTo(
        targets,
        {y: 24, autoAlpha: 0},
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.65,
          ease: "power3.out",
          stagger: 0.1,
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden px-4 pb-14 pt-24 sm:px-6 sm:pb-20 sm:pt-36 lg:px-8 lg:pt-40"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(80%_55%_at_50%_0%,color-mix(in_oklch,var(--primary)_16%,transparent),transparent)]" />
      <div className="mx-auto w-full max-w-6xl">
        <div className="max-w-4xl space-y-7 sm:space-y-8">
          <p data-hero="item" className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary sm:text-sm sm:tracking-[0.22em]">
            {t("eyebrow")}
          </p>

          <div className="space-y-4">
            <h1 data-hero="item" className="font-display text-[2.05rem] font-semibold leading-[1.08] sm:text-6xl lg:text-7xl">
              {t("name")}
            </h1>
            <p data-hero="item" className="font-mono text-xs text-primary sm:text-base">
              {t("role")}
            </p>
          </div>

          <div className="space-y-4">
            <p data-hero="item" className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-xl">
              {t("description")}
            </p>
            <p data-hero="item" className="max-w-3xl text-base leading-relaxed text-foreground/90 sm:text-lg">
              {t("internship")}
            </p>
          </div>

          <div data-hero="item" className="flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Button asChild size="lg" className="min-h-11 w-full gap-2 rounded-full px-6 text-sm sm:w-auto sm:px-7">
              <a href="#projects">
                {t("primaryCta")} <ArrowRight size={16} weight="regular" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="min-h-11 w-full rounded-full border-border/70 px-6 text-sm sm:w-auto sm:px-7"
            >
              <a href="#contact">{t("secondaryCta")}</a>
            </Button>
          </div>

          <div data-hero="item" className="flex flex-wrap gap-2">
            <span className="rounded-full border border-border/70 bg-background/90 px-3 py-1 text-xs font-medium text-muted-foreground">
              {t("chips.location")}
            </span>
            <span className="rounded-full border border-border/70 bg-background/90 px-3 py-1 text-xs font-medium text-muted-foreground">
              {t("chips.availability")}
            </span>
            <span className="rounded-full border border-border/70 bg-background/90 px-3 py-1 text-xs font-medium text-muted-foreground">
              {t("chips.teamwork")}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
