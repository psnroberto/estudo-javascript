
// GETTERS E SETTERS

// Getters e Setters são métodos úteis para manipularmos propriedades de nossos objetos de forma segura e personalizada. Eles nos permitem proteger estas propriedades e evitar alterações externas, e também nos permitem fazer validações antes que estas propriedades sejam executadas ou exibidas.

// Segue abaixo um exemplo, com Constructor Functions:

function Pessoa(nome, sobrenome, idade) { // Criamos uma Constructor Function "Pessoa()" que receberá três argumentos: "nome", "sobrenome" e "idade";

    // Cada argumento recebido será encaminhado a uma propriedade, na qual colocaremos um underline "_" na frente do nome. Este underline tem como objetivo diferenciar o nome das outras propriedades que iremos criar e para dizer que será o valor real, recebido do objeto criado;

    this._nome = nome
    this._sobrenome = sobrenome
    this._idade = idade

    // Criaremos agora três propriedade dentro do objeto ("this"), e definiremos os métodos "get" e o "set" de cada propriedade;



    Object.defineProperty(this, 'nome', {

        // Ao utilizar o método "get", a função definida passará a ter um comportamento semelhante a de uma propriedade do objeto, e não mais de um método. O "get" tem como função apenas buscar e retornar o valor  das propriedades do objeto;
        // As propriedades criadas e definidas como "getters" serão uma espécie de "chave pública", que poderão ser acessadas no retante do código. Por exemplo, se quisermos acessar o nome do objeto criado por meio da função Pessoa(), utilizaremos "objeto.nome" (lembrando que "nome" é um getter e uma chave pública) ao invés de objeto._nome (onde "_nome" é a propriedade que receberá o valor real do objeto criado). ;

        get: function () {
            return this._nome
        },

        // O método "set" tem como função definir e/ou modificar propriedades do objeto, e SEMPRE recebe como argumento o valor retornado do método "get". O "set" definirá, de fato, como a propriedade irá se comportar e suas propriedades, e podemos fazer validações, como as abaixo;
        // 

        set: function (value) {
            if (typeof value !== 'string') {
                console.log('O nome deve conter apenas letras.')
            }
            return value // Lembrando que o parâmetro "value" é o valor retornado do método "get";
        },
    })

    Object.defineProperty(this, 'sobrenome', {
        get: function () {
            return this._sobrenome
        },
        set: function (value) {
            if (typeof value !== 'string') {
                console.log('O sobrenome deve conter apenas letras.')
            }
            return value
        }
    })

    Object.defineProperty(this, 'idade', {
        get: function () {
            return this._idade
        },
        set: function (value) {
            if (typeof value !== 'number') {
                console.log('A idade deve ser um número.')
            }
        },

    })

    Object.defineProperty(this, 'nomeCompleto', {
        get: function () {
            return (this._nome + ' ' + this._sobrenome)
        },
    })

}

// Iremos em seguida criar um objeto, "pessoa1", e passar os argumentos pedidos peça Constructor Function "Pessoa()":

const pessoa1 = new Pessoa('Roberto', 'Pereira', 31)
console.log(pessoa1)

// Tentaremos agora alterar as propriedades "getters" do objeto criado e testaremos as validações definidas nos "setters":

pessoa1.nome = 50 // Tentaremos passar um "number" no lugar de uma "string";
pessoa1.sobrenome = 250 // Tentaremos passar um "number" no lugar de uma "string";
pessoa1.idade = '31' // Tentaremos passar uma "string" no lugar de um "number";

// Criaremos um segundo objeto, "pessoa2", e passaremos outros argumentos:

const pessoa2 = new Pessoa('Rubia', 'Leite', 34)

// Vamos agora alterar as propriedades "getters", respeitando desta vez as validações dos "setters":

pessoa2.nome = 'Luiza'
pessoa2.sobrenome = 'Fernanda'
pessoa2.idade = 35

// Ao printar na tela os "getters" do novo objeto, percebemos que, mesmo alterando manualmente estas propriedades, os valores printados são os recebidos como argumentos ao criar o objeto. Isto acontece porque protegemos o nosso código de possíveis alterações, fazendo com que os "getters" tenham sempre o valor recebido como argumento ao criar o objeto. Os valores dos "getters" ("nome", "sobrenome" e "idade") terão sempre o valores das propriedades originais ("_nome", "_sobrenome" e "_idade"), estas que terão seus valores iguais aos argumentos dos objetos criados;

console.log(pessoa2.nome)
console.log(pessoa2.sobrenome)
console.log(pessoa2.idade)

// RESUMO E CONCLUSÃO

// Os métodos "get" e "set" são utilizados em objetos para buscar e definir suas propriedades;
// O método "get" tem como função "buscar" uma determinada propriedade ou método do objeto e retorná-los. Quando utilizado em um método, fará com que este método passe a ter comportamento semelhante a de uma propriedade, e não mais da uma função;
// O método "set" tem como função definir e/ou alterar as propriedades de um objeto, e SEMPRE recebe como argumento o valor retornado do método "get". Além disso, podemos fazer validações dentro do método "set". No exemplo deste exercício, validamos o tipo de argumento recebido ("string" ou "number") e printamos uma mensagem na tela, ao depender do resultado da validação;
// IMPORTANTE: Os métodos "get" e "set" podem ser utilizados conjuntamente ou não;
