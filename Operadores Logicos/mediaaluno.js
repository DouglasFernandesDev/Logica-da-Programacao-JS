var readline = require('readline-sync');
var nome = "";
var n1 = 0;
var n2 = 0;
var n3 = 0;
var n4 = 0;
var media = 0;

console.log("Media de notas");
nome = readline.question("Seu nome: ");
n1 = parseFloat(readline.question("Informe a 1 nota: "));
n2 = parseFloat(readline.question("Informe a 2 nota: "));
n3 = parseFloat(readline.question("Informe a 3 nota: "));
n4 = parseFloat(readline.question("Informe a 4 nota: "));

media = (n1+n2+n3+n4) / 4;
console.log("A Media e " +media);
if(media >= 7){
    console.log("Voce passou!");
} else {
    console.log("Nao foi dessa vez! \nTente novamente");
}