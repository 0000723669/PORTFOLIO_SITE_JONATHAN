let materias = [];
let pessoa = { nome: "", instituicao: "", curso: "" };

document.querySelector("#savePerson").addEventListener("click", savePerson);
document.querySelector("#addSub").addEventListener("click", addSubject);

function savePerson() {
  if (!verificaCampoVazio("person-info")) {
    pessoa.nome = document.querySelector("#name").value;
    pessoa.instituicao = document.querySelector("#school").value;
    pessoa.curso = document.querySelector("#course").value;
    document.querySelector(
      "#personShow"
    ).innerHTML = `Aluno: ${pessoa.nome}<br>Instituição: ${pessoa.instituicao}<br>Curso: ${pessoa.curso}`;
    document.querySelector("#person-info").style.display = "none";
    document.querySelector("#subjects-add").style.display = "block";
    document.querySelector(".main-content").classList.toggle("big-size");
    document.querySelector("#resultadoBoletim").style.display = "block";
  }
}

function addSubject() {
  if (
    !verificaCampoVazio("subjects-add") &&
    !verificaValorMinMax("subjects-add") &&
    !verificaMateriaAdicionada()
  ) {
    let tempMateria = document.querySelector("#subjects").value;
    let tempNotas = [];
    document.querySelectorAll(".grade").forEach((input) => {
      tempNotas.push(parseFloat(input.value));
    });

    materias.push({
      materia: tempMateria,
      notas: tempNotas,
    });

    materias.forEach((materia) => {
      if (materia.materia === tempMateria) {
        let sum = materia.notas.reduce((sum, elmt) => sum + elmt, 0);
        document.querySelector("#resultadoBoletim").innerHTML += `
            <hr>
            RESULTADO DE <b>${materia.materia.toLocaleUpperCase()}</b> 
            <table class="table">
                <tr>
                  <th scope="row">1º Bimestre:</th>
                  <td>${materia.notas[0]} pontos</td>
                </tr>

                <tr>
                  <th scope="row">2º Bimestre:</th>
                  <td>${materia.notas[1]} pontos</td>
                </tr>

                <tr>
                  <th scope="row">3º Bimestre:</th>
                  <td>${materia.notas[2]} pontos</td>
                </tr>
                <tr>
                  <th scope="row">4º Bimestre:</th>
                  <td>${materia.notas[3]} pontos</td>
                </tr>
                <tr>
                  <th scope="row">TOTAL FINAL:</th>
                  <td><b>${sum} pontos<b></td>
                </tr>
                <tr>
                  <th scope="row">Status:</th>
                  <td><b>${sum >= 60 ? "Aprovado" : "Reprovado"}<b></td>
                </tr>
                
            </table>
               
        `;
      }
    });
  }
}

function verificaCampoVazio(div) {
  let inputs = document.querySelectorAll(`#${div} input`);
  let erro;
  inputs.forEach((item) => {
    item.value == "" ? (erro = true) : (erro = false);
  });
  erro ? alert("Preencha todos os campos!") : null;
  return erro;
}

function verificaValorMinMax(div) {
  let bim1 = parseFloat(document.querySelector(`#subjects-add #bim1`).value);
  let bim2 = parseFloat(document.querySelector(`#subjects-add #bim2`).value);
  let bim3 = parseFloat(document.querySelector(`#subjects-add #bim3`).value);
  let bim4 = parseFloat(document.querySelector(`#subjects-add #bim4`).value);
  let erro = false;
  var bimErro = 0;

  bim1 < 0 || bim1 > 20
    ? (bimErro = 1)
    : bim2 < 0 || bim2 > 25
    ? (bimErro = 2)
    : bim3 < 0 || bim3 > 25
    ? (bimErro = 3)
    : bim4 < 0 || bim4 > 30
    ? (bimErro = 4)
    : null;

  if (bimErro > 0) {
    erro = true;
    bimErro == 1
      ? alert(
          "O valor minimo é de 0 para todos os bimestres, e no máximo 20 para o bimestre 1!"
        )
      : bimErro == 2
      ? alert(
          "O valor minimo é de 0 para todos os bimestres, e no máximo 25 para o bimestre 2!"
        )
      : bimErro == 3
      ? alert(
          "O valor minimo é de 0 para todos os bimestres, e no máximo 25 para o bimestre 3!"
        )
      : bimErro == 4
      ? alert(
          "O valor minimo é de 0 para todos os bimestres, e no máximo 30 para o bimestre 4!"
        )
      : null;
  }
  return erro;
}

function verificaMateriaAdicionada() {
  let tempMateria = document.querySelector("#subjects").value;
  let erro = false;
  materias.forEach((item) => {
    item.materia == tempMateria ? (erro = true) : null;
  });
  erro ? alert("Esta matéria já foi adicionada!") : null;
  return erro;
}
