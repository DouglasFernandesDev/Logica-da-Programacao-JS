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
// Promise.all Promise.race Promise.resolve Promise.reject

const promises = [
  // 'Primeiro valor',
  wait1time(1000, rand(1, 5)),
  wait1time('Promise 1', rand(1, 5)),
  wait1time('Promise 2', rand(1, 5)),
  wait1time('Promise 3', rand(1, 5)),
  // 'Another value'
];

// Promise.all(promises)
// .then(val => console.log(val))
// .catch(e => console.log('ERRO', e));

Promise.race(promises)
.then(val => console.log(val))
.catch(e => console.log('ERRO', e));