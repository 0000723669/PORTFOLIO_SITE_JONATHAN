const card = (context) => {
  let card = document.querySelector(".card-projects");
  context.forEach((element) => {
    card.innerHTML += `<div class="cardBox">
        <h2>${element.titulo}</h2>
        <p>
        ${element.paragrafo}
        </p>
        <a
          href="${element.link}"
          ><button class="btn-card">Ver</button></a
        >
      </div>`;
  });
};

const cardContext = [
  {
    titulo: "App Inventor",
    paragrafo:
      "Projetos feitos no <a href='https://appinventor.mit.edu/' target='_blank'>App Inventor</a>.",
    link: 'https://github.com/jonathandopovo/MEUS_APLICATIVOS_APP_INVENTOR" target="_blank',
  },
  {
    titulo: "GitHub",
    paragrafo: "Meus repositórios do GitHub.",
    link: 'https://github.com/jonathandopovo?tab=repositories" target="_blank',
  },
  {
    titulo: "Boletim",
    paragrafo: "Boletim de Notas",
    link: "/src/pages/boletim/boletim.html",
  },
];

card(cardContext)