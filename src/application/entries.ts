import { categoryKeys, type Category } from '../domain/category';
import { readingMinutes } from '../domain/reading-time';
import type { EntryRecord } from '../infrastructure/content-repository';

export type { EntryRecord };

export const entryUrl = (entry: EntryRecord): string => `/cuaderno/${entry.id}/`;
export const categoryUrl = (category: Category): string => `/cuaderno/categoria/${category}/`;

export const entryReadingMinutes = (entry: EntryRecord): number => readingMinutes(entry.body ?? '');

/** Categorías con al menos una entrada, en el orden definido por el dominio. */
export function categoriesInUse(entries: EntryRecord[]): Category[] {
  const used = new Set(entries.map((entry) => entry.data.category));
  return categoryKeys.filter((category) => used.has(category));
}

/** Entradas destacadas primero; si no hay suficientes, completa con las más recientes. */
export function highlightedEntries(entries: EntryRecord[], limit: number): EntryRecord[] {
  const featured = entries.filter((entry) => entry.data.featured);
  const rest = entries.filter((entry) => !entry.data.featured);
  return [...featured, ...rest].slice(0, limit);
}

/** Vecinas en el tiempo. Espera la lista ordenada de más nueva a más antigua. */
export function adjacentEntries(entries: EntryRecord[], current: EntryRecord) {
  const index = entries.findIndex((entry) => entry.id === current.id);
  return {
    newer: index > 0 ? entries[index - 1] : undefined,
    older: index >= 0 && index < entries.length - 1 ? entries[index + 1] : undefined,
  };
}

/**
 * Lecturas relacionadas para el final de cada entrada.
 * Hablar del mismo libro pesa más que compartir categoría; la cercanía en el tiempo
 * desempata (vale 1 punto como máximo, así que nunca supera a una coincidencia real).
 */
export function relatedEntries(entries: EntryRecord[], current: EntryRecord, limit = 2): EntryRecord[] {
  const DAY = 86_400_000;
  const score = (candidate: EntryRecord): number => {
    let points = 0;
    if (current.data.book && candidate.data.book?.id === current.data.book.id) points += 100;
    if (candidate.data.category === current.data.category) points += 10;
    const days = Math.abs(candidate.data.publishedAt.getTime() - current.data.publishedAt.getTime()) / DAY;
    return points + 1 / (1 + days / 30);
  };

  return entries
    .filter((entry) => entry.id !== current.id)
    .map((entry) => ({ entry, points: score(entry) }))
    .sort((a, b) => b.points - a.points)
    .slice(0, limit)
    .map(({ entry }) => entry);
}
