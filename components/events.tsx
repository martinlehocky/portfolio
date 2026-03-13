"use client"

import { useRef, useEffect, useCallback } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export function Events() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

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

      // Animate the connecting line
      if (lineRef.current) {
        gsap.from(lineRef.current, {
          scaleY: 0,
          duration: 1,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        })
      }

      if (timelineRef.current) {
        const items = timelineRef.current.querySelectorAll("[data-timeline-item]")
        items.forEach((item, i) => {
          // Slide in from alternating sides
          gsap.from(item, {
            x: i % 2 === 0 ? -50 : 50,
            y: 20,
            opacity: 0,
            duration: 0.7,
            delay: i * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          })

          // Animate the dot
          const dot = item.querySelector("[data-dot]")
          if (dot) {
            gsap.from(dot, {
              scale: 0,
              duration: 0.4,
              delay: i * 0.2 + 0.3,
              ease: "back.out(2)",
              scrollTrigger: {
                trigger: item,
                start: "top 88%",
                toggleActions: "play none none none",
              },
            })
          }
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleCardEnter = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      y: -4,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.08)",
      duration: 0.3,
      ease: "power2.out",
    })
  }, [])

  const handleCardLeave = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      y: 0,
      boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
      duration: 0.3,
      ease: "power2.out",
    })
  }, [])

  const events = [
    {
      title: "HalovaJam Hackathon",
      icon: Trophy,
      tags: ["Hackathon"],
    },
    {
      title: "Hack Club Campfire GameJam",
      icon: Trophy,
      tags: ["Game Jam"],
    },
  ]

  return (
    <section ref={sectionRef} id="events" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div ref={headingRef} className="space-y-4">
            <p className="text-sm font-mono text-primary tracking-wider uppercase">Experiences</p>
            <h2 className="text-3xl sm:text-4xl font-bold">Events</h2>
            <p className="text-lg text-muted-foreground">
              Hackathons, game jams, and community events I have participated in
            </p>
          </div>

          <div ref={timelineRef} className="relative">
            {/* Connecting line */}
            <div
              ref={lineRef}
              className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent origin-top hidden sm:block"
            />

            <div className="space-y-6">
              {events.map((event, index) => {
                const Icon = event.icon
                return (
                  <div key={event.title} data-timeline-item className="relative flex items-start gap-6">
                    {/* Timeline dot */}
                    <div className="relative flex-shrink-0 hidden sm:flex items-center justify-center">
                      <div
                        data-dot
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/30 flex items-center justify-center z-10"
                      >
                        <div className="w-3 h-3 rounded-full bg-primary" />
                      </div>
                    </div>

                    <Card
                      className="flex-1 p-6 space-y-4 border-border/50 hover:border-primary/30 transition-colors duration-300"
                      onMouseEnter={handleCardEnter}
                      onMouseLeave={handleCardLeave}
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center sm:hidden">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="hidden sm:flex h-10 w-10 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 items-center justify-center">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold">{event.title}</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {event.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </Card>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
