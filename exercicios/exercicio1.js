// 1. Declare três variáveis diferentes (uma para cada tipo: string, número e booleano) e atribua valores a elas. Em seguida, exiba o tipo de cada variável no console.

const texto = "texto"
const numero1 = 12
const booleano = true

console.log(typeof texto)
console.log(typeof numero1)
console.log(typeof booleano)

// 2. Crie duas variáveis, uma contendo seu primeiro nome e outra contendo seu último nome. Em seguida, combine-as em uma terceira variável usando o operador + e em uma quarta variável usando template strings. Por fim, imprima os resultados obtidos no console.

const primeiroNome = "João"
const ultimoNome = "Paulo"
const concatenandoPrimeiroNomeEUltimoNome = primeiroNome + ultimoNome
const usandoTemplateStrings = `Usando templates strings: ${concatenandoPrimeiroNomeEUltimoNome}`

console.log(usandoTemplateStrings)


// 3. Declare duas variáveis, uma contendo um número e outra contendo uma string. Em seguida, combine-as em uma terceira variável usando template strings para montar uma frase e exiba o resultado no console.

const numero2 = 2025
const frase = `${numero2} vai ser um ano bao demaize meu povo`

console.log(frase)

// 4. Crie uma variável inicializada com um valor de qualter tipo e, em seguida, reatribua um novo valor a essa variável. Imprima ambos os valores no console após atribuí-los.

let minhaVariavel = "Primeiro valor"
console.log(minhaVariavel)
minhaVariavel = "Novo valor"
console.log(minhaVariavel)

// 5. Declare uma variável usando var fora de um bloco de código (por exemplo, if) e outra dentro desse bloco. Tente acessar essas variáveis dentro do bloc e fora dele utilizando console.log e analise os resultados. Faça o mesmo processo utilizando let e compare com os resultados anteriores.

var fora = 'Fora do escopo'
if (true) {
  var dentro = 'Dentro do escopo'
  console.log(fora)
  console.log(dentro)
}
console.log(fora)
console.log(dentro)

// let fora = 'Fora do escopo'
// if (true) {
//   let dentro = 'Dentro do escopo'
//   console.log(fora)
//   console.log(dentro)
// }
// console.log(fora)
// console.log(dentro)

// 6. Declare uma variável booleana que informa se está chovendo e utilize-a em uma estrutura condicional (if) para exibir uma mensagem informando se é preciso levar um guarda-chuva ou não dependendo do valor da variável.

const estaChovendo = true
if (estaChovendo) {
  console.log('Está chovendo')
} else {
  console.log('Não está chovendo')
}