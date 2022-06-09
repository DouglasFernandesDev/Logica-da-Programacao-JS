/*
const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
0 + tresHoras + umDia
*/
//const data = new Date(2019, 3, 20, 15, 14, 27, 500);  //  a, m, d, h, M, s, ms

const data = new Date();
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1);
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia Semana', data.getDay());
console.log(data.toString());
console.log(Date.now());
console.log('');

function zeroToLeft(num) {
  return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
  const dia = zeroToLeft(data.getDate());
  const mes = zeroToLeft(data.getMonth() + 1);
  const ano = zeroToLeft(data.getFullYear());
  const hora = zeroToLeft(data.getHours());
  const min = zeroToLeft(data.getMinutes());
  const sec = zeroToLeft(data.getSeconds());

  return `${dia}/${mes}/${ano} ${hora}:${min}:${sec}`;
}
const date = new Date();
const dataBrasil = formataData(date);
console.log(dataBrasil);
