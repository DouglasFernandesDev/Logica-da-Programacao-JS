function Pessoa(nome, sobrenome, idade, peso) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.nome = peso;

    Object.freeze(this);
}

const p1 = new Pessoa('Douglas', 'Fernandes', 30, 70);
console.log(p1);