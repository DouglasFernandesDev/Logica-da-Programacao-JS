var readline = require('readline-sync');

var n = 0;
var count = 0;
var i = 0;

console.log("Numeros primos");
n = parseInt(readline.question("Informe um numero inteiro: "))
//dividir o numero n vezes
for(i=1; i <= n; i++){
    if (n % i == 0) {
        count++;
    }
}    if(count == 2){
    console.log("O numero "+n+" e um numero primo");
} else {
    console.log("O numero "+n+ " nao e um numero primo");
}