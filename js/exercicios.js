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
    let Anos = Number(dias_sem_acidentes / 360)
    let Mes = Number((dias_sem_acidentes % 360) / 30)
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
//exercicio 17
function celsius() {
    let grausCelsius = Number(prompt("Informe a temperatura em graus celsius."))
    let calculo = Number((grausCelsius * 1.8) + 32)
    alert(calculo + " graus fahrenheit")
}

//exercicio 18
function salario() {
    let horaNormal = 10
    let horaExtra = 15
    let horasN = Number(prompt("Quantas horas normais você trabalhou?"))
    let horasE = Number(prompt("Quanta horas extras você trabalhou ?"))
    let calculo = Number(horasN * horaNormal + horasE * horaExtra)
    let calculo2 = Number(calculo * 0.90)
    alert("Seu salário bruto é: R$ " + calculo + ", seu salario salário líquido é: R$ " + calculo2)
}

//exercicio 19
function frango() {
    let qntFrangos = prompt("Quantos frangos você tem na granja ?")
    let chipIdentificação = 4
    let anelAlimento = 7
    let calculo = (qntFrangos * chipIdentificação) + (qntFrangos * anelAlimento)
    alert("O gasto total para você marcar todos os seus frangos é: R$ " + calculo)
}

//exercicio 20
function blusas() {
    let blusasProduzidas = Number(prompt("Informe a quantidade de blusas produzidas:"))
    let novelosDeLã = Number(prompt("Informe a quantidade de novelos de lã utilizados"))
    let novelosPorBlusa = (novelosDeLã / blusasProduzidas)
    alert("Você gasta " + novelosPorBlusa + " novelos de lã para produzir uma blusa")
}

//exercicio21
function meia_cola() {
    let refrilata = prompt("Quantas latas você comprou ?")
    let refri600 = prompt("Quantas garrafas 600ml você comprou ?")
    let refri2l = prompt("Quantas garafas 2l você comprou")
    let lata = 0.350
    let garrafa600 = 0.600
    let garrafa = 2
    let calculo = Number(refrilata * lata) + (refri600 * garrafa600) + (refri2l * garrafa)
    alert("Você comprou " + calculo + " litros de Meia-Cola.")
}

//exercicio22
function cofrinho() {
    let centavo1 = prompt("Quantas moédas de 1 centavo você tem?")
    let centavo5 = prompt("Quantas moédas de 5 centavo você tem?")
    let centavo10 = prompt("Quantas moédas de 10 centavo você tem?")
    let centavo25 = prompt("Quantas moédas de 25 centavo você tem?")
    let centavo50 = prompt("Quantas moédas de 50 centavo você tem?")
    let real1 = prompt("Quantas moédas de 1 real você tem?")
    let cent1 = 0.01
    let cent5 = 0.05
    let cent10 = 0.10
    let cent25 = 0.25
    let cent50 = 0.50
    let reall1 = 1
    let calculo = (centavo1 * cent1) + (centavo5 * cent5) + (centavo10 * cent10) + (centavo25 * cent25) + (centavo50 * cent50) + (real1 * reall1)
    alert("Você conseguiu economizar R$ " + calculo)
}

//exercicio23
function predio() {
    let alturaPessoa = prompt("Qual sua altura ?")
    let sombraPessoa = prompt("Qual o tamanho da sua sombra ?")
    let sombraPredio = prompt("Qual o tamanho da sombra do prédio ?")
    let calculo = ((alturaPessoa * sombraPredio) / sombraPessoa)
    alert("A altura do prédio é de: " + calculo + " metros")
}

//exercicio24
function refresco() {
    var QntLrefresco = prompt("Quantos litros de regresco você deseja fazer ?")
    const partesDeagua = 8;
    const partesDesuco = 2;
    const totalPartes = partesDeagua + partesDesuco
    const Lagua = (partesDeagua / totalPartes) * QntLrefresco
    const Lsuco = (partesDesuco / totalPartes) * QntLrefresco
    alert("Para fazer " + QntLrefresco + " litros de refresco, você precisa de " + Lagua + " litros de água e " + Lsuco + " litros de suco.")
}


//exercicio25
function caixa() {
    var raioDaBase = prompt("Qual o raio da caixa d'gua")
    var altura = prompt("Qual a altura da caixa d'água")
    const pi = 3.141
    const volume = pi * Math.pow(raioDaBase, 2) * 2
    alert(" O volume da caixa d'água é " + volume.toFixed(2) + " litros.")
}

//exercicio26
function multiplicação() {
    var numero1 = prompt("Qual o primeiro número?")
    var numero2 = prompt("Qual o segundo número?")
    var numero3 = prompt("Qual o terceiro número?")
    const calculo = numero1 * numero2 * numero3
    alert("O resultado da multiplicação destes três números é " + calculo + ".")
}

//exercicio27
function divisão() {
    var numero1 = prompt("Qual o primeiro número?")

    do {
        var numero2 = parseFloat(prompt("Qual o segundo número? (O numero deve ser maior que 0!"))
        if (numero2 === 0) {
            alert("O número não pode ser zero. Tente novamente!")
        }
    } while (numero2 === 0)
    const calculo = numero1 / numero2
    alert("O resultado da divisão do primeiro número escolhido pelo segundo numero escolhido é " + calculo + ".")
}

//exercicio28
function mediaPonderada() {
    var nota1 = prompt("Nota 1:");
    var nota2 = prompt("Nota 2:");
    let peso2 = 2, peso3 = 3;
    const calculo = (nota1 * peso2 + nota2 * peso3) / (peso2 + peso3);
    alert("Sua média é: " + calculo + ".")
}

//exercicio29
function produto() {
var preçoProduto = prompt("Qual o preço do produto?")
const calculo = preçoProduto *0.9
alert ("O valor do produto após aplicar os 10% de desconto é R$ "+calculo.toFixed(2))
}

//exercicio30
function comissao() {
const salarioFixo = Number (prompt("Qual o valor do seu salário fixo ?"))
const ValorDasVendas = Number (prompt("Qual o valor das suas vendas ?"))
var calculo = Number (ValorDasVendas *0.04)
var calculo2 =Number (calculo + salarioFixo)
alert ("Sua comissão é R$ "+calculo.toFixed(2)+" e o seu salário mais a comissão é R$ "+calculo2.toFixed(2))
}

//exercicio31
function peso() {

}

//exercicio32
function gramas() {

}

//exercicio33
function trapezio() {

}

//exercicio34
function quadrado() {

}

//exercicio35
function losango() {

}

//exercicio36
function salario() {

}

//exercicio37
function tabuada() {

}

//exercicio38
function algoritmo() {

}

//exercicio39
function contas() {

}

//exercicio40
function catetos() {

}




