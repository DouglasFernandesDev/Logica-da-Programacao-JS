//retornar numeros maior que 10!

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
console.table(numeros);
const numFilter = numeros.filter(valor => valor > 10);
console.table(numFilter);
console.log(`os numeros ${numFilter} são maior que dez`);

console.log('################################');

/*  Retorne as pessoas que tem o nome com 5 letras ou mais
    Retorne as pessoas com mais de 50 anos
    Retorne as pessoas cujo nome termina com a
*/
const pessoas = [
  { nome: 'João', idade: 42},
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Leticia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 }
];

console.table(pessoas);

const moreLetters = pessoas.filter(objeto => objeto.nome.length >= 5);
console.log(moreLetters);

const moreYears = pessoas.filter(objeto => objeto.idade > 50);
console.log(moreYears);

const finalAperson = pessoas.filter(objeto => objeto.nome.
  toLowerCase().endsWith('a'));
console.log(finalAperson);