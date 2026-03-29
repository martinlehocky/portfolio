"use client"

import {useEffect, useRef} from "react"
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {useTranslations} from "next-intl"
import {Card} from "@/components/ui/card"
import {SectionShell} from "@/components/section-shell"
import {SectionHeading} from "@/components/section-heading"
import {aboutCards} from "@/lib/portfolio-data"

gsap.registerPlugin(ScrollTrigger)

export function About() {
  const t = useTranslations("about")
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return
    }

    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray<HTMLElement>("[data-about='animated']")

      gsap.fromTo(
        targets,
        {y: 28, autoAlpha: 0},
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            once: true,
            invalidateOnRefresh: true,
          },
        }
      )

      ScrollTrigger.refresh()
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <SectionShell id="about" tinted>
      <div ref={sectionRef} className="space-y-10">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
          className="max-w-4xl"
        />

        <div className="grid gap-4 md:grid-cols-3 md:gap-5">
          {aboutCards.map(({id, icon: Icon}) => {
            const lines = t(`${id}.content`).split("\n")
            return (
              <Card
                key={id}
                data-about="animated"
                className="border-border/70 bg-card/85 p-5 shadow-sm transition-all duration-300 hover:border-primary/35 sm:p-6"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/12 text-primary">
                  <Icon size={22} weight="regular" />
                </div>
                <h3 className="mb-3 font-display text-xl font-semibold">{t(`${id}.title`)}</h3>
                <div className="space-y-1">
                  {lines.map((line) => (
                    <p key={`${id}-${line}`} className="text-sm text-muted-foreground">
                      {line}
                    </p>
                  ))}
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </SectionShell>
  )
}
