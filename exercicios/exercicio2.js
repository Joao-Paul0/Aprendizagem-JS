// 1. Crie uma variável contendo uma frase. Em seguida, exiba no console o comprimento da frase e a mesma frase com letras maiúsculas.

const frase = 'Ano de 2025 vai ser melhor do que 2024!'
console.log('Comprimento da frase: ' + frase.length)
console.log('Frase com letras maiúscula: ' + frase.toUpperCase())

// 2. Declare duas variáveis, uma inicializada com valor null e outra que não recebe atribuição (resultando em undefined). Exiba os valores no console.

const variavelNull = null
let variavelUndefined
console.log('Valor de variavelNull: ', variavelNull)
console.log('Valor de variavelUndefined: ', variavelUndefined)

// 3. Crie 3 variáveis de tipos diferentes, utilize template strings para combinar os diferentes tipos de dados (number, string, boolean) em uma única string e exiba o resultado no console.

const valorNumber = 12
const valorString = 'Jao'
const valorBooleano = true

console.log(`Valor de valorNumber: ${valorNumber}; valor de valorString: ${valorString}; valor de valorBooleano: ${valorBooleano}`)

// 4. Crie uma variável numérica e uma string. Faça a conversão da variável numérica para string e da string para número. Exiba os tipos de dados resultantes no console.

const numero = 12
const texto = '7'

const numeroConvertido = String(numero)
const textoConvertido = Number(texto)

console.log('Tipo de dado após conversão do número para string: ', typeof numeroConvertido)
console.log('Tipo de dado após conversão do string para número: ', typeof textoConvertido)

// 5. Crie uma variável com uma string e utilize métodos de manipulação de strings, como toUpperCase, toLowerCase, slice ou outros, para modificar a string original. Exiba os resultados finais no console.

const variavelTexto = 'Javascript é topzera meu povoo'

const maiusculo = variavelTexto.toUpperCase()
const minusculo = variavelTexto.toLowerCase()
const parteDaString = variavelTexto.slice(0, 10)

console.log('Texto em maiúsculo: ', maiusculo)
console.log('Texto em minúsculo: ', minusculo)
console.log('Parte da string: ', parteDaString)