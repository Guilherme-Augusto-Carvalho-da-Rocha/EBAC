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
    let _salario = salario;

    this.GetSalario = function(){
        return _salario;
    }

    this.SetSalario = function(newSalario){
        if(typeof newSalario !== 'number'){
            console.log('setSalario() recusado, o parametro não é um número.');
        } else {
            _salario = newSalario;
        }
    }

    this.aumento = function(){
        const salarioAumentado = this.GetSalario() * 1.1;
        this.SetSalario(salarioAumentado);
    }
}

function Estagiario(nome, cpf){
    Funcionario.call(this, nome, cpf, "Estagiario", 1509);
    this.nome = nome;
    this.cpf = cpf;

    //override
    this.aumento = function(){
        const salarioAumentado = this.GetSalario() * 1.07;
        this.SetSalario(salarioAumentado);
    }
}

function Gerente(nome, cpf){
    Funcionario.call(this, nome, cpf, "Gerente", 10000);
    this.nome = nome;
    this.cpf = cpf;

    //override
    this.aumento = function(){
        const salarioAumentado = this.GetSalario() * 1.15;
        this.SetSalario(salarioAumentado);
    }
}

const pessoa1 = new Pessoa("Maria", "000.000.000-00");
const pessoa2 = new Pessoa("Pedro", "111.111.111-11");
const pessoa3 = new Pessoa("Flavia", "222.222.222-22");
const funcionario1 = new Funcionario(pessoa1.nome, pessoa1.cpf, "dev front-end plena", 5000);
const funcionario2 = new Estagiario(pessoa2.nome, pessoa2.cpf);
const funcionario3 = new Gerente(pessoa3.nome, pessoa3.cpf);

funcionario1.aumento();
console.log(`O salário de ${funcionario1.nome} é: ${funcionario1.GetSalario()}`);

funcionario2.aumento();
console.log(`O salário de ${funcionario2.nome} é: ${funcionario2.GetSalario()}`);

funcionario3.aumento();
console.log(`O salário de ${funcionario3.nome} é: ${funcionario3.GetSalario()}`);