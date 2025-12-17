import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Smartphone, Globe, Server } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Healthie",
      description:
        "iOS application with daily planner and health tracking features. Intuitive calorie and hydration tracking. Developed from design to final implementation.",
      icon: Smartphone,
      tags: ["SwiftUI", "iOS", "Health Tracking"],
    },
    {
      title: "Test Preparation Web App",
      description:
        "Interactive tool for preparing students for state testing (Testovanie 9). Facilitates learning and the preparation process.",
      icon: Globe,
      tags: ["Frontend", "Education", "Interactive"],
    },
    {
      title: "Home Server Infrastructure",
      description:
        "Independent learning of various storage technologies. Experience with Linux distributions, especially RHEL. Practical work with server administration.",
      icon: Server,
      tags: ["Linux", "RHEL", "DevOps"],
    },
  ]

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">Projects & Experience</h2>
            <p className="text-lg text-muted-foreground">
              Building practical applications and gaining hands-on experience with modern technologies
            </p>
          </div>

          <div className="grid gap-6">
            {projects.map((project) => {
              const Icon = project.icon
              return (
                <Card key={project.title} className="p-6 sm:p-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-3 flex-1">
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="outline">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
