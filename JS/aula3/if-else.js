//if permite criar condições

const idade = 33

if (idade <= 20) {
    console.log ("você é adolescente")
} else if (idade >= 21 && idade <= 30) {
    console.log ("você é jovem")
} else {
    console.log ("você é adulto")
}


//criar uma função que recebe um número. se esse numero for divisivel por 3, mensagem fizz. se for por 5, buzz. se for divisivel por 3 e por 5, fizzbuzz. se for uma string, devolver com 'isso nao é um numero'. se nao for nem divisivel por 3 e nem por 5, retorna o numero mesmo. 

function fizzBuzz (numero) {
    if (numero % 3 === 0 && numero % 5 === 0){
        console.log("fizzbuzz")
    } else if (numero %  5 === 0){
        console.log("buzz")
    } else if (numero %  3 === 0){
        console.log ("fizz")
    } else if (typeof numero !== "number") {
        console.log("isso não é um número")
    } else {
        console.log(numero)
    }
}
    fizzBuzz("amanda")

    //criar uma função que recebe 4 notas e calcula a média. se for menor ou igual a 4, reprovado. se for maior ou igual a cinco ou menor ou igual a 6, recuperação. maior ou igual a sete ou menor ou igual a 9, aprovado. igual a 10, aprovado com louvor. se a soma de todas as notas for maior que 10, notas incorretas. e se alguma nota for string, "notas inválidas".

    function calculaMedia (bim1, bim2, bim3, bim4) {
        const media = (bim1+bim2+bim3+bim4)/4
        
        
        if (media < 5) {
            console.log("Reprovado")
        } else if (media >= 5 && media < 7){
            console.log("Recuperação")
        } else if (media >= 7 && media < 10) {
            console.log("Aprovado")
        } else if (media === 10) {
            console.log("Aprovado com Louvor")
        } else {
            console.log(("Notas Incorretas ou Inválidas"))
        }
        
    }
        calculaMedia(10,5,8,9)

    //(bim1+bim2+bim3+bim4 > 10) 
    //(typeof bim1+bim2+bim3+bim4 != "number") ("Notas Inválidas")


    //