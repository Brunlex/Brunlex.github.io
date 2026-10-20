import { getCollection, type CollectionEntry } from 'astro:content';

/**
 * Único punto de acceso a `astro:content`. Las capas superiores reciben arrays ya
 * filtrados y ordenados, así su lógica se mantiene pura y fácil de probar.
 */
export type EntryRecord = CollectionEntry<'entries'>;
export type BookRecord = CollectionEntry<'books'>;

export async function loadEntries(): Promise<EntryRecord[]> {
  const entries = await getCollection('entries', ({ data }) => !data.draft);
  return entries.sort((a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime());
}

export async function loadBooks(): Promise<BookRecord[]> {
  return getCollection('books');
}
