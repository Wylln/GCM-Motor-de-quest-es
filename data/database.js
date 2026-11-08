// Mega Banco de Dados Consolidado — GCM Santana/AP (Edital 001/2026 - Banca IDCAP)
// 10 Disciplinas, Questões Curadas Aprofundadas, Flashcards SM-2 e Gerador Infinito de Alta Complexidade

const database = {
  "versao": "2.0.0-IDCAP-GCM-SANTANA-EXPANDED",
  "concurso": {
    "orgao": "Prefeitura Municipal de Santana/AP",
    "cargo": "Guarda Civil Municipal (Concurso Público nº 001/2026)",
    "banca": "IDCAP (Instituto de Desenvolvimento e Capacitação)",
    "totalQuestoesProva": 50,
    "regime": "Estatutário (LC nº 81/2026 e LC nº 82/2026)"
  },
  "disciplinas": [
    {
      "id": "disc_port",
      "nome": "1. Língua Portuguesa",
      "icone": "📘",
      "peso": 1,
      "questoesNaProva": 10,
      "cor": "#38bdf8",
      "pastaMaterial": "01_Lingua_Portuguesa"
    },
    {
      "id": "disc_mat_rlm",
      "nome": "2. Matemática e Raciocínio Lógico",
      "icone": "🔢",
      "peso": 1,
      "questoesNaProva": 5,
      "cor": "#60a5fa",
      "pastaMaterial": "02_Matematica_e_Raciocinio_Logico"
    },
    {
      "id": "disc_hist",
      "nome": "3. História do Amapá e de Santana",
      "icone": "🏛️",
      "peso": 1,
      "questoesNaProva": 5,
      "cor": "#f59e0b",
      "pastaMaterial": "03_Historia_do_Amapa_e_Santana"
    },
    {
      "id": "disc_geog",
      "nome": "4. Geografia do Amapá e de Santana",
      "icone": "🗺️",
      "peso": 1,
      "questoesNaProva": 5,
      "cor": "#10b981",
      "pastaMaterial": "04_Geografia_do_Amapa_e_Santana"
    },
    {
      "id": "disc_gcm_leg",
      "nome": "5. Legislação da Guarda Civil Municipal",
      "icone": "🛡️",
      "peso": 2,
      "questoesNaProva": 8,
      "cor": "#06b6d4",
      "pastaMaterial": "05_Legislacao_da_Guarda_Civil_Municipal"
    },
    {
      "id": "disc_leg_esp",
      "nome": "6. Legislação Especial",
      "icone": "⚖️",
      "peso": 2,
      "questoesNaProva": 5,
      "cor": "#a855f7",
      "pastaMaterial": "06_Legislacao_Especial"
    },
    {
      "id": "disc_const",
      "nome": "7. Direito Constitucional",
      "icone": "📜",
      "peso": 1,
      "questoesNaProva": 4,
      "cor": "#ec4899",
      "pastaMaterial": "07_Direito_Constitucional"
    },
    {
      "id": "disc_adm",
      "nome": "8. Direito Administrativo",
      "icone": "🏢",
      "peso": 1,
      "questoesNaProva": 3,
      "cor": "#f97316",
      "pastaMaterial": "08_Direito_Administrativo"
    },
    {
      "id": "disc_penal",
      "nome": "9. Direito Penal",
      "icone": "🚨",
      "peso": 2,
      "questoesNaProva": 3,
      "cor": "#ef4444",
      "pastaMaterial": "09_Direito_Penal"
    },
    {
      "id": "disc_dh",
      "nome": "10. Direitos Humanos",
      "icone": "🤝",
      "peso": 1,
      "questoesNaProva": 2,
      "cor": "#14b8a6",
      "pastaMaterial": "10_Direitos_Humanos"
    }
  ],
  "questoes": [
    {
      "id": "q_penal_01",
      "disciplinaId": "disc_penal",
      "dificuldade": "Média/Difícil",
      "origem": "Banca IDCAP — Crimes Praticados por Funcionário Público (Art. 316 vs Art. 317)",
      "enunciado": "O Guarda Civil Municipal Paulo, em fiscalização no Porto de Santana, aborda um caminhoneiro que transportava mercadorias com documentação em ordem. Paulo, valendo-se da autoridade de seu cargo, EXIGE do motorista o pagamento imediato de R$ 500,00 sob a ameaça velada de reter a carga indevidamente. O motorista recusa o pagamento e aciona a Corregedoria. Diante dos fatos narrados e das disposições do Código Penal Brasileiro, a conduta de Paulo consumou o crime de:",
      "alternativas": {
        "A": "Tentativa de corrupção passiva, pois o motorista não chegou a entregar a quantia exigida.",
        "B": "Concussão consumada, pois trata-se de crime formal que se aperfeiçoa com a simples exigência da vantagem indevida, independentemente do recebimento efetivo.",
        "C": "Prevaricação consumada, por se tratar de descumprimento de ato de ofício para satisfazer mero capricho pessoal.",
        "D": "Corrupção passiva consumada, haja vista que solicitar e exigir são núcleos sinônimos para o Direito Penal.",
        "E": "Extorsão mediante sequestro tentada, tendo em vista a restrição temporária de locomoção do veículo."
      },
      "gabarito": "B",
      "explicacaoGeral": "O crime de CONCUSSÃO (art. 316 do Código Penal) caracteriza-se pela conduta de \"EXIGIR, para si ou para outrem, direta ou indiretamente, ainda que fora da função ou antes de assumi-la, mas em razão dela, vantagem indevida\". Trata-se de crime formal (de consumação antecipada), que se consuma no exato instante em que a exigência chega ao conhecimento da vítima, sendo o efetivo recebimento mero exaurimento do delito (Súmula 96 do STJ).",
      "analiseAlternativas": {
        "A": "Incorreta. O núcleo verbal utilizado foi \"exigir\" (concussão) e não \"solicitar\" (corrupção passiva). Ademais, a concussão é crime formal e já estava consumada, não se tratando de tentativa.",
        "B": "Correta! A concussão consuma-se no momento da exigência da vantagem indevida em razão da função pública. O não recebimento do dinheiro é irrelevante para a consumação do delito.",
        "C": "Incorreta. Na prevaricação (art. 319 do CP), o funcionário retarda, deixa de praticar ou pratica ato contra disposição de lei para satisfazer interesse ou sentimento pessoal, inexistindo exigência de vantagem pecuniária indevida.",
        "D": "Incorreta. O Código Penal distingue rigidamente a concussão (art. 316 - exigir, conduta coercitiva) da corrupção passiva (art. 317 - solicitar, receber ou aceitar promessa, conduta bilateral/propositiva). Não são núcleos sinônimos.",
        "E": "Incorreta. Não houve privação de liberdade da vítima como condição ou preço do resgate (art. 159 do CP), cuidando-se de conduta funcional de concussão."
      },
      "referenciaFonte": {
        "diplomaLegal": "Código Penal Brasileiro — Art. 316 (Concussão) e Súmula nº 96 do STJ",
        "secaoMaterial": "Pasta 09_Direito_Penal/02_Crimes_em_Especie_Pessoa_Patrimonio_e_Administracao.pdf (págs. 28–35)",
        "detalhe": "Natureza formal do crime de concussão e distinção técnica frente à corrupção passiva."
      }
    },
    {
      "id": "q_penal_02",
      "disciplinaId": "disc_penal",
      "dificuldade": "Difícil",
      "origem": "Banca IDCAP — Peculato Culposo e Extinção de Punibilidade (Art. 312, §§ 2º e 3º)",
      "enunciado": "O Guarda Municipal Roberto, por manifesta negligência e desatenção às normas de segurança da armaria da corporação em Santana, deixou a porta da reserva técnica destrancada ao final de seu turno de plantão. Aproveitando-se de tal descuido, um terceiro subtraiu um rádio comunicador institucional pertencente ao patrimônio do Município de Santana. Instaurado o inquérito policial, Roberto, voluntariamente e ANTES da sentença irrecorrível, ressarciu integralmente o erário municipal pelo valor do equipamento subtraído. Diante do Código Penal, a conduta de Roberto e a consequência da reparação do dano configuram:",
      "alternativas": {
        "A": "Peculato doloso consumado; a reparação do dano acarreta apenas a diminuição de um terço da pena imposta.",
        "B": "Infração administrativa meramente disciplinar, sendo atípica a conduta no âmbito do Direito Penal.",
        "C": "Peculato culposo; a reparação do dano realizada antes da sentença irrecorrível extingue a punibilidade do agente.",
        "D": "Peculato culposo; a reparação do dano reduz a pena pela metade, persistindo a condenação criminal.",
        "E": "Peculato mediante erro de outrem; a reparação impede apenas a perda do cargo público."
      },
      "gabarito": "C",
      "explicacaoGeral": "Nos termos do art. 312, § 2º do Código Penal, se o funcionário concorre culposamente para o crime de outrem, responde por peculato culposo. Conforme o § 3º do mesmo artigo: \"No caso do parágrafo anterior, a reparação do dano, se precede à sentença irrecorrível, extingue a punibilidade; se lhe é posterior, reduz de metade a pena imposta\". Trata-se de hipótese expressa de extinção de punibilidade prevista em lei penal!",
      "analiseAlternativas": {
        "A": "Incorreta. Roberto agiu com negligência (culpa estrita), configurando peculato culposo, e a reparação antes da sentença irrecorrível extingue a punibilidade, e não mera atenuação.",
        "B": "Incorreta. O peculato culposo é expressamente tipificado no art. 312, § 2º do CP, constituindo ilícito penal.",
        "C": "Correta! Art. 312, § 3º, primeira parte: no peculato culposo, a reparação do dano anterior à sentença irrecorrível acarreta a extinção da punibilidade do agente.",
        "D": "Incorreta. A redução da pena pela metade só ocorre se a reparação do dano for POSTERIOR à sentença irrecorrível.",
        "E": "Incorreta. O tipo de peculato mediante erro de outrem (art. 313) pressupõe que o agente se aproprie de dinheiro recebido no exercício do cargo por erro da vítima."
      },
      "referenciaFonte": {
        "diplomaLegal": "Código Penal Brasileiro — Artigo 312, §§ 2º e 3º (Peculato Culposo)",
        "secaoMaterial": "Pasta 09_Direito_Penal/02_Crimes_em_Especie_Pessoa_Patrimonio_e_Administracao.pdf (págs. 25–28)",
        "detalhe": "Regime jurídico da reparação do dano no peculato culposo e causa extintiva de punibilidade."
      }
    },
    {
      "id": "q_penal_03",
      "disciplinaId": "disc_penal",
      "dificuldade": "Difícil",
      "origem": "Banca IDCAP — Prevaricação vs Condescendência Criminosa (Arts. 319 e 320)",
      "enunciado": "Considere as duas seguintes condutas ocorridas na corporação:\nSituação 1: O Guarda Municipal Marcos, em fiscalização de trânsito na Avenida Santana, deixa de aplicar auto de infração e apreensão de veículo irregular unicamente porque o condutor infrator é seu desafeto político pessoal e Marcos pretende chantageá-lo eleitoralmente em redes sociais, agindo por puro sentimento de vingança individual.\nSituação 2: O Comandante da Guarda, por comiseração e pena (“dó”) de um jovem guarda recém-empossado que cometeu uma infração no serviço, deixa voluntariamente de responsabilizá-lo e também não comunica o fato à autoridade superior competente.\n\nAs condutas narradas nas Situações 1 e 2 tipificam, respectivamente, os crimes de:",
      "alternativas": {
        "A": "Corrupção passiva e Prevaricação.",
        "B": "Prevaricação e Condescendência criminosa.",
        "C": "Concussão e Advocacia administrativa.",
        "D": "Condescendência criminosa e Prevaricação.",
        "E": "Prevaricação e Prevaricação."
      },
      "gabarito": "B",
      "explicacaoGeral": "Situação 1: O Guarda Marcos deixou de praticar ato de ofício para satisfazer sentimento pessoal (vingança/interesse eleitoral) ➔ PREVARICAÇÃO (art. 319 do CP: \"Retardar ou deixar de praticar, indevidamente, ato de ofício, ou praticá-lo contra disposição expressa de lei, para satisfazer interesse ou sentimento pessoal\").\nSituação 2: O Comandante deixou de responsabilizar subordinado por pura piedade/indulgência/pena ➔ CONDESCENDÊNCIA CRIMINOSA (art. 320 do CP: \"Deixar o funcionário, por indulgência, de responsabilizar subordinado que cometeu infração no exercício do cargo ou, quando lhe falte competência, não levar o fato ao conhecimento da autoridade competente\").",
      "analiseAlternativas": {
        "A": "Incorreta. Na Situação 1 não houve solicitação/recebimento de propina (não é corrupção passiva); na Situação 2 a indulgência tipifica condescendência.",
        "B": "Correta! A Situação 1 amolda-se à prevaricação (interesse/sentimento pessoal) e a Situação 2 amolda-se à condescendência criminosa (indulgência).",
        "C": "Incorreta. Concussão exige impor vantagem indevida mediante ameaça e advocacia administrativa é patrocinar interesse privado perante a administração.",
        "D": "Incorreta. Houve inversão dos tipos penais; a indulgência é o elemento anímico da condescendência criminosa.",
        "E": "Incorreta. A conduta do superior por indulgência com subordinado possui tipo penal específico e autônomo (art. 320 do CP)."
      },
      "referenciaFonte": {
        "diplomaLegal": "Código Penal Brasileiro — Artigos 319 (Prevaricação) e 320 (Condescendência Criminosa)",
        "secaoMaterial": "Pasta 09_Direito_Penal/02_Crimes_em_Especie_Pessoa_Patrimonio_e_Administracao.pdf (págs. 36–42)",
        "detalhe": "Diferenciação elementar entre sentimento pessoal na prevaricação e indulgência na condescendência."
      }
    },
    {
      "id": "q_penal_04",
      "disciplinaId": "disc_penal",
      "dificuldade": "Média/Difícil",
      "origem": "Banca IDCAP — Teoria do Crime: Tentativa e Consumação (Art. 14 do CP)",
      "enunciado": "Sobre o iter criminis, o conceito de crime tentado e a sua disciplina legal no Código Penal Brasileiro, assinale a afirmativa CORRETA:",
      "alternativas": {
        "A": "A fase de cogitação e os atos meramente preparatórios são puníveis como tentativa de crime doloso, salvo se houver desistência.",
        "B": "Diz-se o crime tentado quando, iniciada a execução, este não se consuma por circunstâncias alheias à vontade do agente.",
        "C": "A pena da tentativa é obrigatoriamente idêntica à pena do crime consumado, vedada qualquer redução pelo juiz.",
        "D": "Todos os crimes do ordenamento penal brasileiro admitem a modalidade tentada, inclusive os crimes culposos e os unissubsistentes.",
        "E": "A tentativa inidônea (crime impossível) autoriza a condenação do agente com atenuação de um sexto da pena."
      },
      "gabarito": "B",
      "explicacaoGeral": "Nos termos exatos do art. 14, inciso II do Código Penal, diz-se o crime tentado \"quando, iniciada a execução, não se consuma por circunstâncias alheias à vontade do agente\". Salvo disposição em contrário, pune-se a tentativa com a pena correspondente ao crime consumado, diminuída de um a dois terços (art. 14, parágrafo único). Os atos preparatórios, em regra, são impuníveis, e o crime culposo e as contravenções penais não admitem tentativa.",
      "analiseAlternativas": {
        "A": "Incorreta. A cogitação e os atos preparatórios não são puníveis como regra geral (princípio da lesividade e da exteriorização do fato).",
        "B": "Correta! Definição legal e literal do crime tentado esculpida no art. 14, II do Código Penal.",
        "C": "Incorreta. O parágrafo único do art. 14 do CP estabelece a causa geral de diminuição de pena da tentativa: redução de 1 a 2 terços.",
        "D": "Incorreta. Crimes culposos, unissubsistentes (verbais/atos únicos) e contravenções penais não admitem tentativa.",
        "E": "Incorreta. No crime impossível (art. 17 do CP), o fato é ATÍPICO, sendo expressamente vedada a punição da tentativa."
      },
      "referenciaFonte": {
        "diplomaLegal": "Código Penal Brasileiro — Artigo 14 (Tentativa e Consumação) e Parágrafo Único",
        "secaoMaterial": "Pasta 09_Direito_Penal/01_Teoria_do_Crime_Lei_Penal_e_Excludentes_de_Ilicitude.pdf (págs. 14–20)",
        "detalhe": "Estrutura do iter criminis e requisitos legais da tentativa punível."
      }
    },
    {
      "id": "q_penal_05",
      "disciplinaId": "disc_penal",
      "dificuldade": "Difícil",
      "origem": "Banca IDCAP — Desistência Voluntária vs Arrependimento Eficaz vs Arrependimento Posterior",
      "enunciado": "Lucas, com dolo de matar desafeto na praça central de Santana, saca uma pistola e efetua dois disparos que atingem o abdômen da vítima. Enquanto a vítima agoniza no chão e Lucas ainda possui 13 munições intactas em seu carregador, ele se apieda, interrompe o ataque voluntariamente, coloca a vítima em seu carro particular e a transporta velozmente ao Hospital Estadual de Santana, onde o socorro cirúrgico imediato impede a morte da vítima, que sofreu apenas lesões corporais graves. De acordo com o art. 15 do Código Penal, o instituto configurado e a responsabilidade penal de Lucas correspondem a:",
      "alternativas": {
        "A": "Tentativa de homicídio qualificado com redução de pena de dois terços.",
        "B": "Arrependimento posterior, ficando extinta a punibilidade pelo socorro prestado.",
        "C": "Arrependimento eficaz; Lucas responde apenas pelos atos já praticados (lesão corporal de natureza grave).",
        "D": "Desistência voluntária, respondendo Lucas por homicídio consumado mitigado.",
        "E": "Crime impossível, pois a intervenção médica posterior tornou o resultado morte inalcançável."
      },
      "gabarito": "C",
      "explicacaoGeral": "Nos termos do art. 15 do Código Penal: \"O agente que, voluntariamente, desiste de prosseguir na execução [desistência voluntária] ou IMPEDE que o resultado se produza [ARREPENDIMENTO EFICAZ], só responde pelos atos já praticados\". Como Lucas já havia esgotado os atos executórios (atirado na vítima) e impediu ativamente a produção do resultado morte com o socorro eficaz, operou-se o Arrependimento Eficaz (\"ponte de ouro\"), afastando o homicídio tentado e fazendo-o responder unicamente pelas lesões corporais causadas.",
      "analiseAlternativas": {
        "A": "Incorreta. O arrependimento eficaz exclui a tentativa de homicídio; o agente só responde pelos atos pretéritos consumados.",
        "B": "Incorreta. O arrependimento posterior (art. 16 do CP) exige crime cometido SEM violência ou grave ameaça à pessoa e restituição da coisa até a denúncia.",
        "C": "Correta! Esgotada a execução, o agente evitou eficazmente o resultado morte, beneficiando-se da regra do art. 15 (responde apenas pelas lesões corporais praticadas).",
        "D": "Incorreta. A desistência voluntária ocorre durante os atos de execução (o agente ainda pode prosseguir mas para). Quando os atos já foram concluídos e o agente impede o resultado, o instituto é o arrependimento eficaz.",
        "E": "Incorreta. O meio empregado (arma de fogo) e o objeto (ser humano vivo) eram plenamente idôneos para consumar o delito de homicídio."
      },
      "referenciaFonte": {
        "diplomaLegal": "Código Penal Brasileiro — Artigo 15 (Desistência Voluntária e Arrependimento Eficaz)",
        "secaoMaterial": "Pasta 09_Direito_Penal/01_Teoria_do_Crime_Lei_Penal_e_Excludentes_de_Ilicitude.pdf (págs. 21–25)",
        "detalhe": "Doutrina da \"ponte de ouro\" de Von Liszt e desclassificação para os atos residuais."
      }
    },
    {
      "id": "q_penal_06",
      "disciplinaId": "disc_penal",
      "dificuldade": "Difícil",
      "origem": "Banca IDCAP — Excludentes de Ilicitude e Excesso (Art. 23, 24 e 25 do CP)",
      "enunciado": "No tocante às causas excludentes da ilicitude (antijuridicidade) e a atuação dos agentes de segurança pública, analise os seguintes itens:\nI. O estado de necessidade autoriza a conduta de quem pratica o fato para salvar de perigo atual, que não provocou por sua vontade, nem podia de outro modo evitar, direito próprio ou alheio, cujo sacrifício, nas circunstâncias, não era razoável exigir-se.\nII. Entende-se em legítima defesa quem, usando moderadamente dos meios necessários, repele injusta agressão, atual ou iminente, a direito seu ou de outrem.\nIII. O agente que atua amparado por qualquer das excludentes de ilicitude está totalmente imune a sanção penal, ainda que venha a exceder dolosa ou culposamente os limites da necessidade.\nIV. O estrito cumprimento de dever legal decorre de uma imposição legal expressa dirigida a determinados agentes públicos no exercício de suas atribuições.\n\nEstá CORRETO o que se afirma em:",
      "alternativas": {
        "A": "I e III, apenas.",
        "B": "II e III, apenas.",
        "C": "I, II e IV, apenas.",
        "D": "I, II, III e IV.",
        "E": "III e IV, apenas."
      },
      "gabarito": "C",
      "explicacaoGeral": "Análise dos itens:\n• Item I: Correto. Transcrição literal do art. 24 do CP (Estado de Necessidade).\n• Item II: Correto. Transcrição literal do art. 25 do CP (Legítima Defesa).\n• Item III: INCORRETO. O parágrafo único do art. 23 do CP determina que: \"O agente, em qualquer das hipóteses deste artigo, responderá pelo excesso doloso ou culposo\".\n• Item IV: Correto. O estrito cumprimento do dever legal afasta a ilicitude quando o dever dimana de preceito legal obrigatório.\nLogo, estão corretos I, II e IV.",
      "analiseAlternativas": {
        "A": "Incorreta. O item III erra ao afirmar imunidade total no excesso.",
        "B": "Incorreta. O item III é falso e o item I é verdadeiro.",
        "C": "Correta! Apenas os itens I, II e IV estão em perfeita harmonia com os arts. 23, 24 e 25 do Código Penal.",
        "D": "Incorreta. O item III viola frontalmente o parágrafo único do artigo 23 do Código Penal.",
        "E": "Incorreta. O item III está incorreto."
      },
      "referenciaFonte": {
        "diplomaLegal": "Código Penal Brasileiro — Artigos 23, 24 e 25 (Excludentes de Ilicitude e Excesso)",
        "secaoMaterial": "Pasta 09_Direito_Penal/01_Teoria_do_Crime_Lei_Penal_e_Excludentes_de_Ilicitude.pdf (págs. 26–34)",
        "detalhe": "Requisitos dogmáticos da legítima defesa, estado de necessidade e responsabilização pelo excesso."
      }
    },
    {
      "id": "q_penal_07",
      "disciplinaId": "disc_penal",
      "dificuldade": "Média/Difícil",
      "origem": "Banca IDCAP — Crime Impossível e Teoria Subjetiva (Art. 17 do CP)",
      "enunciado": "Durante a madrugada na orla de Santana, Fernando aproxima-se de uma viatura da Guarda Municipal estacionada e desfere golpes de punhal contra um boneco de palha colocado estrategicamente no banco do motorista para simular um agente em vigília, acreditando piamente estar matando o guarda civil que ali costumava descansar. Diante de tal conduta, à luz do Código Penal Brasileiro, Fernando responderá por:",
      "alternativas": {
        "A": "Tentativa de homicídio qualificado funcional contra agente de segurança.",
        "B": "Tentativa de homicídio simples com redução de pena de metade.",
        "C": "Conduta penalmente atípica em virtude de crime impossível por absoluta impropriedade do objeto.",
        "D": "Crime impossível por ineficácia relativa do meio, punível como contravenção penal.",
        "E": "Dano qualificado tentado contra bem móvel público municipal."
      },
      "gabarito": "C",
      "explicacaoGeral": "O art. 17 do Código Penal consagra expressamente o CRIME IMPOSSÍVEL (também denominado tentativa inidônea ou quase-crime): \"Não se pune a tentativa quando, por ineficácia absoluta do meio ou por absoluta impropriedade do objeto, é impossível consumar-se o crime\". No caso narrado, é absolutamente impossível matar um boneco de palha (ausência material de vida humana), configurando hipótese de atipicidade penal absoluta por impropriedade do objeto.",
      "analiseAlternativas": {
        "A": "Incorreta. Não existe crime de homicídio tentado contra objeto inanimado desprovido de vida biológica.",
        "B": "Incorreta. A conduta é atípica e não autoriza persecução penal por homicídio.",
        "C": "Correta! Art. 17 do CP: o crime é impossível pela absoluta impropriedade do objeto material (inexistência de vítima humana no local atacado).",
        "D": "Incorreta. A ineficácia ou impropriedade era ABSOLUTA (não relativa) e não gera punição por contravenção.",
        "E": "Incorreta. O dolo do agente não era danificar a viatura, mas cometer homicídio que se revelou absolutamente impossível."
      },
      "referenciaFonte": {
        "diplomaLegal": "Código Penal Brasileiro — Artigo 17 (Crime Impossível / Tentativa Inidônea)",
        "secaoMaterial": "Pasta 09_Direito_Penal/01_Teoria_do_Crime_Lei_Penal_e_Excludentes_de_Ilicitude.pdf (págs. 20–22)",
        "detalhe": "Absoluta ineficácia do meio e absoluta impropriedade do objeto segundo a teoria objetiva temperada."
      }
    },
    {
      "id": "q_penal_08",
      "disciplinaId": "disc_penal",
      "dificuldade": "Difícil",
      "origem": "Banca IDCAP — Concurso de Pessoas e Cooperação Dolosamente Distinta (Art. 29 do CP)",
      "enunciado": "André e Bruno ajustam previamente a prática de um crime de furto simples em um depósito comercial em Santana durante o repouso noturno, combinando que Bruno vigiaria a calçada desarmado enquanto André subtrairia mercadorias. Durante a execução, André, sem o conhecimento prévio de Bruno e de forma autônoma, saca um revólver que mantinha escondido e atira com dolo de matar no segurança do estabelecimento comercial que apareceu repentinamente, provocando a sua morte para assegurar a fuga com os bens (latrocínio). De acordo com o art. 29, § 2º do Código Penal Brasileiro:",
      "alternativas": {
        "A": "Bruno responderá solidariamente pelas penas do latrocínio doloso sem qualquer diferenciação.",
        "B": "Se algum dos concorrentes quis participar de crime menos grave, ser-lhe-á aplicada a pena deste; essa pena será aumentada até a metade na hipótese de ter sido previsível o resultado mais grave.",
        "C": "Bruno fica isento de pena por inexigibilidade de conduta diversa.",
        "D": "Ambos responderão exclusivamente por homicídio culposo.",
        "E": "André responderá por furto e Bruno por latrocínio consumado."
      },
      "gabarito": "B",
      "explicacaoGeral": "Trata-se da COOPERAÇÃO DOLOSAMENTE DISTINTA (ou desvio subjetivo entre os concorrentes), prevista textualmente no art. 29, § 2º do Código Penal: \"Se de algum dos concorrentes quis participar de crime menos grave, ser-lhe-á aplicada a pena deste; essa pena será aumentada até metade, na hipótese de ter sido previsível o resultado mais grave\". Bruno quis furtar e não roubar/matar; logo, responde pela pena do furto pretendido, aumentada de até metade se o resultado mais gravoso era previsível.",
      "analiseAlternativas": {
        "A": "Incorreta. O ordenamento brasileiro adota a teoria monista temperada pelo § 2º do art. 29, repelindo a responsabilidade objetiva pura.",
        "B": "Correta! Transcrição literal do art. 29, § 2º do CP referente à cooperação dolosamente distinta.",
        "C": "Incorreta. Bruno concorreu dolosamente para o furto, incidindo em punição correspondente ao crime planejado.",
        "D": "Incorreta. O homicídio praticado por André foi doloso (latrocínio), inexistindo crime culposo nessa hipótese.",
        "E": "Incorreta. Foi André quem executou a violência letal armada, respondendo pelo latrocínio."
      },
      "referenciaFonte": {
        "diplomaLegal": "Código Penal Brasileiro — Artigo 29, § 2º (Cooperação Dolosamente Distinta)",
        "secaoMaterial": "Pasta 09_Direito_Penal/01_Teoria_do_Crime_Lei_Penal_e_Excludentes_de_Ilicitude.pdf (págs. 35–40)",
        "detalhe": "Regras de individualização da pena no concurso de pessoas e desvio subjetivo."
      }
    },
    {
      "id": "q_penal_09",
      "disciplinaId": "disc_penal",
      "dificuldade": "Média/Difícil",
      "origem": "Banca IDCAP — Crimes Contra a Administração: Desacato e Desobediência (Arts. 330 e 331)",
      "enunciado": "Durante uma operação de desobstrução de via pública em Santana, um motorista civil profere xingamentos de baixo calão diretamente na face de um Guarda Municipal uniformizado que organizava o trânsito, bradando: \"Você é um corrupto, incompetente e não manda em nada!\". Em seguida, quando o Guarda lhe dá ordem legal de parada para identificação formal, o condutor arranca com o veículo e foge em alta velocidade. A conduta do motorista configura, em concurso formal ou material, os crimes de:",
      "alternativas": {
        "A": "Injúria simples e Resistência qualificada.",
        "B": "Desacato e Desobediência.",
        "C": "Calúnia eleitoral e Prevaricação.",
        "D": "Concussão e Coação no curso do processo.",
        "E": "Apenas infração de trânsito do CTB, sendo atípica a esfera penal."
      },
      "gabarito": "B",
      "explicacaoGeral": "1. Desacato (art. 331 do CP): Consiste em \"Desacatar funcionário público no exercício da função ou em razão dela\". O agente ofendeu, humilhou e menoscabou o servidor público municipal em serviço.\n2. Desobediência (art. 330 do CP): Consiste em \"Desobedecer a ordem legal de funcionário público\". Ao arrancar com o carro e descumprir a ordem legítima de parada dada para identificação, incidiu no crime do art. 330 do CP. (O STJ e o STF pacificaram a plena vigência e constitucionalidade do crime de desacato no Brasil).",
      "analiseAlternativas": {
        "A": "Incorreta. Resistência (art. 329) exige emprego de violência ou ameaça contra o funcionário para se opor à execução do ato.",
        "B": "Correta! Desacato pelas ofensas dirigidas à dignidade da função pública (art. 331) e Desobediência pela fuga contra ordem expressa de parada (art. 330).",
        "C": "Incorreta. Prevaricação só pode ser cometida por funcionário público no exercício de suas atribuições funcionais.",
        "D": "Incorreta. Concussão é crime próprio de funcionário público que exige vantagem indevida.",
        "E": "Incorreta. A esfera administrativa do CTB independe da esfera penal; há tipicidade penal inequívoca nos arts. 330 e 331 do CP."
      },
      "referenciaFonte": {
        "diplomaLegal": "Código Penal Brasileiro — Artigos 330 (Desobediência) e 331 (Desacato) e Jurisprudência do STJ (Tema 957)",
        "secaoMaterial": "Pasta 09_Direito_Penal/02_Crimes_em_Especie_Pessoa_Patrimonio_e_Administracao.pdf (págs. 43–48)",
        "detalhe": "Crimes praticados por particular contra a Administração em Geral."
      }
    },
    {
      "id": "q_penal_10",
      "disciplinaId": "disc_penal",
      "dificuldade": "Média/Difícil",
      "origem": "Banca IDCAP — Homicídio Qualificado Funcional (Art. 121, § 2º, VII do CP)",
      "enunciado": "O homicídio praticado contra integrante das Guardas Municipais no exercício da função ou em decorrência dela, ou contra seu cônjuge, companheiro ou parente consanguíneo até terceiro grau, em razão dessa condição, constitui:",
      "alternativas": {
        "A": "Crime culposo com perdão judicial obrigatório.",
        "B": "Homicídio simples com pena de detenção de 1 a 3 anos.",
        "C": "Homicídio qualificado (homicídio funcional), punido com pena de reclusão de 12 a 30 anos e classificado como crime hediondo.",
        "D": "Infração de menor potencial ofensivo sujeita aos Juizados Especiais Criminais.",
        "E": "Crime militar impróprio julgado exclusivamente pela Justiça Militar Estadual."
      },
      "gabarito": "C",
      "explicacaoGeral": "Nos termos do art. 121, § 2º, inciso VII do Código Penal (incluído pela Lei 13.142/2015), o homicídio é qualificado quando praticado \"contra autoridade ou agente descrito nos arts. 142 e 144 da Constituição Federal, integrantes do sistema prisional e da Força Nacional de Segurança Pública, no exercício da função ou em decorrência dela, ou contra seu cônjuge, companheiro ou parente consanguíneo até terceiro grau, em razão dessa condição\". As Guardas Municipais integram o sistema de segurança pública do art. 144, § 8º da CF (conforme reafirmado pelo STF no Tema 1.306 e ADPF 995). Trata-se de homicídio hediondo com pena de reclusão de 12 a 30 anos.",
      "analiseAlternativas": {
        "A": "Incorreta. Trata-se de crime doloso gravíssimo, hediondo e sem perdão judicial.",
        "B": "Incorreta. Não é homicídio simples; é qualificado com reclusão de 12 a 30 anos.",
        "C": "Correta! É a qualificadora funcional do art. 121, § 2º, VII do CP, com status de crime hediondo (Lei 8.072/90).",
        "D": "Incorreta. Delito de altíssimo potencial ofensivo, inafiançável e insuscetível de graça ou anistia.",
        "E": "Incorreta. Guardas Municipais integram o âmbito civil e as ações penais contra eles tramitam perante a Justiça Comum Estadual (Tribunal do Júri)."
      },
      "referenciaFonte": {
        "diplomaLegal": "Código Penal — Art. 121, § 2º, VII (Homicídio Funcional) e Lei dos Crimes Hediondos (Lei 8.072/1990)",
        "secaoMaterial": "Pasta 09_Direito_Penal/02_Crimes_em_Especie_Pessoa_Patrimonio_e_Administracao.pdf (págs. 8–15)",
        "detalhe": "Proteção penal qualificada conferida aos integrantes da Guarda Municipal."
      }
    },
    {
      "id": "q_port_01",
      "disciplinaId": "disc_port",
      "dificuldade": "Média",
      "origem": "Banca IDCAP — Regência Verbal e Crase",
      "enunciado": "Leia com atenção as orações a seguir e avalie a exatidão das regras de regência verbal e crase:\nI. A comissão de segurança assistiu o filme sobre os direitos das crianças.\nII. Os guardas municipais obedeceram rigorosamente aos protocolos operacionais de tiro defensivo.\nIII. O comandante informou aos servidores de que as escalas seriam retificadas.\nIV. A viatura dirigiu-se à secretaria de administração em velocidade compatível.\n\nEstá correto o que se afirma APENAS em:",
      "alternativas": {
        "A": "I e III.",
        "B": "II e IV.",
        "C": "I, II e IV.",
        "D": "II, III e IV.",
        "E": "III e IV."
      },
      "gabarito": "B",
      "explicacaoGeral": "Regência IDCAP:\n• Item I: Incorreto. O verbo \"assistir\" no sentido de presenciar/ver é VTI e rege a preposição \"a\" (\"assistiu ao filme\").\n• Item II: Correto. O verbo \"obedecer\" é VTI e exige a preposição \"a\" (\"obedeceram aos protocolos\").\n• Item III: Incorreto. O verbo \"informar\" é VTDI (algo a alguém OU alguém de algo), sendo proibida a duplicidade de preposições (\"informou aos servidores [OI] de que [OI]\"). O correto é \"informou aos servidores que...\".\n• Item IV: Correto. Quem se dirige, dirige-se \"a\" + \"a secretaria\" = crase obrigatória (\"à secretaria\").",
      "analiseAlternativas": {
        "A": "Incorreta. O item I erra na regência de \"assistir\" e o item III traz erro de bitributação de objeto indireto.",
        "B": "Correta! Apenas as afirmativas II e IV atendem rigorosamente à norma culta.",
        "C": "Incorreta. O item I está gramaticalmente incorreto.",
        "D": "Incorreta. O item III contém vício de regência verbal.",
        "E": "Incorreta. O item III está incorreto."
      },
      "referenciaFonte": {
        "diplomaLegal": "Gramática Normativa — Regência Verbal e Emprego do Sinal Indicativo de Crase",
        "secaoMaterial": "Pasta 01_Lingua_Portuguesa/Resumo-Português.pdf (págs. 7–9 e 129–149)",
        "detalhe": "Regência dos verbos assistir, obedecer e informar; crase diante de substantivo feminino."
      }
    },
    {
      "id": "q_mat_01",
      "disciplinaId": "disc_mat_rlm",
      "dificuldade": "Média",
      "origem": "Banca IDCAP — Lógica Proposicional e Negação",
      "enunciado": "Considere a seguinte proposição condicional verdadeira: \"Se o guarda municipal de Santana estiver em serviço armado, então ele portará colete balístico.\" Assinale a alternativa que apresenta a negação lógica correta dessa proposição:",
      "alternativas": {
        "A": "Se o guarda municipal de Santana não estiver em serviço armado, então ele não portará colete balístico.",
        "B": "O guarda municipal de Santana está em serviço armado e não porta colete balístico.",
        "C": "O guarda municipal de Santana não está em serviço armado ou não porta colete balístico.",
        "D": "Se o guarda municipal de Santana portar colete balístico, então ele estará em serviço armado.",
        "E": "O guarda municipal de Santana não está em serviço armado e porta colete balístico."
      },
      "gabarito": "B",
      "explicacaoGeral": "Regra da Negação da Condicional (p ➔ q): A negação de \"Se p, então q\" é \"~(p ➔ q) ≡ p ∧ ~q\" (Regra do MANÉ: Mantém a primeira E Nega a segunda). Assim: \"O guarda está em serviço armado E NÃO porta colete balístico\".",
      "analiseAlternativas": {
        "A": "Incorreta. A negação de uma condicional NUNCA gera outra proposição do tipo \"se... então\"!",
        "B": "Correta! Aplicação da regra do MANÉ: mantém o antecedente e nega o consequente com o conectivo \"E\".",
        "C": "Incorreta. Essa estrutura corresponde à equivalência lógica (~p ∨ ~q), mas não à negação.",
        "D": "Incorreta. É a proposição recíproca (q ➔ p).",
        "E": "Incorreta. Negou o antecedente e manteve o consequente, violando as regras da tabela-verdade."
      },
      "referenciaFonte": {
        "diplomaLegal": "Lógica Proposicional — Negação de Proposições Compostas e Leis de De Morgan",
        "secaoMaterial": "Pasta 02_Matematica_e_Raciocinio_Logico/03_Logica_Proposicional_Tabela_Verdade_e_Argumentacao.pdf",
        "detalhe": "Regra do MANÉ: ~(p ➔ q) ≡ p ∧ ~q."
      }
    },
    {
      "id": "q_hist_01",
      "disciplinaId": "disc_hist",
      "dificuldade": "Média/Difícil",
      "origem": "Banca IDCAP — História do Amapá (Laudo Suíço e Cabralzinho)",
      "enunciado": "No contexto do Contestado Franco-Brasileiro no final do século XIX, a disputa territorial entre o Brasil e a França ganhou contornos bélicos com a invasão da Vila do Amapá em maio de 1895 por tropas estrangeiras. Sobre esse conflito e seu desfecho diplomático, assinale a afirmativa correta:",
      "alternativas": {
        "A": "O capitão francês Lunier assumiu o controle definitivo de Macapá após a assinatura do Tratado de Madrid.",
        "B": "Francisco Xavier da Veiga Cabral, o \"Cabralzinho\", liderou a reação armada brasileira que expulsou as tropas francesas e abateu o capitão Lunier na Vila do Amapá.",
        "C": "A disputa territorial foi decidida em favor da França pelo Laudo de Berna em 1914.",
        "D": "O Barão do Rio Branco defendeu que a fronteira natural entre o Brasil e a Guiana Francesa deveria ser fixada no rio Araguari.",
        "E": "O imperador Dom Pedro II assinou a rendição da região do Cabo Norte durante a Guerra da Tríplice Aliança."
      },
      "gabarito": "B",
      "explicacaoGeral": "Em 15 de maio de 1895, o capitão francês Lunier invadiu a Vila do Amapá. Cabralzinho liderou a reação popular armada, matando Lunier e rechaçando as tropas invasoras. No Laudo Suíço de 1º de dezembro de 1900, arbitrado por Walter Hauser e defendido pelo Barão do Rio Branco, o Brasil teve ganho de causa integral, fixando o rio Oiapoque como fronteira oficial.",
      "analiseAlternativas": {
        "A": "Incorreta. O capitão Lunier foi abatido pelas forças brasileiras.",
        "B": "Correta! Cabralzinho é aclamado como líder heróico da resistência e defesa do território amapaense.",
        "C": "Incorreta. O laudo suíço de 1900 concedeu vitória integral ao Brasil.",
        "D": "Incorreta. Era a França que pleiteava o rio Araguari; o Brasil garantiu o rio Oiapoque.",
        "E": "Incorreta. O Cabo Norte foi consolidado como patrimônio inalienável do Brasil."
      },
      "referenciaFonte": {
        "diplomaLegal": "Historiografia do Amapá — Contestado Franco-Brasileiro e Laudo Suíço de 1900",
        "secaoMaterial": "Pasta 03_Historia_do_Amapa_e_Santana/01_Formacao_Colonial_e_Contestado_Franco_Brasileiro.pdf",
        "detalhe": "Batalha de 15 de Maio de 1895 e Laudo de Berna de 1º de dezembro de 1900."
      }
    },
    {
      "id": "q_geog_01",
      "disciplinaId": "disc_geog",
      "dificuldade": "Média",
      "origem": "Banca IDCAP — Geografia de Santana e Logística Portuária",
      "enunciado": "O município de Santana, conhecido como a \"Cidade-Porto do Amapá\", possui posição estratégica na rede urbana e logística regional. Acerca de sua geografia física e econômica, é correto afirmar que:",
      "alternativas": {
        "A": "Situa-se no extremo norte do estado, fazendo limite internacional imediato com o território da Guiana Francesa.",
        "B": "Localiza-se às margens do Canal Norte do rio Amazonas, dispondo de calado natural profundo que permite a atracação de navios oceânicos de grande tonelagem.",
        "C": "É o município mais extenso do Amapá, superando a área territorial de Laranjal do Jari e Oiapoque juntos.",
        "D": "Tem sua economia baseada exclusivamente na extração da borracha natural e na ausência completa de atividades industriais.",
        "E": "Não possui nenhuma área insular, sendo seu relevo 100% montanhoso com altitudes acima de 1.200 metros."
      },
      "gabarito": "B",
      "explicacaoGeral": "Santana situa-se no sudeste do Amapá e é banhada pelo Canal Norte do rio Amazonas. Suas águas profundas (calado natural) permitem a atracação de navios graneleiros e cargueiros de grande porte no Porto de Santana (CDSA), constituindo o polo industrial e exportador do estado.",
      "analiseAlternativas": {
        "A": "Incorreta. Santana fica no sudeste amapaense conurbada com Macapá; Oiapoque fica no extremo norte.",
        "B": "Correta! O calado profundo do Canal Norte do Amazonas viabiliza o escoamento portuário de grande tonelagem.",
        "C": "Incorreta. Santana possui área territorial compacta (~1.541 km²), sendo o 2º mais populoso, mas não o mais extenso.",
        "D": "Incorreta. Santana concentra o Distrito Industrial do Amapá e intenso tráfego de cargas e grãos.",
        "E": "Incorreta. Santana abriga ilhas fluviais de grande porte, com destaque para a Ilha de Santana."
      },
      "referenciaFonte": {
        "diplomaLegal": "Geografia do Amapá — Hidrografia, Organização Espacial e Logística de Santana",
        "secaoMaterial": "Pasta 04_Geografia_do_Amapa_e_Santana/03_Geografia_do_Municipio_de_Santana_Porto_Distritos_e_Organizacao.pdf",
        "detalhe": "Porto de Santana, Canal Norte do Rio Amazonas e Distrito Industrial do Matapi."
      }
    },
    {
      "id": "q_gcm_01",
      "disciplinaId": "disc_gcm_leg",
      "dificuldade": "Média/Difícil",
      "origem": "Banca IDCAP — Estatuto Geral das Guardas Municipais (Lei 13.022/2014)",
      "enunciado": "Nos termos expressos do Estatuto Geral das Guardas Municipais (Lei Federal nº 13.022/2014), constituem princípios mínimos de atuação das guardas municipais, EXCETO:",
      "alternativas": {
        "A": "Proteção dos direitos humanos fundamentais, do exercício da cidadania e das liberdades públicas.",
        "B": "Preservação da vida, redução do sofrimento e diminuição das perdas.",
        "C": "Patrulhamento preventivo e compromisso com a evolução social da comunidade.",
        "D": "Uso progressivo da força.",
        "E": "Subordinação operacional direta ao Comando da Polícia Militar estadual e aplicação do Código Penal Militar."
      },
      "gabarito": "E",
      "explicacaoGeral": "O art. 3º da Lei Federal nº 13.022/2014 consagra os 5 princípios mínimos (mnemônico P-P-P-C-U): 1) Proteção dos direitos humanos fundamentais; 2) Preservação da vida; 3) Patrulhamento preventivo; 4) Compromisso com a evolução social; 5) Uso progressivo da força. As guardas municipais possuem natureza estritamente CIVIL (art. 2º), sendo vedada qualquer vinculação militar.",
      "analiseAlternativas": {
        "A": "Princípio legítimo previsto no art. 3º, inciso I da Lei 13.022/2014.",
        "B": "Princípio legítimo previsto no art. 3º, inciso II da Lei 13.022/2014.",
        "C": "Princípios legítimos previstos no art. 3º, incisos III e IV da Lei 13.022/2014.",
        "D": "Princípio legítimo previsto no art. 3º, inciso V da Lei 13.022/2014.",
        "E": "Gabarito da questão (Exceção)! As guardas municipais são civis e vinculam-se ao Prefeito Municipal."
      },
      "referenciaFonte": {
        "diplomaLegal": "Lei Federal nº 13.022/2014 — Artigo 2º e Artigo 3º (Princípios Mínimos)",
        "secaoMaterial": "Pasta 05_Legislacao_da_Guarda_Civil_Municipal/01_Estatuto_Geral_das_Guardas_Municipais_Lei_13022_2014.pdf",
        "detalhe": "Natureza civil da Guarda Municipal e rol taxativo dos princípios mínimos de atuação."
      }
    },
    {
      "id": "q_gcm_02",
      "disciplinaId": "disc_gcm_leg",
      "dificuldade": "Difícil",
      "origem": "Banca IDCAP — Lei Federal 13.060/2014 e Decreto 12.341/2024",
      "enunciado": "A Lei Federal nº 13.060/2014 e o Decreto Federal nº 12.341/2024 disciplinam o uso da força e dos instrumentos de menor potencial ofensivo pelos profissionais de segurança pública. Nos termos dessa legislação, assinale a hipótese em que o disparo de arma de fogo é expressamente PROIBIDO:",
      "alternativas": {
        "A": "Em legítima defesa real contra agressor armado que efetua disparos contra a guarnição.",
        "B": "Para neutralizar indivíduo em atitude de tomada de refém com risco iminente de morte.",
        "C": "Contra pessoa em fuga que esteja desarmada ou que, mesmo armada, não represente risco imediato de morte ou de lesão grave aos agentes de segurança ou a terceiros.",
        "D": "Para repelir agressão iminente a direito próprio quando esgotados os meios não letais.",
        "E": "Em situação de confronto armado para cessar agressão grave e atual."
      },
      "gabarito": "C",
      "explicacaoGeral": "O art. 2º, parágrafo único da Lei nº 13.060/2014 prevê que NÃO é legítimo o uso de arma de fogo: I - contra pessoa em fuga desarmada ou que não represente risco imediato de morte ou lesão grave; II - contra veículo que fure bloqueio, salvo risco imediato de morte ou lesão corporal grave.",
      "analiseAlternativas": {
        "A": "Incorreta. Em legítima defesa real com troca de tiros, o emprego de arma de fogo é amparado pela lei.",
        "B": "Incorreta. Na tomada de refém com risco de morte, o disparo é amparado pela defesa de terceiro.",
        "C": "Correta! Vedação expressa do art. 2º, parágrafo único da Lei Federal nº 13.060/2014.",
        "D": "Incorreta. Havendo risco letal e exaurimento de meios não letais, a força letal é autorizada.",
        "E": "Incorreta. No confronto direto, a resposta visa salvaguardar a vida."
      },
      "referenciaFonte": {
        "diplomaLegal": "Lei Federal nº 13.060/2014 — Art. 2º, Parágrafo Único e Decreto Federal nº 12.341/2024",
        "secaoMaterial": "Pasta 05_Legislacao_da_Guarda_Civil_Municipal/02_SUSP_Lei_13675_e_Uso_da_Forca_Dec_12341_2024.pdf",
        "detalhe": "Vedações imperativas de disparo de arma de fogo contra fugitivos desarmados e bloqueios."
      }
    },
    {
      "id": "q_leg_esp_01",
      "disciplinaId": "disc_leg_esp",
      "dificuldade": "Média",
      "origem": "Banca IDCAP — Lei de Abuso de Autoridade (Lei 13.869/2019)",
      "enunciado": "Nos termos da Lei Federal nº 13.869/2019 (Nova Lei de Abuso de Autoridade), as condutas tipificadas como crime somente serão punidas quando praticadas com finalidade específica. Sobre o elemento subjetivo do tipo nessa lei, assinale a afirmativa correta:",
      "alternativas": {
        "A": "Admite-se a modalidade culposa quando o agente agir com imperícia no manuseio de armamento.",
        "B": "A divergência na interpretação de lei ou na avaliação de fatos e provas não configura, por si só, abuso de autoridade.",
        "C": "O crime de abuso de autoridade prescinde de comprovação de dolo específico.",
        "D": "O servidor que discordar do parecer jurídico de seu superior comete crime inafiançável de abuso.",
        "E": "A condenação criminal por abuso acarreta sempre a pena de morte ou prisão perpétua."
      },
      "gabarito": "B",
      "explicacaoGeral": "O art. 1º, § 2º da Lei nº 13.869/2019 expressamente estabelece que \"a divergência na interpretação de lei ou na avaliação de fatos e provas não configura abuso de autoridade\" (vedação ao crime de hermenêutica). Todos os crimes da lei exigem dolo específico com intuito de prejudicar outrem, beneficiar a si ou terceiro, ou por mero capricho/satisfação pessoal (art. 1º, § 1º).",
      "analiseAlternativas": {
        "A": "Incorreta. NÃO existe crime culposo de abuso de autoridade!",
        "B": "Correta! Proteção legal contra a punição da divergência interpretativa (art. 1º, § 2º).",
        "C": "Incorreta. O dolo específico é elemento estruturante e indispensável da tipicidade.",
        "D": "Incorreta. A divergência técnica não configura ilícito penal.",
        "E": "Incorreta. A Constituição veda expressamente penas de morte e de caráter perpétuo."
      },
      "referenciaFonte": {
        "diplomaLegal": "Lei Federal nº 13.869/2019 — Artigo 1º, §§ 1º e 2º",
        "secaoMaterial": "Pasta 06_Legislacao_Especial/01_Lei_Maria_da_Penha_e_Abuso_de_Autoridade.pdf",
        "detalhe": "Dolo específico de abuso de autoridade e vedação expressa à punição por divergência hermenêutica."
      }
    },
    {
      "id": "q_const_01",
      "disciplinaId": "disc_const",
      "dificuldade": "Média",
      "origem": "Banca IDCAP — Artigo 5º da CF/88 (Inviolabilidade do Domicílio)",
      "enunciado": "Segundo o art. 5º, inciso XI, da Constituição Federal de 1988, a casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo em determinadas hipóteses expressas. Diante disso, a entrada forçada com amparo exclusivo em DETERMINAÇÃO JUDICIAL poderá ocorrer:",
      "alternativas": {
        "A": "A qualquer hora do dia ou da noite, desde que com mandado assinado por juiz de direito.",
        "B": "Durante a noite, desde que acompanhada por no mínimo dois guardas municipais como testemunhas.",
        "C": "Apenas aos finais de semana e feriados no período diurno.",
        "D": "Somente durante o dia.",
        "E": "A qualquer momento, mediante ordem verbal de autoridade policial."
      },
      "gabarito": "D",
      "explicacaoGeral": "Regra do domicílio (art. 5º, XI da CF/88): Flagrante delito, desastre ou socorro autorizam a entrada a qualquer hora do dia ou da noite; por determinação judicial, SOMENTE DURANTE O DIA.",
      "analiseAlternativas": {
        "A": "Incorreta. Mandado judicial NUNCA autoriza entrada noturna forçada em residência.",
        "B": "Incorreta. A presença de testemunhas não supre a proibição constitucional de cumprimento de mandado à noite.",
        "C": "Incorreta. O cumprimento de ordem judicial é diurno em qualquer dia útil.",
        "D": "Correta! Por expressa determinação da CF/88, o mandado judicial só se cumpre durante o dia.",
        "E": "Incorreta. A cláusula exige mandado judicial formal e fundamentado."
      },
      "referenciaFonte": {
        "diplomaLegal": "Constituição Federal de 1988 — Artigo 5º, Inciso XI",
        "secaoMaterial": "Pasta 07_Direito_Constitucional/01_Teoria_Constitucional_Principios_e_Artigo_5.pdf",
        "detalhe": "Garantia fundamental da inviolabilidade do domicílio e limites temporais da ordem judicial."
      }
    },
    {
      "id": "q_adm_01",
      "disciplinaId": "disc_adm",
      "dificuldade": "Média/Difícil",
      "origem": "Banca IDCAP — Lei de Improbidade (Lei 8.429/92 atualizada pela Lei 14.230/2021)",
      "enunciado": "Com as alterações promovidas pela Lei Federal nº 14.230/2021 na Lei de Improbidade Administrativa (Lei nº 8.429/1992), assinale a alternativa que está em estrita consonância com a disciplina legal em vigor:",
      "alternativas": {
        "A": "Mantiveram-se puníveis como improbidade os atos que causem lesão ao erário cometidos a título de culpa culposa grave.",
        "B": "Exige-se a demonstração de dolo específico para a caracterização de qualquer ato de improbidade administrativa, tendo sido extinta a modalidade culposa.",
        "C": "O agente que atentar contra os princípios da administração pública fica sujeito à perda automática dos direitos políticos por 20 anos.",
        "D": "A ação de improbidade pode ser ajuizada privativamente pela autoridade policial de trânsito.",
        "E": "A condenação por improbidade administrativa não admite ressarcimento financeiro."
      },
      "gabarito": "B",
      "explicacaoGeral": "A reforma da Lei 14.230/2021 aboliu categoricamente a figura da improbidade culposa. Todos os atos dos artigos 9º, 10 e 11 agora exigem DOLO ESPECÍFICO.",
      "analiseAlternativas": {
        "A": "Incorreta. A modalidade culposa foi integralmente revogada da Lei 8.429/92.",
        "B": "Correta! O dolo específico é pressuposto obrigatório em todos os atos de improbidade.",
        "C": "Incorreta. No art. 11 (princípios) foi excluída a pena de suspensão de direitos políticos.",
        "D": "Incorreta. A legitimação ativa é exclusiva do Ministério Público (art. 17).",
        "E": "Incorreta. O ressarcimento integral do dano patrimonial é mandatório quando houver prejuízo."
      },
      "referenciaFonte": {
        "diplomaLegal": "Lei Federal nº 8.429/1992 atualizada pela Lei nº 14.230/2021 — Art. 1º e Art. 11",
        "secaoMaterial": "Pasta 08_Direito_Administrativo/02_Servidores_Publicos_Responsabilidade_e_Improbidade.pdf",
        "detalhe": "Exigência universal de dolo específico e extinção da improbidade culposa."
      }
    },
    {
      "id": "q_dh_01",
      "disciplinaId": "disc_dh",
      "dificuldade": "Média",
      "origem": "Banca IDCAP — Súmula Vinculante 11 e Uso de Algemas",
      "enunciado": "Conforme a jurisprudência sumulada do Supremo Tribunal Federal (Súmula Vinculante nº 11), o uso de algemas pelo agente de segurança pública durante uma abordagem:",
      "alternativas": {
        "A": "É obrigatório em todas as conduções policiais sem necessidade de justificação.",
        "B": "É vedado em qualquer hipótese, mesmo diante de confronto armado.",
        "C": "É medida excepcional, autorizada apenas em casos de resistência, fundado receio de fuga ou perigo à integridade física própria ou alheia, justificada a excepcionalidade por escrito.",
        "D": "Depende de autorização verbal prévia de juiz plantonista.",
        "E": "Só pode ser empregado contra menores de dezoito anos."
      },
      "gabarito": "C",
      "explicacaoGeral": "A Súmula Vinculante 11 estabelece o mnemônico PR-RE-PE: 1) Resistência; 2) Fundado Receio de fuga; 3) Perigo à integridade física própria ou alheia. A excepcionalidade DEVE ser justificada por escrito pelo agente.",
      "analiseAlternativas": {
        "A": "Incorreta. O STF veda o uso indiscriminado e automático de algemas.",
        "B": "Incorreta. O uso é lícito e indispensável quando presentes os pressupostos de segurança.",
        "C": "Correta! Transcrição literal dos requisitos fixados na Súmula Vinculante 11 do STF.",
        "D": "Incorreta. Não necessita de prévia autorização judicial, cabendo a justificativa imediata por escrito pelo agente.",
        "E": "Incorreta. Aplica-se a qualquer detido, observadas as garantias protetivas do ECA."
      },
      "referenciaFonte": {
        "diplomaLegal": "Supremo Tribunal Federal — Súmula Vinculante nº 11",
        "secaoMaterial": "Pasta 10_Direitos_Humanos/02_Direitos_Humanos_na_Seguranca_Publica_e_Policia_Comunitaria.pdf",
        "detalhe": "Condições estritas de legalidade para uso de algemas e dignidade da pessoa detida."
      }
    }
  ],
  "flashcards": [
    {
      "id": "fc_penal_01",
      "disciplinaId": "disc_penal",
      "frente": "Qual a diferença crucial entre CONCUSSÃO e CORRUPÇÃO PASSIVA no Código Penal?",
      "verso": "• CONCUSSÃO (Art. 316): O funcionário público EXIGE a vantagem indevida em razão do cargo.\n• CORRUPÇÃO PASSIVA (Art. 317): O funcionário SOLICITA, RECEBE ou ACEITA PROMESSA de vantagem indevida.\n💡 A concussão é crime formal: consuma-se na exigência!",
      "referenciaFonte": "Código Penal, Arts. 316 e 317 | Pasta 09_Direito_Penal"
    },
    {
      "id": "fc_penal_02",
      "disciplinaId": "disc_penal",
      "frente": "O que acontece no PECULATO CULPOSO quando o servidor repara o dano antes da sentença irrecorrível?",
      "verso": "A reparação do dano anterior à sentença irrecorrível EXTINTA A PUNIBILIDADE (art. 312, § 3º, primeira parte)!\nSe for posterior à sentença, a pena é REDUZIDA PELA METADE.",
      "referenciaFonte": "Código Penal, Art. 312, §§ 2º e 3º | Pasta 09_Direito_Penal"
    },
    {
      "id": "fc_penal_03",
      "disciplinaId": "disc_penal",
      "frente": "O que diferencia DESISTÊNCIA VOLUNTÁRIA de ARREPENDIMENTO EFICAZ (Art. 15 do CP)?",
      "verso": "• DESISTÊNCIA VOLUNTÁRIA: O agente está executando o crime e para voluntariamente (\"posso continuar, mas não quero\").\n• ARREPENDIMENTO EFICAZ: O agente já praticou todos os atos executórios e age ativamente impedindo que o resultado morte/dano ocorra.\nAmbos só respondem pelos atos já praticados!",
      "referenciaFonte": "Código Penal, Art. 15 | Pasta 09_Direito_Penal"
    },
    {
      "id": "fc_penal_04",
      "disciplinaId": "disc_penal",
      "frente": "Por que o CRIME IMPOSSÍVEL (Art. 17 do CP) gera ATIPICIDADE ABSOLUTA?",
      "verso": "Porque o meio empregado é ABSOLUTAMENTE INEFICAZ (ex: tentar matar com água com açúcar) ou o objeto é ABSOLUTAMENTE IMPRÓPRIO (ex: desferir tiros em quem já estava morto). A tentativa não é punida!",
      "referenciaFonte": "Código Penal, Art. 17 | Pasta 09_Direito_Penal"
    },
    {
      "id": "fc_gcm_01",
      "disciplinaId": "disc_gcm_leg",
      "frente": "Quais são os 5 Princípios Mínimos de Atuação das Guardas Municipais (Lei Federal 13.022/2014, art. 3º)?",
      "verso": "Mnemônico \"P-P-P-C-U\":\n1. Proteção dos direitos humanos fundamentais e liberdades;\n2. Preservação da vida, redução do sofrimento e perdas;\n3. Patrulhamento preventivo;\n4. Compromisso com a evolução social da comunidade;\n5. Uso progressivo da força.",
      "referenciaFonte": "Lei 13.022/2014, Art. 3º | Pasta 05_Legislacao_da_Guarda_Civil_Municipal"
    },
    {
      "id": "fc_gcm_02",
      "disciplinaId": "disc_gcm_leg",
      "frente": "Em quais situações é expressamente PROIBIDO o disparo de arma de fogo na Lei 13.060/2014?",
      "verso": "1. Contra pessoa em fuga desarmada ou que não represente risco imediato de morte/lesão grave;\n2. Contra veículo que desrespeite bloqueio policial em via pública (salvo se o ato criar risco imediato de morte/lesão grave).",
      "referenciaFonte": "Lei 13.060/2014 e Decreto 12.341/2024 | Pasta 05_Legislacao_da_Guarda_Civil_Municipal"
    },
    {
      "id": "fc_const_01",
      "disciplinaId": "disc_const",
      "frente": "Quais as hipóteses de entrada em domicílio sem consentimento (CF/88, art. 5º, XI)?",
      "verso": "• A qualquer hora (dia ou noite): Flagrante delito, desastre ou para prestar socorro;\n• SOMENTE DURANTE O DIA: Por determinação judicial.",
      "referenciaFonte": "CF/88, Art. 5º, XI | Pasta 07_Direito_Constitucional"
    },
    {
      "id": "fc_dh_01",
      "disciplinaId": "disc_dh",
      "frente": "Quando é lícito o uso de algemas segundo a Súmula Vinculante 11 do STF?",
      "verso": "Mnemônico PR-RE-PE:\n1. Resistência;\n2. Fundado Receio de fuga;\n3. Perigo à integridade física própria ou alheia.\n⚠️ Obrigatório justificar por escrito a excepcionalidade sob pena de nulidade da prisão.",
      "referenciaFonte": "Súmula Vinculante nº 11/STF | Pasta 10_Direitos_Humanos"
    }
  ],
  "matrizGeradorInfinito": [
    {
      "disciplinaId": "disc_penal",
      "tema": "Crimes Contra a Administração: Concussão vs Corrupção Passiva (Arts. 316 e 317)",
      "tipo": "CASO_PRATICO",
      "cenario": "Durante fiscalização no terminal hidroviário do Porto de Santana, o guarda municipal aborda comerciante com carga e impõe o pagamento de R$ 800 sob ameaça de apreensão abusiva da embarcação.",
      "correta": "O crime praticado é o de concussão (art. 316 do CP), que se consuma no momento da exigência da vantagem indevida, dispensando o efetivo recebimento do dinheiro.",
      "distratores": [
        {
          "text": "O crime configura corrupção passiva, pois todo pedido financeiro de servidor público se subsume ao art. 317 do CP.",
          "motivo": "Corrupção passiva exige núcleos como solicitar, receber ou aceitar promessa, ao passo que a conduta coercitiva de \"exigir\" configura concussão."
        },
        {
          "text": "A conduta é atípica se o comerciante não efetuar o pagamento, restando apenas infração disciplinar leve.",
          "motivo": "A concussão é crime formal de consumação antecipada; consuma-se na exigência independentemente de pagamento."
        },
        {
          "text": "O delito praticado é o de prevaricação simples, com pena atenuada pela ausência de lesão patrimonial imediata.",
          "motivo": "Prevaricação é deixar de praticar ato para satisfazer interesse ou sentimento pessoal, inexistindo exigência de vantagem patrimonial indevida."
        },
        {
          "text": "Configura-se o crime de extorsão mediante sequestro na modalidade tentada.",
          "motivo": "Não houve sequestro nem retenção da vítima como condição ou preço de resgate (art. 159 do CP)."
        }
      ],
      "explicacao": "O verbo nuclear \"exigir\" distingue a concussão (art. 316) da corrupção passiva (art. 317 - solicitar/receber). A concussão é crime formal (Súmula 96 do STJ).",
      "fonte": "Código Penal, Art. 316 e 317 | Pasta 09_Direito_Penal/02_Crimes_em_Especie_Pessoa_Patrimonio_e_Administracao.pdf"
    },
    {
      "disciplinaId": "disc_penal",
      "tema": "Peculato-Apropriação, Peculato-Furto e Peculato Culposo (Art. 312 do CP)",
      "tipo": "ASSERTIVAS_MULTICOMPLEX",
      "itens": [
        {
          "texto": "No peculato culposo, a reparação do dano que precede a sentença irrecorrível extingue a punibilidade do agente.",
          "veracidade": true,
          "razao": "Previsto expressamente no art. 312, § 3º, primeira parte do CP."
        },
        {
          "texto": "O peculato-furto ocorre quando o funcionário público, embora não tendo a posse do bem, o subtrai valendo-se da facilidade que lhe proporciona a qualidade de funcionário.",
          "veracidade": true,
          "razao": "Tipificado no art. 312, § 1º do Código Penal."
        },
        {
          "texto": "A reparação do dano no peculato doloso antes da sentença irrecorrível extingue a punibilidade da conduta.",
          "veracidade": false,
          "razao": "No peculato DOLOSO a reparação não extingue a punibilidade, servindo apenas como arrependimento posterior (art. 16) ou atenuante genérica (art. 65, III, b)."
        },
        {
          "texto": "O servidor público que se apropria de bem particular sob custódia da repartição comete furto simples e não peculato.",
          "veracidade": false,
          "razao": "O art. 312 expressamente pune a apropriação de dinheiro ou qualquer outro bem móvel, público OU PARTICULAR, de que tem a posse em razão do cargo."
        }
      ],
      "correta": "Estão corretas apenas as afirmativas I e II.",
      "distratores": [
        {
          "text": "Estão corretas apenas as afirmativas I, II e III.",
          "motivo": "A afirmativa III é falsa: no peculato doloso a reparação NUNCA extingue a punibilidade."
        },
        {
          "text": "Estão corretas apenas as afirmativas II, III e IV.",
          "motivo": "As afirmativas III e IV são falsas conforme as regras do art. 312 do CP."
        },
        {
          "text": "Estão corretas todas as afirmativas I, II, III e IV.",
          "motivo": "As afirmativas III e IV contêm graves erros dogmáticos sobre peculato doloso e bens particulares."
        },
        {
          "text": "Está correta apenas a afirmativa I.",
          "motivo": "A afirmativa II também é absolutamente verdadeira e complementa o rol."
        }
      ],
      "explicacao": "Peculato culposo com reparação prévia à sentença extingue punibilidade (art. 312, § 3º). No peculato doloso, a reparação gera arrependimento posterior ou atenuação, jamais extinção de punibilidade.",
      "fonte": "Código Penal, Art. 312 | Pasta 09_Direito_Penal/02_Crimes_em_Especie_Pessoa_Patrimonio_e_Administracao.pdf"
    },
    {
      "disciplinaId": "disc_penal",
      "tema": "Prevaricação e Condescendência Criminosa (Arts. 319 e 320 do CP)",
      "tipo": "CONFRONTO_DOGMATICO",
      "correta": "A prevaricação exige dolo específico de satisfazer interesse ou sentimento pessoal (art. 319), ao passo que a condescendência criminosa caracteriza-se pela omissão motivada especificamente por indulgência ou piedade para com subordinado (art. 320).",
      "distratores": [
        {
          "text": "A prevaricação exige necessariamente a cobrança e o recebimento de vantagem pecuniária indevida.",
          "motivo": "Cobrança de vantagem pecuniária tipifica concussão ou corrupção; a prevaricação não envolve propina."
        },
        {
          "text": "A condescendência criminosa pune o subordinado que não obedece a ordens manifestamente ilegais do superior.",
          "motivo": "Condescendência criminosa é crime praticado pelo superior ou colega que tolera infração de subordinado por indulgência."
        },
        {
          "text": "Ambos os crimes exigem dolo de enriquecimento ilícito do agente público.",
          "motivo": "Nenhum dos dois tipos exige enriquecimento ilícito (a prevaricação busca sentimento pessoal e a condescendência move-se por indulgência)."
        },
        {
          "text": "O particular pode figurar como autor principal do crime de prevaricação sem qualquer vínculo funcional.",
          "motivo": "Prevaricação é crime funcional próprio exclusivo de funcionário público."
        }
      ],
      "explicacao": "A prevaricação (art. 319) pune o servidor que atua ou se omite para satisfazer interesse ou sentimento pessoal; a condescendência (art. 320) pune a omissão tolerante por indulgência com subordinado infrator.",
      "fonte": "Código Penal, Arts. 319 e 320 | Pasta 09_Direito_Penal/02_Crimes_em_Especie_Pessoa_Patrimonio_e_Administracao.pdf"
    },
    {
      "disciplinaId": "disc_penal",
      "tema": "Excludentes de Ilicitude e Excesso Punível (Arts. 23, 24 e 25 do CP)",
      "tipo": "CASO_PRATICO",
      "cenario": "Em patrulhamento no bairro Nova Brasília em Santana, um agente da Guarda Municipal é atacado por indivíduo com facão. O guarda efetua um disparo na perna do agressor, cessando o ataque. Com o agressor desarmado e imobilizado no solo implorando por socorro, o guarda saca a arma novamente e desfecha três tiros na cabeça do indivíduo.",
      "correta": "O agente atuou inicialmente sob amparo da legítima defesa real, mas responde por homicídio doloso em razão do excesso doloso na conduta subsequente.",
      "distratores": [
        {
          "text": "O agente está acobertado pela legítima defesa total até o encerramento do expediente, sendo isento de qualquer pena.",
          "motivo": "O parágrafo único do art. 23 do CP prevê expressamente que o agente responde pelo excesso doloso ou culposo."
        },
        {
          "text": "A conduta caracteriza estado de necessidade putativo, com aplicação de perdão judicial automático.",
          "motivo": "Não havia estado de necessidade após a cessação da agressão, mas evidente excesso doloso vingativo."
        },
        {
          "text": "O guarda responderá apenas por infração disciplinar administrativa da corporação de Santana.",
          "motivo": "O homicídio por excesso doloso é crime gravíssimo da competência do Tribunal do Júri."
        },
        {
          "text": "O agente responderá por lesão corporal culposa em razão do princípio da consunção.",
          "motivo": "Os disparos na cabeça com vítima dominada demonstram inequívoco animus necandi no excesso doloso."
        }
      ],
      "explicacao": "Cessada a agressão injusta, cessa o direito de defesa. A continuação dos disparos contra vítima indefesa configura excesso doloso (art. 23, parágrafo único), tipificando homicídio doloso.",
      "fonte": "Código Penal, Arts. 23 e 25 | Pasta 09_Direito_Penal/01_Teoria_do_Crime_Lei_Penal_e_Excludentes_de_Ilicitude.pdf"
    },
    {
      "disciplinaId": "disc_penal",
      "tema": "Desistência Voluntária vs Crime Impossível (Arts. 15 e 17 do CP)",
      "tipo": "CONFRONTO_DOGMATICO",
      "correta": "Na desistência voluntária o agente pode prosseguir na execução mas desiste voluntariamente (respondendo pelos atos já praticados), enquanto no crime impossível a consumação é inviável por absoluta ineficácia do meio ou impropriedade do objeto, resultando em atipicidade.",
      "distratores": [
        {
          "text": "No crime impossível o agente responde sempre por tentativa com diminuição de pena de dois terços.",
          "motivo": "O art. 17 do CP afirma taxativamente: \"Não se pune a tentativa...\". O fato é totalmente atípico."
        },
        {
          "text": "A desistência voluntária só gera efeitos se for provocada pela chegada da polícia ou por intervenção externa.",
          "motivo": "Se a interrupção ocorre por intervenção policial, configura-se tentativa e não desistência voluntária!"
        },
        {
          "text": "A desistência voluntária e o crime impossível produzem a condenação do agente pelo crime consumado.",
          "motivo": "Ambos os institutos afastam a condenação pelo crime inicialmente planejado."
        },
        {
          "text": "O crime impossível admite punição quando praticado por funcionário público no exercício de suas funções.",
          "motivo": "A atipicidade do crime impossível é material e absoluta, aplicando-se a qualquer pessoa."
        }
      ],
      "explicacao": "Fórmula de Frank: \"Posso prosseguir, mas não quero\" (desistência voluntária - art. 15); \"Quero prosseguir, mas não posso por absoluta ineficácia/impropriedade\" (crime impossível - art. 17).",
      "fonte": "Código Penal, Arts. 15 e 17 | Pasta 09_Direito_Penal/01_Teoria_do_Crime_Lei_Penal_e_Excludentes_de_Ilicitude.pdf"
    },
    {
      "disciplinaId": "disc_penal",
      "tema": "Arrependimento Posterior (Art. 16 do CP)",
      "tipo": "EXCECAO_INCORRETA",
      "correta": "O arrependimento posterior aplica-se indistintamente mesmo aos crimes cometidos com violência real ou grave ameaça à pessoa, bastando a devolução do dinheiro.",
      "distratores": [
        {
          "text": "Exige que o crime tenha sido cometido sem violência ou grave ameaça à pessoa.",
          "motivo": "Correto para a lei: a ausência de violência ou grave ameaça é pressuposto obrigatório do art. 16."
        },
        {
          "text": "Exige reparação do dano ou restituição da coisa até o recebimento da denúncia ou queixa.",
          "motivo": "Correto para a lei: o marco temporal limite é o recebimento da denúncia ou queixa."
        },
        {
          "text": "Exige que o ato de reparação do dano ocorra por ato voluntário do próprio agente.",
          "motivo": "Correto para a lei: a voluntariedade da restituição é requisito imperativo."
        },
        {
          "text": "Gera redução de pena de um a dois terços em favor do condenado.",
          "motivo": "Correto para a lei: a consequência do arrependimento posterior é a causa de diminuição de 1 a 2 terços."
        }
      ],
      "explicacao": "O art. 16 do CP veda expressamente o arrependimento posterior em crimes com violência ou grave ameaça à pessoa (como roubo ou lesão corporal). Dizer que se aplica com violência é a afirmação INCORRETA!",
      "fonte": "Código Penal, Art. 16 | Pasta 09_Direito_Penal/01_Teoria_do_Crime_Lei_Penal_e_Excludentes_de_Ilicitude.pdf"
    },
    {
      "disciplinaId": "disc_penal",
      "tema": "Homicídio Qualificado Funcional (Art. 121, § 2º, VII do CP)",
      "tipo": "CASO_PRATICO",
      "cenario": "Um criminoso atenta contra a vida de um Guarda Civil Municipal de Santana na orla fluvial da cidade, disparando contra o agente por represália a uma autuação e apreensão pretérita realizada pelo servidor.",
      "correta": "O homicídio consumado ou tentado praticado contra Guarda Municipal no exercício ou em razão de sua função constitui homicídio qualificado funcional e crime hediondo.",
      "distratores": [
        {
          "text": "Trata-se de homicídio simples culposo, processado no juizado especial cível de Santana.",
          "motivo": "O crime foi praticado com dolo direto de vingança funcional contra agente de segurança pública."
        },
        {
          "text": "A qualificadora funcional aplica-se apenas a militares das Forças Armadas, excluídas as Guardas Civis.",
          "motivo": "O STF e a lei enquadram os agentes do art. 144 da CF, no qual se inserem as Guardas Municipais (§ 8º)."
        },
        {
          "text": "O réu responde apenas por porte ilegal de arma, absorvido o atentado contra o servidor.",
          "motivo": "O crime mais grave (homicídio qualificado) absorve o porte ilegal quando usado no mesmo contexto fático."
        },
        {
          "text": "A ação penal dependerá de representação pessoal escrita do Prefeito Municipal de Santana.",
          "motivo": "A ação penal em crimes de homicídio é pública incondicionada promovida pelo Ministério Público."
        }
      ],
      "explicacao": "A Lei 13.142/2015 incluiu o inciso VII no art. 121, § 2º do CP (homicídio funcional contra agentes do art. 144 da CF, integrantes da segurança pública). Tem status de crime hediondo com pena de 12 a 30 anos.",
      "fonte": "Código Penal, Art. 121, § 2º, VII e STF ADPF 995 | Pasta 09_Direito_Penal/02_Crimes_em_Especie_Pessoa_Patrimonio_e_Administracao.pdf"
    },
    {
      "disciplinaId": "disc_penal",
      "tema": "Crimes Contra o Patrimônio: Roubo Próprio vs Impróprio (Art. 157 do CP)",
      "tipo": "CONFRONTO_DOGMATICO",
      "correta": "No roubo próprio a violência ou grave ameaça é empregada antes ou durante a subtração para possibilitar o assenhoreamento; no roubo impróprio (art. 157, § 1º), a violência ou ameaça é exercida logo após a subtração para assegurar a impunidade ou a detenção da coisa.",
      "distratores": [
        {
          "text": "O roubo impróprio não admite a exasperação de pena pelo emprego de arma de fogo.",
          "motivo": "As causas de aumento aplicam-se a ambas as modalidades de roubo."
        },
        {
          "text": "No roubo impróprio a violência ocorre meses depois por meio de ameaças telefônicas.",
          "motivo": "O roubo impróprio exige que a violência seja exercida \"logo depois\" de subtraída a coisa, no mesmo contexto."
        },
        {
          "text": "O roubo próprio exige concurso de no mínimo dez pessoas para restar configurado.",
          "motivo": "O roubo pode ser praticado por agente individual."
        },
        {
          "text": "O roubo impróprio é considerado contravenção penal de menor gravidade com pena de multa.",
          "motivo": "O roubo impróprio tem a mesma pena do roubo próprio (reclusão de 4 a 10 anos e multa)."
        }
      ],
      "explicacao": "Diferença temporal da violência: no roubo próprio (caput), a violência antecede ou acompanha a subtração. No impróprio (§ 1º), a subtração já ocorreu e a violência é usada logo depois para assegurar a posse ou impunidade.",
      "fonte": "Código Penal, Art. 157, caput e § 1º | Pasta 09_Direito_Penal/02_Crimes_em_Especie_Pessoa_Patrimonio_e_Administracao.pdf"
    },
    {
      "disciplinaId": "disc_penal",
      "tema": "Imputabilidade Penal e Teoria da Actio Libera in Causa (Art. 28 do CP)",
      "tipo": "ASSERTIVAS_MULTICOMPLEX",
      "itens": [
        {
          "texto": "A emoção ou a paixão não excluem a imputabilidade penal.",
          "veracidade": true,
          "razao": "Expressamente determinado no art. 28, inciso I do Código Penal."
        },
        {
          "texto": "A embriaguez voluntária ou culposa pelo álcool ou substâncias análogas não exclui a imputabilidade penal.",
          "veracidade": true,
          "razao": "Expressamente consagrado no art. 28, inciso II do Código Penal (Actio libera in causa)."
        },
        {
          "texto": "É isento de pena o agente que, por embriaguez completa proveniente de caso fortuito ou força maior, era inteiramente incapaz de entender o caráter ilícito do fato.",
          "veracidade": true,
          "razao": "Previsto no art. 28, § 1º do Código Penal."
        },
        {
          "texto": "A embriaguez preordenada (ingerir álcool propositalmente para ter coragem de cometer o crime) funciona como causa de isenção de pena.",
          "veracidade": false,
          "razao": "A embriaguez preordenada é circunstância AGRAVANTE genérica obrigatória de pena (art. 61, II, l do CP)."
        }
      ],
      "correta": "Estão corretas apenas as afirmativas I, II e III.",
      "distratores": [
        {
          "text": "Estão corretas todas as afirmativas I, II, III e IV.",
          "motivo": "A afirmativa IV é falsa: embriaguez preordenada agrava a pena e jamais isenta de sanção."
        },
        {
          "text": "Estão corretas apenas as afirmativas I e IV.",
          "motivo": "A afirmativa IV é flagrantemente errada e omite as assertivas verdadeiras II e III."
        },
        {
          "text": "Está correta apenas a afirmativa II.",
          "motivo": "As afirmativas I e III também são prescrições literais do art. 28 do CP."
        },
        {
          "text": "Estão corretas apenas as afirmativas III e IV.",
          "motivo": "A afirmativa IV é manifestamente contrária ao Código Penal."
        }
      ],
      "explicacao": "Pelo art. 28 do CP, a emoção e a embriaguez voluntária não afastam a culpa penal. Somente a embriaguez acidental completa (caso fortuito/força maior) isenta de pena. A preordenada agrava a pena (art. 61, II, l).",
      "fonte": "Código Penal, Art. 28 e Art. 61, II, l | Pasta 09_Direito_Penal/01_Teoria_do_Crime_Lei_Penal_e_Excludentes_de_Ilicitude.pdf"
    },
    {
      "disciplinaId": "disc_penal",
      "tema": "Crimes Contra a Administração: Advocacia Administrativa e Violação de Sigilo (Arts. 321 e 325)",
      "tipo": "CASO_PRATICO",
      "cenario": "Um Guarda Municipal de Santana vale-se de seu crachá e acesso funcional para interceder junto ao setor de posturas do Município, patrocinando interesse financeiro de uma empresa privada de seu cunhado perante a Prefeitura.",
      "correta": "O agente público pratica o crime de advocacia administrativa (art. 321 do CP), cuja pena é agravada se o interesse patrocinado for ilegítimo.",
      "distratores": [
        {
          "text": "A conduta é penalmente lícita por se tratar de apoio a parente consanguíneo.",
          "motivo": "O Código Penal veda expressamente o patrocínio de interesse privado perante a administração valendo-se do cargo."
        },
        {
          "text": "O servidor responderá por peculato-furto com perda automática de bens particulares.",
          "motivo": "Não houve subtração de bens públicos ou particulares sob custódia."
        },
        {
          "text": "O crime cometido é o de concussão com aumento de pena pela participação de cunhado.",
          "motivo": "Não houve exigência de propina a terceiros mediante ameaça."
        },
        {
          "text": "Configura-se desacato por ofensa à moralidade dos colegas de trabalho.",
          "motivo": "Desacato é praticado por particular ofendendo funcionário público no exercício da função."
        }
      ],
      "explicacao": "O art. 321 do CP tipifica a advocacia administrativa: patrocinar, direta ou indiretamente, interesse privado perante a administração pública, valendo-se da qualidade de funcionário.",
      "fonte": "Código Penal, Art. 321 | Pasta 09_Direito_Penal/02_Crimes_em_Especie_Pessoa_Patrimonio_e_Administracao.pdf"
    },
    {
      "disciplinaId": "disc_gcm_leg",
      "tema": "Lei Federal 13.022/2014 — Competências e Controle Interno/Externo",
      "tipo": "CASO_PRATICO",
      "cenario": "A Prefeitura de Santana edita decreto reestruturando os órgãos de fiscalização da Guarda Municipal de Santana (GCMS), definindo a sistemática de correição e ouvidoria.",
      "correta": "O controle interno da Guarda Municipal é exercido pela Corregedoria (onde houver mais de 50 guardas ou porte de arma) e o controle externo é exercido por Ouvidoria independente e autônoma.",
      "distratores": [
        {
          "text": "O controle externo da Guarda Municipal deve ser subordinado à Corregedoria Geral da Polícia Militar.",
          "motivo": "A Guarda é civil e seu controle externo cabe à Ouvidoria própria do Município, sem subordinação militar."
        },
        {
          "text": "A Guarda Municipal é dispensada de possuir Corregedoria quando todos os seus membros forem concursados.",
          "motivo": "O art. 13 da Lei 13.022/14 torna obrigatória a corregedoria para corporações armadas ou com efetivo superior a 50 guardas."
        },
        {
          "text": "As guardas municipais possuem competência privativa para lavrar termos circunstanciados de trânsito em rodovias federais.",
          "motivo": "A atuação da Guarda é restrita a bens, serviços e instalações municipais e colaboração integrada de segurança pública."
        },
        {
          "text": "Os cargos em comissão da Guarda Municipal podem ser preenchidos por qualquer pessoa que não pertença à carreira.",
          "motivo": "Os cargos em comissão devem ser providos por membros efetivos do quadro de carreira (art. 15 da Lei 13.022/14)."
        }
      ],
      "explicacao": "O artigo 13 da Lei 13.022/2014 estabelece a Corregedoria como controle interno e a Ouvidoria independente como controle externo da Guarda Municipal.",
      "fonte": "Lei Federal 13.022/2014, Arts. 13, 14 e 15 | Pasta 05_Legislacao_da_Guarda_Civil_Municipal"
    },
    {
      "disciplinaId": "disc_leg_esp",
      "tema": "Estatuto do Desarmamento (Lei 10.826/2003) — Porte de Arma da Guarda",
      "tipo": "ASSERTIVAS_MULTICOMPLEX",
      "itens": [
        {
          "texto": "O STF, no julgamento das ADIs 5948 e 5538 e ADPF 995, declarou inconstitucionais as restrições populacionais ao porte de arma de fogo pelos guardas municipais.",
          "veracidade": true,
          "razao": "O STF consolidou que todas as guardas municipais têm direito a porte de arma em serviço e fora dele, independente do número de habitantes."
        },
        {
          "texto": "O disparo de arma de fogo em lugar habitado ou em via pública constitui crime do art. 15 do Estatuto do Desarmamento, inafiançável na fase policial.",
          "veracidade": true,
          "razao": "Art. 15 da Lei 10.826/2003."
        },
        {
          "texto": "O porte ilegal de arma de fogo de uso permitido é crime punido exclusivamente com pena de advertência escrita.",
          "veracidade": false,
          "razao": "O art. 14 pune com reclusão de 2 a 4 anos e multa."
        },
        {
          "texto": "O integrante da Guarda Municipal de Santana pode portar arma com registro vencido de terceiros sem autorização da PF.",
          "veracidade": false,
          "razao": "O porte depende de aprovação em curso de formação e concessão de porte institucional pela Polícia Federal."
        }
      ],
      "correta": "Estão corretas apenas as afirmativas I e II.",
      "distratores": [
        {
          "text": "Estão corretas apenas as afirmativas I, II e III.",
          "motivo": "A afirmativa III é absurda: porte ilegal é crime de reclusão de 2 a 4 anos."
        },
        {
          "text": "Estão corretas todas as afirmativas I, II, III e IV.",
          "motivo": "As afirmativas III e IV violam os requisitos do Estatuto do Desarmamento."
        },
        {
          "text": "Está correta apenas a afirmativa I.",
          "motivo": "A afirmativa II também é juridicamente exata."
        },
        {
          "text": "Estão corretas apenas as afirmativas II e IV.",
          "motivo": "A assertiva I é jurisprudência pacífica do STF e a IV é incorreta."
        }
      ],
      "explicacao": "O STF expurgou os limites de habitantes para o porte de arma das guardas municipais. O porte ilegal é crime grave de reclusão e o disparo em via pública é delito autônomo.",
      "fonte": "Lei 10.826/2003 e Jurisprudência do STF (ADPF 995 e ADI 5948) | Pasta 06_Legislacao_Especial"
    },
    {
      "disciplinaId": "disc_hist",
      "tema": "História de Santana: Criação do Município e Porto de Santana",
      "tipo": "CASO_PRATICO",
      "cenario": "Um candidato estuda as origens históricas do município de Santana, desde o seu povoamento pioneiro até a emancipação político-administrativa.",
      "correta": "O povoado de Santana teve origem com o reduto militar de São José de Macapá e a vinda de colonos açorianos e indígenas no século XVIII, tendo sido elevado a município autônomo em dezembro de 1987.",
      "distratores": [
        {
          "text": "Santana foi emancipada diretamente por Carta Régia do Rei de Portugal em 1500.",
          "motivo": "Santana emancipou-se em 17 de dezembro de 1987, desmembrada de Macapá."
        },
        {
          "text": "O município de Santana foi fundado por imigrantes japoneses durante o ciclo da cana-de-açúcar.",
          "motivo": "A colonização original amapaense envolveu açorianos, portugueses, negros escravizados e indígenas."
        },
        {
          "text": "Santana pertencia ao Estado do Pará e foi anexada ao Amapá somente na Constituição de 1988.",
          "motivo": "Santana integrava o Território Federal do Amapá desde a sua criação em 1943."
        },
        {
          "text": "A instalação do Porto de Santana ocorreu em virtude da exploração do café no Vale do Jari.",
          "motivo": "O polo portuário foi impulsionado pelo ciclo do manganês da ICOMI vindo de Serra do Navio nos anos 1950."
        }
      ],
      "explicacao": "O povoamento de Santana iniciou-se em 1758 no século XVIII. Em 17 de dezembro de 1987, Santana foi elevada à categoria de município.",
      "fonte": "História do Município de Santana | Pasta 03_Historia_do_Amapa_e_Santana"
    },
    {
      "disciplinaId": "disc_geog",
      "tema": "Geografia do Amapá: Vegetação e Recursos Hídricos de Santana",
      "tipo": "EXCECAO_INCORRETA",
      "correta": "Santana localiza-se na bacia do rio São Francisco, sendo sua vegetação composta 100% por caatinga hiperxerófila sertaneja.",
      "distratores": [
        {
          "text": "O município de Santana é banhado pela bacia hidrográfica do rio Amazonas (Canal Norte).",
          "motivo": "Correto para a geografia local: Santana é diretamente banhada pelo Canal Norte do Amazonas."
        },
        {
          "text": "A cobertura vegetal do município inclui floresta de várzea, manguezais e terra firme amazônica.",
          "motivo": "Correto para a geografia local: é a vegetação típica do estuário amazônico."
        },
        {
          "text": "O rio Matapi corta áreas importantes do município abrigando indústrias e estaleiros.",
          "motivo": "Correto para a geografia local: o Distrito Industrial concentra-se na foz do rio Matapi."
        },
        {
          "text": "A Ilha de Santana constitui relevante acidente geográfico fluvial em frente à cidade.",
          "motivo": "Correto para a geografia local: a Ilha de Santana é um marco geográfico e turístico essencial."
        }
      ],
      "explicacao": "O Amapá e Santana integram a Bacia Amazônica e o Bioma Amazônico com florestas equatoriais e várzeas, sendo absurda a alusão a rio São Francisco e caatinga!",
      "fonte": "Geografia do Amapá e Santana | Pasta 04_Geografia_do_Amapa_e_Santana"
    },
    {
      "disciplinaId": "disc_const",
      "tema": "Direito Constitucional: Segurança Pública e Guardas Municipais (Art. 144 da CF/88)",
      "tipo": "CASO_PRATICO",
      "cenario": "Em plenário, discute-se o alcance do art. 144, § 8º da Constituição Federal de 1988 quanto ao papel das Guardas Municipais no ecossistema da segurança pública.",
      "correta": "O STF pacificou no Tema 1.306 de Repercussão Geral e na ADPF 995 que as Guardas Municipais integram formalmente o Sistema de Segurança Pública e o SUSP, podendo exercer patrulhamento preventivo e proteção de bens e pessoas.",
      "distratores": [
        {
          "text": "As Guardas Municipais são proibidas pelo STF de atuar em cooperação com as Polícias Civis e Militares.",
          "motivo": "O SUSP (Lei 13.675/18) impõe expressamente a cooperação integrada entre todas as forças de segurança."
        },
        {
          "text": "O policiamento municipal só pode ser exercido por forças estaduais comandadas por coronéis do Exército.",
          "motivo": "O art. 144, § 8º autoriza os Municípios a criar guardas municipais civis."
        },
        {
          "text": "As Guardas Municipais estão subordinadas ao Governador do Estado e à Secretaria de Fazenda estadual.",
          "motivo": "A Guarda Municipal vincula-se ao Chefe do Poder Executivo Municipal (Prefeito)."
        },
        {
          "text": "O art. 144 veda aos municípios a destinação de qualquer orçamento para segurança pública.",
          "motivo": "A segurança é direito e dever de todos, com previsão orçamentária expressa nos orçamentos municipais."
        }
      ],
      "explicacao": "O STF firmou em sede de repercussão geral que as Guardas Municipais integram o sistema de segurança pública do art. 144 da CF, resguardando suas prerrogativas de policiamento comunitário e patrimonial.",
      "fonte": "Constituição Federal de 1988, Art. 144 e STF ADPF 995 | Pasta 07_Direito_Constitucional"
    },
    {
      "disciplinaId": "disc_adm",
      "tema": "Direito Administrativo: Poderes Administrativos e Poder de Polícia",
      "tipo": "CASO_PRATICO",
      "cenario": "Durante fiscalização urbana em Santana, a Guarda Civil Municipal interdita estabelecimento comercial que funcionava sem alvará e com risco iminente de desabamento.",
      "correta": "A atuação da administração fundamenta-se no Poder de Polícia, cujos atributos essenciais são a discricionariedade, a autoexecutoriedade e a coercibilidade.",
      "distratores": [
        {
          "text": "A interdição de emergência depende de autorização judicial prévia, carecendo de autoexecutoriedade.",
          "motivo": "A autoexecutoriedade autoriza a administração a agir imediatamente sem recorrer previamente ao Judiciário."
        },
        {
          "text": "O poder exercido pela corporação é o Poder Hierárquico disciplinar interno sobre particulares.",
          "motivo": "Poder hierárquico opera interna corporis na administração; sobre particulares atua o poder de polícia."
        },
        {
          "text": "O poder de polícia administrativa só pode aplicar penas de reclusão e detenção em estabelecimento prisional.",
          "motivo": "A polícia administrativa aplica sanções administrativas (multa, interdição, apreensão), e não penas privativas de liberdade."
        },
        {
          "text": "O Município não possui poder de polícia sobre posturas e segurança urbana local.",
          "motivo": "O art. 30, I da CF assegura ao Município a competência para legislar e fiscalizar assuntos de interesse local."
        }
      ],
      "explicacao": "O poder de polícia administrativa confere à administração pública a prerrogativa de limitar direitos e atividades privadas pelo interesse público, ostentando atributos de autoexecutoriedade e coercibilidade.",
      "fonte": "Direito Administrativo — Poderes da Administração | Pasta 08_Direito_Administrativo"
    },
    {
      "disciplinaId": "disc_dh",
      "tema": "Direitos Humanos: Tratados Internacionais e Pacto de San José da Costa Rica",
      "tipo": "ASSERTIVAS_MULTICOMPLEX",
      "itens": [
        {
          "texto": "Os tratados e convenções internacionais sobre direitos humanos aprovados em dois turnos por três quintos dos votos no Congresso Nacional equivalem a emendas constitucionais.",
          "veracidade": true,
          "razao": "Expressamente determinado no art. 5º, § 3º da CF/88 (Emenda Constitucional 45/2004)."
        },
        {
          "texto": "A Convenção Americana de Direitos Humanos (Pacto de San José) veda a prisão civil do depositário infiel, ensejando a edição da Súmula Vinculante 25 do STF.",
          "veracidade": true,
          "razao": "Jurisprudência consolidada do STF: \"É ilícita a prisão civil de depositário infiel\"."
        },
        {
          "texto": "Os tratados de direitos humanos aprovados pelo rito ordinário possuem status supralegal, situando-se abaixo da Constituição e acima das leis ordinárias.",
          "veracidade": true,
          "razao": "Posicionamento fixado pelo STF no RE 466.343."
        },
        {
          "texto": "A Declaração Universal dos Direitos Humanos de 1948 autoriza a tortura em casos de terrorismo para obtenção de confissão.",
          "veracidade": false,
          "razao": "O art. 5º da DUDH prevê vedação absoluta e indelegável à tortura e tratamentos desumanos ou degradantes."
        }
      ],
      "correta": "Estão corretas apenas as afirmativas I, II e III.",
      "distratores": [
        {
          "text": "Estão corretas todas as afirmativas I, II, III e IV.",
          "motivo": "A afirmativa IV é absurda: a proibição da tortura nos direitos humanos é norma cogente absoluta (jus cogens)."
        },
        {
          "text": "Está correta apenas a afirmativa I.",
          "motivo": "As assertivas II e III também são prescrições fundamentadas do STF."
        },
        {
          "text": "Estão corretas apenas as afirmativas II e IV.",
          "motivo": "A assertiva IV é frontalmente contrária ao Direito Internacional dos Direitos Humanos."
        },
        {
          "text": "Estão corretas apenas as afirmativas I e IV.",
          "motivo": "A assertiva IV viola a proibição imperativa da tortura."
        }
      ],
      "explicacao": "A proibição da tortura é absoluta. Tratados de Direitos Humanos têm status constitucional (art. 5º, § 3º) ou supralegal (RE 466.343). A prisão do depositário infiel é ilícita (Súmula Vinculante 25).",
      "fonte": "Direitos Humanos — DUDH e Pacto de San José da Costa Rica | Pasta 10_Direitos_Humanos"
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = database;
}
if (typeof window !== 'undefined') {
  window.GCM_DATABASE = database;
}
