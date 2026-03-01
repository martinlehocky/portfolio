import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Events } from "@/components/events"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"

export default function Page() {
  return (
    <div className="min-h-screen">
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
