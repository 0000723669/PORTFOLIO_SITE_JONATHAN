import header from "../components/header.js";
import footer from "../components/footer.js";
import card from "../components/card.js";
import icons from "../components/icons.js";

function openContent(event, nomeArtigo) {
  var i, article_content, linkToArticle;
  article_content = document.getElementsByClassName("article-content");
  for (i = 0; i < article_content.length; i++) {
    article_content[i].style.display = "none";
  }
  linkToArticle = document.getElementsByClassName("linkToArticle");
  for (i = 0; i < linkToArticle.length; i++) {
    linkToArticle[i].className = linkToArticle[i].className.replace(
      " active",
      ""
    );
  }
  document.getElementById(nomeArtigo).style.display = "block";
  event.currentTarget.className += " active";
}

var url_atual = window.location.href;
var artigoPadrao = "";
var a = url_atual.indexOf("#");
for (var i = a + 1; i < url_atual.length; i++) {
  artigoPadrao += url_atual[i];
}
if (artigoPadrao == url_atual) {
  document.getElementById("artigo1").click();
} else {
  document.getElementById(`${artigoPadrao}`).click();
}

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

const iconsContext = [
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

card(cardContext);
icons(iconsContext);
