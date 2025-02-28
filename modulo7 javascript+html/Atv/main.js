
let form = document.getElementById('form');
let campoA = document.getElementById('campoA');
let campoB = document.getElementById('campoB');
let containerMensagemSucesso = document.querySelector('.successMessage');
let containerMensagemErro = document.querySelector('.errorMessage')

function validaForm(CampoA, CampoB){
    valorCampoA = CampoA.value;
    valorCampoB = CampoB.value;
    if(valorCampoB >= valorCampoA){
        console.log('acerto');
        return true;
    } else {
        console.log('erro');
        return false;
    }
}


form.addEventListener('submit', function(e){
    e.preventDefault();
    containerMensagemErro.style.display = 'none';
    containerMensagemSucesso.style.display = 'none';
    console.log(campoA.value);
    console.log(campoB.value);
    if(validaForm(campoA,campoB)){
        containerMensagemSucesso.style.display = 'block';
    } else {
        containerMensagemErro.style.display = 'block';
    }
})