import type {Metadata} from "next"
import "./_shared/base.css"

// Own root layout: /futurefounders lives outside the next-intl [locale] tree,
// is always Slovak and is not meant to be indexed.
export const metadata: Metadata = {
  title: "Martin Lehocký · Future Founders",
  description: "Kto som, prečo robím to, čo robím, a aký problém ma teraz trápi.",
  robots: {index: false, follow: false},
}

export default function FutureFoundersLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="sk">
      <body>{children}</body>
    </html>
  )
}
