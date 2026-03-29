import type {Icon} from "@phosphor-icons/react"
import {Card} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"

type SkillGroupProps = {
  title: string
  icon: Icon
  items: string[]
}

export function SkillGroup({title, icon: Icon, items}: SkillGroupProps) {
  return (
    <Card className="border-border/70 bg-card/80 p-5 shadow-sm sm:p-7">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/12 text-primary">
          <Icon size={20} weight="regular" />
        </div>
        <h3 className="font-display text-lg font-semibold sm:text-xl">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <Badge key={item} variant="outline" className="rounded-full px-3 py-1 text-xs">
            {item}
          </Badge>
        ))}
      </div>
    </Card>
  )
}
