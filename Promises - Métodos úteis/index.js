
// PROMISES - MÉTODOS ÚTEIS

// Ao trabalharmos com promises, podemos utilizar alguns métodos muito úteis em nossas aplicações, como o "Promises.all" e o "Promises.race". Vamos abaixo abordar os principais, com exemplos;

// Promise.all - Este método avalia um conjunto de objetos "promises" informado pelo desenvolvedor, e retorna o resultado de todos de uma só vez. Ao utilizar este método, o retorno só será dado quando TODAS as promises forem resolvidas;

// Vamos inicialmente criar uma Constructor Function para retornar uma promise, definindo o "resolve" e o "reject":

function CriaPromise(num1, num2, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof num1 !== 'number' || typeof num2 !== "number" || typeof tempo !== 'number')
            return reject('Devem ser informados apenas números.')

        setTimeout(() => {
            console.log(num1 + num2)
            resolve(num1 + num2)
        }, tempo)
    })
}

const promise1 = CriaPromise(5, 5, 2000)
const promise2 = CriaPromise(10, 2, 4000)
const promise3 = CriaPromise(7, 7, 6000)

const promiseAll = [promise1, promise2, promise3]

Promise.all(promiseAll)
.then((retornoPromiseAll) => {
    console.log(retornoPromiseAll)
})
.catch((retornoReject) => {
    console.log(retornoReject)
})