const Conta = require('./conta.js');

class ContaPoupanca extends Conta {
    static tipo = 'Conta Poupança';
    rendimento;

    constructor(titular, senha) {
        super(titular, senha);
        this.rendimento = 0.005;
    }

    aplicarRendimento() {
        this.saldo = this.saldo + (this.saldo * this.rendimento);
        console.log(`O rendimento de R$${this.saldo * this.rendimento} foi aplicado com sucesso. Seu novo saldo é: R$${this.saldo}.`);
        return
    }

    exibirDetalhes() {
        super.exibirDetalhes();
        console.log(`Rendimento: ${this.rendimento}`);
        console.log(``);
        return
    }
}

module.exports = ContaPoupanca;