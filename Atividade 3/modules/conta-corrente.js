import { Conta } from './conta.js';

export class ContaCorrente extends Conta {
    static tipo = 'Corrente';
    juros;

    constructor(titular, senha) {
        super(titular, senha);
        this.juros = 0.001;
    }

    aplicarJuros() {
        this.saldo += this.saldo * this.juros;
        console.log(`O juros de R$${this.saldo * this.juros} foi aplicado com sucesso. Seu novo saldo é: R$${this.saldo}.`);
    }

    exibirDetalhes() {
        super.exibirDetalhes();
        console.log(`Juros: ${this.juros}`);
        return
    }
}