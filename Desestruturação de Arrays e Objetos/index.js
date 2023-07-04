
// ATRIBUIÇÃO DE VARIÁVEIS VIA DESESTRUTURAÇÃO

// É possível atribuir valores a variáveis via desestruturação de arrays e objetos. Ao utilizar este método, "arrancamos" posições de interesse de um array ou objeto e atribuímos a uma variável ou objeto. Segue abaixo um exemplo:

// ARRAYS

const familiaArray = ['Leila', 'Lico', 'Tico',  'Luiza', 'Roberto']
const [mae, pai, ,filho1, filho2] = familiaArray
console.log(mae)
console.log(pai)
console.log(filho1)
console.log(filho2)

// Primeiro criamos um array contendo 4 strings, com os nomes de cada membro da familia. Em seguida, atribuímos às variáveis "mae", "pai", "filho1" e "filho2", via desestruturação, os valores contidos nas posições 0, 1, 3 e 4 do array "familia". Note que a posição 2 do array, que tem o valor 'Tico', não teve seu valor atribuído a nenhuma variável, e para isso, foi preciso colocar um espaço vazio entre vírgulas ao declarar as variáveis;

// OBJETOS:

const familiaObjeto = {
    mae: 'Leila',
    pai: 'Lico',
    primeiroFilho: 'Luiza',
    segundoFilho: 'Roberto'
}

const { mae: maeNome, pai: paiNome, primeiroFilho, segundoFilho } = familiaObjeto
console.log(maeNome)
console.log(paiNome)
console.log(primeiroFilho)
console.log(segundoFilho)

// Ao utilizar a atribuição via desestruturação com objetos, o raciocínio é semelhante ao utilizar em arrays, com algumas diferenças. A primeira, é que não usa-se mais o colchete "[]" e sim as chaves "{}". A segunda, é que, caso o nome da variável declarada não seja o mesmo da chave do objeto em questão, devemos informar o valor de qual chave será atribuído à variável. Neste exemplo, criamos as duas primeiras variáveis com os nomes diferentes das chaves, e foi necessário colocar o nome da chave + ":" antes de seus nomes ("mae: MaeNome", por exemplo). Já as duas últimas variáveis têm o mesmo nome das chaves, logo não é necessário indicar qual a chave terá seu valor atribuído;

// REST OPERATOR (OPERADOR DE RESTO)

// O "resto operator" é utilizado quando queremos que todos os valores restantes de um array ou objeto sejam atribuídos a uma só variável ou objeto. Segue abaixo exemplos:

const familiaArray2 = ['Leila', 'Lico,', 'Luiza', 'Roberto', 'Pipoca', 'Loki', 'Tico']

const [mae2, pai2, filhoMulher, filhoHomem, ...dogs] = familiaArray2
console.log(mae2)
console.log(pai2)
console.log(filhoMulher)
console.log(filhoHomem)
console.log(dogs)

// Atribuímos à variável "dogs" os valores de todas as posições do array posteriores à posição 3 ('Roberto'), utilizando o rest operator ("...dogs")

// Exemplos com objetos:

const filmes = {
    filme1: 'Vingadores',
    filme2: 'Inception',
    filme3: 'Harry Potter',
    filme4: 'Lord of The Rings',
    filme5: 'Hobbit'
}

const {filme1: marvel, filme2: praViajar, filme3: harryPotter, ...tolkien } = filmes

console.log(marvel)
console.log(praViajar)
console.log(harryPotter)
console.log(tolkien)

