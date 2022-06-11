/*
For classico -> Geralmente com iteráveis ARRAYS ou STRINGS
For in -> Retorna indice ou chave STRING ARRAY OU OBJETOS
For of -> Retorna o valor em si ITERAVEIS ARRAYS OU STRINGS
*/
const pessoa = {
  nome: 'Douglas',
  sobrenome: 'Fernandes',
  idade: 30
}

for (let key in pessoa){
  console.log(`${key}: ${pessoa[key]}`);
}