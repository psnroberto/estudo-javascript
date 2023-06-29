
// ASYNC E AWAIT

// Ao utilizarmos a palavra-chave "async" antes de declaramos uma função, estamos dizendo que ela terá um comportamento assíncrono, ou seja, não dependerá da ordem de execução natural do código e será executada paralelamente. As funções declaradas como "async" retornarão promises, que poderão ou não ser executadas;

// Ao declarar uma função como "async", podemos utilizar outra palavra-chave, "await", para definirmos uma ordem de execução em seu interior, ou seja, que outras funções sejam executadas em uma ordem pré-determinada;

// Quando utilizamos as promises junto com then.() e catch.(), demos um passo adiante em questão de clareza de código quando comparado às cadeias de Callback Functions. Ao utilizarmos "async" e "await" podemos dizer que estamos dando mais um passo adiante;

// Segue abaixo exemplos de sua utilização:

function CriaPromise(num1, num2, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof tempo !== 'number')
            return reject('Deverão ser informados apenas números.')

        setTimeout(() => {
            console.log(num1 + num2)
            resolve(num1 + num2)
        }, tempo)
    })
}

// Criaremos agora uma "async function" e executaremos a função "CriaPromise()" três vezes, com a palavra-chave "await" antes de cada execução para verificarmos que, ao utilizarmos "await", a função que é assíncrona em relação ao código como um todo terá um comprotamento síncrono dentro de si:

async function executaFuncoes() {
    await CriaPromise(2, 2, 1000)
    await CriaPromise(4, 4, 1000)
    await CriaPromise(6, 6, 1000)
}

// Ao se deparar com um erro, a execução do código é interrompida pois não criamos nenhum bloco "catch.()" para receber e tratar este erro, como é esperado em promises. Para resolver este problema, vamos criar um bloco "try and catch" dentro da função:

async function executaFuncoes2() {
    try {
        await executaFuncoes()
        await CriaPromise(8, 8, 1000)
        await CriaPromise(10, 10, 1000)
        await CriaPromise('TESTE ERRO', 'TESTE ERRO', 1000) // Erro criado propositalmente para verificar o comportamento da função e do código;
        await CriaPromise(12, 12, 1000)
    } catch (retornoReject) {
        console.log(retornoReject)
    }

    // O bloco "try", como o próprio nome diz, tentará executar as linhas de código, e, caso se depare com algum erro, o bloco "catch" será executado;

    // O bloco "catch" pegará o erro e tentará tratá-lo. Ele pode receber como argumento o retorno do "reject" definido em nossa função criadora das promises;

    // Após o acionamento do bloco "catch", a execução da função é interrompida, a não ser que criemos um bloco "finally" em seguida;
}

    // Podemos, através de um bloco "finally" definir algo que a nossa função executará após algum erro ser tratado no bloco "catch" e antes de ser finalizada;

async function executaFuncoes3() {
    try {
        await executaFuncoes2()
        await CriaPromise(14, 14, 1000)
        await CriaPromise('TESTE ERRO', 'TESTE ERRO', 1000)
        await CriaPromise(18, 18, 1000)
    } catch (retornoReject) {
        console.log(retornoReject)
    } finally {
        console.log('A execução deste exemplo chegou ao fim!')
    }
}

// Por fim, chamamos a função "executaFuncoes3()" e printamos uma mensagem no log, para verificar que esta mensagem será exibida antes de qualquer outra, pois o JavaScript entende que a execução do restante do código não pode ser interrompida para a execução de funções assíncronas.

executaFuncoes3()

console.log('Este mensagem será exibida antes de qualquer outra!')

// CONCLUSÃO E RESUMO

// Ao utilizarmos "async" e "await", conseguimos fazer com que nossas funções assíncronas em relação ao código como um todo tenham um comportamento síncrono dentro de si, de forma mais limpa e clara;

// Podemos receber a tratar erros através dos blocos "try and catch". O parâmetro utilizado no bloco "catch" poderá ser o retorno definido no "reject" da nossa Função Construtora de Promises;

// Podemos fazer o encadeamento de funções, como no exemplo acima, onde dentro de "executaFuncoes3()" chamamos "executaFuncoes2()", e dentro desta última, "executaFuncoes()".


