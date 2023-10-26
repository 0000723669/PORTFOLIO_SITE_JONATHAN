const header = () => {
  document.querySelector("#header").innerHTML = `<header class="cardshadow">
  <nav class="nav-items">
      <a href="/src/../index.html#inicio" class="button to-left "><img src="/src/images/profile.png" class="img" alt="Imagem de Perfil"></a>
  
      <a href="/src/../index.html#contato" class="button to-right padding-large">CONTATOS</a>
      <a href="/src/../index.html#artigos" class="button to-right padding-large">ARTIGOS</a>
      <a href="/src/../index.html#projetos" class="button to-right padding-large">PROJETOS</a>
      <a href="/src/../index.html#sobre" class="button to-right padding-large">SOBRE</a>
      
  </nav>
  </header>`;
};

export default header();
