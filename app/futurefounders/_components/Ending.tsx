import {RiArrowRightUpLine, RiGlobalLine, RiLinkedinBoxLine, RiMailLine} from "@remixicon/react"
import {ending, ui} from "../content"
import s from "../notebook.module.css"
import {SignatureLine} from "./Doodles"
import {tie} from "./text"

/** The last page: a taped letter with the thank-you and the contact links. */
export default function Ending() {
  const headingId = `${ending.id}-nadpis`
  return (
    <section
      id={ending.id}
      aria-labelledby={headingId}
      className={`${s.section} ${s.sectionEnding}`}
      data-chapter={ending.id}
    >
      <div className={s.wrap}>
        <div className={`${s.letter} ${s.paper}`} data-place data-variant="letter" data-start="top 80%">
          <span className={`${s.letterTape} ${s.letterTapeL}`} data-step="tape" aria-hidden="true" />
          <span className={`${s.letterTape} ${s.letterTapeR}`} data-step="tape" data-at="<+0.08" aria-hidden="true" />

          <p className={s.letterKicker}>{ending.kicker}</p>
          <h2 id={headingId} className={s.letterTitle}>
            {tie(ending.h2)}
          </h2>
          <p className={s.letterText}>{tie(ending.p)}</p>

          <ul className={s.contacts}>
            <li data-step="rise" data-at=">-0.3">
              <a className={`${s.btn} ${s.btnPrimary}`} href={ending.email.href}>
                <RiMailLine size={20} aria-hidden="true" className={s.btnIcon} />
                <span className={s.btnLabel}>
                  <span>{ending.email.label}</span>
                  <span className={s.btnAddress}>{ending.email.address}</span>
                </span>
              </a>
            </li>
            <li data-step="rise" data-at="<+0.08">
              <a className={s.btn} href={ending.linkedin.href} target="_blank" rel="noopener noreferrer">
                <RiLinkedinBoxLine size={20} aria-hidden="true" className={s.btnIcon} />
                <span className={s.btnLabel}>
                  {ending.linkedin.label}
                  <span className={s.srOnly}> {ui.externalLinkHint}</span>
                </span>
                <RiArrowRightUpLine size={16} aria-hidden="true" className={s.btnExt} />
              </a>
            </li>
            <li data-step="rise" data-at="<+0.08">
              <a className={s.btn} href={ending.web.href} target="_blank" rel="noopener noreferrer">
                <RiGlobalLine size={20} aria-hidden="true" className={s.btnIcon} />
                <span className={s.btnLabel}>
                  {ending.web.label}
                  <span className={s.srOnly}> {ui.externalLinkHint}</span>
                </span>
                <RiArrowRightUpLine size={16} aria-hidden="true" className={s.btnExt} />
              </a>
            </li>
          </ul>

          <p className={s.signature}>
            <span className={s.signatureName}>{ending.signature}</span>
            <SignatureLine className={s.signatureLine} at=">+0.1" />
          </p>
        </div>
      </div>
    </section>
  )
}
