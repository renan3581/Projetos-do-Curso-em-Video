function contar(){

var inputInicio = document.querySelector("input#inicio")
var inputFim = document.querySelector("input#fim")
var inputPasso = document.querySelector("input#passo")
var Botao = document.querySelector("input#botao")
var Contagem = document.querySelector("div#contagem")


    
    if (inputInicio.value.length == 0 || inputFim.value.length == 0 || inputPasso.value.length == 0) {
       contagem.innerHTML = 'Impossivel Contar!' 
    
    
    }else{

        Contagem.innerHTML = `Contando: <br>`
        var inicio = Number(inputInicio.value) 
        var fim = Number(inputFim.value) 
        var passo = Number(inputPasso.value) 
            
            if (passo <=0) {
                alert("Passo invalido, Considerando passo = 1")
                passo = 1
                
            }
            
            if (inicio < fim) { //Contagem Crescente
                for (var i = inicio; i <= fim; i += passo) {
            
                
                    contagem.innerHTML += `${i}&#x1F449`  //+= concatenar (adicionar o elemento)
                
                }
            
            }else { //Contagem Regressiva
                for (var i = inicio; i >= fim; i-= passo) {          
                    
        
                
                    contagem.innerHTML += `${i}&#x1F449` 
                
                }
            }
                contagem.innerHTML += `&#x1F3C1`
    }

        
       

    }

