let readline = require('readline-sync')

let nomePiloto = ""
let velocidadeInicial = 0
let velocidadeDesejada = velocidadeInicial
let velocidadeEscolhida = 0


nomePiloto = readline.question("Informe seu nome: ")
velocidadeDesejada = parseInt(readline.question("A que velocidade deseja viajar?: "))
velocidadeEscolhida = readline.question(`Voce escolheu? ${velocidadeDesejada}Km/s.\n
Confirme sua escolha, basta digitar a mesma velocidade: `)
velocidadeDesejada = velocidadeEscolhida
if(velocidadeEscolhida <= 0){
  console.log(`${velocidadeEscolhida}Km/s? Voce ta de brincadeira, a nave nao vai sair do lugar.`)
}else if(velocidadeEscolhida <= 40){
  console.log(`Escolheu ${velocidadeEscolhida}Km/s. Mas estamos numa nave, voce pode ir mais que isso.`)
}else if(velocidadeEscolhida >= 40){
  console.log(`Escolheu ${velocidadeEscolhida}Km/s. Da para manter nessa velocidade`)
}else if(velocidadeEscolhida >= 80 && velocidadeEscolhida <= 100){
  console.log(`Escolheu ${velocidadeEscolhida}Km/s. Estamos no limite, melhor manter.`)
}else{
  velocidadeEscolhida >= 100
  console.log(`${velocidadeEscolhida}Km/s eh uma velocidade perigosa, controle automatico forçado`)
}
console.log(`O piloto se chama ${nomePiloto} e sua velocidade final é: ${velocidadeEscolhida}Km/s`)