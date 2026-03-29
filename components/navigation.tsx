"use client"

import {useEffect, useMemo, useState} from "react"
import {List, Moon, Sun, X} from "@phosphor-icons/react"
import {useTranslations} from "next-intl"
import {Button} from "@/components/ui/button"
import {useTheme} from "@/components/theme-provider"
import {LanguageSwitcher} from "@/components/language-switcher"
import {navItems} from "@/lib/portfolio-data"
import {cn} from "@/lib/utils"

export function Navigation() {
  const t = useTranslations("nav")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("about")
  const [mounted, setMounted] = useState(false)
  const {theme, toggleTheme} = useTheme()

  const items = useMemo(
    () => navItems.map((item) => ({id: item.id, label: t(item.labelKey)})),
    [t]
  )

  useEffect(() => {
    setMounted(true)

    const onScroll = () => {
      setIsScrolled(window.scrollY > 28)
      const offsets = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean)
        .map((el) => ({id: el!.id, top: Math.abs(el!.getBoundingClientRect().top - 120)}))
      if (offsets.length > 0) {
        offsets.sort((a, b) => a.top - b.top)
        setActiveSection(offsets[0].id)
      }
    }

    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (!isMobileMenuOpen) {
      document.body.style.overflow = ""
      return
    }

    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled ? "border-b border-border/60 bg-background/85 backdrop-blur-xl" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-2 px-4 pt-safe sm:px-6 lg:px-8">
        <a href="#" className="line-clamp-1 max-w-[58vw] font-display text-sm font-semibold tracking-tight sm:max-w-none sm:text-lg">
          {t("brand")}
        </a>

        <nav className="hidden items-center gap-2 md:flex">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                "rounded-full px-3 py-1.5 text-sm font-medium transition-colors",
                activeSection === item.id
                  ? "bg-primary/12 text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <LanguageSwitcher />
          <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label={t("theme")}>
            {!mounted ? <Sun size={18} /> : theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Button variant="ghost" size="icon" className="h-11 w-11" onClick={toggleTheme} aria-label={t("theme")}>
            {!mounted ? <Sun size={18} /> : theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-11 w-11"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label={isMobileMenuOpen ? t("closeMenu") : t("openMenu")}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav"
          >
            {isMobileMenuOpen ? <X size={20} /> : <List size={20} />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen ? (
        <div id="mobile-nav" className="border-t border-border/60 bg-background/95 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-4 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-4">
            <LanguageSwitcher />
            <div className="flex flex-col gap-1">
              {items.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "min-h-11 rounded-lg px-3 py-2.5 text-sm font-medium",
                    activeSection === item.id ? "bg-primary/12 text-primary" : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
