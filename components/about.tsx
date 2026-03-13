"use client"

import { useRef, useEffect, useCallback } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card } from "@/components/ui/card"
import { GraduationCap, MapPin, Globe } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const interestsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading reveal with clip-path
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

      // Cards stagger in from alternating sides
      if (cardsRef.current) {
        const cards = cardsRef.current.children
        Array.from(cards).forEach((card, i) => {
          gsap.from(card, {
            x: i % 2 === 0 ? -60 : 60,
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          })
        })
      }

      // Interests section with stagger
      if (interestsRef.current) {
        gsap.from(interestsRef.current.querySelector("h3"), {
          y: 30,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: interestsRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        })

        const interestCards = interestsRef.current.querySelectorAll(".interest-item")
        gsap.from(interestCards, {
          y: 40,
          opacity: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: interestsRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
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

  return (
    <section ref={sectionRef} id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/3 dark:bg-primary/5 blur-[150px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="space-y-12">
          <div ref={headingRef} className="space-y-4">
            <p className="text-sm font-mono text-primary tracking-wider uppercase">Get to know me</p>
            <h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              I&apos;m a second-year student in the digital technology programming class at SPŠE Hálova, Bratislava, with a
              strong interest in application development and enterprise solutions. I&apos;m proactive, independent, and eager
              to learn new technologies.
            </p>
          </div>

          <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card
              className="p-6 space-y-4 border-border/50 hover:border-primary/30 transition-colors duration-300"
              onMouseEnter={handleCardEnter}
              onMouseLeave={handleCardLeave}
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Education</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  SPŠE Hálova, Bratislava
                  <br />
                  Digital Technology Programming
                  <br />
                  2nd Year
                </p>
              </div>
            </Card>

            <Card
              className="p-6 space-y-4 border-border/50 hover:border-primary/30 transition-colors duration-300"
              onMouseEnter={handleCardEnter}
              onMouseLeave={handleCardLeave}
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Location</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Bratislava, Slovakia
                  <br />
                  Open to remote opportunities
                </p>
              </div>
            </Card>

            <Card
              className="p-6 space-y-4 border-border/50 hover:border-primary/30 transition-colors duration-300"
              onMouseEnter={handleCardEnter}
              onMouseLeave={handleCardLeave}
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Languages</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Slovak (Native)
                  <br />
                  English (Native)
                  <br />
                  German (Intermediate)
                </p>
              </div>
            </Card>
          </div>

          <div ref={interestsRef} className="space-y-6">
            <h3 className="text-2xl font-bold">Interests & Hobbies</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="interest-item space-y-2 p-4 rounded-xl border border-border/50 hover:border-primary/20 hover:bg-primary/[0.02] transition-all duration-300">
                <h4 className="font-semibold">Technology</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Closely following new technologies and interested in exploring and applying them in practice
                </p>
              </div>
              <div className="interest-item space-y-2 p-4 rounded-xl border border-border/50 hover:border-primary/20 hover:bg-primary/[0.02] transition-all duration-300">
                <h4 className="font-semibold">Travel</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Traveling to new places and discovering unique cultures of different countries
                </p>
              </div>
              <div className="interest-item space-y-2 p-4 rounded-xl border border-border/50 hover:border-primary/20 hover:bg-primary/[0.02] transition-all duration-300">
                <h4 className="font-semibold">Continuous Learning</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Self-educating and improving in IT and enterprise solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
