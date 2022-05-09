const sum = function (number1, number2) {
  total = number1 + number2
  return total
}

let number1 = 34
let number2 = 25
sum(number1, number2)

console.log(`o número 1 é ${number1}`)
console.log(`o número 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)

/**************/

function fazerSuco(fruta1, fruta2) {
  return 'suco de: ' + fruta1 + fruta2
}

const copo = fazerSuco('banana ', 'maçã')

console.log(copo)

/****************/

let subject = 'create video'
function createThink(subject) {
  subject = 'study'
  return subject
}

console.log(createThink(subject))
console.log(subject)

/*    Function  Hoisting

sayMyName()

function sayMyName() {
  console.log('Douglas')
}
       Arrow function             

const sayMyName = name => {
  console.log(name)
}
sayMyName('Douglas')

*/

function sayMyName(name) {
  console.log('antes de executar a função callback')
  name()
  console.log('depois de executar a callback')
}
sayMyName(() => {
  console.log('estou em uma callback')
})

/*******  Função constructor  *******/

function Person(name) {
  this.name = name
  this.walk = function () {
    return this.name + ' está andando'
  }
}
const douglas = new Person('Douglas')
const joao = new Person('Joao')
console.log(douglas.walk())
console.log(joao.walk())
