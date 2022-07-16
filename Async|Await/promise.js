function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
};

function wait1time(msg, time) {
  return new Promise((resolve, reject) => {
    if(typeof msg !== 'string') reject('BAD VALUE');
    setTimeout(()=> {
      resolve(msg);
    }, time);
  })
};

wait1time('Conexão com BD', rand(1, 3))
.then(res => {
  console.log(res);
  return wait1time('Buscando dados na BD', rand(1, 3));
})
.then(res => {
  console.log(res);
  return wait1time(252525, rand(1, 3))
})
.then(res => {
  console.log(res);
}).then(() => {
  console.log('Exibe dados da BD na tela');
})
.catch(e => {
  console.log('ERRO', e);
});

console.log('Isso aqui vai executar primeiro no maior foda-se');