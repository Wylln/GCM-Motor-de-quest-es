// Banco de Dados Consolidado — GCM Santana/AP (Edital 001/2026 - Banca IDCAP)
// 10 Disciplinas, 50 Tópicos, Banco de Questões Reais e Padrão IDCAP comentadas A a E com Fonte Obrigatória, Flashcards SM-2 e Átomos do Gerador Infinito

const database = {
  versao: '1.0.0-IDCAP-GCM-SANTANA-2026',
  concurso: {
    orgao: 'Prefeitura Municipal de Santana/AP',
    cargo: 'Guarda Civil Municipal (Concurso Público nº 001/2026)',
    banca: 'IDCAP (Instituto de Desenvolvimento e Capacitação)',
    totalQuestoesProva: 50,
    regime: 'Estatutário (LC nº 81/2026 e LC nº 82/2026)'
  },
  disciplinas: [
    {
      id: 'disc_port',
      nome: '1. Língua Portuguesa',
      icone: '📘',
      peso: 1,
      questoesNaProva: 10,
      cor: '#38bdf8',
      pastaMaterial: '01_Lingua_Portuguesa'
    },
    {
      id: 'disc_mat_rlm',
      nome: '2. Matemática e Raciocínio Lógico',
      icone: '🔢',
      peso: 1,
      questoesNaProva: 5,
      cor: '#60a5fa',
      pastaMaterial: '02_Matematica_e_Raciocinio_Logico'
    },
    {
      id: 'disc_hist',
      nome: '3. História do Amapá e de Santana',
      icone: '🏛️',
      peso: 1,
      questoesNaProva: 5,
      cor: '#f59e0b',
      pastaMaterial: '03_Historia_do_Amapa_e_Santana'
    },
    {
      id: 'disc_geog',
      nome: '4. Geografia do Amapá e de Santana',
      icone: '🗺️',
      peso: 1,
      questoesNaProva: 5,
      cor: '#10b981',
      pastaMaterial: '04_Geografia_do_Amapa_e_Santana'
    },
    {
      id: 'disc_gcm_leg',
      nome: '5. Legislação da Guarda Civil Municipal',
      icone: '🛡️',
      peso: 2,
      questoesNaProva: 8,
      cor: '#06b6d4',
      pastaMaterial: '05_Legislacao_da_Guarda_Civil_Municipal'
    },
    {
      id: 'disc_leg_esp',
      nome: '6. Legislação Especial',
      icone: '⚖️',
      peso: 2,
      questoesNaProva: 5,
      cor: '#a855f7',
      pastaMaterial: '06_Legislacao_Especial'
    },
    {
      id: 'disc_const',
      nome: '7. Direito Constitucional',
      icone: '📜',
      peso: 1,
      questoesNaProva: 4,
      cor: '#ec4899',
      pastaMaterial: '07_Direito_Constitucional'
    },
    {
      id: 'disc_adm',
      nome: '8. Direito Administrativo',
      icone: '🏢',
      peso: 1,
      questoesNaProva: 3,
      cor: '#f97316',
      pastaMaterial: '08_Direito_Administrativo'
    },
    {
      id: 'disc_penal',
      nome: '9. Direito Penal',
      icone: '🚨',
      peso: 2,
      questoesNaProva: 3,
      cor: '#ef4444',
      pastaMaterial: '09_Direito_Penal'
    },
    {
      id: 'disc_dh',
      nome: '10. Direitos Humanos',
      icone: '🤝',
      peso: 1,
      questoesNaProva: 2,
      cor: '#14b8a6',
      pastaMaterial: '10_Direitos_Humanos'
    }
  ],
  questoes: [
    // --- LÍNGUA PORTUGUESA (IDCAP) ---
    {
      id: 'q_idcap_port_01',
      disciplinaId: 'disc_port',
      dificuldade: 'Média',
      origem: 'Banca IDCAP — Concurso Agente Administrativo',
      enunciado: 'Leia com atenção as orações a seguir e avalie a exatidão das regras de regência verbal e crase:\nI. A comissão de segurança assistiu o filme sobre os direitos das crianças.\nII. Os guardas municipais obedeceram rigorosamente aos protocolos operacionais de tiro defensivo.\nIII. O comandante informou aos servidores de que as escalas seriam retificadas.\nIV. A viatura dirigiu-se à secretaria de administração em velocidade compatível.\n\nEstá correto o que se afirma APENAS em:',
      alternativas: {
        A: 'I e III.',
        B: 'II e IV.',
        C: 'I, II e IV.',
        D: 'II, III e IV.',
        E: 'III e IV.'
      },
      gabarito: 'B',
      explicacaoGeral: 'Na banca IDCAP, a regência dos verbos clássicos (assistir, obedecer, informar) é cobrada com frequência:\n• Item I: Incorreto. O verbo "assistir" no sentido de presenciar/ver é VTI e rege a preposição "a" ("assistiu ao filme").\n• Item II: Correto. O verbo "obedecer" é VTI e exige a preposição "a" ("obedeceram aos protocolos").\n• Item III: Incorreto. O verbo "informar" é VTDI (algo a alguém OU alguém de algo), sendo proibida a duplicidade de preposições ("informou aos servidores [OI] de que [OI]"). O correto é "informou aos servidores que..." ou "informou os servidores de que...".\n• Item IV: Correto. Quem se dirige, dirige-se "a" + "a secretaria" = crase obrigatória ("à secretaria").',
      analiseAlternativas: {
        A: 'Incorreta. O item I erra na regência de "assistir" (exige "ao filme") e o item III traz bitributação de objeto indireto.',
        B: 'Correta! Apenas as afirmativas II e IV atendem plenamente à norma-padrão de regência e crase.',
        C: 'Incorreta. O item I possui vício de regência ("assistiu o filme" em vez de "assistiu ao filme").',
        D: 'Incorreta. O item III contém erro de regência ao acumular dois objetos indiretos.',
        E: 'Incorreta. O item III está gramaticalmente viciado conforme demonstrado na explicação geral.'
      },
      referenciaFonte: {
        diplomaLegal: 'Gramática Normativa — Regência Verbal e Emprego do Sinal Indicativo de Crase',
        secaoMaterial: 'Pasta 01_Lingua_Portuguesa/Resumo-Português.pdf (págs. 7–9 e 129–149)',
        detalhe: 'Regência dos verbos assistir, obedecer e informar; crase diante de substantivo feminino determinado.'
      }
    },
    {
      id: 'q_idcap_port_02',
      disciplinaId: 'disc_port',
      dificuldade: 'Fácil/Média',
      origem: 'Banca IDCAP — Padrão Prova Oficial (Concordância e Figuras de Linguagem)',
      enunciado: 'Na frase: "A mochila tática do guarda civil pesa uma tonelada", identifica-se a figura de linguagem denominada:',
      alternativas: {
        A: 'Catacrese.',
        B: 'Antonomásia.',
        C: 'Sinestesia.',
        D: 'Hipérbole.',
        E: 'Onomatopeia.'
      },
      gabarito: 'D',
      explicacaoGeral: 'A figura de linguagem que consiste no exagero intencional e expressivo de uma ideia ou grandeza (como atribuir o peso de "uma tonelada" a uma mochila) é a HIPÉRBOLE. Trata-se de questão autêntica e literal extraída diretamente das provas da banca IDCAP!',
      analiseAlternativas: {
        A: 'Incorreta. Catacrese é o uso de termo figurado por ausência de termo específico (ex: "pé da mesa", "asa da xícara").',
        B: 'Incorreta. Antonomásia consiste em designar uma pessoa por uma de suas qualidades, atributos ou circunlóquio (ex: "o Rei do Futebol" para Pelé).',
        C: 'Incorreta. Sinestesia é a fusão de diferentes sensações físicas e sensoriais (ex: "um cheiro doce", "uma voz áspera").',
        D: 'Correta! A hipérbole expressa o exagero dramático com fins estilísticos e de ênfase expressiva.',
        E: 'Incorreta. Onomatopeia é a representação gráfica de sons ou ruídos da natureza (ex: "tique-taque", "boom").'
      },
      referenciaFonte: {
        diplomaLegal: 'Estilística e Semântica da Língua Portuguesa — Figuras de Pensamento',
        secaoMaterial: 'Pasta 01_Lingua_Portuguesa/apostila-portugues-para-concurso.pdf (págs. 45–52)',
        detalhe: 'Classificação das figuras de linguagem: hipérbole, catacrese, eufemismo, ironia e metonímia.'
      }
    },

    // --- MATEMÁTICA E RLM (IDCAP) ---
    {
      id: 'q_idcap_mat_01',
      disciplinaId: 'disc_mat_rlm',
      dificuldade: 'Média',
      origem: 'Banca IDCAP — Raciocínio Lógico Proposicional',
      enunciado: 'Considere a seguinte proposição condicional verdadeira: "Se o guarda municipal de Santana estiver em serviço armado, então ele portará colete balístico." Assinale a alternativa que apresenta a negação lógica correta dessa proposição:',
      alternativas: {
        A: 'Se o guarda municipal de Santana não estiver em serviço armado, então ele não portará colete balístico.',
        B: 'O guarda municipal de Santana está em serviço armado e não porta colete balístico.',
        C: 'O guarda municipal de Santana não está em serviço armado ou não porta colete balístico.',
        D: 'Se o guarda municipal de Santana portar colete balístico, então ele estará em serviço armado.',
        E: 'O guarda municipal de Santana não está em serviço armado e porta colete balístico.'
      },
      gabarito: 'B',
      explicacaoGeral: 'Regra de Negação da Condicional (p ➔ q): A negação de "Se p, então q" é dada logicamente por "p ∧ ~q" (Regra do MANÉ: Mantém a primeira E Nega a segunda). Logo: "O guarda está em serviço armado E NÃO porta colete balístico".',
      analiseAlternativas: {
        A: 'Incorreta. A negação de uma condicional NUNCA gera outra condicional do tipo "se... então"!',
        B: 'Correta! Aplicação exata da regra do MANÉ: preserva-se o antecedente e nega-se o consequente mediante o conectivo "E".',
        C: 'Incorreta. Essa estrutura corresponde à equivalência lógica (~p ∨ ~q), mas não à negação da condicional.',
        D: 'Incorreta. Trata-se da proposição recíproca (q ➔ p), que não equivale nem nega a original.',
        E: 'Incorreta. Negou a primeira e manteve a segunda, violando a regra fundamental do cálculo proposicional.'
      },
      referenciaFonte: {
        diplomaLegal: 'Lógica Proposicional — Negação de Proposições Compostas e Leis de De Morgan',
        secaoMaterial: 'Pasta 02_Matematica_e_Raciocinio_Logico/03_Logica_Proposicional_Tabela_Verdade_e_Argumentacao.pdf',
        detalhe: 'Regra do MANÉ: ~(p ➔ q) ≡ p ∧ ~q.'
      }
    },

    // --- HISTÓRIA DO AMAPÁ E SANTANA (IDCAP) ---
    {
      id: 'q_idcap_hist_01',
      disciplinaId: 'disc_hist',
      dificuldade: 'Média/Difícil',
      origem: 'Padrão IDCAP — História do Amapá (Laudo Suíço e Cabralzinho)',
      enunciado: 'No contexto do Contestado Franco-Brasileiro no final do século XIX, a disputa territorial entre o Brasil e a França ganhou contornos bélicos com a invasão da Vila do Amapá em maio de 1895 por tropas estrangeiras. Sobre esse conflito e seu desfecho diplomático, assinale a afirmativa correta:',
      alternativas: {
        A: 'O capitão francês Lunier assumiu o controle definitivo de Macapá após a assinatura do Tratado de Madrid.',
        B: 'Francisco Xavier da Veiga Cabral, o "Cabralzinho", liderou a reação armada brasileira que expulsou as tropas francesas e abateu o capitão Lunier na Vila do Amapá.',
        C: 'A disputa territorial foi decidida em favor da França pelo Laudo de Berna em 1914.',
        D: 'O Barão do Rio Branco defendeu que a fronteira natural entre o Brasil e a Guiana Francesa deveria ser fixada no rio Araguari.',
        E: 'O imperador Dom Pedro II assinou a rendição da região do Cabo Norte durante a Guerra da Tríplice Aliança.'
      },
      gabarito: 'B',
      explicacaoGeral: 'Em 15 de maio de 1895, o capitão francês Lunier invadiu a Vila do Amapá para libertar aliados franceses. Francisco Xavier da Veiga Cabral (Cabralzinho) comandou a heróica resistência amapaense, resultando na morte do capitão Lunier e na expulsão dos invasores. Posteriormente, em 1º de dezembro de 1900, o Laudo Suíço proferido por Walter Hauser e defendido pelo Barão do Rio Branco concedeu vitória integral ao Brasil, fixando o rio Oiapoque como fronteira oficial.',
      analiseAlternativas: {
        A: 'Incorreta. O capitão Lunier foi derrotado e morto pelas forças de Cabralzinho em 1895.',
        B: 'Correta! Cabralzinho é o herói histórico do Amapá responsável pela liderança no combate contra a intrusão francesa.',
        C: 'Incorreta. O Laudo Suíço ocorreu em 1º de dezembro de 1900 e foi integralmente favorável ao Brasil.',
        D: 'Incorreta. A França é quem pleiteava o rio Araguari; o Brasil (Rio Branco) defendeu com sucesso o rio Oiapoque (Tratado de Utrecht de 1713).',
        E: 'Incorreta. O Brasil nunca cedeu a região do Cabo Norte, tendo integrado a área em definitivo à sua soberania.'
      },
      referenciaFonte: {
        diplomaLegal: 'Historiografia do Amapá — Contestado Franco-Brasileiro e Laudo Suíço de 1900',
        secaoMaterial: 'Pasta 03_Historia_do_Amapa_e_Santana/01_Formacao_Colonial_e_Contestado_Franco_Brasileiro.pdf',
        detalhe: 'Batalha de 15 de Maio de 1895 (Cabralzinho) e Laudo de Berna de 1º de dezembro de 1900.'
      }
    },

    // --- GEOGRAFIA DO AMAPÁ E SANTANA (IDCAP) ---
    {
      id: 'q_idcap_geog_01',
      disciplinaId: 'disc_geog',
      dificuldade: 'Média',
      origem: 'Padrão IDCAP — Geografia de Santana e Rede Urbana',
      enunciado: 'O município de Santana, conhecido como a "Cidade-Porto do Amapá", possui posição estratégica na rede urbana e logística regional. Acerca de sua geografia física e econômica, é correto afirmar que:',
      alternativas: {
        A: 'Situa-se no extremo norte do estado, fazendo limite internacional imediato com o território da Guiana Francesa.',
        B: 'Localiza-se às margens do Canal Norte do rio Amazonas, dispondo de calado natural profundo que permite a atracação de navios oceânicos de grande tonelagem.',
        C: 'É o município mais extenso do Amapá, superando a área territorial de Laranjal do Jari e Oiapoque juntos.',
        D: 'Tem sua economia baseada exclusivamente na extração da borracha natural e na ausência completa de atividades industriais.',
        E: 'Não possui nenhuma área insular, sendo seu relevo 100% montanhoso com altitudes acima de 1.200 metros.'
      },
      gabarito: 'B',
      explicacaoGeral: 'Santana localiza-se no sudeste do Amapá, conurbada com Macapá, banhada pelo Canal Norte do rio Amazonas. Essa localização confere-lhe a condição de maior polo portuário e logístico do estado (Companhia Docas de Santana - CDSA e Distrito Industrial no rio Matapi), graças à grande profundidade natural de suas águas (calado profundo).',
      analiseAlternativas: {
        A: 'Incorreta. Santana fica no sudeste do Amapá; o município do extremo norte na fronteira com a Guiana Francesa é Oiapoque.',
        B: 'Correta! A grande profundidade do Canal Norte do Amazonas em Santana viabiliza a navegação de grandes cargueiros e navios graneleiros.',
        C: 'Incorreta. Santana possui área territorial modesta (~1.541 km²), sendo o segundo mais populoso, mas longe de ser o mais extenso.',
        D: 'Incorreta. Santana abriga o Distrito Industrial do Amapá e expressivo comércio portuário, atacadista e de grãos.',
        E: 'Incorreta. Santana possui importantes ilhas fluviais, destacando-se a histórica Ilha de Santana em frente à cidade.'
      },
      referenciaFonte: {
        diplomaLegal: 'Geografia do Amapá — Hidrografia, Organização Espacial e Logística Portuária de Santana',
        secaoMaterial: 'Pasta 04_Geografia_do_Amapa_e_Santana/03_Geografia_do_Municipio_de_Santana_Porto_Distritos_e_Organizacao.pdf',
        detalhe: 'Porto de Santana, Canal Norte do Rio Amazonas e Distrito Industrial do Matapi.'
      }
    },

    // --- LEGISLAÇÃO DA GCM (IDCAP) ---
    {
      id: 'q_idcap_gcm_01',
      disciplinaId: 'disc_gcm_leg',
      dificuldade: 'Média/Difícil',
      origem: 'Padrão IDCAP — Lei Federal 13.022/2014 e LC 81/2026',
      enunciado: 'Nos termos expressos do Estatuto Geral das Guardas Municipais (Lei Federal nº 13.022/2014), constituem princípios mínimos de atuação das guardas municipais, EXCETO:',
      alternativas: {
        A: 'Proteção dos direitos humanos fundamentais, do exercício da cidadania e das liberdades públicas.',
        B: 'Preservação da vida, redução do sofrimento e diminuição das perdas.',
        C: 'Patrulhamento preventivo e compromisso com a evolução social da comunidade.',
        D: 'Uso progressivo da força.',
        E: 'Subordinação operacional direta ao Comando da Polícia Militar estadual e aplicação do Código Penal Militar.'
      },
      gabarito: 'E',
      explicacaoGeral: 'O artigo 3º da Lei Federal nº 13.022/2014 consagra exatamente 5 princípios mínimos (Mnemônico P-P-P-C-U): 1) Proteção dos direitos humanos fundamentais; 2) Preservação da vida; 3) Patrulhamento preventivo; 4) Compromisso com a evolução social; 5) Uso progressivo da força. As guardas municipais possuem natureza eminentemente CIVIL (art. 2º), sendo vedada qualquer estrutura ou subordinação militar!',
      analiseAlternativas: {
        A: 'Princípio legítimo previsto no art. 3º, inciso I da Lei 13.022/2014.',
        B: 'Princípio legítimo previsto no art. 3º, inciso II da Lei 13.022/2014.',
        C: 'Princípios legítimos previstos no art. 3º, incisos III e IV da Lei 13.022/2014.',
        D: 'Princípio legítimo previsto no art. 3º, inciso V da Lei 13.022/2014.',
        E: 'Gabarito da questão (Exceção)! As guardas municipais têm caráter estritamente civil, subordinadas ao Chefe do Poder Executivo Municipal (Prefeito).'
      },
      referenciaFonte: {
        diplomaLegal: 'Lei Federal nº 13.022/2014 — Artigo 2º e Artigo 3º (Princípios Mínimos)',
        secaoMaterial: 'Pasta 05_Legislacao_da_Guarda_Civil_Municipal/01_Estatuto_Geral_das_Guardas_Municipais_Lei_13022_2014.pdf',
        detalhe: 'Natureza civil da Guarda Municipal e rol taxativo dos princípios mínimos de atuação.'
      }
    },
    {
      id: 'q_idcap_gcm_02',
      disciplinaId: 'disc_gcm_leg',
      dificuldade: 'Difícil',
      origem: 'Padrão IDCAP — Lei Federal nº 13.060/2014 e Decreto nº 12.341/2024',
      enunciado: 'A Lei Federal nº 13.060/2014 e seu regulamento (Decreto Federal nº 12.341/2024) disciplinam o uso da força e dos instrumentos de menor potencial ofensivo pelos profissionais de segurança pública. Nos termos dessa legislação, assinale a hipótese em que o disparo de arma de fogo é expressamente PROIBIDO:',
      alternativas: {
        A: 'Em legítima defesa real contra agressor armado que efetua disparos contra a guarnição.',
        B: 'Para neutralizar indivíduo em atitude de tomada de refém com faca no pescoço da vítima.',
        C: 'Contra pessoa em fuga que esteja desarmada ou que, mesmo armada, não represente risco imediato de morte ou de lesão grave aos agentes de segurança ou a terceiros.',
        D: 'Para repelir agressão iminente a direito próprio quando esgotados os meios não letais.',
        E: 'Em situação de confronto armado para cessar agressão grave e atual.'
      },
      gabarito: 'C',
      explicacaoGeral: 'O parágrafo único do artigo 2º da Lei nº 13.060/2014 é categórico: NÃO é legítimo o uso de arma de fogo: I - contra pessoa em fuga que esteja desarmada ou que não represente risco imediato de morte ou lesão grave; II - contra veículo que desrespeite bloqueio policial em via pública, exceto quando o ato represente risco imediato de morte ou lesão grave aos agentes ou a terceiros.',
      analiseAlternativas: {
        A: 'Incorreta. Em legítima defesa real contra disparos de arma de fogo, o uso da força letal é autorizado por necessidade.',
        B: 'Incorreta. Na situação de tomada de refém com risco de morte, o disparo defensivo de precisão é amparado pela legítima defesa de terceiro.',
        C: 'Correta! É vedação expressa e textual do art. 2º, parágrafo único, inciso I da Lei Federal nº 13.060/2014.',
        D: 'Incorreta. Esgotados os meios não letais e havendo agressão injusta grave, o ordenamento ampara a defesa.',
        E: 'Incorreta. No confronto armado direto, o agente atua para cessar agressão injusta e atual.'
      },
      referenciaFonte: {
        diplomaLegal: 'Lei Federal nº 13.060/2014 — Art. 2º, Parágrafo Único e Decreto Federal nº 12.341/2024',
        secaoMaterial: 'Pasta 05_Legislacao_da_Guarda_Civil_Municipal/02_SUSP_Lei_13675_e_Uso_da_Forca_Dec_12341_2024.pdf',
        detalhe: 'Vedações imperativas de disparo de arma de fogo contra fugitivos desarmados e bloqueios.'
      }
    },

    // --- LEGISLAÇÃO ESPECIAL (IDCAP) ---
    {
      id: 'q_idcap_leg_esp_01',
      disciplinaId: 'disc_leg_esp',
      dificuldade: 'Média',
      origem: 'Banca IDCAP — Lei de Abuso de Autoridade (Lei 13.869/2019)',
      enunciado: 'Nos termos da Lei Federal nº 13.869/2019 (Nova Lei de Abuso de Autoridade), as condutas tipificadas como crime somente serão punidas quando praticadas com finalidade específica. Sobre o elemento subjetivo do tipo nessa lei, assinale a afirmativa correta:',
      alternativas: {
        A: 'Admite-se a modalidade culposa quando o agente agir com imperícia no manuseio de armamento.',
        B: 'A divergência na interpretação de lei ou na avaliação de fatos e provas não configura, por si só, abuso de autoridade.',
        C: 'O crime de abuso de autoridade prescinde de comprovação de dolo específico.',
        D: 'O servidor que discordar do parecer jurídico de seu superior comete crime inafiançável de abuso.',
        E: 'A condenação criminal por abuso acarreta sempre a pena de morte ou prisão perpétua.'
      },
      gabarito: 'B',
      explicacaoGeral: 'O art. 1º, § 2º da Lei nº 13.869/2019 expressamente estabelece que "a divergência na interpretação de lei ou na avaliação de fatos e provas não configura abuso de autoridade". Além disso, todos os crimes da lei exigem dolo com elemento subjetivo específico (prejudicar outrem, beneficiar a si ou a terceiro, ou por mero capricho/satisfação pessoal — art. 1º, § 1º).',
      analiseAlternativas: {
        A: 'Incorreta. NÃO existe crime culposo de abuso de autoridade!',
        B: 'Correta! É a regra protetiva contra o chamado "crime de hermenêutica" expressa no art. 1º, § 2º da lei.',
        C: 'Incorreta. O dolo específico é elemento indispensável para a configuração do tipo penal.',
        D: 'Incorreta. A divergência técnica e interpretativa é plenamente lícita no ordenamento.',
        E: 'Incorreta. A Constituição proíbe penas de morte (salvo guerra declarada) e de caráter perpétuo (art. 5º, XLVII).'
      },
      referenciaFonte: {
        diplomaLegal: 'Lei Federal nº 13.869/2019 — Artigo 1º, §§ 1º e 2º',
        secaoMaterial: 'Pasta 06_Legislacao_Especial/01_Lei_Maria_da_Penha_e_Abuso_de_Autoridade.pdf',
        detalhe: 'Dolo específico de abuso de autoridade e vedação expressa à punição por divergência hermenêutica.'
      }
    },

    // --- DIREITO CONSTITUCIONAL (IDCAP) ---
    {
      id: 'q_idcap_const_01',
      disciplinaId: 'disc_const',
      dificuldade: 'Média',
      origem: 'Banca IDCAP — Artigo 5º (Inviolabilidade do Domicílio)',
      enunciado: 'Segundo o art. 5º, inciso XI, da Constituição Federal de 1988, a casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo em determinadas hipóteses expressas. Diante disso, a entrada forçada com amparo exclusivo em DETERMINAÇÃO JUDICIAL poderá ocorrer:',
      alternativas: {
        A: 'A qualquer hora do dia ou da noite, desde que com mandado assinado por juiz de direito.',
        B: 'Durante a noite, desde que acompanhada por no mínimo dois guardas municipais como testemunhas.',
        C: 'Apenas aos finais de semana e feriados no período diurno.',
        D: 'Somente durante o dia.',
        E: 'A qualquer momento, mediante ordem verbal de autoridade policial.'
      },
      gabarito: 'D',
      explicacaoGeral: 'Regra constitucional do domicílio (art. 5º, XI): 1) A qualquer hora (dia ou noite): em caso de flagrante delito, desastre ou para prestar socorro; 2) Apenas durante o dia: por determinação judicial.',
      analiseAlternativas: {
        A: 'Incorreta. O mandado judicial NUNCA autoriza entrada noturna forçada em residência.',
        B: 'Incorreta. A presença de testemunhas não afasta a proibição constitucional de cumprimento de mandado à noite.',
        C: 'Incorreta. O cumprimento ocorre em dias úteis durante o dia, não se restringindo a feriados.',
        D: 'Correta! Determinação judicial só autoriza o ingresso domiciliar durante o período diurno.',
        E: 'Incorreta. Ordem verbal não supre a exigência indelegável de determinação judicial escrita fundamentada.'
      },
      referenciaFonte: {
        diplomaLegal: 'Constituição Federal de 1988 — Artigo 5º, Inciso XI',
        secaoMaterial: 'Pasta 07_Direito_Constitucional/01_Teoria_Constitucional_Principios_e_Artigo_5.pdf',
        detalhe: 'Garantia fundamental da inviolabilidade do domicílio e limites temporais da ordem judicial.'
      }
    },

    // --- DIREITO ADMINISTRATIVO (IDCAP) ---
    {
      id: 'q_idcap_adm_01',
      disciplinaId: 'disc_adm',
      dificuldade: 'Média/Difícil',
      origem: 'Banca IDCAP — Lei de Improbidade (Lei 8.429/92 atualizada)',
      enunciado: 'Com as alterações promovidas pela Lei Federal nº 14.230/2021 na Lei de Improbidade Administrativa (Lei nº 8.429/1992), assinale a alternativa que está em estrita consonância com a disciplina legal em vigor:',
      alternativas: {
        A: 'Mantiveram-se puníveis como improbidade os atos que causem lesão ao erário cometidos a título de culpa culposa grave.',
        B: 'Exige-se a demonstração de dolo específico para a caracterização de qualquer ato de improbidade administrativa, tendo sido extinta a modalidade culposa.',
        C: 'O agente que atentar contra os princípios da administração pública fica sujeito à perda automática dos direitos políticos por 20 anos.',
        D: 'A ação de improbidade pode ser ajuizada privativamente pela autoridade policial de trânsito.',
        E: 'A condenação por improbidade administrativa não admite ressarcimento financeiro.'
      },
      gabarito: 'B',
      explicacaoGeral: 'A reforma da Lei 14.230/2021 extinguiu expressamente a modalidade culposa na improbidade administrativa. Agora, todos os atos dos arts. 9º, 10 e 11 exigem DOLO ESPECÍFICO (art. 1º, §§ 1º, 2º e 3º). Além disso, não há mais suspensão de direitos políticos para o art. 11 (princípios).',
      analiseAlternativas: {
        A: 'Incorreta. A culpa foi integralmente expurgada da Lei de Improbidade Administrativa.',
        B: 'Correta! O dolo específico é requisito indispensável para a configuração de qualquer ato de improbidade.',
        C: 'Incorreta. No art. 11 não há mais sanção de suspensão de direitos políticos!',
        D: 'Incorreta. A legitimação ativa é privativa do Ministério Público (art. 17).',
        E: 'Incorreta. O ressarcimento ao erário é mandatório sempre que houver dano efetivo comprovado.'
      },
      referenciaFonte: {
        diplomaLegal: 'Lei Federal nº 8.429/1992 atualizada pela Lei nº 14.230/2021 — Art. 1º e Art. 11',
        secaoMaterial: 'Pasta 08_Direito_Administrativo/02_Servidores_Publicos_Responsabilidade_e_Improbidade.pdf',
        detalhe: 'Exigência universal de dolo específico e extinção da improbidade culposa.'
      }
    },

    // --- DIREITO PENAL (IDCAP) ---
    {
      id: 'q_idcap_penal_01',
      disciplinaId: 'disc_penal',
      dificuldade: 'Média',
      origem: 'Banca IDCAP — Crimes Praticados por Funcionário Público',
      enunciado: 'O guarda municipal que, valendo-se das facilidades de seu cargo e de sua lotação em prédio público municipal, EXIGE para si determinada quantia em dinheiro de um cidadão para liberar uma documentação, comete o crime de:',
      alternativas: {
        A: 'Peculato culposo.',
        B: 'Prevaricação.',
        C: 'Concussão.',
        D: 'Corrupção passiva.',
        E: 'Condescendência criminosa.'
      },
      gabarito: 'C',
      explicacaoGeral: 'No Código Penal Brasileiro: EXIGIR vantagem indevida = CONCUSSÃO (art. 316). SOLICITAR ou RECEBER vantagem indevida = CORRUPÇÃO PASSIVA (art. 317). Retardar ou omitir ato para satisfazer interesse ou sentimento pessoal = PREVARICAÇÃO (art. 319). Deixar de punir subordinado por pena/indulgência = CONDESCENDÊNCIA CRIMINOSA (art. 320).',
      analiseAlternativas: {
        A: 'Incorreta. Peculato culposo ocorre quando o servidor concorre por negligência para que outrem subtraia bem público.',
        B: 'Incorreta. Prevaricação exige agir por interesse ou sentimento pessoal, sem exigir propina.',
        C: 'Correta! O verbo nuclear "EXIGIR" é a marca inconfundível do crime de concussão (art. 316 do CP).',
        D: 'Incorreta. Se o agente exige, não é corrupção passiva (cujos núcleos são solicitar, receber ou aceitar promessa).',
        E: 'Incorreta. Condescendência criminosa é a omissão tolerante por indulgência com subordinado infrator.'
      },
      referenciaFonte: {
        diplomaLegal: 'Código Penal Brasileiro — Artigo 316 (Concussão) vs. Artigo 317 (Corrupção Passiva)',
        secaoMaterial: 'Pasta 09_Direito_Penal/02_Crimes_em_Especie_Pessoa_Patrimonio_e_Administracao.pdf',
        detalhe: 'Diferenciação dogmática entre exigir (concussão) e solicitar/receber (corrupção passiva).'
      }
    },

    // --- DIREITOS HUMANOS (IDCAP) ---
    {
      id: 'q_idcap_dh_01',
      disciplinaId: 'disc_dh',
      dificuldade: 'Média',
      origem: 'Banca IDCAP — Súmula Vinculante 11 e Uso de Algemas',
      enunciado: 'Conforme a jurisprudência sumulada do Supremo Tribunal Federal (Súmula Vinculante nº 11), o uso de algemas pelo agente de segurança pública durante uma abordagem:',
      alternativas: {
        A: 'É obrigatório em todas as conduções policiais sem necessidade de justificação.',
        B: 'É vedado em qualquer hipótese, mesmo diante de confronto armado.',
        C: 'É medida excepcional, autorizada apenas em casos de resistência, fundado receio de fuga ou perigo à integridade física própria ou alheia, justificada a excepcionalidade por escrito.',
        D: 'Depende de autorização verbal prévia de juiz plantonista.',
        E: 'Só pode ser empregado contra menores de dezoito anos.'
      },
      gabarito: 'C',
      explicacaoGeral: 'A Súmula Vinculante nº 11 do STF define que o uso de algemas é medida excepcional, somente admitida nas hipóteses do mnemônico PR-RE-PE: 1) Resistência; 2) Fundado Receio de fuga; 3) Perigo à integridade física própria ou alheia. A excepcionalidade DEVE ser justificada por escrito, sob pena de responsabilidade do agente e nulidade da prisão.',
      analiseAlternativas: {
        A: 'Incorreta. A Súmula Vinculante 11 veda o uso indiscriminado e automático de algemas.',
        B: 'Incorreta. As algemas continuam sendo lícitas nas situações taxativas de segurança e resistência.',
        C: 'Correta! Reprodução exata dos requisitos de validade da Súmula Vinculante 11.',
        D: 'Incorreta. Não exige autorização judicial prévia, mas justificativa por escrito pelo próprio agente.',
        E: 'Incorreta. Contra adolescentes infratores aplicam-se ainda com mais rigor as cautelas do ECA e da Súmula 11.'
      },
      referenciaFonte: {
        diplomaLegal: 'Supremo Tribunal Federal — Súmula Vinculante nº 11 e Princípios Básicos da ONU',
        secaoMaterial: 'Pasta 10_Direitos_Humanos/02_Direitos_Humanos_na_Seguranca_Publica_e_Policia_Comunitaria.pdf',
        detalhe: 'Condições estritas de legalidade para uso de algemas e garantia da dignidade da pessoa detida.'
      }
    }
  ],
  flashcards: [
    {
      id: 'fc_idcap_01',
      disciplinaId: 'disc_gcm_leg',
      frente: 'Quais são os 5 Princípios Mínimos de Atuação das Guardas Municipais (Lei Federal 13.022/2014, art. 3º)?',
      verso: 'Mnemônico "P-P-P-C-U":\n1. Proteção dos direitos humanos fundamentais e liberdades;\n2. Preservação da vida, redução do sofrimento e perdas;\n3. Patrulhamento preventivo;\n4. Compromisso com a evolução social da comunidade;\n5. Uso progressivo da força.',
      referenciaFonte: 'Lei 13.022/2014, Art. 3º | Pasta 05_Legislacao_da_Guarda_Civil_Municipal'
    },
    {
      id: 'fc_idcap_02',
      disciplinaId: 'disc_gcm_leg',
      frente: 'Em quais situações é expressamente PROIBIDO o disparo de arma de fogo na Lei 13.060/2014 (art. 2º, parágrafo único)?',
      verso: '1. Contra pessoa em fuga desarmada ou que não represente risco imediato de morte/lesão grave;\n2. Contra veículo que desrespeite bloqueio policial em via pública (exceto se o ato criar risco imediato de morte/lesão grave).',
      referenciaFonte: 'Lei 13.060/2014 e Decreto 12.341/2024 | Pasta 05_Legislacao_da_Guarda_Civil_Municipal'
    },
    {
      id: 'fc_idcap_03',
      disciplinaId: 'disc_hist',
      frente: 'O que foi o Laudo Suíço de 1900 e quem defendeu a causa brasileira?',
      verso: 'Arbitramento internacional presidido por Walter Hauser (Suíça) que encerrou o Contestado Franco-Brasileiro em favor do Brasil, confirmando o rio Oiapoque como fronteira oficial com a Guiana Francesa. O Brasil foi brilhantemente defendido pelo diplomata Barão do Rio Branco.',
      referenciaFonte: 'Laudo de Berna de 1º de Dezembro de 1900 | Pasta 03_Historia_do_Amapa_e_Santana'
    },
    {
      id: 'fc_idcap_04',
      disciplinaId: 'disc_geog',
      frente: 'Qual a principal vantagem comparativa e econômica do Porto de Santana?',
      verso: 'Sua localização no Canal Norte do rio Amazonas, com calado profundo natural (superior a 11 metros), permitindo o atracamento de grandes navios oceânicos para escoamento de grãos, madeira, minérios e circulação de cargas com o mundo.',
      referenciaFonte: 'Geografia Econômica de Santana | Pasta 04_Geografia_do_Amapa_e_Santana'
    },
    {
      id: 'fc_idcap_05',
      disciplinaId: 'disc_penal',
      frente: 'Qual a diferença crucial entre CONCUSSÃO e CORRUPÇÃO PASSIVA no Código Penal?',
      verso: '• CONCUSSÃO (Art. 316): O funcionário público EXIGE a vantagem indevida em razão do cargo.\n• CORRUPÇÃO PASSIVA (Art. 317): O funcionário SOLICITA, RECEBE ou ACEITA PROMESSA de vantagem indevida.',
      referenciaFonte: 'Código Penal, Arts. 316 e 317 | Pasta 09_Direito_Penal'
    },
    {
      id: 'fc_idcap_06',
      disciplinaId: 'disc_const',
      frente: 'Quais as hipóteses de entrada em domicílio sem consentimento (CF/88, art. 5º, XI)?',
      verso: '• A qualquer hora (dia ou noite): Flagrante delito, desastre ou para prestar socorro;\n• SOMENTE DURANTE O DIA: Por determinação judicial.',
      referenciaFonte: 'CF/88, Art. 5º, XI | Pasta 07_Direito_Constitucional'
    },
    {
      id: 'fc_idcap_07',
      disciplinaId: 'disc_dh',
      frente: 'Quando é lícito o uso de algemas segundo a Súmula Vinculante 11 do STF?',
      verso: 'Mnemônico PR-RE-PE:\n1. Resistência;\n2. Fundado Receio de fuga;\n3. Perigo à integridade física própria ou alheia.\n⚠️ Obrigatório justificar por escrito a excepcionalidade sob pena de nulidade da prisão.',
      referenciaFonte: 'Súmula Vinculante nº 11/STF | Pasta 10_Direitos_Humanos'
    },
    {
      id: 'fc_idcap_08',
      disciplinaId: 'disc_adm',
      frente: 'Ainda existe improbidade administrativa na modalidade culposa após a Lei 14.230/2021?',
      verso: 'NÃO! Toda e qualquer modalidade de improbidade administrativa (arts. 9º, 10 e 11 da Lei 8.429/92) agora exige DOLO ESPECÍFICO (vontade livre e consciente de alcançar o resultado ilícito).',
      referenciaFonte: 'Lei 8.429/92 atualizada pela Lei 14.230/2021 | Pasta 08_Direito_Administrativo'
    }
  ],
  matrizGeradorInfinito: [
    // Proposições Certas e Erradas para síntese combinatória no padrão IDCAP
    {
      disciplinaId: 'disc_gcm_leg',
      tema: 'Estatuto Geral das Guardas Municipais (Lei 13.022/2014)',
      correta: 'As guardas municipais são instituições de caráter estritamente civil, uniformizadas e armadas, cabendo-lhes a proteção municipal preventiva ressalvadas as competências da União e dos Estados.',
      distratores: [
        'As guardas municipais subordinam-se administrativamente ao Comando Geral do Exército Brasileiro e adotam patentes militares.',
        'É proibido aos municípios criar guardas municipais com contingente armado em cidades com população inferior a 500 mil habitantes.',
        'O controle externo da guarda municipal é exercido de forma privativa e indelegável pela Corregedoria interna da própria corporação.',
        'Os guardas municipais são impedidos de realizar prisões em flagrante delito, cabendo-lhes apenas observar as ocorrências à distância.'
      ],
      explicacao: 'O artigo 2º da Lei 13.022/2014 define o caráter civil da corporação. As guardas podem portar arma em qualquer município conforme fixado pelo STF (ADPF 995), o controle externo é da Ouvidoria e qualquer pessoa pode prender em flagrante (art. 301 do CPP).',
      fonte: 'Lei 13.022/2014, Arts. 2º, 10, 13 e STF ADPF 995 | Pasta 05_Legislacao_da_Guarda_Civil_Municipal'
    },
    {
      disciplinaId: 'disc_gcm_leg',
      tema: 'Estatuto dos Servidores da GCMS (LC nº 81/2026 de Santana)',
      correta: 'O ingresso no cargo de Guarda Civil Municipal de Santana depende obrigatoriamente de aprovação em concurso público com avaliação psicológica, aptidão física e curso de formação profissional.',
      distratores: [
        'O concurso público para a GCM Santana é composto unicamente por prova de títulos, sendo dispensado o teste de aptidão física.',
        'O servidor da GCM Santana tem permissão legal para exercer o comércio de armas de fogo particulares durante o seu horário de expediente.',
        'O regime disciplinar da GCM Santana admite a aplicação de penas de reclusão administrativa sem direito de defesa.',
        'A carreira da GCM Santana não admite promoção funcional, permanecendo o servidor na mesma classe até a aposentadoria.'
      ],
      explicacao: 'Conforme a Lei Orgânica de Santana (art. 78) e a LC 81/2026, o provimento originário exige concurso com etapas eliminatórias de TAF, avaliação psicológica, exames médicos e curso de formação.',
      fonte: 'Lei Orgânica de Santana, Art. 78 e LC Municipal nº 81/2026 | Pasta 05_Legislacao_da_Guarda_Civil_Municipal'
    },
    {
      disciplinaId: 'disc_leg_esp',
      tema: 'Lei Maria da Penha (Lei 11.340/2006) e Medidas Protetivas',
      correta: 'O descumprimento de medidas protetivas de urgência deferidas pelo juiz constitui crime autônomo punido com pena de detenção de 3 meses a 2 anos, sendo vedado ao delegado de polícia arbitrar fiança na fase policial.',
      distratores: [
        'A violência psicológica contra a mulher não é reconhecida como forma de violência doméstica na Lei Maria da Penha.',
        'O crime de descumprimento de medida protetiva admite a concessão imediata de fiança pela autoridade policial de plantão.',
        'A Lei Maria da Penha aplica-se exclusivamente quando houver coabitação sob o mesmo teto no momento da agressão.',
        'A renúncia à representação pela ofendida pode ser formalizada verbalmente perante a guarnição da Guarda Municipal no local da ocorrência.'
      ],
      explicacao: 'Pelo art. 24-A da Lei 11.340/2006, o descumprimento de medida protetiva é crime formal e apenas o juiz pode conceder fiança (§ 2º). A renúncia à representação só pode ser feita perante o juiz em audiência especial (art. 16).',
      fonte: 'Lei Federal nº 11.340/2006, Arts. 7º, 16 e 24-A | Pasta 06_Legislacao_Especial'
    },
    {
      disciplinaId: 'disc_hist',
      tema: 'Criação do Território Federal do Amapá e Era do Manganês',
      correta: 'O Território Federal do Amapá foi criado em 1943 pelo Presidente Getúlio Vargas no contexto da Segunda Guerra Mundial, tendo como primeiro governador Janary Gentil Nunes.',
      distratores: [
        'O Amapá foi emancipado como Estado independente diretamente em 1822 por Dom Pedro I durante o Grito do Ipiranga.',
        'A exploração de manganês em Serra do Navio pela empresa ICOMI teve início no século XVIII sob patrocínio de colonos franceses.',
        'O primeiro governador eleito por voto popular no Amapá assumiu o mandato em 1944.',
        'A Estrada de Ferro do Amapá foi construída para ligar Santana a Brasília.'
      ],
      explicacao: 'O Decreto-Lei 5.812/1943 criou o Território Federal do Amapá, governado por Janary Nunes. A ICOMI explorou o manganês a partir dos anos 1950 com a ferrovia ligando Serra do Navio a Santana.',
      fonte: 'Decreto-Lei nº 5.812/1943 e Historiografia Amapaense | Pasta 03_Historia_do_Amapa_e_Santana'
    },
    {
      disciplinaId: 'disc_geog',
      tema: 'Distribuição Demográfica e Unidades de Conservação do Amapá',
      correta: 'O Amapá destaca-se por abrigar mais de 70% de seu território em áreas protegidas (como o Parque Nacional Montanhas do Tumucumaque) e por concentrar cerca de três quartos de sua população em Macapá e Santana.',
      distratores: [
        'O Amapá possui a maior malha rodoviária federal asfaltada do país, interligada a todos os estados do Centro-Oeste.',
        'A população do Amapá é predominantemente rural, residindo menos de 10% nas cidades.',
        'O Parque Nacional Montanhas do Tumucumaque é a menor unidade de conservação da América do Sul.',
        'O rio Amazonas não banha nenhum município do território amapaense.'
      ],
      explicacao: 'O Amapá tem mais de 90% de taxa de urbanização, com forte concentração urbana em Macapá e Santana, e o Parque do Tumucumaque é o maior parque nacional do Brasil e maior floresta tropical protegida do mundo.',
      fonte: 'Geografia do Amapá (IBGE e ICMBio) | Pasta 04_Geografia_do_Amapa_e_Santana'
    },
    {
      disciplinaId: 'disc_penal',
      tema: 'Teoria do Crime e Excludentes de Ilicitude',
      correta: 'Constituem causas excludentes de ilicitude no Código Penal o estado de necessidade, a legítima defesa, o estrito cumprimento do dever legal e o exercício regular de direito, respondendo o agente pelo excesso doloso ou culposo.',
      distratores: [
        'O agente que atua em legítima defesa está isento de qualquer responsabilidade mesmo que pratique atos de vingança com excesso doloso.',
        'A legítima defesa autoriza a agressão contra perigo pretérito já cessado.',
        'O estrito cumprimento do dever legal afasta a culpabilidade, mas mantém a ilicitude do fato.',
        'A coação moral irresistível constitui excludente de ilicitude que ampara o porte de arma sem registro.'
      ],
      explicacao: 'O artigo 23 do Código Penal elenca as 4 excludentes de ilicitude e seu parágrafo único estabelece que o agente responde sempre pelo excesso doloso ou culposo.',
      fonte: 'Código Penal Brasileiro, Arts. 23, 24 e 25 | Pasta 09_Direito_Penal'
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = database;
}
if (typeof window !== 'undefined') {
  window.GCM_DATABASE = database;
}
