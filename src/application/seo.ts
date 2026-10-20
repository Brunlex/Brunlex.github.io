import { site } from '../config/site';
import { profile } from '../data/profile';

/** Constructores de datos estructurados (schema.org) para que Google entienda el sitio. */
type JsonLd = Record<string, unknown>;

const absolute = (path: string): string => new URL(path, site.url).toString();
const personId = absolute('/#person');

export function personSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': personId,
    name: profile.name,
    alternateName: profile.shortName,
    url: site.url,
    email: `mailto:${profile.email}`,
    jobTitle: 'Estudiante de Economía',
    address: { '@type': 'PostalAddress', addressLocality: 'Arequipa', addressCountry: 'PE' },
    alumniOf: { '@type': 'CollegeOrUniversity', name: profile.education.institution },
    knowsAbout: ['Economía', 'Análisis de datos', 'Gestión pública', 'Literatura'],
    sameAs: [profile.linkedin],
  };
}

export function websiteSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.name,
    url: site.url,
    inLanguage: site.lang,
    author: { '@id': personId },
  };
}

export function articleSchema(input: {
  title: string;
  description: string;
  path: string;
  publishedAt: Date;
  updatedAt?: Date;
  section: string;
  wordCount?: number;
}): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: input.title,
    description: input.description,
    url: absolute(input.path),
    mainEntityOfPage: absolute(input.path),
    datePublished: input.publishedAt.toISOString(),
    dateModified: (input.updatedAt ?? input.publishedAt).toISOString(),
    articleSection: input.section,
    wordCount: input.wordCount,
    inLanguage: site.lang,
    image: absolute(site.ogImage),
    author: { '@id': personId, '@type': 'Person', name: profile.name },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absolute(item.path),
    })),
  };
}
