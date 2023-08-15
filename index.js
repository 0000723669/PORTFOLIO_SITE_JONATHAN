var control = 0
function clique(){
    var div =  document.querySelector(".resposta")
    var btn = document.querySelector("#btn")
    if(control==0){
        div.innerHTML = "<p>Estudante do curso Técnico em Informática para Internet no SENAI</p>" + "\n"+
        "<a href='https://www.google.com/maps/place/S%C3%A3o+Gon%C3%A7alo+do+Rio+Abaixo+-+MG/@-19.7974175,"+"\n"+
        "-43.4788185,11z/data=!4m6!3m5!1s0xa5b311780618b7:0x7e8518aecc3cf780!8m2!3d-19.8226405!4d-43.3663742!16s%2Fm%2F04qb5lc?entry=ttu'>"+"\n"+
        "<p>Patrimônio, São Gonçalo do Rio Abaixo - MG</p></a><p>Gosto de Jogar Fortnite e Tocar Violão</p>"+"\n"+
        "<a href='https://www.instagram.com/jonathanor__'><p>Instagram</p></a>"
        btn.value = "Ocultar Informações"
        control++
    }else{
        div.innerHTML = "<h1>...</h1>"
        btn.value = "Exibir Informações"
        control--
    }
    
}
