export type Experience = {
  organization: string;
  role: string;
  period: string;
  location?: string;
  description: string[];
};

export type Skill = {
  name: string;
  level: string;
};

export const categories = {
  'diario': 'Diario de Bruno',
  'dias-importantes': 'Días importantes',
  'futuro': 'Consideraciones a futuro',
  'planes': 'Planes a corto plazo',
  'libros-leidos': 'Libros leídos',
  'libros-favoritos': 'Libros que me encantan',
  'recuerdos': 'Recuerdos importantes',
  'voluntariado': 'Actividades de voluntariado',
  'logros': 'Grandes éxitos',
  'salidas': 'Salidas intensas',
  'programas': 'Programas que domino',
  'gustos': 'Gustos',
  'canciones': 'Canciones de mi agrado',
  'cine-series': 'Películas y series que aprecio',
  'experiencia': 'Experiencia laboral',
} as const;

export type Category = keyof typeof categories;
