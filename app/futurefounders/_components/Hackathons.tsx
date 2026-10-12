import {hackathons} from "../content"
import s from "../notebook.module.css"
import SectionHead from "./SectionHead"
import {ArrowDiagram, ArrowStat, WavySmall, WordCircle} from "./Doodles"
import {tie} from "./text"

/** 3 · Hackathony: the next one in Switzerland, Hacking Legal in Munich, and the earlier ones. */
export default function Hackathons() {
  const headingId = `${hackathons.id}-nadpis`
  const {next, munich, livebook} = hackathons
  return (
    <section id={hackathons.id} aria-labelledby={headingId} className={s.section} data-chapter={hackathons.id}>
      <div className={s.wrap}>
        {/* Section head + intro, with the ticket for the next hackathon in the margin beside them (desktop). */}
        <div className={s.pairTop}>
          <SectionHead id={headingId} number={hackathons.number} kicker={hackathons.kicker} title={hackathons.h2} />

          <div className={s.pairText}>
            <p className={s.p} data-reveal>
              {tie(hackathons.p1)}
            </p>
            <p className={s.p} data-reveal>
              {tie(hackathons.nextText)}
            </p>
          </div>

          <div className={`${s.nextPlace} ${s.paper}`} data-place data-variant="stamp">
            <span className={s.nextPin} aria-hidden="true" />
            <div className={`${s.ticket} ${s.ticketNext}`}>
              <div className={s.ticketStub}>
                <span className={s.ticketStubText}>{next.stub}</span>
                <span className={s.barcode} aria-hidden="true" />
              </div>
              <div className={s.ticketMain}>
                {next.name ? <span className={s.nextName}>{next.name}</span> : null}
                <span className={s.ticketTitle}>{next.place}</span>
                <span className={s.nextDate}>{next.date}</span>
              </div>
            </div>
            <p className={s.nextNote} data-step="wiggle" data-at=">-0.05">
              {next.note}
              <WavySmall className={s.wipLine} draw={false} />
            </p>
          </div>
        </div>

        {/* Hacking Legal in Munich, with the handwritten numbers in the margin. */}
        <div className={s.munich}>
          <div className={s.headRow}>
            <div>
              <h3 className={s.h3} data-reveal>
                {tie(munich.h3)}
              </h3>
              <p className={`${s.p} ${s.munichP}`} data-reveal>
                {tie(munich.p1)}
              </p>
              <p className={s.p} data-reveal>
                {tie(munich.p2)}
              </p>
            </div>

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

          <article className={`${s.livebook} ${s.paper}`} aria-labelledby="livebook-nadpis" data-place>
            <div className={s.lbHead}>
              <h4 id="livebook-nadpis" className={s.lbTitle}>
                {livebook.title}
              </h4>
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

          <p className={s.p} data-reveal>
            {tie(munich.p3)}
          </p>
        </div>

        {/* The earlier ones, as a short dated list. */}
        <div className={s.earlier}>
          <p className={s.earlierTitle} data-reveal>
            {hackathons.earlierTitle}
          </p>
          <ul className={s.projects}>
            {hackathons.earlier.map((item) => (
              <li key={item.name} className={s.project} data-seq data-start="top 88%">
                <span className={s.projectRule} data-step="line" aria-hidden="true" />
                <p className={s.projectDate}>{item.date}</p>
                <div className={s.projectBody} data-step="rise" data-at="<+0.1">
                  <h4 className={s.projectName}>{item.name}</h4>
                  <p className={s.projectText}>{tie(item.text)}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
