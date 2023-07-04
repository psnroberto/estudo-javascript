
// ESTRUTURAS DE REPETIÇÃO

// FOR IN

// A Estrutura de Repetição "for in" nos permite percorrer as posições de um array ou objeto de forma simples. Veja o exemplo abaixo:

const frutas = ['Banana', 'Pera', 'Maçã', 'Uva']

for (let frutasArray in frutas) {
    console.log(frutas[frutasArray])
}

for (let indice in frutas) {
    console.log(indice)
}

// Criamos um array contendo 4 strings, com nome de frutas. Ao utilizar o "for in", criamos um varíavel com nome "indice" e "frutasArray" (que pode ter qualquer nome), e estas variáveis representam as strings de cada posição e seus índices, respectivamente. O laço irá executar o "console.log()" em cada índice do array.

// Abaixo outro exemplo:

const numeros = [1, 2, 3, 4]
let soma = Number('')

for (let posicao in numeros) {
    soma = soma + numeros[posicao] * 10
}

console.log(soma)

// Agora um exemplo com objetos:

const pessoa = {
    nome: 'Roberto',
    sobrenome: 'Pereira',
    idade: 31,
    salario: 10000
}

for (let atributo in pessoa) {
    console.log(pessoa[atributo])
}

for (let chave in pessoa) {
    console.log(chave)
}

// FOR OF

// O laço "for of" funciona de forma similar ao "for in", porém ele não busca os índices do array ou objeto, apenas os valores. Veja abaixo um exemplo:

const familia = ['Leila', 'Lico', 'Roberto', 'Luiza']

for (let membro of familia) {
    console.log(membro)
}

// IMPORTANTE: O laço "for of" só pode ser utilizado em elementos iteráveis, como arrays, strings e etc. Ou seja, NÃO FUNCINA COM OBJETOS.