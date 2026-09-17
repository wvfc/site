import { layout, faixaCta, icone, empresa, whatsappLink, airvision } from '../lib/layout.mjs';
import { imagem, figura } from '../lib/imagens.mjs';

const mensagem =
  'Olá, SOUTECH. Vim pelo site e gostaria de saber mais sobre o AirVision para a minha sala de compressores.';

export function paginaAirvision() {
  const corpo = `
<section class="heroi-pagina">
  <div class="envoltorio">
    <p class="selo selo--claro">Plataforma própria SOUTECH</p>
    <h1>${airvision.nome}</h1>
    <p class="heroi-pagina__lead">${airvision.heroLead}</p>
    <div class="heroi-pagina__acoes">
      <a class="botao botao--acento botao--grande" href="${whatsappLink(mensagem)}" target="_blank" rel="noopener">
        ${icone('whatsapp')}<span>Falar sobre o AirVision</span>
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
        <h2>${airvision.problema.titulo}</h2>
        <p class="secao__lead">${airvision.problema.texto}</p>
        <ul class="lista-dor mt-m">
          ${airvision.problema.itens.map((i) => `<li>${i}</li>`).join('\n          ')}
        </ul>
      </div>
      <div>
        ${figura({
          src: airvision.heroImagem.src,
          alt: airvision.heroImagem.alt,
          legenda: 'Todas as máquinas da sala em uma tela, independentemente do fabricante.',
          sizes: '(min-width: 64rem) 540px, 100vw',
        })}
      </div>
    </div>
  </div>
</section>

<section class="secao secao--papel">
  <div class="envoltorio">
    <div class="secao__cabeca">
      <p class="sobretitulo">Recursos</p>
      <h2>O que o ${airvision.nome} entrega</h2>
    </div>
    <div class="grade grade--3">
      ${airvision.recursos
        .map(
          (r) => `<article class="cartao">
        <span class="cartao__icone" aria-hidden="true">${icone('monitor')}</span>
        <h3 class="cartao__titulo">${r.titulo}</h3>
        <p class="cartao__texto">${r.texto}</p>
      </article>`,
        )
        .join('\n      ')}
    </div>
    <p class="mt-g">
      <a class="botao botao--acento" href="${whatsappLink(mensagem)}" target="_blank" rel="noopener">
        ${icone('whatsapp')}<span>Solicitar uma demonstração</span>
      </a>
    </p>
  </div>
</section>

<section class="secao secao--escura">
  <div class="envoltorio">
    <div class="secao__cabeca">
      <p class="sobretitulo">A plataforma</p>
      <h2>Telas do ${airvision.nome}</h2>
      <p class="secao__lead">Imagens da plataforma em operação, com dados reais de uma sala de compressores monitorada.</p>
    </div>
    <div class="galeria">
      ${airvision.galeria
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
</section>

<section class="secao">
  <div class="envoltorio">
    <div class="duo">
      <div>
        <p class="sobretitulo">Implantação</p>
        <h2>Compatibilidade</h2>
        <ul class="lista-check mt-m">
          ${airvision.compatibilidade.map((c) => `<li>${icone('check')}<span>${c}</span></li>`).join('\n          ')}
        </ul>
      </div>
      <div>
        <p class="sobretitulo">Integra com</p>
        <h2>O plano de manutenção</h2>
        <p class="secao__lead">O dado de telemetria do compressor não vive isolado: ele entra no plano de manutenção junto com a análise de vibração, o ensaio elétrico e o histórico de intervenções do mesmo ativo.</p>
        <p class="mt-m"><a class="link-seta" href="/servicos/planos-de-manutencao/">Ver planos de manutenção ${icone('seta')}</a></p>
        <p><a class="link-seta" href="/servicos/automacao-industrial/">Ver automação industrial ${icone('seta')}</a></p>
      </div>
    </div>
  </div>
</section>

${faixaCta({
  titulo: `Quer ver o ${airvision.nome} rodando com os seus compressores?`,
  texto: `Conte quais máquinas você tem na sala e avaliamos a integração. Atendimento em ${empresa.regiaoCompleta}.`,
  rotulo: 'Falar sobre o AirVision',
  mensagem,
  variante: 'faixa-cta--acento',
})}
`;

  return layout({
    url: '/airvision/',
    titulo: airvision.titulo,
    tituloSeo: 'AirVision — Telemetria de Ar Comprimido | SOUTECH',
    descricao: airvision.metaDescription,
    tipoPagina: 'Service',
    migalhas: [
      { rotulo: 'Início', href: '/' },
      { rotulo: 'AirVision', href: '/airvision/' },
    ],
    corpo,
  });
}
