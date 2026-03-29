"use client"

import {useEffect, useRef} from "react"
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {useTranslations} from "next-intl"
import {Badge} from "@/components/ui/badge"
import {Card} from "@/components/ui/card"
import {SectionShell} from "@/components/section-shell"
import {SectionHeading} from "@/components/section-heading"
import {events} from "@/lib/portfolio-data"

gsap.registerPlugin(ScrollTrigger)

export function Events() {
  const t = useTranslations("events")
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return
    }

    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray<HTMLElement>("[data-events='animated']")

      gsap.fromTo(
        targets,
        {y: 18, autoAlpha: 0},
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.5,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 82%",
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
    <SectionShell id="events">
      <div ref={sectionRef} className="space-y-10">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />

        <div className="grid gap-4 md:grid-cols-2 md:gap-5">
          {events.map((event) => {
            const Icon = event.icon
            return (
              <Card
                key={event.id}
                data-events="animated"
                className="border-border/70 bg-card/80 p-5 shadow-sm transition-colors hover:border-primary/35 sm:p-6"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/12 text-primary">
                    <Icon size={20} weight="regular" />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                    <h3 className="font-display text-lg font-semibold leading-tight sm:text-xl">{t(`items.${event.id}`)}</h3>
                    <span className="shrink-0 whitespace-nowrap rounded-full bg-muted px-2.5 py-1 font-mono text-xs tabular-nums text-muted-foreground">
                      {event.year}
                    </span>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {event.tagIds.map((tag) => (
                    <Badge key={tag} variant="secondary" className="rounded-full px-3 py-1 text-xs">
                      {t(`tags.${tag}`)}
                    </Badge>
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
