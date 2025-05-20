class Conta {
    numeroDaConta:number;
    saldo:number = 0;

    constructor(numeroDaConta:number){
        this.numeroDaConta = numeroDaConta;
    }
}

class ContaSalario extends Conta{
    depositar(valor:number){
        this.saldo +=valor;
    }
}

interface ITransacional{
    transferir:(valor:number, destinatario:Conta) => boolean;
    taxaTransferencia:number;
}

interface IExemplo2{
    cnpj: number;
}

interface IExemplo3 extends IExemplo2{
    telefone:number
}

//heranca so pode ser para uma UNICA classe, mas as interfaces podem ser quantas voce quiser.
class ContaCorrente extends Conta implements ITransacional, IExemplo3{
    taxaTransferencia = 0.1;
    cnpj:number
    telefone:number

    constructor(numeroDaConta:number, cnpj:number,telefone:number){
        super(numeroDaConta = numeroDaConta)
        this.cnpj = cnpj;
        this.telefone = telefone;
    }

    transferir(valor:number, destinatario:Conta){
        if(this.saldo <= valor){
            this.saldo -= valor;
            destinatario.saldo += valor - (valor*this.taxaTransferencia);
            return true
        }else{
            return false
        }
    }
}

// const ContaDaMaria: ITransacional = {
//     taxaTransferencia: 10,
//     transferir(valor:number, destinatario:Conta)
// }