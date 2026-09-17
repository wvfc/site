// Conteúdo dos módulos de serviço.
//
// CONFORMIDADE (Dynamox FO-MKT-0001R04): no módulo de Análise de Vibração use
// exclusivamente os termos "Representante" ou "Parceiro"; não descreva
// especificação técnica de sensores ou gateways fora do datasheet oficial
// vigente; não prometa resultado, economia ou eficácia garantida.

export const servicos = [
  {
    slug: 'analise-de-vibracao',
    titulo: 'Análise de Vibração',
    tituloCurto: 'Análise de Vibração',
    selo: 'Representante Dynamox em Mato Grosso',
    icone: 'onda',
    resumo:
      'Monitoramento contínuo de vibração em máquinas rotativas com sensores Dynamox, identificando desgaste e falhas em estágio inicial.',
    metaDescription:
      'Análise de vibração e monitoramento contínuo de máquinas rotativas em Mato Grosso. Representante Dynamox. Diagnóstico de rolamentos, desalinhamento, folga e desbalanceamento.',
    heroLead:
      'Máquinas rotativas avisam antes de parar. A vibração é o canal por onde esse aviso chega — e a leitura contínua dela transforma uma quebra imprevista em uma intervenção programada.',
    heroImagem: {
      src: 'grafico-analise-vibracao-cascata-3d.webp',
      alt: 'Gráfico em cascata 3D mostrando a evolução do espectro de vibração de uma máquina ao longo do tempo',
    },
    problema: {
      titulo: 'Por que a falha só aparece quando já é tarde',
      texto:
        'Um rolamento não passa de saudável para destruído em um dia. Ele percorre estágios — microtrincas na pista, descascamento, folga, aquecimento — e só no último deles o ruído e a temperatura ficam perceptíveis para o operador. Quando a equipe escuta o problema, a janela para agir de forma planejada já passou.',
      itens: [
        'Inspeção por ronda periódica só enxerga o ativo no dia da medição — o que acontece entre uma visita e outra fica invisível.',
        'Parada corretiva em ativo crítico arrasta consigo a linha inteira, não apenas a máquina.',
        'Compra emergencial de peça e mão de obra fora de hora custa muito acima da mesma intervenção programada.',
      ],
    },
    comoFunciona: {
      titulo: 'Como conduzimos o monitoramento',
      etapas: [
        {
          titulo: 'Mapeamento dos ativos',
          texto:
            'Levantamos as máquinas rotativas da planta, a criticidade de cada uma para o processo e os pontos de medição adequados por tipo de equipamento.',
        },
        {
          titulo: 'Instalação dos sensores',
          texto:
            'Aplicamos sensores triaxiais sem fio de vibração e temperatura nos pontos definidos. A comunicação com a plataforma é feita por gateway, sem necessidade de cabeamento dedicado até cada ponto.',
        },
        {
          titulo: 'Parametrização de alarmes',
          texto:
            'Definimos os níveis de alerta por ativo, considerando norma aplicável, rotação, tipo de máquina e histórico. O alarme existe para chamar o analista no momento certo, não para gerar ruído.',
        },
        {
          titulo: 'Análise e laudo',
          texto:
            'Nossa equipe interpreta espectro, forma de onda, envelope e tendência. O resultado é um laudo com o diagnóstico, o grau de severidade e a recomendação de intervenção.',
        },
        {
          titulo: 'Acompanhamento da evolução',
          texto:
            'Com o defeito identificado, seguimos a curva de evolução para apoiar a decisão de quando parar — dentro da janela de manutenção que faz sentido para a operação.',
        },
      ],
    },
    deteccao: {
      titulo: 'O que a análise identifica',
      itens: [
        { titulo: 'Defeitos em rolamentos', texto: 'Falhas em pista interna, pista externa, elementos rolantes e gaiola, acompanhadas pelas frequências características (BPFI, BPFO, BSF, FTF).' },
        { titulo: 'Desbalanceamento', texto: 'Vibração predominante em 1× a rotação, na direção radial, típica de massa desigual no rotor.' },
        { titulo: 'Desalinhamento', texto: 'Componentes em 1× e 2× a rotação com presença axial relevante, indicando erro de acoplamento paralelo ou angular.' },
        { titulo: 'Folga mecânica', texto: 'Série extensa de harmônicos da rotação, associada a fixação frouxa, base deteriorada ou desgaste de encaixe.' },
        { titulo: 'Problemas em engrenamento', texto: 'Frequência de engrenamento e bandas laterais em redutores e caixas de transmissão.' },
        { titulo: 'Cavitação e recirculação', texto: 'Ruído de banda larga em bombas, característico de problema hidráulico e não mecânico.' },
        { titulo: 'Origem elétrica', texto: 'Componentes ligados à frequência da rede e à passagem de ranhuras em motores, que direcionam a investigação para o ensaio elétrico.' },
      ],
    },
    galeria: [
      {
        src: 'print-airvision-espectro-fft.png',
        alt: 'Espectro FFT triaxial com eixos axial, radial e horizontal, mostrando um pico dominante próximo a 829 Hz',
        legenda: 'Espectro triaxial na plataforma: o pico dominante e suas bandas laterais direcionam o diagnóstico.',
      },
      {
        src: 'vibracao-dominio-frequencia-harmonicos.webp',
        alt: 'Comparação entre sinal de vibração no domínio do tempo e seu espectro no domínio da frequência com harmônicos',
        legenda: 'Do domínio do tempo para o domínio da frequência: cada defeito tem assinatura própria.',
      },
      {
        src: 'diagrama-acelerometro-piezoeletrico-componentes.webp',
        alt: 'Diagrama em corte dos componentes internos de um acelerômetro piezoelétrico',
        legenda: 'Acelerômetro piezoelétrico: o elemento que converte movimento em sinal analisável.',
      },
      {
        src: 'logo-soutech-fundo-transparente.png',
        alt: 'Sensor sem fio Dynamox com indicação dos eixos X, Y e Z de medição',
        legenda: 'Sensor triaxial: orientação correta dos eixos na instalação é parte do diagnóstico.',
      },
      {
        src: 'rolamentos-industriais.webp',
        alt: 'Rolamentos industriais de esferas e de rolos sobre superfície metálica',
        legenda: 'O rolamento é o componente onde a falha costuma começar e onde ela é mais detectável.',
      },
      {
        src: 'dynamox-dynagateway-produtos-dashboard.webp',
        alt: 'Conjunto de sensores e gateway Dynamox ao lado da tela da plataforma de monitoramento',
        legenda: 'Sensores, gateway e plataforma: a cadeia que leva o dado do ativo até o analista.',
      },
    ],
    entregaveis: [
      'Plano de pontos de medição por ativo, com justificativa técnica',
      'Sensores instalados e comunicando com a plataforma',
      'Alarmes parametrizados por criticidade e tipo de máquina',
      'Laudo de análise com diagnóstico, severidade e recomendação',
      'Acompanhamento da evolução do defeito até a intervenção',
    ],
    aplicacoes: [
      'Motores elétricos, bombas e ventiladores industriais',
      'Redutores e caixas de transmissão',
      'Transportadores de correia',
      'Exaustores e sopradores de unidades de beneficiamento',
      'Secadores, elevadores e transportadores de grãos no agronegócio',
    ],
    observacao:
      'SOUTECH é Representante Dynamox em Mato Grosso. As informações sobre sensores e plataforma seguem o material oficial vigente do fabricante.',
  },

  {
    slug: 'balanceamento-dinamico',
    titulo: 'Balanceamento Dinâmico',
    tituloCurto: 'Balanceamento',
    icone: 'rotor',
    resumo:
      'Correção de desbalanceamento em rotores e equipamentos rotativos, reduzindo vibração excessiva, ruído e desgaste prematuro de rolamentos.',
    metaDescription:
      'Balanceamento dinâmico de rotores no campo em Mato Grosso. Correção de desbalanceamento em ventiladores, exaustores, bombas e sopradores industriais.',
    heroLead:
      'Desbalanceamento é a causa de vibração mais comum em máquinas rotativas — e também a mais direta de corrigir, quando o diagnóstico está certo.',
    heroImagem: {
      src: 'motores-eletricos-bombas-industria.webp',
      alt: 'Conjunto de motores elétricos e bombas centrífugas instalados em ambiente industrial',
    },
    problema: {
      titulo: 'O custo silencioso de rodar desbalanceado',
      texto:
        'Uma massa desigual no rotor gera força centrífuga que cresce com o quadrado da rotação. Essa força não desaparece: ela é absorvida pelos rolamentos, pelo eixo, pelo acoplamento e pela estrutura de fixação, encurtando a vida de cada um desses componentes.',
      itens: [
        'Rolamentos que voltam a falhar pouco tempo depois da troca — sinal clássico de causa raiz não tratada.',
        'Vibração e ruído acima do aceitável, com impacto em ergonomia e em equipamentos vizinhos.',
        'Trincas em bases, suportes e solda de estrutura ao longo do tempo.',
        'Consumo de energia acima do necessário para o mesmo trabalho útil.',
      ],
    },
    comoFunciona: {
      titulo: 'Como executamos',
      etapas: [
        {
          titulo: 'Diagnóstico antes da correção',
          texto:
            'Confirmamos por análise de vibração que o quadro é de desbalanceamento — e não desalinhamento, folga ou defeito de rolamento. Balancear uma máquina com folga mecânica não resolve o problema e mascara a causa.',
        },
        {
          titulo: 'Medição inicial',
          texto:
            'Registramos amplitude e fase da vibração na condição de operação, estabelecendo a referência contra a qual o resultado será comparado.',
        },
        {
          titulo: 'Massa de teste',
          texto:
            'Aplicamos massa conhecida em posição definida para levantar a resposta do rotor e calcular a correção necessária em módulo e ângulo.',
        },
        {
          titulo: 'Correção',
          texto:
            'Executamos a correção por adição ou remoção de massa, em um ou dois planos conforme a geometria do rotor.',
        },
        {
          titulo: 'Verificação e relatório',
          texto:
            'Medimos novamente e comparamos o resultado com a referência normativa aplicável ao tipo e à rotação da máquina. O relatório registra antes, depois e as massas aplicadas.',
        },
      ],
    },
    deteccao: {
      titulo: 'Quando o balanceamento é indicado',
      itens: [
        { titulo: 'Vibração dominante em 1×', texto: 'Componente predominante na frequência de rotação, na direção radial, com fase estável.' },
        { titulo: 'Após manutenção no rotor', texto: 'Troca de pás, recuperação de solda, limpeza pesada ou substituição de componentes altera a distribuição de massa.' },
        { titulo: 'Acúmulo de material', texto: 'Incrustação irregular em ventiladores e exaustores de processo, comum em ambientes com particulado.' },
        { titulo: 'Desgaste assimétrico', texto: 'Erosão desigual das pás por abrasão, típica em exaustão de linhas com pó.' },
      ],
    },
    galeria: [
      {
        src: 'tecnico-inspecao-equipamento-rotativo.jpg',
        alt: 'Técnico realizando medição em equipamento rotativo industrial com instrumento portátil',
        legenda: 'Balanceamento no campo, com a máquina na condição real de operação.',
      },
    ],
    entregaveis: [
      'Diagnóstico prévio confirmando a causa da vibração',
      'Balanceamento em um ou dois planos, executado no local',
      'Registro de amplitude e fase antes e depois da correção',
      'Relatório com as massas aplicadas e posição angular',
      'Comparação do resultado com a referência normativa aplicável',
    ],
    aplicacoes: [
      'Ventiladores e exaustores industriais',
      'Rotores de bombas centrífugas',
      'Sopradores e turbo ventiladores',
      'Polias, volantes e acoplamentos',
      'Ventiladores de secadores e aeradores do agronegócio',
    ],
  },

  {
    slug: 'mca-em-motores',
    titulo: 'MCA em Motores',
    tituloCurto: 'MCA em Motores',
    icone: 'motor',
    resumo:
      'Análise de circuito do motor para diagnóstico de enrolamentos, isolamento e rotor, permitindo identificar falhas elétricas antes que evoluam para parada.',
    metaDescription:
      'MCA — Análise de Circuito de Motores em Mato Grosso. Ensaio elétrico de enrolamentos, isolamento e rotor para detectar falhas antes da queima do motor.',
    heroLead:
      'Nem toda falha de motor aparece na vibração. Curto entre espiras, degradação de isolamento e barra de rotor trincada são problemas elétricos — e exigem ensaio elétrico para serem vistos a tempo.',
    heroImagem: {
      src: 'painel-eletrico-automacao.webp',
      alt: 'Painel elétrico industrial aberto, com disjuntores, contatores e cabeamento organizado',
    },
    problema: {
      titulo: 'A falha elétrica que a ronda não vê',
      texto:
        'Um motor pode operar com corrente aparentemente normal enquanto o isolamento entre espiras já está comprometido. A degradação avança em silêncio até o ponto em que o curto se estabelece — e aí a perda não é mais de um enrolamento, é do motor e da produção que dependia dele.',
      itens: [
        'A medição de resistência de isolamento sozinha não enxerga falha entre espiras da mesma bobina.',
        'Motor rebobinado sem ensaio de recebimento pode voltar à planta já com problema.',
        'Barra de rotor trincada reduz conjugado e aquece o motor sem gerar sintoma óbvio no início.',
      ],
    },
    comoFunciona: {
      titulo: 'O que o ensaio compreende',
      etapas: [
        {
          titulo: 'Ensaio estático, com o motor parado',
          texto:
            'Realizado com o equipamento desenergizado e bloqueado, avaliando o circuito desde o painel até o enrolamento.',
        },
        {
          titulo: 'Resistência e desequilíbrio entre fases',
          texto:
            'Comparação da resistência ôhmica das três fases. Desequilíbrio aponta conexão deficiente, cabo danificado ou problema no próprio enrolamento.',
        },
        {
          titulo: 'Impedância, indutância e ângulo de fase',
          texto:
            'Parâmetros sensíveis a curto entre espiras em estágio inicial, antes que a falha se manifeste na operação.',
        },
        {
          titulo: 'Isolamento e índices de polarização',
          texto:
            'Avaliação do isolamento contra a carcaça, com os índices que indicam envelhecimento, umidade ou contaminação do sistema isolante.',
        },
        {
          titulo: 'Avaliação do rotor',
          texto:
            'Ensaio voltado a barras trincadas e a problemas de excentricidade no conjunto rotor–estator.',
        },
        {
          titulo: 'Laudo e histórico',
          texto:
            'Emitimos laudo com os valores medidos, a condição do motor e a recomendação. Repetindo o ensaio periodicamente, o histórico revela tendência.',
        },
      ],
    },
    deteccao: {
      titulo: 'O que o MCA identifica',
      itens: [
        { titulo: 'Curto entre espiras', texto: 'Falha incipiente no isolamento interno da bobina, antes que evolua para curto franco.' },
        { titulo: 'Desequilíbrio de enrolamento', texto: 'Diferença entre fases por conexão, emenda ou rebobinamento inadequado.' },
        { titulo: 'Degradação de isolamento', texto: 'Envelhecimento térmico, umidade, contaminação por poeira ou agente químico.' },
        { titulo: 'Barras de rotor trincadas', texto: 'Perda de conjugado e aquecimento anormal em motores de gaiola.' },
        { titulo: 'Excentricidade', texto: 'Desvio no entreferro entre rotor e estator, com efeito sobre esforço e aquecimento.' },
        { titulo: 'Problemas no circuito de alimentação', texto: 'Conexão frouxa, cabo deteriorado e contato deficiente entre painel e motor.' },
      ],
    },
    galeria: [
      {
        src: 'motores-eletricos-bombas-industria.webp',
        alt: 'Motores elétricos industriais instalados em conjunto com bombas',
        legenda: 'O ensaio cobre o circuito completo: do painel ao enrolamento.',
      },
    ],
    entregaveis: [
      'Ensaio estático completo do circuito do motor',
      'Laudo com valores medidos e comparação entre fases',
      'Classificação da condição do motor e recomendação',
      'Ensaio de recebimento para motores novos ou rebobinados',
      'Histórico por ativo para acompanhamento de tendência',
    ],
    aplicacoes: [
      'Motores de indução de baixa e média tensão',
      'Motores acionados por inversor de frequência',
      'Motores críticos de processo contínuo',
      'Ensaio de recebimento pós-rebobinamento',
      'Motores de irrigação, secagem e transporte no agronegócio',
    ],
  },

  {
    slug: 'qualidade-de-energia',
    titulo: 'Análise de Qualidade de Energia',
    tituloCurto: 'Qualidade de Energia',
    icone: 'raio',
    resumo:
      'Diagnóstico de harmônicas, desequilíbrios e distúrbios na rede elétrica que afetam o desempenho e a vida útil de equipamentos.',
    metaDescription:
      'Análise de qualidade de energia elétrica industrial em Mato Grosso. Medição de harmônicas, desequilíbrio, afundamentos e fator de potência com laudo técnico.',
    heroLead:
      'Quando motores aquecem sem sobrecarga, inversores desarmam sem motivo aparente e equipamentos eletrônicos falham de forma intermitente, a causa costuma estar na rede — não no equipamento.',
    heroImagem: {
      src: 'painel-eletrico-dashboard-economia.jpg',
      alt: 'Painel elétrico industrial ao lado de dashboard com indicadores de consumo de energia',
    },
    problema: {
      titulo: 'A rede como causa raiz que ninguém investiga',
      texto:
        'Distúrbios de energia agem sobre todos os equipamentos ao mesmo tempo, mas cada um manifesta o efeito de um jeito. Sem medição, a equipe troca componentes, refaz instalações e convive com falhas recorrentes sem nunca chegar à origem.',
      itens: [
        'Harmônicas geradas por cargas não lineares aquecem motores, transformadores e condutores do neutro.',
        'Desequilíbrio entre fases reduz conjugado e eleva a temperatura do motor de forma desproporcional.',
        'Afundamentos e transitórios desarmam inversores, CLPs e fontes de comando.',
        'Fator de potência e demanda mal geridos aparecem direto na fatura.',
      ],
    },
    comoFunciona: {
      titulo: 'Como conduzimos a medição',
      etapas: [
        {
          titulo: 'Definição dos pontos',
          texto:
            'Escolhemos os pontos de medição a partir do diagrama unifilar e do problema relatado — entrada de energia, quadros de distribuição e cargas suspeitas.',
        },
        {
          titulo: 'Campanha de medição',
          texto:
            'Instalamos analisador de qualidade de energia por um período que cubra o ciclo real da operação, incluindo picos, partidas e turnos distintos.',
        },
        {
          titulo: 'Análise dos parâmetros',
          texto:
            'Avaliamos tensão, corrente, distorção harmônica, desequilíbrio, fator de potência, flutuação, afundamentos e elevações registradas.',
        },
        {
          titulo: 'Correlação com as falhas',
          texto:
            'Cruzamos os eventos registrados com o histórico de falhas da planta para estabelecer relação de causa e efeito.',
        },
        {
          titulo: 'Laudo com plano de ação',
          texto:
            'Entregamos laudo com os desvios encontrados, o impacto sobre os ativos e as medidas corretivas recomendadas, priorizadas por criticidade.',
        },
      ],
    },
    deteccao: {
      titulo: 'O que a análise revela',
      itens: [
        { titulo: 'Distorção harmônica', texto: 'Conteúdo harmônico de tensão e corrente, com identificação das ordens predominantes e das cargas que as originam.' },
        { titulo: 'Desequilíbrio de tensão', texto: 'Diferença entre fases que reduz desempenho e eleva o aquecimento de motores trifásicos.' },
        { titulo: 'Afundamentos e elevações', texto: 'Eventos de curta duração que provocam desarme de inversores, CLPs e sistemas de comando.' },
        { titulo: 'Fator de potência', texto: 'Comportamento ao longo do ciclo de operação e adequação do sistema de correção existente.' },
        { titulo: 'Sobrecarga de neutro', texto: 'Corrente de neutro elevada por harmônicas de ordem tripla em instalações com muitas cargas monofásicas não lineares.' },
        { titulo: 'Perfil de demanda', texto: 'Curva de carga e picos que impactam contrato e dimensionamento da instalação.' },
      ],
    },
    galeria: [
      {
        src: 'economia-energia-inversores-frequencia.webp',
        alt: 'Inversores de frequência instalados em painel industrial junto a indicadores de consumo',
        legenda: 'Inversores e cargas não lineares são fonte frequente de conteúdo harmônico.',
      },
      {
        src: 'diagrama-arquitetura-scada-power-operation.png',
        alt: 'Diagrama de arquitetura de sistema SCADA para supervisão de energia elétrica',
        legenda: 'Medição pontual ou supervisão contínua, conforme a criticidade da instalação.',
      },
    ],
    entregaveis: [
      'Campanha de medição cobrindo o ciclo real de operação',
      'Laudo com os parâmetros medidos e os desvios identificados',
      'Correlação entre eventos da rede e falhas registradas na planta',
      'Recomendações técnicas priorizadas por criticidade',
      'Base para dimensionamento de filtros e correção, quando aplicável',
    ],
    aplicacoes: [
      'Entrada de energia e subestações industriais',
      'Quadros de distribuição e centros de controle de motores',
      'Instalações com alta densidade de inversores de frequência',
      'Plantas com falhas eletrônicas intermitentes sem causa definida',
      'Unidades de beneficiamento e armazenagem do agronegócio',
    ],
  },

  {
    slug: 'automacao-industrial',
    titulo: 'Automação Industrial',
    tituloCurto: 'Automação Industrial',
    icone: 'clp',
    resumo:
      'Projetos de automação e integração de processos — CLP, supervisório e integração de sistemas — para aumento de eficiência operacional.',
    metaDescription:
      'Automação industrial em Mato Grosso: programação de CLP, supervisório SCADA, painéis elétricos e integração de sistemas para indústria e agronegócio.',
    heroLead:
      'Processo automatizado não é o que dispensa o operador. É o que entrega ao operador a informação certa, no momento certo, e executa com repetibilidade o que a mão não consegue repetir.',
    heroImagem: {
      src: 'painel-eletrico-automacao.webp',
      alt: 'Painel de automação industrial com CLP, borneiras e cabeamento identificado',
    },
    problema: {
      titulo: 'Onde a operação perde eficiência',
      texto:
        'Boa parte das perdas de uma planta não está no equipamento, e sim na coordenação entre eles: intertravamento feito na base da regra informal, partida manual que depende de quem está no turno, dado de processo que ninguém registra e por isso ninguém analisa.',
      itens: [
        'Comando manual sem intertravamento adequado expõe pessoas e equipamentos.',
        'Ausência de registro impede identificar o que realmente causou a parada.',
        'Setup e receita ajustados na mão variam de turno para turno.',
        'Sistemas de fabricantes diferentes que não conversam entre si.',
      ],
    },
    comoFunciona: {
      titulo: 'Escopo dos projetos',
      etapas: [
        {
          titulo: 'Levantamento e descritivo funcional',
          texto:
            'Mapeamos o processo em campo e formalizamos o descritivo funcional: o que o sistema deve fazer, em que condição e com quais travas de segurança.',
        },
        {
          titulo: 'Projeto elétrico e painéis',
          texto:
            'Elaboramos o projeto elétrico e de comando, com dimensionamento, diagramas e lista de materiais. Montagem de painéis com identificação completa.',
        },
        {
          titulo: 'Programação de CLP',
          texto:
            'Desenvolvemos a lógica de controle, intertravamentos, sequenciamento e tratamento de falhas, com código documentado e estruturado para manutenção futura.',
        },
        {
          titulo: 'Supervisório e IHM',
          texto:
            'Telas de operação objetivas, alarmes com prioridade definida, registro histórico de variáveis e relatórios de produção.',
        },
        {
          titulo: 'Integração e comunicação',
          texto:
            'Integração entre CLPs, inversores, instrumentos e sistemas de gestão usando os protocolos industriais adequados a cada equipamento.',
        },
        {
          titulo: 'Comissionamento e treinamento',
          texto:
            'Testes em campo, ajuste fino junto à operação, entrega da documentação as-built e treinamento das equipes de operação e manutenção.',
        },
      ],
    },
    deteccao: {
      titulo: 'O que entregamos em automação',
      itens: [
        { titulo: 'Retrofit de máquinas', texto: 'Modernização de comando em equipamentos mecanicamente bons, porém com controle obsoleto ou sem peça de reposição.' },
        { titulo: 'Novos sistemas de controle', texto: 'Projeto completo de automação para linhas e processos, do descritivo funcional ao comissionamento.' },
        { titulo: 'Supervisório SCADA', texto: 'Supervisão centralizada com histórico, alarmes priorizados e relatórios de processo.' },
        { titulo: 'Telemetria e monitoramento remoto', texto: 'Aquisição e transmissão de dados de ativos distribuídos para acompanhamento a distância.' },
        { titulo: 'Integração de sistemas', texto: 'Comunicação entre equipamentos de fabricantes distintos e entre chão de fábrica e gestão.' },
        { titulo: 'Documentação técnica', texto: 'Diagramas as-built, descritivo funcional e código comentado — o que permite manter o sistema depois da entrega.' },
      ],
    },
    galeria: [
      {
        src: 'diagrama-arquitetura-scada-power-operation.png',
        alt: 'Diagrama de arquitetura SCADA com camadas de campo, controle e supervisão',
        legenda: 'Arquitetura em camadas: campo, controle e supervisão.',
      },
      {
        src: 'industria-iot-conectividade-fabrica.jpg',
        alt: 'Representação de fábrica conectada com equipamentos industriais integrados em rede',
        legenda: 'Equipamentos conectados transformam operação em dado utilizável.',
      },
      {
        src: 'infografico-industria-4-0-conectividade.png',
        alt: 'Infográfico sobre conectividade e pilares da Indústria 4.0',
        legenda: 'Conectividade é meio, não fim: serve à decisão de manutenção e de processo.',
      },
    ],
    entregaveis: [
      'Descritivo funcional aprovado antes do desenvolvimento',
      'Projeto elétrico, de comando e montagem de painel',
      'Programa de CLP documentado e estruturado',
      'Supervisório com alarmes, histórico e relatórios',
      'Comissionamento assistido e treinamento das equipes',
      'Documentação as-built completa',
    ],
    aplicacoes: [
      'Linhas de processo e utilidades industriais',
      'Retrofit de máquinas com comando obsoleto',
      'Casas de bomba, sistemas de ar comprimido e refrigeração',
      'Unidades de armazenagem, secagem e beneficiamento de grãos',
      'Sistemas de irrigação e transporte no agronegócio',
    ],
  },

  {
    slug: 'manutencao-industrial',
    titulo: 'Manutenção Industrial',
    tituloCurto: 'Manutenção Industrial',
    icone: 'chave',
    resumo:
      'Planejamento e execução de manutenção industrial sob medida para os ativos do cliente, do diagnóstico à intervenção.',
    metaDescription:
      'Manutenção industrial em Mato Grosso: planejamento, execução, inspeção preditiva e intervenção mecânica e elétrica em ativos industriais e do agronegócio.',
    heroLead:
      'Manutenção sob medida começa pelo ativo, não pelo catálogo de serviços. O que a sua planta precisa depende de como ela opera, do que já falhou e do que não pode falhar.',
    heroImagem: {
      src: 'manutencao-industrial-compressor-tubulacao.jpg',
      alt: 'Compressor industrial e tubulação em sala de máquinas durante manutenção',
    },
    problema: {
      titulo: 'Quando a manutenção vira apagar incêndio',
      texto:
        'Equipe experiente, ferramenta disponível e ainda assim a rotina é reativa. O sintoma é sempre o mesmo: o dia é definido pelo que quebrou, não pelo que estava planejado — e o planejado nunca chega a acontecer.',
      itens: [
        'Não há critério claro de prioridade entre os ativos.',
        'A intervenção corrige o efeito e deixa a causa raiz intacta, então a falha volta.',
        'Falta histórico confiável para sustentar decisão de trocar, recuperar ou manter.',
        'Peça crítica sem estoque definido transforma parada curta em parada longa.',
      ],
    },
    comoFunciona: {
      titulo: 'Como atuamos',
      etapas: [
        {
          titulo: 'Diagnóstico da planta',
          texto:
            'Levantamento dos ativos, do histórico de falhas e das práticas atuais de manutenção. É daqui que sai a priorização.',
        },
        {
          titulo: 'Inspeção técnica',
          texto:
            'Inspeção com apoio das técnicas preditivas adequadas a cada ativo — vibração, termografia, ensaio elétrico e análise de lubrificação.',
        },
        {
          titulo: 'Execução da intervenção',
          texto:
            'Serviços mecânicos e elétricos: alinhamento de eixos, substituição de rolamentos, correção de fixação e base, ajuste de acoplamento e recuperação de conjuntos.',
        },
        {
          titulo: 'Análise de causa raiz',
          texto:
            'Após a falha, investigamos por que ela ocorreu. Sem isso, a mesma falha volta no mesmo ativo dentro de poucos meses.',
        },
        {
          titulo: 'Retorno ao plano',
          texto:
            'O que foi aprendido na intervenção realimenta o plano de manutenção, ajustando periodicidade, técnica e ponto de inspeção.',
        },
      ],
    },
    deteccao: {
      titulo: 'Frentes de atuação',
      itens: [
        { titulo: 'Manutenção mecânica', texto: 'Alinhamento a laser, substituição de rolamentos, correção de fixação, base e acoplamento.' },
        { titulo: 'Manutenção elétrica', texto: 'Intervenção em painéis, comando, acionamentos e circuitos de força.' },
        { titulo: 'Inspeção preditiva', texto: 'Rotas de inspeção com vibração, termografia, ultrassom e ensaio elétrico conforme o ativo.' },
        { titulo: 'Termografia', texto: 'Identificação de pontos quentes em painéis, conexões e componentes mecânicos, sem desligar a instalação.' },
        { titulo: 'Análise de falhas', texto: 'Investigação estruturada de causa raiz com registro e recomendação.' },
        { titulo: 'Lubrificação', texto: 'Adequação de lubrificante, periodicidade e método — incluindo sistemas automáticos.' },
      ],
    },
    galeria: [
      {
        src: 'termografia-inspecao-compressor.jpg',
        alt: 'Imagem termográfica de compressor industrial destacando regiões de temperatura elevada',
        legenda: 'Termografia: ponto quente identificado com a instalação em operação.',
      },
      {
        src: 'ilustracao-seguranca-trabalho-industrial.png',
        alt: 'Ilustração sobre práticas de segurança do trabalho em ambiente industrial',
        legenda: 'Bloqueio, etiquetagem e procedimento seguro fazem parte do serviço.',
      },
    ],
    entregaveis: [
      'Diagnóstico da planta com priorização por criticidade',
      'Rotas de inspeção definidas por ativo e por técnica',
      'Execução de serviços mecânicos e elétricos',
      'Relatório de intervenção com registro fotográfico',
      'Análise de causa raiz das falhas relevantes',
    ],
    aplicacoes: [
      'Plantas industriais de processo contínuo e batelada',
      'Sistemas de ar comprimido, bombeamento e refrigeração',
      'Conjuntos motor–redutor–transportador',
      'Unidades de armazenagem e beneficiamento de grãos',
      'Frotas de ativos rotativos distribuídos em campo',
    ],
    subModulo: 'lubrificacao-automatica',
  },

  {
    slug: 'lubrificacao-automatica',
    titulo: 'Lubrificação Automática',
    tituloCurto: 'Lubrificação Automática',
    parente: 'manutencao-industrial',
    icone: 'gota',
    resumo:
      'Implantação de sistemas de lubrificação automática, reduzindo falhas associadas a lubrificação inadequada ou irregular.',
    metaDescription:
      'Sistemas de lubrificação automática em Mato Grosso. Projeto e implantação de lubrificação centralizada e progressiva para ativos industriais e do agronegócio.',
    heroLead:
      'A maior parte das falhas de rolamento tem origem na lubrificação — excesso, falta, lubrificante errado ou contaminação. Automatizar é tirar essa variável das mãos da rotina.',
    heroImagem: {
      src: 'sistema-lubrificacao-automatica-instalado.jpg',
      alt: 'Sistema de lubrificação automática instalado em equipamento industrial com linhas de distribuição',
    },
    problema: {
      titulo: 'Por que a lubrificação manual falha',
      texto:
        'Lubrificar manualmente depende de acesso, de tempo e de critério. Em ponto de difícil acesso ou em máquina que não pode parar, a lubrificação é adiada. Quando enfim acontece, costuma vir em excesso — que pressuriza a vedação e aquece o rolamento tanto quanto a falta.',
      itens: [
        'Ponto de difícil acesso é ponto que fica sem lubrificação.',
        'Excesso de graxa eleva a temperatura e danifica a vedação.',
        'Intervalo irregular deixa o rolamento operar com filme insuficiente.',
        'Bico e graxeira abertos em ambiente com poeira introduzem contaminação.',
      ],
    },
    comoFunciona: {
      titulo: 'Como implantamos',
      etapas: [
        {
          titulo: 'Levantamento dos pontos',
          texto:
            'Mapeamos os pontos de lubrificação, o tipo de rolamento, a rotação, a carga e a condição ambiental de cada um.',
        },
        {
          titulo: 'Cálculo de dose e frequência',
          texto:
            'Definimos a quantidade e o intervalo por ponto a partir da geometria do rolamento e da condição de operação — não por estimativa.',
        },
        {
          titulo: 'Escolha do lubrificante',
          texto:
            'Seleção da graxa ou óleo adequado à temperatura, à carga e ao ambiente, com atenção a compatibilidade em caso de troca.',
        },
        {
          titulo: 'Projeto do sistema',
          texto:
            'Dimensionamento do conjunto: lubrificador de ponto único ou sistema centralizado progressivo, com bomba, distribuidores e linhas.',
        },
        {
          titulo: 'Instalação e partida',
          texto:
            'Montagem, purga das linhas, ajuste dos parâmetros e verificação de vazão em cada ponto de entrega.',
        },
        {
          titulo: 'Verificação por ultrassom',
          texto:
            'Onde aplicável, usamos ultrassom para confirmar o momento e a quantidade corretos, evitando tanto a falta quanto o excesso.',
        },
      ],
    },
    deteccao: {
      titulo: 'Soluções aplicadas',
      itens: [
        { titulo: 'Lubrificador de ponto único', texto: 'Dispositivo autônomo instalado diretamente na graxeira, com dose contínua e controlada.' },
        { titulo: 'Sistema centralizado progressivo', texto: 'Bomba única alimentando múltiplos pontos por distribuidores progressivos, com verificação de entrega.' },
        { titulo: 'Lubrificação de correntes e guias', texto: 'Aplicação dosada em transportadores de corrente e em guias lineares.' },
        { titulo: 'Verificação por ultrassom', texto: 'Instrumento que indica o ponto de lubrificação adequado pelo nível de atrito captado.' },
        { titulo: 'Plano de lubrificação', texto: 'Documentação de ponto, lubrificante, dose e periodicidade, integrada ao plano de manutenção.' },
      ],
    },
    galeria: [
      {
        src: 'diagrama-sistema-lubrificacao-skf-lincoln.jpg',
        alt: 'Diagrama de sistema de lubrificação centralizada com bomba, distribuidores progressivos e linhas',
        legenda: 'Sistema centralizado progressivo: uma bomba, múltiplos pontos com dose verificada.',
      },
      {
        src: 'bomba-lubrificacao-automatica-produto.webp',
        alt: 'Bomba de lubrificação automática com reservatório de graxa',
        legenda: 'Unidade de bombeamento com reservatório e controle de ciclo.',
      },
      {
        src: 'Lubrificacao-Automatica.jpg',
        alt: 'Componentes de sistema de lubrificação automática industrial',
        legenda: 'Conjunto de componentes de um sistema de lubrificação automática.',
      },
      {
        src: 'verificador-lubrificacao-ultrassom-skf-tlgu10.webp',
        alt: 'Instrumento portátil de verificação de lubrificação por ultrassom',
        legenda: 'Ultrassom para confirmar o momento e a dose corretos de lubrificação.',
      },
    ],
    entregaveis: [
      'Mapeamento completo dos pontos de lubrificação',
      'Cálculo de dose e frequência por ponto',
      'Projeto e dimensionamento do sistema',
      'Instalação, purga e ajuste de parâmetros',
      'Plano de lubrificação documentado por ativo',
    ],
    aplicacoes: [
      'Rolamentos de motores, bombas e ventiladores',
      'Transportadores de correia e de corrente',
      'Redutores e mancais de difícil acesso',
      'Equipamentos em ambiente com alta concentração de poeira',
      'Elevadores, secadores e transportadores de grãos',
    ],
  },

  {
    slug: 'planos-de-manutencao',
    titulo: 'Planos de Manutenção Inteligentes',
    tituloCurto: 'Planos de Manutenção',
    icone: 'plano',
    resumo:
      'Estratégias de manutenção preditiva e preventiva priorizadas por criticidade do ativo, combinando os diagnósticos em um plano único.',
    metaDescription:
      'Planos de manutenção preditiva e preventiva em Mato Grosso, priorizados por criticidade do ativo e integrando vibração, MCA, energia e lubrificação.',
    heroLead:
      'Diagnóstico isolado gera relatório. Diagnóstico organizado por criticidade gera decisão — o que inspecionar, com que técnica, em que intervalo e por quê.',
    heroImagem: {
      src: 'ilustracao-plano-manutencao-preditiva.png',
      alt: 'Ilustração representando o planejamento de manutenção preditiva de ativos industriais',
    },
    problema: {
      titulo: 'Plano genérico não sobrevive à rotina',
      texto:
        'Planos copiados de manual tratam todos os ativos do mesmo jeito: mesma periodicidade, mesma técnica, mesma prioridade. O resultado é previsível — a equipe gasta tempo em ativo que não precisava e chega atrasada no que importava.',
      itens: [
        'Periodicidade igual para ativo crítico e ativo redundante desperdiça recurso escasso.',
        'Técnica inadequada ao modo de falha não detecta o que deveria detectar.',
        'Plano que não cabe no efetivo disponível é abandonado no segundo mês.',
        'Sem indicador, não há como saber se o plano está funcionando.',
      ],
    },
    comoFunciona: {
      titulo: 'Como construímos o plano',
      etapas: [
        {
          titulo: 'Inventário e classificação de criticidade',
          texto:
            'Cada ativo recebe uma classificação baseada em impacto sobre a produção, sobre a segurança e sobre o meio ambiente, além do custo e do tempo de reposição.',
        },
        {
          titulo: 'Modos de falha por ativo',
          texto:
            'Identificamos como cada ativo falha na prática — e é o modo de falha que define qual técnica preditiva enxerga o problema.',
        },
        {
          titulo: 'Seleção de técnica e intervalo',
          texto:
            'Para cada modo de falha relevante, definimos a técnica (vibração, ensaio elétrico, termografia, ultrassom, análise de energia) e o intervalo adequado ao seu tempo de evolução.',
        },
        {
          titulo: 'Plano executável',
          texto:
            'Consolidamos rotas, carga de trabalho e responsáveis dentro do efetivo real da equipe. Plano que não cabe na rotina não é plano.',
        },
        {
          titulo: 'Indicadores e revisão',
          texto:
            'Acompanhamos indicadores de manutenção e revisamos periodicamente o plano com base no que as falhas reais mostraram.',
        },
      ],
    },
    deteccao: {
      titulo: 'O que compõe o plano',
      itens: [
        { titulo: 'Matriz de criticidade', texto: 'Classificação dos ativos que define onde o recurso de manutenção é aplicado primeiro.' },
        { titulo: 'Estratégia por ativo', texto: 'Definição entre preditiva, preventiva, detectiva ou operar até a falha, conforme faz sentido para cada caso.' },
        { titulo: 'Rotas de inspeção', texto: 'Sequência de pontos, técnica aplicada e periodicidade, organizadas por área.' },
        { titulo: 'Integração dos diagnósticos', texto: 'Vibração, MCA, qualidade de energia, termografia e lubrificação consolidados em uma visão única do ativo.' },
        { titulo: 'Estoque crítico', texto: 'Identificação dos itens cuja falta transforma parada curta em parada longa.' },
        { titulo: 'Indicadores', texto: 'Acompanhamento de disponibilidade, tempo entre falhas e aderência ao plano.' },
      ],
    },
    galeria: [
      {
        src: 'ilustracao-estrategia-negocios-industria.webp',
        alt: 'Ilustração sobre estratégia e planejamento aplicados à operação industrial',
        legenda: 'Prioridade definida por criticidade, não por ordem de chegada.',
      },
      {
        src: 'infografico-nove-pilares-industria-4-0.jpg',
        alt: 'Infográfico com os nove pilares da Indústria 4.0',
        legenda: 'Tecnologia aplicada com propósito: cada pilar serve a uma decisão de manutenção.',
      },
    ],
    entregaveis: [
      'Inventário de ativos com matriz de criticidade',
      'Estratégia de manutenção definida por ativo',
      'Rotas de inspeção com técnica e periodicidade',
      'Lista de itens críticos de estoque',
      'Painel de indicadores e ciclo de revisão do plano',
    ],
    aplicacoes: [
      'Plantas que estão migrando de manutenção reativa para planejada',
      'Operações com equipe reduzida e muitos ativos',
      'Unidades com histórico de paradas não planejadas recorrentes',
      'Agroindústrias com forte sazonalidade de safra',
      'Empresas em estruturação da área de PCM',
    ],
  },
];

export const servicosPorSlug = Object.fromEntries(servicos.map((s) => [s.slug, s]));

/** Serviços que aparecem como cartões na home (o sub-módulo entra dentro do pai). */
export const servicosPrincipais = servicos.filter((s) => !s.parente);
