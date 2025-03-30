// 1 - Crie um arquivo chamado livro.js. Nesse arquivo, crie um objeto livro que represente as informações de um livro. O objeto deve conter as seguintes propriedades:

// titulo (string): título do livro.
// autor (string): nome do autor do livro.
// anoPublicacao (number): ano de publicação do livro.
// genero (string): gênero do livro.

// No final do arquivo livro.js, instancie o objeto livro com dados de algum livro que você goste e imprima os detalhes do livro no console.

const livro = {
  titulo: 'O Corvo',
  autor: "James O'Barr",
  anoPublicado: 2012,
  genero: 'HQ'
}
// console.log(`Detalhes do livro: 
//   Título: ${livro.titulo}
//   Autor: ${livro.autor}
//   Ano de Publicação: ${livro.anoPublicado}
//   Gênero: ${livro.genero}`)

console.log('Detalhes do livro')
for (let chave in livro) {
  console.log(`${chave.charAt(0).toUpperCase() + chave.slice(1)}: ${livro[chave]}`)
}

// 2 - Crie uma nova variável chamada anoAtual e atribua a ela o ano atual (utilize new Date().getFullYear()). Crie um objeto chamado livro com as seguintes propriedades: título, autor, ano de publicação e gênero.

// Adicione a propriedade idadePublicacao diretamente ao objeto livro, representando há quantos anos o livro foi publicado. Calcule essa idade subtraindo o anoDePublicacao do anoAtual.

// Crie uma string chamada mostrarDetalhes contendo os detalhes do livro, incluindo a informação da idade de publicação.

// Exiba a string mostrarDetalhes no console para verificar se as informações, incluindo a idade de publicação, são exibidas corretamente.

const anoAtual = new Date(2025)

const livro2 = {
  titulo: 'Coraline',
  autor: 'Neil Gaiman',
  anoPublicado: 2012,
  genero: 'Fantasia'
}

livro2.idadeDePublicacao = anoAtual - livro2.anoPublicado

livro2.mostrarDetalhes = `\nDetalhes do livro:
                          Título: ${livro2.titulo}
                          Autor: ${livro2.autor}
                          Ano de Publicação: ${livro2.anoPublicado}
                          Idade de publicação: ${livro2.idadeDePublicacao}
                          Gênero: ${livro2.genero}`

console.log(livro2.mostrarDetalhes)
console.log(livro2)

// 3 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois, utilize colchetes para acessar diretamente as propriedades do objeto livro e imprimir no console os detalhes do livro.

const livro3 = {
  titulo: 'Coraline',
  autor: 'Neil Gaiman',
  anoPublicado: 2012,
  genero: 'Fantasia'
}

for (let chave in livro3) {
  console.log(`${chave.charAt(0).toUpperCase() + chave.slice(1)}: ${livro3[chave]}`)
}

// 4 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois, adicione uma nova propriedade chamada avaliacao. Esta propriedade deve ser inicializada como null.

// No final do arquivo livro.js, adicione uma avaliação ao objeto.

// Caso a propriedade avaliacao seja null, atribua a avaliação ao objeto livro.

// Caso contrário, imprima uma mensagem indicando que o livro já possui uma avaliação.

const anoAtual2 = new Date(2025)

const livro4 = {
  titulo: 'O Corvo',
  autor: "James O'Barr",
  anoPublicado: 2012,
  genero: 'HQ'
}

livro4.idadeDePublicacao = anoAtual2 - livro4.anoPublicado

const novaAvaliacao = { nota: 7.5, comentario: 'Ótima leitura' }

if (livro4.avaliacao === null) {
  livro4.avaliacao = novaAvaliacao
} else {
  console.log('O livro já possui uma avaliação')
}
console.log(livro4)

// 5 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois altere o gênero do livro para "Aventura".

const anoAtual5 = new Date(2025)
const livro5 = {
  titulo: 'Coraline',
  autor: 'Neil Gaiman',
  anoPublicado: 2012,
  genero: 'Fantasia'
}

livro5.idadeDePublicacaoLivro5 = anoAtual5 - livro5.anoPublicado
livro5.genero = 'Aventura'
console.log(livro5)

// 6 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Em seguida, exclua a propriedade avaliacao do objeto livro. Depois, exiba os detalhes do livro no console, verificando se as informações atualizadas, sem a avaliação, são exibidas corretamente.

const anoAtual6 = new Date(2025)
const livro6 = {
  titulo: 'Coraline',
  autor: 'Neil Gaiman',
  anoPublicado: 2012,
  genero: 'Fantasia',
  idadeDePublicacao: anoAtual - 2012,
  avaliacao: {
    nota: 8.5,
    comentario: 'Ótima leitura!'
  }
}

delete livro6.avaliacao

for (chave in livro6) {
  console.log(`${chave.charAt(0).toUpperCase() + chave.slice(1)}: ${livro6[chave]}`)
}