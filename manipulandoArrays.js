/*
Adicionar um item no fim, no comesso
Remover do fim, do comesso
Pegar somente alguns elementos do array
Remover 1 ou mais items em qualquer posicao do array
Encontrar a posicao de um elemento no array
*/

let techs = ['html', 'css', 'js']

//no final
techs.push('nodejs')

// no comesso
techs.unshift('sql')

// remover item do final
techs.pop()

//remover do comesso
techs.shift()

//pegar somente alguns elementos
console.log(techs.slice(1, 2))

//remover 1 ou mais itens do array
techs.splice(1, 1)

//encontrar a posicao de um elemento no array
let index = techs.indexOf('css')

console.log(techs)
