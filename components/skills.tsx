import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Database, Server, Users } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code2,
      skills: ["Swift / SwiftUI", "Vue.js", "Nuxt.js", "React Native", "HTML", "CSS"],
    },
    {
      title: "Backend",
      icon: Database,
      skills: ["JavaScript", "Java", "C#"],
    },
    {
      title: "DevOps & Infrastructure",
      icon: Server,
      skills: ["Linux (RHEL)", "Server Administration", "Storage Technologies"],
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Team Collaboration", "Proactive & Independent", "Fast Learner", "Problem Solving"],
    },
  ]

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">Skills & Expertise</h2>
            <p className="text-lg text-muted-foreground">
              Specialized in modern development technologies with a focus on iOS and web applications
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {skillCategories.map((category) => {
              const Icon = category.icon
              return (
                <Card key={category.title} className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
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
