"use client"

import { useRef, useEffect } from "react"
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
          stagger: 0.12,
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
            <h2 className="text-3xl sm:text-4xl font-bold">Skills & Expertise</h2>
            <p className="text-lg text-muted-foreground">
              Specialized in modern development technologies with a focus on iOS and web applications
            </p>
          </div>

          <div ref={cardsRef} className="grid sm:grid-cols-2 gap-6">
            {skillCategories.map((category) => {
              const Icon = category.icon
              return (
                <Card key={category.title} className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
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
