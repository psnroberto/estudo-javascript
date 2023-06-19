
// MANIPULANDO PROTOTYPES DE VÁRIOS OBJETOS

// É possível, através do método "Object.setPrototypeOf()" adicionar ou vincular o prototype de um objeto A a um objeto B.

// Criaremos três Funções Construtoras, "ObjetoA", "ObjetoB" e "ObjetoC":

function ObjetoA() { this.chave = 'A' }
function ObjetoB() { this.chave = 'B' }
function ObjetoC() { this.chave = 'C' }

// Vamos adicionar um método ao prototype de cada Função Construtora criada:

ObjetoA.prototype = { metodoA: function () { console.log('Eu sou a chave do objeto ' + this.chave) } }
ObjetoB.prototype = { metodoB: function () { console.log('Eu sou a chave do objeto ' + this.chave) } }
ObjetoC.prototype = { metodoC: function () { console.log('Eu sou a chave do objeto ' + this.chave) } }

// Vamos criar três objetos a partir das Funções Construtoras - "objetoA", "objetoB" e "objetoC":

const objetoA = new ObjetoA()
const objetoB = new ObjetoB()
const objetoC = new ObjetoC()

// Agora vamos, através do método "Object.setPrototypeOf()", adicionar os protypes da Função Construtora "ObjetoC()" ao "objetoB"; da Função Construtora "ObjetoA()" ao "objetoC"; e por fim, da Função Construtora "ObjetoB()" ao "objetoA":

Object.setPrototypeOf(objetoB, ObjetoC.prototype) // O "objetoB" tem o valor do seu prototype "setado" igual ao da Função Construtora "ObjetoC()";
objetoB.metodoC()

// Podemos agora acionar o "metodoC()" através do "objetoB".

Object.setPrototypeOf(objetoC, ObjetoA.prototype) // O "objetoC" tem o valor do seu prototype "setado" igual ao da Função Construtora "ObjetoA()";
objetoC.metodoA()

// Podemos agora acionar o "metodoA()" através do "objetoC";

Object.setPrototypeOf(objetoA, ObjetoB.prototype) // O "objetoA" tem o valor do seu prototype "setado" igual ao da Função Construtora "ObjetoB()";
objetoA.metodoB()

// Podemos agora acionar o "metodoB()" atrabés do "objetoA";

// Vamos agora utilizar o método "Object.getPrototypeOf()" para verificar quais são os novos prototypes de cada objeto:

console.log(Object.getPrototypeOf(objetoA)) // O novo prototype do "objetoA" é o da Função Construtora "ObjetoB()";
console.log(Object.getPrototypeOf(objetoB)) // O novo prototype do "objetoB" é o da Função Construtora "ObjetoC()";
console.log(Object.getPrototypeOf(objetoC)) // O novo prototype do "objetoA" é o da Função Construtora "ObjetoA()";

// Ao printar na tela as chaves de cada objeto, vimos que não foram alteradas, apenas os seu métodos:

console.log(objetoA.chave)
console.log(objetoB.chave)
console.log(objetoC.chave)

// CRIANDO OBJETOS UTILIZANDO PROTOTYPES COMO ORIGEM

// Vamos agora, utilizando o "Object.create()", criar um novo objeto, "objetoD", e utilizar o "objetoA" como prototype. Em seguida, vamos printar na tela o seu prototype:

objetoD = Object.create(objetoA) // Criamos o "objetoD" utilizando o "objetoA" como prorotype;

console.log(objetoD) // "objetoD"é um objeto vazio, pois não criamos nenhum atributo ou método em seu interior;

console.log(Object.getPrototypeOf(objetoD)) // Quando criamos o "objetoD" a partir do "objetoA", temos acesso a todos os atributos e métodos deste último através do atributo "__proto__" do "objetoD". É importante ressaltar que os atributos e métodos de "objetoA" NÃO FAZEM PARTE do "objetoD", apenas podem ser acesssados por herança de prototypes;
console.log(Object.keys(objetoD)) // Verificamos que o "objetoD" não possui chaves, pois, apesar de ter sido criado a partir do "objetoA" como prototype, não definimos em nenhum momento atributos e métodos próprios para ele;
console.log(objetoD.chave) // Mesmo não tendo nenhum atributo ou método próprio, podemos acessar o atributo "chave" do "objetoA" por herança, pois o "objetoD" foi criado a partir deste;

objetoD.metodoB() // O "objetoD" foi criado a partir do "objetoA", e este criado da Função Construtora "ObjetoA()", que tem em seu prototype o "metodoB()" ("setado" ao longo do código). Logo, este método pode ser acessado através do "objetoD", por herança;

// Vamos criar um último objeto, "objetoE" e vamos utilizar o recente objeto criado, "objetoD" como prototype:

objetoE = Object.create(objetoD)

console.log(objetoE) // O "objetoE" é um objeto vazio;

console.log(Object.getPrototypeOf(objetoE)) // O "objetoE" tem como prototype um objeto vazio, pois foi criado a partir do "objetoD" e este não teve nenhum atributo ou método criado;
console.log(Object.keys(objetoE)) // O "objetoE" também tem como keys um array vazio, pelo mesmo motivo acima;
console.log(objetoE.chave) // Apesar de ter como prototype um objeto vazio e keys um array vazio, o "objetoE" consegue acessar o atributo "chave" diretamente do "objetoA", como herança;

objetoE.metodoB() // Assim como no "objetoD", conseguimos utilizar o "metodoB()" através de herança do "objetoA";

// Para finalizar, iremos printar na tela os prototypes de "objetoA", "objetoD" e "objetoE" para verificarmos a diferença entre cada um deles:

console.log(Object.getPrototypeOf(objetoA)) // O prototype do "objetoA" é um objeto que contêm o "metodoB()";
console.log(Object.getPrototypeOf(objetoD)) // O prototype do "objetoD" é o conteúdo do "objetoA", pois foi criado tendo este como prototype;
console.log(Object.getPrototypeOf(objetoE)) // O prototype do "objetoE" é um objeto vazio, pois foi criado a partir do "objetoD", e este não teve nenhum atributo ou método criado.

// CONCLUSÃO

// A medida que formos criando objetos a partir de Funções Construtoras ou de outros objetos, vamos criando uma cadeia de prototypes, que podem ser acessados diretamente pelos objetos "filhos". No exemplo acima, criamos o "objetoE" a partir do "objetoD", e este a partir do "objetoA", que foi criado a partir da Função Construtora "ObjetoA()". Apesar do "objetoE" não possuir em si nenhum atributo ou método, ele consegue acessar o atributo "chave" e o "metodoB()" diretamente do "objetoA", através da herança de prototypes;

// Todo objeto criado, seja de forma literal, por Funções Construtoras ou por "Object.create()", possui uma propriedade nativa intitulada "__proto__". Esta propriedade aponta sempre ao prototype do objeto, ou seja, ao seu "pai";

// Já a PROPRIEDADE prototype só está presente em Funções Construtoras. Esta propriedade é um objeto, e é usada como modelo para outros objetos criados a partir de uma determinada Função Construtora.

