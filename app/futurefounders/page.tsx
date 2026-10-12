import type {Metadata} from "next"
import {RiArrowUpLine} from "@remixicon/react"
import {footer, meta, ui} from "./content"
import {body, hand, head} from "./fonts"
import s from "./notebook.module.css"
import NotebookMotion from "./_components/NotebookMotion"
import Tabs from "./_components/Tabs"
import Hero from "./_components/Hero"
import About from "./_components/About"
import Why from "./_components/Why"
import Hackathons from "./_components/Hackathons"
import Problem from "./_components/Problem"
import Projects from "./_components/Projects"
import Ending from "./_components/Ending"

// „Zápisník“: the page as Martin's squared school notebook.
// All copy lives in ./content.ts, all motion in ./_components/NotebookMotion.tsx.

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
}

export default function ZapisnikPage() {
  return (
    <NotebookMotion className={`${s.page} ${body.variable} ${head.variable} ${hand.variable}`}>
      <a className={s.skip} href="#obsah">
        {ui.skipLink}
      </a>

      <Tabs />

      <main id="obsah" className={s.main} tabIndex={-1}>
        <Hero />
        <About />
        <Why />
        <Hackathons />
        <Problem />
        <Projects />
        <Ending />
      </main>

      <footer className={s.footer}>
        <div className={`${s.wrap} ${s.footerInner}`}>
          <p className={s.footerName}>{footer.name}</p>
          <a className={`${s.footerTop} ${s.penLink}`} href="#zaciatok">
            <RiArrowUpLine size={16} aria-hidden="true" />
            {footer.backToTop}
          </a>
        </div>
      </footer>
    </NotebookMotion>
  )
}
