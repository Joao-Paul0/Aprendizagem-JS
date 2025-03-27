// 1 - Faça uma função que aceite vários arrays como argumentos e retorne um único array contendo todos os elementos dos arrays fornecidos, utilizando Spread Operator.

// const array1 = [1, 2, 3, 4, 5]
// const array2 = ['a', 'b', 'c', 'd', 'e']

// function variosArrays(array1, array2) {
//   const unicoArray = [...array1, ...array2]
//   return unicoArray
// }
// console.log(variosArrays(array1, array2))

function concatArray(...arrays) {
  return [].concat(...arrays)
}

const array1 = [1, 2]
const array2 = [3, 4]
const array3 = [5, 6]

const unicoArray = concatArray(array1, array2, array3)
console.log(unicoArray)

// 2 - Crie um array de números chamado valores. Depois,escreva um programa que some todos os elementos deste array utilizando o método reduce.

const valores = [1, 2, 3, 4, 5]

const somaDosElementos = valores.reduce((acumulador, numeros) => {
  return acumulador + numeros
}, 0)
console.log('A soma dos elementos: ', somaDosElementos)

// 3 - Considere duas listas de cores:
// Crie um programa que una essas duas listas, removendo cores duplicadas e exiba a lista final.

// const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho']
// const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul']

// function concatenarCores(...arrays) {
//   return [].concat(...arrays)
// }
// const concatenandoArray = concatenarCores(coresLista1, coresLista2)
// const meuSet = new Set(concatenandoArray)
// console.log(meuSet)

const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho'];
const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul'];

const coresUnicas = [...new Set([...coresLista1, ...coresLista2])];
console.log('Cores sem repetir: ', coresUnicas);

// 4 - Escreva uma função que receba um array de números e retorne um array contendo apenas os números pares.

function filtrarNumeros(arr) {
  return arr.filter((num => num % 2 === 0))
}

const numeros = [12, 7, 33, 22, 3]

const listaNumerosPares = filtrarNumeros(numeros)
console.log('LIstas dos números pares: ', listaNumerosPares)

// 5 - Crie uma função que filtre os números de um array que são múltiplos de 3 e maiores que 5.

function multiplosDeTresEMaioresQueCinco(arr) {
  return arr.filter(num => num % 3 === 0 && num > 5)
}

const listaDosNumeros = multiplosDeTresEMaioresQueCinco(numeros)
console.log('Listas dos números múltiplos de 3 e maiores que 5: ', listaDosNumeros)


// 6 - Crie uma função que receba um array de números e retorne a soma de todos os elementos.

function somaDosNumeros(arr) {
  return arr.reduce((acumulador, atual) => {
    return acumulador + atual
  }, 0)
}
const resultadoDaSoma = somaDosNumeros(numeros)
console.log('Soma dos números: ', resultadoDaSoma)