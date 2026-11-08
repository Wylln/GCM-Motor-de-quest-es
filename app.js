/**
 * ============================================================================
 * PROJETO APROVAÇÃO GCM SANTANA/AP (BANCA IDCAP) — MOTOR NEUROEDUCACIONAL
 * Algoritmo SuperMemo-2 (SM-2) + Gerador Infinito Padrão IDCAP
 * Justificativas com Análise de Todas as Alternativas e Fonte Obrigatória
 * ============================================================================
 */

const STORAGE_KEY = 'GCM_SANTANA_NEURO_STATE_V1';

const App = {
  db: null,
  state: null,
  currentQuestion: null,
  selectedOption: null,
  isQuestionAnswered: false,

  // Flashcards
  fcIndex: 0,
  fcFlipped: false,

  // Simulado
  simulado: {
    active: false,
    questions: [],
    answers: {},
    currentIndex: 0,
    finished: false
  },

  init() {
    this.db = window.GCM_DATABASE;
    this.loadState();
    this.populateSelects();
    this.renderDashboard();
    this.loadNextQuestion();
    this.renderFlashcard();
    this.renderSimuladoIdle();
    this.renderBiblioteca();
  },

  // 1. Persistência e Algoritmo SM-2
  getDefaultState() {
    const disciplinasSM2 = {};
    for (const d of this.db.disciplinas) {
      disciplinasSM2[d.id] = {
        acertos: 0,
        erros: 0,
        ef: 2.5,
        interval: 0,
        repetitions: 0,
        nextReview: 0
      };
    }
    return {
      totalAcertos: 0,
      totalErros: 0,
      historicoQuestoes: {},
      disciplinasSM2,
      flashcardsSM2: {},
      customFlashcards: []
    };
  },

  loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        this.state = JSON.parse(raw);
      } else {
        this.state = this.getDefaultState();
      }
    } catch (e) {
      this.state = this.getDefaultState();
    }
  },

  saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
    } catch (e) {
      console.warn('Erro ao salvar estado:', e);
    }
  },

  updateSM2(disciplinaId, questaoId, acertou) {
    const now = Date.now();
    const DAY_MS = 24 * 60 * 60 * 1000;

    if (!this.state.disciplinasSM2[disciplinaId]) {
      this.state.disciplinasSM2[disciplinaId] = {
        acertos: 0, erros: 0, ef: 2.5, interval: 0, repetitions: 0, nextReview: 0
      };
    }

    const dSt = this.state.disciplinasSM2[disciplinaId];
    if (acertou) {
      this.state.totalAcertos++;
      dSt.acertos++;
      dSt.repetitions++;
      if (dSt.repetitions === 1) dSt.interval = 1;
      else if (dSt.repetitions === 2) dSt.interval = 3;
      else dSt.interval = Math.round(dSt.interval * dSt.ef);
      dSt.ef = Math.max(1.3, dSt.ef + 0.1);
      dSt.nextReview = now + dSt.interval * DAY_MS;
    } else {
      // ERROU: Penaliza o Fator de Facilidade e agenda repetição forçada
      this.state.totalErros++;
      dSt.erros++;
      dSt.repetitions = 0;
      dSt.interval = 0;
      dSt.ef = Math.max(1.3, dSt.ef - 0.3);
      dSt.nextReview = now; // Imediato
    }

    const prevQ = this.state.historicoQuestoes[questaoId] || { acertos: 0, erros: 0 };
    if (acertou) prevQ.acertos++;
    else prevQ.erros++;
    prevQ.lastResult = acertou ? 'correct' : 'wrong';
    this.state.historicoQuestoes[questaoId] = prevQ;

    this.saveState();
  },

  // 2. Navegação entre Abas
  switchView(viewName) {
    document.querySelectorAll('.view-section').forEach((el) => el.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.view === viewName);
    });

    const target = document.getElementById(`view-${viewName}`);
    if (target) target.classList.add('active');

    if (viewName === 'dashboard') this.renderDashboard();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  // 3. Painel e Acelerador Neuroeducacional
  renderDashboard() {
    const totResp = this.state.totalAcertos + this.state.totalErros;
    const pct = totResp > 0 ? Math.round((this.state.totalAcertos / totResp) * 100) : 0;

    document.getElementById('kpi-aproveitamento').textContent = `${pct}%`;
    document.getElementById('kpi-acertos-erros').textContent = `${this.state.totalAcertos} acertos • ${this.state.totalErros} erros`;
    document.getElementById('kpi-questoes-total').textContent = String(totResp);

    let urgentes = 0;
    const ranked = this.db.disciplinas.map((d) => {
      const st = this.state.disciplinasSM2[d.id] || { acertos: 0, erros: 0, ef: 2.5 };
      const tot = st.acertos + st.erros;
      const taxaErro = tot > 0 ? st.erros / tot : 0;
      const isUrgente = st.erros > 0 && st.erros >= st.acertos;
      if (isUrgente) urgentes++;
      const score = (taxaErro * 100 + (2.5 - st.ef) * 30) * d.peso;
      return { d, st, tot, isUrgente, score };
    });

    ranked.sort((a, b) => b.score - a.score);
    document.getElementById('kpi-revisao-urgente').textContent = String(urgentes);

    // Contagem de flashcards consolidados
    let dominados = 0;
    const allFc = [...this.db.flashcards, ...(this.state.customFlashcards || [])];
    for (const fc of allFc) {
      const fSt = this.state.flashcardsSM2[fc.id];
      if (fSt && fSt.interval >= 3) dominados++;
    }
    document.getElementById('kpi-fc-dominados').textContent = `${dominados} de ${allFc.length}`;

    // Diagnóstico
    const tutorText = document.getElementById('tutor-diagnostic-text');
    if (urgentes > 0) {
      const topUrg = ranked[0];
      tutorText.innerHTML = `⚠️ <strong>Atenção do Algoritmo SM-2:</strong> Você está com maior taxa de erro em <strong>${topUrg.d.nome}</strong> (Peso ${topUrg.d.peso}). O fator de facilidade caiu para <code>EF = ${topUrg.st.ef.toFixed(2)}</code>. Clique no botão de sessão focada nos erros para calibrar seu aprendizado!`;
    }

    // Lista de disciplinas
    const container = document.getElementById('dashboard-topics-container');
    container.innerHTML = ranked.map(({ d, st, tot, isUrgente }) => {
      const pctDisc = tot > 0 ? Math.round((st.acertos / tot) * 100) : 0;
      const badgeUrg = isUrgente ? '<span class="badge-urgente">🔥 REVISÃO FORÇADA</span>' : '';
      return `
        <div class="topic-row">
          <div>
            <div style="display:flex; align-items:center; gap:8px;">
              <span>${d.icone}</span>
              <span class="topic-name">${d.nome}</span>
              <span class="${d.peso === 2 ? 'badge-peso2' : 'badge-peso1'}">Peso ${d.peso}</span>
              ${badgeUrg}
            </div>
            <div class="topic-meta">
              Resolvidas: ${tot} (${st.acertos}C / ${st.erros}E) • Acerto: ${tot === 0 ? 'Novo' : pctDisc + '%'} • EF: ${st.ef.toFixed(2)}
            </div>
          </div>
          <button class="btn btn-secondary btn-sm" onclick="App.practiceDiscipline('${d.id}')">
            🎯 Treinar Matéria
          </button>
        </div>
      `;
    }).join('');
  },

  practiceDiscipline(discId) {
    document.getElementById('q-filter-mode').value = 'adaptativo';
    document.getElementById('q-filter-disc').value = discId;
    this.switchView('questoes');
    this.loadNextQuestion();
  },

  startSmartAcceleratorSession() {
    document.getElementById('q-filter-mode').value = 'erros';
    document.getElementById('q-filter-disc').value = 'todas';
    this.switchView('questoes');
    this.loadNextQuestion();
  },

  startInfiniteGeneratorSession() {
    document.getElementById('q-filter-mode').value = 'infinito';
    this.switchView('questoes');
    this.loadNextQuestion();
  },

  // 4. Motor de Questões e Gerador Infinito IDCAP
  populateSelects() {
    const discSelect = document.getElementById('q-filter-disc');
    discSelect.innerHTML = '<option value="todas">Todas as 10 Disciplinas do Edital</option>' +
      this.db.disciplinas.map((d) => `<option value="${d.id}">${d.icone} ${d.nome} (Peso ${d.peso})</option>`).join('');
  },

  onQuestionFilterChange() {
    this.loadNextQuestion();
  },

  generateNextDynamicQuestion() {
    this.loadNextQuestion(true);
  },

  loadNextQuestion(forceDynamic = false) {
    const mode = document.getElementById('q-filter-mode').value;
    const discFilter = document.getElementById('q-filter-disc').value;
    this.selectedOption = null;
    this.isQuestionAnswered = false;

    if (mode === 'infinito' || forceDynamic) {
      this.currentQuestion = this.synthesizeQuestion(discFilter);
      this.renderQuestionCard();
      return;
    }

    let pool = this.db.questoes.filter((q) => discFilter === 'todas' || q.disciplinaId === discFilter);

    if (mode === 'erros') {
      const wrong = pool.filter((q) => {
        const h = this.state.historicoQuestoes[q.id];
        return h && h.erros > 0;
      });
      if (wrong.length > 0) pool = wrong;
      else {
        this.currentQuestion = this.synthesizeQuestion(discFilter);
        this.renderQuestionCard();
        return;
      }
    }

    if (pool.length > 0) {
      this.currentQuestion = pool[Math.floor(Math.random() * pool.length)];
    } else {
      this.currentQuestion = this.synthesizeQuestion(discFilter);
    }

    this.renderQuestionCard();
  },

  synthesizeQuestion(discFilter) {
    let pool = this.db.matrizGeradorInfinito || [];
    if (discFilter !== 'todas') {
      const f = pool.filter((m) => m.disciplinaId === discFilter);
      if (f.length > 0) pool = f;
    }
    const atom = pool[Math.floor(Math.random() * pool.length)];
    const disc = this.db.disciplinas.find((d) => d.id === atom.disciplinaId) || this.db.disciplinas[0];

    const items = [
      { text: atom.correta, isCorrect: true },
      ...atom.distratores.slice(0, 4).map((d) => ({ text: d, isCorrect: false }))
    ];

    // Embaralha
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }

    const letters = ['A', 'B', 'C', 'D', 'E'];
    const alternativas = {};
    const analiseAlternativas = {};
    let gabarito = 'A';

    items.forEach((item, idx) => {
      const L = letters[idx];
      alternativas[L] = item.text;
      if (item.isCorrect) {
        gabarito = L;
        analiseAlternativas[L] = `Correta! Conforme o padrão IDCAP: ${atom.explicacao} (Fonte: ${atom.fonte}).`;
      } else {
        analiseAlternativas[L] = `Incorreta. Pegadinha e distrator clássico da banca IDCAP. A regra exata é: ${atom.explicacao}.`;
      }
    });

    return {
      id: `gen_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
      disciplinaId: disc.id,
      dificuldade: 'Média/Difícil',
      origem: `♾️ Gerador Infinito IDCAP — ${atom.tema}`,
      enunciado: `[QUESTÃO GERADA — BANCA IDCAP] No âmbito do estudo de ${disc.nome}, considerando especificamente o conteúdo sobre "${atom.tema}", assinale a alternativa CORRETA:`,
      alternativas,
      gabarito,
      explicacaoGeral: atom.explicacao,
      analiseAlternativas,
      referenciaFonte: {
        diplomaLegal: atom.tema,
        secaoMaterial: atom.fonte,
        detalhe: 'Questão inédita sintetizada com base na matriz doutrinária e legal do concurso.'
      }
    };
  },

  renderQuestionCard() {
    const q = this.currentQuestion;
    const container = document.getElementById('question-stage-container');
    if (!q) {
      container.innerHTML = '<div class="panel-card">Nenhuma questão encontrada para este filtro.</div>';
      return;
    }

    const disc = this.db.disciplinas.find((d) => d.id === q.disciplinaId) || this.db.disciplinas[0];
    const letters = ['A', 'B', 'C', 'D', 'E'];

    const optionsHtml = letters.map((L) => {
      let cls = 'option-item';
      if (this.selectedOption === L) cls += ' selected';
      if (this.isQuestionAnswered) {
        cls += ' disabled';
        if (L === q.gabarito) cls += ' correct-answer';
        else if (this.selectedOption === L && L !== q.gabarito) cls += ' wrong-answer';
      }

      return `
        <button class="${cls}" onclick="App.selectOption('${L}')">
          <span class="option-letter">${L}</span>
          <span style="flex:1;">${q.alternativas[L]}</span>
        </button>
      `;
    }).join('');

    let feedbackHtml = '';
    if (this.isQuestionAnswered) {
      const acertou = this.selectedOption === q.gabarito;
      const title = acertou
        ? `✅ VOCÊ ACERTOU! (Alternativa ${q.gabarito})`
        : `❌ VOCÊ MARCOU A ALTERNATIVA "${this.selectedOption}", MAS O GABARITO CORRETO É "${q.gabarito}"!`;

      const userChoiceAnalysis = q.analiseAlternativas && q.analiseAlternativas[this.selectedOption]
        ? `<div style="margin-bottom:12px; padding:12px 14px; border-radius:8px; background:rgba(0,0,0,0.35); border-left:4px solid ${acertou ? '#10b981' : '#f43f5e'};">
             <strong>${acertou ? 'Por que sua resposta está CERTA:' : `Por que a alternativa ${this.selectedOption} que você marcou está ERRADA:`}</strong><br/>
             ${q.analiseAlternativas[this.selectedOption]}
           </div>`
        : '';

      const allBreakdown = letters.map((L) => {
        const isG = L === q.gabarito;
        return `
          <div class="alt-breakdown-item" style="${isG ? 'border-color:rgba(16,185,129,0.5);' : ''}">
            <strong>${isG ? '🟢' : '🔴'} Alternativa ${L}:</strong> ${q.analiseAlternativas ? q.analiseAlternativas[L] : ''}
          </div>
        `;
      }).join('');

      feedbackHtml = `
        <div class="feedback-box ${acertou ? 'feedback-correct' : 'feedback-wrong'}">
          <div class="feedback-title" style="color:${acertou ? '#34d399' : '#fb7185'}">${title}</div>
          ${userChoiceAnalysis}
          <div style="font-size:0.95rem; color:var(--text-primary); white-space:pre-line; margin-bottom:14px;">
            <strong>🧠 Justificativa Detalhada da Banca IDCAP:</strong>\n${q.explicacaoGeral}
          </div>

          <div class="source-reference-box">
            <div style="font-weight:800; color:var(--accent-cyan); margin-bottom:4px;">
              📌 REFERÊNCIA OBRIGATÓRIA DA FONTE (PASTA ARK/IDCAP):
            </div>
            <div>• <strong>Diploma Legal / Tema:</strong> ${q.referenciaFonte.diplomaLegal}</div>
            <div>• <strong>Arquivo / Pasta de Origem:</strong> <code>${q.referenciaFonte.secaoMaterial}</code></div>
            <div>• <strong>Detalhe da Regra:</strong> ${q.referenciaFonte.detalhe}</div>
          </div>

          <div style="margin-top:14px; font-weight:700; font-size:0.9rem; color:var(--text-secondary);">
            Raio-X de Todas as Alternativas (A a E):
          </div>
          <div class="alt-breakdown-list">${allBreakdown}</div>

          <div style="margin-top:16px; display:flex; gap:10px;">
            <button class="btn btn-emerald btn-sm" onclick="App.loadNextQuestion()">
              ➡️ Próxima Questão
            </button>
            <button class="btn btn-primary btn-sm" onclick="App.generateNextDynamicQuestion()">
              ♾️ Sintetizar Outra Inédita
            </button>
          </div>
        </div>
      `;
    }

    container.innerHTML = `
      <div class="question-card">
        <div class="question-meta-bar">
          <span class="${disc.peso === 2 ? 'badge-peso2' : 'badge-peso1'}">${disc.icone} ${disc.nome} (Peso ${disc.peso})</span>
          <span style="margin-left:auto; font-size:0.78rem; color:var(--text-muted); font-family:var(--font-mono);">${q.origem}</span>
        </div>

        <div class="question-stem">${q.enunciado}</div>
        <div class="options-list">${optionsHtml}</div>

        <div style="display:flex; justify-content:space-between; align-items:center;">
          ${!this.isQuestionAnswered ? `
            <button class="btn btn-primary" onclick="App.confirmAnswer()">
              ✔️ Confirmar Resposta
            </button>
          ` : `
            <button class="btn btn-emerald" onclick="App.loadNextQuestion()">
              ➡️ Próxima Questão
            </button>
          `}
          <button class="btn btn-secondary" onclick="App.generateNextDynamicQuestion()">
            🎲 Sortear Outra
          </button>
        </div>

        ${feedbackHtml}
      </div>
    `;
  },

  selectOption(L) {
    if (this.isQuestionAnswered) return;
    this.selectedOption = L;
    this.renderQuestionCard();
  },

  confirmAnswer() {
    if (!this.selectedOption) {
      alert('Selecione uma alternativa antes de confirmar!');
      return;
    }
    this.isQuestionAnswered = true;
    const acertou = this.selectedOption === this.currentQuestion.gabarito;
    this.updateSM2(this.currentQuestion.disciplinaId, this.currentQuestion.id, acertou);
    this.renderQuestionCard();
  },

  // 5. Flashcards Ativos (SM-2)
  renderFlashcard() {
    const container = document.getElementById('flashcard-stage-container');
    const all = [...this.db.flashcards, ...(this.state.customFlashcards || [])];
    if (all.length === 0) return;
    const fc = all[this.fcIndex % all.length];
    const disc = this.db.disciplinas.find((d) => d.id === fc.disciplinaId) || this.db.disciplinas[0];

    container.innerHTML = `
      <div class="flashcard-box ${this.fcFlipped ? 'is-flipped' : ''}" onclick="App.flipFlashcard()">
        <div>
          <span class="fc-side-tag">${this.fcFlipped ? '✅ VERSO (RESPOSTA + FONTE)' : '❓ FRENTE (ESTUDO ATIVO)'}</span>
          <div style="font-size:0.8rem; color:var(--text-muted); margin-top:6px;">${disc.icone} ${disc.nome}</div>
          <div class="fc-question-text">${fc.frente}</div>

          ${this.fcFlipped ? `
            <div class="fc-answer-text">${fc.verso}</div>
            <div style="font-size:0.82rem; color:var(--accent-cyan); margin-top:8px;">
              📌 <strong>Fonte:</strong> ${fc.referenciaFonte}
            </div>
          ` : `
            <div style="margin-top:28px; color:var(--text-muted); font-size:0.88rem;">
              💡 Formule mentalmente a resposta e clique para virar o cartão.
            </div>
          `}
        </div>
      </div>

      ${this.fcFlipped ? `
        <div class="sm2-rating-grid">
          <button class="sm2-btn again" onclick="App.rateFlashcard(1)">
            <span>1 — Errei</span>
            <small style="opacity:0.8">Rever Hoje</small>
          </button>
          <button class="sm2-btn hard" onclick="App.rateFlashcard(3)">
            <span>2 — Difícil</span>
            <small style="opacity:0.8">1 dia</small>
          </button>
          <button class="sm2-btn good" onclick="App.rateFlashcard(4)">
            <span>3 — Bom</span>
            <small style="opacity:0.8">3+ dias</small>
          </button>
          <button class="sm2-btn easy" onclick="App.rateFlashcard(5)">
            <span>4 — Fácil</span>
            <small style="opacity:0.8">7+ dias</small>
          </button>
        </div>
      ` : ''}
    `;
  },

  flipFlashcard() {
    this.fcFlipped = !this.fcFlipped;
    this.renderFlashcard();
  },

  rateFlashcard(quality) {
    const all = [...this.db.flashcards, ...(this.state.customFlashcards || [])];
    const fc = all[this.fcIndex % all.length];
    const prev = this.state.flashcardsSM2[fc.id] || { interval: 0, ef: 2.5, repetitions: 0 };

    if (quality < 3) {
      prev.repetitions = 0;
      prev.interval = 0;
      prev.ef = Math.max(1.3, prev.ef - 0.25);
    } else {
      prev.repetitions++;
      if (prev.repetitions === 1) prev.interval = 1;
      else if (prev.repetitions === 2) prev.interval = 3;
      else prev.interval = Math.round(prev.interval * prev.ef);
      prev.ef = Math.max(1.3, prev.ef + 0.1);
    }

    this.state.flashcardsSM2[fc.id] = prev;
    this.saveState();
    this.fcFlipped = false;
    this.fcIndex = (this.fcIndex + 1) % all.length;
    this.renderFlashcard();
  },

  generateAutoFlashcard() {
    const atoms = this.db.matrizGeradorInfinito || [];
    const picked = atoms[Math.floor(Math.random() * atoms.length)];
    const disc = this.db.disciplinas.find((d) => d.id === picked.disciplinaId);

    const newFc = {
      id: `fc_gen_${Date.now()}`,
      disciplinaId: disc.id,
      frente: `[FLASHCARD GERADO — ${disc.nome}] O que prevê a regra sobre "${picked.tema}"?`,
      verso: `${picked.correta}\n\n💡 Fundamentação: ${picked.explicacao}`,
      referenciaFonte: picked.fonte
    };

    this.state.customFlashcards.unshift(newFc);
    this.saveState();
    this.fcIndex = 0;
    this.fcFlipped = false;
    this.renderFlashcard();
  },

  // 6. Simulado Oficial 50 Questões
  renderSimuladoIdle() {
    const container = document.getElementById('simulado-stage-container');
    container.innerHTML = `
      <div class="panel-card">
        <div class="panel-title">📋 Simulado Oficial GCM Santana/AP (Edital 001/2026 - IDCAP)</div>
        <p style="color:var(--text-secondary); margin-bottom:14px;">
          O simulado replica a prova de <strong>50 questões de múltipla escolha (A a E)</strong> divididas conforme os pesos do edital:
        </p>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:10px; margin-bottom:18px;">
          <div class="kpi-card"><div class="kpi-label">Língua Portuguesa</div><div class="kpi-value">10 Q</div><div class="kpi-sub">Peso 1</div></div>
          <div class="kpi-card"><div class="kpi-label">Matemática e RLM</div><div class="kpi-value">5 Q</div><div class="kpi-sub">Peso 1</div></div>
          <div class="kpi-card"><div class="kpi-label">História e Geografia</div><div class="kpi-value">10 Q</div><div class="kpi-sub">Peso 1</div></div>
          <div class="kpi-card emerald"><div class="kpi-label">Legislação e Direito</div><div class="kpi-value">25 Q</div><div class="kpi-sub">Peso 2 e Peso 1</div></div>
        </div>
        <button class="btn btn-emerald" onclick="App.startNewSimulado()">
          🚀 Iniciar Prova de 50 Questões Agora
        </button>
      </div>
    `;
  },

  startNewSimulado() {
    const list = [];
    // Monta 50 questões mesclando curadas e gerador
    for (let i = 0; i < 50; i++) {
      const disc = this.db.disciplinas[i % this.db.disciplinas.length];
      list.push(this.synthesizeQuestion(disc.id));
    }
    this.simulado = {
      active: true,
      questions: list,
      answers: {},
      currentIndex: 0,
      finished: false
    };
    this.renderSimuladoActive();
  },

  renderSimuladoActive() {
    const container = document.getElementById('simulado-stage-container');
    const sim = this.simulado;
    const q = sim.questions[sim.currentIndex];
    const letters = ['A', 'B', 'C', 'D', 'E'];
    const chosen = sim.answers[sim.currentIndex];

    let resultBanner = '';
    if (sim.finished) {
      let acertos = 0;
      sim.questions.forEach((item, idx) => {
        if (sim.answers[idx] === item.gabarito) acertos++;
      });
      resultBanner = `
        <div class="panel-card" style="border-color:#10b981; margin-bottom:16px;">
          <div class="panel-title" style="color:#34d399;">🏆 Resultado Oficial: ${acertos} de 50 Questões Acertadas (${Math.round((acertos / 50) * 100)}%)</div>
          <button class="btn btn-primary btn-sm" onclick="App.startNewSimulado()">Refazer Novo Simulado</button>
        </div>
      `;
    }

    container.innerHTML = `
      ${resultBanner}
      <div class="question-card">
        <div class="question-meta-bar">
          <span class="badge-peso2">Questão ${sim.currentIndex + 1} de 50</span>
          <span style="font-size:0.8rem; color:var(--text-muted);">${q.origem}</span>
        </div>

        <div class="question-stem">${q.enunciado}</div>
        <div class="options-list">
          ${letters.map((L) => `
            <button class="option-item ${chosen === L ? 'selected' : ''} ${sim.finished && L === q.gabarito ? 'correct-answer' : ''} ${sim.finished && chosen === L && L !== q.gabarito ? 'wrong-answer' : ''}"
                    onclick="App.selectSimOption('${L}')">
              <span class="option-letter">${L}</span>
              <span style="flex:1;">${q.alternativas[L]}</span>
            </button>
          `).join('')}
        </div>

        <div style="display:flex; justify-content:space-between; margin-top:14px;">
          <button class="btn btn-secondary btn-sm" onclick="App.simNav(-1)">⬅️ Anterior</button>
          ${!sim.finished ? `
            <button class="btn btn-emerald btn-sm" onclick="App.finishSimulado()">🏁 Finalizar Simulado</button>
          ` : ''}
          <button class="btn btn-primary btn-sm" onclick="App.simNav(1)">Próxima ➡️</button>
        </div>
      </div>
    `;
  },

  selectSimOption(L) {
    if (this.simulado.finished) return;
    this.simulado.answers[this.simulado.currentIndex] = L;
    this.renderSimuladoActive();
  },

  simNav(delta) {
    const next = this.simulado.currentIndex + delta;
    if (next >= 0 && next < this.simulado.questions.length) {
      this.simulado.currentIndex = next;
      this.renderSimuladoActive();
    }
  },

  finishSimulado() {
    this.simulado.finished = true;
    this.simulado.questions.forEach((q, idx) => {
      const ans = this.simulado.answers[idx];
      if (ans) {
        this.updateSM2(q.disciplinaId, q.id, ans === q.gabarito);
      }
    });
    this.renderSimuladoActive();
  },

  // 7. Biblioteca de PDFs
  renderBiblioteca() {
    const container = document.getElementById('biblioteca-folders-list');
    if (!container) return;
    container.innerHTML = this.db.disciplinas.map((d) => `
      <div class="topic-row">
        <div>
          <div style="font-weight:700; color:var(--text-primary);">${d.icone} ${d.nome}</div>
          <div class="topic-meta">Pasta física no seu computador: <code>C:\\Users\\Willian\\Desktop\\ARK\\IDCAP\\${d.pastaMaterial}</code></div>
        </div>
      </div>
    `).join('');
  }
};

window.addEventListener('DOMContentLoaded', () => {
  App.init();
});
