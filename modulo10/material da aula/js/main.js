$(document).ready(function(){
    $('#carrossel').slick({
        autoplay:true
    });

    $('.menuHamburguer').on('click', function(e){
        e.preventDefault()
        $('nav').slideToggle();
    });

    $('#telefone').mask('(00) 00000-0000');

    $('form').validate({
        rules:{
            nome:{
                required: true
            },
            email:{
                required: true,
                email: true
            },
            telefone:{
                required: true,
                minlength: 14
            },
            veiculoInteresse:{
                required: true
            },
        },
        messages:{
            nome: 'por favor, insira o seu nome',
            telefone: 'por favor, insira o seu numero de telefone celular',
            email: 'por favor, insira seu email',
            veiculoInteresse: 'por favor, informe o seu veiculo de interesse'
        },
        submitHandler: function(form){
            console.log(form);
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            console.log(camposIncorretos);
        }
    })

    $('.listaVeiculos button').on('click', function(e){
        e.preventDefault();
        const destino = $('#contato')
        $('html').animate({
            scrollTop: destino.offset().top
        },1000)
        $('#veiculoInteresse').val($(this).parent().find('h3').text());
    });
});