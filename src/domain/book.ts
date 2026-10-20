export const readingStatuses = {
  leyendo: 'Leyendo ahora',
  leido: 'Leídos',
  'por-leer': 'Por leer',
} as const;

export type ReadingStatus = keyof typeof readingStatuses;

export const readingStatusKeys = Object.keys(readingStatuses) as [ReadingStatus, ...ReadingStatus[]];
