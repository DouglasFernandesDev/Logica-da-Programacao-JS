/*  Some todos os números (reduce)
    Retorne um array com os pares (Filter)
    Retorne um array com o dobro dos valores (map)
   
    .reduce(function(acumulador, valor, indice, array){
});
*/

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce((acumulador, valor) => {
  acumulador += valor;
  return acumulador;
}, 0);
console.log(total);

console.log('################################');
const pares = numeros.reduce((acumulador, valor) => {
  if(valor % 2 === 0) acumulador.push(valor);
  return acumulador;
}, []);
console.log(pares);
console.log('################################');

const dobro = numeros.reduce((acumulador, valor) => {
  acumulador.push(valor * 2);
  return acumulador
}, []);
console.log(dobro);
console.log('################################');

const somaPares = numeros.reduce((acumulador, valor) => {
  if(valor % 2 === 0) {
    acumulador += valor
  }
  return acumulador
}, 0); //neste caso importante valor inicial ser 0 ===== }, 0)
console.log(somaPares);
console.log('################################');

const pessoas = [
  { nome: 'João', idade: 42},
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Leticia', idade: 19 },
  { nome: 'Rosana', idade: 64 },
  { nome: 'Wallace', idade: 47 }
];

const maisVelha = pessoas.reduce((acumulador, valor) => {
  if(acumulador.idade > valor.idade) return acumulador;
  return valor;
});
console.log(maisVelha);