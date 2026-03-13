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
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      })

      if (cardsRef.current) {
        gsap.from(cardsRef.current.children, {
          y: 40,
          opacity: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleMouseEnter = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1.03,
      boxShadow: "0 10px 40px rgba(0, 0, 0, 0.12)",
      duration: 0.3,
      ease: "power2.out",
    })
  }, [])

  const handleMouseLeave = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      boxShadow: "0 0px 0px rgba(0, 0, 0, 0)",
      duration: 0.3,
      ease: "power2.out",
    })
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
    <section ref={sectionRef} id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div ref={headingRef} className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">Projects & Experience</h2>
            <p className="text-lg text-muted-foreground">
              Building practical applications and gaining hands-on experience with modern technologies
            </p>
          </div>

          <div ref={cardsRef} className="grid gap-6">
            {projects.map((project) => {
              const Icon = project.icon
              return (
                <Card key={project.title} className="p-6 sm:p-8 space-y-4" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-3 flex-1">
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="outline">
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
