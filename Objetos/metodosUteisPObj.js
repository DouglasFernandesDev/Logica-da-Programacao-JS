const produto = { nome: 'Caneca', preco: 25.8 };
Object.defineProperty(produto, 'nome', {
  writable: false,
  configurable: false
})
const caneca = {
  ...produto,
  material: 'Porcelana'
};

produto.preco = 'String qualquer';
delete produto.preco;
delete produto.nome;
console.log(produto, caneca);
console.log();
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
console.log();
console.log(Object.values(produto));
console.log();
console.log(Object.entries(caneca));
console.log();
for (let [chave, valor] of Object.entries(caneca)) {
  console.log(chave, valor);
}