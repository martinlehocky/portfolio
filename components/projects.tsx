"use client"

import { useRef, useEffect, useCallback } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Smartphone, Globe, Server, Calendar } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      })

      if (cardsRef.current) {
        const cards = cardsRef.current.children
        Array.from(cards).forEach((card, i) => {
          gsap.from(card, {
            y: 60,
            opacity: 0,
            rotateX: 8,
            duration: 0.8,
            delay: i * 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          })

          const line = card.querySelector("[data-accent-line]")
          if (line) {
            gsap.from(line, {
              scaleY: 0,
              duration: 0.6,
              delay: i * 0.12 + 0.3,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
                toggleActions: "play none none none",
              },
            })
          }
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleMouseEnter = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      y: -6,
      boxShadow: "0 25px 50px rgba(0, 0, 0, 0.1)",
      duration: 0.35,
      ease: "power2.out",
    })
    const icon = e.currentTarget.querySelector("[data-project-icon]")
    if (icon) {
      gsap.to(icon, { scale: 1.2, rotate: -10, duration: 0.3, ease: "back.out(1.7)" })
    }
    const line = e.currentTarget.querySelector("[data-accent-line]")
    if (line) {
      gsap.to(line, { scaleY: 1.2, duration: 0.3, ease: "power2.out" })
    }
  }, [])

  const handleMouseLeave = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      y: 0,
      boxShadow: "0 0px 0px rgba(0, 0, 0, 0)",
      duration: 0.35,
      ease: "power2.out",
    })
    const icon = e.currentTarget.querySelector("[data-project-icon]")
    if (icon) {
      gsap.to(icon, { scale: 1, rotate: 0, duration: 0.3, ease: "power2.out" })
    }
    const line = e.currentTarget.querySelector("[data-accent-line]")
    if (line) {
      gsap.to(line, { scaleY: 1, duration: 0.3, ease: "power2.out" })
    }
  }, [])

  const projects = [
    {
      title: "Healthie",
      description:
        "iOS application with daily planner and health tracking features. Intuitive calorie and hydration tracking. Developed from design to final implementation.",
      icon: Smartphone,
      tags: ["SwiftUI", "iOS", "Health Tracking"],
    },
    {
      title: "Test Preparation Web App",
      description:
        "Interactive tool for preparing students for state testing (Testovanie 9). Facilitates learning and the preparation process.",
      icon: Globe,
      tags: ["Frontend", "Education", "Interactive"],
    },
    {
      title: "Plannie",
      description:
        "Full-stack event scheduling application with a Go backend and Next.js frontend. Features secure authentication, database management, and cloud deployment.",
      icon: Calendar,
      tags: ["Go", "Next.js", "PostgreSQL"],
    },
    {
      title: "Home Server Infrastructure",
      description:
        "Independent learning of various storage technologies. Experience with Linux distributions, especially RHEL. Practical work with server administration.",
      icon: Server,
      tags: ["Linux", "RHEL", "DevOps"],
    },
  ]

  return (
    <section ref={sectionRef} id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/3 dark:bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="space-y-12">
          <div ref={headingRef} className="space-y-4">
            <p className="text-sm font-mono text-primary tracking-wider uppercase">My work</p>
            <h2 className="text-3xl sm:text-4xl font-bold">Projects & Experience</h2>
            <p className="text-lg text-muted-foreground">
              Building practical applications and gaining hands-on experience with modern technologies
            </p>
          </div>

          <div ref={cardsRef} className="grid gap-6 [perspective:1000px]">
            {projects.map((project) => {
              const Icon = project.icon
              return (
                <Card
                  key={project.title}
                  className="p-6 sm:p-8 space-y-4 border-border/50 hover:border-primary/20 transition-colors duration-300 relative overflow-hidden group"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div
                    data-accent-line
                    className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent origin-top"
                  />

                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/5 flex items-center justify-center flex-shrink-0">
                      <Icon data-project-icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-3 flex-1">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-200"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
