// Palavra reservada function tem variavel especial que chama arguments
// Sustenta todos argumentos enviados
/*
function funcao(a, b, c) {
  let total = 0;

  for (let argumento of arguments) {
    total += argumento;
  }
//            indice 0...1...2
  console.log(total, a, b, c);
}
funcao(1, 2, 3, 4, 5, 6, 7);
*/

const conta = function(operador, acumulador, ...numeros) {
  for (let numero of numeros) {
    if(operador === '+') acumulador += numero;
    if(operador === '-') acumulador -= numero;
    if(operador === '/') acumulador /= numero;
    if(operador === '*') acumulador *= numero;

  }
  console.log(acumulador);
};
conta ('+', 1, 20, 30, 40, 50);