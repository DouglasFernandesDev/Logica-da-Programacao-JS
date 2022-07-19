class Pessoa {
  constructor(nome, sobrenome, peso, altura){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.peso = peso;
    this.altura = altura;
  }
}
const pessoa = new Pessoa('Douglas', 'Fernandes', 68 +'kg', 170 +'cm' );
console.log(pessoa);