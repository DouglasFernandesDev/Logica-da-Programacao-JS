//this se referencia ao objeto, neste caso person
const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : () => {
    return this.firstName + " " + this.lastName;
  }
};
// no log percebamos que usei person para voltar o nome completo ao inves de this.
console.log(person.firstName + " " + person.lastName);