//map(valor, indice, array);

//Dobre os numeros = valor * 2
//Triplicar os numeros = valor * 3

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
console.table(numeros);

const numerosEmDobro = numeros.map(valor => valor * 2);
console.log(numerosEmDobro);

/* Para cada elemento:
   Retorne apenas uma string com o nome da pessoa
   Remova apenas a chave "nome" do objeto
   Adicione uma chave id em cada objeto
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

const nomes = pessoas.map(valor => valor.nome);
console.log(nomes);

const removeNome = pessoas.map(valor => ({ idade: valor.idade }));
console.log(removeNome);
/* altera o OBJETO
const addId = pessoas.map((valor, indice) => {
  valor.id = (indice +1) * 1000;
  return valor;
});
console.log(addId);
console.table(pessoas);
*/
// Não altera o objeto
const addId = pessoas.map((valor, indice) => {
  const newValor = {...valor};
  newValor.id = indice;
  return newValor;
});
console.table(addId);
console.table(pessoas);