// 1. Crie variáveis que armazenem o valor do saldo, de depósito e de um saque de uma conta bancária, depois realize operações de adição e subtração entre eles utilizando uma variável chamada operacao, considerando a função de cada variável criada anteriormente. Exiba os resultados finais no console.

let saldo = 500
const deposito = 100
const saque = 100
const operacaoDeposito = saldo + deposito
const operaSaque = saldo - saque

console.log('Operação do depósito: ', operacaoDeposito)
console.log('Operação do saque: ', operaSaque)

// 2. Crie uma variável numérica com um valor. Utilize um operador ternário para verificar se esse valor é par ou ímpar. Exiba o resultado no console.

const numero = 12
const verificarImparOuPar = numero % 2 === 0 ? 'Par' : 'Impar'

console.log(`O ${numero} declarado é ${verificarImparOuPar}`)

// 3. Considere uma situação em que você está verificando se um usuário está logado e tem permissão de administrador para acessar determinada funcionalidade. Utilize variáveis booleanas para simular essas condições e use o operador AND para verificar se ambas são verdadeiras.

const logado = true;
const admin = false;

const resultado = logado && admin;

console.log('Administrador logado no sistema:', resultado);

// 4. Declare duas variáveis booleanas e use o operador OR para verificar se pelo menos uma delas é verdadeira. Exiba o resultado no console.

const varFalse = false
const varTrue = true
const verificacao = varFalse || varTrue

console.log('Resultado do operador OR:', verificacao)

// 5. Imagine um sistema que determina se um usuário tem idade suficiente para comprar o ingresso para um show. Declare duas variáveis que determinem a idade mínima e qual a idade do usuário e utilize estruturas condicionais para determinar se o usuário pode realizar a compra.

const idade = 22
const idadePermitida = 18
const permissaoPraComprarIngresso = idade >= idadePermitida ? 'Pode comprar ingresso' : 'Não tem idade suficiente'

console.log(permissaoPraComprarIngresso)