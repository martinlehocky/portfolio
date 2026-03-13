import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Events } from "@/components/events"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { CustomCursor } from "@/components/custom-cursor"

export default function Page() {
  return (
    <div className="min-h-screen">
      <CustomCursor />
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
