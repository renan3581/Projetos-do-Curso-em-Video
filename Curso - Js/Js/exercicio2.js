function verificar(){
var data = new Date()
var ano = data.getFullYear()
var inserido = document.querySelector("input#input")
var texto = document.querySelector('p#res')



if (inserido.value.length == 0 ||inserido.value > ano ) {
    alert("[Erro]Verifique os dados inseridos")
}else {
    var fsex = document.getElementsByName('rdsex')
    var idade =  ano - inserido.value
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id','foto')


    if (fsex[0].checked){
        genero = "Homem"
        if (idade>=0 && idade <= 10 ){
            //criança
            img.setAttribute('src','../imagens/criança-m.jpg')


        }else if(idade > 10 && idade <= 18){
            //adolecente
            img.setAttribute('src','../imagens/adolecent-m.jpg')

        }else if(idade > 18 && idade <= 60){
            //adulto
            img.setAttribute('src','../imagens/adulto-m.jpg')

        }else{
            //idoso
            img.setAttribute('src','../imagens/idoso-m.jpg')

        }

        
    }else if(fsex[1].checked){
        genero = "Mulher"
        if (idade>=0 && idade <= 10 ){
            //criança
            img.setAttribute('src','../imagens/criança-f.jpg')


        }else if(idade > 10 && idade <= 18){
            //adolecente
            img.setAttribute('src','../imagens/adolecent-f.jpg')

        }else if(idade > 18 && idade <= 60){
            //adulto
            img.setAttribute('src','../imagens/adulto-f.jpg')

        }else{
            //idoso
            img.setAttribute('src','../imagens/idoso-f.jpg')

        }
    }
    texto.style.textAlign = 'center'
    texto.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    texto.appendChild(img)

} 

     




}
