"use client"

import {useEffect, useRef} from "react"
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {useTranslations} from "next-intl"
import {SectionShell} from "@/components/section-shell"
import {SectionHeading} from "@/components/section-heading"
import {ProjectItem} from "@/components/project-item"
import {projects} from "@/lib/portfolio-data"

gsap.registerPlugin(ScrollTrigger)

export function Projects() {
  const t = useTranslations("projects")
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return
    }

    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray<HTMLElement>("[data-project='animated']")

      gsap.fromTo(
        targets,
        {y: 24, autoAlpha: 0},
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.58,
          ease: "power3.out",
          stagger: 0.12,
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
    <SectionShell id="projects" tinted>
      <div ref={sectionRef} className="space-y-10">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />

        <div className="grid gap-4 md:gap-5">
          {projects.map((project) => (
            <div key={project.id} data-project="animated">
              <ProjectItem
                title={t(`items.${project.id}.title`)}
                description={t(`items.${project.id}.description`)}
                icon={project.icon}
                tags={project.tagIds.map((tag) => t(`tags.${tag}`))}
              />
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  )
}
