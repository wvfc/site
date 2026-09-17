import { layout, faixaCta, icone, empresa, whatsappLink, servicosPorSlug } from '../lib/layout.mjs';
import { imagem, figura } from '../lib/imagens.mjs';

/** Página de um módulo de serviço. Mesma estrutura para todos os módulos. */
export function paginaServico(servico) {
  const mensagem = `Olá, SOUTECH. Vim pelo site e tenho interesse em ${servico.titulo}. Gostaria de solicitar um diagnóstico.`;
  const sub = servico.subModulo ? servicosPorSlug[servico.subModulo] : null;
  const pai = servico.parente ? servicosPorSlug[servico.parente] : null;

  const migalhas = [
    { rotulo: 'Início', href: '/' },
    { rotulo: 'Serviços', href: '/servicos/' },
    ...(pai ? [{ rotulo: pai.tituloCurto, href: `/servicos/${pai.slug}/` }] : []),
    { rotulo: servico.tituloCurto, href: `/servicos/${servico.slug}/` },
  ];

  const corpo = `
<section class="heroi-pagina">
  <div class="envoltorio">
    ${servico.selo ? `<p class="selo selo--claro">${servico.selo}</p>` : ''}
    <h1>${servico.titulo}</h1>
    <p class="heroi-pagina__lead">${servico.heroLead}</p>
    <div class="heroi-pagina__acoes">
      <a class="botao botao--acento botao--grande" href="${whatsappLink(mensagem)}" target="_blank" rel="noopener">
        ${icone('whatsapp')}<span>Solicitar diagnóstico</span>
      </a>
      <a class="botao botao--claro botao--grande" href="/contato/">Enviar pelo formulário</a>
    </div>
  </div>
</section>

<section class="secao">
  <div class="envoltorio">
    <div class="duo duo--estreito">
      <div>
        <p class="sobretitulo">O problema</p>
        <h2>${servico.problema.titulo}</h2>
        <p class="secao__lead">${servico.problema.texto}</p>
        <ul class="lista-dor mt-m">
          ${servico.problema.itens.map((i) => `<li>${i}</li>`).join('\n          ')}
        </ul>
      </div>
      <div>
        ${figura({
          src: servico.heroImagem.src,
          alt: servico.heroImagem.alt,
          sizes: '(min-width: 64rem) 540px, 100vw',
        })}
      </div>
    </div>
  </div>
</section>

<section class="secao secao--papel">
  <div class="envoltorio">
    <div class="secao__cabeca">
      <p class="sobretitulo">Metodologia</p>
      <h2>${servico.comoFunciona.titulo}</h2>
    </div>
    <ol class="etapas">
      ${servico.comoFunciona.etapas
        .map(
          (e) => `<li class="etapa">
        <h3 class="etapa__titulo">${e.titulo}</h3>
        <p class="etapa__texto">${e.texto}</p>
      </li>`,
        )
        .join('\n      ')}
    </ol>
    <p class="mt-g">
      <a class="botao botao--acento" href="${whatsappLink(mensagem)}" target="_blank" rel="noopener">
        ${icone('whatsapp')}<span>Solicitar diagnóstico</span>
      </a>
    </p>
  </div>
</section>

<section class="secao">
  <div class="envoltorio">
    <div class="secao__cabeca">
      <p class="sobretitulo">Escopo técnico</p>
      <h2>${servico.deteccao.titulo}</h2>
    </div>
    <div class="tecnica">
      ${servico.deteccao.itens
        .map(
          (i) => `<div class="tecnica__item">
        <h3 class="tecnica__titulo">${icone('alvo')}${i.titulo}</h3>
        <p class="tecnica__texto">${i.texto}</p>
      </div>`,
        )
        .join('\n      ')}
    </div>
  </div>
</section>

${
  servico.galeria && servico.galeria.length
    ? `<section class="secao secao--escura">
  <div class="envoltorio">
    <div class="secao__cabeca">
      <p class="sobretitulo">Na prática</p>
      <h2>O que a análise mostra</h2>
    </div>
    <div class="galeria">
      ${servico.galeria
        .map((g) =>
          figura({
            src: g.src,
            alt: g.alt,
            legenda: g.legenda,
            sizes: '(min-width: 64rem) 540px, (min-width: 48rem) 45vw, 100vw',
          }),
        )
        .join('\n      ')}
    </div>
  </div>
</section>`
    : ''
}

<section class="secao secao--papel">
  <div class="envoltorio">
    <div class="duo">
      <div>
        <p class="sobretitulo">Entregáveis</p>
        <h2>O que você recebe</h2>
        <ul class="lista-check mt-m">
          ${servico.entregaveis.map((e) => `<li>${icone('check')}<span>${e}</span></li>`).join('\n          ')}
        </ul>
      </div>
      <div>
        <p class="sobretitulo">Aplicações</p>
        <h2>Onde se aplica</h2>
        <ul class="lista-check mt-m">
          ${servico.aplicacoes.map((a) => `<li>${icone('check')}<span>${a}</span></li>`).join('\n          ')}
        </ul>
      </div>
    </div>
    ${
      servico.observacao
        ? `<p class="mt-g medida"><small>${servico.observacao}</small></p>`
        : ''
    }
  </div>
</section>

${
  sub
    ? `<section class="secao">
  <div class="envoltorio">
    <div class="duo duo--estreito">
      <div>
        <p class="sobretitulo">Sub-módulo</p>
        <h2>${sub.titulo}</h2>
        <p class="secao__lead">${sub.resumo}</p>
        <p>${sub.problema.texto}</p>
        <p class="mt-m"><a class="botao botao--fantasma" href="/servicos/${sub.slug}/">Ver ${sub.titulo} ${icone('seta')}</a></p>
      </div>
      <div>
        ${figura({
          src: sub.heroImagem.src,
          alt: sub.heroImagem.alt,
          sizes: '(min-width: 64rem) 540px, 100vw',
        })}
      </div>
    </div>
  </div>
</section>`
    : ''
}

${
  pai
    ? `<section class="secao secao--compacta">
  <div class="envoltorio">
    <p class="secao__lead medida">${servico.titulo} é um sub-módulo de <a href="/servicos/${pai.slug}/">${pai.titulo}</a> e pode ser contratado de forma isolada ou dentro de um plano de manutenção.</p>
  </div>
</section>`
    : ''
}

${faixaCta({
  titulo: `Quer avaliar ${servico.titulo.toLowerCase()} na sua planta?`,
  texto: `Conte quais ativos você opera em ${empresa.regiao} e a nossa equipe retorna com o caminho técnico recomendado.`,
  rotulo: 'Solicitar diagnóstico',
  mensagem,
  variante: 'faixa-cta--acento',
})}
`;

  return layout({
    url: `/servicos/${servico.slug}/`,
    titulo: servico.titulo,
    tituloSeo: `${servico.titulo} em ${empresa.regiao} | SOUTECH`,
    descricao: servico.metaDescription,
    tipoPagina: 'Service',
    migalhas,
    corpo,
  });
}
