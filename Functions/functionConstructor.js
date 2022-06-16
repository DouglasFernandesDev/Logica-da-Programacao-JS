// Função construtora constrói objetos
// Função fábrica ela fabrica objetos
// Muda-se a convenção de escerver funções
// Precisa sempre iniciar com letra maiúscula

function Pessoa(nome, sobrenome) {
  // variaveis privadas
  const ID = 123456;
  const metodoInterno = function() {
    
  };
  //Atributos ou métodos públicos
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = () => {
    console.log(this.nome + ': Sou um metodo');
  };
} 

const p1 = new Pessoa('Douglas', 'Fernandes');
const p2 = new Pessoa('Otávio', 'Miranda');
p2.metodo();
console.log(typeof p1.nome);