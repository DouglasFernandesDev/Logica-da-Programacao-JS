var readline = require('readline-sync');

var nome = "";
var n1 = 0;
var n2 = 0;
var n3 = 0;
var n4 = 0;
var media = 0;
var totaldeaulas = 0;
var totaldefaltas = 0;
var percentualdefaltas = 0;

console.log("Media de notas e faltas");
nome = readline.question("Seu nome: ");
n1 = parseFloat(readline.question("Informe a 1 nota: "));
n2 = parseFloat(readline.question("Informe a 2 nota: "));
n3 = parseFloat(readline.question("Informe a 3 nota: "));
n4 = parseFloat(readline.question("Informe a 4 nota: "));
totaldeaulas = parseInt(readline.question("Coloque o total de aulas: "));
totaldefaltas = parseInt(readline.question("Coloque o total de faltas: "))

media = (n1+n2+n3+n4) / 4;
console.log(nome+" sua media e "+media);
percentualdefaltas = (totaldefaltas*100)/totaldeaulas;
console.log(nome+" sua media e "+media);
if((media >= 6) && (percentualdefaltas <= 25)) {
    console.log("Parabens pela aprovacao");
} else {
    console.log("Nao foi dessa vez, tente novamente");
};