import {
  layout, faixaCta, cartaoServico, cartaoAirvision,
  icone, empresa, servicosPrincipais, servicosPorSlug,
} from '../lib/layout.mjs';

export function paginaServicosIndex() {
  const lubrificacao = servicosPorSlug['lubrificacao-automatica'];

  const corpo = `
<section class="heroi-pagina">
  <div class="envoltorio">
    <h1>Serviços</h1>
    <p class="heroi-pagina__lead">Oito frentes técnicas que cobrem o ciclo completo de confiabilidade: diagnosticar a condição do ativo, corrigir a causa, automatizar o processo e organizar tudo em um plano de manutenção que a sua equipe consegue executar.</p>
    <div class="heroi-pagina__acoes">
      <a class="botao botao--acento botao--grande" href="/contato/">Solicitar diagnóstico</a>
    </div>
  </div>
</section>

<section class="secao">
  <div class="envoltorio">
    <div class="secao__cabeca">
      <p class="sobretitulo">Diagnóstico</p>
      <h2>Saber em que condição o ativo está</h2>
      <p class="secao__lead">Técnicas que identificam o defeito em estágio inicial, enquanto ainda há tempo de planejar a intervenção.</p>
    </div>
    <div class="grade grade--3">
      ${['analise-de-vibracao', 'mca-em-motores', 'qualidade-de-energia']
        .map((slug) => cartaoServico(servicosPorSlug[slug]))
        .join('\n      ')}
    </div>
  </div>
</section>

<section class="secao secao--papel">
  <div class="envoltorio">
    <div class="secao__cabeca">
      <p class="sobretitulo">Correção e execução</p>
      <h2>Tratar a causa, não só o efeito</h2>
      <p class="secao__lead">Intervenção técnica no ativo, com o diagnóstico orientando o que fazer e por quê.</p>
    </div>
    <div class="grade grade--3">
      ${['balanceamento-dinamico', 'manutencao-industrial']
        .map((slug) => cartaoServico(servicosPorSlug[slug]))
        .join('\n      ')}
      ${cartaoServico(lubrificacao)}
    </div>
    <p class="mt-m"><small>Lubrificação Automática é sub-módulo de Manutenção Industrial e pode ser contratada de forma isolada.</small></p>
  </div>
</section>

<section class="secao">
  <div class="envoltorio">
    <div class="secao__cabeca">
      <p class="sobretitulo">Processo e estratégia</p>
      <h2>Transformar dado em operação melhor</h2>
      <p class="secao__lead">Automação do processo e organização da manutenção em um plano único, priorizado por criticidade.</p>
    </div>
    <div class="grade grade--3">
      ${['automacao-industrial', 'planos-de-manutencao']
        .map((slug) => cartaoServico(servicosPorSlug[slug]))
        .join('\n      ')}
      ${cartaoAirvision()}
    </div>
  </div>
</section>

${faixaCta({
  titulo: 'Combinamos os módulos conforme a sua planta pede',
  texto: `Não é preciso contratar tudo. Conte o que você opera em ${empresa.regiao} e indicamos por onde começa o maior ganho.`,
  rotulo: 'Falar com um especialista',
  variante: 'faixa-cta--acento',
})}
`;

  return layout({
    url: '/servicos/',
    titulo: 'Serviços',
    tituloSeo: 'Serviços de Manutenção Preditiva e Automação | SOUTECH Mato Grosso',
    descricao:
      'Análise de vibração, balanceamento, MCA em motores, qualidade de energia, automação industrial, lubrificação e planos de manutenção em Mato Grosso.',
    tipoPagina: 'CollectionPage',
    migalhas: [
      { rotulo: 'Início', href: '/' },
      { rotulo: 'Serviços', href: '/servicos/' },
    ],
    corpo,
  });
}
