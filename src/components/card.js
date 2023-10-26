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

export default card;
