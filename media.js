/*  Programa que soma dois 
números e veja a média de 5 numeros  */
var readlineSync = require('readline-sync');

var valor1 = 0;
var valor2 = 0;
var valor3 = 0;
var valor4 = 0;
var valor5 = 0;
var media = 0;
// var media = 0;

valor1 = parseFloat(readlineSync.question('Valor 1: '));
valor2 = parseFloat(readlineSync.question('Valor 2: '));
valor3 = parseFloat(readlineSync.question('Valor 3: '));
valor4 = parseFloat(readlineSync.question('Valor 4: '));
valor5 = parseFloat(readlineSync.question('Valor 5: '));

media = ((2 * valor1) + (3 * valor2) + (5 * valor3) / 3);
// media = total / 5;
console.log("Total: " + total);
console.log("Media: " + media);