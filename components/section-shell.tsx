import type {ReactNode} from "react"
import {cn} from "@/lib/utils"

type SectionShellProps = {
  id?: string
  children: ReactNode
  className?: string
  innerClassName?: string
  tinted?: boolean
}

export function SectionShell({
  id,
  children,
  className,
  innerClassName,
  tinted = false,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 px-4 py-16 sm:scroll-mt-28 sm:px-6 sm:py-24 lg:px-8 lg:py-28",
        tinted && "bg-muted/30",
        className
      )}
    >
      <div className={cn("mx-auto w-full max-w-6xl", innerClassName)}>{children}</div>
    </section>
  )
}
