const ContaCorrente = require('./conta-corrente.js');
const ContaPoupanca = require('./conta-poupanca.js');
const prompt = require('prompt-sync')();

let contaCorrente1 = new ContaCorrente('Bruno', 123456);
let contaPoupanca1 = new ContaPoupanca('fhtryhtr', 123456);

console.log(contaCorrente1);
console.log(contaPoupanca1);

const opcoesMenuPrincipal = [1, 2, 3];
let fechar = false;

console.log('');
console.log(' Seja bem vindo ao Brubank! Abra sua conta conosco e aproveite as melhores taxas do mercado!');
console.log('');

while(fechar === false) {

    exibeMenuPrincipal();
    let opcao = parseInt(prompt('Digite o número da opção desejada: '));
    let opcaoValida = validaOpcao(opcao, opcoesMenuPrincipal);

    console.log('Você escolheu a opção: ' + opcaoValida);

    if (opcaoValida === 1) {
        console.log('');
        console.log('Você escolheu abrir uma conta corrente.');

        //TODO: transformar em uma função
        let titularCC = prompt('Digite o nome completo do titular da conta: ');
        let senhaCC = prompt('Digite uma senha de 6 dígitos para acessar a conta: ');
        let contaCorrente = new ContaCorrente(titularCC, senhaCC);

        console.log('');
        console.log(`${contaCorrente.titular}, sua conta corrente foi aberta com sucesso, seja bem vinde ao BruBank!`);
        console.log('');
        contaCorrente.exibirDetalhes();
        console.log('');
        console.log('Deseja realizar mais alguma operação?');

        //TODO: elaborar funções que chamam os métodos da conta

        continue;
    }
    
    if (opcao === 2) {
        console.log('');
        console.log('Você escolheu abrir uma conta poupança.');

        //TODO: transformar em uma função
        let titularCP = prompt('Digite o nome do titular da conta: ');
        let senhaCP = prompt('Digite uma senha de 6 dígitos para acessar a conta: ');
        let contaPoupanca = new ContaPoupanca(titularCP, senhaCP);
        console.log('');
        console.log(`${contaPoupanca.titular}, sua conta poupança foi aberta com sucesso, seja bem vinde ao BruBank!`);
        console.log('');
        contaPoupanca.exibirDetalhes();
        console.log('');
        console.log('Deseja realizar mais alguma operação?');

        //TODO: elaborar funções que chamam os métodos da conta

        continue;
    }

    if (opcao === 3) {
        console.log('');
        console.log('Obrigado por utilizar o Brubank! Volte sempre!');
        fechar = true;
        break;
    }
}

function abrirContaCorrente() {
    //TODO: Implementar
}

function abrirContaPoupanca() {
    //TODO: Implementar
}

function exibeMenuPrincipal() {
    console.log('------------ MENU ------------');
    console.log('|  1. Abrir conta corrente   |');
    console.log('|  2. Abrir conta poupança   |');
    console.log('|  3. Sair                   |');
    console.log('------------------------------');
}

function validaOpcao(opcao, opcoesMenuPrincipal) {
    try{
        if (!opcoesMenuPrincipal.includes(opcao)) {
            throw (new Error('Opção inválida! Tente novamente.'));
        }
    } catch (error) {
        console.error(error.message);
        console.log('');
        
        opcao = parseInt(prompt('Digite o número da opção desejada: '));
        opcao = validaOpcao (opcao, opcoesMenuPrincipal);    
    }
    return opcao;
}