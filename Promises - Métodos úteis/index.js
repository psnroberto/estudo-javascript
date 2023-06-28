
// PROMISES - MÉTODOS ÚTEIS

// Ao trabalharmos com promises, podemos utilizar alguns métodos muito úteis em nossas aplicações, como o "Promises.all" e o "Promises.race". Vamos abaixo abordar os principais, com exemplos;

// Promise.all()

// Este método avalia um array que contehna "promises", informado pelo desenvolvedor, e retorna o resultado de todas de uma só vez. Ele aguarda todas as promises serem cumpridas para então retornar um array com os resultados de cada uma;

// Vamos inicialmente criar uma Constructor Function para retornar uma promise, definindo o "resolve" e o "reject":

function CriaPromise(num1, num2, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof num1 !== 'number' || typeof num2 !== "number" || typeof tempo !== 'number')
            reject('Devem ser informados apenas números.')

        setTimeout(() => {
            console.log(num1 + num2)
            resolve(num1 + num2)
        }, tempo)
    })
}

// Vamos criar três objetos através da Constructor Function "CriaPromise()", passando os parâmetros "num1", "num2" e "tempo" distintos para cada um:

const promise1 = new CriaPromise(5, 5, 4000)
const promise2 = new CriaPromise(10, 2, 2000)
const promise3 = new CriaPromise(7, 7, 6000)

// Em seguida, vamos criar um variável do tipo array, "promiseAll", que receberá todos os objetos criados anteriormente:

const promiseAll = [promise1, promise2, promise3]

// Utilizaremos agora o construtor "Promise.all()", que SEMPRE recebe como argumento um array contendo promises e retornará um novo array contendo o resultado de cada uma apenas QUANDO TODAS FOREM RESOLVIDAS;

// O construtor "Promise.all()" retorna um novo array com o resultado de cada promise caso todas sejam resolvidas com sucesso ("then.()") ou retorna um erro ("catch.()") SE QUALQUER UMA DAS PROMESSAS NÃO FOR RESOLVIDA;

Promise.all(promiseAll)
    .then((retornoPromiseAll) => {
        console.log('Este é o retorno do Promise.all() => ', retornoPromiseAll)
    })
    .catch((retornoReject) => {
        console.log(retornoReject)
    })


// Conclusão: o método/construtor "Promise.all()" retorna um novo array QUANDO E SE TODAS AS PROMISES FORAM RESOLVIDAS. Caso qualquer promise não seja resolvida, retornará um erro através do "catch.()"

//---------------------------------------------------------//------------------------------------------------------//

// Promise.race()

// Ao contrário do método "Promise.all()", o método "Promise.race()" recebe um array de promises como argumento, inicia a resolução de todos simultaneamente e retorna A PRIMEIRA PROMISE A SER RESOLVIDA. "race" = "corrida", e o nome resume a sua utilização;

// Vamos criar uma nova Constructor Function para criar as promises:

function CriaPromise2(mensagem, tempo) {
    return new Promise((resolve, reject) => {

        if (typeof mensagem !== 'string' || typeof tempo !== 'number')
        reject('Devem ser informados valores válidos como argumentos.')

        setTimeout(() => {           
            resolve(mensagem)
        }, tempo)
    })
}

// Em seguida, criaremos um novo array que receberá

const promiseRace = [
    CriaPromise2('Promise A', 6000),
    CriaPromise2('Promise B', 1000),
    CriaPromise2('Promise C', 4000),
]

Promise.race(promiseRace)
    .then((retornoPromiseRace) => {
        console.log('Este é o retorno do Promise.race() => ' + retornoPromiseRace)
    })
    .catch((retornoDoReject) => {
        console.log(retornoDoReject)
    })

// Verificamos que o retorno do "Promise.race()" é o objeto "promise2", pois ele tem o tempo de execução menor entre as três promises;

// Caso um erro seja detectado antes de qualquer promise ser resolvida e "reject" seja acionado, o "Promise.race()" entenderá que este erro É UMA PROMISE RESOLVIDA e o retornará como resultado;

console.log('Esta mensagem será exibida antes de qualquer uma!')