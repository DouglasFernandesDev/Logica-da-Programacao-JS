/*const A = parseInt(lines.shift());
const B = parseInt(lines.shift());

const X = A + B
*/
const input = require("fs").readFileSync("stdin", "utf-8");
const [A , B] = input.split('\n');

const totalKm = (A * B) / 12;

console.log(totalKm.toFixed(3));
