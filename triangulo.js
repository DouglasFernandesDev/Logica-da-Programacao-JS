var readline = require('readline-sync');

var la = 0;
var lb = 0;
var lc = 0;
var texto = "Os valores informados nao representam os lados de um triangulo";

console.log("Lados de um triangulo ");


la = parseFloat(readline.question("Informe o valor do lado A "));
lb = parseFloat(readline.question("Informe o valor do lado B "));
lc = parseFloat(readline.question("Informe o valor do lado C "));

if((la < (lb+lc) && lb < (la+lc) && lc < (lb+la))){
        texto = "Os valores informados representam um triangulo";
    } else {
        texto = console.log("Nao deu certo");
    }
console.log(texto);