// Pega os escopos dentro e fora das funções, também é lexico.
// Se chama Closures por conta de que ele pega tudo que está por perto
// Habilidade que a função tem em acessar seu escopo lexico

function retornaFuncao(nome) {
  return function () {
    return nome;
  };
}

const funcao = retornaFuncao('Douglas');
const funcao2 = retornaFuncao('Fernandes');
console.dir(funcao);
console.dir(funcao2);