
// Exercício para treino de declaraçõe de funções.

// DICA: PARA EXECUTAR APENAS UMA PARTE DO CÓDIGO, SELECIONE A PARTE DESEJADA E PRESSIONE 'F8'.

// ------------------------------------------------------//------------------------------------------------------//
// ------------------------------------------------------//------------------------------------------------------//

// Declaração padrão:

// Na declaração padrão, escrevemos a palavra "function" e sem seguida o nome da função, seguida de (PARÂMETROS VEM AQUI) e chaves {O QUE A FUNÇÃO FARÁ VEM AQUI}. Seguem exemplos:

function soma(a, b, c, d) {
    return a + b + c + d
}
console.log(soma(10, 20, 30, 40))


function funcaoPadrao1(a, b, c, d) { // 
    return arguments // Quando declaramos funções de forma padrão e explícita utilizando a palavra "function", os parâmetros informados ao chamar a função serão sempre armazenados em um objeto, chamado "arguments", que pode ser retornado pela própria função. Caso informemos mais parâmetros que os pedidos pela função, ainda assim estes serão armazenados no objeto "arguments".
}
console.log(funcaoPadrao1(10, 20, 30, 40, 50, 60, 70)) // Informamos mais parâmetros que o esperado inicialmente pela função, e ainda assim estes foram armazenados no objeto "arguments".


function funcaoPadrao2(a, b, ...c) { // O operador de resto ('...') permite que, ao chamar uma função e informar os primeiros parâmetros ('a' e 'b' neste caso), todo parâmetro restante informado seja armazenado em forma de array no último parâmetro ('c')
    return c
}
console.log(funcaoPadrao2(10, 20, 30, 40, 50, 60, 70, 80, 90)) // Só serão exibidos os valores de 30 em diante, pois o retorno definido na função é o parâmetro "c", com a utilização do operador de resto, "..."


// ------------------------------------------------------//------------------------------------------------------//
// ------------------------------------------------------//------------------------------------------------------//


// Atribuição de uma função à uma variável

const var1 = function funcaoVar1(a, b, c) { // Atribuímos à variável "var1" a função "funcaoVar1()". A partir deste momento, a variável "var1" passa a se comportar como uma função.
    return a * b * c
}
const resultado = var1(2, 5, 10) // Criamos uma outra variável, "resultado", e atribuímos a ela a função "var1", E NÃO A FUNÇÃO "funcaoVar1". Como a variável "var1" passou a se comportar como uma função, passamos para ela os parâmetros 2, 5 e 10, que serão utilizados para retornar o valor desejado.
console.log(resultado) // Estamos exibindo o valor da variável "resultado", que recebeu a variável "var1", que recebeu a função "funcaoVar1".

// ------------------------------------------------------//------------------------------------------------------//
// ------------------------------------------------------//------------------------------------------------------//

// Funções anônimas

const var2 = function (a, b, c, d) { // Podemos declarar funções sem necessariamente atribuir a elas um nome, utilizando a sintaxe "function(){}". Repare que neste exemplo, a variável "var2" recebe uma função sem nome, mas com parâmetros "a, b, c e d".
    return a + b + c + d
}
const soma2 = var2(25, 35, 45, 55) // Assim como no exemplo anterior, a variável "soma2" recebe o valor da variável "var2", que recebeu o valor de uma função anônima.
console.log(soma2)

// ------------------------------------------------------//------------------------------------------------------//
// ------------------------------------------------------//------------------------------------------------------//

// Arrow Functions

// As Arrow Functions permitem declarar funções de uma forma mais enxuta, e têm a seguinte sintaxe: "variável = (PARÂMETROS AQUI) => {O QUE A FUNÇÃO FAZ AQUI}". Assim como nas funções anônimas, não precisam necessariamente ter um nome.

const var3 = (altura, largura, comprimento) => { return altura * largura * comprimento } // a variável "var3" receberá uma função do tipo Arrow, com os parâmetros "altura, largura, comprimento".
const volume = var3(20, 100, 3) // A variável "volume" receberá a variável "var3", que recebeu a Arrow Function.
console.log(volume)

// ------------------------------------------------------//------------------------------------------------------//
// ------------------------------------------------------//------------------------------------------------------//

// Funções dentro de funções

// Vamos criar abaixo três funções distintas, para duplicar, triplicar e quadriplicar, respectivamente, um parâmetro esperado, "n":

function duplica(n) {
    return n * 2
}

function triplica(n) {
    return n * 3
}

function quadruplica(n) {
    return n * 4
}

console.log(duplica(10))
console.log(triplica(10))
console.log(quadruplica(10))

// Vamos agora realizar a mesma tarefa utilizando funções dentro de funções:

function multiplicador(multiplicando) {
    return function (n) {
        return n * multiplicando
    }
}

const duplicaVar = multiplicador(2);
const triplicaVar = multiplicador(3);
const quadruplicaVar = multiplicador(4);

console.log(duplicaVar(10))
console.log(triplicaVar(10))
console.log(quadruplicaVar(10))

// Explicação: 

// Criamos a função "multiplicador()" que espera receber o parâmetro "multiplicando", que é o número que desejamos dar como entrada. Esta função, ao ser acionada, retornará uma outra função anônima, que espera receber "n", que será "2" se for para duplicar, "3" para triplicar e assim por diante;

// Em seguida, criamos três variáveis, "duplicaVar, triplicaVar e quadruplicaVar", que receberão a função "multiplicador()" COM 2, 3 e 4 COMO PARÂMETROS RESPECTIVAMENTE;

// Ou seja, ao acionar a variável/função 'duplicaVar', por exemplo, ela retornará a função anônima com o parâmetro informado (10, no caso deste exemplo). Como a "duplicaVar" já têm como parâmetro fixo o número "2", a função anônima retornará o valor de 2 x 10 ("n * multiplicando").

// ------------------------------------------------------//------------------------------------------------------//
// ------------------------------------------------------//------------------------------------------------------//

// Funções de CallBack

// Funções de Callback são funções utilizadas COMO PARÂMETROS PARA OUTRAS FUNÇÕES.

// Exemplo 1:

// No Exemplo 1, criamos uma função para executar uma função hipotética, de recuperar um arquivo. Utilizamos como parâmetro um "id" hipotética e duas funções, que chamaremos de "callbackSucesso" e "callbackErro";

function exibirArtigo(nomeArquivo, callbackSucesso, callbackErro) {

    if (true) { // Se o objetivo hipotético de recuperar o arquivo for concluído com sucesso, a função "callbackSucesso será chamada, já com os argumentos definidos.;"

        callbackSucesso('O arquivo ' + nomeArquivo + ' foi recuperado com sucesso.', 'Parabéns, garotão! Conseguiu recuperar o arquivo corretamente.')

    } else { // Caso contrário, a função "callbackErro" será chamada, já com o argumento definido.
        callbackErro('Erro ao recuperar o arquivo! Tente novamente se quiser. rs.')
    }
}

// Em seguida, criamos duas variáveis, "callbackSucesso" e "callbackErro" e atribuímos a elas funções anônimas, que irão apenas dar um console.log dos seus parâmetros.

const callbackSucesso = function (titulo, descricao) { // Os parâmetros "titulo" e "descrição" 
    console.log(titulo)
    console.log(descricao)
}

const callbackErro = function (mensagemErro) {
    console.log(mensagemErro)
}

exibirArtigo('FritandoComJS', callbackSucesso, callbackErro) // Executamos a função "exibirArtigo()" e encaminhamos os seus parâmetros: 'FritandoComJS', a função "callbackSucesso" e a função "callbackErro".

// Exemplo 2:

// Criaremos três funções, f1, f2 e f3, para printar na tela seus nomes, porém em tempos distintos. Primeiramente executaremos as funções uma após a outra, verificaremos a ordem em que foram executadas, e depois utilizaremos as funções de callback para definirmos a ordem que queremos que sejam executadas.

function f1() { // A função f1 printará seu nome em 1s;
    setTimeout(function () {
        console.log('f1')
    }, 2500)
}

function f2() { // A função f2 printará seu nome em 1,5s;
    setTimeout(function () {
        console.log('f2')
    }, 1000)
}

function f3() { // A função f3 printará seu nome em 0,5s.
    setTimeout(function () {
        console.log('f3')
    }, 1500)
}

function f4() { // A função f3 printará seu nome em 2,5s.
    setTimeout(function () {
        console.log('f4')
    }, 500)
}

// Ao executarmos as funções, primeiramente será printado "Olá, mundo!!!", pois funções de tempo, por padrão, são executadas por último. Após isso, a função f4 é printada primeiro, depois f2, f3 e por último f1, independente da ordem de execução definida.

f1();
f2();
f3();
f4();
console.log('Olá, mundo!!!')

// Vamos usar agora funções de callback para definirmos a ordem de execução que quisermos, independente do tempo estipulado em cada função.

function f5(callbackf5) { // A função f5 printará seu nome em 2,5s e receberá uma função de callback como parâmetro. Após printar seu nome na tela, a função irá executar a função de callback recebida como parâmetro, que irá executar a próxima função, f6;
    setTimeout(function () {
        console.log('f5')
        callbackf5()
    }, 2500)
}

function f6(callbackf6) { // A função f6 printará seu nome em 1s e receberá uma função de callback como parâmetro. Após printar seu nome na tela, a função irá executar a função de callback recebida como parâmetro, que irá executar a próxima função, f7;
    setTimeout(function () {
        console.log('f6')
        callbackf6()
    }, 1000)
}

function f7(callbackf7) { // A função f7 printará seu nome em 1,5s e receberá uma função de callback como parâmetro. Após printar seu nome na tela, a função irá executar a função de callback recebida como parâmetro, que irá executar a próxima função, f8;
    setTimeout(function () {
        console.log('f7')
        callbackf7()
    }, 1500)
}

function f8(callbackOlaMundo) { // A função f8 printará seu nome em 0,5s e receberá uma função de callback como parâmetro. Após printar seu nome na tela, a função irá executar a função de callback recebida como parâmetro, que irá, por fim, printar "Olá, mundo!!!" na tela.;
    setTimeout(function () {
        console.log('f8')
        callbackOlaMundo()
    }, 500)
}

// Abaixo criamos cada função de callback. A função de callbackf5() executa a função f6() (que tem a função callbackf6() como parâmetro.) A função callbackf6() executa a função f7() (que tem a função callbackf7() como parâmetro), e assim succesivamente.

// Desta maneira, garantimos que as funções sejam executadas na ordem definida, e não nos intervalos de tempo definidos em cada "setTimeout".

function callbackf5() {
    f6(callbackf6)
}

function callbackf6() {
    f7(callbackf7)
}

function callbackf7() {
    f8(callbackOlaMundo)
}

function callbackOlaMundo() {
    console.log('Olá, mundo!!!')
}

f5(callbackf5); // Por fim, executamos a função f5(), que tem callbackf5() como parâmetro, e esta função irá desencadear a execução de todas as outras funções.

// Conclusão: as funções de callback são utilizadas como parâmetros para outras funções. Podemos assim determinar que uma determinada função só será executada assim que a anterior for concluída, dentre muitas outras funcionalidades.

// ------------------------------------------------------//------------------------------------------------------//
// ------------------------------------------------------//------------------------------------------------------//

// Factory Functions ou Funções Fábrica e utilização do "this".

// Factoru Functions ou Funções Fábrica são funções que, ao serem executadas, retornam objetos. A principal vantagem de usar factory functions é que elas permitem encapsular a lógica de criação de objetos em um único lugar, facilitando a criação de múltiplas instâncias com propriedades e comportamentos semelhantes.

// Exemplo 1 - No exemplo abaixo, iremos criar uma função, "criaPessoa", que irá nos retornar um objeto com vários atributos (nome, sobrenome, idade e etc.). Um dos atributos do objeto criado será uma outra função, que irá reunir todas as informações em um único lugar. O objeto criado poderá ser atribuído a uma variável, posteriormente:

function criaPessoa(nome, sobrenome, idade, peso) { // A função espera receber estes parâmetros;
    return {
        nome: nome, // Criamos o atributo "nome" e dizemos que ele irá receber o argumento esperado em "nome";
        sobrenome: sobrenome, // Importantíssimo colocar vírgula após a declaração de cada atributo;
        idade: idade,
        peso: peso,
        resumo: function (assunto) { // quando temos uma função dentro de um objeto, damos a ela o nome de "método";
            return (`Os dados completos são: nome = ${nome}, sobrenome = ${sobrenome}, idade = ${idade}, peso = ${peso}. O assunto debatido é: '${assunto}'`) // O método "resumo" irá retornar um texto contendo todas as informações do objeto criado, e espera receber como argumento 'assunto'.
        }
    }
}

const pessoa1 = criaPessoa('Roberto', 'Pereira', 31, 65) // Criamos uma variável que irá receber a função "criaPessoa", já com os argumentos definidos, e ela passará a se comportar como um objeto.
const pessoa2 = criaPessoa('Rúbia', 'Leite', 34, 53)

console.log(pessoa1) // console.log para retornar a variável/objeto criado e cada um de seus atributos;
console.log(pessoa1.resumo('Funções em JavaScript.')) // neste console.log iremos exibir apenas o método "resumo", do objeto criado ("pessoa1") e já iremos informar o argumento ('assunto') desejado.

console.log(pessoa2)
console.log(pessoa2.resumo('Como detectar padrões de autismo na primeira infância.'))

// Exemplo 2 - No segundo exemplo, iremos retorar um objeto similar ao primeiro, porém utilizaremos o "this" e também o "get", que serão explicados ao seguir:

function criaPessoa2(nome, sobrenome, idade, peso, altura) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
        peso: peso,
        altura: altura,
        get imc() { // "imc" passou a ser um "getter", ou seja, a se comportar como um atributo do objeto, e não mais como um método;
            return this.peso / (this.altura ** 2) // Fórmula para cálculo do IMC;
        }
    }
}

/* Explicando o "this": O "this" é utilizado para fazer referência sempre ao objeto que o chamou. No exemplo deste exercício, ele faz referência à função "criaPessoa2", pois é ela que, ao ser chamada, determina os atributos "nome", "sobrenome" e etc, do objeto retornado. Podemos entender que dizer "this.nome" é a mesma coisa que dizer "atributo 'nome' do objeto criado ao chamar a função 'criaPessoa2' ". 

O "this" é muito útil quando queremos fazer referência a um determinado objeto do nosso documento que dispara um determinado evento. Para exemplificar, imagine: em um projeto temos um botão que, ao ser clicado, irá ter o seu background color mudado para vermelho. Podemos fazer uma lógica e dizer que quando o botão for clicado, "this.style.backgroundColor = 'red' ". Ou seja, ao ser clicado, o botão chamará uma função que mudará o seu backgroundColor. O botão foi quem disparou o evento e chamou a função, logo o "this" neste caso fará referência a ele. */

/* Explicando o "get". Ao utilizarmos o "get", estamos dizendo ao interpretador do código que, o que era antes um método passará agora a se comportar como um atributo. Neste exemplo, dizemos que "imc" se comportará como um atributo, e não como um método, logo, não poderá esperar nenhum parâmetro.*/

const pessoa3 = criaPessoa2('Leila', 'Inez', 68, 50, 1.50)
const pessoa4 = criaPessoa2('Luiza', 'Fernanda', 65, 34, 1.58)

console.log(pessoa3) // console.log para mostrar todos os atributos e métodos da variável/objeto criado, "pessoa3"
console.log(pessoa3.imc) // neste console.log, quremos mostrar apenas o atributo "imc" do objeto "pessoa3". Como "imc" passou a ser um "getter" e se comportar como um atributo, não precisa mais de "()" para ser chamado.

console.log(pessoa4)
console.log(pessoa4.imc)

// ------------------------------------------------------//------------------------------------------------------//
// ------------------------------------------------------//------------------------------------------------------//

// Funções Construtoras

// As Funções Construtoras, assim como as Factory Functions, tem como objetivo retornar objetos. A diferença é que nas Funções Construtoras os objetos são retornados implicitamente, sem a necessidade do "return". Assim como as Factory Functions, são utilizadas quando queremos "criar" vários objetos a partir do mesmo "molde". Segue abaixo um exemplo:

function Pessoa(nome, sobrenome, idade) {

    const id = '1547823' // Podemos, dentro de Funções Construtoras, declarar variáveis normalmente, diferentemente de Funções Fábrica. Estas variáveis só estarão disponíveis dentro do escopo da função;
    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade
    this.metodo = function () { // Podemos também criar métodos com a mesma sintaxe utilizada no JS;
        console.log(`Os dados completos são: nome = ${nome}, sobrenome = ${sobrenome}, idade = ${idade} anos.`)
    }
}

// A Função Construtora "CriaPessoa" retorna, de forma implícita, um objeto que tem como atributos "nome", "sobrenome" e "idade". Por convenção, as Funções Construtoras são iniciadas com letra maíscula;

// Outra diferença é que a sintaxe utilizada dentro das Funções Construtoras é a mesma utilizada em todo o JavaScript, sem a necessidade de vírgula depois de cada atributo, sem a utilização de dois pontos (":") após a declaração de cada atributo e podendo ser criada variáveis diretamente dentro de seu escopo;

// Como já visto anteriormente, dentro do escopo da Função Construtora precisamos utilizar o "this" para nos referirmos a atributos relacionados à função;

const pessoa5 = new Pessoa('Roberto', 'Pereira', 31)
const pessoa6 = new Pessoa('Rúbia', 'Leite', 33)

// Ao utilizar as Funções Construtoras, precisamos utilizar a palavra "new" sempre que formos atribuí-las à uma variável. A palavra "new" nos diz que será criado um novo objeto e que este objeto receberá os argumentos informados.

pessoa5.metodo() // Estamos executando o método criado dentro da Função Construtora, com os argumentos da variável "pessoa5".
pessoa6.metodo()

// ------------------------------------------------------//------------------------------------------------------//
// ------------------------------------------------------//------------------------------------------------------//

// Funções Geradoras

// As Funções Geradoras nos permitem executar o script das funções por estapas ou "setups" ao invés de executá-lo totalmente. Utilizamos a palavra "yield" para dizer o que queremos quer seja retornado em cada passo. Segue um exemplo:

function* geradora1() { // As Funções Geradores são definidas utilizando um "*" após a palavra "function"
    // Aqui pode vir um código qualquer;
    yield 'Primeiro yield' // Após a execução da primeira parte do código, a função retornará o primeiro "yield"
    // Aqui pode vir outro código qualquer;
    yield 'Segundo yield' // Após a execução da segunda parte do código, a função retornará o segundo "yield"
    // Aqui pode vir mais um código qualquer;
    yield 'Terceiro yield' // Após a execução da terceira parte do código, a função retornará o terceiro "yield"
    // Aqui pode vir mais um código qualquer;
}

const g1 = geradora1()
console.log(g1.next().value) // O método "next" é inerente das funções geradoras, e serve para passar para o próximo "yield" da Função Geradora;
console.log(g1.next().value)
console.log(g1.next().value)

// Podemos também utilizar Funções Geradoras dentro de outras Funções Geradoras. Segue abaixo exemplo:

function* geradora2() { // Criamos primeirmaente a Função Geradora "geradora2()" que terá três "yields"
    yield 'yield 1'
    yield 'yield 2'
    yield 'yield 3'
}

function* geradora3() { // A Função Geradora "geradora3()" tem como o primeiro yield a função "geradora2", definida anteriormente;
    yield* geradora2() // Para definir uma função como retorno em um yield, utilizamos o "*" depois do yield;
    yield 'yield 4'
    yield 'yield 5'
    yield 'yield 6'
}

const g3 = geradora3()
console.log(g3.next().value)
console.log(g3.next().value)
console.log(g3.next().value)
console.log(g3.next().value)
console.log(g3.next().value)
console.log(g3.next().value)

// Podemos ter funções como retorno de cada "yield":

function* geradora4() {
    yield function () {
        console.log('Sou o primeiro yield da geradora4')
    }

    yield function () {
        console.log('Sou o segundo yield da geradora4')
    }

    yield function () {
        console.log('Sou o terceiro yield da geradora4')
    }

    return function () { // O "return" dentro das Funções Geradoras serve para dizer que é o último passo a ser executado, ou seja, que não terão mais "yields" em seguida. Ele também pode ser acessado pelo método "next()".
        console.log('Acabam aqui os exemplos de Funções Geradoras. Boa sorte nos próximos estudos!')
    }
}

// Iremos atrubuir o valor de cada "yield" da Função Geradora "geradora4" a uma variável, e em seguida iremo executá-las:

const g4 = geradora4()
const yield1 = g4.next().value
const yield2 = g4.next().value
const yield3 = g4.next().value
const returnVar = g4.next().value

yield1()
yield2()
yield3()
returnVar()

// Exemplo prático:

function* geradora5() {

    yield function () { // O primeiro yield receberá uma função que imprimirá no console os valores de i*10, com i variando de 0 a 3;
        for (i = 0; i <= 3; i++) {
            console.log((i * 10))
        }
    }
    yield function () {
        for (i = 4; i <= 6; i++) {
            console.log((i * 100))
        }
    }
    yield function () {
        for (i = 7; i <= 10; i++) {
            console.log((i * 1000))
        }
    }
    return 'Fim!' // Utilizamos o "return" para dizer que não haverá mais yields adiante. Este será o último "next()".
}

const g5 = geradora5()
const yield4 = g5.next().value // Através do método "next()" a variável "yield4" agora recebeu o valor do primeiro yield, que é na realidade uma função. Ou seja, começa agora a ter comportamento de função;
const yield5 = g5.next().value
const yield6 = g5.next().value
const returnVar2 = g5.next()

yield4() // Executamos todos os os yields da Função Geradora através das variáveis yield5, yield6 e yield7.
yield5()
yield6()
console.log(returnVar2)

// Conclusão: Com as Funções Geradoras conseguimos definir passos ou "steps" de execução do script dos nossos códigos, e o retorno de cada passo executado (ou "yield") pode ser atribuido a uma variável, através do método "next()". O último passo a ser dado no script de nossas funções deve ser declarado por "return", e não mais por "yield".

// ------------------------------------------------------//------------------------------------------------------//
// ------------------------------------------------------//------------------------------------------------------//




