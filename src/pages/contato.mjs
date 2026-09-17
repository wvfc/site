import {
  layout, icone, empresa, whatsappLink, mensagemPadrao,
  servicosPrincipais, servicosPorSlug,
} from '../lib/layout.mjs';

// Opções do único campo de seleção do formulário. Três campos, sem mais que isso.
const opcoes = [
  ...servicosPrincipais.map((s) => s.titulo),
  servicosPorSlug['lubrificacao-automatica'].titulo,
  'AirVision — telemetria de ar comprimido',
  'Não sei ainda — preciso de orientação',
];

export function paginaContato() {
  const corpo = `
<section class="heroi-pagina">
  <div class="envoltorio">
    <h1>Solicitar diagnóstico</h1>
    <p class="heroi-pagina__lead">Três campos e a conversa já abre no WhatsApp com a sua mensagem pronta. Se preferir, fale direto pelo número abaixo.</p>
  </div>
</section>

<section class="secao">
  <div class="envoltorio">
    <div class="duo">
      <div>
        <form class="form" id="form-contato" data-whatsapp="${empresa.whatsappDigits}" novalidate>
          <h2>Preencha e envie pelo WhatsApp</h2>
          <p class="secao__lead" style="font-size:.97rem">Nenhum dado é armazenado neste site: o formulário apenas monta a mensagem e abre a sua conversa com a SOUTECH.</p>

          <div class="campo mt-m">
            <label class="campo__rotulo" for="campo-nome">Nome
              <span class="campo__dica">Como podemos chamar você</span>
            </label>
            <input type="text" id="campo-nome" name="nome" autocomplete="name" required
                   placeholder="Seu nome" minlength="2" maxlength="80">
          </div>

          <div class="campo">
            <label class="campo__rotulo" for="campo-whatsapp">WhatsApp
              <span class="campo__dica">Com DDD, para a nossa equipe retornar</span>
            </label>
            <input type="tel" id="campo-whatsapp" name="whatsapp" autocomplete="tel" required
                   inputmode="numeric" placeholder="(65) 99999-9999" minlength="14" maxlength="15">
          </div>

          <div class="campo">
            <label class="campo__rotulo" for="campo-necessidade">Tipo de ativo ou necessidade
              <span class="campo__dica">O que você precisa avaliar</span>
            </label>
            <select id="campo-necessidade" name="necessidade" required>
              <option value="" disabled selected>Selecione uma opção</option>
              ${opcoes.map((o) => `<option value="${o}">${o}</option>`).join('\n              ')}
            </select>
          </div>

          <button class="botao botao--whats botao--grande botao--bloco" type="submit">
            ${icone('whatsapp')}<span>Enviar pelo WhatsApp</span>
          </button>

          <p class="form__nota">${icone('whatsapp')}<span>Ao enviar, o WhatsApp abre com a mensagem já escrita. Você confere e toca em enviar.</span></p>
          <p class="form__nota" id="form-aviso" role="status" aria-live="polite" hidden></p>
        </form>
      </div>

      <div>
        <p class="sobretitulo">Contato direto</p>
        <h2>Prefere falar agora?</h2>
        <p class="secao__lead">Atendimento comercial e técnico para indústria e agronegócio em ${empresa.regiaoCompleta}.</p>

        <ul class="contato-lista mt-g">
          <li>${icone('whatsapp')}<span><strong>WhatsApp</strong><a href="${whatsappLink(mensagemPadrao)}" target="_blank" rel="noopener">${empresa.telefoneExibicao}</a></span></li>
          <li>${icone('telefone')}<span><strong>Telefone</strong><a href="tel:${empresa.telefoneE164}">${empresa.telefoneExibicao}</a></span></li>
          <li>${icone('email')}<span><strong>E-mail</strong><a href="mailto:${empresa.email}">${empresa.email}</a></span></li>
          <li>${icone('local')}<span><strong>Região de atendimento</strong>${empresa.regiaoCompleta}</span></li>
          <li>${icone('plano')}<span><strong>CNPJ</strong>${empresa.cnpj}</span></li>
        </ul>

        <p class="mt-g">
          <a class="botao botao--whats botao--grande" href="${whatsappLink(mensagemPadrao)}" target="_blank" rel="noopener">
            ${icone('whatsapp')}<span>Abrir conversa no WhatsApp</span>
          </a>
        </p>

        <div class="mt-g">
          <h3>O que acontece depois</h3>
          <ol class="etapas mt-m">
            <li class="etapa">
              <h4 class="etapa__titulo">Entendemos a sua operação</h4>
              <p class="etapa__texto">Quais ativos, qual criticidade e qual falha vem se repetindo.</p>
            </li>
            <li class="etapa">
              <h4 class="etapa__titulo">Indicamos o diagnóstico adequado</h4>
              <p class="etapa__texto">Nem toda falha aparece na mesma técnica. Apontamos qual enxerga o seu problema.</p>
            </li>
            <li class="etapa">
              <h4 class="etapa__titulo">Enviamos a proposta técnica</h4>
              <p class="etapa__texto">Escopo, entregáveis e prazo, com o que está e o que não está incluído.</p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</section>
`;

  return layout({
    url: '/contato/',
    titulo: 'Contato',
    tituloSeo: 'Contato | Solicitar Diagnóstico — SOUTECH Mato Grosso',
    descricao: `Fale com a SOUTECH pelo WhatsApp ${empresa.telefoneExibicao}. Diagnóstico de manutenção preditiva e automação industrial em Mato Grosso.`,
    tipoPagina: 'ContactPage',
    migalhas: [
      { rotulo: 'Início', href: '/' },
      { rotulo: 'Contato', href: '/contato/' },
    ],
    corpo,
  });
}
