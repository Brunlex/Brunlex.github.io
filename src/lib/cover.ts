/** Paleta de lomos de tela: tonos apagados que conviven con el papel del sitio. */
const CLOTH = ['#b84355', '#627960', '#3f5560', '#8a6a3d', '#6d4a5e', '#4d6b57', '#9b5a3c', '#35403a'];

/** Color estable por libro: el mismo título siempre da la misma portada. */
export function coverColor(seed: string): string {
  let hash = 0;
  for (const char of seed) hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
  return CLOTH[hash % CLOTH.length];
}
