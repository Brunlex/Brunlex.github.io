import { readingStatusKeys, type ReadingStatus } from '../domain/book';
import type { BookRecord } from '../infrastructure/content-repository';

export type { BookRecord };

export type Shelf = { status: ReadingStatus; books: BookRecord[] };

/** Agrupa la biblioteca en estantes por estado; cada estante, del más reciente al más antiguo. */
export function shelvesByStatus(books: BookRecord[]): Shelf[] {
  return readingStatusKeys
    .map((status) => ({
      status,
      books: books
        .filter((book) => book.data.status === status)
        .sort((a, b) => (b.data.finishedAt?.getTime() ?? 0) - (a.data.finishedAt?.getTime() ?? 0)),
    }))
    .filter((shelf) => shelf.books.length > 0);
}

export const currentlyReading = (books: BookRecord[]): BookRecord[] =>
  books.filter((book) => book.data.status === 'leyendo');
