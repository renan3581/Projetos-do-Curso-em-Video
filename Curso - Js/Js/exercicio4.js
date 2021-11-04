function gerar(){

    var inputNumero = document.querySelector("input#numero")
    var tabuada = document.querySelector("select#seltab")

    if (inputNumero.value == '') {
        alert("Porfavor digite um número.")
        
    }else{
        var numero = Number(inputNumero.value)
        tabuada.innerHTML = ''

        for (var i = 0; i <= 10; i++) {
            var item = document.createElement('option')
            item.text = `${numero} x ${i} = ${numero*i}`
            item.value = `tab${i}`
            tabuada.appendChild(item)
        }
        
    }

    

}

