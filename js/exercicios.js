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
function Dias() {
    let nome = prompt("Qual o seu nome?")
    let idade = prompt("Qual sua idade")
    let dias_de_vida = idade * 365
    alert(nome + ", voce ja viveu " + dias_de_vida + " dias.")
}

//exercicio 05
function litros() {
    let valor_gasol = prompt("Qual o preço do L da gasolina?")
    let valor_pagamento = prompt("Quato você pagou?")
    let L_abastecidos = valor_pagamento / valor_gasol
    alert("Você conseguiu abastecer " + L_abastecidos)

}

//exercicio 06
function restaurante() {
    let peso = prompt("Qual o peso da sua refeição ?")
    let valor_pagar = peso * 12
    alert("Você deve pagar R$" + valor_pagar + " pela sua refeição")

}

//exercicio 07
function dias_passaram() {
    let dia = Number(prompt("Digite o dia:"))
    let mes = Number(prompt("Digite o mês:"))
    let diasPassados = (mes - 1) * 30 + dia;
    alert(diasPassados + " dias se passaram desde o inicio do ano!")
}

//exercicio 08
function mediaPonderada() {
    let peso1 = 1, peso2 = 2, peso3 = 3;
    let nota1 = prompt("Digite a primeira nota!")
    let nota2 = prompt("Digite a segunda nota!")
    let nota3 = prompt("Digite a terceira nota!")
    let media = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3)
    alert("Sua média é: " + media)
}

//exercicio 09
function calculadora() {
    let CamisetaP = 10, CamisetaM = 12, CamisetaG = 15;
    let Camiseta_P = prompt("Quantas camisetas P você deseja ?")
    let Camiseta_M = prompt("Quantas camisetas M você deseja ?")
    let Camiseta_G = prompt("Quantas camisetas G você deseja ?")
    let valorArrecadado = (CamisetaP * Camiseta_P + CamisetaM * Camiseta_M + CamisetaG * Camiseta_G)
    alert("O valor final arrecadado na venda é: R$ " + valorArrecadado)
}

//exercicio 10
function cartesiano() {
    let x1 = Number(prompt("Valor do ponto x1"))
    let y1 = Number(prompt("valor do ponto y1"))
    let x2 = Number(prompt("valor do ponto x2"))
    let y2 = Number(prompt("valor do ponto y2"))
    let calculo = Number(Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)));
    alert("A distância entre os dois pontos é:" + calculo)
}

//exercicio 11
function acidentes() {
    let dias_sem_acidentes = Number(prompt("Quantos dias sem acidentes?"))
    let Anos = Math.floor(dias_sem_acidentes / 360)
    let Mes = Math.floor((dias_sem_acidentes % 360) / 30)
    let Dias = Number(dias_sem_acidentes % 360) % 30;
    alert("A empresa está atualmente " + Anos + " anos " + Mes + " meses e " + Dias + " dias sem acidentes!")
}

//exercicio 12
function salario() {
    let salarioAtual = prompt("Qual o seu salário atual?")
    let calculoSalario = Math.floor(salarioAtual * 1.15)
    let calculoSalario2 = Math.floor(calculoSalario * 0.92)
    alert("Seu salário inicial era R$" + salarioAtual + ". Seu salário após o aumento de 15% é R$" + calculoSalario + ". Seu salário após o desconto de 8% de imposto é R$" + calculoSalario2 + ".")

}

//exercicio 13
function inteiro() {
    let numero = Number(prompt("Insira um número de 0 a 999"))
    let centena = Math.floor(numero / 100);
    let dezena = Math.floor((numero % 100) / 10);
    let unidade = numero % 10;
    debugger
    alert("Centena: " + centena + ", Dezena: " + dezena + ", Unidade: " + unidade)
}

//exercicio14 
function calculoRaio() {
    let raio = Number(prompt("Valor do raio"))
    const pi = 3.14
    let area = pi * Math.pow(raio, 2);
    alert("A área da pizza é: " + area + " cm²")
}

//exercicio 15
function divisao() {
    let conta = Number(prompt("Qual é o valor da conta?"))
    let parteInteira = Math.floor(conta / 3)
    let felipePaga = conta - (parteInteira * 2)
    alert("Carlos deve pagar: R$ " + parteInteira + ". André deve pagar: R$ " + parteInteira + ". Felipe deve pagar: R$ " + felipePaga + ".")
}

//exercicio 16
function algoritmo() {
    let sanduiches = parseInt(prompt("Informe a quantidade de sanduíches que deseja fazer:"));
    let queijo = 0.050 * 2;
    let presunto = 0.050;
    let hamburguer = 0.100;
    let calculoQ = sanduiches * queijo 
    let calculoP = sanduiches * presunto
    let calculoH = hamburguer * sanduiches
    alert("Para fazer essa quantidade de sanduiches você precisa comprar: "
        + calculoQ + " kg de queijo, "
        + calculoP + " kg de presunto, "
        + calculoH + "kg de hambúrguer");
}





