import s from "../notebook.module.css"
import {NumberCircle} from "./Doodles"
import {tie} from "./text"

type Props = {
  /** id of the h2 (the section's aria-labelledby points here). */
  id: string
  number?: string
  kicker: string
  title: string
  /** Supporting sections use a smaller h2 and a plain handwritten kicker. */
  small?: boolean
  className?: string
}

/** Kicker (circled number + highlighted handwriting) and the section's h2. */
export default function SectionHead({id, number, kicker, title, small = false, className}: Props) {
  return (
    <header className={[s.secHead, className].filter(Boolean).join(" ")} data-seq data-start="top 82%">
      <p className={s.kicker}>
        {number ? (
          <span className={s.kNum} aria-hidden="true">
            <span className={s.kNumDigit}>{number}</span>
            <NumberCircle className={s.kNumCircle} dur={0.5} />
          </span>
        ) : null}
        {small ? (
          <span className={s.kPlain} data-step="fade">
            {kicker}
          </span>
        ) : (
          <span className={s.hl} data-step="hl" data-at=">-0.2">
            {kicker}
          </span>
        )}
      </p>
      <h2 id={id} className={small ? s.h2Small : s.h2} data-step="rise" data-at="<+0.12">
        {tie(title)}
      </h2>
    </header>
  )
}
