// Plataforma proprietária SOUTECH de telemetria para ar comprimido.

export const airvision = {
  slug: 'airvision',
  nome: 'AirVision',
  chamada: 'Telemetria de ar comprimido',
  titulo: 'AirVision — telemetria de ar comprimido',
  metaDescription:
    'AirVision: plataforma SOUTECH de telemetria para compressores. Pressão, temperatura, horas de operação e contadores de manutenção em tempo real, acessíveis de qualquer lugar.',
  heroLead:
    'Plataforma desenvolvida pela SOUTECH para acompanhar a sala de compressores em tempo real — pressão, temperatura, horas de operação e contadores de manutenção, sem depender de alguém no local para ler o painel.',
  heroImagem: {
    src: 'AIRVISON-ABA-TODAS AS MAQUINAS.png',
    alt: 'Tela do AirVision listando todas as máquinas monitoradas com pressão, temperatura e horas de operação',
  },
  problema: {
    titulo: 'O ar comprimido é utilidade crítica e ponto cego',
    texto:
      'Parte relevante da planta depende do ar comprimido, mas a sala de compressores costuma ser visitada apenas quando algo já deu errado. O dado de operação fica preso no painel da máquina — e sai de lá, quando sai, anotado em papel.',
    itens: [
      'Queda de pressão de rede só é percebida quando o processo já sentiu.',
      'Contador de manutenção no painel local exige que alguém vá até lá para conferir.',
      'Sem histórico, não há como saber se o consumo mudou ou desde quando.',
      'Compressor operando acima da temperatura normal passa despercebido até desarmar.',
    ],
  },
  recursos: [
    {
      titulo: 'Leitura ao vivo por máquina',
      texto:
        'Pressão de rede, pressão interna, temperatura da unidade e do secador, horas totais e horas em carga, além do estado atual do compressor.',
    },
    {
      titulo: 'Visão consolidada da sala',
      texto:
        'Todas as máquinas monitoradas em uma única tela, com os indicadores principais lado a lado — útil quando há compressores de marcas e modelos diferentes.',
    },
    {
      titulo: 'Histórico de variáveis',
      texto:
        'Séries históricas de pressão e temperatura que mostram tendência, permitindo separar um evento pontual de uma degradação progressiva.',
    },
    {
      titulo: 'Alarmes com detalhamento',
      texto:
        'Registro dos eventos com o contexto de cada um, para que a equipe saiba o que aconteceu sem precisar reconstruir a história depois.',
    },
    {
      titulo: 'Contadores de manutenção',
      texto:
        'Acompanhamento das horas restantes para filtro de ar, filtro de óleo, elemento separador, óleo lubrificante e graxa do motor, com aviso antecipado.',
    },
    {
      titulo: 'Acesso remoto',
      texto:
        'Interface web responsiva, acessível pelo celular. Quem precisa do dado não precisa estar na planta para vê-lo.',
    },
  ],
  galeria: [
    {
      src: 'AIRVISION-ABA-DASHBOARD-PRINCIPAL.png',
      alt: 'Dashboard principal do AirVision com cartões de pressão de rede, pressão interna, temperatura, horas totais e estado atual',
      legenda: 'Painel geral da máquina: os indicadores que definem a condição, atualizados ao vivo.',
    },
    {
      src: 'AIRVISION-ABA-MANUTENÇÃO.png',
      alt: 'Aba de manutenção do AirVision com contadores de horas restantes para filtro de ar, filtro de óleo, elemento separador, óleo e graxa',
      legenda: 'Contadores de manutenção com aviso antecipado por item consumível.',
    },
    {
      src: 'AIRVISION-ABA-HISTORICO.png',
      alt: 'Tela de histórico do AirVision com a evolução das variáveis monitoradas ao longo do tempo',
      legenda: 'Histórico de pressão: tendência separa o evento pontual da degradação.',
    },
    {
      src: 'AIRVISION-ABA-HISTORICO-TEMPERATURA.png',
      alt: 'Histórico de temperatura da unidade no AirVision ao longo do período monitorado',
      legenda: 'Histórico de temperatura da unidade ao longo do período.',
    },
    {
      src: 'AIRVISION-ABA-DETALHES-ALARME.png',
      alt: 'Tela de detalhes de alarme do AirVision com o registro do evento e seu contexto',
      legenda: 'Detalhe do alarme: o que ocorreu, quando e em que condição.',
    },
    {
      src: 'AIRVISION-ABA-SELEÇÃO DE MAQUINAS.png',
      alt: 'Tela de seleção de máquinas do AirVision listando os compressores disponíveis',
      legenda: 'Seleção de máquina: cada compressor com seu conjunto próprio de indicadores.',
    },
  ],
  compatibilidade: [
    'Compressores de parafuso com IHM de comunicação industrial',
    'Unidades de fabricantes distintos na mesma sala, em uma só interface',
    'Integração com secadores e instrumentação de rede quando disponível',
    'Instalação sem intervenção na lógica de controle do compressor',
  ],
};
