const elementos = [
  {tag: 'p', texto: '=> ==> ===> == === !== != ==>> <<=='},
  {tag: 'div', texto: '>= <= && !'},
  {tag: 'footer', texto: '!!! ... -----'},
  {tag: 'section', texto: '_______'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for(let i = 0; i < elementos.length; i++) {
  let { tag , texto} = elementos[i];
  let elemento = document.createElement(tag);
  let textoCriado = document.createTextNode(texto);

  elemento.appendChild(textoCriado);
  div.appendChild(elemento);
}

container.appendChild(div);