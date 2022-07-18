function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
};

function wait1time(msg, time) {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      if(typeof msg !== 'string') {
      reject('DROP IN THE ERROR');
      return;
    }

      resolve(msg.toUpperCase() + ' - Passei na Promise');
    }, time);
  })
};

async function execute() {
  const fase1 = await wait1time('Fase 1', rand());
  console.log(fase1);
  const fase2 = await wait1time('Fase 2', rand());
  console.log(fase2);
  const fase3 = await wait1time('Fase 3', rand());
  console.log(fase3);
  console.log('Terminamos na fase:', fase3);
};
execute();