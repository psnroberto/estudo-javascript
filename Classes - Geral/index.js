
// Classes em JavaScript

// As "class" ou classes em JavaScript são formas alternativas às Factory ou Constructor Functions para criamos objetos. Elas têm como vantagem o fato de que todo método criado dentro do "constructor" já é enviado automaticamente para o prototype da class, não sendo necessário fazê-lo manualmente;

// Abaixo temos um exemplo de como criar um objeto através de uma class:

class Pessoa { // Para declarar uma classe, utilizamos a palavra "class" seguida do nome da classe, com a primeira letra maíscula, assim como nas Constructor Functions. É importante lembrar que NÃO SE USA o "()".
    constructor(nome, sobrenome) { // Devemos em seguida utilizar o método "constructor", que pode receber ou não parâmetros. Precisamos utilizar o "this" para definir cada atributo da class, assim como nas Constructor Functions;
        this.nome = nome
        this.sobrenome = sobrenome
    }

    // Os métodos da class DEVEM SER CRIADOS FORA DO CONSTRUCTOR. Eles farão parte, AUTOMATICAMENTE, do prototype da class, sem a necessidade de adicioná-los manualmente;

    // Para serem adicionados diretamente ao prorotype da class, os métodos devem ser criados seguindo a sintaxe: "nomedométodo(){}";

    falar() { // Forma para criar um método e adicioná-lo diretamente ao prototype;
        console.log(`${this.nome} está agora falando.`)
    }
    get nomeCompleto() { // Podemos utilizar, assim como nas Constructor Functions, getters e setters;
        console.log(`O nome completo é ${this.nome} ${this.sobrenome}.`)
    }
}

const pessoa1 = new Pessoa('Roberto', 'Pereira') // A forma de se criar um objeto a partir da class é semelhante às Constructor Functions. É NECESSÁRIO UTILIZAR A PALAVRA "NEW";

// Ao printarmos o objeto "pessoa1", criado da class "Pessoa", percebemos que ele não possui os métodos "falar()" e "nomeCompleto()" dentro de si;

console.log(pessoa1) 
console.log(Object.getPrototypeOf(pessoa1))

// O novo objeto criado pode acessar normalmente os métodos da class via prototype, assim como nas Constructor Functions;

pessoa1.falar()
pessoa1.nomeCompleto
