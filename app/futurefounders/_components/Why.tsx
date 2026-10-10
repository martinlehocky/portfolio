import {ui, why} from "../content"
import s from "../notebook.module.css"
import SectionHead from "./SectionHead"
import {ArrowQuote, Box, Check, Cross, Strike, Underline, WavySmall} from "./Doodles"
import {tie} from "./text"

/** 2 · Prečo robím to, čo robím */
export default function Why() {
  const headingId = `${why.id}-nadpis`
  const {teya, todo, lessons} = why
  // In the narrow margin column (desktop) the handwritten quote is written on two lines.
  const quoteWords = why.marginQuote.split(" ")
  const half = Math.ceil(quoteWords.length / 2)
  const quoteFirst = quoteWords.slice(0, half).join(" ")
  const quoteSecond = quoteWords.slice(half).join(" ")
  return (
    <section id={why.id} aria-labelledby={headingId} className={s.section} data-chapter={why.id}>
      <div className={s.wrap}>
        {/* Section head + first paragraph, with the Testovanie 9 card in the margin beside them (desktop). */}
        <div className={s.pairTop}>
          <SectionHead id={headingId} number={why.number} kicker={why.kicker} title={why.h2} />

          <p className={s.p} data-seq data-step="rise" data-start="top 75%">
            {tie(why.p1.before)}
            <span className={`${s.hl} ${s.hlText}`} data-step="hl" data-dur="0.9">
              {tie(why.p1.mark)}
            </span>
          </p>

          <div className={`${s.cardT9} ${s.indexCard} ${s.paper}`} data-place>
            <span className={s.paperClip} data-step="clip" aria-hidden="true" />
            <p className={s.cardLabel}>{why.card.label}</p>
            <p className={`${s.cardText} ${s.ruled}`}>{tie(why.card.text)}</p>
          </div>
        </div>

        {/* Teya */}
        <div className={s.teya}>
          <h3 className={s.h3} data-reveal>
            {tie(teya.h3)}
          </h3>
          <p className={s.p} data-reveal>
            {tie(teya.intro)}
          </p>

          <div className={`${s.checklist} ${s.paper}`} data-place data-start="top 80%">
            <p className={s.checklistTitle}>{teya.listTitle}</p>
            <ul className={s.checkItems}>
              {teya.done.map((item, i) => (
                <li key={i} className={s.checkItem}>
                  <span className={s.checkBox}>
                    <Box className={s.boxSvg} />
                    <Check className={s.checkSvg} at={i === 0 ? "+=0.05" : ">-0.17"} />
                  </span>
                  <span>{tie(item)}</span>
                </li>
              ))}
              <li className={`${s.checkItem} ${s.checkNow}`}>
                <span className={s.checkBox}>
                  <Box className={s.boxSvg} />
                </span>
                <span>
                  {tie(teya.now)}{" "}
                  <span className={s.wip} data-step="wiggle" data-at=">-0.05">
                    {teya.nowAnnotation}
                    <WavySmall className={s.wipLine} draw={false} />
                  </span>
                </span>
              </li>
            </ul>
          </div>

          <p className={s.p} data-reveal>
            {tie(teya.after)}
          </p>
        </div>

        {/* Belief, with the handwritten „Život máme iba jeden.“ in the margin. */}
        <div className={s.beliefRow}>
          <p className={s.marginQuote} aria-hidden="true" data-seq data-start="top 80%">
            <span className={s.marginQuoteText} data-step="fade">
              {quoteFirst} <br className={s.quoteBreak} />
              {quoteSecond}
              <Underline className={s.marginQuoteLine} />
            </span>
            <ArrowQuote className={s.marginQuoteArrow} />
          </p>
          <p className={s.p} data-reveal>
            {tie(why.belief)}
          </p>
        </div>

        {/* Two lessons; the second one gets the to-do note. */}
        <div className={s.lessons}>
          <h3 className={s.h3} data-reveal>
            {tie(lessons.h3)}
          </h3>
          <div className={s.pairTodo}>
            <div className={s.lessonText}>
              <p className={s.p} data-reveal>
                {tie(lessons.p1)}
              </p>
              <p className={s.p} data-reveal>
                {tie(lessons.p2)}
              </p>
            </div>

            <div className={`${s.todoPlace} ${s.paper}`} data-place data-start="top 80%">
              <div className={s.todo}>
                <p className={s.todoTitle}>{todo.title}</p>
                <ul className={s.todoList}>
                  <li className={s.todoItem}>
                    <span className={s.checkBox}>
                      <Box className={s.boxSvg} />
                      <Cross className={s.crossSvg} order={2} />
                    </span>
                    <del className={s.struck}>
                      <span className={s.srOnly}>{ui.struckOutPrefix} </span>
                      {todo.struck}
                      <Strike className={s.strikeSvg} at="+=0.4" order={1} />
                    </del>
                  </li>
                  {todo.items.map((item, i) => (
                    <li key={item} className={s.todoItem}>
                      <span className={s.checkBox}>
                        <Box className={s.boxSvg} />
                        <Check className={s.checkSvg} order={3} at={i === 0 ? ">+0.05" : ">-0.15"} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
