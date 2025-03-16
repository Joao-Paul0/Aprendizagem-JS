// 1. Escreva um código que utilize o loop for/of para iterar e imprimir cada elemento de um array.

const array1 = [12, 7, 3]
// usando for
for (let i = 0; i < array1.length; i++) {
  console.log(`Elemento: ${array1[i]}`)
}
// usando for of
for (let elemento of array1) {
  console.log(elemento)
}
// 2. Crie uma função que receba um array e imprima no console o número do índice e o elemento.
// Usando for
function imprimirIndiceEEelementoUsandoFor(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Usando for. Indice: ${i}; Elemento: ${arr[i]}`)
  }
}

const fruits = ['banana', 'uva', 'pessego']

imprimirIndiceEEelementoUsandoFor(fruits)

// Usando for of
const imprimirIndiceEEelementoUsandoForOf = (arr) => {
  for (const [indice, valor] of arr.entries()) {
    console.log(`Usando for of. Indice: ${indice}, Elemento: ${valor}`)
  }
}
imprimirIndiceEEelementoUsandoForOf(fruits)

// 3. Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.

const numeros = [10, 11, 12, 10, 11, 12, 10, 11, 12, 10, 11, 12]

const somaDosElementos = (arr) => {
  let total = 0
  for (let numero of arr) {
    total += numero
  }
  return total
}

console.log(somaDosElementos(numeros))

// 4. Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, no seguinte formato: 'o menor número é X e o maior número é Y'.

const arrMenoresMaiores = [5, 37, 18, 59, 12, -5]

const imprimirMenorEMaior = (arr) => {
  let maior = 0
  let menor = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maior) {
      maior = arr[i]
    }

    if (arr[i] < menor) {
      menor = arr[i]
    }
  }

  return `Menor número da lista é ${menor} e maior é ${maior}`
}

console.log(imprimirMenorEMaior(arrMenoresMaiores))

// Jeito mais simples e rápido de se resolver 
const menorValor = Math.min(...arrMenoresMaiores)
const maiorValor = Math.max(...arrMenoresMaiores)
console.log(menorValor)
console.log(maiorValor)

// 5. Crie um programa que utilize um laço for para percorrer uma array const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14] e exibir no console apenas os números pares contidos nesse array.

const listaNumeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14]

for (let i = 0; i < listaNumeros.length; i++) {
  if (listaNumeros[i] % 2 === 0) {
    console.log(`Números pares: ${listaNumeros[i]}`)
  }
}

// 6. Crie um programa que calcule a média dos números presentes em um array utilizando um loop for.

const listNumeros = [12, 7, 3, 10, 8, 6]
let soma = 0

for (let i = 0; i < listNumeros.length; i++) {
  soma += listNumeros[i]
}

const media = soma / listNumeros.length
console.log('Array dos números: ', listNumeros)
console.log('Média dos números: ', media.toFixed(2))