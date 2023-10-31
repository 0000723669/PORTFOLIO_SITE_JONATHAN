const formNewUser = {
  build: () => {
    const root = document.querySelector("#root");
    const formTemplate = document.createElement("form");
    formTemplate.className = "form-control";
    formTemplate.setAttribute("id", "signForm");
    formTemplate.innerHTML = `
    
        <label class="form-label" for="nome">Nome:</label>    
        <input class="form-control" for="" type="text" id="nome" placeholder="nome">
        <label class="form-label" for="idade">Idade:</label>
        <input class="form-control" for="" type="number" id="idade" placeholder="idade">
        <label class="form-label" for="login">Login:</label>
        <input class="form-control" for="" type="senha" id="login" placeholder="login">
        <label class="form-label" for="senha">Senha:</label>
        <input class="form-control" for="" type="password" id="senha"  placeholder="senha">
    `;
    root.appendChild(formTemplate);
  },
};
export { formNewUser };
