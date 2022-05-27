/*
      if ... else
      se ... senao
*/
let temperature = 36.9
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37
let lowTemperature = temperature <= 37.5

if (temperature >= 37.5) {
} else if (mediumTemperature) {
} else {
}

console.log(mediumTemperature)

/*
      Switch
*/
function calculate(number1, operator, number2) {
  let result = 0

  switch (operator) {
    case '+':
      result = number1 + number2
      break
    case '-':
      result = number1 - number2
      break
    case '*':
      result = number1 * number2
      break
    case '/':
      result = number1 / number2
      break
    case '%':
      result = number1 % number2
      break
    default:
      console.log('nao implementado')
      break
  }
  return result
}

console.log(calculate(4, '+', 8))
console.log(calculate(4, '-', 8))
console.log(calculate(4, '*', 8))
console.log(calculate(4, '/', 8))
console.log(calculate(4, '%', 8))
console.log(calculate(4, '**', 8))

/*
      THROW
*/
