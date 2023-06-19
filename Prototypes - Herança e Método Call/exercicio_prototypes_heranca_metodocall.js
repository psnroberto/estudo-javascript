// HERANÇA PROTOTIPAL E MÉTODO "CALL()"

// Ao utilizarmos o JavaScript e trabalharmos com objetos, precisamos entender o conceito de herança, que nada mais é que a habilidade de um objeto "herdar" prototypes ou caracterísitcas de um outro objeto, de uma estância superior;

// Vamos criar um exemplo abaixo para verificarmos o na prática a Herança Prototipal, e vamos explicar cada passo;

// Primeiramente, vamos criar uma Função Construtora para a criação de produtos:

function Produto(nome, preco) {
    this.nome = nome,
    this.preco = preco
}

// Vamos agora definir o prototype de "Produto()" com dois métodos para aumentar e diminuir os preços dos produtos:

Produto.prototype.aumento = function (percentual) { 
    this.preco = ((this.preco * percentual) / 100) + this.preco
},
Produto.prototype.desconto = function (percentual) { 
    this.preco = ((100 - percentual) * this.preco) / 100 
},
Produto.prototype.mensagem = function () { 
    console.log(`O novo valor do produto ${this.nome} é R$ ${this.preco}.`) 
}

// Vamos agora criar Funções Construtoras para a construção de dois produtos diferentes, caneca e camiseta, que terão parâmetros além de "nome" e "preco". Vamos utilizar o método "call" para aproveitar os atributos "nome" e "preco" da Função Construtora "Produto()" :

function Camiseta(nome, preco, tamanho, cor) {
    Produto.call(this, nome, preco) // O "this" define que a função "Produto()" será executada dentro do contexto da função "Camiseta()"
    this.tamanho = tamanho,
    this.cor = cor
}

function Caneca(nome, preco, tamanho, material) {
    Produto.call(this, nome, preco) // O "this" define que a função "Produto()" será executada dentro do contexto da função "Caneca()"
    this.tamanho = tamanho,
    this.material = material
}

// O método "call" nos permite chamar funções e determinar em qual contexto elas serão executadas. No exeomplo acima, definimos que a Função Construtora "Produto()" seria chamada dentro do contexto das funções "Camiseta()" e "Caneca()" (através do "this");

// O "call" permite substituir temporariamente a referência do "this". No exemplo acima, ao chamarmos a função "Produto()" dentro dos contextos de "Camiseta()" e "Caneca()", o "this" passará temporariamente e fazer referência a estas funções, e deixará de fazer referência à "Produto()";

// Pretendemos utilizar os dois métodos criados na Função Construtora "Produto()" dentro das funções "Camiseta()" e "Caneca()", porém precisamos primeiramente linkar os seus prototypes aos de "Produto()":

Camiseta.prototype = Object.create(Produto.prototype) // Definimos que os prototypes de "Camiseta()" e "Caneca()", que antes eram objetos vazios por natureza, receberão o prototype de "Produto()". É importante lembrar que "Camiseta()" e "Caneca()" receberão o prototype de "Produto()" APENAS COMO UMA REFERÊNCIA, não fazendo parte de fato do novo objeto;
Caneca.prototype = Object.create(Produto.prototype)

// Vamos agora criar dois objetos com os argumentos esperados e em seguida printá-los na tela:

const camiseta = new Camiseta('Regata Básica', 59.90, 'M', 'Algodão')
const caneca = new Caneca('Stanley', 199.90, '750 ml', 'Alumínio')

console.log(camiseta)
console.log(caneca)

// Vamos utilizar os métodos "aumento()" e "desconto()" para aumentar e diminuir o preço da regata e caneca e em seguida printar na tela uma mensagem, através do método "mensagem()":

camiseta.aumento(15)
camiseta.mensagem()

caneca.desconto(10)
caneca.mensagem()

// Vamos agora alterar o prototype das funções "Camiseta()" e "Caneca()", fazendo com que os métodos "aumento()" e "desconto()" apliquem variações de valores diretas, ao invés de percentuais. Vamos também criar um novo método, "mensagem2()" O novo prototype definido não fará menção ao método "mensagem()", da função "Produto()":

Camiseta.prototype.aumento = function (valor) { this.preco = this.preco + valor }
Camiseta.prototype.desconto = function (valor) { this.preco = this.preco - valor }
Camiseta.prototype.mensagem2 = function() { (console.log(`Eu sou o método mensagem2.`)) }

Caneca.prototype.aumento = function (valor) { this.preco = this.preco + valor }
Caneca.prototype.desconto = function (valor) { this.preco = this.preco - valor }
Caneca.prototype.mensagem2 = function() { (console.log(`Eu sou o método mensagem2.`)) }


// Vamos criar dois novos objetos e em seguida executar os novos métodos "aumento()" e "desconto()":

const camiseta2 = new Camiseta('Camiseta 2', 100, 'P', 'Preta')
const caneca2 = new Caneca('Térmica', 150, '500 ml', 'Alumínio')

// Vamos printar na tela os prototypes dos novos objetos criados para verificarmos algumas coisas: 

// 1) O prototype dos dois objetos criados é "Produto()", pois setamos anteriormente no código (linhas 46 a 47); 
// 2) O método "mensagem()" não é mencionado, pois, os objetos foram criados a partir de "Camiseta()" e "Caneca()", e estas funções não possuem este método em seus prototypes;
// 3) Apesar de não aparecer ao printarmos os prototypes na tela, o método "mensagem()" poderá ser acessado via herança prototipal da função "Produto()", como veremos adiante;
// 4) apesar de serem criados das funções "Camiseta()" e "Caneca()", os objetos têm como "constructor" a função "Produto()". Isto acontece porque a propriedade "constructor" está dentro do prototype de cada Funções Construtora, e setamos anteriormente no código que as duas funções receberiam o prototype da função "Produto()";

console.log(Object.getPrototypeOf(camiseta2))
console.log(Object.getPrototypeOf(caneca2))

// Vamos agora executar os métodos "aumento()" e "desconto()" dos novos objetos para verificarmos que a alteração dos valores se dará de forma direta, e não mais percentual:

camiseta2.aumento(50)
caneca2.desconto(30)

camiseta2.mensagem2()
caneca2.mensagem2()

// Apesar de não estar dentro do prototype das funções "Camiseta()" e "Caneca()", o método "mensagem()" poderá ser acessado e executado diretamente da função "Produt()", através da herança prototipal:

camiseta2.mensagem()
caneca2.mensagem()

// Para finalizar, vamos criar dois objetos genéricos, "produto1" e "produto2", através de função "Produto()", e vamos executar os métodos "aumento()", "desconto()" e "mensagem()":

const produto1 = new Produto('Genérico1', 100)
const produto2 = new Produto('Genérico2', 100)

produto1.aumento(30)
produto2.desconto(30)

produto1.mensagem()
produto2.mensagem()

// Verificarmos que os métodos "aumento()" e "desconto()" continuam aplicando a alteração dos valores de forma percentual e que não tiveram alteração quando dos prototypes de "Camiseta()" e "Caneca()" foram modificados;

// Se tentarmos executar o método "mensagem2()" através dos objetos "produto1" e "produto2", criados a partir da função "Produto()" teremos um erro. Isto porque este método não está definido em seu prototype, mas sim nos prototypes de seus "filhos", "Camiseta()" e "Caneca()". O "pai" não consegue acessar os métodos dos prototypes de seus "filhos", mas os "filhos" conseguem acessar os métodos dos prototypes de seus "pais".

// RESUMO E CONCLUSÃO

// Fizemos neste exemplo um afunilamento ou especificação de Funções Construtoras. Criamos primeiro a função "Produto()", e a utilizamos, através do método "call()", dentro das outras Funções Construtoras "Camiseta()" e "Caneca()";
// Ao utilizarmos o método "call()", criamos um link entre as funções e possibilitamos o "prototype chain", ou encadeamento de protótipos. Deste modo, conseguimos acessar métodos da função "Produto()" através de objetos criados a partir das funções "Camiseta()" e "Caneca()";
// Definimos que os prototypes das Funções Construtoras "Camiseta()" e "Caneca()" receberiam o prototype da função "Produto()";
// Alteramos os métodos "aumento()" e "desconto()" das funções "Camiseta()" e "Caneca()" e verificamos que as alterações não atingiram a função "Produto()".










