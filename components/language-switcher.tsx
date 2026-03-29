"use client"

import {GlobeHemisphereWest} from "@phosphor-icons/react"
import {useLocale, useTranslations} from "next-intl"
import {usePathname, useRouter} from "@/i18n/navigation"

const locales = ["en", "sk", "de"] as const

export function LanguageSwitcher() {
  const locale = useLocale()
  const t = useTranslations("language")
  const pathname = usePathname()
  const router = useRouter()

  return (
    <label className="inline-flex min-h-11 max-w-full items-center gap-2 rounded-full border border-border/70 bg-background/80 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
      <GlobeHemisphereWest size={14} weight="regular" />
      <span className="sr-only">{t("label")}</span>
      <select
        className="max-w-[9.5rem] truncate bg-transparent pr-1 text-foreground outline-none"
        value={locale}
        aria-label={t("label")}
        onChange={(event) => router.replace(pathname, {locale: event.target.value})}
      >
        {locales.map((value) => (
          <option key={value} value={value}>
            {t(value)}
          </option>
        ))}
      </select>
    </label>
  )
}
