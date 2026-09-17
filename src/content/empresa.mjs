// Dados institucionais da SOUTECH. Ponto unico de verdade para todo o site.

const whatsappDigits = '5565998442334';

export const empresa = {
  nome: 'SOUTECH',
  razaoSocial: 'SOUTECH Manutenção e Reparação LTDA',
  nomeCompleto: 'SOUTECH Automação e Manutenção',
  cnpj: '67.917.821/0001-68',
  cnpjDigits: '67917821000168',
  fundacao: '2023',
  anosAtuacao: '2023 — 2026',
  email: 'adm@soutechautomacao.com',
  telefoneExibicao: '(65) 99844-2334',
  telefoneE164: '+5565998442334',
  whatsappDigits,
  regiao: 'Mato Grosso',
  regiaoCompleta: 'Mato Grosso e região Centro-Oeste',
  estado: 'MT',
  pais: 'BR',
  // URL canônica. Ajuste SITE_URL no ambiente de build para publicar em outro domínio.
  baseUrl: (process.env.SITE_URL || 'https://www.soutechautomacao.com').replace(/\/+$/, ''),
};

/**
 * Monta um link wa.me com mensagem pré-preenchida.
 * @param {string} mensagem texto que já vai escrito na conversa
 */
export function whatsappLink(mensagem) {
  const base = `https://wa.me/${whatsappDigits}`;
  return mensagem ? `${base}?text=${encodeURIComponent(mensagem)}` : base;
}

export const mensagemPadrao =
  'Olá, SOUTECH. Vim pelo site e gostaria de solicitar um diagnóstico para os meus ativos.';
