var readlineSync = require('readline-sync');

var n = parseInt(readlineSync.question("Informe um numero "));
var i = 0;
while(i <= 10){
    console.log(n + " X "+ i + " = " + (n*i));
    i = i + 1;
}