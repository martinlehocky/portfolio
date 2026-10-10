import {munich} from "../content"
import s from "../notebook.module.css"
import SectionHead from "./SectionHead"
import {ArrowCurly, ArrowDiagram, ArrowStat, WordCircle} from "./Doodles"
import {tie} from "./text"

/** 3 · Hacking Legal 2026 v Mníchove */
export default function Munich() {
  const headingId = `${munich.id}-nadpis`
  const {livebook} = munich
  return (
    <section id={munich.id} aria-labelledby={headingId} className={s.section} data-chapter={munich.id}>
      <div className={s.wrap}>
        <div className={s.headRow}>
          <SectionHead id={headingId} number={munich.number} kicker={munich.kicker} title={munich.h2} />

          <ul className={s.stats} data-seq data-start="top 80%">
            {munich.stats.map((line) => (
              <li key={line} className={s.statGroup}>
                <span className={s.statLine} data-step="fade">
                  {line}
                </span>
                <ArrowStat className={s.statArrow} />
              </li>
            ))}
            <li className={s.statLine} data-step="fade">
              {munich.statsLast.before}
              <span className={s.circled}>
                {munich.statsLast.mark}
                <WordCircle className={s.circledSvgSmall} dur={0.8} />
              </span>
            </li>
          </ul>
        </div>

        <div className={s.textCol}>
          <p className={s.p} data-reveal>
            {tie(munich.p1)}
          </p>
          <p className={s.p} data-reveal>
            {tie(munich.p2)}
          </p>
        </div>

        <article className={`${s.livebook} ${s.paper}`} aria-labelledby="livebook-nadpis" data-place>
          <div className={s.lbHead}>
            <h3 id="livebook-nadpis" className={s.lbTitle}>
              {livebook.title}
            </h3>
            <figure className={s.diagram} role="img" aria-label={livebook.diagramLabel}>
              <span className={s.diagramFrom}>{livebook.diagramFrom}</span>
              <ArrowDiagram className={s.diagramArrow} />
              <span className={s.diagramTo} data-step="pop">
                {livebook.diagramTo}
              </span>
            </figure>
          </div>
          <p className={s.lbIntro}>{tie(livebook.intro)}</p>
          <div className={s.lbCols}>
            <div className={s.lbCol}>
              <p className={s.lbLabel}>{livebook.business.label}</p>
              <p className={s.lbText}>{tie(livebook.business.text)}</p>
            </div>
            <div className={s.lbCol}>
              <p className={s.lbLabel}>{livebook.lawyers.label}</p>
              <p className={s.lbText}>{tie(livebook.lawyers.text)}</p>
            </div>
          </div>
        </article>

        <div className={s.textCol}>
          <p className={s.p} data-reveal>
            {tie(munich.p3)}
          </p>
        </div>

        <p className={s.backNote} data-seq data-start="top 75%">
          <span className={s.backNoteText} data-step="fade">
            {tie(munich.annotation)}
          </span>
          <ArrowCurly className={s.backNoteArrow} />
        </p>
      </div>
    </section>
  )
}
