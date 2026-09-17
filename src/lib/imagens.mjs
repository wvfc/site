// Helper de imagens responsivas.
// O build gera AVIF + WebP em várias larguras e registra o manifesto aqui;
// as páginas só pedem a imagem pelo nome do arquivo original.

let manifesto = {};

export function registrarManifesto(novo) {
  manifesto = novo;
}

export function temImagem(src) {
  return Boolean(manifesto[src]);
}

const srcset = (variantes) =>
  variantes.map((v) => `${v.url} ${v.largura}w`).join(', ');

/**
 * Monta um <picture> responsivo com AVIF, WebP e dimensões explícitas
 * (width/height evitam deslocamento de layout durante o carregamento).
 */
export function imagem({
  src,
  alt = '',
  sizes = '(min-width: 64rem) 640px, 100vw',
  classe = '',
  prioridade = false,
}) {
  const entrada = manifesto[src];
  if (!entrada) {
    // Falha visível no build em vez de página quebrada em produção.
    throw new Error(`Imagem não encontrada no manifesto: "${src}"`);
  }

  const carga = prioridade
    ? 'loading="eager" fetchpriority="high" decoding="async"'
    : 'loading="lazy" decoding="async"';

  const maior = entrada.webp[entrada.webp.length - 1];

  return `<picture>
  <source type="image/avif" srcset="${srcset(entrada.avif)}" sizes="${sizes}">
  <source type="image/webp" srcset="${srcset(entrada.webp)}" sizes="${sizes}">
  <img src="${maior.url}" alt="${alt.replace(/"/g, '&quot;')}" width="${entrada.largura}" height="${entrada.altura}"${classe ? ` class="${classe}"` : ''} ${carga}>
</picture>`;
}

/** Figura com legenda. */
export function figura({ src, alt, legenda, sizes, classe = '' }) {
  return `<figure class="figura ${classe}">
  ${imagem({ src, alt, sizes })}
  ${legenda ? `<figcaption>${legenda}</figcaption>` : ''}
</figure>`;
}
