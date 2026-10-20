/**
 * Categorías del cuaderno: fuente única de verdad. El esquema de contenido, las rutas
 * de categoría y la navegación del archivo se derivan de aquí.
 */
export const categoryGroups = {
  lecturas: 'Lecturas',
  diario: 'Diario',
  horizonte: 'Horizonte',
  afinidades: 'Afinidades',
  camino: 'Camino',
} as const;

export type CategoryGroup = keyof typeof categoryGroups;

type CategoryDefinition = { label: string; group: CategoryGroup; description: string };

export const categories = {
  'libros-leidos': { label: 'Libros leídos', group: 'lecturas', description: 'Notas y reflexiones sobre los libros que he terminado.' },
  'libros-favoritos': { label: 'Libros que me encantan', group: 'lecturas', description: 'Los libros a los que vuelvo y que recomendaría sin dudar.' },
  'diario': { label: 'Diario de Bruno', group: 'diario', description: 'Páginas sueltas de un diario personal.' },
  'dias-importantes': { label: 'Días importantes', group: 'diario', description: 'Fechas que merecen quedar escritas.' },
  'recuerdos': { label: 'Recuerdos importantes', group: 'diario', description: 'Momentos que no quiero olvidar.' },
  'salidas': { label: 'Salidas intensas', group: 'diario', description: 'Viajes, caminatas y salidas que dejaron huella.' },
  'futuro': { label: 'Consideraciones a futuro', group: 'horizonte', description: 'Ideas sobre lo que viene y lo que quiero construir.' },
  'planes': { label: 'Planes a corto plazo', group: 'horizonte', description: 'Objetivos concretos para los próximos meses.' },
  'gustos': { label: 'Gustos', group: 'afinidades', description: 'Pequeñas cosas que disfruto.' },
  'canciones': { label: 'Canciones de mi agrado', group: 'afinidades', description: 'Música que acompaña mis días.' },
  'cine-series': { label: 'Películas y series que aprecio', group: 'afinidades', description: 'Historias contadas en pantalla.' },
  'experiencia': { label: 'Experiencia laboral', group: 'camino', description: 'Aprendizajes desde el trabajo.' },
  'voluntariado': { label: 'Actividades de voluntariado', group: 'camino', description: 'Lo que aprendo sirviendo a otros.' },
  'logros': { label: 'Grandes éxitos', group: 'camino', description: 'Metas cumplidas y celebradas.' },
  'programas': { label: 'Programas que domino', group: 'camino', description: 'Herramientas que uso y cómo las aprendí.' },
} as const satisfies Record<string, CategoryDefinition>;

export type Category = keyof typeof categories;

export const categoryKeys = Object.keys(categories) as [Category, ...Category[]];

export const categoryLabel = (category: Category): string => categories[category].label;
