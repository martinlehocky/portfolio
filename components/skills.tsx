"use client"

import {useEffect, useRef} from "react"
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {useTranslations} from "next-intl"
import {SectionShell} from "@/components/section-shell"
import {SectionHeading} from "@/components/section-heading"
import {SkillGroup} from "@/components/skill-group"
import {skills} from "@/lib/portfolio-data"

gsap.registerPlugin(ScrollTrigger)

export function Skills() {
  const t = useTranslations("skills")
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return
    }

    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray<HTMLElement>("[data-skills='animated']")

      gsap.fromTo(
        targets,
        {y: 20, autoAlpha: 0},
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.55,
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
    <SectionShell id="skills">
      <div ref={sectionRef} className="space-y-10">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />

        <div className="grid gap-4 md:grid-cols-2 md:gap-5">
          {skills.map((category) => (
            <div key={category.id} data-skills="animated">
              <SkillGroup
                title={t(`categories.${category.id}`)}
                icon={category.icon}
                items={category.itemIds.map((item) => t(`items.${item}`))}
              />
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  )
}
