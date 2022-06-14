//Funções alto invocadas
// IIFE - immediately invoked function expression

(function(idade, peso, altura) {
  const sobrenome = 'Fernandes';
  function criaNome(nome) {
    return nome + ' ' + sobrenome;
  }

  function falaNome() {
    console.log(criaNome('Douglas'));
  }
  falaNome();
console.log(idade, peso, altura);
})(30, 70, 1.70);   // <========== Ela é auto invocada aqui
