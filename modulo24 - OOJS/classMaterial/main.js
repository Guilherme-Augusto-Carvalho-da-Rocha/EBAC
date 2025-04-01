const carroDoJoao = {
    modelo: "Fiesta",
    fabricante: "Ford",
    anoModelo: 2020,
    anoFabricacao: 2019,
    acelerar: function(){
        console.log('estou acelerando');
    }
}
const carroDaMaria = {
    modelo: "ka",
    fabricante: "Ford",
    anoModelo: 2021,
    anoFabricacao: 2020,
    acelerar: function(){
        console.log('estou acelerando');
    }
}

function Carro(modelo, fabricante, anoModelo, anoFabricacao){
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.andoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;

    this.acelerar = function(){
        console.log('estou acelerando');
    }
}

const carroDoJoao2 = new Carro("Fiesta", "Ford", 2020, 2019);
const carroDaMaria2 = new Carro("Ka", "Ford", 2021, 2020);

const nome = "Guilherme";
const idade = 18;
const maiorDeIdade = true;
const conhecimentos = ['html', 'css', 'javascript'];

const pessoa = {
    nome: nome,
    idade: idade,
    maiorDeIdade: maiorDeIdade,
    conhecimentos: conhecimentos
}

console.log(pessoa.nome);

Object.freeze(pessoa);
//por conta do freeze, ele não muda
pessoa.nome = 'joao';


function ExibeAtributo(nomeAtributo){
    console.log(pessoa[`${nomeAtributo}`]);
}


pessoa["sobrenome"] = undefined;

if (pessoa.sobrenome){
    console.log("a pessoa tem sobrenome");
}

if('sobrenome' in pessoa){
    console.log('a pessoa tem sobrenome indefinido')
}

console.log(pessoa["nome"]);
ExibeAtributo("nome");

//keys para o nome dos atributos e values para o valor dos atributos
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))

