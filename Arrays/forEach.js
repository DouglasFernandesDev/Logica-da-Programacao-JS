/*
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

for (let valor of arr1) {
  console.log(valor);
}
*/

const arr1 = [10, 20, 30];
let total = 0;
arr1.forEach(valor => {
  total += valor;
});
console.log(total);