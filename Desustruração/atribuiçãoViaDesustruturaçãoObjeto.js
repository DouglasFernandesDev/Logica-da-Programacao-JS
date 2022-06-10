//Criado um objeto com detalhes de uma pessoa
const pessoa = {
  nome: 'Douglas',
  sobrenome: 'Fernandes',
  idade: 30,
  endereco: {
    rua: 'Arcádia Paulistana',
    numero: 148,
  },
};
// Atribuição via destruturação
const {
  nome,
  sobrenome,
  idade,
  endereco: { rua, numero },
} = pessoa;
console.log(`${nome} ${sobrenome}, ${idade} anos,` + `${rua}, ${numero}`);
