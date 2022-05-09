var readline = require('readline-sync');

var n = 0;
var resto = 0;

console.log("Verifica se o numero informado e par ou impar");
n = parseInt(readline.question("Informe um numero inteiro: "));
resto = n%2;

// IGUAL   MENOR    MENOR IGUAL      MAIOR          MAIOR IGUAL     DIFERENTE
//  ==,     <,         <=,             >,            >=,       e        !=

if(resto == 0) {
    console.log("O numero informado e par");
} else {
    console.log("O numero informado e impar");
}