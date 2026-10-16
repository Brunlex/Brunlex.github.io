import type { Experience, Skill } from '../domain/site';

export const profile = {
  name: 'Bruno Alex Eduardo Choque',
  shortName: 'Bruno Choque',
  location: 'Arequipa, Perú',
  email: 'bruno.eduardo.choq@gmail.com',
  linkedin: 'https://www.linkedin.com/in/bruno-alex-eduardo-choque-a630633a0',
  introduction: 'Estudiante de Economía interesado en el análisis de datos y en una gestión pública más eficiente.',
  summary: 'Mi experiencia une el control patrimonial, la gestión de datos y el trabajo con personas. He identificado inconsistencias en inventarios, elaborado documentación para regularizar activos y coordinado iniciativas juveniles.',
  education: {
    institution: 'Universidad Nacional de San Agustín',
    program: 'Pregrado en Economía',
    graduation: 'Egreso proyectado: diciembre de 2028',
    courses: ['Investigación Económica', 'Estadística'],
  },
  skills: [
    { name: 'Excel', level: 'Tablas dinámicas, funciones y limpieza de datos' },
    { name: 'Python', level: 'Análisis básico de datos' },
    { name: 'Estadística', level: 'Estadística aplicada' },
    { name: 'Microsoft Office', level: 'Nivel intermedio' },
    { name: 'Inglés', level: 'Nivel básico' },
  ] satisfies Skill[],
  work: [
    {
      organization: 'UGEL Arequipa Sur',
      role: 'Practicante preprofesional de Control Patrimonial',
      period: 'Noviembre de 2025 — presente',
      description: [
        'Analizo y contrasto registros patrimoniales. Identifiqué y documenté discrepancias críticas, entre ellas la exclusión de 20 bienes del inventario oficial.',
        'Redacto y gestiono actas de transferencia, expedientes de tasación y anexos patrimoniales para la regularización de activos.',
        'Actualizo bases de datos patrimoniales y realizo inspecciones de campo para verificar inventarios físicos.',
      ],
    },
  ] satisfies Experience[],
  volunteering: [
    {
      organization: 'Secretaría Nacional de la Juventud',
      role: 'Voluntario',
      location: 'Arequipa, Perú',
      period: 'Febrero de 2026 — presente',
      description: ['Colaboro en programas de alcance nacional orientados a políticas públicas juveniles.'],
    },
    {
      organization: 'Consejo Provincial de la Juventud',
      role: 'Voluntario',
      location: 'Arequipa, Perú',
      period: 'Febrero de 2026 — presente',
      description: ['Participo en la toma de decisiones y en la estructuración de iniciativas para el desarrollo local.'],
    },
    {
      organization: 'Grupo Juvenil Hermanos Santa Clara',
      role: 'Vicepresidente',
      location: 'Arequipa, Perú',
      period: 'Enero de 2025 — marzo de 2026',
      description: [
        'Supervisé la agenda de actividades y representé al grupo en coordinaciones externas.',
        'Dirigí la planificación logística y operativa de un equipo de 17 jóvenes y coordiné sus comisiones de trabajo.',
        'Representé a la organización en espacios de formación institucional y teológica.',
      ],
    },
    {
      organization: 'Grupo Santa Marta',
      role: 'Catequista',
      location: 'Arequipa, Perú',
      period: 'Febrero de 2025 — febrero de 2026',
      description: [
        'Impartí sesiones formativas semanales a 20 adolescentes y adapté conceptos complejos a material didáctico.',
        'Diseñé planes de estudio y acompañé durante un año la dinámica y evaluación del grupo.',
        'Fui portavoz de la organización ante audiencias de más de 80 asistentes.',
      ],
    },
  ] satisfies Experience[],
};
