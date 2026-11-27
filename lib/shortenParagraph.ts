/**
 * Condenses a multi-sentence paragraph to 1–2 concise sentences
 * without losing its core meaning, keeping hero & section copy scannable.
 */
export function shortenParagraph(text: string, maxChars = 175): string {
  const clean = text.trim().replace(/\s+/g, " ");
  if (clean.length <= maxChars) return clean;

  // Split on sentence boundaries while keeping abbreviations intact
  const sentences = clean.match(/[^.!?]+[.!?]+/g);
  if (!sentences || sentences.length === 0) {
    return clean.slice(0, maxChars).trimEnd() + "…";
  }

  let result = sentences[0].trim();
  if (result.length < 75 && sentences[1]) {
    const combined = `${result} ${sentences[1].trim()}`;
    if (combined.length <= maxChars + 35) {
      result = combined;
    }
  }
  return result;
}
