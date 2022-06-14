function criaPessoa(nome, sobrenome, a, p) {
  return{
    nome,
    sobrenome,
    fala(assunto) {
      return `${nome} está ${assunto}.`;
    },
    altura: a,
    peso: p,
    // Getter
    get imc() {
      const indice = this.peso / (this.altura **2);
      return indice.toFixed(2);
    }
  };
}
const p1 = criaPessoa('Douglas', 'Fernandes', 1.8, 80);
const p2 = criaPessoa('Maria', 'Tania', 1.6, 42)
console.log(p1.fala('falando sobre JS'));
console.log(p1.nome, p1.sobrenome);
console.log(p2.nome, p2.sobrenome);
console.log("#######");
console.log(p1.imc);
console.log(p2.imc);