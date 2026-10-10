"use client"

import {useLayoutEffect, useRef} from "react"
import {gsap} from "@/lib/gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {DrawSVGPlugin} from "gsap/DrawSVGPlugin"

// All motion for /futurefounders.
//
// The HTML is always the finished page: every doodle drawn, every highlight full, every object in place.
// Only when the visitor allows motion do we hide things here (with gsap.from / fromTo) and play them in.
// Without JS, or with prefers-reduced-motion: reduce, nothing is ever hidden.
//
// Markup hooks (data attributes):
//   data-place            an object that "lands" on the paper (its resting tilt is the CSS `rotate` property)
//   data-variant          "stamp" | "letter" for a different landing
//   data-seq              a group that plays its steps when it scrolls into view
//   data-step             one step inside a place/seq group: draw | hl | rise | pop | wiggle | tape | fade | line | clip
//   data-dur / data-at    duration (s) and GSAP position parameter of a step
//   data-order            optional sort key for steps (default 0 = DOM order)
//   data-start            ScrollTrigger start of a group
//   data-reveal           a heading or paragraph that fades up on its own
//   data-m="hero-*"       hero pieces, played once on load
//   data-chapter / data-tab   section spy for the desktop index tabs (runs with or without motion)

type Props = {
  className: string
  children: React.ReactNode
}

const DEFAULT_DUR: Record<string, number> = {
  draw: 0.6,
  hl: 0.7,
  rise: 0.5,
  pop: 0.5,
  wiggle: 0.8,
  tape: 0.3,
  fade: 0.35,
  line: 0.5,
  clip: 0.3,
}

function num(value: string | undefined, fallback: number): number {
  const n = value === undefined ? NaN : Number.parseFloat(value)
  return Number.isFinite(n) ? n : fallback
}

function addStep(tl: gsap.core.Timeline, el: HTMLElement | SVGElement, index: number) {
  const kind = el.dataset.step ?? ""
  const duration = num(el.dataset.dur, DEFAULT_DUR[kind] ?? 0.5)
  const at = el.dataset.at ?? (index === 0 ? "+=0.05" : ">-0.05")

  switch (kind) {
    case "draw":
      tl.from(el, {drawSVG: "0%", duration, ease: "power2.inOut"}, at)
      break
    case "hl":
      tl.fromTo(
        el,
        {backgroundSize: "0% 0.62em"},
        {backgroundSize: "100% 0.62em", duration, ease: "power2.out", clearProps: "backgroundSize"},
        at,
      )
      break
    case "rise":
      tl.from(el, {y: 16, opacity: 0, duration, ease: "power2.out", clearProps: "transform,opacity"}, at)
      break
    case "pop":
      tl.from(el, {scale: 0.9, opacity: 0, duration, ease: "back.out(2)", clearProps: "transform,opacity"}, at)
      break
    case "wiggle":
      tl.from(el, {rotation: "-=8", opacity: 0, duration, ease: "elastic.out(1, 0.5)", clearProps: "transform,opacity"}, at)
      break
    case "tape":
      tl.from(el, {scaleX: 0, transformOrigin: "left center", duration, ease: "power2.out", clearProps: "transform"}, at)
      break
    case "fade":
      tl.from(el, {x: -8, opacity: 0, duration, ease: "power1.out", clearProps: "transform,opacity"}, at)
      break
    case "line":
      tl.from(el, {scaleX: 0, transformOrigin: "left center", duration, ease: "power2.out", clearProps: "transform"}, at)
      break
    case "clip":
      tl.from(el, {y: -12, opacity: 0, duration, ease: "power2.out", clearProps: "transform,opacity"}, at)
      break
  }
}

/** Steps that belong to this group (not to a nested group), sorted by data-order, then DOM order. */
function stepsOf(group: HTMLElement): (HTMLElement | SVGElement)[] {
  const all = Array.from(group.querySelectorAll<HTMLElement | SVGElement>("[data-step]")).filter(
    (el) => el.parentElement?.closest("[data-seq],[data-place]") === group,
  )
  if (group.dataset.step) all.unshift(group)
  return all
    .map((el, i) => ({el, i, order: num(el.dataset.order, 0)}))
    .sort((a, b) => a.order - b.order || a.i - b.i)
    .map((x) => x.el)
}

// Plays when a trigger is reached the first time and never reverses. Deliberately not a `once` trigger:
// one that is already passed (deep link, reload mid-page) kills itself inside ScrollTrigger's first
// refresh and crashes it.
const PLAY_ONCE = "play none none none"

/** Already scrolled past (deep link or reload mid-page): leave it in its finished state. */
function isAbove(el: Element): boolean {
  return el.getBoundingClientRect().bottom < 0
}

function heroTimeline(q: (selector: string) => Element[], isDesktop: boolean) {
  const tl = gsap.timeline({defaults: {ease: "power2.out"}})
  const one = (name: string) => q(`[data-m="${name}"]`)
  const paths = (name: string) => q(`[data-m="${name}"] path`)

  // The name, the intro and the photo are already on screen in the server HTML, so they are never hidden
  // here (that would make them flash: visible, gone, back again). Only the hand-made extras draw in,
  // and the polaroid and the index card get a small "pressed onto the page" settle.
  tl.from(paths("hero-star"), {drawSVG: "0%", duration: 0.5, ease: "power2.inOut"}, 0.15)
  tl.from(paths("hero-underline"), {drawSVG: "0%", duration: 0.6, ease: "power2.inOut"}, 0.3)

  const polaroidAt = 0
  tl.from(
    one("hero-polaroid"),
    {y: -14, rotation: -5, scale: 1.03, duration: 0.8, ease: "back.out(1.4)", clearProps: "transform"},
    polaroidAt,
  )
  tl.from(one("hero-tape"), {scaleX: 0, transformOrigin: "left center", duration: 0.3, clearProps: "transform"}, polaroidAt + 0.5)
  tl.from(one("hero-note"), {opacity: 0, duration: 0.35, clearProps: "opacity"}, polaroidAt + 0.6)
  const arrow = paths("hero-arrow").filter((p) => (p as SVGElement).getBoundingClientRect().width > 0)
  if (arrow.length) {
    tl.from(arrow[0], {drawSVG: "0%", duration: 0.5, ease: "power2.inOut"}, polaroidAt + 0.7)
    tl.from(arrow.slice(1), {drawSVG: "0%", duration: 0.2, ease: "power2.inOut"}, ">")
  }
  tl.from(
    one("hero-toc"),
    {y: -10, rotation: 3, duration: 0.7, ease: "back.out(1.5)", clearProps: "transform"},
    isDesktop ? 0.2 : 0.3,
  )
  tl.from(one("hero-scroll"), {opacity: 0, duration: 0.4, clearProps: "opacity"}, isDesktop ? 1.0 : 0.9)
  tl.from(paths("hero-scroll"), {drawSVG: "0%", duration: 0.4, stagger: 0.25, ease: "power2.inOut"}, "<")
  tl.to(one("hero-scroll-arrow"), {y: 4, duration: 0.45, ease: "sine.inOut", yoyo: true, repeat: 5, clearProps: "transform"}, ">")
  return tl
}

export default function NotebookMotion({className, children}: Props) {
  const rootRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return
    gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin)

    // Section spy for the desktop index tabs. Not an animation, so it runs regardless of motion settings.
    const spy = gsap.context(() => {
      const tabs = Array.from(root.querySelectorAll<HTMLAnchorElement>("[data-tab]"))
      let current = ""
      const setActive = (id: string) => {
        current = id
        tabs.forEach((tab) => {
          if (tab.dataset.tab === id) tab.setAttribute("aria-current", "location")
          else tab.removeAttribute("aria-current")
        })
      }
      root.querySelectorAll<HTMLElement>("[data-chapter]").forEach((section) => {
        const id = section.dataset.chapter ?? ""
        // A chapter also covers the sections after it that have no tab of their own (Problém → Projekty),
        // so one tab is always active.
        let last: Element = section
        while (last.nextElementSibling && !last.nextElementSibling.hasAttribute("data-chapter")) {
          last = last.nextElementSibling
        }
        ScrollTrigger.create({
          trigger: section,
          endTrigger: last,
          start: "top 45%",
          end: "bottom 45%",
          onToggle: (self) => {
            if (self.isActive) setActive(id)
            else if (current === id) setActive("")
          },
        })
      })
    }, root)

    const mm = gsap.matchMedia(root)
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const q = gsap.utils.selector(root)
      const isDesktop = window.matchMedia("(min-width: 1024px)").matches

      heroTimeline(q, isDesktop)

      // Objects landing on the paper, each followed by its own little sequence (ticks, strikes, tapes…).
      const placed: HTMLElement[] = []
      q("[data-place]").forEach((node, i) => {
        const el = node as HTMLElement
        if (isAbove(el)) return
        const sign = i % 2 === 0 ? 1 : -1
        const variant = el.dataset.variant
        // While GSAP owns the landing it folds the CSS tilt into `transform`. When it hands back, the hover
        // transition on `rotate` would swing the object straight and slowly re-tilt it, so transitions stay
        // off until the landing is over.
        el.style.transition = "none"
        placed.push(el)
        const tl = gsap.timeline({
          scrollTrigger: {trigger: el, start: el.dataset.start ?? "top 85%", toggleActions: PLAY_ONCE},
        })
        if (variant === "letter") {
          tl.from(el, {y: 40, rotation: 4, opacity: 0, duration: 0.8, ease: "back.out(1.3)", clearProps: "transform,opacity"})
        } else if (variant === "stamp") {
          tl.from(el, {y: -20, rotation: 6 * sign, scale: 1.08, opacity: 0, duration: 0.6, ease: "back.out(2)", clearProps: "transform,opacity"})
        } else {
          tl.from(el, {y: -28, rotation: 7 * sign, scale: 1.04, opacity: 0, duration: 0.75, ease: "back.out(1.5)", clearProps: "transform,opacity"})
        }
        tl.call(() => {
          void el.offsetWidth // commit the restored tilt while transitions are still off
          el.style.removeProperty("transition")
        })
        stepsOf(el).forEach((step, j) => addStep(tl, step, j))
      })

      // Groups without an object: section headers, margin notes, doodles.
      q("[data-seq]").forEach((node) => {
        const el = node as HTMLElement
        const steps = stepsOf(el)
        if (!steps.length || isAbove(el)) return
        const tl = gsap.timeline({
          scrollTrigger: {trigger: el, start: el.dataset.start ?? "top 80%", toggleActions: PLAY_ONCE},
        })
        steps.forEach((step, j) => addStep(tl, step, j))
      })

      // Plain text: a short, quiet fade-up. Readable immediately, never letter by letter.
      q("[data-reveal]").forEach((el) => {
        if (isAbove(el)) return
        gsap.from(el, {
          y: 12,
          opacity: 0,
          duration: 0.5,
          ease: "power1.out",
          clearProps: "transform,opacity",
          scrollTrigger: {trigger: el, start: "top 88%", toggleActions: PLAY_ONCE},
        })
      })

      return () => placed.forEach((el) => el.style.removeProperty("transition"))
    })

    // Webfonts change line heights, so trigger positions are measured again once they are in.
    let alive = true
    document.fonts?.ready.then(() => {
      if (alive) ScrollTrigger.refresh()
    })

    return () => {
      alive = false
      mm.revert()
      spy.revert()
    }
  }, [])

  return (
    <div ref={rootRef} className={className} id="zaciatok">
      {children}
    </div>
  )
}
