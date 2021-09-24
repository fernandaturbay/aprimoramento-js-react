// //metodo push - adiciona no final
// const inara = [1, 2, 3, 4]
// console.log(inara)
// inara.push(6)
// console.log(inara)

// //unshift - adiciona no inicio
// inara.unshift(0)
// console.log(inara)

// //pop - exclui no final
// inara.pop()
// console.log(inara)

// //shift - exclui no começo
// inara.shift()
// console.log(inara)

// //split = divide string em array
// const fruta = "a;ba;ca;te"
// const frutaSplitada = fruta.split(';')
// console.log(frutaSplitada)

// //join = converte array em string
// console.log(frutaSplitada.join(''))
// console.log(typeof frutaSplitada)

//------
//sort - ordena

const pares = [0, 6, 4, 2, 8]
const numOrdenados = pares.sort()

console.log(numOrdenados)

//splice - recebe dois valores: numero inicial de onde ele parte para apagar e o index que ele vai apagar. substitui a string que está apagando por outra coisa. 
const frutas = ['banana', 'maca', 'uva', 'mirtilo', 'jabuticaba','pera','ata']
// frutas.splice(2,2,'melancia')
// console.log(frutas)

//slice: recebe dois parâmetros: o primeiro número passado, ignora tudo que vem antes e começa dali. A mesma coisa acontece com o segundo parâmetro que ignora o index e o que vem a frente.
const pote = frutas.slice(3,4)
console.log(pote)


// 3 outros metodos de array que eu gostaria de aprender. 