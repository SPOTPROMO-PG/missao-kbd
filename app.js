/* ==============================
   Missão KBD — app.js (mobile-first)
   Regras:
   - Login por setor: apenas setores liberados
   - Fluxo: Login -> Home (Marcas) -> Marca (KBDs) -> KBD (Aula) -> Quiz
   - “Quiz em breve” CONTA como pendente (opção 2)
   - Progresso por KBD salvo em localStorage (QUIZZES_COMPLETED)
   - Envio por resposta para Google Sheets via Apps Script
================================ */

// ====== CONFIGURAÇÃO GOOGLE SHEETS ======
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyWERu4e0iNLGkeB3Xq8Ou1dM4FFGI7SQagRVEjhCNIc-4gVAyt4DJPNe_rp9Le6kM/exec";

// ====== SETORES LIBERADOS ======
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
          .map(
            (b) =>
              `<button class="modal-btn ${b.class || ""}" onclick="${b.action}">${b.label}</button>`
          )
          .join("")}
      </div>
    </div>
  `;
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
    return alert(
      `Setor inválido. Use um dos setores liberados: ${ALLOWED_SECTORS.join(", ")}`
    );
  }

  localStorage.setItem("SETOR", s);
  window.location.href = "home.html";
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
    const div = document.createElement("div");
    div.className = "card brand-card";
    const totalKbds = (m.kbds || []).length;

    div.innerHTML = `
      <div class="card-row">
        <img class="brand-logo" src="${m.logo}" alt="${m.nome}">
        <div class="card-col">
          <div class="card-title">${m.nome}</div>
          <div class="card-sub">${totalKbds} KBD${totalKbds > 1 ? "s" : ""}</div>
        </div>
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

  const lista = document.getElementById("listaKbds");
  if (!lista) return;

  lista.innerHTML = "";
  marca.kbds.forEach((kbd) => {
    const div = document.createElement("div");
    div.className = "card";
    const done = isQuizCompleted(marca.id, kbd.id);

    div.innerHTML = `
      <div class="card-title">${kbd.nome}</div>
      <div class="card-sub">${done ? "✅ Concluído" : "Toque para abrir"}</div>
    `;

    div.onclick = () => {
      window.location.href =
        "kbd.html?marca=" +
        encodeURIComponent(marca.id) +
        "&kbd=" +
        encodeURIComponent(kbd.id);
    };

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

  // Vídeo
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

  // Imagens
  const imgBox = document.getElementById("imagensKbd");
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

  // Status do KBD
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
  window.location.href =
    "quiz.html?marca=" + encodeURIComponent(marca) + "&kbd=" + encodeURIComponent(kbd);
}

// ====== Quiz ======
let quizState = {
  marcaAtual: null,
  kbdAtual: null,
  perguntaIndex: 0,
  tentativa: 1,
  acertos: 0,
  total: 0,
  historico: [],
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

  // **IMPORTANTE**: seu banco atual usa QUIZZES[marcaId]
  // (quando você evoluir, recomendo virar QUIZZES[marcaId][kbdId])
  const perguntas = (window.QUIZZES && window.QUIZZES[marcaId]) || [];

  // Badge setor
  const badgeQuiz = document.getElementById("setorBadgeQuiz");
  if (badgeQuiz) badgeQuiz.textContent = getSetor();

  // Títulos
  const qt = document.getElementById("quizTitulo");
  const qsEl = document.getElementById("quizSubtitulo");
  if (qt) qt.textContent = `Quiz ${marca.nome}`;
  if (qsEl) qsEl.textContent = kbd ? kbd.nome : "";

  // Sem perguntas => “Quiz em breve” (PENDENTE => bloqueia conclusão)
  if (!perguntas || perguntas.length === 0) {
    document.getElementById("quizArea").innerHTML = `
      <div class="card">
        <div class="card-title">Quiz em breve</div>
        <div class="card-sub">Este KBD continua pendente até você cadastrar as perguntas.</div>
        <div style="height:12px"></div>
        <button class="btn" onclick="voltarMarca()">Voltar</button>
        <button class="btn ghost" onclick="proximoKBD()">Ir para próximo pendente</button>
      </div>
    `;
    return;
  }

  quizState = {
    marcaAtual: marca,
    kbdAtual: kbd,
    perguntaIndex: 0,
    tentativa: 1,
    acertos: 0,
    total: perguntas.length,
    historico: [],
    respondendo: false,
    perguntas,
  };

  mostrarPergunta();
}

function mostrarPergunta() {
  const { perguntas, perguntaIndex } = quizState;
  const p = perguntas[perguntaIndex];
  quizState.respondendo = false;

  document.getElementById("quizArea").innerHTML = `
    <div class="quiz-progress">Pergunta ${perguntaIndex + 1} de ${perguntas.length}</div>
    <div class="quiz-question">${p.pergunta}</div>
    <div class="quiz-options">
      ${p.alternativas
        .map((alt, i) => {
          const l = String.fromCharCode(65 + i);
          const clean = String(alt).replace(/^[A-D]\)\\s*/, "");
          return `<button class="opt" onclick="responderQuiz('${l}')">
                    <span class="opt-letter">${l}</span>
                    <span class="opt-text">${clean}</span>
                  </button>`;
        })
        .join("")}
    </div>
  `;
}

async function responderQuiz(r) {
  if (quizState.respondendo) return;
  quizState.respondendo = true;

  const { perguntas, perguntaIndex, marcaAtual, kbdAtual } = quizState;
  const p = perguntas[perguntaIndex];

  const c = r === p.gabarito;

  quizState.historico.push({
    pergunta: p.pergunta,
    resposta: r,
    correta: p.gabarito,
    acertou: c,
  });

  if (c) quizState.acertos++;

  // envia log por resposta
  enviarParaSheets({
    setor: getSetor(),
    marca: marcaAtual.nome,
    kbd: kbdAtual ? kbdAtual.nome : "N/A",
    pergunta: p.pergunta,
    resposta: r,
    correta: p.gabarito,
    acertou: c,
    score: Math.round((quizState.acertos / quizState.total) * 100),
    tentativa: quizState.tentativa,
  });

  if (c) {
    mostrarFeedbackCorreto();
  } else {
    mostrarPopupErro(p);
  }
}

function mostrarFeedbackCorreto() {
  document.getElementById("quizArea").innerHTML = `
    <div class="feedback ok">
      <div class="feedback-icon">✓</div>
      <div class="feedback-title">Parabéns!</div>
      <div class="feedback-sub">Resposta correta.</div>
    </div>
  `;

  setTimeout(() => {
    proximaPergunta();
  }, 900);
}

function mostrarPopupErro(p) {
  const rt =
    p.alternativas[p.gabarito.charCodeAt(0) - 65].replace(/^[A-D]\)\\s*/, "");

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

function mostrarResultadoFinal() {
  const { acertos, total, marcaAtual, kbdAtual } = quizState;
  const pct = Math.round((acertos / total) * 100);

  let medalha = "Bronze";
  if (pct === 100) medalha = "Ouro";
  else if (pct >= 80) medalha = "Prata";

  // Marca concluído (somente aqui)
  markQuizCompleted(marcaAtual.id, kbdAtual.id);

  const next = findNextPending();

  const btnLabel = next ? "Próximo pendente" : "Concluir";
  const btnAction = next
    ? `window.location.href='kbd.html?marca=${encodeURIComponent(next.marca)}&kbd=${encodeURIComponent(next.kbd)}'`
    : `alert('Parabéns! Você concluiu todos os quizzes!'); window.location.href='home.html'`;

  document.getElementById("quizArea").innerHTML = `
    <div class="result">
      <div class="result-medal">${medalha}</div>
      <div class="result-score">${pct}%</div>
      <div class="result-sub">${acertos} de ${total} perguntas corretas</div>
      <button class="btn" onclick="${btnAction}">${btnLabel} →</button>
    </div>
  `;
}

// ====== PROGRESSO DE QUIZ (opção 2) ======
function markQuizCompleted(marcaId, kbdId) {
  const data = JSON.parse(localStorage.getItem("QUIZZES_COMPLETED") || "{}");
  if (!data[marcaId]) data[marcaId] = {};
  data[marcaId][kbdId] = true;
  localStorage.setItem("QUIZZES_COMPLETED", JSON.stringify(data));
}

function isQuizCompleted(marcaId, kbdId) {
  const data = JSON.parse(localStorage.getItem("QUIZZES_COMPLETED") || "{}");
  return !!(data[marcaId] && data[marcaId][kbdId]);
}

function findNextPending() {
  const data = JSON.parse(localStorage.getItem("QUIZZES_COMPLETED") || "{}");

  for (const marca of CONTENT.marcas) {
    for (const kbd of marca.kbds) {
      if (!(data[marca.id] && data[marca.id][kbd.id])) {
        return { marca: marca.id, kbd: kbd.id };
      }
    }
  }
  return null;
}

function proximoKBD() {
  const next = findNextPending();
  if (next) {
    window.location.href =
      "kbd.html?marca=" +
      encodeURIComponent(next.marca) +
      "&kbd=" +
      encodeURIComponent(next.kbd);
    return;
  }
  alert("Parabéns! Você concluiu todos os quizzes!");
  voltarHome();
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
        tentativa: d.tentativa,
        userAgent: navigator.userAgent,
      }),
    });
  } catch (e) {
    console.error(e);
  }
}

// ====== Bottom Nav ======
function initBottomNav() {
  const nav = document.querySelector(".bottomNav");
  if (!nav) return;

  const page = document.body.dataset.page;
  const links = nav.querySelectorAll("a");

  links.forEach((a) => {
    const target = a.getAttribute("data-target");

    if (target === page || (target === "marcas" && page === "home")) {
      a.classList.add("active");
    } else {
      a.classList.remove("active");
    }

    a.onclick = (e) => {
      e.preventDefault();
      if (target === "home" || target === "marcas") {
        window.location.href = "home.html";
        return;
      }
      if (target === "quiz") {
        // se estiver em um quiz com marca/kbd, mantém
        const p = new URLSearchParams(window.location.search);
        if (p.has("marca") && p.has("kbd")) {
          window.location.href =
            "quiz.html?marca=" +
            encodeURIComponent(p.get("marca")) +
            "&kbd=" +
            encodeURIComponent(p.get("kbd"));
        } else {
          // vai para próximo pendente
          proximoKBD();
        }
      }
    };
  });
}