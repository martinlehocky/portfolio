// Small text helpers shared by the notebook sections.

const ONE_LETTER = /(^|[\s(„])([vszkaouiVSZKAOUI]) /g

/**
 * Slovak typography: glue one-letter prepositions and conjunctions (v, s, z, k, a, o, u, i)
 * to the next word with a non-breaking space, so they never hang at the end of a line.
 * Runs twice because two one-letter words can follow each other ("a o legal ops").
 */
export function tie(text: string): string {
  return text.replace(ONE_LETTER, "$1$2 ").replace(ONE_LETTER, "$1$2 ")
}
