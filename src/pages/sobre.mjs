import { layout, faixaCta, icone, empresa, servicosPrincipais } from '../lib/layout.mjs';
import { figura } from '../lib/imagens.mjs';

const principios = [
  {
    icone: 'alvo',
    titulo: 'Medir antes de propor',
    texto: 'Nenhuma recomendação sai daqui sem dado que a sustente. Se não medimos, não afirmamos.',
  },
  {
    icone: 'plano',
    titulo: 'Priorizar por criticidade',
    texto: 'Recurso de manutenção é escasso. Ele vai primeiro para o ativo cuja falha custa mais caro à operação.',
  },
  {
    icone: 'chave',
    titulo: 'Tratar a causa raiz',
    texto: 'Corrigir o efeito devolve a mesma falha em poucos meses. Investigamos por que ela aconteceu.',
  },
  {
    icone: 'escudo',
    titulo: 'Documentar o que foi feito',
    texto: 'Laudo, relatório e documentação as-built. O que não fica registrado não vira histórico nem decisão.',
  },
];

export function paginaSobre() {
  const corpo = `
<section class="heroi-pagina">
  <div class="envoltorio">
    <h1>Sobre a SOUTECH</h1>
    <p class="heroi-pagina__lead">Empresa de engenharia de manutenção e automação com sede em ${empresa.regiao}, dedicada a manter em operação os ativos que a indústria e o agronegócio não podem deixar parar.</p>
    <div class="heroi-pagina__acoes">
      <a class="botao botao--acento botao--grande" href="/contato/">Falar com a SOUTECH</a>
      <a class="botao botao--claro botao--grande" href="/servicos/">Ver os serviços</a>
    </div>
  </div>
</section>

<section class="secao">
  <div class="envoltorio">
    <div class="duo duo--estreito">
      <div>
        <p class="sobretitulo">Quem somos</p>
        <h2>Confiabilidade aplicada à realidade de quem opera</h2>
        <p class="secao__lead">A ${empresa.razaoSocial} atua desde ${empresa.fundacao} em ${empresa.regiaoCompleta}, reunindo em uma mesma equipe as técnicas de diagnóstico preditivo, a execução da manutenção e os projetos de automação industrial.</p>
        <p>Trabalhamos em plantas industriais e em agroindústrias, onde a janela de manutenção é curta e a parada não planejada custa caro. Essa realidade orienta o nosso jeito de trabalhar: diagnóstico com dado, prioridade definida por criticidade e plano dimensionado para a equipe que existe — não para a equipe ideal.</p>
        <p>Somos <strong>Representante Dynamox em ${empresa.regiao}</strong> para soluções de monitoramento de vibração, e desenvolvemos o <a href="/airvision/">AirVision</a>, nossa própria plataforma de telemetria para salas de compressores.</p>
      </div>
      <div>
        ${figura({
          src: 'ilustracao-estrategia-negocios-industria.webp',
          alt: 'Ilustração representando planejamento e estratégia aplicados à operação industrial',
          sizes: '(min-width: 64rem) 540px, 100vw',
        })}
      </div>
    </div>
  </div>
</section>

<section class="secao secao--escura">
  <div class="envoltorio">
    <div class="secao__cabeca">
      <p class="sobretitulo">Como pensamos</p>
      <h2>Quatro princípios que orientam cada trabalho</h2>
    </div>
    <div class="grade grade--4">
      ${principios
        .map(
          (p) => `<article class="cartao cartao--destaque">
        <span class="cartao__icone" aria-hidden="true">${icone(p.icone)}</span>
        <h3 class="cartao__titulo">${p.titulo}</h3>
        <p class="cartao__texto">${p.texto}</p>
      </article>`,
        )
        .join('\n      ')}
    </div>
  </div>
</section>

<section class="secao secao--papel">
  <div class="envoltorio">
    <div class="duo">
      <div>
        <p class="sobretitulo">Competências</p>
        <h2>O que fazemos</h2>
        <ul class="lista-check mt-m">
          ${servicosPrincipais
            .map((s) => `<li>${icone('check')}<span><a href="/servicos/${s.slug}/">${s.titulo}</a></span></li>`)
            .join('\n          ')}
          <li>${icone('check')}<span><a href="/servicos/lubrificacao-automatica/">Lubrificação Automática</a></span></li>
          <li>${icone('check')}<span><a href="/airvision/">AirVision — telemetria de ar comprimido</a></span></li>
        </ul>
      </div>
      <div>
        <p class="sobretitulo">Dados institucionais</p>
        <h2>A empresa</h2>
        <ul class="contato-lista mt-m">
          <li>${icone('escudo')}<span><strong>Razão social</strong>${empresa.razaoSocial}</span></li>
          <li>${icone('plano')}<span><strong>CNPJ</strong>${empresa.cnpj}</span></li>
          <li>${icone('relogio')}<span><strong>No mercado</strong>${empresa.anosAtuacao}</span></li>
          <li>${icone('local')}<span><strong>Atendimento</strong>${empresa.regiaoCompleta}</span></li>
          <li>${icone('telefone')}<span><strong>Telefone e WhatsApp</strong>${empresa.telefoneExibicao}</span></li>
          <li>${icone('email')}<span><strong>E-mail</strong><a href="mailto:${empresa.email}">${empresa.email}</a></span></li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="secao secao--compacta">
  <div class="envoltorio">
    <p class="medida"><small>A SOUTECH é Representante Dynamox em ${empresa.regiao}. Não há vínculo empregatício entre a SOUTECH e a Dynamox. As informações sobre produtos de terceiros publicadas neste site seguem o material oficial vigente dos respectivos fabricantes, e as marcas citadas pertencem aos seus titulares.</small></p>
  </div>
</section>

${faixaCta({
  titulo: 'Vamos conversar sobre os seus ativos',
  texto: 'Conte o que você opera e qual falha vem se repetindo. Indicamos o caminho técnico mais direto, sem compromisso.',
  rotulo: 'Falar no WhatsApp',
  variante: 'faixa-cta--acento',
})}
`;

  return layout({
    url: '/sobre/',
    titulo: 'Sobre a SOUTECH',
    tituloSeo: 'Sobre a SOUTECH | Engenharia de Manutenção e Automação em Mato Grosso',
    descricao: `${empresa.razaoSocial}: engenharia de manutenção preditiva, automação industrial e confiabilidade de ativos em Mato Grosso desde ${empresa.fundacao}.`,
    tipoPagina: 'AboutPage',
    migalhas: [
      { rotulo: 'Início', href: '/' },
      { rotulo: 'Sobre', href: '/sobre/' },
    ],
    corpo,
  });
}
