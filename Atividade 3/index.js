const ContaCorrente = require('./conta-corrente.js');
const ContaPoupanca = require('./conta-poupanca.js');
const prompt = require('prompt-sync')();

const opcoesMenuPrincipal = [1, 2, 3];
const opcoesMenuDaConta = [1, 2, 3, 4];
let fechar = false;

console.log('');
console.log(' Seja bem vindo ao Brubank! Abra sua conta conosco e aproveite as melhores taxas do mercado!');
console.log('');

while(fechar === false) {

    exibeMenuPrincipal();
    let opcao = parseInt(prompt('Digite o número da opção desejada: '));
    opcao = validaOpcao(opcao, opcoesMenuPrincipal);

    console.log('');

    if (opcao === 1) {
        let conta = abrirContaCorrente();
        console.log('');
        console.log('Você escolheu abrir uma conta corrente.');
        console.log('');
        console.log(`${conta.titular}, sua ${conta.tipo} foi aberta com sucesso, seja bem vinde ao BruBank!`);
        console.log('');
        conta.exibirDetalhes();
        console.log('');

        let seguir = prompt('Deseja realizar mais alguma operação? (S/N) ').toUpperCase();
        seguir = validarSN(seguir);
        
        if (seguir === 'N') {
            encerrarOperacao();
            break;
        }

        if (seguir === 'S') {
            movimentarConta(conta);
        }
        continue;
    }
    
    if (opcao === 2) {
        console.log('');
        console.log('Você escolheu abrir uma conta poupança.');

        let conta = abrirContaPoupanca();
        console.log('');
        console.log(`${conta.titular}, sua ${conta.tipo} foi aberta com sucesso, seja bem vinde ao BruBank!`);
        console.log('');    
        conta.exibirDetalhes();
        console.log('');

        let seguir = prompt('Deseja realizar mais alguma operação? (S/N) ').toUpperCase();
        seguir = validarSN(seguir);
        
        if (seguir === 'N') {
            encerrarOperacao();
            break;
        }

        if (seguir === 'S') {
            movimentarConta(conta);
        }
        continue;

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
    let titularCC = prompt('Digite o nome completo do titular da conta: ');
    let senhaCC = prompt('Digite uma senha de 6 dígitos para acessar a conta: ');
    let novaContaC = new ContaCorrente(titularCC, senhaCC);

    return novaContaC;
}

function abrirContaPoupanca() {
    let titularCP = prompt('Digite o nome do titular da conta: ');
    let senhaCP = prompt('Digite uma senha de 6 dígitos para acessar a conta: ');
    let novaContaP = new ContaPoupanca(titularCP, senhaCP);

    return novaContaP;
}

function exibeMenuPrincipal() {
    console.log('------------ MENU ------------');
    console.log('|  1. Abrir conta corrente   |');
    console.log('|  2. Abrir conta poupança   |');
    console.log('|                            |');
    console.log('|  3. Sair                   |');
    console.log('------------------------------');
}

function exibeMenuDaConta() {
    console.log('-------- MENU DA CONTA --------');
    console.log('|  1. Sacar                    |');
    console.log('|  2. Depositar                |');
    console.log('|  3. Verificar Saldo          |');
    console.log('|                              |');
    console.log('|  4. Voltar ao Menu Principal |');
    console.log('--------------------------------');
}

function movimentarConta(conta) {
    while (seguir === 'S') {
        console.log('');
        exibeMenuDaConta();
        let opcaoConta = parseInt(prompt('Digite o número da opção desejada: '));
        opcaoConta = validaOpcao(opcaoConta, opcoesMenuDaConta);

        console.log('');

        if (opcaoConta === 1) {
            let valorSaque = parseFloat(prompt('Digite o valor que deseja sacar: R$').replace(/,/g, '.'));
            conta.sacar(valorSaque);
            console.log('');
        }

        if (opcaoConta === 2) {
            let valorDeposito = parseFloat(prompt('Digite o valor que deseja depositar: R$').replace(/,/g, '.'));
            conta.depositar(valorDeposito);
            console.log('');
        }

        if (opcaoConta === 3) {
            conta.verificarSaldo();
            console.log('');
        }

        if (opcaoConta === 4) {
            console.log('Retornando ao Menu Principal...');
            console.log('');
            seguir = 'N';
            break;
        }
    }
}

function encerrarOperacao() {    
    console.log('Obrigado por utilizar o Brubank! Volte sempre!');
    fechar = true;
}

function validaOpcao(opcao, opcoesMenu) {
    try{
        if (!opcoesMenu.includes(opcao)) {
            throw (new Error('Opção inválida! Tente novamente.'));
        }
    } catch (error) {
        console.error(error.message);
        console.log('');
        
        opcao = parseInt(prompt('Digite o número da opção desejada: '));
        opcao = validaOpcao (opcao, opcoesMenu);    
    }
    return opcao;
}

function validarSN(entrada) {
    try {
        if (entrada !== 'S' && entrada !== 'N') {
            throw (new Error(`Entrada inválida! Digite apenas 'S' para sim ou apenas 'N' para não.`));
        }
    } catch (error) {
        console.error(error.message);
        console.log('');

        entrada = prompt(`Digite um valor válido: `).toUpperCase();
        entrada = validarSN(entrada);
    }
    return entrada;
}