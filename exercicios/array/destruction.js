// Desestruturação como você tivesse uma mala e nela tivesse uma camisa vermelha, amarela e azul. Só quero pegar a camisa amarela.
const mala = ['camisa vermelha', 'camisa amarela', 'camisa azul']
let [, amarela] = mala
console.log(amarela)

const fruits = ['banana', 'pera', 'uva']

// poderia definir b e p que daria certo
let [banana, pera] = fruits
console.log(banana, pera);

// comum de chamar rest
// let [banana, ...qualquercoisamesmo] = fruits
// console.log(banana, qualquercoisamesmo);

// com funções agora
// o parâmetro era fruits e passou a ser pera entre chaves
function liquidificador({ pera }) {
  console.log(pera);
}

const fruits1 = {
  banana: 'banana',
  pera: 'pera'
}
liquidificador(fruits1)