/*
    Separe um texto que contem espassos, em um novo array onde
    cada texto e uma posicao do array. Depois disso, transforme
    o array em um texto e onde eram espassos, coloque _
*/

let phrase = 'Eu quero viver o Amor'
let myArray = phrase.split(' ') //transofrma em ARRAY
let phraseWithUnderscore = myArray.join('') // Transforma em STRING
console.log(phraseWithUnderscore)
