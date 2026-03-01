import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy } from "lucide-react"

export function Events() {
  const events = [
    {
      title: "HalovaJam Hackathon",
      icon: Trophy,
      tags: ["Hackathon"],
    },
    {
      title: "Hack Club Campfire GameJam",
      icon: Trophy,
      tags: ["Game Jam"],
    },
  ]

  return (
    <section id="events" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">Events</h2>
            <p className="text-lg text-muted-foreground">
              Hackathons, game jams, and community events I have participated in
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {events.map((event) => {
              const Icon = event.icon
              return (
                <Card key={event.title} className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{event.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {event.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
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
