"use client"

import {useEffect, useRef} from "react"
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {useTranslations} from "next-intl"
import {Button} from "@/components/ui/button"
import {Card} from "@/components/ui/card"
import {SectionShell} from "@/components/section-shell"
import {SectionHeading} from "@/components/section-heading"
import {contacts} from "@/lib/portfolio-data"

gsap.registerPlugin(ScrollTrigger)

export function Contact() {
  const t = useTranslations("contact")
  const footerT = useTranslations("footer")
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return
    }

    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray<HTMLElement>("[data-contact='animated']")

      gsap.fromTo(
        targets,
        {y: 20, autoAlpha: 0},
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.55,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 84%",
            once: true,
            invalidateOnRefresh: true,
          },
        }
      )

      ScrollTrigger.refresh()
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <SectionShell id="contact" tinted>
      <div ref={sectionRef} className="space-y-7 sm:space-y-10">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
          align="center"
          className="mx-auto max-w-2xl"
        />

        <div className="mx-auto grid max-w-4xl gap-3 sm:grid-cols-2 sm:gap-4">
          {contacts.map((contact) => {
            const Icon = contact.icon
            const value =
              contact.id === "location"
                ? t("locationValue")
                : contact.id === "linkedin"
                  ? t("linkedinValue")
                  : contact.id === "email"
                    ? "martin.lehocky2007@gmail.com"
                    : "+421 948 087 600"

            return (
              <Card
                key={contact.id}
                data-contact="animated"
                className="mx-auto w-full max-w-md border-border/70 bg-card/90 p-4 shadow-sm sm:max-w-none sm:p-5"
              >
                <div className="flex items-start gap-3 text-left">
                  <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/12 text-primary">
                    <Icon size={18} weight="regular" />
                  </div>
                  <div className="min-w-0 w-full">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-muted-foreground sm:tracking-wide">
                      {t(contact.id)}
                    </p>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        target={contact.id === "linkedin" ? "_blank" : undefined}
                        rel={contact.id === "linkedin" ? "noopener noreferrer" : undefined}
                        className="mt-1 block min-h-11 break-words text-[13px] font-medium leading-snug text-foreground transition-colors hover:text-primary sm:min-h-0 sm:text-sm"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="mt-1 text-[13px] font-medium leading-snug text-foreground sm:text-sm">{value}</p>
                    )}
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        <div data-contact="animated" className="mx-auto w-full max-w-sm text-center sm:max-w-none">
          <Button asChild size="lg" className="min-h-11 w-full rounded-full px-8 sm:w-auto">
            <a href="mailto:martin.lehocky2007@gmail.com">{t("cta")}</a>
          </Button>
        </div>

        <footer data-contact="animated" className="border-t border-border/70 pt-6 text-center sm:pt-8">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Martin Lehocky. {footerT("builtWith")}
          </p>
        </footer>
      </div>
    </SectionShell>
  )
}
