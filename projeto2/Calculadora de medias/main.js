const nomeAtv = document.getElementById('nomeAtv');
const notaAtv = document.getElementById('notaAtv');
const form = document.getElementById('form');
const tbody = document.querySelector('tbody');
const tfoot = document.querySelector('tfoot');
const notaMinima = parseFloat(prompt('digite a média minima nescessária para a aprovação:'));

const imgAprovado = '<img src="./style/images/aprovado.png" alt="emoji festejando">'
const imgReprovado = '<img src="./style/images/reprovado.png" alt="emoji triste">'

let notas = [];
let atividades = [];



function AdicionarAtividade(){
    let linha = `<tr>`;
    linha += `<td> ${nomeAtv.value}</td>`;
    linha += `<td> ${notaAtv.value}</td>`;
    linha += `<td> ${notaAtv.value >= notaMinima ? imgAprovado : imgReprovado} </td>`
    linha += `</tr>`;
    if(atividades.includes(nomeAtv.value)){
        alert('esta atividade já foi inserida');
    }else{
        notas.push(parseInt(notaAtv.value));
        atividades.push(nomeAtv.value);
        tbody.innerHTML += linha;
    }
}

function CalculaMedia(){
    
    let i = 0;
    let somaNotas = 0;
    for(i = 0; i < notas.length; i++){
        somaNotas += notas[i];
    }
    let media = somaNotas/(notas.length);
    return media;
    
}

function EscreveMedia(media = 0){
    let linha = `<tr>`;
    linha += `<td>Média final</td>`;
    linha += `<td>${media.toFixed(2)}</td>`;
    linha += `<td> <span class= "resultado">${media >= notaMinima ? 'Aprovado': 'Reprovado'}</span></td>`;
    linha += `</tr>`;
    tfoot.innerHTML = linha;
}

function EstilizaAprovadoReprovado(){
    let tfAprovado = document.querySelector('.resultado');
    let media = CalculaMedia();
    if(media >= notaMinima){
        tfAprovado.classList.add('aprovado');
    } else {
        tfAprovado.classList.add('reprovado');
    }
}
//function calculaMedia(){
    //let linhaAtual = linha;
    //let numLinhas = linhaAtual.slice(linhaAtual.indexOf('-')+1, linhaAtual.indexOf('-')+2);
    //alert(`numlinhas: ${numLinhas} tipo: ${typeof numLinhas}`);
    //numLinhas = parseInt(numLinhas);
    //alert(`numlinhas: ${numLinhas} tipo: ${typeof numLinhas}`);
    //let notaTotal = notaAtv.value;
    //for(let j = 0; j> numLinhas; j++){
        //notaTotal += notas[j];
    //}
//}

form.addEventListener('submit', function(e){
    e.preventDefault();
    AdicionarAtividade();
    let media = CalculaMedia();
    EscreveMedia(media);
    EstilizaAprovadoReprovado();
});