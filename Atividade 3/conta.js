class Conta {
    numero;
    senha;
    tipo;
    titular;
    #saldo;

    constructor(titular, senha) {
        this.numero = Math.floor(Math.random() * 1000000);
        this.senha = senha;
        this.titular = titular;
        this.#saldo = 0.00;
    }

    depositar(valor) {
        if(valor > 0) {
            this.saldo += valor;
            console.log(`Depósito de R$${valor} realizado com sucesso. Seu novo saldo é: R$${this.saldo}.`);
        } else {
            console.log('Não é possível depositar valores negativos.');
        }
    }

    sacar(valor) {
        if(valor > 0) {
            if (this.saldo >= valor) {
                this.saldo -= valor;
                return console.log(`O saque de R$${valor} foi realizado com sucesso. Seu novo saldo é: R$${this.saldo}.`);
            }   

            return console.log(`Não foi possível realizar a operação saque de R$${valor}: Saldo insuficiente.`);

        } else {
            return console.log('Não é possível sacar valores negativos.');
        }
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
        console.log(`------ Informações da sua conta ------`);
        console.log(` Tipo: ${this.constructor.tipo}`);
        console.log(` Número da Conta: ${this.numero}`);
        console.log(` Titular: ${this.titular}`);    
        console.log(` Saldo: R$${this.saldo}`);
    }
}

module.exports = Conta;