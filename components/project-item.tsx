import type {Icon} from "@phosphor-icons/react"
import {Card} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"

type ProjectItemProps = {
  title: string
  description: string
  tags: string[]
  icon: Icon
}

export function ProjectItem({title, description, tags, icon: Icon}: ProjectItemProps) {
  return (
    <Card className="group border-border/70 bg-card/80 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg sm:p-8">
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/12 text-primary">
          <Icon size={22} weight="regular" />
        </div>
        <div className="space-y-3">
          <h3 className="font-display text-lg font-semibold leading-tight sm:text-xl">{title}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="rounded-full px-3 py-1 text-xs font-medium">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Card>
  )
}
