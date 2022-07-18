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