"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { Button } from "@/components/ui/button"
import { ArrowRight, Linkedin, Mail, Phone } from "lucide-react"

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const nameRef = useRef<HTMLHeadingElement>(null)
  const subheadingRef = useRef<HTMLParagraphElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } })

      // Animate background grid and glow
      tl.from(gridRef.current, { opacity: 0, duration: 1.5, ease: "power2.inOut" })
        .from(glowRef.current, { opacity: 0, scale: 0.8, duration: 1.2, ease: "power2.out" }, "-=1.2")

      // Animate the accent line
      tl.from(lineRef.current, { scaleX: 0, duration: 0.8, ease: "power3.inOut" }, 0.2)

      // Split name into characters for staggered animation
      if (nameRef.current) {
        const text = nameRef.current.innerText
        nameRef.current.innerHTML = text
          .split("")
          .map((char) =>
            char === " "
              ? '<span class="inline-block">&nbsp;</span>'
              : `<span class="inline-block">${char}</span>`
          )
          .join("")
        const chars = nameRef.current.querySelectorAll("span")
        tl.from(
          chars,
          {
            y: 80,
            opacity: 0,
            rotateX: -90,
            duration: 0.8,
            stagger: 0.03,
            ease: "back.out(1.7)",
          },
          0.3
        )
      }

      tl.from(subheadingRef.current, { y: 30, opacity: 0, duration: 0.7, ease: "power3.out" }, "-=0.3")
        .from(descriptionRef.current, { y: 30, opacity: 0, duration: 0.7 }, "-=0.4")
        .from(buttonsRef.current, { y: 30, opacity: 0, duration: 0.6 }, "-=0.3")
        .from(contactRef.current, { y: 20, opacity: 0, duration: 0.5 }, "-=0.2")

      // Floating glow animation
      gsap.to(glowRef.current, {
        y: -20,
        x: 10,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden"
    >
      {/* Animated background grid */}
      <div
        ref={gridRef}
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient glow orb */}
      <div
        ref={glowRef}
        className="absolute top-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-primary/5 dark:bg-primary/10 blur-[120px] pointer-events-none"
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="space-y-8">
          {/* Accent line */}
          <div
            ref={lineRef}
            className="w-16 h-1 rounded-full bg-gradient-to-r from-primary to-accent origin-left"
          />

          <div className="space-y-4">
            <h1
              ref={nameRef}
              className="text-5xl sm:text-6xl lg:text-8xl font-bold text-balance leading-tight [perspective:1000px]"
            >
              Martin Lehocký
            </h1>
            <p
              ref={subheadingRef}
              className="text-xl sm:text-2xl font-mono bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient-shift_4s_ease_infinite]"
            >
              iOS & Web Developer
            </p>
          </div>

          <p
            ref={descriptionRef}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed"
          >
            Motivated student specializing in hybrid applications and iOS development with modern technologies. I work
            most productively in team environments and strive to contribute to shared goals.
          </p>

          <div ref={buttonsRef} className="flex flex-wrap items-center gap-4">
            <Button size="lg" className="gap-2 group" asChild>
              <a href="#projects">
                View Projects{" "}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 bg-transparent hover:bg-primary/5 transition-all duration-300"
              asChild
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          <div ref={contactRef} className="flex flex-wrap items-center gap-6 pt-4">
            <a
              href="mailto:martin.lehocky2007@gmail.com"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">martin.lehocky2007@gmail.com</span>
            </a>
            <a
              href="tel:+421948087600"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">+421 948 087 600</span>
            </a>
            <a
              href="https://www.linkedin.com/in/martinlehocky"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
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
