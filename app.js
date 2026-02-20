/* ==============================
   Missão KBD — app.js (HTML/CSS/JS)
   - Quiz por MARCA + KBD: QUIZZES[marcaId][kbdId]
   - Pós-quiz: próximo KBD da marca; se acabou, próxima marca pendente
   - Progresso em % na Home e na página da Marca
   - Medalhas: 🥇 🥈 🥉
================================ */

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyWERu4e0iNLGkeB3Xq8Ou1dM4FFGI7SQagRVEjhCNIc-4gVAyt4DJPNe_rp9Le6kM/exec";

const ALLOWED_SECTORS = ["SPI200", "RS234", "PR87", "SC01"];

// ====== DADOS (Marcas/KBDs) ======
const CONTENT = {
  marcas: [
    {
      id: "always",
      nome: "ALWAYS",
      logo: "logos/always.jpg",
      kbds: [{ id: "kbd1", nome: "KBD Absorventes – Always Suave", videoId: null, imagens: [] }],
    },
    {
      id: "downy",
      nome: "DOWNY",
      logo: "logos/downy.png",
      kbds: [
        { id: "kbd1", nome: "KBD Ponto Extra – Brisa", videoId: null, imagens: [] },
        { id: "kbd2", nome: "KBD Bloco Azul (50%)", videoId: null, imagens: [] },
        { id: "kbd3", nome: "KBD Bloco Colorido (40%) ou [Alfazema ou Lírios]", videoId: null, imagens: [] },
      ],
    },
    {
      id: "pantene",
      nome: "PANTENE",
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
      nome: "PAMPERS",
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
      nome: "SECRET",
      logo: "logos/secret.png",
      kbds: [
        { id: "kbd1", nome: "KBD 2 Bandejas", videoId: null, imagens: [] },
        { id: "kbd2", nome: "KBD Bloco 15 Frentes ou 3 Bandejas", videoId: null, imagens: [] },
      ],
    },
    {
      id: "oral-b",
      nome: "ORAL-B",
      logo: "logos/oral-b.png",
      kbds: [
        { id: "kbd1", nome: "KBD Branqueamento (60%)", videoId: null, imagens: [] },
        { id: "kbd2", nome: "KBD 2 Pontos de Contato – Escovas", videoId: null, imagens: [] },
        { id: "kbd3", nome: "KBD Layout BIPE – Escovas", videoId: null, imagens: [] },
      ],
    },
    {
      id: "gillette",
      nome: "GILLETTE",
      logo: "logos/gillette.png",
      kbds: [
        { id: "kbd1", nome: "KBD Sistemas – % de Ganchos", videoId: null, imagens: [] },
        { id: "kbd2", nome: "KBD 2 Pontos de Contato – Mach3/Presto3", videoId: null, imagens: [] },
        { id: "kbd3", nome: "KBD Carga Mach3 c/8 – 2 Ganchos", videoId: null, imagens: [] },
      ],
    },
    {
      id: "venus",
      nome: "VENUS",
      logo: "logos/venus.png",
      kbds: [
        { id: "kbd1", nome: "KBD Sistemas – 20% de Ganchos", videoId: null, imagens: [] },
        { id: "kbd2", nome: "KBD 2 Pontos de Contato", videoId: null, imagens: [] },
        { id: "kbd3", nome: "KBD Checkout – Venus Pele Sensível", videoId: null, imagens: [] },
      ],
    },
  ],
};

// ====== Utils ======
function normalizeSector(v) {
  return String(v || "").trim().toUpperCase().replace(/\s+/g, "");
}
function getSetor() {
  return (localStorage.getItem("SETOR") || "").trim();
}
function ensureSetor() {
  if (!getSetor()) window.location.href = "index.html";
}
function qs() {
  return new URLSearchParams(window.location.search);
}
function getCompletedData() {
  return JSON.parse(localStorage.getItem("QUIZZES_COMPLETED") || "{}");
}

// ====== Modal ======
function criarModal(c) {
  const o = document.createElement("div");
  o.className = "modal-overlay";
  o.innerHTML = `
    <div class="modal">
      <div class="modal-icon">${c.icon || ""}</div>
      <div class="modal-title">${c.title || ""}</div>
      <div class="modal-text">${c.text || ""}</div>
      <div class="modal-actions">
        ${(c.buttons || [])
          .map((b) => `<button class="modal-btn ${b.class || ""}" onclick="${b.action}">${b.label}</button>`)
          .join("")}
      </div>
    </div>`;
  document.body.appendChild(o);
  return o;
}
function fecharModal() {
  const o = document.querySelector(".modal-overlay");
  if (o) o.remove();
}

function confirmarSaida() {
  criarModal({
    icon: "⚠️",
    title: "Tem certeza?",
    text: "Ao sair, você perderá todo o progresso.",
    buttons: [
      { label: "Sim, sair", class: "confirm", action: "sairConfirmado()" },
      { label: "Cancelar", class: "cancel", action: "fecharModal()" },
    ],
  });
}
function sairConfirmado() {
  localStorage.removeItem("SETOR");
  window.location.href = "index.html";
}
function trocarSetor() {
  confirmarSaida();
}

// ====== Login ======
function entrar() {
  const raw = document.getElementById("setor")?.value || "";
  const s = normalizeSector(raw);
  if (!s) return alert("Digite seu setor.");
  if (!ALLOWED_SECTORS.includes(s)) {
    return alert(`Setor inválido. Use um dos setores liberados: ${ALLOWED_SECTORS.join(", ")}`);
  }
  localStorage.setItem("SETOR", s);
  window.location.href = "home.html";
}

// ====== Progresso ======
function isQuizCompleted(marcaId, kbdId) {
  const data = getCompletedData();
  return !!(data[marcaId] && data[marcaId][kbdId]);
}

function markQuizCompleted(marcaId, kbdId) {
  const data = getCompletedData();
  if (!data[marcaId]) data[marcaId] = {};
  data[marcaId][kbdId] = true;
  localStorage.setItem("QUIZZES_COMPLETED", JSON.stringify(data));
}

function getBrandProgress(marcaId) {
  const marca = CONTENT.marcas.find((m) => m.id === marcaId);
  if (!marca) return { done: 0, total: 0, pct: 0 };

  const data = getCompletedData();
  const total = marca.kbds.length;
  let done = 0;
  for (const kbd of marca.kbds) {
    if (data[marcaId] && data[marcaId][kbd.id]) done++;
  }
  const pct = total ? Math.round((done / total) * 100) : 0;
  return { done, total, pct };
}

// ====== Home (Marcas) ======
function renderHome() {
  ensureSetor();

  const badge = document.getElementById("setorBadge");
  if (badge) badge.textContent = getSetor();

  const lista = document.getElementById("listaMarcas");
  if (!lista) return;

  lista.innerHTML = "";

  CONTENT.marcas.forEach((m) => {
    const prog = getBrandProgress(m.id);

    const div = document.createElement("div");
    div.className = `card brand-card ${prog.pct === 100 ? "done" : "pending"}`;

    div.innerHTML = `
      <div class="card-row card-row-space">
        <div class="card-row">
          <img class="brand-logo" src="${m.logo}" alt="${m.nome}">
          <div class="card-col">
            <div class="card-title">${m.nome}</div>
            <div class="card-sub">${prog.done}/${prog.total} KBDs • ${prog.pct}%</div>
          </div>
        </div>
        <div class="pct-pill ${prog.pct === 100 ? "pct-ok" : "pct-pending"}">${prog.pct}%</div>
      </div>
    `;

    div.onclick = () => {
      window.location.href = "marca.html?marca=" + encodeURIComponent(m.id);
    };

    lista.appendChild(div);
  });
}

function voltarHome() {
  window.location.href = "home.html";
}

// ====== Marca (KBDs) ======
function renderMarca() {
  ensureSetor();

  const marcaId = qs().get("marca");
  const marca = CONTENT.marcas.find((m) => m.id === marcaId);
  if (!marca) {
    alert("Marca não encontrada");
    voltarHome();
    return;
  }

  const badgeEl = document.getElementById("setorBadge");
  if (badgeEl) badgeEl.textContent = getSetor();

  const titulo = document.getElementById("marcaTitulo");
  if (titulo) titulo.textContent = marca.nome;

  const progTop = document.getElementById("marcaProgresso");
  if (progTop) {
    const prog = getBrandProgress(marca.id);
    progTop.textContent = `Progresso: ${prog.done}/${prog.total} (${prog.pct}%)`;
    progTop.className = prog.pct === 100 ? "brand-progress ok" : "brand-progress";
  }

  const lista = document.getElementById("listaKbds");
  if (!lista) return;

  lista.innerHTML = "";

  marca.kbds.forEach((kbd) => {
    const done = isQuizCompleted(marca.id, kbd.id);
    const pct = done ? 100 : 0;

    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <div class="card-row card-row-space">
        <div class="card-col">
          <div class="card-title">${kbd.nome}</div>
          <div class="card-sub">${done ? "✅ Concluído" : "⏳ Pendente"}</div>
        </div>
        <div class="pct-pill ${done ? "pct-ok" : "pct-pending"}">${pct}%</div>
      </div>
    `;

    div.onclick = () =>
      (window.location.href =
        "kbd.html?marca=" + encodeURIComponent(marca.id) + "&kbd=" + encodeURIComponent(kbd.id));

    lista.appendChild(div);
  });
}

function voltarMarca() {
  const marca = qs().get("marca");
  window.location.href = "marca.html?marca=" + encodeURIComponent(marca);
}

// ====== KBD (Aula) ======
function renderKbd() {
  ensureSetor();

  const marcaId = qs().get("marca");
  const kbdId = qs().get("kbd");

  const marca = CONTENT.marcas.find((m) => m.id === marcaId);
  if (!marca) {
    alert("Marca não encontrada");
    voltarHome();
    return;
  }

  const kbd = (marca.kbds || []).find((k) => k.id === kbdId);
  if (!kbd) {
    alert("KBD não encontrado");
    voltarMarca();
    return;
  }

  const title = document.getElementById("kbdTitulo");
  if (title) title.textContent = `${marca.nome} • ${kbd.nome}`;

  const topbarSetor = document.getElementById("topbarSetor");
  if (topbarSetor) topbarSetor.textContent = getSetor();

  const iframe = document.getElementById("videoFrame");
  const placeholder = document.getElementById("videoPlaceholder");

  if (kbd.videoId) {
    iframe.src = "https://www.youtube.com/embed/" + kbd.videoId;
    iframe.style.display = "block";
    placeholder.style.display = "none";
  } else {
    iframe.style.display = "none";
    placeholder.style.display = "flex";
  }

  const imgBox = document.getElementById("imagensKbd");
  if (imgBox) {
    imgBox.innerHTML = "";
    if (kbd.imagens && kbd.imagens.length > 0) {
      kbd.imagens.forEach((src) => {
        const img = document.createElement("img");
        img.src = src;
        imgBox.appendChild(img);
      });
    } else {
      const msg = document.createElement("div");
      msg.className = "small muted";
      msg.textContent = "Imagens em breve.";
      imgBox.appendChild(msg);
    }
  }

  const status = document.getElementById("kbdStatus");
  if (status) {
    const done = isQuizCompleted(marca.id, kbd.id);
    status.textContent = done ? "✅ Quiz concluído" : "⏳ Pendente";
    status.className = done ? "kbd-status done" : "kbd-status pending";
  }
}

function irParaQuiz() {
  const marca = qs().get("marca");
  const kbd = qs().get("kbd");
  window.location.href = "quiz.html?marca=" + encodeURIComponent(marca) + "&kbd=" + encodeURIComponent(kbd);
}

// ====== Quiz ======
let quizState = {
  marcaAtual: null,
  kbdAtual: null,
  perguntaIndex: 0,
  acertos: 0,
  total: 0,
  respondendo: false,
  perguntas: [],
};

function renderQuiz() {
  ensureSetor();

  const marcaId = qs().get("marca");
  const kbdId = qs().get("kbd");

  const marca = CONTENT.marcas.find((m) => m.id === marcaId);
  if (!marca) {
    alert("Marca não encontrada");
    voltarHome();
    return;
  }

  const kbd = (marca.kbds || []).find((k) => k.id === kbdId);

  // ✅ CORRETO: marca -> kbd -> perguntas
  const byBrand = (window.QUIZZES && window.QUIZZES[marcaId]) || null;
  const perguntas = byBrand && typeof byBrand === "object" && byBrand[kbdId] ? byBrand[kbdId] : [];

  const badgeQuiz = document.getElementById("setorBadgeQuiz");
  if (badgeQuiz) badgeQuiz.textContent = getSetor();

  const qt = document.getElementById("quizTitulo");
  const qsEl = document.getElementById("quizSubtitulo");
  if (qt) qt.textContent = `Quiz ${marca.nome}`;
  if (qsEl) qsEl.textContent = kbd ? kbd.nome : "";

  if (!perguntas || perguntas.length === 0) {
    const area = document.getElementById("quizArea");
    if (area) {
      area.innerHTML = `
        <div class="card">
          <div class="card-title">Quiz não encontrado</div>
          <div class="card-sub">Não existe quiz cadastrado para este KBD.</div>
          <div style="height:12px"></div>
          <button class="btn" onclick="voltarMarca()">Voltar</button>
        </div>`;
    }
    return;
  }

  quizState = {
    marcaAtual: marca,
    kbdAtual: kbd,
    perguntaIndex: 0,
    acertos: 0,
    total: perguntas.length,
    respondendo: false,
    perguntas,
  };

  mostrarPergunta();
}

function mostrarPergunta() {
  const { perguntas, perguntaIndex } = quizState;
  const p = perguntas[perguntaIndex];
  quizState.respondendo = false;

  const area = document.getElementById("quizArea");
  if (!area) return;

  area.innerHTML = `
    <div class="quiz-progress">Pergunta ${perguntaIndex + 1} de ${perguntas.length}</div>
    <div class="quiz-question">${p.pergunta}</div>
    <div class="quiz-options">
      ${p.alternativas
        .map((alt, i) => {
          const l = String.fromCharCode(65 + i);
          const clean = String(alt).replace(/^[A-D]\)\s*/, "");
          return `<button class="opt" onclick="responderQuiz('${l}')">
                    <span class="opt-letter">${l}</span>
                    <span class="opt-text">${clean}</span>
                  </button>`;
        })
        .join("")}
    </div>
  `;
}

function responderQuiz(r) {
  if (quizState.respondendo) return;
  quizState.respondendo = true;

  const p = quizState.perguntas[quizState.perguntaIndex];
  const correto = r === p.gabarito;

  if (correto) quizState.acertos++;

  enviarParaSheets({
    setor: getSetor(),
    marca: quizState.marcaAtual.nome,
    kbd: quizState.kbdAtual ? quizState.kbdAtual.nome : "N/A",
    pergunta: p.pergunta,
    resposta: r,
    correta: p.gabarito,
    acertou: correto,
    score: Math.round((quizState.acertos / quizState.total) * 100),
  });

  const area = document.getElementById("quizArea");
  if (!area) return;

  if (correto) {
    area.innerHTML = `
      <div class="feedback ok">
        <div class="feedback-icon">✓</div>
        <div class="feedback-title">Parabéns!</div>
        <div class="feedback-sub">Resposta correta.</div>
      </div>
    `;
    setTimeout(() => proximaPergunta(), 800);
  } else {
    const rt = p.alternativas[p.gabarito.charCodeAt(0) - 65].replace(/^[A-D]\)\s*/, "");
    criarModal({
      icon: "✗",
      title: "Incorreto",
      text: `
        <div class="modal-kbd">
          <div class="modal-kbd-title">Resposta correta:</div>
          <div class="modal-kbd-answer">${p.gabarito}) ${rt}</div>
          ${p.justificativa ? `<div class="modal-kbd-just">${p.justificativa}</div>` : ""}
        </div>
      `,
      buttons: [{ label: "Entendi", class: "confirm", action: "fecharModalEProximo()" }],
    });
  }
}

function fecharModalEProximo() {
  fecharModal();
  proximaPergunta();
}

function proximaPergunta() {
  quizState.perguntaIndex++;
  if (quizState.perguntaIndex < quizState.perguntas.length) {
    mostrarPergunta();
  } else {
    mostrarResultadoFinal();
  }
}

// ====== Fluxo automático pós-quiz ======
function findNextPendingKbdInBrand(marcaId) {
  const marca = CONTENT.marcas.find((m) => m.id === marcaId);
  if (!marca) return null;

  const data = getCompletedData();
  for (const kbd of marca.kbds) {
    if (!(data[marcaId] && data[marcaId][kbd.id])) {
      return { marca: marcaId, kbd: kbd.id };
    }
  }
  return null;
}

function findNextBrandWithPending(afterMarcaId) {
  const data = getCompletedData();
  const idx = CONTENT.marcas.findIndex((m) => m.id === afterMarcaId);

  // procura para frente
  for (let i = idx + 1; i < CONTENT.marcas.length; i++) {
    const m = CONTENT.marcas[i];
    for (const kbd of m.kbds) {
      if (!(data[m.id] && data[m.id][kbd.id])) return m.id;
    }
  }
  // fallback: procura desde o início (se usuário pulou marcas)
  for (let i = 0; i < CONTENT.marcas.length; i++) {
    const m = CONTENT.marcas[i];
    for (const kbd of m.kbds) {
      if (!(data[m.id] && data[m.id][kbd.id])) return m.id;
    }
  }
  return null;
}

function medalEmoji(pct) {
  if (pct === 100) return "🥇";
  if (pct >= 80) return "🥈";
  return "🥉";
}

function mostrarResultadoFinal() {
  const { acertos, total, marcaAtual, kbdAtual } = quizState;
  const pct = Math.round((acertos / total) * 100);
  const medal = medalEmoji(pct);

  // marca como concluído
  markQuizCompleted(marcaAtual.id, kbdAtual.id);

  // próximo dentro da marca?
  const nextInBrand = findNextPendingKbdInBrand(marcaAtual.id);
  // se não tiver, próxima marca pendente
  const nextBrand = nextInBrand ? null : findNextBrandWithPending(marcaAtual.id);

  let nextLabel = "Concluir";
  let nextAction = `alert('Parabéns! Você concluiu todos os quizzes!'); window.location.href='home.html'`;

  if (nextInBrand) {
    nextLabel = "Próximo KBD";
    nextAction = `window.location.href='kbd.html?marca=${encodeURIComponent(nextInBrand.marca)}&kbd=${encodeURIComponent(nextInBrand.kbd)}'`;
  } else if (nextBrand) {
    nextLabel = "Próxima marca";
    nextAction = `window.location.href='marca.html?marca=${encodeURIComponent(nextBrand)}'`;
  }

  const area = document.getElementById("quizArea");
  if (!area) return;

  area.innerHTML = `
    <div class="result">
      <div class="result-medal">${medal}</div>
      <div class="result-score">${pct}%</div>
      <div class="result-sub">${acertos} de ${total} perguntas corretas</div>
      <button class="btn" onclick="${nextAction}">${nextLabel} →</button>
    </div>
  `;
}

// ====== Sheets ======
async function enviarParaSheets(d) {
  try {
    fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        setor: d.setor,
        marca: d.marca,
        kbd: d.kbd,
        pergunta: d.pergunta,
        resposta: d.resposta,
        correta: d.correta,
        acertou: d.acertou ? "SIM" : "NÃO",
        score: d.score,
        userAgent: navigator.userAgent,
      }),
    });
  } catch (e) {
    console.error(e);
  }
}