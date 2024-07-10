const prompt = require('prompt-sync')();
const nomeAluno = ``;
let materias = [];

function recepcaoAluno() {
    console.log(`Seja bem vindo ao sistema de gestão de notas do aluno!`);
    nomeAluno = prompt(`Digite seu nome para iniciar: `);
}

function cadastraMaterias() {
    let qtdMaterias = prompt(`Olá, ${nomeAluno}! Quantas matérias você deseja cadastrar? `);

    if(qtdMaterias < 3) {

        console.log(`É necessário cadastrar no mínimo 3 matérias! Tente novamente`);
        console.log(``);

        return cadastraMaterias();

    } else {

        for(let i = 0; i < qtdMaterias; i++) {

            let materia = prompt(`Digite o nome da matéria ${i+1}: `);
            materias.push(materia);
            console.log(materias);
            
        }
    }
}

recepcaoAluno();
cadastraMaterias(); 