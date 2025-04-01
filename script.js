var nome = "maria"
let valor = 2.3
let idade = 15
var casado = false
let pessoa = { nome: "Lucia", idade: 12 }
let cores = ["amarelo", "vermelho", "verde"]

document.writeln(nome + "<br>")//Adiciona uma quebra delnha após cada valor
document.writeln(valor + "<br>")
document.writeln(idade + "<br>")
document.writeln(casado + "<br>")
document.writeln(JSON.stringify(pessoa) + "<br>")//Para exibir o objeto de forma legível
document.writeln(cores + "<br>")//Para exibir o array de forma legível


//OPERADORES 
//Os operadores atuam sobre os valores (operados) para produzir um novo valor.
//Os operadores aritméticos são os mas comuns:

document.writeln("<br><hr><br>")

document.writeln("<hr><br>Operadores Aritnéticos<br>")
document.writeln(3 + 2 + "<br>")
document.writeln(8 * 2 + "<br>")
document.writeln(10 / 4 + "<br>")
document.writeln(9 - 5 + "<br>")
document.writeln("<br>" + "9" + "5 <br>")

//OPERADORES //JavaScript define alguns operadores aritméticos de forma abreviada 

document.writeln("<br><hr><br>")

var count = 0; //Define uma variável
document.writeln(count + "<br>")

count++; //Incrementa a variável
document.writeln(count + "<br>")

count--; //Decrementa a variável
document.writeln(count + "<br>")

count += 2; //Soma 2: o mesmo que count = count + 2;
document.writeln(count + "<br>")

count *= 3; //Multiplica por 3: o mesmo que count = count * 3;
document.writeln(count + "<br>")

//=> 6: nomes de variáveis também são expressões.
count
document.writeln(count + "<br>")

document.writeln("<br><hr><br>")


//OPERADORES 
//Os operadores de igualdade e relacionais testaram se dois valores são iguais, desiguais, menores que, maiores que, etc. São avaliados como verdadeiros ou falsos.

var x = 2, y=3; //Esses sinais = são atribuições e não testes de igualdade
x == y  //=>falso: igualdade
x !=y //=>verdadeiro: desigualdade
x < y //=>verdadeiro: menor que
x <= y //=>verdadeiro: menor ou igual a
x > y //falso: maior que
x >= y //falso: maior ou igual a
"two"=="three" // falso: as duas strings são diferentes
"two">"three"  //verdadeiro:"tw" é alfabeticamente maior do que "th"
false == (x > y) // verdadeiro: falso é igual a falso

//Operadores lógicos
//Os operadores lógicos combinam ou invertem valores booleanos
(x==2) && (y==3) //=> verdadeiro: as duas comparações são verdadeiras. && é E
(x>3) ||(y<3)  //=> falso: nenhuma das comparações é verdadeira. || é OU
!(x==y)  //verdadeiro: ! inverte um valor booleano

