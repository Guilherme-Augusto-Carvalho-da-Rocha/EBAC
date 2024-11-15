let form = document.getElementById('formDeposito');
let nomeBeneficiario = document.getElementById('nomeBeneficiario');
let valorDeposito = document.getElementById('valorDeposito');
let numeroConta = document.getElementById('numeroConta');
let mensagemSucesso = `montante de: <b>${valorDeposito.value}</b> depositado para o cliente: <b>${nomeBeneficiario.value}</b> dono da conta de numero: <b>${numeroConta.value}</b>`;
let containerMensagemSucesso = document.querySelector('.successMessage');
let containerMenagemErro = document.querySelector('.errorMessage');
let formValido = verificaNome(nomeBeneficiario.value);

function verificaNome(nomeCompleto){
    const nomeUsuario = nomeCompleto.split(' ');
    for(let i = 0; i<nomeUsuario.length+1; i++){
        if(nomeUsuario[i] == null || nomeUsuario[i] == '' || nomeUsuario[i] == ' '){
            console.log('erro');
            return false;
        } else if(i >> 0){
            console.log('acerto');
            return true;
        }
    }
}



form.addEventListener('submit', function(e){
    e.preventDefault();
    containerMenagemErro.style.display = 'none';
    containerMensagemSucesso.style.display = 'none';
    if (!formValido){
        containerMenagemErro.innerHTML = 'você não pôs seu nome completo ou houve um outro erro ao digitar seu nome.';
        containerMenagemErro.style.display = 'block';

        //alert('você não pôs seu nome completo ou houve um outro erro ao digitar seu nome.');
    }else{
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';



        nomeBeneficiario.value = null;
        valorDeposito.value = null;
        numeroConta.value = null;
    }
    
});


nomeBeneficiario.addEventListener('keyup', function(e){
    formValido = verificaNome(e.target.value);
    console.log(e.target.value);
    if(!formValido){
        nomeBeneficiario.classList.add('error');
        //nomeBeneficiario.style.border = '3px solid red';
        containerMenagemErro.innerHTML = 'você não pôs seu nome completo ou houve um outro erro ao digitar seu nome.';
        document.querySelector('.errorMessage').style.display = 'block';
    } else {
        nomeBeneficiario.classList.remove('error');
        //nomeBeneficiario.style.border = '3px solid green'
        containerMenagemErro.style.display = 'none'
    }
});



console.log(form);
