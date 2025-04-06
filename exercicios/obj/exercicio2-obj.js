// 1 - Crie um arquivo chamado infoPessoa.js. Nesse arquivo, crie um objeto chamado pessoa que represente informações sobre uma pessoa. Este objeto deve ter as seguintes propriedades:

// nome (string): Nome da pessoa.
// idade (number): Idade da pessoa.
// solteiro (boolean): Indicador de estado civil (true se solteiro, false se casado).
// hobbies (array): Lista de hobbies da pessoa.
// Adicione valores a cada propriedade do objeto pessoa. Use valores fictícios para simular uma pessoa específica.

// Crie uma função chamada mostrarInfoPessoa que aceite o objeto pessoa como parâmetro e imprima todas as informações da pessoa no console, incluindo o tipo de dado de cada propriedade.

// No final do arquivo infoPessoa.js, chame a função mostrarInfoPessoa passando o objeto pessoa como argumento.

// Dica: você pode usar um método de array para retirar os elementos dos colchetes e exibi-los como texto.

const infoPessoa = {
  nome: 'João Paulo',
  idade: 22,
  solteiro: true,
  hobbies: ['Filme', 'Série', 'Música', 'Academia']
}

const mostrarInfoPessoa = function (infoPessoa) {
  for (let chave in infoPessoa) {
    console.log(`Tipos de dado: ${typeof infoPessoa[chave]} => ${chave.charAt(0).toUpperCase() + chave.slice(1)}: ${infoPessoa[chave]}`)
  }
}
mostrarInfoPessoa(infoPessoa)

// 2 - Adicione ao objeto pessoa uma nova propriedade chamada endereco. Esta propriedade deve ser um objeto representando o endereço da pessoa, com as seguintes subpropriedades:

// rua (string): nome da rua.
// cidade (string): nome da cidade.
// estado (string): nome do estado.
// Preencha as subpropriedades do objeto endereco com valores fictícios.

// Modifique a função mostrarInfoPessoa para incluir as informações do endereço da pessoa ao ser chamada.

// No final do arquivo infoPessoa.js, chame a função mostrarInfoPessoa para verificar se as informações atualizadas, incluindo o endereço, são exibidas corretamente no console.

infoPessoa.endereco = {
  rua: 'Chimbinha',
  cidade: 'xique-xique',
  estado: 'Jaoland'
}

function mostrarInfoPessoa2(infoPessoa) {
  for (let chave in infoPessoa) {
    console.log(`${chave.charAt(0).toUpperCase() + chave.slice(1)}: ${infoPessoa[chave]}`)
  }
}

mostrarInfoPessoa2(infoPessoa)


// 3 - Crie uma lista de pessoas chamada pessoas que será um array contendo objetos. Cada objeto deve representar uma pessoa e conter as seguintes propriedades:

// nome (string): nome da pessoa.
// idade (number): idade da pessoa.
// cidade (string): cidade de residência da pessoa.
// Adicione pelo menos três objetos à lista pessoas com informações fictícias de diferentes pessoas.

// a) Crie uma função chamada mostrarListaPessoas que aceita a lista pessoas como parâmetro e imprima no console as informações de cada pessoa na lista.

// b) Adicione uma nova pessoa à lista pessoas utilizando o método push. Certifique-se de que a nova pessoa tenha informações distintas das pessoas já existentes na lista.

// c) Chame a função mostrarListaPessoas para verificar se as informações, incluindo a nova pessoa, são exibidas corretamente no console.

// d) Crie uma função chamada filtrarPorCidade que aceita a lista pessoas e uma string cidade como parâmetros. A função deve retornar uma nova lista contendo apenas as pessoas que residem na cidade fornecida.

// Chame a função filtrarPorCidade passando a lista pessoas e uma cidade fictícia como argumentos e imprima no console o resultado obtido.

const pessoas = [
  { nome: 'Olivia Rodrigo', idade: 22, cidade: 'Curintia', estado: 'São Paulo' },
  { nome: 'Amanda Seyfried', idade: 39, cidade: 'Curitiba', estado: 'Paraná' }
]

function mostrarListaPessoas(pessoas) {
  pessoas.forEach(pessoas => {
    console.log(`${pessoas.nome}, ${pessoas.idade}, ${pessoas.cidade}, ${pessoas.estado}`)
  });
}

pessoas.push({ nome: 'Leonardo Dicaprio', idade: 33, cidade: 'Londrina', estado: 'Paraná' })

mostrarListaPessoas(pessoas)

function filtrarPorCidade(pessoas, cidade) {
  return pessoas.filter(pessoa => pessoa.cidade === cidade)
}

const mostrarCidade = filtrarPorCidade(pessoas, 'Londrina')
console.log('Pessoas de Londrina: ', mostrarCidade)

// 4 - Crie um objeto chamado calculadora que terá os seguintes métodos:

// soma: uma função que aceita dois parâmetros e retorna a soma deles.
// subtracao: uma função que aceita dois parâmetros e retorna a subtração do segundo parâmetro do primeiro.
// multiplicacao: uma função que aceita dois parâmetros e retorna o resultado da multiplicação deles.
// divisao: uma função que aceita dois parâmetros e retorna o resultado da divisão do primeiro pelo segundo. Certifique-se de tratar a divisão por zero, retornando uma mensagem apropriada nesse caso.
// a) Chame cada função dentro do objeto calculadora passando valores como argumentos e imprima no console os resultados obtidos.

// b) Adicione um novo método chamado calcularMedia ao objeto calculadora. Esta função deve aceitar um array de números como parâmetro e retornar a média aritmética dos valores.

// c) Chame a função calcularMedia passando um array de números e imprima no console o resultado obtido.

const calculadora = {
  soma: function (a, b) {
    return a + b
  },
  subtracao: function (a, b) {
    return a - b
  },
  multiplicacao: function (a, b) {
    return a * b
  },
  divisao: function (a, b) {
    return a / b
  }
}

const resultadoAdicao = calculadora.soma(2, 2)
console.log('Resultado da adição:', resultadoAdicao)

const resultadoSubtracao = calculadora.subtracao(10, 5)
console.log('Resultado da subtração:', resultadoSubtracao)

const resultadoMultiplicacao = calculadora.multiplicacao(9, 9)
console.log('Resultado da multiplicação:', resultadoMultiplicacao)

const resultadoDivisao = calculadora.divisao(10, 5)
console.log('Resultado da divisão:', resultadoDivisao)

calculadora.calcularMedia = function (numeros) {
  const soma = numeros.reduce((acc, numeros) => acc + numeros, 0)
  return soma / numeros.length
}

const numeros = [10, 8, 6, 9, 7]
console.log('Média: ', calculadora.calcularMedia(numeros))

// 5 - Crie um objeto chamado contaBancaria com as seguintes propriedades:

// titular: uma string representando o titular da conta.
// saldo: um número representando o saldo da conta.
// depositar: uma função que aceita um valor como parâmetro e adiciona esse valor ao saldo da conta. Utilize this para acessar a propriedade saldo.
// sacar: uma função que aceita um valor como parâmetro e subtrai esse valor do saldo da conta. Utilize this para acessar a propriedade saldo. Certifique-se de verificar se há saldo suficiente antes de efetuar o saque.
// Crie um objeto chamado cliente que representa um cliente com uma conta bancária. O objeto deve ter as seguintes propriedades:

// nome: uma string representando o nome do cliente.
// conta: uma referência à conta bancária associada a esse cliente (objeto criado anteriormente).
// Crie uma função chamada mostrarSaldo que aceita o objeto cliente como parâmetro e imprime no console o nome do cliente e o saldo da sua conta utilizando this para acessar as propriedades do objeto.

// Realize operações de depósito e saque na conta bancária do cliente usando as funções do objeto contaBancaria e, em seguida, chame a função para exibir as informações atualizadas no console.

const contaBancaria = {
  titular: 'João',
  saldo: 3000,
  depositar: function (valor) {
    return this.saldo += valor
  },
  sacar: function (valor) {
    return this.saldo -= valor
  }
}

const cliente = {
  nome: 'Sam',
  conta: contaBancaria,
}

function mostrarSaldo(cliente) {
  console.log(`Nome: ${cliente.nome}, Saldo: ${cliente.conta.saldo}`)
}

cliente.conta.depositar(500)
cliente.conta.sacar(1000)
mostrarSaldo(cliente)