//simulando o DOM de um formulario

//tipo: HTMLElement | null
const campoNome = document.getElementById('nome');
//tipo: HTMLCollectionOf<HTMLFormElement>
const formulario = document.getElementsByTagName('form');
//tipo: HTMLElement | null
const botaoEnviar = document.getElementById('btn-enviar');


//ele tipa ate mesmo eventos, permitindo com que voce documente o codigo somente por faze-lo
botaoEnviar?.addEventListener('click', (e:MouseEvent) =>{

})