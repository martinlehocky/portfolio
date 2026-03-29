import type {ReactNode} from "react"
import {cn} from "@/lib/utils"

type SectionHeadingProps = {
  title: string
  description: string
  eyebrow?: string
  align?: "left" | "center"
  className?: string
  actions?: ReactNode
}

export function SectionHeading({
  title,
  description,
  eyebrow,
  align = "left",
  className,
  actions,
}: SectionHeadingProps) {
  return (
    <div className={cn("space-y-4", align === "center" && "mx-auto max-w-3xl text-center", className)}>
      {eyebrow ? (
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary sm:text-sm sm:tracking-[0.22em]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-2xl font-semibold leading-tight sm:text-4xl lg:text-5xl">{title}</h2>
      <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-lg">{description}</p>
      {actions}
    </div>
  )
}
