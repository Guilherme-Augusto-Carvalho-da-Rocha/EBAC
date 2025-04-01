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

console.log(carroDaMaria2);
console.log(carroDoJoao2);

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

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof maiorDeIdade);
console.log(typeof conhecimentos);
console.log(typeof pessoa);
console.log(typeof carroDaMaria2);
console.log(typeof carroDoJoao2);

console.log(carroDaMaria2 instanceof Carro);
console.log(conhecimentos instanceof Array);