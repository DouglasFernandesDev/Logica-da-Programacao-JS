/*const A = parseInt(lines.shift());
const B = parseInt(lines.shift());

const X = A + B
*/
const input = require("fs").readFileSync("stdin", "utf-8");

const valor = input.split('\n');

const [x1, y1] = valor[0].split(' ');
const [x2, y2] = valor[1].split(' ');

const distancia = Math.sqrt(((x2 - x1) ** 2 + (y2 - y1) ** 2));

console.log(distancia.toFixed(4));