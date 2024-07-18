//TODO: Verificar porque a validação de faltas não está funcionando corretamente (se errar 2 vezes ele aprova o usuário de qq jeito)
//TODO: Verificar se a validação do S/N está funcionando corretamente

const prompt = require('prompt-sync')();

// Inicializando variáveis de escopo global
let nomeAluno = ``;
let materias = [];
let medias = [];
let faltasPorMateria = [];
let boletim = [];

// Recebe o nome do aluno
function recepcionarAluno() {
    console.log(`Seja bem vindo ao sistema de gestão de notas do aluno!`);
    nomeAluno = prompt(`Digite seu nome para iniciar: `);
    console.log(` `);
}

// Função para a Gestão de matérias
function gerirMaterias() {
    
    console.log(`Olá, ${nomeAluno}!`);
    
    // laço que mantem o cadastro de matérias novas enquanto o aluno desejar
    while(true) {
        let materia = prompt(`Qual o nome da matéria que você deseja cadastrar? `);
        console.log(` `);
        materias.push(materia);
        
        let qtdMaterias = materias.length;
        let media = cadastrarNotas(materia);
        let presenca = cadastrarFaltas(materia);

        verificarAprovacao(media, presenca);

        console.log(`---------------------------------`);

        let continuar = prompt(`Deseja cadastrar mais alguma matéria? (S/N) `);
        validarSN(continuar);

        if(continuar.toUpperCase() === `S`) {
            continue;

        } else {
            if(continuar.toUpperCase() === `N` && qtdMaterias >= 3) {
                break;

            } else {
                console.log(`É necessário cadastrar no mínimo 3 matérias!`);
                console.log('---------------------------------');
                continue;
            }
        }
    }
}

function cadastrarNotas(materia) {
    let notas = [];

    for(let i = 1; i < 4; i++) {
        let nota = parseFloat(prompt(`Digite a nota ${i} de ${materia}: `).replace(/,/g, '.'));
        let notaValida = validarNota(nota);
        notas.push(notaValida);
    }

    let media = calcularMedia(notas);
    console.log(`A sua média em ${materia} é ${media}.`);
    console.log(` `);

    return media;
};

function calcularMedia(notas) {
    let soma = 0;
    
    notas.forEach( (nota) => {
        soma += nota;
    });

    let media = (soma / notas.length).toFixed(1);
    medias.push(media);

    return media;
};

//cadastra as faltas
function cadastrarFaltas(materia) {
    let qtdFaltas = parseInt(prompt(`Digite a quantidade de faltas em ${materia}: `));



    console.log(` `);
    console.log(`### ENTRADA DO USUÀRIO ###`);
    console.log(typeof qtdFaltas);
    console.log(qtdFaltas);
    console.log(`#######`);
    console.log(` `);



    qtdFaltasValidadas = validarFaltas(qtdFaltas);

    

    console.log(` `);
    console.log(`### pós validação ###`);
    console.log(typeof qtdFaltas);
    console.log(qtdFaltas);
    console.log(`#######`);
    console.log(` `);



    faltasPorMateria.push(qtdFaltasValidadas);
    console.log(faltasPorMateria);

    return qtdFaltasValidadas > 5 ? 'ausente' : 'presente';
};

//verifica situação final do aluno na matéria
function verificarAprovacao(media, presenca) {
    let resultado = '';
    if(media >= 6 && presenca === 'presente') {
        console.log('PARABÉNS! Você foi aprovado na matéria!');
        console.log('');

        resultado = 'Aprovado!';
        boletim.push(resultado);

    } else {
        console.log('Sinto muito, você foi reprovado na matéria!');
        console.log('');

        resultado = `Reprovado!`;
        boletim.push(resultado);

    };
};

// exibe o resultado final do boletim
function exibirResultado() {
    console.log(`${nomeAluno}, suas notas foram cadastradas com sucesso!`);
    console.log(`Seu boletim ficou da seguinte forma: `);
    materias.map( (materia, i) => {
        return console.log(`Matéria: ${materia} |   Média: ${medias[i]} |   Faltas: ${faltasPorMateria[i]}  |   Situação Final: ${boletim[i]}`);
    })
};

// Funções para validação das entradas de notas, faltas e confirmações para continuar
function validarNota(entrada) {
    try {
        if (isNaN(entrada)) {
            throw (new Error('Entrada inválida! O valor deve ser numérico.'));
        }
        if (entrada < 0 || entrada > 10) {
            throw (new Error('Entrada inválida! A nota só pode valer entre 0 e 10.'));
        }    
    } catch (error) {
        console.error(error.message);
        console.log(` `);

        entrada = parseFloat(prompt(`Digite um valor válido: `));
        validarNota(entrada);
    }

    return entrada;
}

function validarFaltas(entrada) {
    try {
        if (isNaN(entrada)) {
            throw (new Error('Entrada inválida! O valor deve ser numérico.'));
        }

        if (entrada <= 0) {
            throw (new Error('Entrada inválida! O valor deve ser maior ou igual a 0.'));
        } 
    } catch (erro) {
        console.error(erro.message);
        console.log(` `);

        entrada = parseInt(prompt(`Digite um valor válido: `));



        console.log(`### DURANTE VALIDAçÂO ####`);
        console.log(typeof entrada);
        console.log(entrada);
        console.log(`#######`);



        validarFaltas(entrada);

    }

    return entrada;
}

function validarSN(entrada) {
    try {
        if (entrada.toUpperCase() !== 'S' && entrada.toUpperCase() !== 'N') {
            throw (new Error(`Entrada inválida! Digite apenas 'S' para sim ou apenas 'N' para não.`));
        }
    } catch (error) {
        console.error(error.message);
        console.log(` `);

        entrada = prompt(`Digite um valor válido: `);
        validarSN(entrada);
    }

    return entrada;
}

recepcionarAluno();
gerirMaterias();
exibirResultado();