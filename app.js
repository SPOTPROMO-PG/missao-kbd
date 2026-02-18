// ====== CONFIGURAÇÃO GOOGLE SHEETS ======
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyWERu4e0iNLGkeB3Xq8Ou1dM4FFGI7SQagRVEjhCNIc-4gVAyt4DJPNe_rp9Le6kM/exec";

// ====== DADOS (mantém logos/imagens das marcas) ======
const CONTENT = {
  marcas: [
    {
      id: "always",
      nome: "Always",
      logo: "logos/always.jpg",
      kbds: [
        { id: "kbd1", nome: "KBD Absorventes – Always Suave", videoId: null, imagens: [] },
      ],
    },
    {
      id: "downy",
      nome: "Downy",
      logo: "logos/downy.png",
      kbds: [
        // vídeo solicitado: Pampers Downy PE tamanhos grandes (Downy PE grandes)
        { id: "kbd1", nome: "KBD Ponto Extra – Brisa", videoId: "sY8R7z2jwuI", imagens: [] },
        { id: "kbd2", nome: "KBD Bloco Azul (50%)", videoId: null, imagens: [] },
        { id: "kbd3", nome: "KBD Bloco Colorido (40%) ou [Alfazema ou Lírios]", videoId: null, imagens: [] },
      ],
    },
    {
      id: "pantene",
      nome: "Pantene",
      logo: "logos/pantene.png",
      kbds: [
        { id: "kbd1", nome: "KBD Bond Repair (20%)", videoId: null, imagens: [] },
        { id: "kbd2", nome: "KBD Top Versões – Bambu, Colágeno e Biotinamina B3 (40%)", videoId: null, imagens: [] },
        { id: "kbd3", nome: "KBD Óleo – 2 Pontos de Contato", videoId: null, imagens: [] },
        { id: "kbd4", nome: "KBD Rio/Cachoeira Dourada", videoId: null, imagens: [] },
      ],
    },
    {
      id: "pampers",
      nome: "Pampers",
      logo: "logos/pampers.png",
      kbds: [
        { id: "kbd1", nome: "KBD Ponto Extra – 50% Tamanhos Grandes", videoId: null, imagens: [] },
        { id: "kbd2", nome: "KBD Pants", videoId: null, imagens: [] },
        { id: "kbd3", nome: "KBD Pants + Premium (Lojas Sul)", videoId: null, imagens: [] },
        { id: "kbd4", nome: "KBD Vale Night – SOS Gôndola", videoId: null, imagens: [] },
        { id: "kbd5", nome: "KBD Vale Night – Ponto Extra Farma", videoId: null, imagens: [] },
      ],
    },
    {
      id: "secret",
      nome: "Secret",
      logo: "logos/secret.png",
      kbds: [
        { id: "kbd1", nome: "KBD 2 Bandejas", videoId: null, imagens: [] },
        { id: "kbd2", nome: "KBD Bloco 15 Frentes ou 3 Bandejas", videoId: null, imagens: [] },
      ],
    },
    {
      id: "oral-b",
      nome: "Oral-B",
      logo: "logos/oral-b.png",
      kbds: [
        { id: "kbd1", nome: "KBD Branqueamento (60%)", videoId: null, imagens: [] },
        { id: "kbd2", nome: "KBD 2 Pontos de Contato – Escovas", videoId: null, imagens: [] },
        { id: "kbd3", nome: "KBD Layout BIPE – Escovas", videoId: null, imagens: [] },
      ],
    },
    {
      id: "gillette",
      nome: "Gillette",
      logo: "logos/gillette.png",
      kbds: [
        { id: "kbd1", nome: "KBD Sistemas – % de Ganchos", videoId: null, imagens: [] },
        { id: "kbd2", nome: "KBD 2 Pontos de Contato – Mach3/Presto3", videoId: null, imagens: [] },
        // vídeo solicitado (CKO): Gillette Carga Mach3
        { id: "kbd3", nome: "KBD Carga Mach3 c/8 – 2 Ganchos", videoId: "qaQl_otdN9Y", imagens: [] },
      ],
    },
    {
      id: "venus",
      nome: "Venus",
      logo: "logos/venus.png",
      kbds: [
        { id: "kbd1", nome: "KBD Sistemas – 20% de Ganchos", videoId: null, imagens: [] },
        { id: "kbd2", nome: "KBD 2 Pontos de Contato", videoId: null, imagens: [] },
        { id: "kbd3", nome: "KBD Checkout – Venus Pele Sensível", videoId: null, imagens: [] },
      ],
    },
  ],
};

// ====== SETOR / LOGIN ======
function entrar() {
  const s = (document.getElementById("setor")?.value || "").trim().toUpperCase();
  if (!s) return alert("Digite seu setor");
  if (!s.startsWith("SPI")) return alert("Setor inválido");
  localStorage.setItem("SETOR", s);
  window.location.href = "home.html";
}

function getSetor() {
  return (localStorage.getItem("SETOR") || "").trim();
}

function ensureSetor() {
  if (!getSetor()) window.location.href = "index.html";
}

function confirmarSaida() {
  if (confirm("Tem certeza que deseja sair? Você perderá o progresso local deste dispositivo.")) {
    localStorage.removeItem("SETOR");
    window.location.href = "index.html";
  }
}

// ====== SHELL (Appbar + Drawer + BottomNav) ======
function initShell() {
  ensureSetor();

  const setorEl = document.getElementById("topbarSetor");
  if (setorEl) setorEl.textContent = getSetor() || "---";

  // active nav
  const page = document.body.getAttribute("data-page") || "";
  document.querySelectorAll('.navItem').forEach(btn => {
    const key = btn.getAttribute('data-nav');
    if ((page === 'home' && key === 'home') || (page === 'marcas' && key === 'marcas') || (page === 'marca' && key === 'marcas') || (page === 'kbd' && key === 'marcas') || (page === 'quiz' && key === 'quiz')) {
      btn.classList.add('active');
    }
  });

  // drawer items
  const drawerList = document.getElementById('drawerList');
  if (drawerList) {
    const params = new URLSearchParams(window.location.search);
    const marcaId = params.get('marca');
    const marca = CONTENT.marcas.find(m => m.id === marcaId);

    drawerList.innerHTML = '';
    drawerList.appendChild(drawerItem('🏠 Home', 'Voltar para o início', () => navHome()));
    drawerList.appendChild(drawerItem('🏷️ Marcas', 'Lista de marcas', () => navMarcas()));

    if (marca) {
      drawerList.appendChild(drawerItem(`📚 KBDs de ${marca.nome}`, 'Abrir lista da marca', () => window.location.href = `marca.html?marca=${encodeURIComponent(marca.id)}`));
    }

    drawerList.appendChild(drawerItem('🔁 Trocar setor', 'Fazer login com outro setor', () => { toggleDrawer(false); confirmarSaida(); }));
  }

  // motion
  requestAnimationFrame(() => {
    document.querySelectorAll('.fadeUp').forEach(el => el.classList.add('in'));
  });
}

function drawerItem(title, sub, onClick) {
  const el = document.createElement('div');
  el.className = 'drawerItem';
  el.innerHTML = `<div style="font-weight:950;">${title}</div><small>${sub}</small>`;
  el.onclick = () => { onClick(); toggleDrawer(false); };
  return el;
}

function toggleDrawer(open) {
  const d = document.getElementById('drawer');
  if (!d) return;
  if (open) d.classList.add('open');
  else d.classList.remove('open');
}

function goBack() {
  // fallback inteligente
  if (history.length > 1) history.back();
  else navHome();
}

function navHome() { window.location.href = 'home.html'; }
function navMarcas() { window.location.href = 'home.html'; }

// Quiz hub: abre o próximo pendente (ou final se já completou tudo)
function navQuizHub() {
  const next = getNextPending();
  if (!next) {
    window.location.href = 'quiz.html'; // renderQuizV2 lida com concluído
    return;
  }
  window.location.href = `quiz.html?marca=${encodeURIComponent(next.marcaId)}&kbd=${encodeURIComponent(next.kbdId)}`;
}

// ====== HOME (grid) ======
const BRAND_GRADIENTS = [
  'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
  'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
  'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)',
  'linear-gradient(135deg, #0ea5e9 0%, #7c3aed 100%)',
  'linear-gradient(135deg, #f59e0b 0%, #f97316 100%)',
  'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
  'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
  'linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)',
];

function renderHomeV2() {
  ensureSetor();
  const grid = document.getElementById('listaMarcas');
  const heroStats = document.getElementById('heroStats');
  if (!grid) return;

  const totalMarcas = CONTENT.marcas.length;
  const totalKbds = CONTENT.marcas.reduce((acc, m) => acc + (m.kbds?.length || 0), 0);
  if (heroStats) heroStats.textContent = `${totalMarcas} marcas • ${totalKbds} KBDs • Quizzes`;

  grid.innerHTML = '';
  CONTENT.marcas.forEach((m, idx) => {
    const card = document.createElement('div');
    card.className = 'brandCard';
    card.style.background = BRAND_GRADIENTS[idx % BRAND_GRADIENTS.length];

    const total = m.kbds?.length || 0;
    card.innerHTML = `
      <div class="brandLogoWrap"><img src="${m.logo}" alt="${m.nome}"></div>
      <div class="brandName">${m.nome}</div>
      <div class="brandMeta">${total} KBD${total !== 1 ? 's' : ''} <span style="opacity:.9;">›</span></div>
    `;
    card.onclick = () => window.location.href = `marca.html?marca=${encodeURIComponent(m.id)}`;
    grid.appendChild(card);
  });
}

// ====== MARCA (lista KBDs) ======
function renderMarcaV2() {
  ensureSetor();
  const params = new URLSearchParams(window.location.search);
  const marcaId = params.get('marca');
  const marca = CONTENT.marcas.find(m => m.id === marcaId);
  if (!marca) return navHome();

  const titleEl = document.getElementById('marcaTitulo');
  const iconEl = document.getElementById('marcaIcon');
  const appTitle = document.getElementById('appTitle');

  if (titleEl) titleEl.textContent = marca.nome;
  if (appTitle) appTitle.textContent = marca.nome;
  if (iconEl) iconEl.textContent = (marca.nome || 'M').trim().slice(0,1).toUpperCase();

  const list = document.getElementById('listaKbds');
  if (!list) return;

  list.innerHTML = '';
  marca.kbds.forEach((kbd, i) => {
    const row = document.createElement('div');
    row.className = 'rowCard';
    const perguntas = (window.QUIZZES?.[marca.id] || []).length;
    row.innerHTML = `
      <div class="rowBadge">${i+1}</div>
      <div style="min-width:0;">
        <div class="rowTitle">${kbd.nome}</div>
        <div class="rowSub">🎬 Vídeo • ${perguntas || 0} pergunta${(perguntas||0) === 1 ? '' : 's'}</div>
      </div>
      <div class="rowRight">›</div>
    `;
    row.onclick = () => window.location.href = `kbd.html?marca=${encodeURIComponent(marca.id)}&kbd=${encodeURIComponent(kbd.id)}`;
    list.appendChild(row);
  });
}

// ====== KBD (Aula) ======
function getCurrentKbd() {
  const params = new URLSearchParams(window.location.search);
  const marcaId = params.get('marca');
  const kbdId = params.get('kbd');
  const marca = CONTENT.marcas.find(m => m.id === marcaId);
  if (!marca) return null;
  const kbd = marca.kbds.find(k => k.id === kbdId) || marca.kbds[0];
  return { marca, kbd, marcaId: marca.id, kbdId: kbd.id };
}

function setKbdView(view) {
  const u = new URL(window.location.href);
  if (view === 'all') u.searchParams.delete('view');
  else u.searchParams.set('view', view);
  window.location.replace(u.toString());
}

function renderKbdV2() {
  ensureSetor();
  const ctx = getCurrentKbd();
  if (!ctx) return navHome();

  const { marca, kbd } = ctx;
  const params = new URLSearchParams(window.location.search);
  const view = (params.get('view') || 'all').toLowerCase();

  // header
  document.getElementById('appTitle').textContent = marca.nome;
  document.getElementById('kbdBrandIcon').textContent = (marca.nome || 'K').slice(0,1).toUpperCase();
  document.getElementById('kbdTitulo').textContent = `${marca.nome} • ${kbd.nome}`;

  // select kbd
  const sel = document.getElementById('kbdSelect');
  if (sel) {
    sel.innerHTML = '';
    marca.kbds.forEach(k => {
      const opt = document.createElement('option');
      opt.value = k.id;
      opt.textContent = k.nome;
      if (k.id === kbd.id) opt.selected = true;
      sel.appendChild(opt);
    });
    sel.onchange = () => {
      window.location.href = `kbd.html?marca=${encodeURIComponent(marca.id)}&kbd=${encodeURIComponent(sel.value)}`;
    };
  }

  // tabs
  const tabTudo = document.getElementById('tabTudo');
  const tabVideos = document.getElementById('tabVideos');
  const tabFotos = document.getElementById('tabFotos');
  [tabTudo, tabVideos, tabFotos].forEach(t => t && t.classList.remove('active'));
  if (view === 'videos') tabVideos?.classList.add('active');
  else if (view === 'fotos') tabFotos?.classList.add('active');
  else tabTudo?.classList.add('active');

  // video
  const videoCard = document.getElementById('videoCard');
  const frame = document.getElementById('videoFrame');
  const videoLink = document.getElementById('videoLink');

  if (kbd.videoId) {
    // no-cookie + autoplay off
    frame.src = `https://www.youtube-nocookie.com/embed/${kbd.videoId}`;
    if (videoLink) videoLink.href = `https://youtu.be/${kbd.videoId}`;
  } else {
    frame.src = '';
    if (videoLink) videoLink.href = '#';
  }

  // fotos
  const fotosArea = document.getElementById('fotosArea');
  if (fotosArea) {
    fotosArea.innerHTML = '';
    if (kbd.imagens?.length) {
      kbd.imagens.forEach((src) => {
        const card = document.createElement('div');
        card.className = 'photoCard';
        card.innerHTML = `<img src="${src}" alt="Imagem" />`;
        fotosArea.appendChild(card);
      });
    } else {
      const msg = document.createElement('div');
      msg.className = 'small';
      msg.style.marginTop = '12px';
      msg.textContent = 'Imagens em breve.';
      fotosArea.appendChild(msg);
    }
  }

  // aplicar filtros
  if (videoCard) videoCard.style.display = (view === 'fotos') ? 'none' : 'block';
  if (fotosArea) fotosArea.style.display = (view === 'videos') ? 'none' : 'block';

  // se vídeo não carrega (rede/dns), ainda tem link
  if (!kbd.videoId && videoCard) {
    videoCard.querySelector('#videoTitle').textContent = 'Vídeo em breve';
    videoCard.querySelector('#videoInfo').innerHTML = `🎬 <strong>Vídeo em breve</strong> <span style="margin-left:auto"></span>`;
  }
}

function irParaQuiz() {
  const ctx = getCurrentKbd();
  if (!ctx) return;
  window.location.href = `quiz.html?marca=${encodeURIComponent(ctx.marcaId)}&kbd=${encodeURIComponent(ctx.kbdId)}`;
}

// ====== QUIZ (modelo das telas) ======
const STORAGE_KEY_PROGRESS = 'KBD_PROGRESS_V1';

function loadProgress() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY_PROGRESS) || '{}') || {}; }
  catch { return {}; }
}

function saveProgress(obj) {
  localStorage.setItem(STORAGE_KEY_PROGRESS, JSON.stringify(obj || {}));
}

function makeProgressKey(marcaId, kbdId) {
  return `${marcaId}__${kbdId}`;
}

function markCompleted(marcaId, kbdId, scorePct) {
  const p = loadProgress();
  p[makeProgressKey(marcaId, kbdId)] = {
    done: true,
    score: scorePct,
    at: new Date().toISOString(),
  };
  saveProgress(p);
}

function isCompleted(marcaId, kbdId) {
  const p = loadProgress();
  return !!p[makeProgressKey(marcaId, kbdId)]?.done;
}

function getNextPending() {
  const p = loadProgress();
  for (const m of CONTENT.marcas) {
    for (const k of m.kbds) {
      const key = makeProgressKey(m.id, k.id);
      if (!p[key]?.done) return { marcaId: m.id, kbdId: k.id };
    }
  }
  return null;
}

function allCompleted() {
  return !getNextPending();
}

let QUIZ = {
  marca: null,
  kbd: null,
  marcaId: null,
  kbdId: null,
  perguntas: [],
  idx: 0,
  acertos: 0,
  locked: false,
};

function renderQuizV2() {
  ensureSetor();

  // se abrir quiz sem params, vai pro próximo pendente
  const params = new URLSearchParams(window.location.search);
  let marcaId = params.get('marca');
  let kbdId = params.get('kbd');

  if (!marcaId || !kbdId) {
    const next = getNextPending();
    if (!next) {
      renderAllDone();
      return;
    }
    window.location.replace(`quiz.html?marca=${encodeURIComponent(next.marcaId)}&kbd=${encodeURIComponent(next.kbdId)}`);
    return;
  }

  const marca = CONTENT.marcas.find(m => m.id === marcaId);
  if (!marca) return navHome();
  const kbd = marca.kbds.find(k => k.id === kbdId) || marca.kbds[0];

  // perguntas por marca
  const perguntas = (window.QUIZZES?.[marcaId] || []);

  // shell labels
  const quizTitulo = document.getElementById('quizTitulo');
  const quizSubtitulo = document.getElementById('quizSubtitulo');
  if (quizTitulo) quizTitulo.textContent = `Quiz - ${marca.nome}`;
  if (quizSubtitulo) quizSubtitulo.textContent = kbd.nome;

  // dropdown mudar kbd
  const sel = document.getElementById('quizKbdSelect');
  if (sel) {
    sel.innerHTML = '';
    marca.kbds.forEach(k => {
      const opt = document.createElement('option');
      opt.value = k.id;
      opt.textContent = k.nome;
      if (k.id === kbd.id) opt.selected = true;
      sel.appendChild(opt);
    });
    sel.onchange = () => {
      window.location.href = `quiz.html?marca=${encodeURIComponent(marca.id)}&kbd=${encodeURIComponent(sel.value)}`;
    };
  }

  if (!perguntas.length) {
    document.getElementById('quizArea').innerHTML = `
      <div class="resultCard">
        <div class="resultEmoji">📝</div>
        <div class="resultTitle">Quiz em breve</div>
        <div class="resultSub">Este conteúdo ainda não tem perguntas cadastradas.</div>
        <button class="nextBtn" onclick="goToNextPendingFrom('${marcaId}','${kbd.id}', 0)">Próximo</button>
        <button class="ghostBtn" onclick="navToAula('${marcaId}','${kbd.id}')">Revisar material</button>
      </div>
    `;
    return;
  }

  QUIZ = { marca, kbd, marcaId, kbdId: kbd.id, perguntas, idx: 0, acertos: 0, locked: false };
  renderQuestion();
}

function renderQuestion() {
  const area = document.getElementById('quizArea');
  const total = QUIZ.perguntas.length;
  const n = QUIZ.idx + 1;

  // progress
  document.getElementById('quizPill').textContent = `${n} / ${total}`;
  document.getElementById('quizProgress').style.width = `${Math.round(((QUIZ.idx) / total) * 100)}%`;

  const p = QUIZ.perguntas[QUIZ.idx];

  const opts = p.alternativas.map((alt, i) => {
    const letter = String.fromCharCode(65 + i);
    const txt = alt.replace(/^[A-D]\)\s*/, '');
    return `
      <div class="option" data-letter="${letter}" onclick="selectAnswer('${letter}')">
        <div class="optBadge">${letter}</div>
        <div class="optText">${txt}</div>
      </div>
    `;
  }).join('');

  area.innerHTML = `
    <div class="quizCard">
      <div class="quizCardHeader">
        <div class="quizMeta">Pergunta ${n} de ${total}</div>
        <div class="quizQuestion">${p.pergunta}</div>
      </div>
      <div class="optList">${opts}</div>
      <div class="quizFooter">
        <div id="scoreLine">✅ ${QUIZ.acertos} acertos • ⏳ ${QUIZ.idx} de ${total} respondidas</div>
        <div></div>
      </div>
    </div>
    <button class="nextBtn" id="nextBtn" style="display:none" onclick="nextQuestion()">Próxima pergunta</button>
  `;

  QUIZ.locked = false;
}

async function selectAnswer(letter) {
  if (QUIZ.locked) return;
  QUIZ.locked = true;

  const p = QUIZ.perguntas[QUIZ.idx];
  const correct = (letter === p.gabarito);
  if (correct) QUIZ.acertos++;

  // feedback visual: marca correta + errada se aplicável
  document.querySelectorAll('.option').forEach(el => {
    const l = el.getAttribute('data-letter');
    el.classList.add('disabled');
    if (l === p.gabarito) el.classList.add('correct');
    if (!correct && l === letter) el.classList.add('wrong');
  });

  // linha de feedback
  const total = QUIZ.perguntas.length;
  const scoreLine = document.getElementById('scoreLine');
  if (scoreLine) {
    scoreLine.textContent = correct
      ? '✅ Correto!'
      : `❌ Resposta incorreta. Correta: ${p.gabarito}`;
  }

  // envia para sheets
  const pctNow = Math.round((QUIZ.acertos / total) * 100);
  enviarParaSheets({
    setor: getSetor(),
    marca: QUIZ.marca.nome,
    kbd: QUIZ.kbd.nome,
    pergunta: p.pergunta,
    resposta: letter,
    correta: p.gabarito,
    acertou: correct,
    score: pctNow,
    tentativa: 1,
  });

  // mostra botão próxima
  const nextBtn = document.getElementById('nextBtn');
  if (nextBtn) nextBtn.style.display = 'block';

  // se for a última, troca texto
  if (QUIZ.idx + 1 >= total && nextBtn) nextBtn.textContent = 'Ver resultado';
}

function nextQuestion() {
  const total = QUIZ.perguntas.length;

  // update progress
  document.getElementById('quizProgress').style.width = `${Math.round(((QUIZ.idx + 1) / total) * 100)}%`;

  QUIZ.idx++;
  if (QUIZ.idx < total) {
    renderQuestion();
    return;
  }
  renderResult();
}

function medalEmoji(pct) {
  if (pct === 100) return '🥇';
  if (pct >= 80) return '🥈';
  return '🥉';
}

function renderResult() {
  const area = document.getElementById('quizArea');
  const total = QUIZ.perguntas.length;
  const pct = Math.round((QUIZ.acertos / total) * 100);
  const emoji = medalEmoji(pct);

  markCompleted(QUIZ.marcaId, QUIZ.kbdId, pct);

  area.innerHTML = `
    <div class="resultCard">
      <div class="resultEmoji">${emoji}</div>
      <div class="resultTitle">${pct === 100 ? 'Perfeito!' : (pct >= 80 ? 'Muito bem!' : 'Continue estudando!')}</div>
      <div class="resultScore">${QUIZ.acertos}/${total}</div>
      <div class="resultSub">${pct}% de acertos</div>

      <button class="nextBtn" onclick="goToNextPendingFrom('${QUIZ.marcaId}','${QUIZ.kbdId}', ${pct})">Próximo</button>
      <button class="ghostBtn" onclick="navToAula('${QUIZ.marcaId}','${QUIZ.kbdId}')">Revisar material</button>
      <button class="ghostBtn" onclick="navMarcas()">Voltar para Marcas</button>
    </div>
  `;

  // progresso completo? botão muda
  if (allCompleted()) {
    const btn = area.querySelector('.nextBtn');
    if (btn) btn.textContent = 'Finalizar';
  }
}

function navToAula(marcaId, kbdId) {
  window.location.href = `kbd.html?marca=${encodeURIComponent(marcaId)}&kbd=${encodeURIComponent(kbdId)}`;
}

function goToNextPendingFrom(marcaId, kbdId, pct) {
  // se tudo finalizado, mostra tela final
  const next = getNextPending();
  if (!next) {
    window.location.href = 'quiz.html';
    return;
  }
  window.location.href = `quiz.html?marca=${encodeURIComponent(next.marcaId)}&kbd=${encodeURIComponent(next.kbdId)}`;
}

function renderAllDone() {
  const area = document.getElementById('quizArea');
  const pill = document.getElementById('quizPill');
  const prog = document.getElementById('quizProgress');
  if (pill) pill.textContent = '✅';
  if (prog) prog.style.width = '100%';

  if (document.getElementById('quizTitulo')) document.getElementById('quizTitulo').textContent = 'Quiz';
  if (document.getElementById('quizSubtitulo')) document.getElementById('quizSubtitulo').textContent = 'Fluxo concluído';

  // esconde select se existir
  const sel = document.getElementById('quizKbdSelect');
  if (sel) sel.style.display = 'none';

  area.innerHTML = `
    <div class="resultCard">
      <div class="resultEmoji">🏁</div>
      <div class="resultTitle">Fluxo concluído!</div>
      <div class="resultSub">Você finalizou todos os quizzes de todas as marcas.</div>
      <button class="nextBtn" onclick="navMarcas()">Voltar para Marcas</button>
    </div>
  `;
}

// ====== Envio para Sheets ======
async function enviarParaSheets(d) {
  try {
    fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        setor: d.setor,
        marca: d.marca,
        kbd: d.kbd,
        pergunta: d.pergunta,
        resposta: d.resposta,
        correta: d.correta,
        acertou: d.acertou ? 'SIM' : 'NÃO',
        score: d.score,
        tentativa: d.tentativa,
        userAgent: navigator.userAgent,
      })
    });
  } catch (e) {
    console.error(e);
  }
}
