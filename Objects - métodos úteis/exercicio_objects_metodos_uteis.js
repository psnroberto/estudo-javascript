// MÉTODOS ÚTEIS DE OBJETOS

// Object.keys(), Object.values(), e Object.entries() => Mostra todas as chaves e valores de um objeto:

const objeto1 = {nome: 'Roberto', sobrenome: 'Pereira', idade: 31}
console.log(Object.keys(objeto1)) // Mostra apenas as chaves;
console.log(Object.values(objeto1)) // Mostra os valores de cada chave;
console.log(Object.entries(objeto1)) // Mostra as chaves e os valores em forma de array;

//------------------------------------------ //-------------------------------------------------------//
//------------------------------------------ //-------------------------------------------------------//


// Object.freeze() => Congela um objeto para que nenhuma de suas propriedades possa ser alterada:

Object.freeze(objeto1)
objeto1.nome = 'Rubia' // Mesmo alterando o atributo "nome", ao dar o console.log, o primeiro valor ainda é mostrato;
console.log(objeto1)

//------------------------------------------ //-------------------------------------------------------//
//------------------------------------------ //-------------------------------------------------------//

// Object.DefineProperty/Properties()

// Podemos definir o comportamento de propriedades do nosso objeto através do Object.DefineProperty/Properties(). Podemos dizer se elas serão configuráveis, enumeráveis, e etc. Segue exemplo:

// Criamos um objeto, "objeto2", com diversas propriedades ('id', 'nome', etc.);

const objeto2 = {
    id: 547311,
    nome: 'Roberto',
    sobrenome: 'Pereira',
    idade: 31,
    altura: 1.70,
    salario: 'R$15.000,00'
}

// Utilizamos o "Object.defineProperties()" para definir e alterar várias propriedades do objeto criado, "objeto2";

Object.defineProperties(objeto2, {
    id: { // Estamos alterando propriedades de "id"
        enumerable: true, // PODE ser enumerada;
        writable: false, // NÃO PODE ser reescrita ou ter seu valor alterado;
        configurable: false, // NÃO PODE ser reconfigurada;
    },
    salario: { // Estamos alterando propriedades de "salario"
        enumerable: true,
        writable: false,
        configurable: false,
    },
    sobrenome: { // Estamos alterando propriedades de "sobrenome"
        enumerable: false, //  PODE SER ENUMERADA
    }
})

// Tentamos abaixo alterar a propriedade "salario" de "objeto2", e deletar a propriedade "id";

objeto2.salario = 'R$10.000,00'
delete objeto2.id

// Ao dar o "console.log" abaixo, as propriedades "id" e "salario" não tiveram seus valores alterados ou foram deletados e "sobrenome" não teve a sua chave mostrada, pois definimos dentro de "Object.defineProperties()" que não poderiam ser enumerados ("enumerable"), reescritos ("writable") ou reconfigurados ("configurable")

console.log(Object.keys(objeto2)) // console.log para exibir todas as chaves de "objeto2"
console.log(objeto2)

// Outro exemplo, com Funções Construtoras:

function Objeto3(id, nome, sobrenome, idade, altura, salario){
    this.id = id
    this.nome = nome
    this.sobrenome = sobrenome 
    this.idade = idade
    this.altura = altura
    this.salario = salario

    Object.defineProperties(this, {
        id: {
            enumerable: true, // PODE ser enumerada;
            writable: false, // NÃO PODE ser reescrita ou ter seu valor alterado;
            configurable: false, // NÃO PODE pode ser reconfigurada;
        },
        salario: {
            enumerable: true,
            writable: false,
            configurable: false,
        },
        sobrenome: {
            enumerable: false, // NÃO PODE SER ENUMERADA
        }
    })
}

const objeto3 = new Objeto3(547311, 'Roberto', 'Pereira', 31, 1.70, 'R$15.000,00')
objeto3.salario = 'R$10.000,00'
delete objeto3.id

console.log(Object.keys(objeto3))
console.log(objeto3)

// Conclusão: o método "Object.defineProperties()" é extremamente importante quando queremos manter propriedades de nossos objetos seguras e em sigilo, e pode ser utilizado dentro de uma Função Construtora como um método próprio;

//------------------------------------------ //-------------------------------------------------------//
//------------------------------------------ //-------------------------------------------------------//

// Object.getOwnPropertyDescriptor() e 

// Podemos exibir propriedades de cada chave de nossos objetos através do método "Object.getOwnPropertyDescriptor()". Segue abaixo exemplo:

const objeto4 = {
    nome: 'Roberto',
    sobrenome: 'Pereira',
    remuneracao: 'R$ 15.000,00',
}

console.log(Object.getOwnPropertyDescriptors(objeto4, 'nome', 'sobrenome', 'remuneracao'))