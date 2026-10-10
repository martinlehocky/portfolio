import {Figtree, Kalam, Young_Serif} from "next/font/google"

// "Printed" text: body, lists, notes, UI. (Figtree rather than Atkinson Hyperlegible:
// Atkinson draws a slashed zero, which made years like 2023 look like typos.)
export const body = Figtree({
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  variable: "--nb-body",
  display: "swap",
})

// Headings (h1–h3).
export const head = Young_Serif({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  variable: "--nb-head",
  display: "swap",
})

// Handwriting: only short annotations, kickers, captions and labels.
export const hand = Kalam({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
  variable: "--nb-hand",
  display: "swap",
})
