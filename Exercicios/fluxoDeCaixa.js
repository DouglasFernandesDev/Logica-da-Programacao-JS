/*    SISTEMA DE GASTOS FAMILIAR
    CRIE UM OBJETO QUE POSSUIRA 2 PROPRIEDADES, AMBAS DO TIO ARRAY
    * RECEITAS: []
    * DESPESAS: []
    * 
AGORA CRIE UMA FUNCAO QUE IRA CALCULAR O TOTAL DE RECEITAS E DESPESAS
E IRA MOSTRAR UMA MENSAGEM SE A FAMILIA ESTA COM SALDO POSITIVO OU
NEGATIVO, SEGUIDO DO VALOR DO SALDO
*/

/*
function calcSaldo(saldo) {
  let receitas = [2500]
  let despesas = [1500]
  let saldoPositivo = saldo > receitas / despesas
  let saldoNegativo = saldo < receitas / despesas
  let saldoFinal = receitas / despesas

  if (saldoPositivo) {
    saldoFinal = 'Saldo Positivo}'
  } else if (saldoNegativo) {
  }

  return saldoFinal
}
console.log(calcSaldo(5))
console.log(saldoNegativo)
*/

let familia = {
  receitas: [2500, 3000, 250.75, 300.45],
  despesas: [320.75, 80.95, 169.99, 1700, 4000]
}

function sum(array) {
  let total = 0

  for (let value of array) {
    total += value
  }

  return total
}

function calcBalanco() {
  const calcReceitas = sum(familia.receitas)
  const calcDespesas = sum(familia.despesas)

  const total = calcReceitas - calcDespesas
  const estaOk = total >= 0

  let seuBalancoTotal = 'negativo'

  if (estaOk) {
    seuBalancoTotal = 'positivo'
  }

  console.log(`Seu saldo e ${seuBalancoTotal}: R$ ${total.toFixed(2)}`)
}

calcBalanco()
