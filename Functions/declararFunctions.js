// Declaração de função (Function hoisting)
// Funções não tem ordem de chamada, pode chamar em qualquer lugar
// Pode chamar a função antes ou depois do escopo.
// Ordem dos fatores não altera o resultado.
// First-class objects (Objetos de primeira classe)
/*
Chamada antes
falaOi();
function falaOi() {
  console.log('Oie');
}
chamada depois
function falaOi() {
  console.log('Oie');
}
falaOi();
*/
// Function expression
const souUmDado = function() {
  console.log('Sou um dado');
}
//  souUmDado();

function executaFuncao(funcao) {
  funcao();
}
executaFuncao(souUmDado);

// Arrow functions

const arrowFunction = () => {
  console.log('Sou uma arrow function');
};
arrowFunction();

// Dentro de um objeto
const obj = {
  falar() {
    console.log('Estou falando...');
  }
}
obj.falar();