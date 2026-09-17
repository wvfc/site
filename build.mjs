#!/usr/bin/env node
/**
 * Build do site SOUTECH.
 *
 * Sem framework e sem dependência de runtime: o resultado em dist/ é HTML,
 * CSS embutido e imagens otimizadas. sharp é usado apenas em tempo de build.
 *
 *   node build.mjs           gera dist/
 *   node build.mjs --watch   regera a cada alteração em src/
 */

import { mkdir, readdir, rm, writeFile, stat, readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const raiz = path.dirname(fileURLToPath(import.meta.url));
const dirImagens = path.join(raiz, 'IMAGENS SITE');
const dirEstatico = path.join(raiz, 'static');
const dirSaida = path.join(raiz, 'dist');
const dirImagensSaida = path.join(dirSaida, 'img');

const LARGURAS = [420, 720, 1080, 1500];
const QUALIDADE = { webp: 78, avif: 58 };

const azul = (s) => `\x1b[36m${s}\x1b[0m`;
const verde = (s) => `\x1b[32m${s}\x1b[0m`;
const cinza = (s) => `\x1b[90m${s}\x1b[0m`;

/** Nome de arquivo previsível: sem acento, sem espaço, tudo minúsculo. */
function slugificar(nome) {
  return nome
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/\.[^.]+$/, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// --------------------------------------------------------------- imagens

async function processarImagens() {
  await mkdir(dirImagensSaida, { recursive: true });

  if (!existsSync(dirImagens)) {
    console.warn(`  aviso: pasta "${path.basename(dirImagens)}" não encontrada — nenhuma imagem processada`);
    return {};
  }

  const arquivos = (await readdir(dirImagens)).filter((f) =>
    /\.(png|jpe?g|webp)$/i.test(f),
  );

  const manifesto = {};
  let geradas = 0;

  await Promise.all(
    arquivos.map(async (arquivo) => {
      const origem = path.join(dirImagens, arquivo);
      const base = slugificar(arquivo);
      const entrada = sharp(origem, { failOn: 'none' });
      const meta = await entrada.metadata();

      const larguras = LARGURAS.filter((l) => l <= meta.width);
      if (larguras.length === 0 || larguras[larguras.length - 1] < meta.width) {
        larguras.push(Math.min(meta.width, LARGURAS[LARGURAS.length - 1]));
      }
      const unicas = [...new Set(larguras)].sort((a, b) => a - b);
      const maior = unicas[unicas.length - 1];
      const altura = Math.round((meta.height / meta.width) * maior);

      const variantes = { webp: [], avif: [] };

      for (const largura of unicas) {
        const redimensionada = sharp(origem, { failOn: 'none' }).resize({
          width: largura,
          withoutEnlargement: true,
        });

        for (const formato of ['webp', 'avif']) {
          const nome = `${base}-${largura}.${formato}`;
          const destino = path.join(dirImagensSaida, nome);
          await redimensionada
            .clone()
            [formato]({ quality: QUALIDADE[formato], effort: formato === 'avif' ? 4 : 5 })
            .toFile(destino);
          variantes[formato].push({ url: `/img/${nome}`, largura });
          geradas += 1;
        }
      }

      manifesto[arquivo] = {
        largura: maior,
        altura,
        webp: variantes.webp,
        avif: variantes.avif,
      };
    }),
  );

  console.log(cinza(`  ${arquivos.length} imagens de origem → ${geradas} arquivos otimizados`));
  return manifesto;
}

// -------------------------------------------------- favicon / og / ícones

const FAVICON_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="6" fill="#0F1721"/>
  <circle cx="16" cy="16" r="10" fill="none" stroke="#FF6A13" stroke-width="2"/>
  <path d="M16 6.5v6M16 19.5v6" stroke="#FF6A13" stroke-width="2" stroke-linecap="round"/>
  <circle cx="16" cy="16" r="2.6" fill="#FF6A13"/>
</svg>`;

function ogSvg() {
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#16202C"/>
      <stop offset="1" stop-color="#0B1119"/>
    </linearGradient>
    <radialGradient id="h" cx="0.85" cy="0.12" r="0.7">
      <stop offset="0" stop-color="#FF6A13" stop-opacity="0.26"/>
      <stop offset="1" stop-color="#FF6A13" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <rect width="1200" height="630" fill="url(#h)"/>
  <g transform="translate(88 96)">
    <circle cx="26" cy="26" r="24" fill="none" stroke="#FF6A13" stroke-width="4"/>
    <path d="M26 6v14M26 32v14" stroke="#FF6A13" stroke-width="4" stroke-linecap="round"/>
    <circle cx="26" cy="26" r="6" fill="#FF6A13"/>
    <text x="72" y="24" fill="#FFFFFF" font-family="Helvetica, Arial, sans-serif" font-size="34" font-weight="bold" letter-spacing="7">SOUTECH</text>
    <text x="74" y="48" fill="#8C9BAB" font-family="Helvetica, Arial, sans-serif" font-size="15" letter-spacing="3">AUTOMAÇÃO E MANUTENÇÃO</text>
  </g>
  <text x="88" y="300" fill="#FFFFFF" font-family="Helvetica, Arial, sans-serif" font-size="58" font-weight="bold">Evite paradas não planejadas:</text>
  <text x="88" y="368" fill="#FFFFFF" font-family="Helvetica, Arial, sans-serif" font-size="58" font-weight="bold">monitore seus ativos antes</text>
  <text x="88" y="436" fill="#FF6A13" font-family="Helvetica, Arial, sans-serif" font-size="58" font-weight="bold">que a falha aconteça.</text>
  <text x="88" y="512" fill="#B4C0CB" font-family="Helvetica, Arial, sans-serif" font-size="27">Manutenção preditiva, automação e confiabilidade de ativos · Mato Grosso</text>
  <rect x="88" y="548" width="126" height="5" fill="#FF6A13"/>
</svg>`);
}

/**
 * O logo entregue é um emblema prateado sobre fundo claro, sem transparência.
 * Recortamos o fundo por limiar de luminância — as janelas vazadas do emblema
 * ficam transparentes e o metal escovado é preservado — para que ele funcione
 * sobre o grafite do cabeçalho e do rodapé.
 */
async function gerarLogo() {
  const origem = path.join(dirImagens, 'Soutech_Logo_sem_fundo.png');
  if (!existsSync(origem)) {
    console.warn('  aviso: logo de origem não encontrado — cabeçalho fica sem emblema');
    return;
  }

  const { width, height } = await sharp(origem).metadata();

  // Em duas passagens: no mesmo pipeline o removeAlpha do sharp roda depois do
  // joinChannel e descartaria justamente o canal de transparência recém-criado.
  const rgb = await sharp(origem).flatten({ background: '#ffffff' }).png().toBuffer();

  // Máscara de opacidade: claro vira transparente, o resto vira opaco.
  const mascara = await sharp(origem)
    .flatten({ background: '#ffffff' })
    .greyscale()
    .threshold(236)
    .negate()
    .blur(0.8)
    .raw()
    .toBuffer();

  const recortado = await sharp(rgb)
    .joinChannel(mascara, { raw: { width, height, channels: 1 } })
    .trim({ threshold: 1 })
    .png()
    .toBuffer();

  // 40px de altura no cabeçalho; geramos até 3x para telas de alta densidade.
  for (const altura of [40, 80, 120]) {
    await sharp(recortado)
      .resize({ height: altura })
      .png({ compressionLevel: 9 })
      .toFile(path.join(dirImagensSaida, `logo-soutech-${altura}.png`));
  }
}

async function gerarIcones() {
  await mkdir(path.join(dirSaida, 'img', 'social'), { recursive: true });
  await writeFile(path.join(dirSaida, 'favicon.svg'), FAVICON_SVG);

  const iconeBuffer = Buffer.from(FAVICON_SVG);
  await sharp(iconeBuffer, { density: 384 })
    .resize(180, 180)
    .png()
    .toFile(path.join(dirSaida, 'apple-touch-icon.png'));
  await sharp(iconeBuffer, { density: 384 })
    .resize(512, 512)
    .png()
    .toFile(path.join(dirSaida, 'img', 'icone-512.png'));
  await sharp(iconeBuffer, { density: 384 })
    .resize(192, 192)
    .png()
    .toFile(path.join(dirSaida, 'img', 'icone-192.png'));

  await sharp(ogSvg()).png({ quality: 90 }).toFile(path.join(dirSaida, 'img', 'social', 'og-soutech.png'));
}

// ---------------------------------------------------------- arquivos extras

async function gerarExtras(rotas, empresa) {
  const hoje = new Date().toISOString().slice(0, 10);

  const prioridade = (url) => {
    if (url === '/') return '1.0';
    if (url === '/contato/' || url === '/servicos/') return '0.9';
    if (url.startsWith('/servicos/') || url === '/airvision/') return '0.8';
    return '0.6';
  };

  const urlset = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${rotas
  .filter((r) => !r.url.endsWith('.html'))
  .map(
    (r) => `  <url>
    <loc>${empresa.baseUrl}${r.url}</loc>
    <lastmod>${hoje}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${prioridade(r.url)}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`;
  await writeFile(path.join(dirSaida, 'sitemap.xml'), urlset);

  await writeFile(
    path.join(dirSaida, 'robots.txt'),
    `User-agent: *
Allow: /

Sitemap: ${empresa.baseUrl}/sitemap.xml
`,
  );

  await writeFile(
    path.join(dirSaida, 'site.webmanifest'),
    JSON.stringify(
      {
        name: 'SOUTECH Automação e Manutenção',
        short_name: 'SOUTECH',
        description:
          'Manutenção preditiva, automação industrial e confiabilidade de ativos em Mato Grosso.',
        start_url: '/',
        display: 'standalone',
        background_color: '#0F1721',
        theme_color: '#0F1721',
        lang: 'pt-BR',
        icons: [
          { src: '/img/icone-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/img/icone-512.png', sizes: '512x512', type: 'image/png' },
          { src: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' },
        ],
      },
      null,
      2,
    ),
  );

  // Cabeçalhos do Cloudflare Pages: cache longo para imagens, curto para HTML.
  await writeFile(
    path.join(dirSaida, '_headers'),
    `/*
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  X-Frame-Options: SAMEORIGIN
  Permissions-Policy: geolocation=(), microphone=(), camera=(), interest-cohort=()

/img/*
  Cache-Control: public, max-age=31536000, immutable

/*.html
  Cache-Control: public, max-age=0, must-revalidate

/
  Cache-Control: public, max-age=0, must-revalidate
`,
  );
}

async function copiarEstaticos() {
  if (!existsSync(dirEstatico)) return;
  const itens = await readdir(dirEstatico, { withFileTypes: true });
  for (const item of itens) {
    if (item.isFile()) {
      const conteudo = await readFile(path.join(dirEstatico, item.name));
      await writeFile(path.join(dirSaida, item.name), conteudo);
    }
  }
}

// -------------------------------------------------------------------- build

async function construir() {
  const inicio = Date.now();
  console.log(azul('\n▸ Build do site SOUTECH\n'));

  await rm(dirSaida, { recursive: true, force: true });
  await mkdir(dirSaida, { recursive: true });

  console.log('  processando imagens…');
  const manifesto = await processarImagens();

  // Os módulos de página só são importados depois de o manifesto existir:
  // eles pedem imagens já na montagem do HTML.
  const { registrarManifesto } = await import('./src/lib/imagens.mjs');
  registrarManifesto(manifesto);

  const { empresa } = await import('./src/content/empresa.mjs');
  const { servicos } = await import('./src/content/servicos.mjs');
  const { paginaHome } = await import('./src/pages/home.mjs');
  const { paginaServicosIndex } = await import('./src/pages/servicos-index.mjs');
  const { paginaServico } = await import('./src/pages/servico.mjs');
  const { paginaAirvision } = await import('./src/pages/airvision-pagina.mjs');
  const { paginaSobre } = await import('./src/pages/sobre.mjs');
  const { paginaContato } = await import('./src/pages/contato.mjs');
  const { paginaNaoEncontrada } = await import('./src/pages/nao-encontrada.mjs');

  const rotas = [
    { url: '/', html: paginaHome() },
    { url: '/servicos/', html: paginaServicosIndex() },
    ...servicos.map((s) => ({ url: `/servicos/${s.slug}/`, html: paginaServico(s) })),
    { url: '/airvision/', html: paginaAirvision() },
    { url: '/sobre/', html: paginaSobre() },
    { url: '/contato/', html: paginaContato() },
    { url: '/404.html', html: paginaNaoEncontrada() },
  ];

  console.log('  gerando páginas…');
  for (const rota of rotas) {
    const destino = rota.url.endsWith('.html')
      ? path.join(dirSaida, rota.url.slice(1))
      : path.join(dirSaida, rota.url, 'index.html');
    await mkdir(path.dirname(destino), { recursive: true });
    await writeFile(destino, rota.html);
    const kb = (Buffer.byteLength(rota.html) / 1024).toFixed(1);
    console.log(cinza(`    ${rota.url.padEnd(38)} ${kb.padStart(6)} KB`));
  }

  await gerarLogo();
  await gerarIcones();
  await gerarExtras(rotas, empresa);
  await copiarEstaticos();

  const total = await tamanhoPasta(dirSaida);
  console.log(
    verde(
      `\n✓ ${rotas.length} páginas em ${((Date.now() - inicio) / 1000).toFixed(1)}s — dist/ com ${(total / 1024 / 1024).toFixed(2)} MB\n`,
    ),
  );
}

async function tamanhoPasta(dir) {
  let total = 0;
  for (const item of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, item.name);
    total += item.isDirectory() ? await tamanhoPasta(p) : (await stat(p)).size;
  }
  return total;
}

// --------------------------------------------------------------------- main

if (process.argv.includes('--watch')) {
  // Cada rebuild roda em um processo novo: assim os módulos de conteúdo são
  // relidos do disco, sem depender do cache de módulos do Node.
  const { watch } = await import('node:fs');
  const { spawn } = await import('node:child_process');

  const rodar = () =>
    spawn(process.execPath, [fileURLToPath(import.meta.url)], { stdio: 'inherit' });

  rodar();
  let agendado = null;
  watch(path.join(raiz, 'src'), { recursive: true }, () => {
    clearTimeout(agendado);
    agendado = setTimeout(rodar, 120);
  });
  console.log(cinza('  observando src/ — Ctrl+C para sair\n'));
} else {
  await construir();
}
