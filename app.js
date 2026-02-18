// ====== CONFIGURAÇÃO GOOGLE SHEETS ======
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyWERu4e0iNLGkeB3Xq8Ou1dM4FFGI7SQagRVEjhCNIc-4gVAyt4DJPNe_rp9Le6kM/exec";

// ====== DADOS ======
const BRAND_META = {
  always:{ grad:'linear-gradient(135deg,#60A5FA 0%,#3B82F6 100%)', initial:'A' },
  downy:{ grad:'linear-gradient(135deg,#38BDF8 0%,#2563EB 100%)', initial:'D' },
  gillette:{ grad:'linear-gradient(135deg,#1D4ED8 0%,#7C3AED 100%)', initial:'G' },
  'oral-b':{ grad:'linear-gradient(135deg,#22D3EE 0%,#3B82F6 100%)', initial:'O' },
  pampers:{ grad:'linear-gradient(135deg,#FBBF24 0%,#F59E0B 100%)', initial:'P' },
  pantene:{ grad:'linear-gradient(135deg,#F59E0B 0%,#D97706 100%)', initial:'P' },
  secret:{ grad:'linear-gradient(135deg,#A855F7 0%,#EC4899 100%)', initial:'S' },
  venus:{ grad:'linear-gradient(135deg,#FB7185 0%,#F43F5E 100%)', initial:'V' },
};

const CONTENT = {
  marcas: [
    { id: "always", nome: "Always", logo: "logos/always.jpg", kbds: [{ id: "kbd1", nome: "Proteção e Conforto Always", videoId: null, imagens: [] }] },
    { id: "downy", nome: "Downy", logo: "logos/downy.png", kbds: [
      { id: "kbd1", nome: "Ponto Extra tamanhos grandes", videoId: "sY8R7z2jwuI", imagens: [] },
      { id: "kbd2", nome: "Bloco Azul (50%)", videoId: null, imagens: [] },
      { id: "kbd3", nome: "Bloco Colorido (40%)", videoId: null, imagens: [] }
    ] },
    { id: "pantene", nome: "Pantene", logo: "logos/pantene.png", kbds: [
      { id: "kbd1", nome: "Bond Repair (20%)", videoId: null, imagens: [] },
      { id: "kbd2", nome: "Top Versões (40%)", videoId: null, imagens: [] },
      { id: "kbd3", nome: "Óleo – 2 Pontos de Contato", videoId: null, imagens: [] },
      { id: "kbd4", nome: "Rio/Cachoeira Dourada", videoId: null, imagens: [] }
    ] },
    { id: "pampers", nome: "Pampers", logo: "logos/pampers.png", kbds: [
      { id: "kbd1", nome: "Ponto Extra – 50% Tamanhos Grandes", videoId: null, imagens: [] },
      { id: "kbd2", nome: "Pants", videoId: null, imagens: [] },
      { id: "kbd3", nome: "Pants + Premium (Lojas Sul)", videoId: null, imagens: [] },
      { id: "kbd4", nome: "Vale Night – SOS Gôndola", videoId: null, imagens: [] },
      { id: "kbd5", nome: "Vale Night – Ponto Extra Farma", videoId: null, imagens: [] }
    ] },
    { id: "secret", nome: "Secret", logo: "logos/secret.png", kbds: [
      { id: "kbd1", nome: "Proteção Feminina", videoId: null, imagens: [] }
    ] },
    { id: "oral-b", nome: "Oral-B", logo: "logos/oral-b.png", kbds: [
      { id: "kbd1", nome: "Branqueamento (60%)", videoId: null, imagens: [] },
      { id: "kbd2", nome: "2 Pontos de Contato – Escovas", videoId: null, imagens: [] },
      { id: "kbd3", nome: "Layout BIPE – Escovas", videoId: null, imagens: [] }
    ] },
    { id: "gillette", nome: "Gillette", logo: "logos/gillette.png", kbds: [
      { id: "kbd1", nome: "Sistemas – % de Ganchos", videoId: null, imagens: [] },
      { id: "kbd2", nome: "2 Pontos de Contato – Mach3/Presto3", videoId: null, imagens: [] },
      { id: "kbd3", nome: "Carga Mach3 (CKO)", videoId: "qaQl_otdN9Y", imagens: [] }
    ] },
    { id: "venus", nome: "Venus", logo: "logos/venus.png", kbds: [
      { id: "kbd1", nome: "Sistemas – 20% de Ganchos", videoId: null, imagens: [] },
      { id: "kbd2", nome: "2 Pontos de Contato", videoId: null, imagens: [] },
      { id: "kbd3", nome: "Checkout – Venus Pele Sensível", videoId: null, imagens: [] }
    ] }
  ]
};

// ====== UTILS ======
function $(sel){ return document.querySelector(sel); }
function escapeHtml(str=''){ return String(str).replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#039;'}[s])); }

function getSetor(){ return (localStorage.getItem('SETOR')||'').trim(); }
function ensureSetor(){ if (!getSetor()) window.location.href = 'index.html'; }

function entrar(){
  const s = ($('#setor')?.value || '').trim().toUpperCase();
  if (!s) return alert('Digite seu setor');
  if (!s.startsWith('SPI')) return alert('Setor inválido');
  localStorage.setItem('SETOR', s);
  window.location.href = 'home.html';
}

// ====== MENU / APP SHELL ======
function initAppShell(){
  const page = document.body.getAttribute('data-page') || '';
  if (page !== 'login') ensureSetor();

  const setor = getSetor();
  const setorEls = [$('#navSetor'), $('#heroSetor')].filter(Boolean);
  setorEls.forEach(el => el.textContent = setor || '---');

  // back
  const backBtn = $('#navBack');
  if (backBtn){
    backBtn.addEventListener('click', () => {
      if (page === 'marcas' || page === 'quiz' || page === 'home') return window.location.href = 'home.html';
      if (history.length > 1) history.back();
      else window.location.href = 'home.html';
    });
  }

  // hero menu
  const heroMenu = $('#heroMenu');
  if (heroMenu){ heroMenu.addEventListener('click', openMenuSheet); }
  const menuBtn = $('#navMenu');
  if (menuBtn){ menuBtn.addEventListener('click', openMenuSheet); }

  // overlay click
  const overlay = $('#sheetOverlay');
  if (overlay){ overlay.addEventListener('click', closeMenuSheet); }
}

function openMenuSheet(){
  const overlay = $('#sheetOverlay');
  if (!overlay) return;

  const p = new URLSearchParams(window.location.search);
  const marcaId = p.get('marca');
  const marca = CONTENT.marcas.find(m=>m.id===marcaId);

  overlay.style.display = 'block';
  overlay.innerHTML = `
    <div class="sheet sheet--open" role="dialog" aria-label="Menu">
      <div class="sheetHandle"></div>
      <div class="sheetTitle">Menu</div>
      <div class="sheetList">
        <a class="sheetItem" href="home.html">🏠 Home</a>
        <a class="sheetItem" href="marcas.html">🏷️ Marcas</a>
        ${marca ? `<div class="sheetSection">KBDs de ${escapeHtml(marca.nome)}</div>
          ${marca.kbds.map(k=>`<a class="sheetItem" href="kbd.html?marca=${encodeURIComponent(marca.id)}&kbd=${encodeURIComponent(k.id)}">📚 ${escapeHtml(k.nome)}</a>`).join('')}` : ''}
        <button class="sheetItem btnAsLink" onclick="trocarSetor()">🔁 Trocar setor</button>
        <button class="sheetItem btnAsLink" onclick="closeMenuSheet()">✖️ Fechar</button>
      </div>
    </div>
  `;
}

function closeMenuSheet(){
  const overlay = $('#sheetOverlay');
  if (!overlay) return;
  overlay.style.display = 'none';
  overlay.innerHTML = '';
}

function trocarSetor(){
  closeMenuSheet();
  if (!confirm('Ao trocar o setor, seu progresso local pode ser reiniciado neste dispositivo. Continuar?')) return;
  localStorage.removeItem('SETOR');
  window.location.href = 'index.html';
}

// ====== PROGRESSO (COMPLETO) ======
const DONE_KEY = 'KBD_DONE_V1';
function getDoneSet(){
  try { return new Set(JSON.parse(localStorage.getItem(DONE_KEY) || '[]')); }
  catch { return new Set(); }
}
function setDoneSet(set){ localStorage.setItem(DONE_KEY, JSON.stringify([...set])); }
function markDone(marcaId, kbdId){
  const set = getDoneSet();
  set.add(`${marcaId}:${kbdId}`);
  setDoneSet(set);
}
function isDone(marcaId, kbdId){ return getDoneSet().has(`${marcaId}:${kbdId}`); }
function allItems(){
  const list = [];
  CONTENT.marcas.forEach(m => (m.kbds||[]).forEach(k => list.push({marcaId:m.id, kbdId:k.id})));
  return list;
}
function nextPending(afterMarcaId, afterKbdId){
  const items = allItems();
  const done = getDoneSet();
  const startIdx = Math.max(0, items.findIndex(x => x.marcaId===afterMarcaId && x.kbdId===afterKbdId));
  for (let i=1;i<=items.length;i++){
    const idx = (startIdx + i) % items.length;
    const it = items[idx];
    if (!done.has(`${it.marcaId}:${it.kbdId}`)) return it;
  }
  return null;
}
function firstPending(){
  const done = getDoneSet();
  for (const it of allItems()) if (!done.has(`${it.marcaId}:${it.kbdId}`)) return it;
  return null;
}

// ====== RENDER: HOME / MARCAS ======
function renderMarcas(){
  ensureSetor();
  const lista = $('#listaMarcas');
  if (!lista) return;
  lista.innerHTML = '';

  CONTENT.marcas.forEach(m => {
    const meta = BRAND_META[m.id] || {grad:'var(--grad-primary)', initial:(m.nome||'?')[0]};
    const totalKbds = (m.kbds||[]).length;

    const card = document.createElement('a');
    card.className = 'brandCard';
    card.href = `marca.html?marca=${encodeURIComponent(m.id)}`;
    card.style.background = meta.grad;

    card.innerHTML = `
      <div class="brandTop">
        <div class="brandInitial">${escapeHtml(meta.initial||'?')}</div>
      </div>
      <div class="brandName">${escapeHtml(m.nome)}</div>
      <div class="brandMeta">${totalKbds} KBD${totalKbds>1?'s':''} ›</div>
    `;

    lista.appendChild(card);
  });
}

// ====== RENDER: MARCA ======
function renderMarca(){
  ensureSetor();
  const params = new URLSearchParams(window.location.search);
  const marcaId = params.get('marca');
  const marca = CONTENT.marcas.find(m=>m.id===marcaId);
  if (!marca){ window.location.href='marcas.html'; return; }

  const title = $('#marcaTitulo');
  if (title) title.textContent = marca.nome;

  const list = $('#listaKbds');
  if (!list) return;
  list.innerHTML = '';

  (marca.kbds||[]).forEach((kbd, idx) => {
    const qCount = (QUIZZES?.[marcaId]?.length || 0);
    const hasVideo = !!kbd.videoId;
    const done = isDone(marcaId, kbd.id);

    const item = document.createElement('a');
    item.className = 'kbdItem';
    item.href = `kbd.html?marca=${encodeURIComponent(marcaId)}&kbd=${encodeURIComponent(kbd.id)}`;

    item.innerHTML = `
      <div class="kbdLeft">
        <div class="kbdNum">${idx+1}</div>
        <div class="kbdInfo">
          <div class="kbdTitle">${escapeHtml(kbd.nome)}</div>
          <div class="kbdMeta">
            <span class="kbdTag">${hasVideo?'🎬 Vídeo':'🎬 Vídeo em breve'}</span>
            <span class="kbdTag">📝 ${qCount||'—'} pergunta${qCount===1?'':'s'}</span>
            ${done ? '<span class="kbdDone">✓ concluído</span>' : ''}
          </div>
        </div>
      </div>
      <div class="kbdGo">›</div>
    `;

    list.appendChild(item);
  });
}

// ====== RENDER: KBD ======
function renderKbd(){
  ensureSetor();
  const params = new URLSearchParams(window.location.search);
  const marcaId = params.get('marca');
  const kbdId = params.get('kbd');
  const view = (params.get('view') || 'tudo').toLowerCase();

  const marca = CONTENT.marcas.find(m=>m.id===marcaId);
  if (!marca){ window.location.href='marcas.html'; return; }

  const kbd = (marca.kbds||[]).find(k=>k.id===kbdId) || (marca.kbds||[])[0];
  if (!kbd){ window.location.href='marcas.html'; return; }

  // header title
  const title = $('#kbdTitulo');
  if (title) title.textContent = `${marca.nome} • KBD`;

  // dropdown
  const sel = $('#kbdSelect');
  if (sel){
    sel.innerHTML = '';
    marca.kbds.forEach(k => {
      const opt = document.createElement('option');
      opt.value = k.id;
      opt.textContent = k.nome;
      if (k.id === kbd.id) opt.selected = true;
      sel.appendChild(opt);
    });
    sel.onchange = () => {
      window.location.href = `kbd.html?marca=${encodeURIComponent(marcaId)}&kbd=${encodeURIComponent(sel.value)}`;
    };
  }

  // video
  const iframe = $('#videoFrame');
  const placeholder = $('#videoPlaceholder');
  const openYT = $('#openYoutube');

  if (kbd.videoId){
    const url = `https://www.youtube-nocookie.com/embed/${kbd.videoId}?rel=0&modestbranding=1&playsinline=1`;
    if (iframe){ iframe.src = url; iframe.style.display='block'; }
    if (placeholder) placeholder.style.display='none';
    if (openYT){ openYT.href = `https://youtu.be/${kbd.videoId}`; openYT.style.display='inline'; }
  } else {
    if (iframe){ iframe.removeAttribute('src'); iframe.style.display='none'; }
    if (placeholder) placeholder.style.display='flex';
    if (openYT){ openYT.removeAttribute('href'); openYT.style.display='none'; }
  }

  // images
  const imgBox = $('#imagensKbd');
  if (imgBox){
    imgBox.innerHTML = '';
    if (kbd.imagens && kbd.imagens.length){
      kbd.imagens.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Material visual';
        imgBox.appendChild(img);
      });
    } else {
      const msg = document.createElement('div');
      msg.className = 'emptyText';
      msg.textContent = 'Imagens em breve.';
      imgBox.appendChild(msg);
    }
  }

  // set view
  applyKbdView(view);
}

function setKbdView(view){
  const params = new URLSearchParams(window.location.search);
  params.set('view', view);
  window.history.replaceState({}, '', window.location.pathname + '?' + params.toString());
  applyKbdView(view);
}

function applyKbdView(view){
  const v = (view||'tudo').toLowerCase();
  const video = $('#videoSection');
  const foto = $('#fotoSection');
  if (video) video.style.display = (v === 'fotos') ? 'none' : 'block';
  if (foto) foto.style.display = (v === 'videos') ? 'none' : 'block';
  document.querySelectorAll('#conteudoTabs .tabBtn').forEach(btn => {
    btn.classList.toggle('active', (btn.getAttribute('data-view')||'') === v);
  });
}

function irParaQuiz(){
  const p = new URLSearchParams(window.location.search);
  const marca = p.get('marca');
  const kbd = p.get('kbd');
  window.location.href = `quiz.html?marca=${encodeURIComponent(marca)}&kbd=${encodeURIComponent(kbd)}`;
}

// ====== QUIZ ======
let quizState = null;

function renderQuiz(){
  ensureSetor();
  const params = new URLSearchParams(window.location.search);
  const marcaId = params.get('marca');
  const kbdId = params.get('kbd');

  // dashboard (quando abre Quiz pela navbar)
  if (!marcaId || !kbdId){
    return renderQuizDashboard();
  }

  const marca = CONTENT.marcas.find(m=>m.id===marcaId);
  if (!marca){ window.location.href='marcas.html'; return; }
  const kbd = (marca.kbds||[]).find(k=>k.id===kbdId) || (marca.kbds||[])[0];

  // dropdown
  const sel = $('#quizKbdSelect');
  if (sel){
    sel.innerHTML='';
    marca.kbds.forEach(k=>{
      const opt = document.createElement('option');
      opt.value = k.id;
      opt.textContent = k.nome;
      if (k.id===kbd.id) opt.selected = true;
      sel.appendChild(opt);
    });
    sel.onchange = () => {
      window.location.href = `quiz.html?marca=${encodeURIComponent(marcaId)}&kbd=${encodeURIComponent(sel.value)}`;
    };
  }

  $('#quizTitulo') && ($('#quizTitulo').textContent = `Quiz • ${marca.nome}`);
  $('#quizSubtitulo') && ($('#quizSubtitulo').textContent = kbd.nome);

  const perguntas = (typeof QUIZZES !== 'undefined' && QUIZZES[marcaId]) ? QUIZZES[marcaId] : [];
  if (!perguntas.length){
    $('#quizArea').innerHTML = `
      <div class="resultCard">
        <div class="resultEmoji">📝</div>
        <div class="resultTitle">Quiz em breve</div>
        <div class="resultSub">Ainda não temos perguntas para este KBD.</div>
        <button class="btnPrimary" onclick="goNextAfter('${marcaId}','${kbd.id}')">Continuar</button>
      </div>
    `;
    return;
  }

  quizState = {
    marcaId, kbdId: kbd.id,
    marca, kbd,
    perguntas,
    idx: 0,
    acertos: 0,
    respondeu: false,
  };

  updateQuizProgress();
  renderQuizQuestion();
}

function renderQuizDashboard(){
  const done = getDoneSet();
  const items = allItems();
  const total = items.length;
  const doneCount = [...done].length;

  const next = firstPending();

  const area = $('#quizArea');
  $('#quizTitulo') && ($('#quizTitulo').textContent = 'Quiz');
  $('#quizSubtitulo') && ($('#quizSubtitulo').textContent = 'Seu progresso');

  const pct = total ? Math.round((doneCount/total)*100) : 0;
  const medal = (pct===100) ? '🥇' : (pct>=80 ? '🥈' : '🥉');

  area.innerHTML = `
    <div class="resultCard">
      <div class="resultEmoji">${medal}</div>
      <div class="resultTitle">${doneCount}/${total}</div>
      <div class="resultSub">${pct}% concluído</div>
      ${next ? `<a class="btnPrimary" href="kbd.html?marca=${encodeURIComponent(next.marcaId)}&kbd=${encodeURIComponent(next.kbdId)}">Continuar</a>` : `<a class="btnPrimary" href="marcas.html">Começar</a>`}
    </div>
    <div class="sectionTitle" style="margin-top:14px;">Checklist</div>
    <div class="kbdList">
      ${CONTENT.marcas.map(m=>{
        const ks = (m.kbds||[]).map(k=>{
          const key = `${m.id}:${k.id}`;
          const ok = done.has(key);
          return `<a class="kbdItem" href="kbd.html?marca=${encodeURIComponent(m.id)}&kbd=${encodeURIComponent(k.id)}">
            <div class="kbdLeft">
              <div class="kbdNum" style="background:${ok?'#16A34A':'#E2E8F0'}; color:${ok?'#fff':'#334155'}">${ok?'✓':'•'}</div>
              <div class="kbdInfo">
                <div class="kbdTitle">${escapeHtml(m.nome)} — ${escapeHtml(k.nome)}</div>
                <div class="kbdMeta">${ok?'<span class="kbdDone">concluído</span>':'<span class="kbdTag">pendente</span>'}</div>
              </div>
            </div>
            <div class="kbdGo">›</div>
          </a>`;
        }).join('');
        return ks;
      }).join('')}
    </div>
  `;

  // esconder select se existir
  const sel = $('#quizKbdSelect');
  if (sel){ sel.style.display='none'; }
  updateQuizProgress(true);
}

function updateQuizProgress(reset=false){
  const bar = $('#quizProgressBar');
  if (!bar) return;
  if (reset || !quizState){ bar.style.width='0%'; return; }
  const pct = Math.round(((quizState.idx) / quizState.perguntas.length) * 100);
  bar.style.width = `${pct}%`;
}

function renderQuizQuestion(){
  const p = quizState.perguntas[quizState.idx];
  quizState.respondeu = false;
  updateQuizProgress();

  const total = quizState.perguntas.length;
  const current = quizState.idx + 1;

  $('#quizArea').innerHTML = `
    <div class="quizCard">
      <div class="quizTop">
        <div class="quizPill">Pergunta ${current} de ${total}</div>
        <div class="quizPill">${current}/${total}</div>
      </div>
      <div class="quizQuestion">${escapeHtml(p.pergunta)}</div>
      <div class="quizOptions">
        ${p.alternativas.map((alt,i)=>{
          const letter = String.fromCharCode(65+i);
          const clean = alt.replace(/^[A-D]\)\s*/, '');
          return `<button class="option" data-letter="${letter}" onclick="answerQuiz('${letter}')">
            <span class="optLetter">${letter}</span>
            <span class="optText">${escapeHtml(clean)}</span>
          </button>`;
        }).join('')}
      </div>
      <div class="quizFooter">
        <div class="quizScore"><span class="okDot">✓</span> ${quizState.acertos} acertos • ${quizState.idx} de ${total} respondidas</div>
      </div>
    </div>
  `;
}

async function answerQuiz(letter){
  if (!quizState || quizState.respondeu) return;
  quizState.respondeu = true;

  const p = quizState.perguntas[quizState.idx];
  const correct = (letter === p.gabarito);
  if (correct) quizState.acertos++;

  // UI feedback
  document.querySelectorAll('.option').forEach(btn=>{
    const l = btn.getAttribute('data-letter');
    btn.disabled = true;
    if (l === p.gabarito) btn.classList.add('correct');
    if (l === letter && l !== p.gabarito) btn.classList.add('wrong');
  });

  const footer = document.createElement('div');
  footer.className = 'quizFeedback ' + (correct ? 'ok' : 'bad');
  footer.innerHTML = correct
    ? `✅ Correto! Ótimo trabalho!`
    : `❌ Resposta incorreta. A resposta certa é: <strong>${escapeHtml(p.gabarito)}</strong>`;
  $('#quizArea .quizCard')?.appendChild(footer);

  // enviar sheets
  try {
    enviarParaSheets({
      setor: getSetor(),
      marca: quizState.marca.nome,
      kbd: quizState.kbd.nome,
      pergunta: p.pergunta,
      resposta: letter,
      correta: p.gabarito,
      acertou: correct,
      score: Math.round((quizState.acertos/quizState.perguntas.length)*100),
      tentativa: 1
    });
  } catch(e){ console.error(e); }

  // next button
  const nextBtn = document.createElement('button');
  nextBtn.className = 'btnPrimary';
  nextBtn.textContent = (quizState.idx+1 < quizState.perguntas.length) ? 'Próxima pergunta →' : 'Ver resultado →';
  nextBtn.onclick = () => nextStep();
  $('#quizArea')?.appendChild(nextBtn);
}

function nextStep(){
  quizState.idx++;
  if (quizState.idx < quizState.perguntas.length) return renderQuizQuestion();
  return renderQuizResult();
}

function renderQuizResult(){
  const total = quizState.perguntas.length;
  const acertos = quizState.acertos;
  const pct = Math.round((acertos/total)*100);

  // medalhas (regra do usuário)
  const medal = (pct === 100) ? '🥇' : (pct >= 80 ? '🥈' : '🥉');

  // marca como concluído (marca+kbd)
  markDone(quizState.marcaId, quizState.kbdId);

  const next = nextPending(quizState.marcaId, quizState.kbdId);

  // Se ainda existe pendente, NÃO mostra tela final global.
  // Mostra resultado do quiz atual + botão Continuar.
  if (next){
    $('#quizArea').innerHTML = `
      <div class="resultCard">
        <div class="resultEmoji">${medal}</div>
        <div class="resultTitle">${acertos}/${total}</div>
        <div class="resultSub">${pct}% de acertos</div>
        <div class="resultHint">Continue o fluxo até completar todas as marcas/KBDs.</div>
        <button class="btnPrimary" onclick="goToKbd('${next.marcaId}','${next.kbdId}')">Próximo conteúdo →</button>
        <button class="btnGhost" onclick="goToKbd('${quizState.marcaId}','${quizState.kbdId}')">Revisar material</button>
      </div>
    `;
    updateQuizProgress(true);
    return;
  }

  // Tudo concluído → tela final global
  $('#quizArea').innerHTML = `
    <div class="resultCard">
      <div class="resultEmoji">🎉</div>
      <div class="resultTitle">Fluxo concluído!</div>
      <div class="resultSub">Você completou todos os quizzes do ciclo.</div>
      <div class="resultHint">Se quiser, você pode revisar marcas e refazer quando necessário.</div>
      <a class="btnPrimary" href="marcas.html">Ver marcas</a>
      <a class="btnGhost" href="home.html">Voltar para Home</a>
    </div>
  `;
  updateQuizProgress(true);
}

function goToKbd(marcaId, kbdId){
  window.location.href = `kbd.html?marca=${encodeURIComponent(marcaId)}&kbd=${encodeURIComponent(kbdId)}`;
}

function goNextAfter(marcaId, kbdId){
  const next = nextPending(marcaId, kbdId) || firstPending();
  if (!next) return window.location.href='home.html';
  goToKbd(next.marcaId, next.kbdId);
}

// ====== SHEETS ======
async function enviarParaSheets(d){
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
        userAgent: navigator.userAgent
      })
    });
  } catch (e) {
    console.error(e);
  }
}
