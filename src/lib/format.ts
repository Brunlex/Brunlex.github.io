// Las fechas del frontmatter (2026-02-10) se leen como medianoche UTC. Formatear en UTC
// evita que en zonas como Perú (UTC−5) aparezcan con un día menos.
const longDate = new Intl.DateTimeFormat('es-PE', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
const monthYear = new Intl.DateTimeFormat('es-PE', { month: 'long', year: 'numeric', timeZone: 'UTC' });

export const formatDate = (date: Date): string => longDate.format(date);
export const formatMonthYear = (date: Date): string => monthYear.format(date);

export function pluralize(count: number, singular: string, plural = `${singular}s`): string {
  return `${count} ${count === 1 ? singular : plural}`;
}
