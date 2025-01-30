$(document).ready(function(){
    document.querySelector('form').style.display = 'none';

    // esse $ é um query selector e que seleciona o primeiro botão na header e ao clicar você consegue uma ação resposta chamada callback
    $('header button').click(function(){
        $('form').slideDown();
    })

    //a diferença do on.('click') para o .click() é meramente uma forma de tornar o seu código menos engessado em casos de nescessidade de mudança
    $('#reset').on('click', function(e){
        $('form').slideUp();
    })

    function AdicionaImagem(urlNewImage){
        //METODO ANTIGO
        //const lista = $('ul');
        //let linha = '<li>';
        //linha += `<img src="${urlNewImage}"/>`;
        //linha += '<div class="imgReal">';
        //linha += `<a href="${urlNewImage}">Ver imagem em tamanho real</a>`;
        //linha += '</div>';
        //linha += '</li>';
        //lista.innerHTML += linha;

        //METODO JQUERY
        const novoItem = $('<li style =" display: none"></li>');
        $(`<img src="${urlNewImage}"/>`).appendTo(novoItem);
        $(` <div class = "imgReal">
                <a href="${urlNewImage}" target="_blank">Ver imagem em tamanho real</a>
            </div>`
        ).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(200);
        console.log(novoItem);
    }

    // ao ativar a ação submit de um botão de mesmo tipo dentro do "container" do form, você consegue o callback dessa função
    $('form').on('submit', function(e){
        e.preventDefault();
        // no lugar de value o jQuery usa val
        const urlNewImage = $('#URLNewImage').val();
        AdicionaImagem(urlNewImage);
    });
});