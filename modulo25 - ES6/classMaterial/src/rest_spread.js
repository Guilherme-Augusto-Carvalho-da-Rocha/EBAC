function somar(){
    let soma = 0;

    for(let i = 0; i < arguments.length; i++){
        soma += arguments[i];
    }
    return soma;
}

console.log(somar(10,20,30,40))

function somarWithRest(...numeros){
    const soma = numeros.reduce((resultado, argumentoAtual)=>{
        resultado += argumentoAtual;
        return resultado;
    })
    return soma;
}

console.log(somarWithRest(1,2,3,4,5))

//spread
const numeros = [1,2,3,4,5];
console.log(...numeros);

const timesDeFutebolSP = ['Corinthians', 'São Paulo', 'Bragantino', 'Santos'];
const timesDeFutebolRJ = ['Flamengo', 'Vasco', 'Fluminense', 'Botafogo'];
const timesDeFutebol = [...timesDeFutebolSP, ...timesDeFutebolRJ]

console.log(timesDeFutebol);

const carroDaJulia = {
    modelo: 'Gol',
    Fabricante: 'VolksWagen',
    motor: 1.6
}

const carroDaAna = {
    ...carroDaJulia,
    motor: 1.8
}

console.log(carroDaAna);

//desestruturação
// const motorDoCarroDaAna = carroDaAna.motor;
const { motor: motorDoCarroDaAna } = carroDaAna;
const { motor: motorDoCarroDaJulia } = carroDaJulia;

console.log(motorDoCarroDaAna);
console.log(motorDoCarroDaJulia);

const [item1, item2, item3, ...outrosTimes] = timesDeFutebol;

console.log(item1);
console.log(item2);
console.log(item3);
console.log(outrosTimes);