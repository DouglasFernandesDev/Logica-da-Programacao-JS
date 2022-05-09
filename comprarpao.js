var readline = require('readline-sync');

var nome1 = "";
var nome2 = "";
var dinheiro1 = 0;
var dinheiro1 = 0;
var valorpao = 0;
var qtdepao = 0;
var totalpao = 0;

console.log("Comprar pao");

nome1 = readline.question("Seu nome: ");
dinheiro1 = parseFloat(readline.question(nome1+" quanto voce possui de dinheiro? "));

nome2 = readline.question("Qual seu nome? ");
dinheiro2 = parseFloat(readline.question(nome2+" quanto voce possui de dinheiro?"));

valorpao = parseFloat(readline.question("Valor do pao: "));
qtdepao = parseFloat(readline.question("Quantos paes voce vai querer comprar "));
totalpao = valorpao * qtdepao;

if((dinheiro1 > totalpao) || (dinheiro2 > totalpao)){
    console.log(nome1+ " e "+nome2+ ". Hoje vai ter pao");

}else {
    console.log("Nao temos dinheiro para comrar pao");
}