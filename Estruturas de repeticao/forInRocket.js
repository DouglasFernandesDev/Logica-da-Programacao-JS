//  for in
//  cria um loop em cima de um objeto

let person = {
  name: 'Jhon',
  age: 30,
  weight: 88.6
}

for (let property in person) {
  console.log(property)
  console.log(person[property])
}
