// 1. Um array esparso é um tipo de array no qual a maioria dos elementos tem valores indefinidos. Crie um array esparso e atribua valores a alguns elementos do array (por exemplo, defina valores nos índices 1, 3 e 7). Imprima no console o array e também a informação de comprimento do array.

const arrayEsparso = []

arrayEsparso[1] = 'Elemento 1'
arrayEsparso[3] = 'Elemento 3'
arrayEsparso[7] = 'Elemento 7'

console.log(arrayEsparso)
console.log(arrayEsparso.length)

// 2. Crie um programa em Node.js que inicie com um array cinco elementos e atribua um novo valor para a primeira posição (índice 0) desse array. Em seguida, exiba o array antes e depois da alteração.

const array2 = ['cachorro', 'gato', 'leão', 'tigre', 'dragão']
console.log('Array antes da alteração: ', array2)

array2[0] = 'panda'
console.log('Array depois da alteração: ', array2)

// 3. Crie um array vazio chamado meuArray e adicione 3 números inteiros de sua escolha utilizando o método push(). Imprima no console os itens presentes no array para verificar se os números foram adicionados. Em seguida, substitua o primeiro elemento do array (índice 0) pelo dobro do seu valor atual. Imprima no console o array atualizado para verificar a mudança.

const meuArray = []

meuArray.push(12)
meuArray.push(7)
meuArray.push(33)
console.log('Itens no array meuArray: ', meuArray)

const valorDobro = meuArray[0] * 2
meuArray[0] = valorDobro
console.log('Array após a atualização do primeiro elemento: ', meuArray)

// 4. Desenvolva um programa em Node.js que crie um array vazio e atribua valores a ele utilizando o método push(). Adicione três números inteiros ao array e, em seguida, exiba o array resultante.

const array4 = []

array4.push(12)
array4.push(7)
array4.push(33)

console.log('Resultado: ', array4)

// 5. Desenvolva um programa em Node.js que simule uma clínica veterinária. Crie um array vazio chamado clinica que representará a fila de animais na clínica. Em um primeiro momento, simule a chegada de três animais diferentes e exiba a lista de animais no console. Após a exibição, remova os animais da lista um por vez e, por fim, exiba no console o estado final da lista.

const animais = []

animais.push('corvo')
animais.push('coelho')
animais.push('águia')
console.log('Fila de animais após a chegada: ', animais)

animais.pop()
animais.pop()
animais.pop()
console.log('Fila de animais aguardando: ', animais)