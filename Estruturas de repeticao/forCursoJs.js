for (let i = 0; i <= 6; i++) {
  const par = i % 2 === 0 ? 'par' : 'ímpar';
  console.log(i, par);
}
console.log();

const frutas = ['Maçã', 'Pêra', 'Uva', 'Abacate', 'Mamão', 'Caqui', 'Kiwi'];
for (let i = 0; i < frutas.length; i++) {
  console.log(`Índice ${i}`, frutas[i]);
}
