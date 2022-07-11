class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  falar() {
    console.log(`${this.nome} está falando`);
  }

  comer(){
    console.log(`${this.nome} está comendo`);
  }
}

const p1 = new Pessoa('Douglas', 'Fernandes');
console.log(p1.falar());
console.log(p1.comer());