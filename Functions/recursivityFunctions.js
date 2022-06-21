//Função que auto se chama torna-se um laço

const recursiva = (max) => {
  console.log(max);
  if (max >= 10) return;
  max++;
  recursiva(max);
}
recursiva(0);