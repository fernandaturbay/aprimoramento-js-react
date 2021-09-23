// //criar uma função que receba como parâmetro uma string, a função deve: 
// excluir o primeiro (shift) e a ultima letra (pop), 
// adicionar um numero no primeiro(unshift) e no ultimo index(push) e retornar uma string com quebra de linha. (join('\n')

//função
function corda(nome){
    const cordaSplitada = nome.split('') //transforma string em array para aplicar os métodos
    cordaSplitada.shift() //exclui a primeira letra
    cordaSplitada.pop() //exclui a ultima letra
    cordaSplitada.unshift(1) //adiciona um número no primeiro index
    cordaSplitada.push(10) //adiciona um numero no ultimo index
    return cordaSplitada.join('\n') //retorna array como string e com quebra de linha
}

console.log(corda('banana')) //chama a função

