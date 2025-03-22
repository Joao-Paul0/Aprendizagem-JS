const arrayNums = [1, 2, 3, 4]

const multiplica = arrayNums.map(numero => {
  return numero * 10
})
console.log(multiplica)

// 1 - Utilize o método forEach para imprimir cada elemento de um array juntamente com seu índice.

const frutas = ['banana', 'uva', 'maçã']

frutas.forEach((elemento, indice) => {
  console.log(`A fruta ${elemento} está no índice ${indice}`)
})

// 2 - Crie uma função chamada executaOperacaoEmArray que recebe dois parâmetros: um array e uma função de callback que executa alguma operação matemática. Essa função deve iterar por cada elemento do array e aplicar a função de callback em cada um dos elementos, imprimindo o resultado da operação no console.

function executaOperacaoEmArray(array, funcaoCallBack) {
  return array.map(funcaoCallBack)
}

function dobraNumero(num) {
  return num * 2
}

const listaNumero = [1, 2, 3]
const listaDosNumerosDobrados = executaOperacaoEmArray(listaNumero, dobraNumero)
console.log(listaDosNumerosDobrados)

// 3 - Você recebeu um array numeros contendo valores numéricos. Crie um programa que verifique se um número específico está presente nesse array. Se estiver, o programa deve retornar a posição (índice) desse número. Caso contrário, se o número não estiver presente, o programa deve retornar "-1".

const arrayNumeros = [10, 20, 30, 40]
const numeroPesquisado = 20
let posicao = -1

for (let i = 0; i < arrayNumeros.length; i++) {
  if (arrayNumeros[i] === numeroPesquisado) {
    posicao = i
    break
  }
}

console.log(`Posição do número ${numeroPesquisado}: ${posicao}`)

// 4 - Você recebeu dois arrays de nomes contendo os alunos da Turma A e da Turma B.
// Utilize o método concat() para unir os arrays das turmas A e B em um único array chamado todasAsTurmas. Depois, utilize o método find() para buscar um aluno específico pelo nome no array todosAlunos. Exiba no console uma mensagem informando o nome do aluno procurado; caso não exista na lista, retorne uma mensagem de aviso, por exemplo Aluno não encontrado.

const nomesTurmaA = [
  'João Silva',
  'Maria Santos',
  'Pedro Almeida'
];

const nomesTurmaB = [
  'Carlos Oliveira',
  'Ana Souza',
  'Lucas Fernandes'
];

const unirTurmaATurmaB = nomesTurmaA.concat(nomesTurmaB)
const encontrarAluno = unirTurmaATurmaB.find(nome => nome === 'João Silva')

if (!encontrarAluno) {
  console.log('Aluno não encontrado')
} else {
  console.log(encontrarAluno)
}

// 5 - Considere um array de números inteiros.
// Utilize o método forEach() para multiplicar cada elemento do array por 3 e exibir no console o resultado de cada multiplicação. Depois, utilize o método findIndex() para encontrar o índice do número 18 no array original.

const numeros = [6, 9, 12, 15, 17, 21];

numeros.forEach((numero) => {
  console.log('Multiplicação dos elementos: ', numero * 3)
})

const indiceNumero18 = numeros.findIndex(numero => numero === 18)

if (indiceNumero18 === -1) {
  console.log('Número 18 não está no array')
} else {
  console.log(`O índice do número 18 é ${indiceNumero18}`)
}