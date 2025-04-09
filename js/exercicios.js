
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
    const calculo = preçoProduto * 0.9
    alert("O valor do produto após aplicar os 10% de desconto é R$ " + calculo.toFixed(2))
}

//exercicio30
function comissao() {
    const salarioFixo = Number(prompt("Qual o valor do seu salário fixo ?"))
    const ValorDasVendas = Number(prompt("Qual o valor das suas vendas ?"))
    var calculo = Number(ValorDasVendas * 0.04)
    var calculo2 = Number(calculo + salarioFixo)
    alert("Sua comissão é R$ " + calculo.toFixed(2) + " e o seu salário mais a comissão é R$ " + calculo2.toFixed(2))
}

//exercicio31
function peso() {
    let peso1 = prompt("Qual seu peso atual ?")
    const calculo = peso1 * 1.15
    const calculo2 = peso1 * 0.8
    alert("Se você engordar 15% seu peso será " + calculo.toFixed(2) + "Kg, se você emagrecer 20% seu peso será " + calculo2.toFixed(2) + "Kg.")

}

//exercicio32
function gramas() {
    let peso = prompt("Qual seu peso em quilos ?")
    const calculo = peso * 1000
    alert("Seu peso em gramas é " + calculo.toFixed(2) + " gramas.")
}

//exercicio33
function trapezio() {
    let baseMaior = Number(prompt("Qual o tamanho da base maior?"))
    let baseMenor = Number(prompt("Qual o tamanho da base menor?"))
    let altura = Number(prompt("Qual a altura do trapézio?"))
    const calculo = Number((baseMaior + baseMenor) * altura) / 2
    alert("A área do trapézio é " + calculo + ".")
}

//exercicio34
function quadrado() {
    let ladoA = prompt("Qual o tamanho do lado A?")
    let ladoB = prompt("Qual o tamanho do lado B?")
    const calculo = ladoA * ladoB
    alert("A área do quadrado é de " + calculo + ".")
}

//exercicio35
function losango() {
    let diagonalMaior = Number(prompt("Qual o tamanho da diagonal maior do losango ?"))
    let diagonalMenor = Number(prompt("Qual o tamanho da diagonal menor do losango ?"))
    const calculo = Number((diagonalMaior * diagonalMenor) / 2)
    alert("A área do losango é " + calculo + ".")
}

//exercicio36
function salario() {
    let salarioMinimo = prompt("Qual o valor do salário mínimo ?")
    let seuSalario = prompt("Qual o valor do seu salário ?")
    const calculo = seuSalario / salarioMinimo
    alert("Você ganha " + calculo.toFixed(2) + " salários mínimos.")
}

//exercicio37
function tabuada() {
    const numero = parseInt(prompt("Digite um número para ver a tabuada:"));
    let tabuada = `Tabuada do ${numero}:\n\n`;
    for (let i = 1; i <= 10; i++) {
        tabuada += `${numero} x ${i} = ${numero * i}\n`;
    }
    alert(tabuada);
}

//exercicio38
function algoritmo() {
    let anoDeNascimento = prompt("Em que ano você nasceu ?")
    let anoAtual = prompt("Qual o ano atual ?")
    const calculo = anoAtual - anoDeNascimento
    const calculo1 = Math.floor(calculo * 12)
    const calculo2 = Math.floor(calculo1 * 30)
    const calculo3 = Math.floor(calculo2 / 7)
    alert("Idade em anos: " + calculo + "\n"
        + "Idade em meses: " + calculo1 + "\n"
        + "Idade em dias: " + calculo2 + "\n"
        + "Idade em semanas: " + calculo3)
}

//exercicio39
function contas() {
    const salario = 1200
    const C1 = 200 * 1.02
    const C2 = 120 * 1.02
    const calculo = salario - C1 - C2
    alert("Após o pagamento das contas atrasadas com juros de 2% restaram R$ " + calculo.toFixed(2) + " do salário do João")
}

//exercicio40
function catetos() {
    let cateto1 = prompt("Digite o valor do primeiro cateto:")
    let cateto2 = prompt("Digite o valor do segundo cateto:")
    const hipotenusa = Math.sqrt((cateto1 ** 2) + cateto2 ** 2)
    alert("A hipotenusa do triângulo é: " + hipotenusa)
}

const exercicios = [
    {
        titulo: "Exercício 01",
        funcao: terreno,
        descricao: "A imobiliária Imóbilis vende apenas terrenos retangulares. Faça um algoritmo para ler as dimensões de um terreno e depois exibir a área do terreno."
    },

    {
        titulo: "Exercício 02",
        funcao: cavalos,
        descricao: "Faça um algoritmo para calcular quantas ferraduras são necessárias para equipar todos os cavalos."
    },

    {
        titulo: "Exercício 03",
        funcao: padaria,
        descricao: "A padaria Hotpão vende uma certa quantidade de pães franceses e uma quantidade de broas a cada dia. Cada pãozinho custa R$ 0,12 e a broa custa R$ 1,50. Ao final do dia, o dono quer saber quanto arrecadou com a venda dos pães e broas (juntos), e quanto deve guardar numa conta de poupança (10% do total arrecadado). Você foi contratado para fazer os cálculos para o dono. Com base nestes fatos, faça um algoritmo para ler as quantidades de pães e de broas, e depois calcular os dados solicitados."
    },

    {
        titulo: "Exercício 04", funcao: Dias,
        descricao: "Escreva um algoritmo para ler o nome e a idade de uma pessoa, e exibir quantos dias de vida ela possui. Considere sempre anos completos, e que um ano possui 365 dias. Ex: uma pessoa com 19 anos possui 6935 dias de vida."
    },

    {
        titulo: "Exercício 05",
        funcao: litros,
        descricao: "Um motorista deseja colocar no seu tanque X reais de gasolina. Escreva um algoritmo para ler o preço do litro da gasolina e o valor do pagamento, e exibir quantos litros ele conseguiu colocar no tanque."
    },

    {
        titulo: "Exercício 06",
        funcao: restaurante,
        descricao: "O restaurante a quilo Bem-Bão cobra R$12,00 por cada quilo de refeição. Escreva um algoritmo que leia o peso do prato montado pelo cliente (em quilos) e imprima o valor a pagar. Assuma que a balança já desconte o peso do prato."
    },

    {
        titulo: "Exercício 07",
        funcao: dias_passaram,
        descricao: "Entrar com o dia e o mês de uma data e informar quantos dias se passaram desde o início do ano. Esqueça a questão dos anos bissextos e considere sempre que um mês possui 30 dias."
    },

    {
        titulo: "Exercício 08",
        funcao: mediaPonderada,
        descricao: "8. Faça um algoritmo para ler três notas de um aluno em uma disciplina e imprimir a sua média ponderada (as notas tem pesos respectivos de 1, 2 e 3)."
    },

    {
        titulo: "Exercício 09",
        funcao: calculadora,
        descricao: "Uma fábrica de camisetas produz os tamanhos pequeno, médio e grande, cada uma sendo vendida respectivamente por 10, 12 e 15 reais. Construa um algoritmo em que o usuário forneça a quantidade de camisetas pequenas, médias e grandes referentes a uma venda, e a máquina informe quanto será o valor arrecadado."
    },

    {
        titulo: "Exercício 10",
        funcao: cartesiano,
        descricao: "Construa um algoritmo para calcular a distância entre dois pontos do plano cartesiano. Cada ponto é um par ordenado (x,y)."
    },

    {
        titulo: "Exercício 11",
        funcao: acidentes,
        descricao: "Uma fábrica controla o tempo de trabalho sem acidentes pela quantidade de dias. Faça umalgoritmo para converter este tempo em anos, meses e dias. Assuma que cada mês possui sempre 30 dias"
    },

    {
        titulo: "Exercício 12",
        funcao: salario,
        descricao: "Faça um algoritmo para ler o salário de um funcionário e aumentá-Io em 15%. Após o aumento, desconte 8% de impostos. Imprima o salário inicial, o salário com o aumento e o salário final."
    },

    {
        titulo: "Exercício 13",
        funcao: inteiro,
        descricao: "Ler um número inteiro (assuma até três dígitos) e imprimir a saída da seguinte forma: CENTENA = x DEZENA = x UNIDADE = x"
    },

    {
        titulo: "Exercício 14",
        funcao: calculoRaio,
        descricao: "Calcule a área de uma pizza que possui um raio R (pi=3.14)."
    },

    {
        titulo: "Exercício 15",
        funcao: divisao,
        descricao: "Três amigos, Carlos, André e Felipe. decidiram rachar igualmente a conta de um bar. Faça um algoritmo para ler o valor total da conta e imprimir quanto cada um deve pagar, mas faça com que Carlos e André não paguem centavos."
    },

    {
        titulo: "Exercício 16",
        funcao: algoritmo,
        descricao: " A lanchonete Gostosura vende apenas um tipo de sanduíche, cujo recheio inclui duas fatias de queijo, uma fatia de presunto e uma rodela de hambúrguer. Sabendo que cada fatia de queijo ou presunto pesa 50 gramas, e que a rodela de hambúrguer pesa 100 gramas, faça um algoritmo em que o dono forneça a quantidade de sanduíches a fazer, e a máquina informe as quantidades (em quilos) de queijo, presunto e carne necessários para comprar."
    },

    {
        titulo: "Exercício 17",
        funcao: celsius,
        descricao: "Alguns países medem temperaturas em graus Celsius, e outros em graus Fahrenheit. Faça um algoritmo para ler uma temperatura Celsius e imprimi-Ia em Fahrenheit."
    },

    {
        titulo: "Exercício 18",
        funcao: salario,
        descricao: "A empresa Hipotheticus paga R$10,00 por hora normal trabalhada, e R$15,00 por hora extra. Faça um algoritmo para calcular e imprimir o salário bruto e o salário líquido de um determinado funcionário. Considere que o salário líquido é igual ao salário bruto descontando-se 10% de impostos."
    },

    {
        titulo: "Exercício 19",
        funcao: frango,
        descricao: "A granja Frangotech possui um controle automatizado de cada frango da sua produção. No pé direito do frango há um anel com um chip de identificação; no pé esquerdo são dois anéis para indicar o tipo de alimento que ele deve consumir. Sabendo que o anel com chip custa R$4,00 e o anel de alimento custa R$3,50, faça um algoritmo para calcular o gasto total da granja para marcar todos os seus frangos."
    },

    {
        titulo: "Exercício 20",
        funcao: blusas,
        descricao: "Uma confecção produz X blusas de lã e para isto gasta uma certa quantidade de novelos. Faça um algoritmo para calcular quantos novelos de lã ela gasta por blusa."
    },

    {
        titulo: "Exercício 21",
        funcao: meia_cola,
        descricao: "A fábrica de refrigerantes Meia-Cola vende seu produto em três formatos: lata de 350 ml, garrafa de 600 ml e garrafa de 2 litros. Se um comerciante compra uma determinada quantidade de cada formato, faça um algoritmo para calcular quantos litros de refrigerante ele comprou."
    },

    {
        titulo: "Exercício 22",
        funcao: cofrinho,
        descricao: "Pedrinho tem um cofrinho com muitas moedas, e deseja saber quantos reais conseguiu poupar. Faça um algoritmo para ler a quantidade de cada tipo de moeda, e imprimir o valor total economizado, em reais. Considere que existam moedas de 1, 5, 10, 25 e 50 centavos, e ainda moedas de 1 real. Não havendo moeda de um tipo, a quantidade respectiva é zero."
    },

    {
        titulo: "Exercício 23",
        funcao: predio,
        descricao: "Num dia de sol, você deseja medir a altura de um prédio, porém, a trena não é suficientemente longa. Assumindo que seja possível medir sua sombra e a do prédio no chão, e que você lembre da sua altura, faça um algoritmo para ler os dados necessários e calcular a altura do prédio."
    },

    {
        titulo: "Exercício 24",
        funcao: refresco,
        descricao: "Um tonel de refresco é feito com 8 partes de água mineral e 2 partes de suco de maracujá. Faça um algoritmo para calcular quantos litros de água e de suco são necessários para se fazer X litros de refresco (informados pelo usuário)."
    },

    {
        titulo: "Exercício 25",
        funcao: caixa,
        descricao: "Calcule o volume de uma caixa d'água cilíndrica."
    },

    {
        titulo: "Exercício 26",
        funcao: multiplicação,
        descricao: "Faça um algoritmo que receba três números, calcule e mostre a multiplicação desses números."
    },

    {
        titulo: "Exercício 27",
        funcao: divisão,
        descricao: "Faça um algoritmo que receba dois números, calcule e mostre a divisão do primeiro número pelo segundo. Sabe-se que o segundo número não pode ser zero, portanto não é necessário se preocupar com validações."
    },

    {
        titulo: "Exercício 28",
        funcao: mediaPonderada,
        descricao: "Faça um algoritmo que receba duas notas, calcule e mostre a média ponderada dessas notas, considerando peso 2 para a primeira nota e peso 3 para a segunda nota."
    },

    {
        titulo: "Exercício 29",
        funcao: produto,
        descricao: "Faça um algoritmo que receba o preço de um produto, calcule e mostre o novo preço, sabendo-se que este sofreu um desconto de 10%."
    },

    {
        titulo: "Exercício 30",
        funcao: comissao,
        descricao: "Um funcionário recebe um salário fixo mais 4% de comissão sobre as vendas. Faça um algoritmo que receba o salário fixo de um funcionário e o valor de suas vendas, calcule e mostre a comissão e o salário final do funcionário."
    },

    {
        titulo: "Exercício 31",
        funcao: peso,
        descricao: "Faça um algoritmo que receba o peso de uma pessoa, calcule e mostre: a) o novo peso se a pessoa engordar 15% sobre o peso digitado; b) o novo peso se a pessoa emagrecer 20% sobre o peso digitado."
    },

    {
        titulo: "Exercício 32",
        funcao: gramas,
        descricao: "Faça um algoritmo que receba o peso de uma pessoa em quilos, calcule e mostre esse peso em gramas."
    },

    {
        titulo: "Exercício 33",
        funcao: trapezio,
        descricao: "Faça um algoritmo que calcule e mostre a área de um trapézio. Sabe-se que: A = (base maior + base menor)* altura)/2 ;"
    },

    {
        titulo: "Exercício 34",
        funcao: quadrado,
        descricao: "Faça um algoritmo que calcule e mostre a área de um quadrado. Sabe-se que: A = lado * lado;"
    },

    {
        titulo: "Exercício 35",
        funcao: losango,
        descricao: "Faça um algoritmo que calcule e mostre a área de um losango. Sabe-se que: A = (diagonal_maior * diagonal_menor)/2"
    },

    {
        titulo: "Exercício 36",
        funcao: salario,
        descricao: "Faça um algoritmo que receba o valor do salário mínimo e o valor do salário de um funcionário, calcule e mostre a quantidade de salários mínimos que ganha esse funcionário."
    },

    {
        titulo: "Exercício 37",
        funcao: tabuada,
        descricao: "Faça um algoritmo que calcule e mostre a tabuada de um número digitado pelo usuário."
    },

    {
        titulo: "Exercício 38",
        funcao: algoritmo,
        descricao: "Faça um algoritmo que receba o ano de nascimento de uma pessoa e o ano atual, calcule e mostre: a) a idade dessa pessoa em anos; b) a idade dessa pessoa em meses; c) a idade dessa pessoa em dias; d) a idade dessa pessoa em semanas."
    },

    {
        titulo: "Exercício 39",
        funcao: contas,
        descricao: "João recebeu seu salário de R$ 1200,00 e precisa pagar duas contas (C1=R$ 200,00 e C2=R$120,00) que estão atrasadas. Como as contas estão atrasadas, João terá de pagar multa de 2% sobre cada conta. Faça um algoritmo que calcule e mostre quanto restará do salário do João."
    },

    {
        titulo: "Exercício 40",
        funcao: catetos,
        descricao: "Faça um algoritmo que receba o valor dos catetos de um triângulo, calcule e mostre o valor da hipotenusa."
    },
];

const container = document.getElementById("cards-container");

exercicios.forEach((ex, index) => {
    const card = document.createElement("div");
    card.className = "card";

    const header = document.createElement("div");
    header.className = "card-header";
    header.textContent = ex.titulo;
    header.addEventListener("click", () => {
        content.style.display = content.style.display === "block" ? "none" : "block";
    });

    const content = document.createElement("div");
    content.className = "card-content";

    const descricao = document.createElement("p");
    descricao.textContent = ex.descricao;
    content.appendChild(descricao);

    const button = document.createElement("button");
    button.textContent = "Executar";
    button.addEventListener("click", ex.funcao);

    content.appendChild(button);
    card.appendChild(header);
    card.appendChild(content);
    container.appendChild(card);
});




