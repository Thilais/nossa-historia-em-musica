const pages = [
  {
    bg: "https://t4.ftcdn.net/jpg/06/26/47/73/360_F_626477387_AEIQS9r7ye39jiLdxi7BkMObcrSTrLBJ.jpg",
    html: `<h1>Nossa história</h1><p>Nossos caminhos se cruzaram, tantas coisas aconteceram, e como num filme, existe uma trilha sonora que acompanha cada capítulo da nossa história.<br>Quero te levar pra mergulhar comigo nesse enredo feito de momentos, músicas e sentimentos que só fazem sentido quando é com você.</p><button class='btn' onclick='nextPage()'>Começar</button>`
  },
  {
    bg: "https://thumbs.dreamstime.com/b/um-paraquedista-contra-fundo-do-c%C3%A9u-azul-e-nuvens-brancas-paraquedismo-com-uma-cobertura-vermelha-de-paraquedas-salto-195793805.jpg",
    music: "https://drive.google.com/uc?export=download&id=1PpJbtVwUysUWNYMPZY1ygDFHAxiakq-7",
    html: `<h1>Paraquedas - Cupertino</h1><p>No começo de tudo, eu nem imaginava que o teu beijo me levaria tão longe. Foi como pular no desconhecido, sem pensar duas vezes. Me joguei — e foi no teu abraço que encontrei o melhor lugar pra pousar.</p><p><em>"Eu quero<br>Ver a luz que habita teu sorriso<br>E se te amar for precipício<br>Eu levo um paraquedas<br>Me jogo no vento<br>Te encontro no ar"</em></p>`
  },
  {
    bg: "https://marketplace.canva.com/EAFEhXLBpkg/1/0/1600w/canva-plano-de-fundo-para-v%C3%ADdeo-abstrato-cor-e-estilo-azul-branco--6VVWMQNYYw.jpg",
    music: "https://drive.google.com/uc?export=download&id=1oODhiiMG14o8Ch9JJG_HI_OWrT7mG5CI",
    html: `<h1>Azul - Melly</h1><p>Quando você chega, tudo ao redor muda de cor. O mundo desacelera e ganha tons de calmaria. É um azul que só existe quando estamos juntas, nesse segredo que só a gente entende — e nem precisa mais ninguém saber.</p><p><em>"Tudo azul, eu e você<br>Chega mais perto pra tu ver<br>Pode ser nosso segredo<br>Ninguém precisa saber"</em></p>`
  },
  {
    bg: "https://img.freepik.com/fotos-gratis/textura-de-fundo-de-papel-amassado-velho-grunge-com-design-de-coracoes-de-dia-dos-namorados_1048-17780.jpg?semt=ais_hybrid&w=740&q=80",
    music: "https://drive.google.com/uc?export=download&id=1EE6YMEhywsHlybPnlb2L3s1VgLSVx-06",
    html: `<h1>Zero a Cem - Os Garotin</h1><p>Tem algo em você que me transforma por completo. É no toque, no jeito de falar, no sorriso. Você me leva de zero a cem com uma facilidade que eu não consigo explicar — só sentir. E a verdade é que eu nunca quis resistir.</p><p><em>"Já disse em outro som, igual não tem<br>Sabe me levar de zero a cem<br>Eu não aprendi a negar<br>Tem o dom de me dominar"</em></p>`
  },
  {
    bg: "https://t3.ftcdn.net/jpg/02/73/62/02/360_F_273620242_EGmYZddPe9QUPw8YardUfE1CBeNWjugo.jpg",
    music: "https://drive.google.com/uc?export=download&id=1LV8r08AYG-Q1hFoA6_e6gZ-FFn7w862j",
    html: `<h1>Mó Loucura - Dilsinho</h1><p>A gente é essa loucura boa que faz o coração bater fora do ritmo. Você sabe exatamente como me conquistar — na leveza e na intensidade. E por mais que seja louco... é com você que eu quero perder o juízo.</p><p><em>"Só você tem a senha do meu coração<br>Faz na manha, também faz na pressão<br>Uma loucura a gente não sabe parar<br>Arrepia só de imagina"</em></p>`
  },
  {
    bg: "https://images.pexels.com/photos/243971/pexels-photo-243971.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    music: "https://drive.google.com/uc?export=download&id=1TNGGcMlfhDP1KQQvc1091lhM3iUcx0AM",
    html: `<h1>Água de Chuva no Mar - Beth Carvalho</h1><p>Nosso amor tem essa força serena que não precisa de explicação. A gente se entende num olhar, segue na mesma direção, com leveza, com entrega, como água de chuva que encontra o mar. E quando chega lá... vira imensidão.</p><p><em>"A gente se fala no olhar (no olhar)<br>É água de chuva no mar (no mar)<br>Caminha pro mesmo lugar<br>Sem pressa, sem medo de errar<br>É tão bonito, é tão bonito o nosso amor"</em></p>`
  },
  {
    bg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIDLoSjR_zAUHP259B4f6R_xTDOnp8S7t_0lNKvQ-cDse4WKMZ4fPJXtOwIIWNx67QsuA&usqp=CAU",
    html: `<h1>Nosso Jantar</h1><p>Te espero para o nosso jantar especial — pensado com carinho, detalhe por detalhe. E é nesse momento só nosso que eu quero te entregar a última música dessa playlist... aquela que vai marcar o início de um novo capítulo da nossa história.</p>`
  }
];

let currentPage = 0;

function nextPage() {
  currentPage++;
  renderPage();
  setTimeout(() => {
    const audio = document.querySelector("audio");
    if (audio) audio.play().catch(() => {});
  }, 300);
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    renderPage();
    setTimeout(() => {
      const audio = document.querySelector("audio");
      if (audio) audio.play().catch(() => {});
    }, 300);
  }
}

function renderPage() {
  const { bg, html, music } = pages[currentPage];
  document.body.style.backgroundImage = `url(${bg})`;
  let audioTag = music ? `<audio controls><source src="${music}" type="audio/mpeg"></audio>` : '';
  let nextBtn = (currentPage < pages.length - 1) ? `<button class='btn' onclick='nextPage()'>Próxima</button>` : '';
  let backBtn = (currentPage > 0) ? `<button class='btn' onclick='prevPage()' style='margin-right: 10px;'>Voltar</button>` : '';
  document.getElementById('page').innerHTML = html + audioTag + `<div>${backBtn}${nextBtn}</div>`;
}

renderPage();
