var readline = require('readline-sync');
var tl = 0;
var total = 0;
var valor = 0;
var media = 0;
var i = 0;
var resp = "sim";

while(resp == "sim"){
tl = parseInt(readline.question("Informe a quantidade de numeros "));
i = 0;
while (i < tl){
    valor = parseFloat(readline.question("Informe o numero "+(i+1)+": "));
    total = total + valor;
    i = i + 1;
}

media = total / tl;
console.log("A media e "+media);
console.log("Digite sim para calcular outra media ");
resp = readline.question("Informe sua resposta ")
resp = resp.toLocaleLowerCase();
}