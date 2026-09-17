import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { empresa, whatsappLink, mensagemPadrao } from '../content/empresa.mjs';
import { servicosPrincipais, servicosPorSlug } from '../content/servicos.mjs';
import { airvision } from '../content/airvision.mjs';
import { icone } from './icones.mjs';

const cssPath = fileURLToPath(new URL('../styles/main.css', import.meta.url));
const jsPath = fileURLToPath(new URL('./site.js', import.meta.url));

/** CSS e JS são embutidos na página: sem requisição extra bloqueando a renderização. */
const minificarCss = (css) =>
  css
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\s*([{}:;,>])\s*/g, '$1')
    .replace(/;}/g, '}')
    .replace(/\s+/g, ' ')
    .trim();

export const cssInline = minificarCss(readFileSync(cssPath, 'utf8'));
export const jsInline = readFileSync(jsPath, 'utf8')
  .replace(/^\s*\/\/.*$/gm, '')
  .replace(/\n{2,}/g, '\n')
  .trim();

export const esc = (s = '') =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

// ---------------------------------------------------------------- navegação

const NAV = [
  { href: '/servicos/', rotulo: 'Serviços' },
  { href: '/airvision/', rotulo: 'AirVision' },
  { href: '/sobre/', rotulo: 'Sobre' },
  { href: '/contato/', rotulo: 'Contato' },
];

function navItens(atual) {
  return NAV.map((item) => {
    const ativo = atual === item.href || (item.href !== '/' && atual.startsWith(item.href));
    return `<li><a href="${item.href}"${ativo ? ' aria-current="page"' : ''}>${item.rotulo}</a></li>`;
  }).join('');
}

function cabecalho(atual) {
  return `<a class="pular" href="#conteudo">Pular para o conteúdo</a>
<header class="cabecalho" id="cabecalho">
  <div class="envoltorio cabecalho__interno">
    <a class="marca" href="/" aria-label="SOUTECH — página inicial">
      <img class="marca__simbolo" src="/img/logo-soutech-40.png"
           srcset="/img/logo-soutech-40.png 1x, /img/logo-soutech-80.png 2x, /img/logo-soutech-120.png 3x"
           width="40" height="40" alt="" decoding="async" fetchpriority="high">
      <span class="marca__texto">
        <span class="marca__nome">SOUTECH</span>
        <span class="marca__linha">Automação e Manutenção</span>
      </span>
    </a>

    <nav class="nav" id="nav-principal" aria-label="Navegação principal">
      <ul class="nav__lista">${navItens(atual)}</ul>
    </nav>

    <a class="botao botao--acento cabecalho__cta" href="${whatsappLink(mensagemPadrao)}" target="_blank" rel="noopener">
      ${icone('whatsapp')}<span>Solicitar diagnóstico</span>
    </a>

    <button class="alternar-menu" type="button" aria-expanded="false" aria-controls="nav-principal" aria-label="Abrir menu de navegação">
      ${icone('menu')}${icone('fechar')}
    </button>
  </div>
</header>`;
}

// ------------------------------------------------------------------- rodapé

function rodape() {
  const linksServicos = servicosPrincipais
    .map((s) => `<li><a href="/servicos/${s.slug}/">${s.tituloCurto}</a></li>`)
    .join('');

  return `<footer class="rodape">
  <div class="envoltorio rodape__grade">
    <div class="rodape__bloco rodape__bloco--marca">
      <img class="rodape__logo" src="/img/logo-soutech-80.png"
           srcset="/img/logo-soutech-80.png 1x, /img/logo-soutech-120.png 1.5x"
           width="56" height="56" alt="Emblema SOUTECH" loading="lazy" decoding="async">
      <span class="marca__nome marca__nome--rodape">SOUTECH</span>
      <p class="rodape__razao">${empresa.razaoSocial}</p>
      <p class="rodape__cnpj">CNPJ ${empresa.cnpj}</p>
      <p class="rodape__descricao">Manutenção preditiva, automação e confiabilidade de ativos para a indústria e o agronegócio em ${empresa.regiao}.</p>
    </div>

    <div class="rodape__bloco">
      <h2 class="rodape__titulo">Serviços</h2>
      <ul class="rodape__lista">${linksServicos}
        <li><a href="/servicos/lubrificacao-automatica/">Lubrificação Automática</a></li>
      </ul>
    </div>

    <div class="rodape__bloco">
      <h2 class="rodape__titulo">Navegação</h2>
      <ul class="rodape__lista">
        <li><a href="/servicos/">Todos os serviços</a></li>
        <li><a href="/airvision/">AirVision</a></li>
        <li><a href="/sobre/">Sobre a SOUTECH</a></li>
        <li><a href="/contato/">Contato</a></li>
      </ul>
    </div>

    <div class="rodape__bloco">
      <h2 class="rodape__titulo">Contato</h2>
      <ul class="rodape__lista rodape__lista--contato">
        <li>${icone('whatsapp')}<a href="${whatsappLink(mensagemPadrao)}" target="_blank" rel="noopener">${empresa.telefoneExibicao}</a></li>
        <li>${icone('email')}<a href="mailto:${empresa.email}">${empresa.email}</a></li>
        <li>${icone('local')}<span>${empresa.regiaoCompleta}</span></li>
      </ul>
    </div>
  </div>

  <div class="envoltorio rodape__base">
    <p>&copy; ${new Date().getFullYear()} ${empresa.razaoSocial}. Todos os direitos reservados.</p>
    <p class="rodape__nota">Representante Dynamox em ${empresa.regiao}. Marcas citadas pertencem aos respectivos titulares.</p>
  </div>
</footer>`;
}

// ------------------------------------------------------- botão fixo WhatsApp

function botaoFlutuante() {
  return `<a class="whats-fixo" href="${whatsappLink(mensagemPadrao)}" target="_blank" rel="noopener" aria-label="Falar com a SOUTECH pelo WhatsApp">
  ${icone('whatsapp')}<span class="whats-fixo__rotulo">Falar no WhatsApp</span>
</a>`;
}

// ------------------------------------------------------------------ JSON-LD

function dadosEstruturados({ url, titulo, descricao, tipoPagina, migalhas }) {
  const organizacao = {
    '@type': 'ProfessionalService',
    '@id': `${empresa.baseUrl}/#organizacao`,
    name: empresa.nome,
    legalName: empresa.razaoSocial,
    alternateName: empresa.nomeCompleto,
    url: `${empresa.baseUrl}/`,
    email: empresa.email,
    telephone: empresa.telefoneE164,
    taxID: empresa.cnpjDigits,
    foundingDate: empresa.fundacao,
    description:
      'Manutenção preditiva, automação industrial e confiabilidade de ativos para indústria e agronegócio em Mato Grosso.',
    areaServed: { '@type': 'State', name: 'Mato Grosso' },
    address: {
      '@type': 'PostalAddress',
      addressRegion: empresa.estado,
      addressCountry: empresa.pais,
    },
    knowsAbout: [
      'Análise de vibração',
      'Balanceamento dinâmico',
      'Análise de circuito de motores',
      'Qualidade de energia elétrica',
      'Automação industrial',
      'Manutenção preditiva',
      'Lubrificação automática',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Serviços SOUTECH',
      itemListElement: servicosPrincipais.map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.titulo,
          description: s.resumo,
          url: `${empresa.baseUrl}/servicos/${s.slug}/`,
        },
      })),
    },
  };

  const grafo = [organizacao, {
    '@type': tipoPagina || 'WebPage',
    '@id': url,
    url,
    name: titulo,
    description: descricao,
    isPartOf: { '@id': `${empresa.baseUrl}/#site` },
    about: { '@id': `${empresa.baseUrl}/#organizacao` },
    inLanguage: 'pt-BR',
  }, {
    '@type': 'WebSite',
    '@id': `${empresa.baseUrl}/#site`,
    url: `${empresa.baseUrl}/`,
    name: `${empresa.nome} — Automação e Manutenção`,
    publisher: { '@id': `${empresa.baseUrl}/#organizacao` },
    inLanguage: 'pt-BR',
  }];

  if (migalhas && migalhas.length > 1) {
    grafo.push({
      '@type': 'BreadcrumbList',
      itemListElement: migalhas.map((m, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: m.rotulo,
        item: `${empresa.baseUrl}${m.href}`,
      })),
    });
  }

  return JSON.stringify({ '@context': 'https://schema.org', '@graph': grafo });
}

// ------------------------------------------------------------------- layout

/**
 * Monta o documento HTML completo de uma página.
 * O CSS e o JS vão embutidos — o site é pequeno e a maior parte das visitas
 * chega por link de WhatsApp, em uma única página, muitas vezes em 4G.
 */
export function layout({
  url,
  titulo,
  tituloSeo,
  descricao,
  corpo,
  migalhas = [],
  tipoPagina = 'WebPage',
  imagemSocial = '/img/social/og-soutech.png',
  classeCorpo = '',
}) {
  const urlAbsoluta = `${empresa.baseUrl}${url}`;
  const tituloFinal = tituloSeo || `${titulo} | SOUTECH`;

  return `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(tituloFinal)}</title>
<meta name="description" content="${esc(descricao)}">
<link rel="canonical" href="${urlAbsoluta}">
<meta name="theme-color" content="#0F1721">
<meta name="author" content="${esc(empresa.razaoSocial)}">
<meta name="robots" content="index, follow, max-image-preview:large">
<meta property="og:type" content="website">
<meta property="og:locale" content="pt_BR">
<meta property="og:site_name" content="SOUTECH Automação e Manutenção">
<meta property="og:title" content="${esc(tituloFinal)}">
<meta property="og:description" content="${esc(descricao)}">
<meta property="og:url" content="${urlAbsoluta}">
<meta property="og:image" content="${empresa.baseUrl}${imagemSocial}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(tituloFinal)}">
<meta name="twitter:description" content="${esc(descricao)}">
<meta name="twitter:image" content="${empresa.baseUrl}${imagemSocial}">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<style>${cssInline}</style>
<script type="application/ld+json">${dadosEstruturados({ url: urlAbsoluta, titulo: tituloFinal, descricao, tipoPagina, migalhas })}</script>
</head>
<body${classeCorpo ? ` class="${classeCorpo}"` : ''}>
${cabecalho(url)}
${migalhas.length > 1 ? trilha(migalhas) : ''}
<main id="conteudo">
${corpo}
</main>
${rodape()}
${botaoFlutuante()}
<script>${jsInline}</script>
<!-- Cloudflare Web Analytics — cole o token do painel Cloudflare em CF_BEACON_TOKEN (veja README.md)
<script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"token": "CF_BEACON_TOKEN"}'></script>
-->
</body>
</html>`;
}

function trilha(migalhas) {
  const itens = migalhas
    .map((m, i) =>
      i === migalhas.length - 1
        ? `<li aria-current="page">${esc(m.rotulo)}</li>`
        : `<li><a href="${m.href}">${esc(m.rotulo)}</a></li>`,
    )
    .join('');
  return `<nav class="trilha" aria-label="Você está aqui"><div class="envoltorio"><ol>${itens}</ol></div></nav>`;
}

// -------------------------------------------------------------- componentes

/** Faixa de chamada para ação, repetida ao final de cada seção. */
export function faixaCta({
  titulo = 'Quer saber em que condição os seus ativos estão hoje?',
  texto = 'Conte o que você opera e a nossa equipe indica o caminho de diagnóstico mais adequado. Resposta pelo WhatsApp.',
  rotulo = 'Solicitar diagnóstico',
  mensagem = mensagemPadrao,
  variante = '',
} = {}) {
  return `<section class="faixa-cta ${variante}">
  <div class="envoltorio faixa-cta__interno">
    <div>
      <h2 class="faixa-cta__titulo">${titulo}</h2>
      <p class="faixa-cta__texto">${texto}</p>
    </div>
    <div class="faixa-cta__acoes">
      <a class="botao botao--acento botao--grande" href="${whatsappLink(mensagem)}" target="_blank" rel="noopener">${icone('whatsapp')}<span>${rotulo}</span></a>
      <a class="botao botao--fantasma botao--grande" href="/contato/">Enviar pelo formulário</a>
    </div>
  </div>
</section>`;
}

/** Cartão de serviço usado na home e no índice de serviços. */
export function cartaoServico(servico) {
  return `<article class="cartao">
  <span class="cartao__icone" aria-hidden="true">${icone(servico.icone)}</span>
  <h3 class="cartao__titulo">${servico.titulo}</h3>
  ${servico.selo ? `<p class="selo selo--sutil">${servico.selo}</p>` : ''}
  <p class="cartao__texto">${servico.resumo}</p>
  <a class="link-seta" href="/servicos/${servico.slug}/">Saiba mais ${icone('seta')}</a>
</article>`;
}

export function cartaoAirvision() {
  return `<article class="cartao cartao--destaque">
  <span class="cartao__icone" aria-hidden="true">${icone('monitor')}</span>
  <h3 class="cartao__titulo">${airvision.nome}</h3>
  <p class="selo selo--sutil">Plataforma própria SOUTECH</p>
  <p class="cartao__texto">${airvision.chamada}: pressão, temperatura, horas de operação e contadores de manutenção da sala de compressores, ao vivo e no celular.</p>
  <a class="link-seta" href="/airvision/">Conhecer o AirVision ${icone('seta')}</a>
</article>`;
}

export { empresa, whatsappLink, mensagemPadrao, icone, servicosPrincipais, servicosPorSlug, airvision };
