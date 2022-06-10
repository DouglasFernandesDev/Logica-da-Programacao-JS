// ... rest, ... spread
const numeros = [
  //0[0,1,2]
  [1, 2, 3],
  //1[0,1,2]
  [4, 5, 6],
  //2[0,1,2]
  [7, 8, 9],
];
//console.log(numeros[1][2]);
const soma = numeros[0][1] + numeros[0][2] + numeros[1][1] + numeros[2][2];
const divisao = soma / 2;
console.log(`${divisao.toFixed(2)}`);
