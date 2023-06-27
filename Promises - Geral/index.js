
// PROMISES (OU "PROMESSAS")

// As promises ou "promessas" em JavaScript são Constructor Functions que permitem que parte do nosso código funcione de forma ASSÍNCRONA, ou seja, não dependa da execução de outras partes do código para a sua própria execução; 

// As promises sempre esperam receber dois parâmetros, comumente chamados de "resolve" e "reject", que nada mais são que Funções de Callback;

// O parâmetro "resolve" é utilizado para retornar algo quando esta parte do código funciona da maneira esperada, e o parâmetro "reject" quando acontece algum tipo de erro;

// Vamos criar uma função que utilizará o "setTimeout" para printar na tela frases com intervalos de tempo crescentes:

function funcaoPadrao(mensagem, tempo){ // Função para printar na tela as mensagens com intervalo de tempo crescente;
    setTimeout(() => {
        console.log(mensagem)
    }, tempo)
}

// Executaremos a função três vezes, com intervalos de tempo de 1,5s, 3,0s e 4,5s:

funcaoPadrao('Essa é a frase 1', 4500);
funcaoPadrao('Essa é a frase 2', 3000);
funcaoPadrao('Essa é a frase 3', 1500);

// Vamos agora criar uma função que retornará o objeto "Promise", e a excutaremos utilizando o parâmetro "tempo":

function promisesExemplo(mensagem, tempo){
    return new Promise((resolve, reject) => { // Sintaxe de declaração de uma Promise;
        
        if(typeof mensagem !== 'string') { // Condição para que o método "reject" seja acionado;
            return reject('Algum erro aconteceu e o "catch" foi acionado.')
        }
        setTimeout(() => {
            return resolve(mensagem);
        }, tempo)
    })
}

// Ao executar a função "promisesExemplo", que retornará uma Promise com os parâmetros "resolve" e "reject", devemos utilizar o método "then" para definir o próximo passo da execução do código;

// Neste exemplo, executaremos manualmente a função "promisesExemplo()" com os dois argumentos, e utilizamos o método ".then()" em seguida, que printará a mensagem utilizada com argumento e terá como retorno a execução novamente de "promisesExemplo()", porém com novos argumentos, e por diante:

promisesExemplo('Essa é a frase A', 1000)
    .then((retornoDoResolve) => { // Sintaxe para utilização do método ".then()";
        console.log(retornoDoResolve)
        return promisesExemplo('Essa é a frase B', 3000)
    })
    .then((retornoDoResolve) => {
        console.log(retornoDoResolve)
        return promisesExemplo('Essa é a frase C', 1500)
    })
    .then((retornoDoResolve)=> {
        console.log(retornoDoResolve)
        return promisesExemplo(123456789, 1000) // Tentaremos passar um "number" como primero argumento da função;
    })
    .catch((retornoDoReject) =>{
        console.log('ERRO:', retornoDoReject)
        return promisesExemplo('Essa é a frase D', 1000)
    })
    .then((retornoDoResolve) =>{
        console.log(retornoDoResolve)
    })

    // Ao deparamos com algum erro (que no caso deste exemplo foi o argumento "mensagem" ser diferente de  "string"), o método "reject" é acionado. O retorno do "reject" é enviado como parâmetro para o método "catch()", que executará alguma ação, e pode, inclusive, chamar outro "then()" e continuar a cascata de execução das promises.

    // Ao utilizarmos o "console.log()" para printar uma mensagem genérica, observamos que esta mensagem é printada antes de qualquer execução das funções assíncronas criadas, pois o JavaScript entende que, por justamente serem assíncronas, o restante do código não pode aguardar as suas execuções:

    console.log('Esta mensagem será exibida antes de qualquer outra!')

    //------------------------------------------------------//--------------------------------------------------//

    // RESUMO E CONCLUSÃO

    // Ao executarmos as funções criadas neste exemplo, "funçãoPadrao()" e "promisesExemplo()", percebemos que as duas se comportam de maneiras distintas. A primeira tem um comportamento assíncrono (pois o método "setTimeout" é um método assíncrono). Podemos verificar este comportamento ao chamar a função três vezes, com o parâmetro "tempo" diferente em cada, e vermos que, mesmo chamando as frases na ordem 1, 2 e 3, é printado na tela as frases na ordem 3, 2 e 1. A explicação é que, por ser um método assíncrono, ele não depende da ordem normal de execução do código (forma síncrona) e executa todos de uma só vez, em paralelo;

    // Já quando executamos a função "promisesExemplo()", percebemos que ela tem um comportamento ASSÍNCRONO em relação ao código como um todo (a frase "A" é printada antes da frase "3", mesmo sendo chamada posteriormente), mas entre si tem um comportamento SÍNCRONO (as frases SEMPRE vão respeitar a ordem A, B e C). Isso acontece porque ao utilizarmos as "promises", o método "then()" só será executado após a função ser executada, e o próximo "then()" após o anterior, e assim sucessivamente ... até nos depararmos com um erro e o método "catch()" ser acionado. Quando o método "catch()" for acionado, podemos tratar o erro e sair da execução da função, ou podemos continuar com o próximo "then()";

    // As promises podem ser entendidas como promessas da vida real. Estamos prometendo ao código que, quando determinado evento ocorrer, determinada ação será tomada. Como a promise é um evento que ocorrerá no futuro, não é lógico que o restante do código seja parado aguardando o seu acontecimento. Podemos comprovar isto ao ver que o "console.log()" do final do código é executado antes de qualquer coisa, pois o JavaScript entende que eventos assíncronos não devem impedir a execução do restante do código;

    // Utilizar as promises e os métodos "then()" e "catch()", pode ser visto como uma forma elegante de trabalhar com as famosas Funções de Callback de erro e sucesso, pois torna o código mais limpo e legível, e de melhor manutenção. A propósito, os métodos "resolve" e "reject" são funções de Callback (funções que são passadas como argumentos para outras funções).