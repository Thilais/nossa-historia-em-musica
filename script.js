const pages = [
  {
    bg: "https://t4.ftcdn.net/jpg/06/26/47/73/360_F_626477387_AEIQS9r7ye39jiLdxi7BkMObcrSTrLBJ.jpg",
    html: `<h1>Nossa história</h1>
    <p>Nossos caminhos se cruzaram, tantas coisas aconteceram, e como num filme, existe uma trilha sonora que acompanha cada capítulo da nossa história.<br>
    Quero te levar pra mergulhar comigo nesse enredo feito de momentos, músicas e sentimentos que só fazem sentido quando é com você.</p>
    <p>Ouça cada música até o final, e relembre comigo tudo que vivemos até aqui <3 </p>
    <button class='btn' onclick='nextPage()'>Começar</button>`
  },
  {
    bg: "https://thumbs.dreamstime.com/b/um-paraquedista-contra-fundo-do-c%C3%A9u-azul-e-nuvens-brancas-paraquedismo-com-uma-cobertura-vermelha-de-paraquedas-salto-195793805.jpg",
    video: "musicas/paraquedas.mp4",
    html: `<h1>Paraquedas - Cupertino</h1>
    <p>No começo de tudo, eu nem imaginava que o teu beijo me levaria tão longe.<br>
    Foi como pular no desconhecido — e pousar no teu abraço.</p>`
  },
  {
    bg: "https://marketplace.canva.com/EAFEhXLBpkg/1/0/1600w/canva-plano-de-fundo-para-v%C3%ADdeo-abstrato-cor-e-estilo-azul-branco--6VVWMQNYYw.jpg",
    video: "musicas/azul.mp4",
    html: `<h1>Azul - Melly</h1>
    <p>Quando você chega, tudo muda de cor.
    Uma calmaria que só existe quando estamos juntas.</p>`
  },
  {
    bg: "https://img.freepik.com/fotos-gratis/textura-de-fundo-de-papel-amassado-velho-grunge-com-design-de-coracoes-de-dia-dos-namorados_1048-17780.jpg",
    video: "musicas/zeroacem.mp4",
    html: `<h1>Zero a Cem - Os Garotin</h1>
    <p>Tem algo em você que me transforma por completo.  
    Você me leva de zero a cem com um sorriso.</p>`
  },
  {
    bg: "https://t3.ftcdn.net/jpg/02/73/62/02/360_F_273620242_EGmYZddPe9QUPw8YardUfE1CBeNWjugo.jpg",
    video: "musicas/moloucura.mp4",
    html: `<h1>Mó Loucura - Dilsinho</h1>
    <p>A gente é essa loucura boa que faz o coração bater fora do ritmo.  
    E eu amo isso.</p>`
  },
  {
    bg: "https://images.pexels.com/photos/243971/pexels-photo-243971.jpeg",
    video: "musicas/aguadechuva.mp4",
    html: `<h1>Água de Chuva no Mar - Beth Carvalho</h1>
    <p>A gente segue na mesma direção — leve, infinito, bonito.</p>`
  },
  {
    bg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIDLoSjR_zAUHP259B4f6R_xTDOnp8S7t_0lNKvQ-cDse4WKMZ4fPJXtOwIIWNx67QsuA",
    html: `<h1>Nosso Jantar</h1>
    <p>Te espero para o nosso jantar especial.  
    A última música começa quando estivermos juntas.</p>`
  }
];

let currentPage = 0;

function nextPage() {
  currentPage++;
  renderPage();
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    renderPage();
  }
}

function renderPage() {
  const { bg, html, video } = pages[currentPage];
  
  document.body.style.backgroundImage = `url(${bg})`;

  const videoTag = video
    ? `<video class="player" controls><source src="${video}" type="video/mp4"></video>`
    : '';
  
  const backBtn =
    currentPage > 0
      ? `<button class='btn' onclick='prevPage()'>Voltar</button>`
      : '';

  const nextBtn =
    currentPage < pages.length - 1
      ? `<button class='btn' onclick='nextPage()'>Próxima</button>`
      : '';

  document.getElementById('page').innerHTML =
    html + videoTag + `<div class='nav'>${backBtn}${nextBtn}</div>`;
}

renderPage();
