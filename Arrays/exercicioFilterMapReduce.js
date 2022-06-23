/*  Retorne a soma do dobro de todos os pares
    Filtre os pares
    Dobrar os valores
    Reduzir tudo num array(somar tudo);
*/
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const somaPares = numeros.reduce((acumulador, valor) => {
  if(valor % 2 === 0) {
    acumulador += valor
  }
  return acumulador
}, 0); //neste caso importante valor inicial ser 0 ===== }, 0)
console.log(`A soma dos Pares é ${somaPares}`);

const pares = numeros.filter(valor => valor % 2 === 0);
console.log(`Os pares são ${pares}`);

const dobroPares = numeros.filter(valor => valor % 2 === 0)
.map(valor => valor * 2);
console.log(`Dobro dos pares é ${dobroPares}`);

const juntaTudo = numeros
.filter(valor => valor % 2 === 0)
.map(valor => valor * 2)
.reduce((ac, valor) => {
  return ac+ valor;
}, 0)
console.log(`Olha só tudo junto fica: ${juntaTudo}`);