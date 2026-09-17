import { layout, icone, empresa, servicosPrincipais } from '../lib/layout.mjs';

export function paginaNaoEncontrada() {
  const corpo = `
<section class="heroi-pagina">
  <div class="envoltorio">
    <p class="selo selo--claro">Erro 404</p>
    <h1>Página não encontrada</h1>
    <p class="heroi-pagina__lead">O endereço acessado não existe ou foi movido. Os caminhos abaixo levam ao que a maioria das pessoas procura aqui.</p>
    <div class="heroi-pagina__acoes">
      <a class="botao botao--acento botao--grande" href="/">Voltar ao início</a>
      <a class="botao botao--claro botao--grande" href="/contato/">Falar com a SOUTECH</a>
    </div>
  </div>
</section>

<section class="secao">
  <div class="envoltorio">
    <div class="secao__cabeca">
      <p class="sobretitulo">Atalhos</p>
      <h2>Serviços SOUTECH</h2>
    </div>
    <ul class="lista-check">
      ${servicosPrincipais
        .map((s) => `<li>${icone('check')}<span><a href="/servicos/${s.slug}/">${s.titulo}</a></span></li>`)
        .join('\n      ')}
      <li>${icone('check')}<span><a href="/servicos/lubrificacao-automatica/">Lubrificação Automática</a></span></li>
      <li>${icone('check')}<span><a href="/airvision/">AirVision — telemetria de ar comprimido</a></span></li>
      <li>${icone('check')}<span><a href="/sobre/">Sobre a SOUTECH</a></span></li>
    </ul>
  </div>
</section>
`;

  return layout({
    url: '/404.html',
    titulo: 'Página não encontrada',
    tituloSeo: 'Página não encontrada | SOUTECH',
    descricao: `Página não encontrada no site da ${empresa.razaoSocial}. Veja os atalhos para os serviços de manutenção preditiva e automação industrial.`,
    corpo,
  });
}
