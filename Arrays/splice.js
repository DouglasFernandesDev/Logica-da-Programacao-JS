//               -5        -4        -3        -2        -1
//                0         1         2         3         4
const nomes = ['Eduardo', 'Maria', 'Joana', 'Gabriel', 'Júlia'];
//pop
//const removidos = nomes.splice(-1, 1);

//shift
//const removidos = nomes.splice(0, 1);

//push
//nomes.splice(nomes.length, 0, 'Luiz');

//unshift
nomes.splice(0, 0, 'Luiz', 'Maria');

console.table(nomes);
//console.log(removidos);

console.log('#####');

const pessoa = {
  nome: 'Eduardo',
  altura: 1.80,
  peso: 85,
  aniversario: '05/05/1985'
};

const itens = pessoa;
console.table(pessoa);
console.log(itens);