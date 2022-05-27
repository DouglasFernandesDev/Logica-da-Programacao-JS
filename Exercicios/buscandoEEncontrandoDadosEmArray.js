/* 
    * Buscando e contando dados em Arrays *

    Baseado no Array de Livros por Categoria abaixo, faca os seguintes desafios
      * Contar o numero de categorias e o numero de livros em cada categoria
      * Contar o numero de autores
      * Mostrar livros do autor Augusto Cury
      * Transofrmar a funcao acima em uma funcao que ira receber o nome do autor e
      devolver os livros desse autor.
*/

const booksByCategory = [
  {
    category: 'Riqueza',
    books: [
      {
        title: 'Os segredos da mente milionaria',
        author: 'T. Harv Eker'
      },
      {
        title: 'O homem mais rico da Babilonia',
        author: 'George S. Clason'
      },
      {
        title: 'Pai rico, pai pobre',
        author: 'Robert T. Kiyosaki e Sharon L. Lechter'
      }
    ]
  },
  {
    category: 'Inteligencia Emocional',
    books: [
      {
        title: 'Voce e Isubstituivel',
        author: 'Augusto Cury'
      },
      {
        title: 'Ansiedade - Como enfrentar o mal do seculo',
        author: 'Augusto Cury'
      },
      {
        title: 'Os segredos da mente milionaria',
        author: 'Stephen R. Covey'
      }
    ]
  }
]

const totalCategories = booksByCategory.length

console.log(totalCategories)

for (let category of booksByCategory) {
  console.log('Total de livros da categoria: ', category.category)
  console.log(category.books.length)
}

function countAuthors() {
  let authors = []

  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (authors.indexOf(book.author) == -1) {
        authors.push(book.author)
      }
    }
  }

  console.log('Total de autores: ', authors.length)
}

countAuthors()

function booksOfAuthor(author) {
  let books = []

  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (book.author === author) {
        books.push(book.title)
      }
    }
  }

  console.log(`Livros do autor ${author}: ${books.join(', ')}`)
}
booksOfAuthor('Augusto Cury')
