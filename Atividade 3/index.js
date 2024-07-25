const ContaCorrente = require('./conta-corrente.js');
const ContaPoupanca = require('./conta-poupanca.js');
const prompt = require('prompt-sync')();
const opcoesMenuPrincipal = [1, 2, 3];
const opcoesMenuDaConta = [1, 2, 3, 4, 5];
let fechar = false;

console.log('');
console.log(' Seja bem vindo ao Brubank! Abra sua conta conosco e aproveite as melhores taxas do mercado!');
console.log('');

// ENTRANDO NO MENU PRINCIPAL DO BRUBANK
while(fechar === false) {
    exibeMenuPrincipal();
    let opcao = parseInt(prompt('Digite o número da opção desejada: ')); //captura opção desejada
    opcao = validaOpcao(opcao, opcoesMenuPrincipal); //valida entrada do usuário
    console.log('');

    if (opcao === 1) { //ABRIR CONTA CORRENTE
        let tipoConta = 'corrente';
        
        console.log('');
        console.log('Você escolheu abrir uma conta corrente.');
        console.log('');
        
        let conta = abrirConta(tipoConta);
        conta.exibirDetalhes();
        seguirParaOpcoesConta();

        continue;
    }
    
    //ABRIR CONTA POUPANÇA
    if (opcao === 2) {
        let tipoConta = 'poupanca';
        
        console.log('');
        console.log('Você escolheu abrir uma conta poupança.');

        let conta = abrirConta(tipoConta);
        
        console.log('');
        conta.exibirDetalhes();
        seguirParaOpcoesConta();

        continue;
    }

    //SAIR E ENCERRAR O PROGRAMA
    if (opcao === 3) {
        console.log('');
        console.log('Obrigado por utilizar o Brubank! Volte sempre!');
        fechar = true;
        break;
    }
}

function abrirConta(tipo) {
    let titular = prompt('Digite o nome completo do titular da conta: ');
    let senha = prompt('Digite uma senha de 6 dígitos para acessar a conta: ');
    senha = validarSenha(senha); // valida entrada do usuário para a senha
    let novaConta;
    
    if (tipo === 'corrente') {
        novaConta = new ContaCorrente(titular, senha); //abre conta se tipo for corrente
    }

    if(tipo === 'poupanca') {
        novaConta = new ContaPoupanca(titular, senha); // abre conta se tipo for poupanca
    }

    console.log(`${novaConta.titular}, sua ${novaConta.tipo} foi aberta com sucesso! O BruBank agradece a preferência.`); //imprime resultado
    console.log('');

    return novaConta;
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
    console.log('|  4. Informações da conta     |');
    console.log('|                              |');
    console.log('|  5. Voltar ao Menu Principal |');
    console.log('--------------------------------');
}

function seguirParaOpcoesConta(conta) {
    let seguir = prompt('Deseja realizar mais alguma operação? (S/N) ').toUpperCase(); //captura a escolha do usuário de continuar a movimentar a conta ou não
    seguir = validarSN(seguir);
    
    if (seguir === 'N') {
        encerrarOperacao(); //encerra a movimentação da conta e volta ao menu principal
    }

    if (seguir === 'S') {
        movimentarConta(conta); // inicia o menu com opções de movimentação da conta
    }
}

function movimentarConta(conta) { //submenu da aplicação para movimentação da conta
    while (seguir === 'S') {
        console.log('');
        exibeMenuDaConta();
        let opcaoConta = parseInt(prompt('Digite o número da opção desejada: '));
        opcaoConta = validaOpcao(opcaoConta, opcoesMenuDaConta);

        console.log('');

        if (opcaoConta === 1) {
            let valorSaque = parseFloat(prompt('Digite o valor que deseja sacar: R$').replace(/,/g, '.')); //captura entrada do usuário e trata os dados para o tipo float usando REGEX para substituir vírgulas por pontos
            conta.sacar(valorSaque);
            console.log('');
        }

        if (opcaoConta === 2) {
            let valorDeposito = parseFloat(prompt('Digite o valor que deseja depositar: R$').replace(/,/g, '.')); //captura entrada do usuário e trata os dados para o tipo float usando REGEX para substituir vírgulas por pontos
            conta.depositar(valorDeposito);
            console.log('');
        }

        if (opcaoConta === 3) {
            conta.verificarSaldo();
            console.log('');
        }

        if (opcaoConta === 4) {
            conta.exibirDetalhes();
            console.log('');
        }

        if (opcaoConta === 5) {
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

function validarSenha(senha) {
    try {
        if (senha.length !== 6 || isNaN(senha)) {
            throw (new Error('Senha inválida! A senha deve conter 6 dígitos numéricos.'));
        }
    } catch (error) {
        console.error(error.message);
        console.log('');
        senha = prompt('Digite uma senha válida: ');
        senha = validarSenha(senha);
    }

    return senha;
}