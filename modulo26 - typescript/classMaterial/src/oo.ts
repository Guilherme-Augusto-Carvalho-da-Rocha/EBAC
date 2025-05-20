class Pessoa {
    nome: string;
    renda?:number;

    //argumentos opcionais devem estar sempre ao final dos parametros de um construtor
    constructor(nome: string, renda?:number){
        this.nome = nome;
        this.renda = renda;
    }

    Cumprimenta(): string {
        return `${this.nome} te diz ola`
    }
}

class ContaBancaria{
    //algo protegido sempre deixa que classes filhas utilizem esses atributos, mas nunca outras classes ou fora dessas classes.
    protected saldo:number = 0;
    numeroConta:number;

    constructor(numeroConta:number){
        this.numeroConta = numeroConta;
    }

    //uma funcao privada somente permite que a popria classe a utilize
    private setSaldo(saldo:number){
        this.saldo = saldo;
    }

    //o static pertence somente a classe, e nao a instancia.
    static getNumeroDoBanco(){
        return 125;
    }

    getSaldo(){
        return this.saldo
    }

    depositar(valor:number){
        this.saldo += valor;
    }
}

class ContaBancariaPessoaFisica extends ContaBancaria{
    depositar(valor: number): void {
        this.saldo += valor-valor*0.1; //imposto de 10% ai
    }
}

const contaDoPedro = new ContaBancariaPessoaFisica(123456);
contaDoPedro.depositar(10);

console.log(contaDoPedro.getSaldo())

ContaBancaria.getNumeroDoBanco();
//NAO PODE pois o getNumeroDoBanco eh static e pertence somente a classe
//contaDoPedro.getNumeroDoBanco();