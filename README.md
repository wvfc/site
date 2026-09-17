# Site institucional SOUTECH

Site da **SOUTECH Manutenção e Reparação LTDA** (SOUTECH Automação e Manutenção) —
manutenção preditiva, automação industrial e confiabilidade de ativos em Mato Grosso.

Gerador estático próprio em Node, sem framework e **sem nenhuma dependência de
JavaScript em produção**. O que vai para o ar é HTML com CSS embutido, um script
de ~2 KB e imagens otimizadas.

## Como rodar

```bash
npm install          # instala o sharp (usado só no build)
npm run build        # gera dist/
npm run serve        # build + servidor local em http://localhost:4321
npm run dev          # regera dist/ a cada alteração em src/
```

Node 20 ou superior.

## Estrutura

```
build.mjs                 gera dist/: imagens, páginas, sitemap, ícones
server.mjs                servidor local para conferir o build
IMAGENS SITE/             imagens de origem (não vão para produção como estão)
case de sucesso/          PDFs de referência — NÃO publicados (ver Conformidade)
src/
  content/
    empresa.mjs           CNPJ, telefone, e-mail, domínio  ← edite aqui
    servicos.mjs          texto de todos os módulos de serviço
    airvision.mjs         texto da página do AirVision
  lib/
    layout.mjs            cabeçalho, rodapé, JSON-LD, componentes
    imagens.mjs           <picture> responsivo a partir do manifesto do build
    icones.mjs            ícones SVG inline
    site.js               menu mobile + formulário → WhatsApp
  pages/                  uma função por página
  styles/main.css         folha de estilo única (embutida no HTML)
static/                   arquivos copiados como estão para a raiz de dist/
```

### Onde mexer no conteúdo

| O que mudar | Arquivo |
| --- | --- |
| Telefone, e-mail, CNPJ, domínio | `src/content/empresa.mjs` |
| Texto de um serviço | `src/content/servicos.mjs` |
| Texto do AirVision | `src/content/airvision.mjs` |
| Itens do menu | `NAV` em `src/lib/layout.mjs` |
| Cores, espaçamento, tipografia | tokens em `:root`, `src/styles/main.css` |

Adicionar uma imagem: solte o arquivo em `IMAGENS SITE/` e refira-o pelo nome
original (`imagem({ src: 'arquivo.jpg', alt: '…' })`). O build gera AVIF e WebP
em quatro larguras e monta o `srcset`. Nome de arquivo inexistente quebra o
build de propósito, em vez de virar imagem quebrada em produção.

## Deploy — Cloudflare Pages

| Configuração | Valor |
| --- | --- |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | `20` ou superior |

`dist/_headers` já sai pronto com cache de um ano para `/img/*`, revalidação
para o HTML e cabeçalhos de segurança.

Para publicar em outro domínio, defina a variável de ambiente `SITE_URL` no
projeto do Cloudflare (ex.: `SITE_URL=https://soutechautomacao.com`). Ela alimenta
canonical, Open Graph, JSON-LD e `sitemap.xml`.

### Cloudflare Web Analytics — falta o token

O script já está no HTML, **comentado**, ao final de `<body>`. Para ativar:

1. No painel Cloudflare: **Analytics & Logs → Web Analytics → Manage site**, copie
   o valor de `token` do snippet.
2. Em `src/lib/layout.mjs`, localize o bloco `Cloudflare Web Analytics`, remova os
   marcadores de comentário `<!--` e `-->` e troque `CF_BEACON_TOKEN` pelo token.
3. `npm run build` e publique.

O token do Web Analytics é público por natureza (ele aparece no HTML de qualquer
site que use a ferramenta), então pode ficar versionado sem problema.

## Decisões de implementação

- **CSS e JS embutidos no HTML.** A maior parte das visitas chega por link
  compartilhado no WhatsApp, em uma única página e muitas vezes em 4G. Embutir
  elimina requisições que bloqueiam a renderização. Home: 5 requisições, ~66 KB
  no total, ~13 KB de HTML comprimido.
- **Fontes do sistema.** Sem Google Fonts: nada a baixar e nenhuma troca de fonte
  durante o carregamento.
- **Formulário sem servidor.** Os três campos montam a mensagem e abrem o WhatsApp
  já preenchido, pronto para o lead enviar. Nenhum dado é armazenado ou
  transmitido para terceiros — não há backend, banco nem serviço de formulário.
- **Imagens.** AVIF + WebP em 420/720/1080/1500 px, com `width`/`height` sempre
  declarados para não haver deslocamento de layout.
- **Acessibilidade.** Todas as combinações de cor do site passam em WCAG AA
  (contraste ≥ 4.5:1 para texto). Navegação por teclado, `skip link`, foco
  visível, um `<h1>` por página e `alt` em todas as imagens.

## Conformidade

### Política de Divulgação Dynamox (FO-MKT-0001R04)

A SOUTECH é **Representante Dynamox em Mato Grosso**. Ao editar qualquer texto,
imagem ou anúncio ligado à Análise de Vibração, mantenha:

- Somente os termos **"Representante"** ou **"Parceiro"**. Nunca "Vendedor
  Dynamox", "Consultor Dynamox" ou "Executivo de Contas Dynamox".
- Nenhuma alegação de eficácia, resultado garantido ou expectativa irreal.
- Nenhuma especificação técnica de sensores ou gateways fora do datasheet oficial
  vigente — por isso os textos descrevem função, não números.
- Nenhuma imagem com resultado enganoso ou improvável.
- A logomarca Dynamox não pode ser usada de forma que confunda o consumidor sobre
  a relação comercial.
- Produtos Dynamox não podem ser cadastrados em marketplaces, plataformas de
  afiliação, dropshipping ou marketing multinível.
- A palavra-chave "Dynamox" não pode ser comprada em Google Ads.

### Cases em `case de sucesso/`

Os dois PDFs **não são publicados no site**, por decisão deliberada:

- *(PT) Caso de Mineradora Australiana* traz na capa: "Todas as informações nesta
  apresentação são de propriedade da Dynamox e não podem ser usadas ou
  reproduzidas sem autorização."
- Ambos apresentam cifras de perda evitada (R$ 19 milhões e US$ 28–62 milhões),
  o que configuraria alegação de eficácia vedada pela política acima.

O site apresenta a **metodologia técnica** — o que cada análise identifica e como
o defeito evolui — sem números de resultado. Para publicá-los, obtenha antes
autorização escrita da Dynamox e revise as cifras com o jurídico.
