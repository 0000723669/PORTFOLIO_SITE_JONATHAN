const context = [
  {
    titulo: "App Inventor",
    paragrafo:
      "Projetos feitos no <a href='https://appinventor.mit.edu/' target='_blank'>App Inventor</a>.",
  },
  { titulo: "GitHub", paragrafo: "Meus repositórios do GitHub." },
  { titulo: "Boletim", paragrafo: "Boletim de Notas" },
];

const card = (context) => {
  let card = document.querySelector(".card-projects");
  context.forEach((element) => {
    card.innerHTML += `<div class="cardBox">
        <h2>${element.titulo}</h2>
        <p>
        ${element.paragrafo}
        </p>
        <a
          href="https://github.com/jonathandopovo/MEUS_APLICATIVOS_APP_INVENTOR/releases"
          target="_blank"
          ><button class="btn-card">Ver</button></a
        >
      </div>`;
  });
};

export default card(context);
