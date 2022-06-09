/*
        Capturar evento submit
*/

const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const inputNumerador = e.target.querySelector('#numerador');
  const inputDenominador = e.target.querySelector('#denominador');

  const numerador = Number(inputNumerador.value);
  const denominador = Number(inputDenominador.value);

  if (!numerador) {
    getResultado('Coloque um número para somar', false);
    return;
  }
  if (!denominador) {
    getResultado('Coloque um número para somar', false);
    return;
  }

  const soma = getSum(numerador, denominador);

  const msg = `Sua soma dos numeros é ${soma}`;

  getResultado(msg, true);
});

function getSum(numerador, denominador) {
  const soma = numerador + denominador;
  return soma;
}

function criaP() {
  const p = document.createElement('p');
  return p;
}

function getResultado(msg, isValid) {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML += '';

  const p = criaP();

  if (isValid) {
    p.classList.add('p-resultado');
  } else {
    p.classList.add('bad');
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
}
