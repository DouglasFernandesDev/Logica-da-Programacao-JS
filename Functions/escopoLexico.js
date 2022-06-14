const nome = 'Douglas';

function falaNome() {
  console.log(nome);
}

function usaFalaNome() {
  const nome = 'Fernandes';
  falaNome();
}
usaFalaNome(nome);