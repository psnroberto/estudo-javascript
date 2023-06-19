// Diferença entre buscar referência e copiar um objeto:

const pessoa1 = {nome: 'Roberto', sobrenome: 'Pereira'} // Criamos um objeto inicial;
const pessoaCopia = pessoa1 // A variável "pessoaCopia" recebe a mesma referência de memória de "pessoa1", mas NÃO SERÁ DE FATO UM CÓPIA, POIS COMPARTILHARÃO A MESMA REFERÊNCIA DE MEMÓRIA;
pessoaCopia.nome = 'Rubia' // Alterando o atributo "nome" da segunda variável;
pessoaCopia.sobrenome = 'Leite' // Alterando o atributo "sobrenome" da segunda variável;

console.log(pessoa1) // Ao alterar o atributo de uma das variáveis, o mesmo atributo da outra também é alterado, pois as duas têm o mesmo endereço de memória;

const pessoaCopia2 = { // Criando um teceiro objeto, que de fato copiará os atributos do priemiro;
    ...pessoa1, // Para copiar de fato os atributos de um objeto, podemos utilizar, como um atributo do novo objeto, "..." e o nome do objeto a ser copiado;
    idade: 34,
    altura: 1.70,
    peso: '65 kg',
}

console.log(pessoaCopia2) // O novo objeto terá todos os atributos de "pessoa1" mais os atributos adicionados manualmente.

// Object.assign()

// Podemos também copiar os atributos e propriedades de um objeto utilizando o "Object.assign()". Segue exemplo:

const pessoa3 = {
    nome: 'Roberto',
    sobrenome: 'Pereira',
    idade: 31,
    peso: 64,
    altura: 1.70
}

const pessoaCopia3 = Object.assign({}, pessoa3, {profissao: 'Desenvolvedor Front-end', salario: 'R$ 10.000,00' }) // "target" é um objeto vazio, pois a própria variável "pessoaCopia3" receberá os atributos de "pessoa3" mais os novos atributos, "profissao" e "salario";

console.log(pessoaCopia3)

const pessoaCopia4 = Object.assign(pessoaCopia3, {experiencia: '10 anos', grau: 'sênior'}) // o "target" é "pessoaCopia3", que receberá os novos atributos, "experiencia" e "grau", e em seguida "pessoaCopia4" receberá seus atributos. Neste caso, "pessoaCopia4" e "pessoaCopia3" terão o mesmo endereço de memória, pois eles estão sendo referenciados diretamente. Ou seja, ao alterar os atributos de um, também alteramos os atributos do outro;

console.log(pessoaCopia4)

// Sintaxe de "Object.assign({},)" => Object.assign({OBJETO DE DESTINO}, {OBJETO DE ORIGEM1}, {OBJETO DE ORIGEM 2}, {OBJETO DE ORIGEM 3} ...).

// O objeto de destino ou "target" é o objeto para QUAL AS PROPRIEDADES DOS OBJETOS DE ORIGEM SERÃO COPIADAS;

// Neste exemplo, criamos um objeto "pessoa3" e definimos todos os seus atributos. Em seguida, através do "Object.assign()", fizemos uma cópia de suas propriedades para um outro objeto, "pessoaCopia3", e adicionamos novas propriedades, "profissao" e "salario". Neste caso, o "target" de "Object.assign" ficou vazio, pois o objeto de destino foi a própria variável criada;

// Em seguida, criamos outra variável, "pessoaCopia4". Fizemos que o "target" deste "Object.assign()" fosse a variável criada anteriormente, "pessoaCopia3", e esta recebeu mais dois atributos, "experiencia" e "grau". Em seguida, copiamos todas as propriedades recebidas por "pessoaCopia3" para "pessoaCopia4".

// IMPORTANTE: QUANDO O "target" É PREENCHIDO COM UM OBJETO, E ESTE OBJETO É RECEBIDO POR OUTRO OBJETO, COMO NO ÚLTIMO EXEMPLO, ESTES TERÃO O MESMO ENDEREÇO DE MEMÓRIA, E, AO ALTERAR AS PROPRIEDADES DE UM, ALTERAMOS TAMBÉM DO OUTRO. QUANDO O OBJETIVO É FAZER APENAS UMA CÓPIA DOS ATRIBUTOS, O "target" DEVERÁ SER UM OBJETO VAZIO. DESTE MODO, O OBJETO QUE ESTÁ RECEBENDO OS VALORES DE "object.assign()" RECEBERÁ UM OBJETO VAZIO, QUE RECEBE PROPRIEDADES DE OUTRO OBJETO.
