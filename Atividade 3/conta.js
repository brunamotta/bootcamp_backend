class Conta {
    numero;
    senha;
    tipo;
    titular;
    #saldo;

    constructor(titular, senha) {
        this.numero = Math.floor(Math.random() * 1000000);
        this.senha = senha; //TODO: Criar validação de senha(6 digitos numericos, etc)
        this.titular = titular;
        this.#saldo = 0.00;
    }

    depositar(valor) {
        this.saldo += valor;
        console.log(`Depósito de R$${valor} realizado com sucesso. Seu novo saldo é: R$${this.saldo}.`);
    }

    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            return console.log(`O saque de R$${valor} foi realizado com sucesso. Seu novo saldo é: R$${this.saldo}.`);
        }
        return console.log(`Não foi possível realizar a operação saque de R$${valor}: Saldo insuficiente.`);
    }

    verificarSaldo() {
        return console.log(`O saldo da conta é de R$${this.saldo}`);
    }

    get saldo() {
        return this.#saldo;
    }

    set saldo(novoSaldo) {
        if (novoSaldo >= 0) {
            return this.#saldo = novoSaldo;
        } else {
            return console.log('O Saldo não pode ser negativo!');
        }
    }

    exibirDetalhes() {
        console.log(``);
        console.log(`Detalhes da sua conta:`);
        console.log(`Tipo: ${this.constructor.tipo}`);
        console.log(`Número da Conta: ${this.numero}`);
        console.log(`Titular: ${this.titular}`);
        console.log(`Saldo: R$${this.saldo}`);
    }
}

module.exports = Conta;