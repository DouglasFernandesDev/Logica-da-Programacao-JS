/*    OPERADOR CONDICIONAL TERNARIO
DEPENDENDO DA CONDICAO, NOS RECEBEREMOS VALORES DIFERENTES
*/

// ? :
// (condição)? VALOR PARA VERDADEIRO / : 'VALOR PARA FALSO'
//    Condicao entao valor 1 se nao valor 2
//    condition ? value1 : value2

//    EXEMPLOS
//    CAFE DA MANHA TOP

let pao = true;
let queijo = false;

const niceBreakFast = pao && queijo ? 'Cafe TOP' : 'Cafe Ruim!';

console.log(niceBreakFast);

console.log('');

let sanduba = true;
let parmesao = false;

const almostNiceBreakFast = sanduba || parmesao ? 'Cafe TOP' : 'Cafe Ruim!';
console.log(almostNiceBreakFast);
console.log('');
//    MAIOR QUE 18

let age = 18;
const canDrive = age >= 18 ? 'Pode dirigir' : 'Nao Pode Dirigir';

console.log(canDrive);
console.log('');

const pontuacaoUsuario = 1000;
const nivelUsuario =
  pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';
console.log(nivelUsuario);
