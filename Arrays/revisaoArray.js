/*  Valor por referencia

const nomes = ['Eduardo', 'Maria', 'Joana'];
//String, Objetos, Funções, Números.
nomes[2] = 'João';
delete nomes[2];
console.log(nomes);
*/

//const nomes = new Array('Eduardo', 'Maria', 'Joana');
/*
const nomes = ['Eduardo', 'Maria', 'Joana'];
const novo = [...nomes];
const removido = nomes.pop();
const removidoFinal = nomes.shift();

novo.pop();
console.log(nomes);
console.log(novo);
console.log(removido);
console.log(removidoFinal);
*/
/*
const nomes = ['Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana'];
const novo = nomes.slice(0, -1);
nomes.push('João');
nomes.unshift('Dolores');
nomes.unshift('Maycon')
console.log(nomes);
console.log('######');
console.log(novo);
*/
const nome = 'Douglas Fernandes Pereira';

const nomes = nome.split(' ');
console.log(nomes);

const emon = ['Douglas', 'Fernandes', 'Pereira', 'Junior'];
const semon = emon.join(' ');
console.log(semon);