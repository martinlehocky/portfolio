"use client"

import { useRef, useEffect, useCallback } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Database, Server, Users, Gamepad2 } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export function Skills() {
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
            y: 50,
            opacity: 0,
            scale: 0.95,
            duration: 0.7,
            delay: i * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          })

          // Animate badges inside each card after the card appears
          const badges = card.querySelectorAll("[data-badge]")
          gsap.from(badges, {
            scale: 0,
            opacity: 0,
            duration: 0.4,
            stagger: 0.06,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          })
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleCardEnter = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      y: -6,
      boxShadow: "0 20px 50px rgba(0, 0, 0, 0.08)",
      duration: 0.3,
      ease: "power2.out",
    })
    const icon = e.currentTarget.querySelector("[data-icon]")
    if (icon) {
      gsap.to(icon, { rotate: 10, scale: 1.15, duration: 0.3, ease: "power2.out" })
    }
  }, [])

  const handleCardLeave = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      y: 0,
      boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
      duration: 0.3,
      ease: "power2.out",
    })
    const icon = e.currentTarget.querySelector("[data-icon]")
    if (icon) {
      gsap.to(icon, { rotate: 0, scale: 1, duration: 0.3, ease: "power2.out" })
    }
  }, [])

  const skillCategories = [
    {
      title: "Frontend",
      icon: Code2,
      skills: ["Swift / SwiftUI", "Vue.js", "Nuxt.js", "React Native", "HTML", "CSS"],
    },
    {
      title: "Backend",
      icon: Database,
      skills: ["JavaScript", "Java", "C#"],
    },
    {
      title: "DevOps & Infrastructure",
      icon: Server,
      skills: ["Linux (RHEL)", "Server Administration", "Storage Technologies"],
    },
    {
      title: "Game Development",
      icon: Gamepad2,
      skills: ["Unity", "Asset Design"],
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Team Collaboration", "Proactive & Independent", "Fast Learner", "Problem Solving"],
    },
  ]

  return (
    <section ref={sectionRef} id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div ref={headingRef} className="space-y-4">
            <p className="text-sm font-mono text-primary tracking-wider uppercase">What I work with</p>
            <h2 className="text-3xl sm:text-4xl font-bold">Skills & Expertise</h2>
            <p className="text-lg text-muted-foreground">
              Specialized in modern development technologies with a focus on iOS and web applications
            </p>
          </div>

          <div ref={cardsRef} className="grid sm:grid-cols-2 gap-6">
            {skillCategories.map((category) => {
              const Icon = category.icon
              return (
                <Card
                  key={category.title}
                  className="p-6 space-y-4 border-border/50 hover:border-primary/30 transition-colors duration-300"
                  onMouseEnter={handleCardEnter}
                  onMouseLeave={handleCardLeave}
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                      <Icon data-icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        data-badge
                        variant="secondary"
                        className="hover:bg-primary/10 hover:text-primary transition-colors duration-200 cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
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
