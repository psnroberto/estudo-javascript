
// PROTOTYPES

// Os prototypes, ou protótipos, são métodos primordiais existentes em Funções Construtoras, e que são herdados por cada objeto criado a partir delas. São mecanismos a partis dos quais objetos herdam recursos uns dos outros. Eles permitem que os nossos códigos tenham uma melhor performance, pois cada objeto criado a partir da Função Construtora não precisará carregar em si este método.

// Vamos exemplificar abaixo com uma Função Construtora, primeiro sem utilizar os prototypes e depois com a utilização dos prototypes:

function Pessoa(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
    this.nomeCompleto = function(){
        return `O nome completo é: ${this.nome} ${this.sobrenome}.`
    }  
}

const pessoa1 = new Pessoa('Roberto', 'Pereira')
console.log(pessoa1.nomeCompleto())

// Da primeira maneira criada, toda vez que criarmos um novo objeto por meio da Função Construtora "Pessoa()", o método "nomeCompleto()" será chamado dentro da própria função. Como é uma atividade que poderá ser repetida muitas vezes (podem ser criados milhões de objetos através de "Pessoa()"), podemos definir o método "nomeCompleto" dentro função "pai", e sempre que for necessário, o novo objeto criado acionará este método, através dos prototypes:

function Pessoa2(nome, sobrenome, altura, peso){ // Criamos a Função Construtora "Pessoa2", SEM NENHUM MÉTODO DENTRO DELA:
    this.nome = nome,
    this.sobrenome = sobrenome,
    this.altura = altura,
    this.peso = peso
}

// Atribuiremos ao método "prototype" de "Pessoa2", que é NATIVO de TODA Função Construtora, outros dois métodos, "nomeCompleto()" e "imc()":

Pessoa2.prototype.nomeCompleto = function (){return `O nome completo é: ${this.nome} ${this.sobrenome}.`}
Pessoa2.prototype.imc = function(){return 'O IMC calculado é: ' + (this.peso) / (this.altura * this.altura) + '.'}

// Criaremos 4 objetos a partir da Função Construtora "Pessoa2": "pessoa2", "pessoa3" e etc:

const pessoa2 = new Pessoa2('Rubia', 'Leite', 1.52, 52)
const pessoa3 = new Pessoa2('Leila', 'Inez', 1.49, 48)
const pessoa4 = new Pessoa2('Luiza', 'Fernanda', 1.60, 68)
const pessoa5 = new Pessoa2('Floresvano', 'Caldeira', 1.68, 75)

// Imprimiremos na tela os métodos "nomeCompleto()" e "imc()" de cada objeto criado, herdados da Função Construtora "Pessoa2":

console.log(pessoa2.nomeCompleto())
console.log(pessoa2.imc())
console.log(pessoa3.nomeCompleto())
console.log(pessoa3.imc())
console.log(pessoa4.nomeCompleto())
console.log(pessoa4.imc())
console.log(pessoa5.nomeCompleto())
console.log(pessoa5.imc())

// Explicando: Após declaramos a Função Construtora "Pessoa2()", definimos que dentro do seu método "prototype" (que é um método NATIVO de qualquer Função Construtora e não precisa ser criado), haveria outros dois métodos, "nomeCompleto()" e "imc()", e que estes métodos retornariam as strings definidas;

// QUALQUER objeto criado a partir de "Pessoa2()" terá um link direto com o seu método "prototype()", que pode conter vários métodos, atributos e etc; 

// PROTOTYPES E HERANÇAS

// Quando há um conflito entre métodos criados com o mesmo nome, um dentro da Função Construtora diretamente e outro como método de seu prototype, o motor de busca do JS procurará primeiramente OS MÉTODOS CRIADOS DENTRO DA PRÓPRIA FUNÇÃO. No exemplo abaixo, criamos dois métodos "nomeCompleto()", um dentro da própria Função Construtora "Pessoa3" e outro definido como método de seu prototype:

function Pessoa3(nome, sobrenome){
    this.nome = nome,
    this.sobrenome = sobrenome
    this.nomeCompleto = function(){ // Método criado dentro da própria Função Construtora;
        return `ORIGINAL => O nome completo é: ${this.nome} ${this.sobrenome}.`
    }
}

Pessoa3.prototype.nomeCompleto = function(){return `PROTOTYPE => O nome completo é: ${this.nome} ${this.sobrenome}.`} // Método definido dentro de "prototype";

const pessoa6 = new Pessoa3('Oriosvaldo', 'Da Hora')

console.log(pessoa6.nomeCompleto()) // Será exibiado no log o retorno do método criado dentro da Função Construtora "Pessoa3", e não o método criado dentro de seu prototype.

// IMPORTANTE: Quando um objeto é criado diretamente ou literalmente, sem a utilização de uma Função Construtora, seu objeto "pai" será o "Object.prototype", que é, dentro de uma cadeia ou árvore de PROTÓTIPOS, o objeto mais elevado e que já contem, de forma inerente, vários métodos. É dele que são herdados diversos métodos utilizados em nossos códigos, e isso explica porque conseguimos utilizá-los em nossos objetos sem a necessidade de criá-los;

// Quando um objeto é criado através de uma Função Construtora, ele irá inicialmente buscar os métodos dentro de si mesmo, e, caso não encontre o método desejado, irá buscar dentro do objeto "prototype" da função que o criou. Caso ainda não encontre o método desejado, ele irá buscar dentro de "Object.prototype", que é o objeto primordial;

// Podemos enxergar os prototypes como uma cadeia ou árvore, onde os prototypes de objetos inferiores herdam os prototypes de objetos superiores,e assim sucessivamente. Como exemplo ilustrativo, segue um cadeia hipotética de protótipos: Object => Object.prototypes => Object.prototypes.MetodoX => Object.prototypes.MetodoX.prototypes => Object.prototypes.MetodoX.prototypes.MetodoY ...;

// Object {
//     prototype {
//         MetodoX {
//             prototype {
//                 MetodoY {
//                     prototype ---- Este prototype do objeto MetodoY, herda todos os prototypes acima na cadeia.
//                 }
//             }
//         }
//     }
// }

// Cada objeto criado, seja de forma literal ou por Funções Construtoras, possui um objeto "prototype" inerente, que incialmente é vazio. Se um outro objeto for criado a partir deste objeto, ele herdará o objeto "prototype" do seu pai, e assim sucessivamente;

// "prototype" É UM OBJETO, INERENTE À QUALQUER OBJETO CRIADO EM JAVASCRIPT. Dentro dele podem conter métodos, atributos, e etc. que serão herdados aos objetos abaixo na cadeia de prototypes.






