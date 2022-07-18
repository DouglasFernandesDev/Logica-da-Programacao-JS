const request = obj => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();
  
    xhr.addEventListener('load', () => {
      xhr.status >= 200 && xhr.status < 300 ?
      resolve(xhr.responseText) : reject(xhr.statusText);
    });
  })
};

document.addEventListener('click', e => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if(tag === 'a') {
    e.preventDefault();
    loadPage(el);
  }
})

async function loadPage(el) {
  const href = el.getAttribute('href');
  try {
  const res = await request({
    method: 'GET',
    url: href,
  });
  loadResult(res);
} catch(e){
  console.log(e);
};
}

function loadResult(res) {
  const result = document.querySelector('.resultado');
  result.innerHTML = res;
}
