import { viewController } from "./view/viewController.js";
import { Usuario } from "./model/usuario.model.js";

let data = [{}];

const saveData = (event) => {
  event.preventDefaut();
  const newData = new Usuario(
    nome.value,
    idade.value,
    login.value,
    senha.value
  );
  data.push(newData);
  viewController.update(newData);
};

const controller = {
  iniciar: () => {
    viewController.build();
    const form = document.querySelector("#signForm");
    form.addEventListener("submit", saveData);
  },
};

export { controller };
