"use client"

import { useRef, useEffect } from "react"
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

      gsap.from(interestsRef.current, {
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
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div ref={headingRef} className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              I'm a second-year student in the digital technology programming class at SPŠE Hálova, Bratislava, with a
              strong interest in application development and enterprise solutions. I'm proactive, independent, and eager
              to learn new technologies.
            </p>
          </div>

          <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 space-y-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Education</h3>
                <p className="text-sm text-muted-foreground">
                  SPŠE Hálova, Bratislava
                  <br />
                  Digital Technology Programming
                  <br />
                  2nd Year
                </p>
              </div>
            </Card>

            <Card className="p-6 space-y-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Location</h3>
                <p className="text-sm text-muted-foreground">
                  Bratislava, Slovakia
                  <br />
                  Open to remote opportunities
                </p>
              </div>
            </Card>

            <Card className="p-6 space-y-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Languages</h3>
                <p className="text-sm text-muted-foreground">
                  Slovak (Native)
                  <br />
                  English (Native)
                  <br />
                  German (Intermediate)
                </p>
              </div>
            </Card>
          </div>

          <div ref={interestsRef} className="space-y-4">
            <h3 className="text-2xl font-bold">Interests & Hobbies</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold">Technology</h4>
                <p className="text-sm text-muted-foreground">
                  Closely following new technologies and interested in exploring and applying them in practice
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Travel</h4>
                <p className="text-sm text-muted-foreground">
                  Traveling to new places and discovering unique cultures of different countries
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Continuous Learning</h4>
                <p className="text-sm text-muted-foreground">
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
