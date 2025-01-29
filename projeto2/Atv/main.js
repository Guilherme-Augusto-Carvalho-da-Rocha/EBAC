const nomeCtt = document.getElementById('nomeCtt');
const numCtt = document.getElementById('numeroCtt');

const tbody = document.querySelector('tbody');
const form = document.querySelector('form');

let nomes = [];
let numeros = [];

function LeContato(){
    linha = '<tr>';
    linha += `<td>${nomeCtt.value}</td>`;
    linha += `<td>${numCtt.value}</td>`;
}

function AdicionarContato(){
    if(nomes.includes(nomeCtt.value) || numeros.includes(numCtt.value)){
        alert('este usuário já foi cadastrado na agenda de contatos de Guilherme');
    } else{
        nomes.push(nomeCtt.value);
        numeros.push(numCtt.value);
        tbody.innerHTML += linha;
    }
    nomeCtt.value = '';
    numCtt.value = '';
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    LeContato();
    AdicionarContato();
});