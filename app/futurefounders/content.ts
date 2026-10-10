// All the text on /futurefounders lives here, so it can be edited without touching the layout.
//
// Notes for editing:
// - Slovak quotes are „…“.
// - " " is a non-breaking space. Headings use it after one-letter words (v, s, z, k, a, o, u, i)
//   so they never end a line. Paragraphs get it automatically (see `tie` in _components/text.ts).
// - Highlighted / circled bits of a sentence are split into `before`, `mark` and `after`.

export type Marked = {
  before: string
  mark: string
  after: string
}

export type TocItem = {
  id: string
  label: string
}

export type TabItem = {
  id: string
  label: string
}

export type Sticky = {
  title: string
  text: string
}

export type ProjectItem = {
  /** Empty string = no date (the cell stays empty). */
  date: string
  name: string
  text: string
}

export type ContactLink = {
  label: string
  href: string
}

export const meta = {
  title: "Martin Lehocký · Zápisník pre Future Founders",
  description:
    "Som Martin, študent z Bratislavy. V tomto zápisníku píšem, kto som a čo ma baví, prečo robím to, čo robím, a aký problém ma teraz trápi.",
  photoAlt:
    "Martin Lehocký sa s úsmevom pozerá nabok. Stojí pri zábradlí a za ním svieti večerné Koloseum v Ríme.",
} as const

export const ui = {
  skipLink: "Preskočiť na obsah",
  tabsNavLabel: "Kapitoly zápisníka",
  tabs: [
    {id: "kto-som", label: "Kto som"},
    {id: "preco", label: "Prečo"},
    {id: "mnichov", label: "Mníchov"},
    {id: "problem", label: "Problém"},
    {id: "kontakt", label: "Kontakt"},
  ] satisfies readonly TabItem[],
  externalLinkHint: "(otvorí sa v novom okne)",
  struckOutPrefix: "Prečiarknuté:",
} as const

export const hero = {
  kicker: "zápisník pre Future Founders",
  firstName: "Martin",
  lastName: "Lehocký",
  lead: "Som študent z Bratislavy. Od roku 2023 chodím na SPŠ Elektrotechnická Hálova, kde študujem odbor programovanie digitálnych technológií.",
  intro: "Namiesto klasickej prezentácie som vám to celé spísal do zápisníka. Prečítate ho asi za päť minút.",
  photoCaption: "Rím, Koloseum, večer",
  photoAnnotation: "to som ja",
  tocTitle: "Obsah",
  toc: [
    {id: "kto-som", label: "Kto som a čo ma baví"},
    {id: "preco", label: "Prečo robím to, čo robím"},
    {id: "mnichov", label: "Hacking Legal v Mníchove"},
    {id: "problem", label: "Aký problém ma teraz trápi"},
    {id: "kontakt", label: "Ďakujem a kontakt"},
  ] satisfies readonly TocItem[],
  scrollHint: "listujte ďalej",
} as const

export const about = {
  id: "kto-som",
  number: "1",
  kicker: "Kto som a čo ma baví",
  h2: "Vo voľnom čase pracujem na vlastných projektoch a spoznávam ľudí",
  p1: "Navrhujem weby a vymýšľam nápady na nové veci. A z ľudí, ktorých spoznám, sa niekedy stanú kamaráti.",
  ticket: {
    stub: "DiscoverEU",
    title: "Európa",
    note: "prvýkrát úplne sám",
  },
  p2: "Rád cestujem. Vďaka programu DiscoverEU som po prvý raz išiel po Európe úplne sám. Najprv som váhal, lebo som nevedel, ako to dopadne. Nakoniec to bol jeden z najlepších zážitkov, aké som mal.",
  stickyMaya: {
    title: "čo sa práve učím sám",
    text: "3D modelovanie v Autodesk Maya podľa návodov na YouTube.",
  } satisfies Sticky,
  // "AlphaGo" gets a hand-drawn circle around it.
  p3: {
    before: "Zaujíma ma AI. Nedávno som videl ",
    mark: "AlphaGo",
    after: ", dokument Grega Kohsa o DeepMinde, a ešte dlho potom som premýšľal, čo bude AI znamenať pre našu budúcnosť.",
  } satisfies Marked,
  stickyImade: {
    title: "chcem študovať v Nemecku",
    text: "Zvažujem odbor International Management and Digital Engineering (IMADE) na Hochschule München, lebo spája technológie s biznisom.",
  } satisfies Sticky,
} as const

export const why = {
  id: "preco",
  number: "2",
  kicker: "Prečo robím to, čo robím",
  h2: "Robím veci pre ľudí, nie do šuplíka",
  // The second sentence is highlighted.
  p1: {
    before: "Robím to hlavne preto, že rád pomáham ľuďom. ",
    mark: "Najlepší pocit mám, keď niečo, čo som mal najprv iba v hlave, zrazu funguje a niekto to naozaj používa.",
    after: "",
  } satisfies Marked,
  card: {
    label: "2024 · prvý projekt, na ktorý som hrdý",
    text: "Kvízová platforma, na ktorej sa slovenskí deviataci pripravovali na Testovanie 9. Spustil som ju a potom ju vylepšoval podľa spätnej väzby od žiakov. Vtedy som po prvý raz cítil, že niečo, čo som spravil, niekomu skutočne pomohlo.",
  },
  teya: {
    h3: "Stáž vo firme Teya",
    intro:
      "Od júna 2026 som na stáži vo fintechovej firme Teya, ktorá ponúka podnikom platobné terminály a ďalšie platobné služby. Robím tam QA a automatizáciu testov.",
    listTitle: "čo som tam zatiaľ spravil",
    done: [
      "Na Raspberry Pi som postavil systém, ktorý automaticky testuje platobné terminály. Testovanie je vďaka tomu rýchlejšie a nové verzie aplikácie spoľahlivejšie.",
      "Do testovania som zapojil AI, aby tím nemusel tráviť hodiny ručným písaním testov.",
      "Naprogramoval som webové rozhranie, v ktorom môže viac ľudí naraz sledovať testy naživo. Vie aj vygenerovať PDF report so screenshotmi z terminálov.",
      "Kolegovi som napísal návod, aby mohol pokračovať v mojej práci, kým som bol preč. Pridal som doň aj tipy, ako s AI pracovať efektívne.",
    ],
    now: "Teraz pracujem na plne automatizovanom testovacom robotovi.",
    nowAnnotation: "rozrobené",
    after: "Baví ma robiť nástroje, ktoré iným uľahčujú prácu, aby im ostal čas na to dôležitejšie.",
  },
  // Visible handwritten note, hidden from screen readers because `belief` repeats it.
  marginQuote: "„Život máme iba jeden.“",
  belief:
    "Verím, že život máme iba jeden, a tak sa ho snažím využiť čo najlepšie. Pochopil som aj, že veľa vecí je maratón, nie šprint. Keď na niečom robím postupne a pravidelne, dostanem sa ďalej, ako keď chcem všetko naraz.",
  lessons: {
    h3: "Dve veci, ktoré som sa naučil",
    p1: "Keď som bol mladší, pri skupinových projektoch v škole som videl, že niektorí by mohli robiť viac, ale nič som nepovedal. Dnes viem, že je lepšie povedať to na rovinu, ale slušne. Keď sa ľudia v tíme normálne rozprávajú, aj výsledok je lepší.",
    p2: "Raz som si toho naložil priveľa a myslel som si, že všetko zvládnem. Potom som zistil, že ani jedno nerobím poriadne. Dnes si vyberám menej vecí, ale tie robím dobre. A nechávam si čas aj pre seba.",
  },
  todo: {
    title: "poznámka pre seba",
    struck: "zvládnem všetko naraz",
    items: ["menej vecí, ale poriadne", "čas aj pre seba"],
  },
} as const

export const munich = {
  id: "mnichov",
  number: "3",
  kicker: "Hacking Legal 2026 · Mníchov",
  h2: "Išiel som sám a o legal ops som vedel veľmi málo",
  // The last word of the last line gets a red circle.
  stats: ["450 prihlásených", "94 prijatých"],
  statsLast: {before: "jeden z nich som bol ", mark: "ja", after: ""} satisfies Marked,
  p1: "V apríli 2026 som bol v Mníchove na Hacking Legal, hackathone zameranom na legal tech. Boli tam väčšinou vysokoškoláci a mladí ľudia z praxe, ja som prišiel ako stredoškolák.",
  p2: "V tíme sme riešili zadanie od Siemensu a za 24 hodín sme postavili Livebook. Ja som robil frontend v Next.js.",
  livebook: {
    title: "Livebook",
    diagramFrom: "statický playbook",
    diagramTo: "Livebook",
    diagramLabel: "Náčrt: zo statického playbooku sa stane Livebook.",
    intro: "Livebook robí zo statického právneho playbooku živý nástroj.",
    business: {
      label: "pre ľudí z biznisu",
      text: "Pýtajú sa bežnou rečou a hneď dostanú odpoveď s odkazom na konkrétne klauzuly. Livebook ich aj upozorní, keď treba vec eskalovať.",
    },
    lawyers: {
      label: "pre právnikov",
      text: "Majú históriu verzií, môžu upravovať priamo v texte a nástroj im sám navrhuje aktualizácie.",
    },
  },
  p3: "Až tam mi došlo, aké zložité sú legal ops, a odvtedy mám pred nimi rešpekt. Spoznal som tam aj skvelých ľudí, akých som už dlho nestretol.",
  annotation: "k jednej myšlienke sa ešte vrátim",
} as const

export const problem = {
  id: "problem",
  number: "4",
  kicker: "Aký problém ma teraz trápi",
  h2: "Veľa mladých ľudí nevie, čo chce v živote robiť",
  p1: "Rád by som prišiel na niečo, čo by im pomohlo. Hotové riešenie zatiaľ nemám a nebudem sa tváriť, že mám. Myslím si však, že to nevadí.",
  // The arrow in front is drawn by hand on the page.
  annotation: "z Mníchova",
  // The insight is highlighted.
  p2: {
    before: "Na Hacking Legal som si všimol, že ",
    mark: "ľuďom často nechýbajú vedomosti. Len sa k nim nevedia ľahko dostať.",
    after: "",
  } satisfies Marked,
  p3: "Premýšľam, či to neplatí aj pre mladých ľudí, ktorí nevedia, kam ďalej. Zatiaľ je to pre mňa otvorená otázka.",
  hrCard: {
    title: "ešte jeden projekt",
    text: "Pre jednu firmu, ktorá sa venuje HR a marketingu, sám vyvíjam projekt, ktorý má ľuďom pomôcť zistiť, čo ich čaká na pohovoroch. Názov ani detaily prezradiť nemôžem. Celý problém to nevyrieši, ale ide to podobným smerom.",
  } satisfies Sticky,
} as const

export const projects = {
  id: "projekty",
  kicker: "ďalšie strany",
  h2: "Čo som ešte spravil",
  items: [
    {
      date: "2025 – 2026",
      name: "Plannie",
      text: "Aplikácia na plánovanie udalostí s používateľskými účtami. Backend v Go (REST API, prihlasovanie cez JWT), databáza PostgreSQL, frontend v Next.js, celé to beží v cloude.",
    },
    {
      date: "2024",
      name: "Healthie",
      text: "Natívna iOS aplikácia v SwiftUI s Apple HealthKit. Dá sa v nej plánovať deň, zapisovať kalórie a sledovať pitný režim.",
    },
    {
      date: "",
      name: "Hackathony",
      text: "Organizoval som školský hackathon HalovaMake. Na HalovaJam som pod časovým tlakom robil prototyp a na medzinárodnom Hack Club Campfire GameJam som za 48 hodín spravil a zverejnil hrateľnú hru.",
    },
  ] satisfies readonly ProjectItem[],
} as const

export const ending = {
  id: "kontakt",
  kicker: "posledná strana",
  h2: "Ďakujem, že ste to dočítali až sem",
  p: "Ak sa chcete na niečo spýtať, napíšte mi. Nájdete ma aj na LinkedIne a na mojom webe.",
  email: {
    label: "Napísať e-mail",
    address: "martin.lehocky2007@gmail.com",
    href: "mailto:martin.lehocky2007@gmail.com",
  },
  linkedin: {label: "LinkedIn", href: "https://www.linkedin.com/in/martinlehocky"} satisfies ContactLink,
  web: {label: "martinlehocky.com", href: "https://martinlehocky.com"} satisfies ContactLink,
  signature: "Martin",
} as const

export const footer = {
  name: "Martin Lehocký · Bratislava",
  backToTop: "Späť na začiatok",
} as const
