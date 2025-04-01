//exercicio 01

function terreno() {
    let largura = prompt("Qual a largura do terreno?")
    let comprimento = prompt("Qual o comprimento do terreno?")

    let dimensao = largura * comprimento

    alert("O tamanho do terreno é: " + dimensao + "mt²")
}

//exercicio 02
function cavalos() {
    let cavalos = prompt("Quantos cavalos tem no haras?")
    let ferraduras = cavalos * 4

    alert("São necessárias:" + ferraduras)
}

//exercicio 03
function padaria() {

    let qnt_pães = prompt("Quantos pães foram vendidos hoje?")
    let qnt_broas = prompt("Quantos broas foram vendidos hoje?")
    let valor_vendas = (qnt_pães * 0.12) + (qnt_broas * 1.50)
    alert("valor arrecadado =" + valor_vendas)
    let quanto_deve_guardar = (valor_vendas * 0.10)
    alert("você deve guardar" + quanto_deve_guardar)

}

//exercicio 04
function Dias(){
    let nome = prompt ("Qual o seu nome?")
    let idade = prompt ("Qual sua idade")
    let dias_de_vida = idade *365
alert (nome+ ", voce ja viveu " +dias_de_vida+ " dias.")
}

//exercicio 05
function litros(){
    let valor_gasol = prompt("Qual o preço do L da gasolina?")
    let valor_pagamento = prompt ("Quato você pagou?")
    let L_abastecidos = valor_pagamento / valor_gasol
    alert ("Você conseguiu abastecer " +L_abastecidos)

}

//exercicio 06
function restaurante(){
    let peso = prompt ("Qual o peso da sua refeição ?")
    let valor_pagar = peso *12
    alert ("Você deve pagar R$" +valor_pagar+ " pela sua refeição")
    
}