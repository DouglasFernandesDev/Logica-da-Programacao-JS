/*const A = parseInt(lines.shift());
const B = parseInt(lines.shift());

const X = A + B
*/
const input = require("fs").readFileSync("stdin", "utf-8");

const [A, B] = input.split('\n').map(num => Number(num));

const kmL = A / B;
console.log(`${kmL.toFixed(3)} km/l`);
