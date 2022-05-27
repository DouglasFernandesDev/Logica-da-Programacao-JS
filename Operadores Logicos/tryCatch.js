/* throw = lancar
   catch = pegar
   try catch = tentar e pegar
*/
/*     THROW     */
function sayMyName(name = '') {
  if (name === '') {
    throw 'Nome e obrigatorio'
  }
  console.log('depois do erro')
}

/*      CATCH        */

try {
  sayMyName()
} catch (e) {
  console.log(e)
}
