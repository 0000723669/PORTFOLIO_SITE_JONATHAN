const icons = (context) => {
  let icons = document.querySelector("#pageIcons");
  context.forEach((element) => {
    icons.innerHTML += `
    <a href="${element.link}" target="_blank">
    <img
      src="${element.img}"
      id="${element.id}"
      class="icon"
      alt="${element.alt}"
    />
  </a>
  <!-- Used Icon: ${element.font} -->
        `;
  });
};

export default icons;
