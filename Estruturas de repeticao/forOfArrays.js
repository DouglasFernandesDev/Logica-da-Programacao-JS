const nome = ['Douglas', 'Otávio', 'Henrique'];

console.log("For clássico");

for (let i = 0; i < nome.length; i++) {
  console.log(nome[i]);
};

console.log("For in");

for (let i in nome) {
  console.log(nome[i]);
}

console.log("For of");

for (let valor of nome) {
  console.log(valor);
}

console.log("For Each");

nome.forEach((valor, indice, array) => {
  console.log(valor, indice, array);
});