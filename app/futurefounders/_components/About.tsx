import {about} from "../content"
import s from "../notebook.module.css"
import SectionHead from "./SectionHead"
import {WordCircle} from "./Doodles"
import {tie} from "./text"

/** 1 · Kto som a čo ma baví */
export default function About() {
  const headingId = `${about.id}-nadpis`
  return (
    <section id={about.id} aria-labelledby={headingId} className={s.section} data-chapter={about.id}>
      <div className={`${s.wrap} ${s.flow}`}>
        <SectionHead id={headingId} number={about.number} kicker={about.kicker} title={about.h2} />

        <p className={s.p} data-reveal>
          {tie(about.p1)}
        </p>

        <div className={`${s.ticketPlace} ${s.paper}`} data-place data-variant="stamp">
          <div className={s.ticket}>
            <div className={s.ticketStub}>
              <span className={s.ticketStubText}>{about.ticket.stub}</span>
              <span className={s.barcode} aria-hidden="true" />
            </div>
            <div className={s.ticketMain}>
              <span className={s.ticketTitle}>{about.ticket.title}</span>
              <span className={s.ticketNote}>{about.ticket.note}</span>
            </div>
          </div>
        </div>

        <p className={s.p} data-reveal>
          {tie(about.p2)}
        </p>

        <div className={`${s.sticky} ${s.stickyYellow} ${s.stickyMaya} ${s.paper}`} data-place>
          <p className={s.stickyTitle}>{about.stickyMaya.title}</p>
          <p className={s.stickyText}>{tie(about.stickyMaya.text)}</p>
        </div>

        <p className={s.p} data-seq data-step="rise" data-start="top 75%">
          {tie(about.p3.before)}
          <span className={s.circled}>
            {about.p3.mark}
            <WordCircle className={s.circledSvg} at="+=0.1" />
          </span>
          {tie(about.p3.after)}
        </p>

        <div className={`${s.sticky} ${s.stickyGreen} ${s.stickyImade} ${s.paper}`} data-place>
          <span className={s.stickyTape} data-step="tape" aria-hidden="true" />
          <p className={s.stickyTitle}>{about.stickyImade.title}</p>
          <p className={s.stickyText}>{tie(about.stickyImade.text)}</p>
        </div>
      </div>
    </section>
  )
}
