import { Conta } from "./conta.js";

export class ContaPoupanca extends Conta {
    static tipo = 'Poupança';
    rendimento;

    constructor(titular, senha) {
        super(titular, senha);
        this.rendimento = 0.0005;
    }

    aplicarRendimento() {
        this.saldo += this.saldo * this.rendimento;
        console.log(`O rendimento de R$${this.saldo * this.rendimento} foi aplicado com sucesso. Seu novo saldo é: R$${this.saldo}.`);
    }

    exibirDetalhes() {
        super.exibirDetalhes();
        console.log(`Rendimento: ${this.rendimento}`);
        return
    }
}