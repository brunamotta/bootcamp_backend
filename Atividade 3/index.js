import { ContaCorrente } from './modules/conta-corrente.js';
import { ContaPoupanca } from './modules/conta-poupanca.js';

const conta1 = new ContaPoupanca('João', 0.005);
const conta2 = new ContaCorrente('Maria', 0.01);

console.log('');
conta1.exibirDetalhes();
console.log('');
console.log('---------------------');
console.log('');
conta2.exibirDetalhes();
console.log('');

/* const opcoes = [1, 2, 3, 4];
let fechar = false;

console.log('');
console.log(' Seja bem vindo ao Brubank! Abra sua conta conosco e aproveite as melhores taxas do mercado!');
console.log('');

while(fechar === false) {

    exibeMenu();
    let opcao = parseInt(prompt('Digite o número da opção desejada: '));
    let opcaoValida = validaOpcao(opcao, opcoes);

    if (opcaoValida === 1) {
        console.log('');
        console.log('Você escolheu abrir uma conta corrente.');
        let nome = prompt('Digite o nome completo do titular da conta: ');
        let ContaCorrente = new ContaCorrente(nome);

        console.log('');
        console.log(`${ContaCorrente.titular}, sua conta corrente foi aberta com sucesso, seja bem vinde ao BruBank!`);
        console.log('');
        ContaCorrente.exibirDetalhes();
        console.log('');
        console.log('Deseja realizar mais alguma operação?');
    }
    
    if (opcao === 2) {
        console.log('');
        console.log('Você escolheu abrir uma conta poupança.');
        let nome = prompt('Digite o nome do titular da conta: ');
        let ContaPoupanca = new ContaPoupanca(nome);
        console.log('');
        console.log(`${ContaCorrente.titular}, sua conta poupança foi aberta com sucesso, seja bem vinde ao BruBank!`);
        console.log('');
        ContaPoupanca.exibirDetalhes();
        console.log('');
        console.log('Deseja realizar mais alguma operação?');
    }

    if (opcao === 3) {
        console.log('');
        console.log('Você escolheu acessar uma conta.');
        let conta = parseInt(prompt('Digite o número da conta: '));
        let senha = parseInt(prompt('Digite a senha da conta: '));
        console.log('');
        console.log('Conta acessada com sucesso!');
        console.log('');
        console.log('Deseja realizar mais alguma operação?');
    
    }
}

function exibeMenu() {
    console.log('------------ MENU ------------');
    console.log('|  1. Abrir conta corrente   |');
    console.log('|  2. Abrir conta poupança   |');
    console.log('|  3. Acessar conta          |');
    console.log('|  4. Sair                   |');
    console.log('------------------------------');
}

function validaOpcao(opcao, opcoes) {
    while (!opcoes.includes(opcao)) {
        console.log('Opção inválida! Tente novamente.');
        
        opcao = parseInt(prompt('Digite o número da opção desejada: '));
        opcao = validaOpcao (opcao,opcoes);
        
        return opcao;   
    }
} */