const Conta = require('./conta.js');

class ContaCorrente extends Conta {
    static tipo = 'Conta Corrente';
    juros;

    constructor(titular, senha) {
        super(titular, senha);
        this.juros = 0.01;
    }

    aplicarJuros() {
        this.saldo = this.saldo + (this.saldo * this.juros);
        console.log(`O juros de R$${this.saldo * this.juros} foi aplicado com sucesso. Seu novo saldo é: R$${this.saldo}.`);
        return
    }

    exibirDetalhes() {
        super.exibirDetalhes();
        console.log(`Juros: ${this.juros}`);
        return
    }
}

module.exports = ContaCorrente;