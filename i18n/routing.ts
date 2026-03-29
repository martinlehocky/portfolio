import {defineRouting} from "next-intl/routing"

export const routing = defineRouting({
  locales: ["en", "sk", "de"],
  defaultLocale: "en",
  localePrefix: "always",
})
