// Genera public/og-default.png (1200×630), la imagen que se ve al compartir enlaces.
// Uso: npm run og
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const out = fileURLToPath(new URL('../public/og-default.png', import.meta.url));

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#f2eee7"/>
  <circle cx="960" cy="315" r="250" fill="#d7d8cc"/>
  <circle cx="790" cy="520" r="170" fill="#a8b3a2"/>
  <circle cx="1130" cy="120" r="190" fill="#b6c3b3"/>
  <g transform="rotate(-24 990 420)">
    <rect x="900" y="250" width="160" height="340" fill="#b84355"/>
    <rect x="1060" y="250" width="14" height="340" fill="#922d42"/>
  </g>
  <text x="840" y="420" font-family="Georgia, serif" font-size="300" fill="#f6f0e6" transform="rotate(-9 900 300)">B</text>
  <text x="90" y="120" font-family="Arial, sans-serif" font-size="20" font-weight="700" letter-spacing="4" fill="#b0404f">ECONOMÍA · PERSONAS · HISTORIAS</text>
  <text x="90" y="280" font-family="Georgia, serif" font-size="92" fill="#292c2a" letter-spacing="-4">Bruno Choque</text>
  <text x="90" y="380" font-family="Georgia, serif" font-style="italic" font-size="54" fill="#b0404f">Entre los datos</text>
  <text x="90" y="450" font-family="Georgia, serif" font-style="italic" font-size="54" fill="#b0404f">y las historias.</text>
  <text x="90" y="560" font-family="Arial, sans-serif" font-size="22" fill="#656c66">Cuaderno · Biblioteca · Trayectoria — Arequipa, Perú</text>
</svg>`;

await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(out);
console.log(`OG image → ${out}`);
