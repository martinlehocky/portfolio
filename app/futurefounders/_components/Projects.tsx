import {projects} from "../content"
import s from "../notebook.module.css"
import SectionHead from "./SectionHead"
import {tie} from "./text"

/** Čo som ešte spravil: a short supporting list, not a CV. */
export default function Projects() {
  const headingId = `${projects.id}-nadpis`
  return (
    <section id={projects.id} aria-labelledby={headingId} className={`${s.section} ${s.sectionProjects}`}>
      <div className={s.wrap}>
        <SectionHead id={headingId} kicker={projects.kicker} title={projects.h2} small />
        <ul className={s.projects}>
          {projects.items.map((item) => (
            <li key={item.name} className={s.project} data-seq data-start="top 88%">
              <span className={s.projectRule} data-step="line" aria-hidden="true" />
              {item.date ? (
                <p className={s.projectDate}>{item.date}</p>
              ) : (
                <span className={`${s.projectDate} ${s.projectDateEmpty}`} aria-hidden="true" />
              )}
              <div className={s.projectBody} data-step="rise" data-at="<+0.1">
                <h3 className={s.projectName}>{item.name}</h3>
                <p className={s.projectText}>{tie(item.text)}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
