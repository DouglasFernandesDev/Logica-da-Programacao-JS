/*const A = parseInt(lines.shift());
const B = parseInt(lines.shift());

const X = A + B
*/
const input = require("fs").readFileSync("stdin", "utf-8");
let lines = Number(input);

const string = ' nota(s) de R$ ';
console.log(lines);

let qtdNotas = parseInt(lines / 100);
console.log(`${qtdNotas + string + "100,00"}`);
lines = lines % 100;

qtdNotas = parseInt(lines / 50);
console.log(`${qtdNotas + string + "50,00"}`);
lines = lines % 50;

qtdNotas = parseInt(lines / 20);
console.log(`${qtdNotas + string + "20,00"}`);
lines = lines % 20;

qtdNotas = parseInt(lines / 10);
console.log(`${qtdNotas + string + "10,00"}`);
lines = lines % 10;

qtdNotas = parseInt(lines / 5);
console.log(`${qtdNotas + string + "5,00"}`);
lines = lines % 5 

qtdNotas = parseInt(lines / 2);
console.log(`${qtdNotas + string + "2,00"}`);
lines = lines % 2

qtdNotas = parseInt(lines / 1);
console.log(`${qtdNotas + string + "1,00"}`);
lines = lines % 1;
