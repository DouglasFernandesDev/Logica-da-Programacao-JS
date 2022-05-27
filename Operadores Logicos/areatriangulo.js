const readline = require('readline-sync')

var base = 0
var altura = 0
var area = 0

console.log('Programa que calcula a area de um triangulo')
base = parseFloat(readline.question('Base: '))
altura = parseFloat(readline.question('Altura: '))
area = (base * altura) / 2
console.log('A Area do triangulo e: ' + Math.round(area))
