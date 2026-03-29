import type {Metadata} from "next"
import {getTranslations, setRequestLocale} from "next-intl/server"
import {Navigation} from "@/components/navigation"
import {Hero} from "@/components/hero"
import {About} from "@/components/about"
import {Skills} from "@/components/skills"
import {Projects} from "@/components/projects"
import {Events} from "@/components/events"
import {Contact} from "@/components/contact"

type Props = {
  params: Promise<{locale: string}>
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale} = await params
  const t = await getTranslations({locale, namespace: "meta"})

  return {
    title: t("title"),
    description: t("description"),
  }
}

export default async function LocalizedPage({params}: Props) {
  const {locale} = await params
  setRequestLocale(locale)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Events />
        <Contact />
      </main>
    </div>
  )
}
