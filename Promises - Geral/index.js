
// PROMISES (OU "PROMESSAS")

// As promises ou "promessas" em JavaScript são funções que permitem que parte do nosso código funcione de forma ASSÍNCRONA, ou seja, em paralelo com outras partes do código. São funções construtoras que sempre esperam receber dois parâmetros, comumente chamados de "resolve" e "reject";

// O parâmetro "resolve" é utilizado para retornar algo quando esta parte do código funciona da maneira esperada, e o parâmetro "reject" quando acontece algum tipo de erro;

// Criaremos abaixo um exemplo de utilização de Promises, utilizando uma função que irá printar no console log, em tempos aleatórios, algumas frases:

function aleatorio(min, max){ // Função para criar números aleatórios, com valores entre o parâmetro esperado "min" e o "max";
    min = min * 1000;
    max = max * 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function promisesTeste(mensagem, tempo){ // Função para printar na tela as mensagens com tempo aleatório;
    setTimeout(() => {
        console.log(mensagem)
    }, tempo)
}

// Ao executarmos as funções com o tempo aleatório, as frases serão printadas de acordo com o tempo definido pela função "aleatorio", independente da ordem em que foram chamadas:

promisesTeste('Essa é a frase 1', aleatorio(1, 4));
promisesTeste('Essa é a frase 2', aleatorio(1, 4));
promisesTeste('Essa é a frase 3', aleatorio(1, 4));

// Vamos agora, por meio das Promises, definir que as funções só poderão ser executadas em ordem crescente, e não mais de forma aleatória:

function promisesTeste2(mensagem, tempo){
    return new Promise((resolve, reject) => {
        
        if(typeof mensagem !== 'string') {
            return reject('Algum erro aconteceu e o "catch" foi acionado.')
        }
        setTimeout(() => {
            resolve(mensagem);
        }, tempo)
    })
}

promisesTeste2('Essa é a frase A', aleatorio(1, 4))
    .then((resolve) => {
        console.log(resolve)
        return promisesTeste2('Essa é a frase B', aleatorio(1, 4))
    })
    .then((resolve)=> {
        console.log(resolve)
        return promisesTeste2(123456789, aleatorio(1, 4))
    })
    .then((resolve) => {
        console.log(resolve)
        return promisesTeste2('Essa é a frase C', aleatorio(1, 4))
    })
    .then((resolve) => {
        console.log(resolve)
    })
    .catch((reject) =>{
        console.log('ERRO:', reject)
    })

    console.log('Esta mensagem será exibida antes de qualquer outra!')