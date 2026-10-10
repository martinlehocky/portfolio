// Hand-drawn strokes for the notebook. All decorative (aria-hidden).
//
// Every stroke is a fully drawn <path> in the HTML. NotebookMotion only "draws" it with GSAP
// (DrawSVG) when motion is allowed, so without JS or with reduced motion the doodles are complete.
// `data-step="draw"` marks a stroke that is drawn as part of its group's sequence;
// `data-dur` / `data-at` / `data-order` tune the timing (duration in seconds, GSAP position, sort key).

type StrokeProps = {
  d: string
  dur?: number
  at?: string
  order?: number
  /** false = static ink, never animated. */
  draw?: boolean
  className?: string
}

function Stroke({d, dur, at, order, draw = true, className}: StrokeProps) {
  return (
    <path
      d={d}
      className={className}
      data-step={draw ? "draw" : undefined}
      data-dur={draw && dur ? dur : undefined}
      data-at={draw && at ? at : undefined}
      data-order={draw && order ? order : undefined}
    />
  )
}

type SvgProps = {
  className?: string
  viewBox: string
  children: React.ReactNode
  stretch?: boolean
  strokeWidth?: number
}

function Svg({className, viewBox, children, stretch = false, strokeWidth = 2}: SvgProps) {
  return (
    <svg
      className={className}
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      preserveAspectRatio={stretch ? "none" : undefined}
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  )
}

type DoodleProps = {className?: string; draw?: boolean; dur?: number; at?: string; order?: number}

/** Five-point star drawn in one go, like doodling in a margin. */
export function Star({className, draw = true, dur = 0.6, at}: DoodleProps) {
  return (
    <Svg className={className} viewBox="0 0 24 24" strokeWidth={1.7}>
      <Stroke draw={draw} dur={dur} at={at} d="M12.2 2.4 L17.9 20.6 L2.8 9.1 L21.3 9.6 L5.6 20.9 L12.6 3.4" />
    </Svg>
  )
}

/** A loose loop around a section number. */
export function NumberCircle({className, draw = true, dur = 0.6, at}: DoodleProps) {
  return (
    <Svg className={className} viewBox="0 0 48 44" strokeWidth={2.2}>
      <Stroke
        draw={draw}
        dur={dur}
        at={at}
        d="M30 6.5 C 17 3, 5 10.5, 5.5 23 C 6 34, 16 40, 26.5 38.5 C 37.5 37, 44 28.5, 42.5 19 C 41 9.5, 32 4.5, 22 6 C 18 6.6, 15 8.4, 13 10.5"
      />
    </Svg>
  )
}

/** A wide oval drawn around a word (stretches to the word's box). */
export function WordCircle({className, draw = true, dur = 0.9, at, order}: DoodleProps) {
  return (
    <Svg className={className} viewBox="0 0 120 44" stretch strokeWidth={2.2}>
      <Stroke
        draw={draw}
        dur={dur}
        at={at}
        order={order}
        d="M70 5 C 40 2.5, 8 9, 5 22 C 2.5 33, 30 40.5, 62 39.5 C 92 38.5, 117 31, 115 19.5 C 113 9, 88 4, 58 5.5 C 46 6, 36 8, 29 10.5"
      />
    </Svg>
  )
}

/** Wavy marker line under the surname. */
export function WavyUnderline({className, draw = true, dur = 0.6, at}: DoodleProps) {
  return (
    <Svg className={className} viewBox="0 0 300 16" stretch strokeWidth={4}>
      <Stroke
        draw={draw}
        dur={dur}
        at={at}
        d="M4 10 C 28 4, 52 13.5, 80 8.5 C 108 3.5, 130 12.5, 160 9 C 190 5.5, 214 12, 244 8 C 262 5.5, 282 8, 296 6"
      />
    </Svg>
  )
}

/** "to som ja" arrow on phone and tablet: from the note above the corner, down across the sky, to just right of the face. */
export function ArrowToFacePhone({className}: {className?: string}) {
  return (
    <Svg className={className} viewBox="0 0 120 210" strokeWidth={2.4}>
      <path d="M104 6 C 114 52, 98 108, 66 148 C 48 170, 28 185, 9 195.5" />
      <path d="M15.5 184 C 13.4 188, 10.9 192, 8.2 196 C 12.6 196.4, 16.8 196.9, 21.2 197.8" />
    </Svg>
  )
}

/** "to som ja" arrow on desktop: from the margin, to the right, at the face. */
export function ArrowToFaceDesk({className}: {className?: string}) {
  return (
    <Svg className={className} viewBox="0 0 140 56" strokeWidth={2.2}>
      <path d="M4 10 C 24 40, 72 50, 131 33" />
      <path d="M119.5 25 C 124 27.6, 128 30, 132.5 32.6 C 128 35.6, 124.4 38.8, 121 42.6" />
    </Svg>
  )
}

/** Small arrow pointing down (scroll hint). */
export function ArrowDown({className}: {className?: string}) {
  return (
    <Svg className={className} viewBox="0 0 24 30" strokeWidth={2}>
      <path d="M12 3 C 10.5 10, 13.5 17, 12 26" />
      <path d="M6.5 20 C 8.5 22.5, 10.5 24.5, 12 26.5 C 13.6 24, 15.6 21.6, 18 19.5" />
    </Svg>
  )
}

/** Tiny static arrow used in the table of contents rows. */
export function ArrowRightSmall({className}: {className?: string}) {
  return (
    <Svg className={className} viewBox="0 0 24 14" strokeWidth={1.8}>
      <path d="M2 7.5 C 8 6, 14 8, 20.5 7" />
      <path d="M15.5 2.5 C 17.5 4.5, 19.3 6, 21 7 C 19.2 8.5, 17.4 10, 15.8 11.8" />
    </Svg>
  )
}

/** Short arrow between the handwritten numbers in Mníchov. */
export function ArrowStat({className, draw = true}: DoodleProps) {
  return (
    <Svg className={className} viewBox="0 0 20 26" strokeWidth={2}>
      <Stroke draw={draw} dur={0.3} at=">-0.05" d="M10 2 C 8.5 8, 11.5 14, 10 21" />
      <Stroke draw={draw} dur={0.15} at=">" d="M5 16.5 C 7 18.5, 8.5 20, 10 22 C 11.5 20, 13 18, 15 16" />
    </Svg>
  )
}

/** Curly arrow pointing down towards the next section. */
export function ArrowCurly({className, draw = true}: DoodleProps) {
  return (
    <Svg className={className} viewBox="0 0 70 122" strokeWidth={2.2}>
      <Stroke
        draw={draw}
        dur={1}
        at=">-0.1"
        d="M40 4 C 62 18, 60 44, 40 50 C 22 55, 18 36, 34 32 C 52 28, 56 60, 44 82 C 38 94, 32 104, 28 114"
      />
      <Stroke draw={draw} dur={0.2} at=">" d="M19.5 104.5 C 22.5 108, 25 111, 28 115.5 C 31 112, 34 109, 38 106.5" />
    </Svg>
  )
}

/** Arrow pointing left (margin notes pointing back into the text). */
export function ArrowLeft({className, draw = true, at}: DoodleProps) {
  return (
    <Svg className={className} viewBox="0 0 48 22" strokeWidth={2}>
      <Stroke draw={draw} dur={0.45} at={at} d="M45 12 C 32 9, 19 13, 4 11" />
      <Stroke draw={draw} dur={0.15} at=">" d="M11.5 4.5 C 9 6.6, 6.5 8.8, 3.6 11 C 6.4 13, 9 15.2, 12 17.5" />
    </Svg>
  )
}

/** Curved arrow from the „Život…“ note down-left into the paragraph (desktop). */
export function ArrowQuote({className, draw = true}: DoodleProps) {
  return (
    <Svg className={className} viewBox="0 0 60 44" strokeWidth={2}>
      <Stroke draw={draw} dur={0.5} at=">" d="M54 4 C 46 24, 28 34, 6 34" />
      <Stroke draw={draw} dur={0.15} at=">" d="M14 27 C 11 29.5, 8.5 31.5, 5.5 34 C 9 35.5, 12 37, 15 39.5" />
    </Svg>
  )
}

/** Wobbly arrow in the Livebook sketch. */
export function ArrowDiagram({className, draw = true}: DoodleProps) {
  return (
    <Svg className={className} viewBox="0 0 64 24" strokeWidth={2}>
      <Stroke draw={draw} dur={0.55} at=">" d="M3 13 C 14 8, 24 17, 36 11 C 44 7.5, 52 12, 59 12" />
      <Stroke draw={draw} dur={0.15} at=">" d="M51 5.5 C 54 8, 57 10, 60 12 C 57 14.5, 54 17, 51 19" />
    </Svg>
  )
}

/** Plain marker underline (under the „Život…“ note). */
export function Underline({className, draw = true, dur = 0.6, at}: DoodleProps) {
  return (
    <Svg className={className} viewBox="0 0 220 12" stretch strokeWidth={2.4}>
      <Stroke draw={draw} dur={dur} at={at} d="M3 8 C 50 4, 110 3, 160 6 C 180 7, 200 9, 217 5" />
    </Svg>
  )
}

/** Scribbled underline under the signature. */
export function SignatureLine({className, draw = true, dur = 0.8, at}: DoodleProps) {
  return (
    <Svg className={className} viewBox="0 0 150 22" strokeWidth={2.6}>
      <Stroke draw={draw} dur={dur} at={at} d="M4 13 C 40 7, 92 5, 142 8 C 112 10.5, 76 14, 44 17.5" />
    </Svg>
  )
}

/** Tiny wavy line under "rozrobené". */
export function WavySmall({className, draw = true, dur = 0.4, at}: DoodleProps) {
  return (
    <Svg className={className} viewBox="0 0 100 8" stretch strokeWidth={1.8}>
      <Stroke
        draw={draw}
        dur={dur}
        at={at}
        d="M2 5 C 12 1.5, 20 8, 30 4.5 C 40 1, 48 8, 58 4.5 C 68 1, 76 8, 86 4.5 C 92 2.5, 96 3.5, 98 4"
      />
    </Svg>
  )
}

/** Hand-drawn checkbox (static ink). */
export function Box({className}: {className?: string}) {
  return (
    <Svg className={className} viewBox="0 0 26 26" strokeWidth={1.75}>
      <path d="M4 5 C 9.5 4.4, 15.5 4.1, 21.4 4.4 C 21.6 10, 21.8 15.5, 21.9 21.4 C 15.8 21.8, 9.8 22, 4.2 21.7 C 4 16, 3.9 10.5, 4.3 4.3" />
    </Svg>
  )
}

/** Tick that overshoots the box, the way people actually tick things. */
export function Check({className, draw = true, dur = 0.35, at, order}: DoodleProps) {
  return (
    <Svg className={className} viewBox="0 0 26 26" strokeWidth={2.5}>
      <Stroke
        draw={draw}
        dur={dur}
        at={at}
        order={order}
        d="M7.5 13 C 9 14.8, 10.5 16.6, 11.8 19 C 14.5 13, 18.5 7.5, 25 2.5"
      />
    </Svg>
  )
}

/** Red cross inside a box. */
export function Cross({className, draw = true, at, order}: DoodleProps) {
  return (
    <Svg className={className} viewBox="0 0 26 26" strokeWidth={2.4}>
      <Stroke draw={draw} dur={0.18} at={at} order={order} d="M7 7.5 C 11 11.5, 15 15.5, 19.5 20" />
      <Stroke draw={draw} dur={0.18} at=">" order={order} d="M19.5 7 C 15.5 11, 11.5 15.5, 7 19.6" />
    </Svg>
  )
}

/** Wobbly red pen line through a crossed-out item. */
export function Strike({className, draw = true, dur = 0.5, at, order}: DoodleProps) {
  return (
    <Svg className={className} viewBox="0 0 200 14" stretch strokeWidth={2.6}>
      <Stroke draw={draw} dur={dur} at={at} order={order} d="M2 8.5 C 30 5, 62 10.5, 96 7 C 128 4, 160 9.5, 198 6" />
    </Svg>
  )
}

/** Big question mark in the margin. */
export function QuestionMark({className, draw = true}: DoodleProps) {
  return (
    <Svg className={className} viewBox="0 0 60 100" strokeWidth={4}>
      <Stroke
        draw={draw}
        dur={1.1}
        d="M13 28 C 12 13, 24 5, 35 5.5 C 48 6.5, 55 17, 52.5 29 C 50 40, 38 44.5, 33 53 C 29.5 59, 29.5 65, 30.5 71"
      />
      <Stroke draw={draw} dur={0.15} at=">+0.05" d="M30 86 C 29 88.5, 32.5 90, 33.5 87.5 C 34.2 85.5, 31 84.5, 30 86" />
    </Svg>
  )
}

/** Zig-zag scribble over a name you are not allowed to write down. */
export function Scribble({className, draw = true, dur = 0.6, at}: DoodleProps) {
  return (
    <Svg className={className} viewBox="0 0 140 18" strokeWidth={2}>
      <Stroke
        draw={draw}
        dur={dur}
        at={at}
        d="M3 12 L10 4.5 L16 14 L23.5 3.5 L30.5 15 L38 4 L45.5 14.5 L53.5 3.5 L60.5 15 L68.5 5 L76 14.5 L84 3.5 L91.5 15 L99.5 4 L107 14 L115 4.5 L122.5 14 L130.5 5.5 L137 12"
      />
    </Svg>
  )
}
