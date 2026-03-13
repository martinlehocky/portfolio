"use client"

import { useRef, useEffect, useCallback } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Linkedin, MapPin, ArrowUpRight } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const footerRef = useRef<HTMLElement>(null)

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
            y: 40,
            opacity: 0,
            scale: 0.95,
            duration: 0.6,
            delay: i * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          })
        })
      }

      // CTA button with bounce
      gsap.from(ctaRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      })

      // Footer slide up
      if (footerRef.current) {
        gsap.from(footerRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 95%",
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
    const icon = e.currentTarget.querySelector("[data-contact-icon]")
    if (icon) {
      gsap.to(icon, { scale: 1.15, rotate: -5, duration: 0.3, ease: "power2.out" })
    }
  }, [])

  const handleCardLeave = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      y: 0,
      boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
      duration: 0.3,
      ease: "power2.out",
    })
    const icon = e.currentTarget.querySelector("[data-contact-icon]")
    if (icon) {
      gsap.to(icon, { scale: 1, rotate: 0, duration: 0.3, ease: "power2.out" })
    }
  }, [])

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "martin.lehocky2007@gmail.com",
      href: "mailto:martin.lehocky2007@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+421 948 087 600",
      href: "tel:+421948087600",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "martinlehocky",
      href: "https://www.linkedin.com/in/martinlehocky",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bratislava, Slovakia",
      href: null,
    },
  ]

  return (
    <section ref={sectionRef} id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/3 dark:bg-primary/5 blur-[150px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="space-y-12">
          <div ref={headingRef} className="space-y-4 text-center max-w-2xl mx-auto">
            <p className="text-sm font-mono text-primary tracking-wider uppercase">Let&apos;s connect</p>
            <h2 className="text-3xl sm:text-4xl font-bold">Get In Touch</h2>
            <p className="text-lg text-muted-foreground">
              I&apos;m eager to gain practical experience in server and enterprise solutions. I&apos;m most motivated working in
              teams and contributing to meaningful technology projects.
            </p>
          </div>

          <div ref={cardsRef} className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {contactInfo.map((contact) => {
              const Icon = contact.icon
              return (
                <Card
                  key={contact.label}
                  className="p-6 border-border/50 hover:border-primary/30 transition-all duration-300 group"
                  onMouseEnter={handleCardEnter}
                  onMouseLeave={handleCardLeave}
                >
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center flex-shrink-0">
                      <Icon data-contact-icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-1 flex-1 min-w-0">
                      <p className="text-sm font-medium text-muted-foreground">{contact.label}</p>
                      {contact.href ? (
                        <a
                          href={contact.href}
                          target={contact.label === "LinkedIn" ? "_blank" : undefined}
                          rel={contact.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                          className="text-sm font-medium hover:text-primary transition-colors duration-300 break-words inline-flex items-center gap-1"
                        >
                          {contact.value}
                          <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </a>
                      ) : (
                        <p className="text-sm font-medium break-words">{contact.value}</p>
                      )}
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>

          <div ref={ctaRef} className="text-center">
            <Button size="lg" className="group gap-2" asChild>
              <a href="mailto:martin.lehocky2007@gmail.com">
                Send Me an Email
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      <footer ref={footerRef} className="mt-24 pt-8 border-t border-border/50 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Martin Lehocký. Built with Next.js and Tailwind CSS.
        </p>
      </footer>
    </section>
  )
}
