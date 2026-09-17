import {
  layout, faixaCta, cartaoServico, cartaoAirvision,
  icone, empresa, whatsappLink, servicosPrincipais, airvision,
} from '../lib/layout.mjs';
import { imagem, figura } from '../lib/imagens.mjs';

const msgHero =
  'Olá, SOUTECH. Vim pelo site e gostaria de solicitar um diagnóstico dos meus ativos.';

const provas = [
  { valor: 'Dynamox', rotulo: `Representante em ${empresa.regiao}` },
  { valor: 'AirVision', rotulo: 'Plataforma própria de telemetria' },
  { valor: 'Desde 2023', rotulo: 'Atuando em indústria e agronegócio' },
  { valor: '8 frentes', rotulo: 'Diagnóstico, automação e manutenção' },
];

const setores = [
  {
    icone: 'clp',
    titulo: 'Indústria de processo',
    texto: 'Plantas de produção contínua onde a parada de um ativo crítico interrompe a linha inteira.',
  },
  {
    icone: 'plano',
    titulo: 'Agronegócio',
    texto: 'Armazenagem, secagem e beneficiamento de grãos, com janela de safra que não admite parada improvisada.',
  },
  {
    icone: 'raio',
    titulo: 'Utilidades e infraestrutura',
    texto: 'Ar comprimido, bombeamento, refrigeração e distribuição elétrica — o que sustenta todo o resto.',
  },
  {
    icone: 'chave',
    titulo: 'Frotas de ativos rotativos',
    texto: 'Conjuntos motor–redutor–transportador distribuídos, difíceis de inspecionar em ronda manual.',
  },
];

const comoTrabalhamos = [
  {
    titulo: 'Diagnóstico da condição atual',
    texto: 'Medimos antes de propor. Vibração, ensaio elétrico, termografia e qualidade de energia mostram em que estado os ativos realmente estão — não em que estado deveriam estar.',
  },
  {
    titulo: 'Priorização por criticidade',
    texto: 'Nem todo ativo merece o mesmo esforço. Classificamos por impacto sobre produção, segurança e custo de reposição, e é isso que define onde o recurso entra primeiro.',
  },
  {
    titulo: 'Plano que cabe na sua equipe',
    texto: 'O plano é construído para o efetivo e a rotina que existem hoje. Plano que não cabe na operação é abandonado no segundo mês.',
  },
  {
    titulo: 'Execução e acompanhamento',
    texto: 'Executamos a intervenção, investigamos a causa raiz e realimentamos o plano com o que a falha real mostrou.',
  },
];

export function paginaHome() {
  const corpo = `
<section class="heroi">
  <div class="heroi__fundo" aria-hidden="true">
    ${imagem({
      src: 'tecnico-inspecao-equipamento-rotativo.jpg',
      alt: '',
      sizes: '100vw',
      prioridade: true,
    })}
  </div>
  <div class="envoltorio heroi__interno">
    <p class="selo selo--claro">Manutenção preditiva e automação · ${empresa.regiao}</p>
    <h1 class="heroi__titulo">Evite paradas não planejadas: monitore seus ativos antes que a falha aconteça.</h1>
    <p class="heroi__sub">Predição de falhas em motores, transformadores e máquinas críticas para indústria e agronegócio em ${empresa.regiao}.</p>
    <div class="heroi__acoes">
      <a class="botao botao--acento botao--grande" href="${whatsappLink(msgHero)}" target="_blank" rel="noopener">
        ${icone('whatsapp')}<span>Solicitar diagnóstico</span>
      </a>
      <a class="botao botao--claro botao--grande" href="/servicos/">Ver os serviços</a>
    </div>
    <p class="heroi__nota">${icone('relogio')} Atendimento direto pelo WhatsApp — sem formulário longo e sem intermediário.</p>
  </div>
</section>

<section class="secao secao--escura secao--compacta">
  <div class="envoltorio">
    <div class="prova">
      ${provas
        .map(
          (p) => `<div class="prova__item">
        <span class="prova__valor">${p.valor}</span>
        <span class="prova__rotulo">${p.rotulo}</span>
      </div>`,
        )
        .join('\n      ')}
    </div>
  </div>
</section>

<section class="secao">
  <div class="envoltorio">
    <div class="duo duo--estreito">
      <div>
        <p class="sobretitulo">O problema</p>
        <h2>A falha avisa. O problema é que ninguém está ouvindo.</h2>
        <p class="secao__lead">Rolamento, enrolamento, acoplamento e rede elétrica dão sinais muito antes de parar. Esses sinais existem em grandezas que a inspeção visual não alcança — vibração, assinatura de corrente, temperatura, conteúdo harmônico.</p>
        <p>Quando o sintoma fica perceptível para o operador, a janela para agir de forma planejada já passou. O que sobra é parada corretiva, compra emergencial e produção perdida.</p>
        <ul class="lista-dor mt-m">
          <li>Ronda periódica enxerga o ativo só no dia da medição — o que acontece entre uma visita e outra fica invisível.</li>
          <li>Intervenção que corrige o efeito e ignora a causa devolve a mesma falha em poucos meses.</li>
          <li>Sem critério de criticidade, a equipe gasta tempo no ativo errado e chega atrasada no que importava.</li>
        </ul>
        <p class="mt-m"><a class="link-seta" href="/servicos/planos-de-manutencao/">Como montamos um plano por criticidade ${icone('seta')}</a></p>
      </div>
      <div>
        ${figura({
          src: 'grafico-analise-vibracao-cascata-3d.webp',
          alt: 'Gráfico em cascata mostrando a evolução do espectro de vibração de uma máquina ao longo de semanas',
          legenda: 'A evolução do espectro ao longo do tempo mostra o defeito crescendo muito antes de a máquina parar.',
          sizes: '(min-width: 64rem) 540px, 100vw',
        })}
      </div>
    </div>
  </div>
</section>

<section class="secao secao--papel" id="servicos">
  <div class="envoltorio">
    <div class="secao__cabeca">
      <p class="sobretitulo">Módulos de serviço</p>
      <h2>Diagnóstico, automação e manutenção sob um mesmo padrão técnico</h2>
      <p class="secao__lead">Cada módulo resolve um tipo de falha. Combinados e priorizados por criticidade, viram um plano único de confiabilidade para a sua planta.</p>
    </div>

    <div class="grade grade--3">
      ${servicosPrincipais.map((s) => cartaoServico(s)).join('\n      ')}
      ${cartaoAirvision()}
    </div>

    <p class="mt-g"><a class="link-seta" href="/servicos/">Ver todos os serviços em detalhe ${icone('seta')}</a></p>
  </div>
</section>

${faixaCta({
  titulo: 'Não sabe por onde começar?',
  texto: 'Descreva no WhatsApp o que você opera e qual falha vem se repetindo. A partir disso indicamos qual diagnóstico faz sentido primeiro — sem compromisso.',
  rotulo: 'Falar com um especialista',
  mensagem: 'Olá, SOUTECH. Vim pelo site e não sei por onde começar. Gostaria de conversar sobre os meus ativos.',
})}

<section class="secao">
  <div class="envoltorio">
    <div class="duo duo--inverso">
      <div>
        ${figura({
          src: 'AIRVISION-ABA-DASHBOARD-PRINCIPAL.png',
          alt: 'Painel do AirVision com indicadores ao vivo de pressão de rede, pressão interna, temperatura da unidade e horas de operação de um compressor',
          legenda: 'AirVision: a sala de compressores ao vivo, acessível do celular.',
          sizes: '(min-width: 64rem) 540px, 100vw',
        })}
      </div>
      <div>
        <p class="sobretitulo">Plataforma própria</p>
        <h2>${airvision.nome}: a sua sala de compressores ao vivo</h2>
        <p class="secao__lead">${airvision.heroLead}</p>
        <ul class="lista-check mt-m">
          <li>${icone('check')}<span>Pressão de rede, pressão interna e temperatura atualizadas ao vivo</span></li>
          <li>${icone('check')}<span>Horas totais e horas em carga por máquina, sem anotação manual</span></li>
          <li>${icone('check')}<span>Contadores de filtro, óleo e graxa com aviso antecipado</span></li>
          <li>${icone('check')}<span>Compressores de fabricantes diferentes na mesma interface</span></li>
        </ul>
        <p class="mt-g"><a class="botao botao--fantasma" href="/airvision/">Conhecer o AirVision ${icone('seta')}</a></p>
      </div>
    </div>
  </div>
</section>

<section class="secao secao--escura">
  <div class="envoltorio">
    <div class="secao__cabeca">
      <p class="sobretitulo">Como trabalhamos</p>
      <h2>Medir, priorizar, planejar, executar</h2>
      <p class="secao__lead">Confiabilidade não vem de comprar sensor. Vem de transformar dado em decisão, e decisão em intervenção feita na hora certa.</p>
    </div>
    <ol class="etapas">
      ${comoTrabalhamos
        .map(
          (e) => `<li class="etapa">
        <h3 class="etapa__titulo">${e.titulo}</h3>
        <p class="etapa__texto">${e.texto}</p>
      </li>`,
        )
        .join('\n      ')}
    </ol>
  </div>
</section>

<section class="secao secao--papel">
  <div class="envoltorio">
    <div class="secao__cabeca">
      <p class="sobretitulo">Onde atuamos</p>
      <h2>Setores atendidos em ${empresa.regiaoCompleta}</h2>
    </div>
    <div class="grade grade--4">
      ${setores
        .map(
          (s) => `<article class="cartao">
        <span class="cartao__icone" aria-hidden="true">${icone(s.icone)}</span>
        <h3 class="cartao__titulo">${s.titulo}</h3>
        <p class="cartao__texto">${s.texto}</p>
      </article>`,
        )
        .join('\n      ')}
    </div>
    <p class="mt-g"><a class="link-seta" href="/contato/">Falar sobre a sua operação ${icone('seta')}</a></p>
  </div>
</section>

${faixaCta({
  titulo: 'Quer saber em que condição os seus ativos estão hoje?',
  texto: 'Conte o que você opera e a nossa equipe indica o caminho de diagnóstico mais adequado. A resposta chega no seu WhatsApp.',
  rotulo: 'Solicitar diagnóstico',
  variante: 'faixa-cta--acento',
})}
`;

  return layout({
    url: '/',
    titulo: 'Manutenção preditiva e automação industrial',
    tituloSeo: 'SOUTECH | Manutenção Preditiva e Automação Industrial em Mato Grosso',
    descricao:
      'Predição de falhas em motores, transformadores e máquinas críticas para indústria e agronegócio em Mato Grosso. Vibração, MCA, energia e automação.',
    tipoPagina: 'WebPage',
    corpo,
  });
}
