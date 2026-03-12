const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyWERu4e0iNLGkeB3Xq8Ou1dM4FFGI7SQagRVEjhCNIc-4gVAyt4DJPNe_rp9Le6kM/exec";
const ALLOWED_SECTORS = ["SPI200", "RS234", "PR87", "SC01"];

const CONTENT = {
  marcas: [
    { id: "always", nome: "ALWAYS", logo: "logos/always.jpg", kbds: [{ id: "kbd1", nome: "KBD Absorventes – Always Suave", videoId: null, imagens: [] }] },
    { id: "downy", nome: "DOWNY", logo: "logos/downy.png", kbds: [
      { id: "kbd1", nome: "KBD Ponto Extra – Brisa", videoId: null, imagens: [] },
      { id: "kbd2", nome: "KBD Bloco Azul (50%)", videoId: null, imagens: [] },
      { id: "kbd3", nome: "KBD Bloco Colorido (40%)", videoId: null, imagens: [] },
    ]},
    { id: "pantene", nome: "PANTENE", logo: "logos/pantene.png", kbds: [
      { id: "kbd1", nome: "KBD Bond Repair (20%)", videoId: null, imagens: [] },
      { id: "kbd2", nome: "KBD Top Versões – Bambu, Colágeno e Biotinamina B3 (40%)", videoId: null, imagens: [] },
      { id: "kbd3", nome: "KBD Óleo – 2 Pontos de Contato", videoId: null, imagens: [] },
      { id: "kbd4", nome: "KBD Rio/Cachoeira Dourada", videoId: null, imagens: [] },
    ]},
    { id: "pampers", nome: "PAMPERS", logo: "logos/pampers.png", kbds: [
      { id: "kbd1", nome: "KBD Ponto Extra – 50% Tamanhos Grandes", videoId: null, imagens: [] },
      { id: "kbd2", nome: "KBD Pants", videoId: null, imagens: [] },
      { id: "kbd3", nome: "KBD Pants + Premium (Lojas Sul)", videoId: null, imagens: [] },
      { id: "kbd4", nome: "KBD Vale Night – SOS Gôndola", videoId: null, imagens: [] },
      { id: "kbd5", nome: "KBD Vale Night – Ponto Extra Farma", videoId: null, imagens: [] },
    ]},
    { id: "secret", nome: "SECRET", logo: "logos/secret.png", kbds: [
      { id: "kbd1", nome: "KBD 2 Bandejas", videoId: null, imagens: [] },
      { id: "kbd2", nome: "KBD Bloco 15 Frentes ou 3 Bandejas", videoId: null, imagens: [] },
    ]},
    { id: "oral-b", nome: "ORAL-B", logo: "logos/oral-b.png", kbds: [
      { id: "kbd1", nome: "KBD Branqueamento (60%)", videoId: null, imagens: [] },
      { id: "kbd2", nome: "KBD 2 Pontos de Contato – Escovas", videoId: null, imagens: [] },
      { id: "kbd3", nome: "KBD Layout BIPE – Escovas", videoId: null, imagens: [] },
    ]},
    { id: "gillette", nome: "GILLETTE", logo: "logos/gillette.png", kbds: [
      { id: "kbd1", nome: "KBD Sistemas – % de Ganchos", videoId: null, imagens: [] },
      { id: "kbd2", nome: "KBD 2 Pontos de Contato – Mach3/Presto3", videoId: null, imagens: [] },
      { id: "kbd3", nome: "KBD Carga Mach3 c/8 – 2 Ganchos", videoId: null, imagens: [] },
    ]},
    { id: "venus", nome: "VENUS", logo: "logos/venus.png", kbds: [
      { id: "kbd1", nome: "KBD Sistemas – 20% de Ganchos", videoId: null, imagens: [] },
      { id: "kbd2", nome: "KBD 2 Pontos de Contato", videoId: null, imagens: [] },
      { id: "kbd3", nome: "KBD Checkout – Venus Pele Sensível", videoId: null, imagens: [] },
    ]},
  ],
};

const ICONS = {
  home: '<svg viewBox="0 0 24 24"><path d="M3 10.5 12 3l9 7.5"></path><path d="M5 9.8V21h14V9.8"></path><path d="M9 21v-6h6v6"></path></svg>',
  grid: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1.5"></rect><rect x="14" y="3" width="7" height="7" rx="1.5"></rect><rect x="3" y="14" width="7" height="7" rx="1.5"></rect><rect x="14" y="14" width="7" height="7" rx="1.5"></rect></svg>',
  quiz: '<svg viewBox="0 0 24 24"><path d="M9.09 9a3 3 0 1 1 5.82 1c0 2-3 2-3 4"></path><path d="M12 17h.01"></path><circle cx="12" cy="12" r="10"></circle></svg>',
  back: '<svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"></path></svg>',
  menu: '<svg viewBox="0 0 24 24"><path d="M4 7h16"></path><path d="M4 12h16"></path><path d="M4 17h16"></path></svg>',
  logout: '<svg viewBox="0 0 24 24"><path d="M10 17l5-5-5-5"></path><path d="M15 12H3"></path><path d="M12 4h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path></svg>',
  arrowRight: '<svg viewBox="0 0 24 24"><path d="M5 12h14"></path><path d="m13 6 6 6-6 6"></path></svg>',
  video: '<svg viewBox="0 0 24 24"><rect x="2" y="5" width="15" height="14" rx="2"></rect><path d="m17 10 5-3v10l-5-3z"></path></svg>',
  image: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><path d="m21 15-5-5L5 21"></path></svg>',
  check: '<svg viewBox="0 0 24 24"><path d="m20 6-11 11-5-5"></path></svg>',
  x: '<svg viewBox="0 0 24 24"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>',
  trophy: '<svg viewBox="0 0 24 24"><path d="M8 21h8"></path><path d="M12 17v4"></path><path d="M7 4h10v5a5 5 0 0 1-10 0V4Z"></path><path d="M5 6H3a2 2 0 0 0 0 4h2"></path><path d="M19 6h2a2 2 0 1 1 0 4h-2"></path></svg>',
  refresh: '<svg viewBox="0 0 24 24"><path d="M21 2v6h-6"></path><path d="M3 22v-6h6"></path><path d="M20.49 9A9 9 0 0 0 5 5.5L3 8"></path><path d="M3.51 15A9 9 0 0 0 19 18.5L21 16"></path></svg>',
};

let quizState = {
  marcaAtual: null,
  kbdAtual: null,
  perguntaIndex: 0,
  acertos: 0,
  total: 0,
  perguntas: [],
  selectedOption: null,
  answeredCurrent: false,
};

function normalizeSector(v) { return String(v || "").trim().toUpperCase().replace(/\s+/g, ""); }
function getSetor() { return (localStorage.getItem("SETOR") || "").trim(); }
function ensureSetor() { if (!getSetor()) window.location.href = "index.html"; }
function qs() { return new URLSearchParams(window.location.search); }
function getCompletedData() { return JSON.parse(localStorage.getItem("QUIZZES_COMPLETED") || "{}"); }
function getQuizResultsData() { return JSON.parse(localStorage.getItem("QUIZ_RESULTS") || "{}"); }
function saveQuizResultsData(data) { localStorage.setItem("QUIZ_RESULTS", JSON.stringify(data)); }
function getSentBrandsData() { return JSON.parse(localStorage.getItem("BRANDS_SENT_TO_SHEETS") || "{}"); }
function saveSentBrandsData(data) { localStorage.setItem("BRANDS_SENT_TO_SHEETS", JSON.stringify(data)); }
function getMarcaById(marcaId) { return CONTENT.marcas.find((m) => m.id === marcaId) || null; }
function getKbdById(marcaId, kbdId) { const marca = getMarcaById(marcaId); return marca ? marca.kbds.find((kbd) => kbd.id === kbdId) || null : null; }
function getAllKbdsTotal() { return CONTENT.marcas.reduce((sum, marca) => sum + marca.kbds.length, 0); }
function getAllKbdsDone() { const data = getCompletedData(); return CONTENT.marcas.reduce((sum, marca) => sum + marca.kbds.filter((kbd) => !!(data[marca.id] && data[marca.id][kbd.id])).length, 0); }
function getOverallProgress() { const total = getAllKbdsTotal(); const done = getAllKbdsDone(); return { done, total, pct: total ? Math.round((done / total) * 100) : 0 }; }
function escapeHtml(value) { return String(value || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;"); }
function renderIcon(name) { return ICONS[name] || ""; }
function isQuizCompleted(marcaId, kbdId) { const data = getCompletedData(); return !!(data[marcaId] && data[marcaId][kbdId]); }
function markQuizCompleted(marcaId, kbdId) { const data = getCompletedData(); if (!data[marcaId]) data[marcaId] = {}; data[marcaId][kbdId] = true; localStorage.setItem("QUIZZES_COMPLETED", JSON.stringify(data)); }
function getBrandProgress(marcaId) { const marca = getMarcaById(marcaId); if (!marca) return { done: 0, total: 0, pct: 0 }; const total = marca.kbds.length; const done = marca.kbds.filter((kbd) => isQuizCompleted(marca.id, kbd.id)).length; return { done, total, pct: total ? Math.round((done / total) * 100) : 0 }; }
function getFirstPendingQuiz() { for (const marca of CONTENT.marcas) { const pending = marca.kbds.find((kbd) => !isQuizCompleted(marca.id, kbd.id)); if (pending) return { marcaId: marca.id, kbdId: pending.id }; } return null; }
function getNextPendingInBrand(marcaId) { const marca = getMarcaById(marcaId); if (!marca) return null; const pending = marca.kbds.find((kbd) => !isQuizCompleted(marca.id, kbd.id)); return pending ? { marcaId, kbdId: pending.id } : null; }
function findNextBrandWithPending(afterMarcaId) { const idx = CONTENT.marcas.findIndex((m) => m.id === afterMarcaId); for (let i = idx + 1; i < CONTENT.marcas.length; i++) if (getNextPendingInBrand(CONTENT.marcas[i].id)) return CONTENT.marcas[i].id; for (let i = 0; i < CONTENT.marcas.length; i++) if (getNextPendingInBrand(CONTENT.marcas[i].id)) return CONTENT.marcas[i].id; return null; }
function medalEmoji(pct) { if (pct === 100) return "🥇"; if (pct >= 80) return "🥈"; return "🥉"; }
function getQuizQuestions(marcaId, kbdId) { const byBrand = (window.QUIZZES && window.QUIZZES[marcaId]) || {}; return Array.isArray(byBrand[kbdId]) ? byBrand[kbdId] : []; }
function saveKbdResult(marcaId, kbdId, payload) { const data = getQuizResultsData(); if (!data[marcaId]) data[marcaId] = {}; data[marcaId][kbdId] = payload; saveQuizResultsData(data); }
function getBrandResults(marcaId) { const data = getQuizResultsData(); return data[marcaId] || {}; }
function isBrandSentToSheets(marcaId) { const sent = getSentBrandsData(); return !!sent[marcaId]; }
function markBrandSentToSheets(marcaId) { const sent = getSentBrandsData(); sent[marcaId] = new Date().toISOString(); saveSentBrandsData(sent); }

function applyTopbar(config) {
  const logo = document.getElementById("topbarLogo");
  const eyebrow = document.getElementById("topbarEyebrow");
  const title = document.getElementById("topbarTitle");
  const subtitle = document.getElementById("topbarSubtitle");
  const badge = document.getElementById("topbarSetor");
  const backBtn = document.getElementById("topbarBack");
  const menuBtn = document.getElementById("topbarMenu");
  const logoutBtn = document.getElementById("topbarLogout");
  if (logo && config.logo) logo.src = config.logo;
  if (eyebrow) eyebrow.textContent = config.eyebrow || "Missão KBD";
  if (title) title.textContent = config.title || "Missão KBD";
  if (subtitle) subtitle.textContent = config.subtitle || "Treinamento por marcas";
  if (badge) badge.textContent = getSetor() || "—";
  if (backBtn) backBtn.innerHTML = renderIcon("back");
  if (menuBtn) menuBtn.innerHTML = renderIcon("menu");
  if (logoutBtn) logoutBtn.innerHTML = renderIcon("logout");
  if (backBtn) {
    if (config.showBack) { backBtn.classList.remove("hidden"); backBtn.onclick = config.onBack || (() => window.history.back()); }
    else backBtn.classList.add("hidden");
  }
  if (menuBtn) menuBtn.onclick = () => trocarSetor();
  if (logoutBtn) logoutBtn.onclick = () => confirmarSaida();
}

function setBottomNav(page, quizHref) { document.querySelectorAll("[data-nav]").forEach((item) => { const nav = item.getAttribute("data-nav"); item.classList.toggle("active", nav === page); if (nav === "quiz" && quizHref) item.setAttribute("href", quizHref); }); }
function criarModal({ icon = "menu", title = "", text = "", buttons = [] }) { fecharModal(); const overlay = document.createElement("div"); overlay.className = "modal-overlay"; overlay.innerHTML = `<div class="modal"><div class="modal-header"><div class="modal-icon-wrap">${renderIcon(icon)}</div><div><div class="modal-title">${title}</div><div class="modal-text">${text}</div></div></div><div class="modal-actions">${buttons.map((button) => `<button class="${button.primary ? "primary-button" : "secondary-button"}" onclick="${button.action}">${button.label}</button>`).join("")}</div></div>`; document.body.appendChild(overlay); }
function fecharModal() { const modal = document.querySelector(".modal-overlay"); if (modal) modal.remove(); }
function confirmarSaida() { criarModal({ icon: "logout", title: "Sair do app?", text: "Você vai precisar informar o setor novamente. O progresso dos quizzes continuará salvo neste aparelho.", buttons: [{ label: "Cancelar", action: "fecharModal()" }, { label: "Sim, sair", primary: true, action: "sairConfirmado()" }] }); }
function sairConfirmado() { localStorage.removeItem("SETOR"); fecharModal(); window.location.href = "index.html"; }
function trocarSetor() { criarModal({ icon: "refresh", title: "Trocar setor", text: "Para entrar com outro setor, você precisa sair desta sessão. Seu progresso local não será apagado.", buttons: [{ label: "Continuar aqui", action: "fecharModal()" }, { label: "Trocar setor", primary: true, action: "sairConfirmado()" }] }); }

function entrar() {
  const raw = document.getElementById("setor")?.value || "";
  const normalized = normalizeSector(raw);
  const helper = document.getElementById("loginHelper");
  if (!normalized) { if (helper) helper.textContent = "Digite o código do setor para continuar."; return; }
  if (!ALLOWED_SECTORS.includes(normalized)) { if (helper) helper.textContent = `Setor inválido. Use: ${ALLOWED_SECTORS.join(", ")}.`; return; }
  localStorage.setItem("SETOR", normalized);
  window.location.href = "home.html";
}

function renderHome() {
  ensureSetor();
  applyTopbar({ logo: "logo-missao-kbd-v2.png", eyebrow: "Missão KBD", title: "Marcas P&G", subtitle: "Escolha uma marca para começar ou continuar", showBack: false });
  setBottomNav("home", getPrimaryQuizHref());
  const overall = getOverallProgress();
  document.getElementById("heroStats").textContent = `${overall.done}/${overall.total} KBDs concluídos`;
  document.getElementById("heroTrack").style.width = `${overall.pct}%`;
  document.getElementById("heroSummary").textContent = overall.pct === 100 ? "Tudo concluído. Excelente execução." : `${overall.pct}% do treinamento finalizado`;
  const list = document.getElementById("listaMarcas");
  list.innerHTML = "";
  CONTENT.marcas.forEach((marca) => {
    const progress = getBrandProgress(marca.id);
    const card = document.createElement("button");
    card.type = "button";
    card.className = `brand-card ${progress.pct === 100 ? "completed" : "pending"}`;
    card.innerHTML = `<div class="brand-main"><img class="brand-logo" src="${marca.logo}" alt="${escapeHtml(marca.nome)}"><div class="brand-info"><div class="brand-name">${escapeHtml(marca.nome)}</div><div class="brand-meta">${progress.done} de ${progress.total} KBDs respondidos</div></div></div><div style="display:flex;align-items:center;gap:10px;"><span class="progress-pill ${progress.pct === 100 ? "completed" : "pending"}">${progress.pct}%</span><span class="card-arrow">${renderIcon("arrowRight")}</span></div>`;
    card.onclick = () => window.location.href = `marca.html?marca=${encodeURIComponent(marca.id)}`;
    list.appendChild(card);
  });
}

function renderMarca() {
  ensureSetor();
  const marcaId = qs().get("marca");
  const marca = getMarcaById(marcaId);
  if (!marca) return voltarHome();
  applyTopbar({ logo: marca.logo, eyebrow: "Marca", title: marca.nome, subtitle: `${marca.kbds.length} KBDs disponíveis`, showBack: true, onBack: voltarHome });
  setBottomNav("brands", getPrimaryQuizHref(marca.id));
  const progress = getBrandProgress(marca.id);
  document.getElementById("marcaSummaryLabel").textContent = `Setor ${getSetor()}`;
  document.getElementById("marcaSummaryValue").textContent = `${progress.pct}%`;
  document.getElementById("marcaSummaryTrack").style.width = `${progress.pct}%`;
  const chip = document.getElementById("marcaSummaryChip");
  chip.textContent = `${progress.done}/${progress.total} concluídos`;
  chip.className = `summary-chip ${progress.pct === 100 ? "completed" : "pending"}`;
  document.getElementById("marcaSummaryCopy").textContent = progress.pct === 100 ? "Marca concluída com sucesso." : "Abra um KBD para estudar o conteúdo e responder o quiz.";
  const list = document.getElementById("listaKbds");
  list.innerHTML = "";
  marca.kbds.forEach((kbd, index) => {
    const done = isQuizCompleted(marca.id, kbd.id);
    const quizCount = getQuizQuestions(marca.id, kbd.id).length;
    const card = document.createElement("button");
    card.type = "button";
    card.className = `kbd-card ${done ? "completed" : "pending"}`;
    card.innerHTML = `<div class="kbd-main"><div class="summary-card-icon">${renderIcon(done ? "check" : "quiz")}</div><div class="kbd-info"><div class="kbd-name">${index + 1}. ${escapeHtml(kbd.nome)}</div><div class="kbd-meta">${quizCount} perguntas • ${done ? "quiz concluído" : "pendente"}</div></div></div><div style="display:flex;align-items:center;gap:10px;"><span class="kbd-pill ${done ? "completed" : "pending"}">${done ? "Concluído" : "Responder"}</span><span class="card-arrow">${renderIcon("arrowRight")}</span></div>`;
    card.onclick = () => window.location.href = `kbd.html?marca=${encodeURIComponent(marca.id)}&kbd=${encodeURIComponent(kbd.id)}`;
    list.appendChild(card);
  });
}

function renderKbd() {
  ensureSetor();
  const marcaId = qs().get("marca");
  const kbdId = qs().get("kbd");
  const marca = getMarcaById(marcaId);
  const kbd = getKbdById(marcaId, kbdId);
  if (!marca || !kbd) return voltarHome();
  applyTopbar({ logo: marca.logo, eyebrow: marca.nome, title: "Aula KBD", subtitle: kbd.nome, showBack: true, onBack: voltarMarca });
  setBottomNav("brands", getPrimaryQuizHref(marca.id, kbd.id));
  const done = isQuizCompleted(marca.id, kbd.id);
  const brandProgress = getBrandProgress(marca.id);
  const badge = document.getElementById("kbdStatusBadge");
  badge.textContent = done ? "Quiz concluído" : "Quiz pendente";
  document.getElementById("kbdTitle").textContent = `${marca.nome} • ${kbd.nome}`;
  document.getElementById("kbdSubtitle").textContent = `${getQuizQuestions(marca.id, kbd.id).length} perguntas disponíveis neste KBD`;
  document.getElementById("kbdTrack").style.width = `${brandProgress.pct}%`;
  document.getElementById("kbdProgressCopy").textContent = `${brandProgress.done}/${brandProgress.total} KBDs da marca já respondidos`;
  document.getElementById("kbdQuizButton").textContent = done ? "Refazer quiz" : "Responder o Quiz";
  const videoFrame = document.getElementById("videoFrame");
  const videoPlaceholder = document.getElementById("videoPlaceholder");
  if (kbd.videoId) { videoFrame.src = `https://www.youtube.com/embed/${kbd.videoId}`; videoFrame.classList.remove("hidden"); videoPlaceholder.classList.add("hidden"); }
  else { videoFrame.classList.add("hidden"); videoPlaceholder.classList.remove("hidden"); videoPlaceholder.innerHTML = `<div class="inline-icon">${renderIcon("video")} Vídeo em breve</div><div class="helper-text">O layout foi mantido para você poder receber o material assim que ele estiver disponível.</div>`; }
  const imagesBox = document.getElementById("imagensKbd");
  imagesBox.innerHTML = "";
  if (kbd.imagens && kbd.imagens.length) {
    kbd.imagens.forEach((src) => { const img = document.createElement("img"); img.src = src; img.alt = `${marca.nome} - ${kbd.nome}`; imagesBox.appendChild(img); });
  } else {
    imagesBox.innerHTML = `<div class="image-placeholder"><div class="inline-icon">${renderIcon("image")} Referências visuais em breve</div><div class="helper-text">Este espaço está preparado para imagens de execução, fotos de referência e materiais do KBD.</div></div>`;
  }
}

function renderQuiz() {
  ensureSetor();
  const marcaId = qs().get("marca");
  const kbdId = qs().get("kbd");
  if (!marcaId || !kbdId) return renderQuizHub();
  const marca = getMarcaById(marcaId);
  const kbd = getKbdById(marcaId, kbdId);
  const perguntas = getQuizQuestions(marcaId, kbdId);
  if (!marca || !kbd) return renderQuizHub();
  applyTopbar({ logo: marca.logo, eyebrow: marca.nome, title: "Quiz", subtitle: kbd.nome, showBack: true, onBack: voltarKbd });
  setBottomNav("quiz", getPrimaryQuizHref(marca.id, kbd.id));
  const area = document.getElementById("quizArea");
  if (!perguntas.length) {
    area.innerHTML = `<div class="empty-state"><div class="empty-state-top"><div class="empty-state-icon">${renderIcon("x")}</div><div class="empty-state-copy"><h2 class="section-title">Quiz não encontrado</h2><p class="empty-state-text">Não existe quiz cadastrado para este KBD. Volte para a marca e escolha outro conteúdo.</p></div></div><div class="action-stack"><button class="primary-button" onclick="voltarMarca()">Voltar para a marca</button><a class="secondary-button" href="home.html">Ir para a home</a></div></div>`;
    return;
  }
  quizState = { marcaAtual: marca, kbdAtual: kbd, perguntaIndex: 0, acertos: 0, total: perguntas.length, perguntas, selectedOption: null, answeredCurrent: false };
  mostrarPergunta();
}

function renderQuizHub() {
  applyTopbar({ logo: "logo-missao-kbd-v2.png", eyebrow: "Missão KBD", title: "Central de Quiz", subtitle: "Acompanhe o progresso e continue de onde parou", showBack: true, onBack: voltarHome });
  setBottomNav("quiz", getPrimaryQuizHref());
  const area = document.getElementById("quizArea");
  const overall = getOverallProgress();
  const next = getFirstPendingQuiz();
  const nextMarca = next ? getMarcaById(next.marcaId) : null;
  const nextKbd = next ? getKbdById(next.marcaId, next.kbdId) : null;
  area.innerHTML = `<div class="content-stack"><div class="summary-card"><div class="summary-card-top"><div><div class="summary-card-label">Seu progresso geral</div><div class="summary-card-value">${overall.pct}%</div></div><div class="summary-card-icon">${renderIcon("trophy")}</div></div><div class="progress-track"><div class="progress-fill" style="width:${overall.pct}%"></div></div><div class="helper-text">${overall.done} de ${overall.total} KBDs respondidos neste aparelho.</div></div>${next ? `<div class="question-card"><div class="feedback-top"><div class="feedback-badge success">${renderIcon("quiz")}</div><div class="feedback-copy"><h2 class="section-title">Próximo quiz recomendado</h2><p class="feedback-text">${escapeHtml(nextMarca.nome)} • ${escapeHtml(nextKbd.nome)}</p></div></div><div class="action-stack"><a class="primary-button" href="kbd.html?marca=${encodeURIComponent(next.marcaId)}&kbd=${encodeURIComponent(next.kbdId)}">Abrir próximo KBD</a><a class="secondary-button" href="marca.html?marca=${encodeURIComponent(next.marcaId)}">Ver marca</a></div></div>` : `<div class="result-card"><div class="result-top"><div class="feedback-badge success">${renderIcon("check")}</div><div class="result-copy"><h2 class="result-title">Tudo concluído</h2><p class="result-subtitle">Você respondeu todos os quizzes disponíveis. Pode revisar qualquer marca quando quiser.</p></div></div><div class="action-stack"><a class="primary-button" href="home.html">Voltar para a home</a></div></div>`}</div>`;
}

function mostrarPergunta() {
  const area = document.getElementById("quizArea");
  const perguntaAtual = quizState.perguntas[quizState.perguntaIndex];
  const progresso = Math.round(((quizState.perguntaIndex + 1) / quizState.total) * 100);
  quizState.selectedOption = null;
  quizState.answeredCurrent = false;
  area.innerHTML = `<div class="quiz-shell"><div class="summary-card"><div class="quiz-progress-meta"><div><div class="summary-card-label">Pergunta ${quizState.perguntaIndex + 1} de ${quizState.total}</div><div class="helper-text">Selecione uma alternativa e confirme para receber o feedback.</div></div><span class="summary-chip pending">${progresso}%</span></div><div class="progress-track"><div class="progress-fill" style="width:${progresso}%"></div></div></div><div class="question-card"><div class="question-helper">${escapeHtml(quizState.marcaAtual.nome)} • ${escapeHtml(quizState.kbdAtual.nome)}</div><h2 class="question-title">${escapeHtml(perguntaAtual.pergunta)}</h2><div class="option-list">${perguntaAtual.alternativas.map((alternativa, index) => { const letra = String.fromCharCode(65 + index); const limpo = String(alternativa).replace(/^[A-D][\.|\)]\s*/, ""); return `<button class="option-button" id="option-${letra}" type="button" onclick="selecionarAlternativa('${letra}')"><span class="option-icon">${letra}</span><span class="option-copy"><span class="option-label">Alternativa ${letra}</span><span class="option-text">${escapeHtml(limpo)}</span></span></button>`; }).join("")}</div><div class="action-stack"><button id="confirmAnswerButton" class="primary-button" type="button" onclick="confirmarResposta()" disabled>Confirmar resposta</button><button class="secondary-button" type="button" onclick="voltarKbd()">Voltar para o KBD</button></div></div></div>`;
}

function selecionarAlternativa(letra) {
  if (quizState.answeredCurrent) return;
  quizState.selectedOption = letra;
  document.querySelectorAll(".option-button").forEach((button) => button.classList.remove("selected"));
  const target = document.getElementById(`option-${letra}`);
  if (target) target.classList.add("selected");
  document.getElementById("confirmAnswerButton").disabled = false;
}

function confirmarResposta() {
  if (quizState.answeredCurrent || !quizState.selectedOption) return;
  quizState.answeredCurrent = true;
  const pergunta = quizState.perguntas[quizState.perguntaIndex];
  const acertou = quizState.selectedOption === pergunta.gabarito;
  if (acertou) quizState.acertos += 1;
  document.querySelectorAll(".option-button").forEach((button) => { button.classList.add("disabled"); const id = button.id.replace("option-", ""); if (id === pergunta.gabarito) button.classList.add("correct"); if (id === quizState.selectedOption && !acertou) button.classList.add("incorrect"); });
  document.getElementById("confirmAnswerButton").disabled = true;
  const respostaCerta = pergunta.alternativas[pergunta.gabarito.charCodeAt(0) - 65].replace(/^[A-D][\.|\)]\s*/, "");
  const wrapper = document.querySelector(".quiz-shell");
  const feedback = document.createElement("div");
  feedback.className = "feedback-card";
  feedback.innerHTML = `<div class="feedback-top"><div class="feedback-badge ${acertou ? "success" : "error"}">${renderIcon(acertou ? "check" : "x")}</div><div class="feedback-copy"><h3 class="feedback-title">${acertou ? "Resposta correta" : "Resposta incorreta"}</h3><p class="feedback-text">${acertou ? "Boa! Você pode avançar para a próxima pergunta." : "Confira a alternativa correta e a regra do material antes de seguir."}</p></div></div><div class="answer-box"><div class="option-icon">${pergunta.gabarito}</div><div><div class="answer-label">Resposta correta</div><div class="answer-value">${escapeHtml(respostaCerta)}</div></div></div>${pergunta.justificativa ? `<div class="justification-box">${escapeHtml(pergunta.justificativa)}</div>` : ""}<div class="action-stack"><button class="primary-button" type="button" onclick="proximaPergunta()">${quizState.perguntaIndex + 1 < quizState.total ? "Próxima pergunta" : "Ver resultado"}</button></div>`;
  wrapper.appendChild(feedback);
}

function proximaPergunta() { quizState.perguntaIndex += 1; if (quizState.perguntaIndex < quizState.perguntas.length) mostrarPergunta(); else mostrarResultadoFinal(); }

function mostrarResultadoFinal() {
  const area = document.getElementById("quizArea");
  markQuizCompleted(quizState.marcaAtual.id, quizState.kbdAtual.id);
  const pct = Math.round((quizState.acertos / quizState.total) * 100);
  const medal = medalEmoji(pct);
  saveKbdResult(quizState.marcaAtual.id, quizState.kbdAtual.id, { marcaId: quizState.marcaAtual.id, marca: quizState.marcaAtual.nome, kbdId: quizState.kbdAtual.id, kbd: quizState.kbdAtual.nome, acertos: quizState.acertos, total: quizState.total, percentual: pct, medalha: medal, setor: getSetor(), completedAt: new Date().toISOString() });
  const nextInBrand = getNextPendingInBrand(quizState.marcaAtual.id);
  const nextBrandId = nextInBrand ? null : findNextBrandWithPending(quizState.marcaAtual.id);
  if (!nextInBrand) enviarConclusaoMarcaParaSheets(quizState.marcaAtual.id);
  let primaryHref = "home.html";
  let primaryLabel = "Voltar para a home";
  let secondaryHref = `marca.html?marca=${encodeURIComponent(quizState.marcaAtual.id)}`;
  let secondaryLabel = "Rever a marca";
  if (nextInBrand) { primaryHref = `kbd.html?marca=${encodeURIComponent(nextInBrand.marcaId)}&kbd=${encodeURIComponent(nextInBrand.kbdId)}`; primaryLabel = "Abrir próximo KBD"; secondaryHref = `marca.html?marca=${encodeURIComponent(nextInBrand.marcaId)}`; secondaryLabel = "Voltar para a marca"; }
  else if (nextBrandId) { primaryHref = `marca.html?marca=${encodeURIComponent(nextBrandId)}`; primaryLabel = "Ir para próxima marca"; secondaryHref = "home.html"; secondaryLabel = "Ver todas as marcas"; }
  area.innerHTML = `<div class="result-card"><div class="result-top"><div class="medal-emoji">${medal}</div><div class="result-copy"><h2 class="result-title">Quiz finalizado</h2><p class="result-subtitle">${escapeHtml(quizState.marcaAtual.nome)} • ${escapeHtml(quizState.kbdAtual.nome)}</p></div></div><div class="result-score">${pct}%</div><div class="helper-text">Você acertou ${quizState.acertos} de ${quizState.total} perguntas.</div><div class="result-stats"><span class="summary-chip completed">Medalha ${medal}</span><span class="summary-chip ${pct === 100 ? "completed" : "pending"}">${pct === 100 ? "Aproveitamento máximo" : "Continue evoluindo"}</span>${!nextInBrand ? `<span class="summary-chip completed">Marca enviada ao Sheets</span>` : ""}</div><div class="action-stack"><a class="primary-button" href="${primaryHref}">${primaryLabel}</a><a class="secondary-button" href="${secondaryHref}">${secondaryLabel}</a></div></div>`;
}

function voltarHome() { window.location.href = "home.html"; }
function voltarMarca() { const marcaId = qs().get("marca"); window.location.href = marcaId ? `marca.html?marca=${encodeURIComponent(marcaId)}` : "home.html"; }
function voltarKbd() { const marcaId = qs().get("marca"); const kbdId = qs().get("kbd"); window.location.href = marcaId && kbdId ? `kbd.html?marca=${encodeURIComponent(marcaId)}&kbd=${encodeURIComponent(kbdId)}` : "home.html"; }
function irParaQuiz() { const marcaId = qs().get("marca"); const kbdId = qs().get("kbd"); if (!marcaId || !kbdId) return; window.location.href = `quiz.html?marca=${encodeURIComponent(marcaId)}&kbd=${encodeURIComponent(kbdId)}`; }
function getPrimaryQuizHref(currentMarcaId, currentKbdId) { if (currentMarcaId && currentKbdId) return `quiz.html?marca=${encodeURIComponent(currentMarcaId)}&kbd=${encodeURIComponent(currentKbdId)}`; const next = getFirstPendingQuiz(); return next ? `quiz.html?marca=${encodeURIComponent(next.marcaId)}&kbd=${encodeURIComponent(next.kbdId)}` : "quiz.html"; }

async function enviarConclusaoMarcaParaSheets(marcaId) {
  if (!marcaId || isBrandSentToSheets(marcaId)) return;
  const marca = getMarcaById(marcaId);
  const progress = getBrandProgress(marcaId);
  const resultados = Object.values(getBrandResults(marcaId));
  if (!marca || progress.done !== progress.total || resultados.length !== progress.total) return;
  const acertosMarca = resultados.reduce((sum, item) => sum + Number(item.acertos || 0), 0);
  const perguntasMarca = resultados.reduce((sum, item) => sum + Number(item.total || 0), 0);
  const percentualMarca = perguntasMarca ? Math.round((acertosMarca / perguntasMarca) * 100) : 0;
  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        eventType: "brand_completion",
        setor: getSetor(),
        marcaId: marca.id,
        marca: marca.nome,
        kbdsConcluidos: progress.done,
        kbdsTotal: progress.total,
        acertosMarca,
        perguntasMarca,
        percentualMarca,
        resultados: JSON.stringify(resultados),
        userAgent: navigator.userAgent,
      }),
    });
    markBrandSentToSheets(marcaId);
  } catch (error) {
    console.error(error);
  }
}
