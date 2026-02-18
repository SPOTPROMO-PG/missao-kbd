// ====== CONFIGURAÇÃO GOOGLE SHEETS ======
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyWERu4e0iNLGkeB3Xq8Ou1dM4FFGI7SQagRVEjhCNIc-4gVAyt4DJPNe_rp9Le6kM/exec";

// ====== DADOS ======
const CONTENT = {
  marcas: [
    { id: "always", nome: "ALWAYS", logo: "logos/always.jpg", kbds: [{ id: "kbd1", nome: "KBD Absorventes – Always Suave", videoId: null, imagens: [] }] },
    { id: "downy", nome: "DOWNY", logo: "logos/downy.png", kbds: [{ id: "kbd1", nome: "KBD Downy (Ponto Extra tamanhos grandes)", videoId: "sY8R7z2jwuI", imagens: [] }, { id: "kbd2", nome: "KBD Bloco Azul (50%)", videoId: null, imagens: [] }, { id: "kbd3", nome: "KBD Bloco Colorido (40%) ou [Alfazema ou Lírios]", videoId: null, imagens: [] }] },
    { id: "pantene", nome: "PANTENE", logo: "logos/pantene.png", kbds: [{ id: "kbd1", nome: "KBD Bond Repair (20%)", videoId: null, imagens: [] }, { id: "kbd2", nome: "KBD Top Versões – Bambu, Colágeno e Biotinamina B3 (40%)", videoId: null, imagens: [] }, { id: "kbd3", nome: "KBD Óleo – 2 Pontos de Contato", videoId: null, imagens: [] }, { id: "kbd4", nome: "KBD Rio/Cachoeira Dourada", videoId: null, imagens: [] }] },
    { id: "pampers", nome: "PAMPERS", logo: "logos/pampers.png", kbds: [{ id: "kbd1", nome: "KBD Ponto Extra – 50% Tamanhos Grandes", videoId: null, imagens: [] }, { id: "kbd2", nome: "KBD Pants", videoId: null, imagens: [] }, { id: "kbd3", nome: "KBD Pants + Premium (Lojas Sul)", videoId: null, imagens: [] }, { id: "kbd4", nome: "KBD Vale Night – SOS Gôndola", videoId: null, imagens: [] }, { id: "kbd5", nome: "KBD Vale Night – Ponto Extra Farma", videoId: null, imagens: [] }] },
    { id: "secret", nome: "SECRET", logo: "logos/secret.png", kbds: [{ id: "kbd1", nome: "KBD 2 Bandejas", videoId: null, imagens: [] }, { id: "kbd2", nome: "KBD Bloco 15 Frentes ou 3 Bandejas", videoId: null, imagens: [] }] },
    { id: "oral-b", nome: "ORAL-B", logo: "logos/oral-b.png", kbds: [{ id: "kbd1", nome: "KBD Branqueamento (60%)", videoId: null, imagens: [] }, { id: "kbd2", nome: "KBD 2 Pontos de Contato – Escovas", videoId: null, imagens: [] }, { id: "kbd3", nome: "KBD Layout BIPE – Escovas", videoId: null, imagens: [] }] },
    { id: "gillette", nome: "GILLETTE", logo: "logos/gillette.png", kbds: [{ id: "kbd1", nome: "KBD Sistemas – % de Ganchos", videoId: null, imagens: [] }, { id: "kbd2", nome: "KBD 2 Pontos de Contato – Mach3/Presto3", videoId: null, imagens: [] }, { id: "kbd3", nome: "KBD Gillette Carga Mach3 (CKO)", videoId: "qaQl_otdN9Y", imagens: [] }] },
    { id: "venus", nome: "VENUS", logo: "logos/venus.png", kbds: [{ id: "kbd1", nome: "KBD Sistemas – 20% de Ganchos", videoId: null, imagens: [] }, { id: "kbd2", nome: "KBD 2 Pontos de Contato", videoId: null, imagens: [] }, { id: "kbd3", nome: "KBD Checkout – Venus Pele Sensível", videoId: null, imagens: [] }] }
  ]
};

function criarModal(c) {
  const o = document.createElement('div');
  o.className = 'modal-overlay';
  o.innerHTML = `<div class="modal-content"><div class="modal-icon">${c.icon}</div><div class="modal-title">${c.title}</div><div class="modal-text">${c.text}</div><div class="modal-buttons">${c.buttons.map(b => `<button class="modal-btn ${b.class}" onclick="${b.action}">${b.label}</button>`).join('')}</div></div>`;
  document.body.appendChild(o);
  return o;
}

function fecharModal() { const o = document.querySelector('.modal-overlay'); if (o) o.remove(); }
function confirmarSaida() { criarModal({ icon: '⚠️', title: 'Tem certeza?', text: 'Ao sair, você perderá todo o progresso.', buttons: [{ label: 'Sim, sair', class: 'modal-btn-confirm', action: 'sairConfirmado()' }, { label: 'Cancelar', class: 'modal-btn-cancel', action: 'fecharModal()' }] }); }
function sairConfirmado() { localStorage.removeItem("SETOR"); window.location.href = "index.html"; }
function entrar() { const s = document.getElementById("setor").value.trim().toUpperCase(); if (!s) return alert("Digite seu setor"); if (!s.startsWith("SPI")) return alert("Setor inválido"); localStorage.setItem("SETOR", s); window.location.href = "home.html"; }
function getSetor() { return (localStorage.getItem("SETOR") || "").trim(); }
function ensureSetor() { if (!getSetor()) window.location.href = "index.html"; }
function trocarSetor() { confirmarSaida(); }

// ====== PROGRESSO (fluxo completo) ======
const DONE_KEY = "QUIZ_DONE_V1";
function _readDone() { try { return JSON.parse(localStorage.getItem(DONE_KEY) || "{}"); } catch { return {}; } }
function _writeDone(obj) { localStorage.setItem(DONE_KEY, JSON.stringify(obj || {})); }
function markDone(marcaId, kbdId, pct) { const d=_readDone(); d[`${marcaId}:${kbdId}`]={pct, at:new Date().toISOString()}; _writeDone(d); }
function isDone(marcaId, kbdId) { const d=_readDone(); return Boolean(d[`${marcaId}:${kbdId}`]); }
function findNextPending() {
  for (const m of CONTENT.marcas) for (const k of (m.kbds||[])) if (!isDone(m.id,k.id)) return { marcaId:m.id, kbdId:k.id };
  return null;
}
function getDoneSummary() {
  const d=_readDone(); const items=[];
  for (const m of CONTENT.marcas) for (const k of (m.kbds||[])) {
    const key=`${m.id}:${k.id}`;
    items.push({ marcaId:m.id, marca:m.nome, kbdId:k.id, kbd:k.nome, done:Boolean(d[key]), pct:(d[key]?.pct ?? null) });
  }
  return items;
}


function renderHome() {
  ensureSetor();
  const badge = document.getElementById("setorBadge");
  if (badge) badge.textContent = getSetor();
  const lista = document.getElementById("listaMarcas");
  if (!lista) return;
  lista.innerHTML = "";
  CONTENT.marcas.forEach((m) => {
    const div = document.createElement("div");
    div.className = "card";
    const totalKbds = (m.kbds || []).length;
    div.innerHTML = `<div class="cardLogo"><img src="${m.logo}" alt="${m.nome}"></div><div class="cardContent"><div class="cardTitle">${m.nome}</div><div class="cardSub">${totalKbds} KBD${totalKbds > 1 ? 's' : ''}</div></div>`;
    div.onclick = () => { window.location.href = "marca.html?marca=" + encodeURIComponent(m.id); };
    lista.appendChild(div);
  });
}

function voltarHome() { window.location.href = "home.html"; }

function renderMarca() {
  ensureSetor();
  const params = new URLSearchParams(window.location.search);
  const marcaId = params.get("marca");
  const marca = CONTENT.marcas.find(m => m.id === marcaId);
  if (!marca) { alert("Marca não encontrada"); voltarHome(); return; }
  document.getElementById("marcaTitulo").textContent = marca.nome;
  const topbarSetor = document.getElementById("topbarSetor");
  if (topbarSetor) topbarSetor.textContent = getSetor();
  const lista = document.getElementById("listaKbds");
  lista.innerHTML = "";
  marca.kbds.forEach(kbd => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<div class="cardContent"><div class="cardTitle">${kbd.nome}</div><div class="cardSub">Clique para abrir</div></div>`;
    div.onclick = () => { window.location.href = "kbd.html?marca=" + encodeURIComponent(marca.id) + "&kbd=" + encodeURIComponent(kbd.id); };
    lista.appendChild(div);
  });
}

function voltarMarca() { const p = new URLSearchParams(window.location.search); window.location.href = "marca.html?marca=" + encodeURIComponent(p.get("marca")); }

function renderKbd() {
  ensureSetor();
  const params = new URLSearchParams(window.location.search);
  const marcaId = params.get("marca");
  const kbdId = params.get("kbd");
  const view = (params.get("view") || "tudo").toLowerCase();
  const marca = CONTENT.marcas.find(m => m.id === marcaId);
  if (!marca) { alert("Marca não encontrada"); voltarHome(); return; }
  const kbd = (marca.kbds || []).find(k => k.id === kbdId);
  if (!kbd) { alert("KBD não encontrado"); voltarMarca(); return; }
  document.getElementById("kbdTitulo").textContent = `${marca.nome} • ${kbd.nome}`;
  const topbarSetor = document.getElementById("topbarSetor");
  if (topbarSetor) topbarSetor.textContent = getSetor();
  const iframe = document.getElementById("videoFrame");
  const placeholder = document.getElementById("videoPlaceholder");
  const openYt = document.getElementById("openYoutube");
  // vídeo (com fallback)
  if (kbd.videoId) {
    iframe.src = "https://www.youtube-nocookie.com/embed/" + kbd.videoId + "?rel=0&modestbranding=1";
    iframe.style.display = "block";
    placeholder.style.display = "none";
    if (openYt) { openYt.style.display = "inline-flex"; openYt.href = "https://youtu.be/" + kbd.videoId; }
  } else {
    iframe.style.display = "none";
    placeholder.style.display = "flex";
    if (openYt) openYt.style.display = "none";
  }
  const imgBox = document.getElementById("imagensKbd");
  imgBox.innerHTML = "";
  if (kbd.imagens && kbd.imagens.length > 0) {
    kbd.imagens.forEach(src => { const img = document.createElement("img"); img.src = src; imgBox.appendChild(img); });
  } else {
    const msg = document.createElement("div");
    msg.className = "small";
    msg.style.marginTop = "16px";
    msg.style.opacity = ".8";
    msg.textContent = "Imagens em breve.";
    imgBox.appendChild(msg);
  }

  // aplica filtro (tudo / videos / fotos)
  applyKbdView(view);
}

function setKbdView(view) {
  const params = new URLSearchParams(window.location.search);
  params.set("view", view);
  const next = window.location.pathname + "?" + params.toString();
  window.history.replaceState({}, "", next);
  applyKbdView(view);
}

function applyKbdView(view) {
  const v = (view || "tudo").toLowerCase();
  const videoBox = document.querySelector(".videoBox");
  const imagens = document.getElementById("imagensKbd");
  if (videoBox) videoBox.style.display = (v === "fotos") ? "none" : "block";
  if (imagens) imagens.style.display = (v === "videos") ? "none" : "grid";
  const tabs = document.querySelectorAll("#conteudoTabs .tabBtn");
  tabs.forEach(b => {
    const bv = (b.getAttribute("data-view") || "").toLowerCase();
    b.classList.toggle("active", bv === v);
  });
}

function irParaQuiz() { const p = new URLSearchParams(window.location.search); window.location.href = "quiz.html?marca=" + encodeURIComponent(p.get("marca")) + "&kbd=" + encodeURIComponent(p.get("kbd")); }


function renderQuizDashboard() {
  ensureSetor();
  const topbarSetor = document.getElementById("topbarSetor");
  if (topbarSetor) topbarSetor.textContent = getSetor();

  const list = getDoneSummary();
  const total = list.length;
  const done = list.filter(x => x.done).length;
  const pct = total ? Math.round((done / total) * 100) : 0;

  const area = document.getElementById("quizArea");
  if (!area) return;

  const next = findNextPending();

  area.innerHTML = `
    <div class="formCard" style="margin-bottom:14px;">
      <div class="questionMeta">
        <div class="pill">Progresso</div>
        <div class="pill">${done}/${total}</div>
      </div>
      <div class="questionTitle">Continue de onde parou</div>
      <div class="progressWrap" style="margin:10px 0 0;"><div class="progressBar" style="width:${pct}%;"></div></div>
      <div style="display:grid; gap:10px; margin-top:14px;">
        ${next ? `<button class="btnPrimary" onclick="window.location.href='kbd.html?marca=${encodeURIComponent(next.marcaId)}&kbd=${encodeURIComponent(next.kbdId)}'">Continuar →</button>` : `<button class="btnPrimary" onclick="voltarHome()">Voltar para Home</button>`}
        <button class="btnGhost" onclick="resetProgress()">Resetar progresso</button>
      </div>
    </div>

    <div class="formCard">
      <div class="questionMeta">
        <div class="pill">Quizzes</div>
        <div class="pill">${done} concluídos</div>
      </div>

      <div class="options" style="gap:8px;">
        ${list.map((it) => `
          <div class="option" style="cursor:default;">
            <div style="width:18px; height:18px; margin-top:2px;">${it.done ? "✅" : "⬜"}</div>
            <div class="optionText">
              <div style="font-weight:900;">${it.marca}</div>
              <div style="opacity:.85; font-size:13px;">${it.kbd}</div>
              ${it.done && it.pct != null ? `<div style="opacity:.9; font-size:12px; margin-top:4px;">Pontuação: <strong>${it.pct}%</strong></div>` : ``}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
function resetProgress(){
  criarModal({
    icon: "🧹",
    title: "Resetar progresso?",
    text: "Isso apaga o histórico de quizzes concluídos neste dispositivo.",
    buttons: [
      { label: "Resetar", class: "modal-btn-confirm", action: "doResetProgress()" },
      { label: "Cancelar", class: "modal-btn-cancel", action: "fecharModal()" }
    ]
  });
}
function doResetProgress(){ _writeDone({}); fecharModal(); renderQuizDashboard(); }

let quizState = { marcaAtual: null, kbdAtual: null, perguntaIndex: 0, tentativa: 1, acertos: 0, total: 0, historico: [], respondendo: false };

function renderQuiz() {
  ensureSetor();
  const params = new URLSearchParams(window.location.search);
  const marcaId = params.get("marca");
  const kbdId = params.get("kbd");

  if (!marcaId || !kbdId) {
    const titulo = document.getElementById("quizTitulo");
    const subtitulo = document.getElementById("quizSubtitulo");
    if (titulo) titulo.textContent = "Quiz";
    if (titulo2) titulo2.textContent = "Quiz";
    if (subtitulo) subtitulo.textContent = "Acompanhe seu progresso";
    renderQuizDashboard();
    return;
  }

  const marca = CONTENT.marcas.find(m => m.id === marcaId);
  if (!marca) { alert("Marca não encontrada"); voltarHome(); return; }
  const kbd = (marca.kbds || []).find(k => k.id === kbdId);

  const perguntas = QUIZZES[marcaId] || [];
  if (perguntas.length === 0) {
    document.getElementById("quizArea").innerHTML = `
      <div class="resultCard">
        <div style="font-size:48px; margin-bottom:10px;">📝</div>
        <div class="formTitle">Quiz em breve</div>
        <div class="formSubtitle" style="margin-top:6px;">Enquanto isso, revise o material.</div>
        <button class="btnPrimary" style="margin-top:16px;" onclick="irProximoPendente()">Próximo pendente →</button>
      </div>
    `;
    return;
  }

  quizState = { marcaAtual: marca, kbdAtual: kbd, perguntaIndex: 0, tentativa: 1, acertos: 0, total: perguntas.length, historico: [], perguntas: perguntas, respondendo: false };

  const titulo = document.getElementById("quizTitulo");
  const titulo2 = document.getElementById("quizTitulo2");
  const subtitulo = document.getElementById("quizSubtitulo");
  if (titulo) titulo.textContent = `Quiz • ${marca.nome}`;
  if (titulo2) titulo2.textContent = `Quiz • ${marca.nome}`;
  if (subtitulo) subtitulo.textContent = kbd ? kbd.nome : "";

  const topbarSetor = document.getElementById("topbarSetor");
  if (topbarSetor) topbarSetor.textContent = getSetor();

  const sel = document.getElementById("quizKbdSelect");
  if (sel) {
    sel.innerHTML = "";
    marca.kbds.forEach(k => {
      const opt = document.createElement("option");
      opt.value = k.id;
      opt.textContent = k.nome;
      if (kbd && k.id === kbd.id) opt.selected = true;
      sel.appendChild(opt);
    });
    sel.onchange = () => {
      window.location.href = `quiz.html?marca=${encodeURIComponent(marca.id)}&kbd=${encodeURIComponent(sel.value)}`;
    };
  }

  const bar = document.getElementById("quizProgressBar");
  if (bar) bar.style.width = "0%";

  mostrarPergunta();
}

function mostrarPergunta() {
  const { perguntas, perguntaIndex } = quizState;
  const p = perguntas[perguntaIndex];
  quizState.respondendo = false;

  const pct = Math.round((perguntaIndex / perguntas.length) * 100);
  const bar = document.getElementById("quizProgressBar");
  if (bar) bar.style.width = `${pct}%`;

  document.getElementById("quizArea").innerHTML = `
    <div class="formCard">
      <div class="questionMeta">
        <div class="pill">Pergunta ${perguntaIndex + 1}/${perguntas.length}</div>
        <div class="pill">${quizState.acertos} acertos</div>
      </div>

      <div class="questionTitle">${p.pergunta}</div>

      <div class="options" id="optList">
        ${p.alternativas.map((alt, i) => {
          const l = String.fromCharCode(65 + i);
          const clean = alt.replace(/^[A-D]\)\s*/, '');
          return `
            <label class="option">
              <input type="radio" name="quizOpt" value="${l}">
              <div class="optionText"><strong>${l})</strong> ${clean}</div>
            </label>
          `;
        }).join('')}
      </div>

      <div class="formActions">
        <button class="btnGhost" onclick="voltarMarca()">← Sair</button>
        <button class="btnPrimaryForm" id="btnConfirm" onclick="confirmarResposta()" disabled>Confirmar</button>
      </div>
    </div>
  `;

  const optList = document.getElementById("optList");
  const btn = document.getElementById("btnConfirm");
  if (optList && btn) {
    optList.addEventListener("change", () => { btn.disabled = false; });
  }
}

function confirmarResposta(){
  const sel=document.querySelector('input[name="quizOpt"]:checked');
  if(!sel) return;
  responderQuiz(sel.value);
}

async function responderQuiz(r) {
  if (quizState.respondendo) return;
  quizState.respondendo = true;
  const { perguntas, perguntaIndex, marcaAtual, kbdAtual } = quizState;
  const p = perguntas[perguntaIndex];
  const c = r === p.gabarito;
  quizState.historico.push({ pergunta: p.pergunta, resposta: r, correta: p.gabarito, acertou: c });
  if (c) quizState.acertos++;
  enviarParaSheets({ setor: getSetor(), marca: marcaAtual.nome, kbd: kbdAtual ? kbdAtual.nome : "N/A", pergunta: p.pergunta, resposta: r, correta: p.gabarito, acertou: c, score: Math.round((quizState.acertos / quizState.total) * 100), tentativa: quizState.tentativa });
  if (c) { mostrarFeedbackCorreto(); } else { mostrarPopupErro(p); }
}

function mostrarFeedbackCorreto() {
  const { perguntas, perguntaIndex } = quizState;
  document.getElementById("quizArea").innerHTML = `<div class="card" style="padding: 40px; text-align: center; background: rgba(0, 255, 100, 0.15); border: 2px solid #00ff64;"><div style="font-size: 64px;">✓</div><div class="cardTitle" style="color: #00ff64;">Correto!</div></div>`;
  setTimeout(() => { proximaPergunta(); }, 650);
}

function mostrarPopupErro(p) {
  const rt = p.alternativas[p.gabarito.charCodeAt(0) - 65].replace(/^[A-D]\)\s*/, '');
  criarModal({ icon: '✗', title: 'Incorreto', text: `<div style="background: rgba(0,0,0,0.3); padding: 16px; border-radius: 12px; margin: 16px 0;"><div style="font-weight: 700; margin-bottom: 8px;">Resposta correta:</div><div style="font-size: 16px; font-weight: 900; color: #00ff64;">${p.gabarito}) ${rt}</div>${p.justificativa ? `<div style="margin-top: 12px; padding-top: 12px; border-top: 1px solid rgba(255,255,255,0.2); font-size: 14px;">${p.justificativa}</div>` : ''}</div>`, buttons: [{ label: 'Entendi', class: 'modal-btn-confirm', action: 'fecharModalEProximo()' }] });
}

function fecharModalEProximo() { fecharModal(); proximaPergunta(); }

function proximaPergunta() {
  quizState.perguntaIndex++;
  if (quizState.perguntaIndex < quizState.perguntas.length) { mostrarPergunta(); } else { mostrarResultadoFinal(); }
}

function mostrarResultadoFinal() {
  const { acertos, total } = quizState;
  const pct = Math.round((acertos / total) * 100);

  let emoji = "🥉";
  let label = "Bronze";
  if (pct === 100) { emoji = "🥇"; label = "Ouro"; }
  else if (pct >= 80) { emoji = "🥈"; label = "Prata"; }

  const mid = quizState.marcaAtual?.id;
  const kid = quizState.kbdAtual?.id;
  if (mid && kid) markDone(mid, kid, pct);

  const bar = document.getElementById("quizProgressBar");
  if (bar) bar.style.width = "100%";

  const next = findNextPending();
  const nextLabel = next ? "Próximo pendente →" : "Finalizar fluxo →";

  document.getElementById("quizArea").innerHTML = `
    <div class="resultCard">
      <div style="font-size:56px; margin-bottom: 6px;">${emoji}</div>
      <div class="formTitle" style="margin-bottom:4px;">${label}</div>
      <div class="resultScore">${pct}%</div>
      <div class="formSubtitle">${acertos} de ${total} acertos</div>

      <div style="display:grid; gap:10px; margin-top:16px;">
        <button class="btnPrimary" onclick="irProximoPendente()">${nextLabel}</button>
        <button class="btnGhost" onclick="voltarMarca()">← Revisar material</button>
      </div>
    </div>
  `;
}

function irProximoPendente(){
  const next = findNextPending();
  if (next){
    window.location.href = `kbd.html?marca=${encodeURIComponent(next.marcaId)}&kbd=${encodeURIComponent(next.kbdId)}`;
    return;
  }
  // fluxo completo
  const area = document.getElementById("quizArea");
  if (area){
    area.innerHTML = `
      <div class="resultCard">
        <div style="font-size:56px; margin-bottom: 6px;">🏆</div>
        <div class="formTitle">Fluxo concluído!</div>
        <div class="formSubtitle" style="margin-top:8px;">Você finalizou todos os quizzes disponíveis.</div>
        <button class="btnPrimary" style="margin-top:16px;" onclick="voltarHome()">Voltar para Home</button>
      </div>
    `;
  } else {
    voltarHome();
  }
}

function proximoKBD() {
  const p = new URLSearchParams(window.location.search);
  const mid = p.get("marca");
  const kid = p.get("kbd");
  const ma = CONTENT.marcas.find(m => m.id === mid);
  if (!ma) { voltarHome(); return; }
  const ki = ma.kbds.findIndex(k => k.id === kid);
  if (ki + 1 < ma.kbds.length) { const nk = ma.kbds[ki + 1]; window.location.href = "kbd.html?marca=" + encodeURIComponent(mid) + "&kbd=" + encodeURIComponent(nk.id); return; }
  const mi = CONTENT.marcas.findIndex(m => m.id === mid);
  if (mi + 1 < CONTENT.marcas.length) { const nm = CONTENT.marcas[mi + 1]; const pk = nm.kbds[0]; window.location.href = "kbd.html?marca=" + encodeURIComponent(nm.id) + "&kbd=" + encodeURIComponent(pk.id); return; }
  alert("Parabéns! 🎉"); voltarHome();
}

async function enviarParaSheets(d) {
  try {
    fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ timestamp: new Date().toISOString(), setor: d.setor, marca: d.marca, kbd: d.kbd, pergunta: d.pergunta, resposta: d.resposta, correta: d.correta, acertou: d.acertou ? "SIM" : "NÃO", score: d.score, tentativa: d.tentativa, userAgent: navigator.userAgent })
    });
  } catch (e) { console.error(e); }
}


function initNav(active){
  const chip = document.getElementById("navSetor") || document.getElementById("topbarSetor");
  if (chip) chip.textContent = getSetor() || "---";

  const backBtn = document.getElementById("navBack");
  if (backBtn) backBtn.onclick = () => history.length > 1 ? history.back() : voltarHome();

  document.querySelectorAll(".bottomNav .navItem").forEach(btn=>{
    const key = btn.getAttribute("data-nav");
    btn.classList.toggle("active", key === active);
    btn.onclick = () => {
      if(key === "home") window.location.href = "home.html";
      if(key === "marcas") window.location.href = "home.html";
      if(key === "quiz") window.location.href = "quiz.html";
    };
  });
}


function openMenu(){
  criarModal({
    icon: "☰",
    title: "Menu",
    text: `
      <div style="display:grid; gap:10px; margin-top:10px;">
        <button class="btnSmall" onclick="window.location.href='home.html'">Home</button>
        <button class="btnSmall" onclick="window.location.href='home.html'">Marcas</button>
        <button class="btnSmall" onclick="window.location.href='quiz.html'">Quiz</button>
        <button class="btnSmall" onclick="confirmarSaida()">Trocar setor</button>
      </div>
    `,
    buttons: [{ label: "Fechar", class: "modal-btn-cancel", action: "fecharModal()" }]
  });
}
