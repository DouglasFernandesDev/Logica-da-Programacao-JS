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
  try {
    const href = el.getAttribute('href');
    const response = await fetch(href);
  
    if (response.status !== 200) throw new Error('ERRO 404');
  
    const html = await response.text();
    loadResult(html);
  } catch (e) {
    console.log(e);
  }
}

function loadResult(res) {
  const result = document.querySelector('.resultado');
  result.innerHTML = res;
}
