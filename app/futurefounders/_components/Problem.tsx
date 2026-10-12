import {problem} from "../content"
import s from "../notebook.module.css"
import SectionHead from "./SectionHead"
import {ArrowLeft, QuestionMark, Scribble} from "./Doodles"
import {tie} from "./text"

/** 4 · Aký problém ma teraz trápi */
export default function Problem() {
  const headingId = `${problem.id}-nadpis`
  return (
    <section
      id={problem.id}
      aria-labelledby={headingId}
      className={`${s.section} ${s.sectionProblem}`}
      data-chapter={problem.id}
    >
      <div className={`${s.wrap} ${s.flow}`}>
        <SectionHead id={headingId} number={problem.number} kicker={problem.kicker} title={problem.h2} />

        <p className={s.p} data-reveal>
          {tie(problem.p1)}
        </p>

        <p className={s.fromNote} aria-hidden="true" data-seq data-start="top 78%">
          <ArrowLeft className={s.fromNoteArrow} />
          <span data-step="fade">{tie(problem.annotation)}</span>
        </p>

        <p className={s.p} data-seq data-step="rise" data-start="top 75%">
          {tie(problem.p2.before)}
          <span className={`${s.hl} ${s.hlText}`} data-step="hl" data-dur="0.9">
            {tie(problem.p2.mark)}
          </span>
        </p>

        <span className={s.qmark} aria-hidden="true" data-seq data-start="top 75%">
          <QuestionMark className={s.qmarkSvg} />
        </span>

        <p className={s.p} data-reveal>
          {tie(problem.p3)}
        </p>

        <div className={`${s.sticky} ${s.stickyPink} ${s.stickyHr} ${s.paper}`} data-place>
          <p className={s.stickyTitle}>{problem.hrCard.title}</p>
          <p className={s.stickyText}>{tie(problem.hrCard.text)}</p>
          <span className={s.redacted} aria-hidden="true">
            <Scribble className={s.redactedSvg} />
          </span>
        </div>
      </div>
    </section>
  )
}
