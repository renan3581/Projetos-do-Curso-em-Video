//Tecla F8 para testar no node.


/*#########################----Variaveis----###########################*/

//No js as variaveis podem receber qualquer valor, seja string, int, double, boolean, etc.
//No js acentuações podem ser usadas na identificação das variaveis Ex.: var mecânica = "eletro";
//Se você quiser saber qual é o tipo da variavel(String, int, etc..) basta você escrever no alert "typeof + Variavel". Ex.: typeof dragon.
//var nome = "Rola";


//Let e Const so podem ser declaradas dentro do escopo de bloco ao qual elas pertencem, ou seja elas só podem ser usandas dentro do "{}" ao qual elas pertencem.
//let numero = 1;
//const boolean = true;

//any - pode ser atribuido qualquer valor, mesmo que o anterior seja de um tipo diferente.
//testeAny = 100;
//testeAny = 'string'
//console.log(minhavida)


/*
if ('True'){ //True - Define que essa condicional sempre sera executada 
    let dragon = 'Bahamut' 
    console.log(dragon) //Ira executar normalmente.
}
    console.log(dragon) //Ira apresentar um erro no console quando executado.
*/

/*
var exibeMensagem = function() {
    if(true) { 
        var escopoFuncao = 'Caelum'; 
        let escopoBloco = 'Alura';

       console.log(escopoBloco); // Alura 
   } 
   console.log(escopoFuncao); // Caelum 
   console.log(escopoBloco); //ira dar erro.
}
*/


/*##########----Escrevendo no documento e no Console do nav----########*/

//Podem ser utilizadas <tags> como <h1> e <p>.
//document.write("<h1>1</h1>")
//document.write("2")
//document.write("<strong>3</strong><br>")
//Console.log("1131")


/*#############################----Alertas----#########################*/

//Disparando um alerta simples. 
//window.alert(a);


//Você pode ocultar o Window e digitar somente o alerta.
//Alerta com Confirmação de Ok ou Cancelar.
//confirm("Esta Maneiro ?")


//Alerta com Inserção de dados e Armazenamento dos dados inseridos.(Pode ser usado no Confirm tambem.)
//var inserido = prompt("Certamente não é o __________")
//alert(inserido) //Retornando o valor inserido na Variavel.



/*#################----Operadores e Conversores----#####################*/
                    
//var numero1 = prompt("Digite um número:")
//var numero2 = prompt("Digite outro número:")


//Conversão String para Number

//Numero inteiro
//var numero1 = Number.parseInt(prompt("Digite um número:")) //Vesão extensa
//var numero2 = parseInt(prompt("Digite outro número:")) //Versão Simplificada

//Numero Real
//var numero1 = Number.parseFloat(prompt("Digite um número:")) //Vesão extensa
//var numero2 = parseFloat(prompt("Digite outro número:")) //Versão Simplificada


//Sem definir o tipo(Real ou Inteiro) - Só existe a versão simplificada

/*
var numero1 = Number(prompt("Digite um número:" )) 
var numero2 = Number(prompt("Digite outro número:" )) 
var tarefa = prompt("digite uma Operação(' + ', ' - ', ' / ', ' * ', ' % ', ' r/ ', ' ** ', ' m ') - Utilize ' . ' no lugar da ' , ' para números Reais:")


//Conversao de Number para String
//String(numero1)
//numero1.String

//Operadores Binários.

//Em caso de mais de uma operação em um unico codigo a ordem de prioridade sera a seguinte: '()' '**' '*' '/' '%' '+' '-'. "

    if (tarefa == "+") {
        var soma = numero1 + numero2
        alert(soma) 
    }
    if (tarefa == "-") {
        var sub =  numero1 - numero2
        alert(sub)
    }
    if (tarefa == "/") {
        var div = numero1/numero2
        alert(div)
    }
    if (tarefa == "*") {
        var mult = numero1 * numero2
        alert(mult)
    }
    if (tarefa == "%") {
        var porc = (numero1/100)*numero2
        alert(porc)
    }
    if (tarefa == "r/") { //Resto da divisão. Ex.: 5/2 = Resto 1.
        var resto = numero1 % numero2
        alert(resto)
    }
    if (tarefa == "**") { //Potência.
        var pot = numero1 ** numero2
        alert(pot)
    }
    if (tarefa == "m") { 
        var mesclar = (((((numero1 - numero2) / numero1) + numero2) * numero1)**numero2)
        var mesclar2 = (numero1 - numero2 / numero1 + numero2 * numero1**numero2)
        alert(` Resultado 1 : (${mesclar}), Resultado 2: (${mesclar2})`)
    }

    
//Auto Atribuição - Ou seja alterando o valor que ja existe na variavel
    
    soma = soma + 4
    alert(soma) 

    soma = soma + 2
    alert(soma) 

//Simplificando - Só funciona se a variavel reseber ela mesma. ex.: se fosse soma = div + 1, não funcionaria, apenas se no lugar de "div" fosse "soma". 
    
    soma += 1
    document.writeln(soma)
    
    soma -= 1
    document.writeln(soma)
    
    soma *= 5
    document.writeln(soma)

//Simplificando mais ainda - Operadores de incremento - Somente - e +.   

    soma++ //soma = soma + 1 
    document.writeln(soma)
    
    soma-- 
    document.writeln(soma)
    
    ++soma //acrescenta o 1 e ja apresenta o resultado. Teste no console para ficar mais claro.
    document.writeln(soma)
*/



/*########################----Operadores relacionais----#################*/
/*
var numero1 = 1
var numero2 = 2
var nome = "test"

document.writeln(numero1<numero2)
document.writeln(numero1>'3')
document.writeln(2<=numero2)
document.writeln(3>=numero2)
document.writeln(nome=="test")
document.writeln(nome!="rodrigo")

//Identificar se os valores são identicos, incluindo seu tipos.

document.writeln(numero1===1)
document.writeln(numero1==="1")

document.writeln(numero1!=="1")//Desigual restrito.
*/



/*#######################----Operadores Lógicos----#####################*/
//A ordem de Prioridade é: 'Not' 'E' 'OU'.
/*
var a = 5
var b = 8

//E - &&
document.writeln(a<b && b<100)
document.writeln(a>b && b<100)

//OU - ||
document.writeln(a>b || b<100)
document.writeln(a>b || b>100)

//Not - !
document.writeln(a>b || b!=100)
document.writeln(a>b || b>!100)
*/



/*#######################----Operadores Ternários----###################*/
//'?' e ':' - É basicamente um IF(){}Else{}

/*
var media = 7

var nota1 = 1  
var nota2 = 2
var nota3 = 3 

//Estrutura -   (Condição   ?   True    :    False)
document.writeln(media >= 7 ? "Aprovado.":"Não Aprovado.")
document.writeln(media != 7 ? "Verdadeiro.":"Falso.")

var nota = ((nota1+nota2+ nota3)/3) >= 6 ? "Passou" : "Não Passou"
document.writeln(nota)
*/



/*######################----Formatando Strings----####################*/

/*
var nome = prompt("digite seu nome:") 
var idade = prompt("digite sua idade:")
var cidade = prompt("digite sua cidade:")
*/

//window.alert("Meu nome é " + nome + " eu tenho " + idade + " anos de idade e moro em " + cidade) //Normal
//alert(`Meu nome é ${nome} eu tenho ${idade} anos de idade e moro em ${cidade}`) //Template String - Para utilizar o Template utiliza-se o ${} no lugar do  " + " e ` no lugar das aspas 

//alert(nome.length)//Me diz o número de caracteres utilizados.
//alert(nome.toUpperCase())//Transforma o que foi digitado em letras MAIÚSCULAS.
//alert(nome.toLowerCase())//Transforma o que foi digitado em letras minúsculas.



/*#########################----Formatando Numbers----##################*/

//var numero = Number(prompt("digite um numero"))

//alert(numero.toFixed(2))//Numero de Casas decimais. Ex.: digite 10.593 e o resultado sera 10.53.
//alert(numero.toFixed(2).replace('.',','))//Troca um elemento por outro.
//alert(numero.toLocaleString('pt-BR',{style:'currency', currency:'BRL' })) //Localiza(pt-BR) o numero e transforma em moeda(R$). 



/*############################----DOM----##############################*/
//Document Objetct Model.
//É possivel selecionar e manipular elementos da pagina atraves do Js.

//window. - location / document / history / etc... - Se refere a tela do navegador, independent de ter conteudo html ou não.
//document. - html - head / body - Se refere ao corpo do documento html, ou seja ao html em si.

//window.document.write(document.URL).

//Seletores.
//Preste atenção na parte do 'element' do codigo, pois se estiver em plural o uso de [] será necessario.


//Tag. - document.getElementsByTagName()[]

//var parag = document.getElementsByTagName('p')[1] //[] - indica o componente que deseja ser acessado (começa com o [0]).
//document.writeln(`Esta escrito assim: ${parag.innerText}`) //innerText - Texto dentro do elemento chamado sem as formatações.
//document.write(`Esta escrito assim: ${parag.innerHTML}`) //innerText - Texto dentro do elemento chamado com as formatações (Negrito, italico, cor, etc...).

//Mudando Estilo. - O estilo que sera alterado é o do elemento original e não o do que esta sendo chamado. (Faça o teste para que fique mais claro.)
//parag.style.color = 'blue'
//parag.style.fontSize = '40px'

//Mudando Conteúdo.
//parag.innerText = 'certamente nao é blittz'
//parag.innerHTML = '<h1>certamente nao é blittz<h1>'

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//ID. - document.getElementById()

//var p1 = document.getElementById('p1')
//document.write(p1.innerHTML)

//Mudando Estilo.
//p1.style.color = 'blue'
//p1.style.fontSize = '40px'

//Mudando Conteúdo.
//p1.innerText = 'Puta'
//p1.innerHTML = '<Strong>Puta</Strong>'

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Name. - document.getElementsByName()[]

//var p2 = document.getElementsByName('p2')[0]
//document.write(p2.innerHTML)

//Mudando Estilo.
//p2.style.color = 'blue'
//p2.style.fontSize = '40px'

//Mudando Conteúdo.
//p2.innerText = 'Jovem'
//p2.innerHTML = '<em>Jovem</em>'

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Class. - document.getElementsByClassName()[]

//var div1 = document.getElementsByClassName('div1')[0]
//document.write(div1.innerHTML)

//Mudando Estilo.
//div1.style.color = 'blue'
//div1.style.fontSize = '40px'

//Mudando Conteúdo.
//div1.innerText = 'Velho'
//div1.innerHTML = '<mark>Velho</mark>'

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Selector. - querySelector(<tag> +(#Id ou .class)) ou querySelectorAll(). Ex.: (div.jogo)
//De prioridade a esse seletor, pois é o mais recente e recomendado.

//var div1 = document.querySelector('div.div1')
//document.write(div1.innerHTML)

//Mudando Estilo.
//div1.style.color = 'blue'
//div1.style.fontSize = '40px'

//Mudando Conteúdo.
//div1.innerText = 'Jogo'
//div1.innerHTML = 'Jogo'


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//Eventos DOM

/*
{
    //Se for usar o listener, os seletores tem que ficar fora da function.
    var area = document.querySelector('div#area')
    area.addEventListener('click', clicar)
    area.addEventListener('mouseenter', entrar)
    area.addEventListener('mouseout', sair)

    function clicar(){
        area.innerHTML = 'Você Clicou Aqui.' 
        area.style.color = 'yellow'
        area.style.background = 'red'

    }
    function entrar(){
        area.style.background = 'blue'
    }

    function sair(){
        area.style.background = 'green'
        area.innerHTML = 'interaja...'
        area.style.color = 'white'
    }

}
*/

//Para identificar erros que não estejam sendo exibidos aqui no editor, basta abrir o console do navegador.

/*
{//Isolando em Bloco
    
    //Se for usar o listener, os seletores tem que ficar fora da function.
    //Variaveis e Getters
    var botao = document.querySelector('input#botão')
    botão.addEventListener('click', somando)
    
    var numero1 = document.querySelector('input#numero1')
    var numero2 = document.querySelector('input#numero2')
    var resultado = document.querySelector('div#resultado')
    
    function somando(){
        
        //Convertendo
        var n1 = Number(numero1.value)
        var n2 = Number(numero2.value)
        
        var res =  n1 + n2 
        
        resultado.innerHTML = `<br>Resultado: <Strong>${res}</Strong>`

    }
}
*/



/*##########################----Condicional----########################*/

//Condição Simples.

//var numero1 = 6
//var numero2 = 7

/*
if (numero2>numero1) {
    console.log("parabens!!!")
    
}

console.log('você passou')
*/


//Condição Composta

/*
if (numero2<numero1) {
    console.log("parabéns você ficou acima da média!!!.")  
}else{ 
    console.log('você Passou.')  
} 
*/


//Condições Aninhadas.

/*
{
    //Se for usar o listener, os seletores tem que ficar fora da function.
    var number1 = document.querySelector('input#numero1')
    var number2 = document.querySelector('input#numero2')
    var botao = document.querySelector('input#botao')
    var divres = document.querySelector('div#divres')
    botao.addEventListener('click', calcular)

    function calcular(){
        

        var n1 = Number(number1.value)
        var n2 = Number(number2.value)
        var res = (n1 + n2)/2

        if (res<6) {
            divres.innerHTML = `<p><br>Você esta reprovado. Sua nota foi: <Strong>${res}</Strong>.</p>`
        
        }else if (res < 7) {
            divres.innerHTML = `<p><br>Você esta aprovado. Sua nota foi: <Strong>${res}</Strong>.</p>` 
            }
            else {
            divres.innerHTML = `<p><br>Você esta aprovado e ficou acima da media. <br>Sua nota foi: <Strong>${res}</Strong>.</p>`
            }
        }

    }

}
*/


//Condição Multipla.
//Switch é utilizado para verificar valores pontuais como dias da semana, dias do mês, etc..
//O "break"" é obrigatorio

/*
var dia = new Date()
var diaSem = dia.getDay()

switch (diaSem) {
    case 0:
        console.log(`Hoje é domingo.`)
        break; 

    case 1:
        console.log(`Hoje é Segunda.`)
        break; 

    case 2:
        console.log(`Hoje é Terça.`)
        break; 

    case 3:
        console.log(`Hoje é Quarta.`)
        break;
    case 4:
        console.log(`Hoje é Quinta.`)
        break;
    case 5:
        console.log(`Hoje é Sexta.`)
        break;    

    default:
        console.log(`Hoje é Sabado.`)
        break;
}
*/



/*##########################----Curiosidades----########################*/

/*
//Pegando Hora do Sistema
var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()
var segundo = agora.getSeconds()

console.log(`Agora são exatamanete ${hora}h:${minuto}m:${segundo}s.`)

if (hora < 12) {
    console.log(`Bom Dia!`)
}else if (hora <= 18) {
    console.log(`Boa Tarde!`)
    
}else{
    console.log(`Boa Noite`)
}
*/


/*##########################----Criando elementos HTML direto do js----########################*/

/*
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
        var img = document.createElement('img') //Criou o elemento
        img.setAttribute('id','foto') //definiu o atributo id = "" 
    
    
        if (fsex[0].checked){ //Verificando se o radio 'masculino' esta marcado.
            genero = "Homem"
            if (idade>=0 && idade <= 10 ){
                //criança
                img.setAttribute('src','../imagens/criança-m.jpg') //inseriu uma imagem nesse elemento
    
    
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
        texto.appendChild(img)//Definiu o local no qual ele deve aparece (nesse caso como parte do paragrafo 'res').



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

*/


/*##########################----Repetições/Laços----########################*/

//var i = 1

//While. - Repetição com teste logico no inicio

/*
while (i <= 16) {
    console.log(`Tudo Bem? n° ${i}`)
    i++ //i = i+1
}
*/


//Do - Repetição com teste logico no Final

/*
do {
    console.log(`Tudo Bem? n° ${i}`)
    i++
} while (i<6);
console.log("Acabou!!!")
*/


//For - Estrutura de repetição com variavel de controle

/*
for (inicialização; Teste Lógico; incremento) { 
    console.log(`Olá N° ${i}`);
     
}*/

/*
for (var i = 0; i <= 16; i++) { //A variavel fica dentro da estrutura.
    console.log(`Olá N° ${i}`);
    console.log(`i-1 = ${i-1}`)   
}*/

/*
for (var i = 16; i >= 0; i--) { //Contagem regressiva
    console.log(`Olá N° ${i}`);
    console.log(`i-1 = ${i+1}`)   
}
console.log("Acabou!!!")
*/


/*##########################----Arrays----########################*/
//Arrays são heterogeneas, ou seja, aceita tipos diferentes como valores Ex.: var a = ['jack',121,true]

//  a = [[0],[1],[2],[3],[4]]
//var a = ['K','L','M','N','O']
//console.log(a)


//Escolhendo um valor especifico.
//console.log(n)
//console.log(a[3])


//Adicionando um novo valor o vetor.
//a[5] = 'P'
//a.push('Q')//Adiciona o valor a ultima casa sem precisar indicar o número do elemento.
//console.log(a)


//Subistituindo um valor no vetor.
//a[1] = 'Novo'
//console.log(a)


//Saber o comprimento da array.
//NomedaVariavel.length
//console.log("\n" + a.length) //\n para pular uma linha na hora de escrever no console


//Organizando os elemento em ordem crescente.
//var b = [9,5,6,1,7] 
//b.sort()
//console.log("\n" + b)


//Mostrando o valor de cada elemento individualmente com um laço.
    /*
    for (var i = 0; i <   b.length; i++) {
        console.log(`elemento n°${i} tem valor: ${b[i]}`)
    }
    */

//Mostrando o valor de cada elemento individualmente com um laço especifico para arrays.
/*  
    for (var i in b) {
        console.log(` O elemento n°${i} tem valor (${b[i]})`)
    }
*/


//Buscar valores dentro de vetores. //Se o valor inserido existir no vetor, sera retornada a numeração da sua posição, caso contrario será exibido o número -1.
/*
var c = b.indexOf(2) 

if (c == -1) {
    console.log("O valor inserido não existe no vetor")
    
} else {
    console.log(`O valor inserido se encontra da posição [${c}]`)
    
}
*/

/*##########################----Funções----########################*/
/*
function parimp(n){ //n = Parameto formal.
    if (n%2==0) {      //
        return 'par'   //
                       //Ações
    } else {           //
        return 'ímpar' //
    }                  //
}

console.log(parimp(11)) //Chamada / 11 = Parameto real. 
*/

/*
function soma(n1, n2=4){ //Caso nao seja inserido um valor na chamada, a variavel n2 ira receber 4
    return n1 + n2
}

console.log(soma(2,3))
console.log(soma(2))
*/


//Function sendo chamada no HTML.
/*function gerar(){

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
*/


//Atribuindo funções a variaveis.
/*
let v = function(x){
return x*2
}

console.log(v(5))
*/


//Arrow Function.
//Quando for preciso mais que um return.
/*
var calcular = (n1=14, n2=4)=>{  // var função = function calcular(n1=14, n2=4){}
    if (n1 < 10) {
        return n1 + n2
    } else {
        return n1 - n2
    }  
}
console.log(calcular())
*/


//Quando você precisa de apenas um return. (return by default).
/*
calcular = (n1=14, n2=4) => n1 * n2 
console.log(calcular())
*/


//Recursividade. - Quando a função chama ela mesma.
/*
fatorial = (n) =>{
    if (n==1) {
        return 1
    }else{
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))//Chamando a função e passando o valor de "n".
*/



/*##########################----Objetos----########################*/
/*
//Contrario as arrays, os objetos permitem que você de identificadores(atributos) aos elementos.
var amigo = {nome:'jack', ano:2021, carro:'LG', placa:'66251jp'}//object
           //{nome      / ano      /carro      /placa     }

var amiga = ['fernanda', 2021, 'WW', '77323pl'] //array
            //[0       /  1 /    2/       3   ]


//objetos permitem o armazenamento de functions.
var amigo = {nome:'jack', 
ano(p){
}}

*/

//Mostrando elementos especificos no objeto.
/*
var amigo = {nome:'jack', 
ano(p = 0){ 
    this.novo += p // this. = Referenciando a outro elemento do objeto
}, 
carro:'LG',
placa:'66251jp',
novo:2021
}

amigo.ano(3)
console.log(`${amigo.nome} possui um carro de ${amigo.novo}`)
*/