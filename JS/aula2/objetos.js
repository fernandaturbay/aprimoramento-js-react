const pessoa = {
    nome: 'isabel',
    idade: 31,
    corDeOlho: 'azul',
}

console.log(pessoa.idade)

pessoa['altura'] = 1.5
console.log(pessoa)

const casa = {
    telhado: 'telha',
    qtdMoradores: 4,
    comodos: 6,
    endereco: {
        logradouro: 'rua esmeralda',
        numero: 142,
        complemento: 'sobrado',
        cep: 24248-890
    },
    moradores:[
        {
            nome: 'andré',
            idade: 18,
        },
        {
            nome: 'azeitona',
            idade: 4,
        },
        {
            nome: 'carlos',
            idade: 22,
        },
    ]
}

console.log(casa.moradores[0].nome)

casa.moradores[1].nome = 'azeite'

console.log(casa.moradores[1])

casa.moradores.push({
    nome: 'duda',
    idade: 33,
})

console.log(casa.moradores)

const chavesDoObj = Object.keys(casa)
console.log(chavesDoObj)

const valoresDoObj = Object.values(casa)
console.log(valoresDoObj)