//defineProperty = trava só uma propriedade -=- defineProperties = trava todas propriedades
/*
function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, "estoque", {
  enumerable: true,   //mostra a chave
  value: estoque,     // valor da chave
  writable: false,    // Pode alterar o valor ou não
  configurable: true// Pode reconfigurar/apagar a chave ou não
  });

  Object.defineProperty(this, "estoque", {
  enumerable: true,   //mostra a chave
  value: estoque,     // valor da chave
  writable: true,    // Pode alterar o valor ou não
  configurable: false// Pode reconfigurar/apagar a chave ou não
  });
}
const p1 = new Produto('Camiseta', 20, 3);
console.log(Object.keys(p1));

for (let chave in p1) {
  console.log(chave);
}
*/
function Produto(nome, preco, estoque) {
  Object.defineProperties(this, {
  nome: {
    enumerable: true,   //mostra a chave
    value: estoque,     // valor da chave
    writable: false,    // Pode alterar o valor ou não
    configurable: true  /*Pode reconfigurar/apagar a chave ou não}*/
  },
  preco: {
    enumerable: true,   //mostra a chave
    value: estoque,     // valor da chave
    writable: false,    // Pode alterar o valor ou não
    configurable: true  /*Pode reconfigurar/apagar a chave ou não}*/
  },
  estoque: {
    enumerable: true,   //mostra a chave
    value: estoque,     // valor da chave
    writable: false,    // Pode alterar o valor ou não
    configurable: true  /*Pode reconfigurar/apagar a chave ou não}*/
  },
  });
}
const p1 = new Produto('Camiseta', 20, 3);
console.log(Object.keys(p1));

for (let chave in p1) {
  console.log(chave);
}