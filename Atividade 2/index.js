const prompt = require('prompt-sync')();
let nomeAluno = ``;
let materias = [];

function recepcaoAluno() {
    console.log(`Seja bem vindo ao sistema de gestão de notas do aluno!`);
    nomeAluno = prompt(`Digite seu nome para iniciar: `);
}

function cadastrarMaterias() {
    
    console.log(`Olá, ${nomeAluno}!`);
    console.log(` `);
    
    while(true) {
        let materia = prompt(`Qual o nome da matéria que você deseja cadastrar? `);
        console.log(` `);

        materias.push(materia);
        let qtdMaterias = materias.length;
        let continuar = prompt(`Deseja cadastrar mais alguma matéria? (S/N) `);
        console.log(` `);


        if(continuar.toUpperCase() === `S`) {
            continue;
        }

        if(continuar.toUpperCase() === `N` && qtdMaterias >= 3) {
            break;

        } else {
            console.log(`É necessário cadastrar no mínimo 3 matérias!`);
            console.log(` `);

            continue;
        }
    }

    console.log(`Matérias cadastradas: ${materias}`);
}

recepcaoAluno();
cadastrarMaterias(); 