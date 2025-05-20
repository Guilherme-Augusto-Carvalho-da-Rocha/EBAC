function calculaArea(base:number, altura:number): number{
    return base*altura;
}

const calculaArea2 = (base:number, altura:number): number => base * altura

//so pra lembrar: funcoes tipo void sao aquelas que NAO TEM RETORNO.
function somar(...numeros:number[]):void{
    let resultado:number = numeros.reduce(function(contador:number, itemAtual:number){
        return contador += itemAtual;
    })
    console.log(numeros);
    console.log(resultado);
}

function teste(): string|number {
    if(10 > 5){
        return 'dez eh maior que cinco';
    } else {
        return 5;
    }
}

//aqui mostra a tipagem direitinho
const resultadoDoTeste = teste();

somar(1,2,3,4)