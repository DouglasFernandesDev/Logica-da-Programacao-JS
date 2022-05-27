/* CELSIUS EM FAHRENHEIT
    CRIE UMA FUNCAO QUE RECEBA UMA STRING EM CELSIUS OU
    FAHRENHEIT E FACA A TRANSFORMACAO DE UMA UNIDADE PARA OUTRA

    C = (F - 32) * 5/9

    F = C * 9/5 + 32
*/

function transform(degree) {
  const celsius = degree.toUpperCase().includes('C')
  const fahrenheit = degree.toUpperCase().includes('F')
  //fluxo de erro
  if (!celsius && !fahrenheit) {
    throw new Error('Grau nao identificado')

    //fluxo ideal, F -> C
    let udpatedDegree = Number(degree.toUpperCase().replace('F', ''))
    let formula = fahrenheit => ((fahrenheit - 32) * 5) / 9
    let degreeSign = 'C'
    //fluxo alternativo C -> F
    if (celsius) {
      udpatedDegree = Number(degree.toUpperCase().replace('C', ''))
      formula = celsius => (celsius * 9) / 5 + 32
      degreeSign = 'F'
    }

    return formula(udpatedDegree) + degreeSign
  }
}

try {
  console.log(transform('10C'))
  console.log(transform('50F'))
  transform('50Z')
} catch (error) {
  console.log(error.message)
}
