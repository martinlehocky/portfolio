import Photo from "../_shared/Photo"
import {hero, meta} from "../content"
import s from "../notebook.module.css"
import {tie} from "./text"
import {ArrowDown, ArrowRightSmall, ArrowToFaceDesk, ArrowToFacePhone, Star, WavyUnderline} from "./Doodles"

/** Title page: the taped polaroid first, then the name, the intro and the index card. */
export default function Hero() {
  return (
    <header className={s.hero}>
      <div className={`${s.wrap} ${s.heroGrid}`}>
        <p className={s.heroKicker} data-m="hero-kicker">
          <span>{hero.kicker}</span>
          <span data-m="hero-star" className={s.heroStarWrap}>
            <Star className={s.heroStar} draw={false} />
          </span>
        </p>

        <div className={s.polaroidPlace} data-m="hero-polaroid">
          <figure className={`${s.polaroid} ${s.paper}`}>
            <span className={s.polaroidTape} data-m="hero-tape" aria-hidden="true" />
            <div className={s.photoFrame}>
              <Photo
                className={s.photo}
                sizes="(min-width: 1280px) 356px, (min-width: 1024px) 296px, (min-width: 720px) 256px, (min-width: 640px) 276px, 70vw"
                alt={meta.photoAlt}
                priority
              />
            </div>
            <figcaption className={s.caption}>{hero.photoCaption}</figcaption>
          </figure>
          <p className={s.faceNote} data-m="hero-note" aria-hidden="true">
            {hero.photoAnnotation}
          </p>
          <span data-m="hero-arrow" className={s.faceArrowPhone}>
            <ArrowToFacePhone />
          </span>
          <span data-m="hero-arrow" className={s.faceArrowDesk}>
            <ArrowToFaceDesk />
          </span>
        </div>

        <h1 className={s.h1} data-m="hero-h1">
          <span className={s.h1Line}>{hero.firstName}</span>{" "}
          <span className={`${s.h1Line} ${s.surname}`}>
            {hero.lastName}
            <span data-m="hero-underline" className={s.surnameLine}>
              <WavyUnderline draw={false} />
            </span>
          </span>
        </h1>

        <div className={s.heroText}>
          <p className={s.lead} data-m="hero-text">
            {tie(hero.lead)}
          </p>
          <p className={s.intro} data-m="hero-text">
            {tie(hero.intro)}
          </p>
        </div>

        <nav className={s.tocPlace} aria-labelledby="obsah-nadpis" data-m="hero-toc">
          <div className={`${s.toc} ${s.paper}`}>
            <h2 id="obsah-nadpis" className={s.tocTitle}>
              {hero.tocTitle}
            </h2>
            <ol className={s.tocList}>
              {hero.toc.map((item, i) => (
                <li key={item.id}>
                  <a className={s.tocLink} href={`#${item.id}`}>
                    <span className={s.tocNum} aria-hidden="true">
                      {i + 1}
                    </span>
                    <span className={s.tocLabel}>{tie(item.label)}</span>
                    <span className={s.tocLeader} aria-hidden="true" />
                    <ArrowRightSmall className={s.tocArrow} />
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </nav>

        <p className={s.scrollHint} data-m="hero-scroll" aria-hidden="true">
          <span>{hero.scrollHint}</span>
          <span className={s.scrollArrow} data-m="hero-scroll-arrow">
            <ArrowDown />
          </span>
        </p>
      </div>
    </header>
  )
}
