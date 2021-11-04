var inputNumero = document.querySelector("input#numero")
var adc = document.querySelector("select#adc")
var valores = []
var res = document.querySelector("p#res")



function isNumero(n){
    if (Number(n)>=1 && Number(n) <= 100) {
        return true
        
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n))!= -1){
        return true

    }else{
        return false
    }
}


function adicionar(){
    
    valor = Number(inputNumero.value)
    if (isNumero(inputNumero.value) && !inLista(inputNumero.value, valores)) {
        
        valores.push(valor)
        
        var item = document.createElement('option')
        item.text = `Valor ${valor} adicionado. `
        adc.appendChild(item)
        
        res.innerHTML = ''
    
    } else {
        alert("Valor inserido esta incorreto ou ja existe, verifique e tente novamente.")
    }

    inputNumero.value =''
    inputNumero.focus()
    console.log(valores.sort())
}

    


function finalizar(){
    if ( valores == '' ) {
        alert('Adiciona valores antes de finalizar. ')
        
    }else{
        res.innerHTML = ''
        
        valores.sort()
        var quantidade = valores.length
        var maior = valores[0]
        var menor = valores[0]

        for (var pos in valores) {
                if (valores[pos] > maior) {
                    maior = valores[pos]
                    
                }if (valores[pos] < menor) {
                    menor = valores[pos]
                }  
        }
        

        var soma = 0 
        var media = 0

        for (var pos in valores) {
            soma += valores[pos]
            
            if (valores[pos] > maior) {
                maior = valores[pos]
                
            }if (valores[pos] < menor) {
                menor = valores[pos]
            } 
             
        }
        media = soma / quantidade



        var result = document.createElement('p')
        result.getAttribute('id','op')
        result.innerText = `Ao todo são ${quantidade} cadastrados.
        O maior valor informado foi ${maior}. 
        O menor valor informado foi ${menor}. 
        Somando todos os valores, temos ${soma} 
        A media dos valores digitados é ${media} `
        
        res.appendChild(result)
    }

}
