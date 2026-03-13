"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { Button } from "@/components/ui/button"
import { ArrowRight, Linkedin, Mail, Phone } from "lucide-react"

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subheadingRef = useRef<HTMLParagraphElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      tl.from(headingRef.current, { y: 40, opacity: 0, duration: 0.8 })
        .from(subheadingRef.current, { y: 40, opacity: 0, duration: 0.6 }, "-=0.4")
        .from(descriptionRef.current, { y: 30, opacity: 0, duration: 0.6 }, "-=0.3")
        .from(buttonsRef.current, { y: 30, opacity: 0, duration: 0.6 }, "-=0.3")
        .from(contactRef.current, { y: 20, opacity: 0, duration: 0.5 }, "-=0.2")
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 ref={headingRef} className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance leading-tight">Martin Lehocký</h1>
            <p ref={subheadingRef} className="text-xl sm:text-2xl text-muted-foreground font-mono">iOS & Web Developer</p>
          </div>

          <p ref={descriptionRef} className="text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Motivated student specializing in hybrid applications and iOS development with modern technologies. I work
            most productively in team environments and strive to contribute to shared goals.
          </p>

          <div ref={buttonsRef} className="flex flex-wrap items-center gap-4">
            <Button size="lg" className="gap-2" asChild>
              <a href="#projects">
                View Projects <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 bg-transparent" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          <div ref={contactRef} className="flex flex-wrap items-center gap-6 pt-4">
            <a
              href="mailto:martin.lehocky2007@gmail.com"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">martin.lehocky2007@gmail.com</span>
            </a>
            <a
              href="tel:+421948087600"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">+421 948 087 600</span>
            </a>
            <a
              href="https://www.linkedin.com/in/martinlehocky"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-4 w-4" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
