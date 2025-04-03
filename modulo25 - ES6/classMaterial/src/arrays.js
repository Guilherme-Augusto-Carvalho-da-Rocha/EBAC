const redesSociais = ['Facebook', 'Instagram', 'Twitter/X'];

// for(let i = 0; i <redesSociais.length; i++){
//     console.log(`Eu tenho um perfil na rede social: ${redesSociais[i]}`);
// }

redesSociais.forEach(function(nomeDaRedeSocial, index){
    console.log(`#${index+1} Eu tenho um perfil na rede social: ${nomeDaRedeSocial}`)
})

const alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner'];

const alunos2 = alunos.map(function(itemAtual){
    itemAtual = {
        nome: itemAtual,
        curso: 'front-end'
    }
    return itemAtual;
});

console.log(alunos2);

const paula = alunos2.find(function(item){
    return item.nome == 'Paula' //true or false
});

console.log(paula);

const indiceDaPaula = alunos2.findIndex(function(item){
    return item.nome == 'Paula'; //true or false
});

console.log(indiceDaPaula);

alunos2.push({
    nome: 'Lucio',
    curso: 'back-end'
});

const todosOsAlunosFrontEnd = alunos2.every(item => {
    return item.curso === 'front-end';
})

const algumDosAlunosBackEnd = alunos2.some(item => {
    return item.curso === 'back-end' && item.curso === 'front-end';
})

console.log(todosOsAlunosFrontEnd);
console.log(algumDosAlunosBackEnd);

const carrinho = [10,20,30,40];

const soma = carrinho.reduce(function(acumulador,itemAtual){
    acumulador += itemAtual;
    return acumulador;
})

console.log(soma);