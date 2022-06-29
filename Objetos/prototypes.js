function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.nomeCompleto;
}

Pessoa.prototype.nomeCompleto = () => `${this.nome} ${this.sobrenome}`

const pessoa1 = new Pessoa('Douglas', 'F.');
const pessoa2 = new Pessoa('Otavio', 'M.');

console.log(pessoa1);
console.log(pessoa2);