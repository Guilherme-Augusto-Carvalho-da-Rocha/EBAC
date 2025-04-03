"use strict";

var newFunction = function newFunction() {
  return "olá";
};
var returnsACar = function returnsACar() {
  return {
    modelo: "Ka",
    fabricante: "Ford",
    anoModelo: 2020,
    anoFabricacao: 2019
  };
};
console.log(newFunction());
console.log(returnsACar());

// ao usar classes não é recomendado usar arrow functions, pq elas mudam o contexto do this
var carro = {
  velocidadeAtual: 40,
  acelerar: function acelerar() {
    console.log(this);
    this.velocidadeAtual += 10;
  },
  frear: function frear() {
    console.log(this);
    this.velocidadeAtual -= 10;
  }
};
carro.acelerar();
carro.frear();
console.log(carro.velocidadeAtual);