const newFunction = () => "olá";

const returnsACar = () =>{
    return {
        modelo: "Ka",
        fabricante: "Ford",
        anoModelo: 2020,
        anoFabricacao: 2019
    }
}

console.log(newFunction());
console.log(returnsACar());


// ao usar classes não é recomendado usar arrow functions, pq elas mudam o contexto do this
const carro = {
    velocidadeAtual: 40,
    acelerar: function(){
        console.log(this);
        this.velocidadeAtual+=10;
    },

    frear: function(){
        console.log(this);
        this.velocidadeAtual-=10;
    }
}

carro.acelerar();
carro.frear();

console.log(carro.velocidadeAtual);