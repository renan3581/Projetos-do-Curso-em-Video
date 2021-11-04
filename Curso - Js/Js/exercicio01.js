{
function horadodia(){
    var a1 = document.querySelector("body")
    var a2 = document.querySelector("img#img")
    var a3 = document.querySelector("div#hora")
    

    var back = a1
    var img = a2
    var horario = a3
   

    var agora = new Date()
    var hora = agora.getHours()
    
 
        if (hora >=0 && hora < 12) {
            horario.innerHTML = `Agora são ${hora} horas.`
            img.src = "../imagens/fotomanha.png"
            back.style.backgroundColor = "rgb(123, 185, 255)"
        } else  if (hora >=12 && hora <=18){
            img.src = "../imagens/fototarde.png"
            horario.innerHTML = `Agora são ${hora} horas.`
            back.style.backgroundColor = "rgb(250, 161, 81)"
            
        } else{
            horario.innerHTML = `Agora são ${hora} horas.`
            img.src = "../imagens/fotonoite.png"
            back.style.backgroundColor = "rgba(69, 73, 77, 0.87)"
        }


    }

}