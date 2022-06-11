// for in -> le os indices ou chaves do objeto

const pessoa = {
  nome: 'Douglas',
  sobrenome: 'Fernandes',
  idade: 30
};



for(let key in pessoa){
  console.log(`${key}: ${pessoa[key]}`);
}

/*
for (let i in frutas){
  console.log(frutas[i]);
}
*/

/*
  for(let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
  }
  */