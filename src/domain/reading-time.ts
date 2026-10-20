/** Palabras por minuto de un lector medio en español (prosa narrativa). */
const WORDS_PER_MINUTE = 200;

export function countWords(markdown: string): number {
  return markdown
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[#>*_`~[\]()!-]/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length;
}

export function readingMinutes(markdown: string): number {
  return Math.max(1, Math.round(countWords(markdown) / WORDS_PER_MINUTE));
}
