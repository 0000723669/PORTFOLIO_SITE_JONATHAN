let materias = []
let pessoa = []

document.querySelector("#savePerson").addEventListener("click", savePerson)
document.querySelector("#addSub").addEventListener("click", addSubject)

function savePerson() {
    if (!verificaCampoVazio("person-info")) {
        pessoa.push(document.querySelector("#name").value)
        pessoa.push(document.querySelector("#school").value)
        pessoa.push(document.querySelector("#course").value)
        document.querySelector("#personShow").innerHTML = `<ul><li>Aluno: ${pessoa[0]}</li><li>Instituíção: ${pessoa[1]}</li><li>Curso: ${pessoa[2]}</li></ul>`
        document.querySelector("#person-info").style.display = "none"
        document.querySelector("#subjects-add").style.display = "block"
    }
}

function addSubject() {
    if (!verificaCampoVazio("subjects-add") && verificaValorMinMax("subjects-add")) {

    }
}


function verificaCampoVazio(div) {
    let inputs = document.querySelectorAll(`#${div} input`)
    let erro;
    inputs.forEach(item => {
        item.value == '' ? erro = true : erro = false
    });
    erro ? alert("Preencha todos os campos!") : null
    return erro
}

function verificaValorMinMax(div) {
    let bim1 = document.querySelector(`.subjects-add bim1`)
    let bim2 = document.querySelector(`.subjects-add bim2`)
    let bim3 = document.querySelector(`.subjects-add bim3`)
    let bim4 = document.querySelector(`.subjects-add bim4`)
    let erro = false
    var bimErro = 0;
    bim1 < 0 || bim1 > 20 ? bimErro = 1 : null
    bim2 < 0 || bim2 > 25 ? bimErro = 2 : null
    bim2 < 0 || bim2 > 25 ? bimErro = 3 : null
    bim2 < 0 || bim2 > 30 ? bimErro = 4 : null

    if (bimErro > 0) {
        erro = true
        bimErro == 1 ? alert("O valor minimo é de 0 para todos os bimestres, e no máximo 20 para o bimestre 1!") :
            bimErro == 2 ? alert("O valor minimo é de 0 para todos os bimestres, e no máximo 25 para o bimestre 2!") :
                bimErro == 3 ? alert("O valor minimo é de 0 para todos os bimestres, e no máximo 25 para o bimestre 3!") :
                    bimErro == 4 ? alert("O valor minimo é de 0 para todos os bimestres, e no máximo 30 para o bimestre 4!") : null
    }
    return erro
}

