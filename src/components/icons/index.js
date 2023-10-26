const context = [
  {
    link: "https://api.whatsapp.com/send?phone=5531999414881&text=Ol%C3%A1,%20Estava%20no%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es!",
    img: "./src/images/whatsappIcon.svg",
    id: "whatsapp",
    alt: "Ícone do WhatsApp",
    font: "https://www.svgrepo.com/svg/349563/whatsapp",
  },
  {
    link: "https://www.linkedin.com/in/jonathandeoliveirarocha/",
    img: "./src/images/linkedinIcon.svg",
    id: "linkedin",
    alt: "Ícone do Linkedin",
    font: "https://www.svgrepo.com/svg/448234/linkedin",
  },
  {
    link: "mailto:jonathandeoliveirarocha2002@gmail.com",
    img: "./src/images/gmailIcon.svg",
    id: "gmail",
    alt: "Ícone do Gmail",
    font: "https://www.svgrepo.com/svg/452213/gmail",
  },
  {
    link: "https://github.com/jonathandopovo",
    img: "./src/images/githubIcon.svg",
    id: "github",
    alt: "Ícone do GitHub",
    font: "https://www.svgrepo.com/svg/512317/github-142",
  },
];

const icons = (context) => {
  document.querySelector("#pageIcons");
  context.forEach((element) => {
    icons.innexHTML += `
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

export default icons(context);
