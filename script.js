const pages = [
  {
    bg: "https://t4.ftcdn.net/jpg/06/26/47/73/360_F_626477387_AEIQS9r7ye39jiLdxi7BkMObcrSTrLBJ.jpg",
    html: `<h1>A gente juntas é música e cor</h1>
    <p>Nos conhecemos no carnaval, nos aproximamos nas rodas de samba, namoramos depois de um funk, e desde o começo tem músicas que me fazem pensar em você sem eu nem perceber — já existe até uma playlist inteira que virou sua, mesmo sem a gente ter combinado nada.</p>
    <p>Separei algumas músicas que contam um pedacinho do que somos, do que tem acontecido entre nós e do que eu sinto quando estou contigo.</p>
    <p>Clica em começar pra passear por algumas dessas músicas comigo?</p>
    <button class='btn' onclick='nextPage()'>Começar</button>`
  },
  {
    bg: "https://thumbs.dreamstime.com/b/um-paraquedista-contra-fundo-do-c%C3%A9u-azul-e-nuvens-brancas-paraquedismo-com-uma-cobertura-vermelha-de-paraquedas-salto-195793805.jpg",
    video: "musicas/paraquedas.mp4",
    html: `<h1>Paraquedas - Cupertino</h1>
    <p>“Mil pés... Teu beijo me levou quase pro céu”</p>
    <p>“Eu quero ter a chance de te ver de novo...<br>
    ...eu levo um paraquedas, me jogo no vento, te encontro no ar”</p>
    <p>Nosso amor pareceu caminhar perto de um precipício por um tempo...<br>
    Mas: Se te amar for um precipício, preocupa não...<br>
    porque, respondendo sua pergunta de um tempo atrás, a gente já tem paraquedas.</p>`
  },
  {
    bg: "https://marketplace.canva.com/EAFEhXLBpkg/1/0/1600w/canva-plano-de-fundo-para-v%C3%ADdeo-abstrato-cor-e-estilo-azul-branco--6VVWMQNYYw.jpg",
    video: "musicas/azul.mp4",
    html: `<h1>Azul - Melly</h1>
    <p>“Tudo azul, eu e você<br>
    Chega mais perto pra tu ver”</p>
    <p>“sei que cê sente o que eu tô sentindo...<br>
    Mandou mensagem, não sei porque eu to sorrindo”</p>
    <p>A música já diz por si só: troca de olhares, tudo azul, chegou mais perto…<br>
    e o restante, a gente sabe..</p>`
  },
  {
    bg: "https://img.freepik.com/fotos-gratis/textura-de-fundo-de-papel-amassado-velho-grunge-com-design-de-coracoes-de-dia-dos-namorados_1048-17780.jpg",
    video: "musicas/zeroacem.mp4",
    html: `<h1>Zero a Cem - Os Garotin</h1>
    <p>“Já disse em outro som, igual não tem<br>
    Sabe me levar de zero a cem...<br>
    Ela me chama, entro na dança”</p>
    <p>Então né... Zero a cem... É isso.<br>
    É a gente, e essa nossa intensidade.</p>
    <p>“Esse teu sorriso é sempre um leva e traz...<br>
    E se tu quiser fica um pouco mais”</p>`
  },
  {
    bg: "https://t3.ftcdn.net/jpg/02/73/62/02/360_F_273620242_EGmYZddPe9QUPw8YardUfE1CBeNWjugo.jpg",
    video: "musicas/moloucura.mp4",
    html: `<h1>Mó Loucura - Dilsinho</h1>
    <p>“Só você tem a senha do meu coração...<br>
    Uma loucura a gente não sabe parar...”</p>
    <p>Não fico legal muito tempo sem você não, até porque tô só há um ____ de distância de tu o tempo todinho.<br>
    Deve ser coisa de horóscopo, vai saber. Rs</p>`
  },
  {
    bg: "https://images.pexels.com/photos/243971/pexels-photo-243971.jpeg",
    video: "musicas/aguadechuva.mp4",
    html: `<h1>Água de Chuva no Mar - Beth Carvalho</h1>
    <p>“A gente se fala no olhar...<br>
    É tão bonito, é tão bonito o nosso amor.”</p>
    <p>Tem muitos sambas que me fazem lembrar de você cantando nas rodas do Preta… esse é um deles.<br>
    E, sobre a música: a gente meio que se fala assim mesmo — no olhar, no gesto. É bonito. Tem pressa e não tem. Não tem mais medo de errar.</p>`
  },
  {
    bg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIDLoSjR_zAUHP259B4f6R_xTDOnp8S7t_0lNKvQ-cDse4WKMZ4fPJXtOwIIWNx67QsuA",
    html: `<h1>Nossa viagem e nosso jantar</h1>
    <p>Te espero para o nosso jantar especial.<br>
    A última música começa quando estivermos juntas.</p>`
  }
];

let currentPage = 0;

function nextPage() {
  if (currentPage < pages.length - 1) {
    currentPage++;
    renderPage();
  }
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    renderPage();
  }
}

function renderPage() {
  const { bg, html, video } = pages[currentPage];

  // Mudar fundo
  document.body.style.backgroundImage = `url(${bg})`;

  // Montar player se tiver vídeo
  const videoTag = video
    ? `<video class="player" controls><source src="${video}" type="video/mp4"></video>`
    : '';

  // Botões de navegação
  const backBtn = currentPage > 0
    ? `<button class='btn voltar' onclick='prevPage()'>Voltar</button>`
    : '';

  const nextBtn = currentPage < pages.length - 1
    ? `<button class='btn' onclick='nextPage()'>Próxima</button>`
    : '';

  // Atualizar conteúdo
  document.getElementById('page').innerHTML =
    html + videoTag + `<div class='nav'>${backBtn}${nextBtn}</div>`;

  // Scroll para o topo do contêiner
  document.getElementById('page').scrollTop = 0;
}

renderPage();