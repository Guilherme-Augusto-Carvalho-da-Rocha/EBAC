function Pessoa(nome, cpf){
    this.nome = nome;
    this.cpf = cpf;
    this.dizOi = function(){
        console.log(`o(a) ${this.nome} te dá oi`)
    }
}

function Funcionario(nome, cpf, cargo, salario){
    Pessoa.call(this, nome, cpf)
    this.cargo = cargo;
    this.salario = salario;
}

const pessoa1 = new Pessoa("Maria", "000.000.000-00")
const funcionario1 = new Funcionario(pessoa1.nome, pessoa1.cpf, "dev front-end plena", 5000);

console.log(pessoa1);
console.log(funcionario1);
funcionario1.dizOi();