
// CLASSES - HERANÇA

// Em JavaScript, as Class são uma das formas para se criar um objeto, assim como as Constructor Functions ou Factory Functions. Com isso, os objetos criados a partir das Classes também herdam propriedades uns dos outros (filhos herdam propriedades dos pais);

// Ao trabalharmos com Classes, devemos entender o conceito de Classes e Super Classes, que nada mais são que Classes "pais" e "filhas";

// Abaixo um exemplo de como funciona a herança com as Classes:

// Criaremos uma class "Produto", que espera receber como argumentos "nome" e "preco", e possui os métodos "aumento()" e "desconto()"

class Produto {
    constructor(nome, preco) {
        this.nome = nome
        this.preco = preco
    }

    aumento(percentual) {
        this.preco = this.preco + (this.preco * percentual / 100)
    }

    desconto(percentual) {
        this.preco = this.preco - (this.preco * percentual / 100)
    }
}

// Em seguida vamos criar um objeto, "produto", a partir da class "Produto"

const produto = new Produto('genérico', 80)
console.log(produto)

// Vamos aplicar um aumento, e em seguida um desconto no preço de "produto":

produto.aumento(15)
console.log(produto.preco)

produto.desconto(20)
console.log(produto.preco)

// Agora vamos criar uma outra class, a partir da class "Produto", através do "extends":

class Camiseta extends Produto {
    constructor(nome, preco, cor, tamanho) {
        super(nome, preco)
        this.cor = cor
        this.tamanho = tamanho
    }
}

// Ao utilizarmos a palavra-chave "extends", criamos uma relação de herança entre a class "Camiseta" e a class "Produto". "Produto" passa a ser uma Super Class, e "Camiseta" herda suas propriedades e métodos.
// Semelhante ao método "call()" que utilizamos nas Constructor Functions para criar uma relação de herança, devemos invocar a Super Class, dentro do "constructor" da class filha, através da propriedade "super". Devemos passar em "super" os parâmetros que desejamos herdar da Super Class;

const camiseta = new Camiseta('Led Zeppelin', 150, 'Preta', 'M')
console.log(Camiseta.prototype)
console.log(camiseta)

// Os métodos "aumento()" e "desconto()" não foram criados dentro da class "Camiseta", mas ainda assim podem ser acessados via herança de sua Super Class, "Produto":

camiseta.aumento(10)
console.log(camiseta.preco)

camiseta.desconto(15)
console.log(camiseta.preco)

// Vamos agora criar uma nova class, "CamisetaEspecial", que terá como Super Class "Camiseta", e vamos verificar o seu comportamento:

class CamisetaEspecial extends Camiseta {
    constructor(nome, preco, tamanho, cor, edicao) {
        super(nome, preco, cor, tamanho)
        this.edicao = edicao
    }
}

const camisetaEspecial = new CamisetaEspecial('Iron Maiden', 250, 'G', 'Cinza', 2)

console.log(CamisetaEspecial.prototype)
console.log(camisetaEspecial)

// Percebemos que a class "CamisetaEspecial" herdou as propriedades da class "Camiseta", e esta as propriedades da class "Produto". Temos uma cadeia de heranças, com a seguinte ordem, de "pai" para "filho": Produto > Camiseta > CamisetaEspecial;

// Os métodos da Super Class, "Produto", podem ser acessados por sus class "neta", "CamisetaEspecial":

camisetaEspecial.aumento(10)
console.log(camisetaEspecial.preco)

camisetaEspecial.desconto(15)
console.log(camisetaEspecial.preco)

// Por último, vamos agora criar uma outra class, também a a partir de class "Produto", e em seguida um novo objeto, "caneca":

class Caneca extends Produto {
    constructor(nome, preco, tamanho, material) {
        super(nome, preco)
        this.tamanho = tamanho
        this.material = material
    }
}

const caneca = new Caneca('Harry Potter', 199, '750 ml', 'Alumínio')
console.log(Caneca.prototype)
console.log(caneca)

// Vamos agora aplicar os métodos "aumento()" e "desconto()", herdados da Super Class "Produto":

caneca.aumento(10)
console.log(caneca.preco)

caneca.desconto(15)
console.log(caneca.preco)

// CONCLUSÃO E RESUMO

// Assim como nas Constructor Functions e Factory Functions, ao criamos objetos com as classes, a herança prototipal acontece. Neste exemplo, criamos uma cadeia com três class (Produto > Camiseta > CamisetaEspecial) e uma cadeia com duas class (Produto > Caneca). Podemos entender, de forma didática, que as class "Camiseta" e "Caneca" são "irmãs", ambas "filhas" de "Produto", e que a class "CamisetaEspecial" é "filha" de "Camiseta" e "neta" de "Produto";

// A "Super Class" será sempre a class acima da class em questão, na cadeia prototipal. Fazemos o vínculo entre elas através da palavra chave "extends".