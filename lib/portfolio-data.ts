import type {Icon} from "@phosphor-icons/react"
import {
  CalendarDots,
  Code,
  Database,
  DeviceMobile,
  EnvelopeSimple,
  GameController,
  GlobeHemisphereWest,
  GraduationCap,
  LinkedinLogo,
  MapPin,
  Phone,
  Stack,
  Trophy,
  UsersThree,
  HardDrives,
} from "@phosphor-icons/react"

export type NavItem = {
  id: string
  labelKey: string
}

export type AboutCard = {
  id: string
  icon: Icon
}

export type SkillCategory = {
  id: string
  icon: Icon
  itemIds: string[]
}

export type Project = {
  id: string
  icon: Icon
  tagIds: string[]
}

export type EventItem = {
  id: string
  year: string
  tagIds: string[]
  icon: Icon
}

export type ContactItem = {
  id: string
  icon: Icon
  href?: string
}

export const navItems: NavItem[] = [
  {id: "about", labelKey: "about"},
  {id: "skills", labelKey: "skills"},
  {id: "projects", labelKey: "projects"},
  {id: "events", labelKey: "events"},
  {id: "contact", labelKey: "contact"},
]

export const aboutCards: AboutCard[] = [
  {id: "education", icon: GraduationCap},
  {id: "location", icon: MapPin},
  {id: "languages", icon: GlobeHemisphereWest},
]

export const skills: SkillCategory[] = [
  {id: "frontend", icon: Code, itemIds: ["swift", "swiftui", "vue", "nuxt", "reactNative", "htmlCss"]},
  {id: "backend", icon: Database, itemIds: ["javascript", "java", "csharp", "go", "postgres"]},
  {id: "infra", icon: Stack, itemIds: ["linux", "rhel", "serverAdmin", "storage", "cloud"]},
  {id: "game", icon: GameController, itemIds: ["unity", "assetDesign", "gameplay"]},
  {id: "soft", icon: UsersThree, itemIds: ["collaboration", "proactive", "learning", "problemSolving"]},
]

export const projects: Project[] = [
  {id: "plannie", icon: CalendarDots, tagIds: ["go", "nextjs", "postgres", "auth"]},
  {id: "healthie", icon: DeviceMobile, tagIds: ["swiftui", "ios", "health"]},
  {id: "testprep", icon: GlobeHemisphereWest, tagIds: ["frontend", "education", "interactive"]},
  {id: "homeserver", icon: HardDrives, tagIds: ["linux", "rhel", "devops"]},
]

export const events: EventItem[] = [
  {id: "halovajam", year: "2025", tagIds: ["hackathon"], icon: Trophy},
  {id: "halovamake", year: "2026", tagIds: ["organizer"], icon: Trophy},
  {id: "campfire", year: "2026", tagIds: ["gameJam"], icon: Trophy},
]

export const contacts: ContactItem[] = [
  {id: "email", icon: EnvelopeSimple, href: "mailto:martin.lehocky2007@gmail.com"},
  {id: "phone", icon: Phone, href: "tel:+421948087600"},
  {id: "linkedin", icon: LinkedinLogo, href: "https://www.linkedin.com/in/martinlehocky"},
  {id: "location", icon: MapPin},
]
