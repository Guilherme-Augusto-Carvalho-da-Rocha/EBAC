$(document).ready(function(){
    numAtvs = 1;


    function AdicionarTarefa(){
        const nomeTarefa = $('form input').val();
        //console.log(nomeTarefa);
        const novaTarefa = $(`<li></li>`);
        novaTarefa.text(`Atividade ${numAtvs}: ${nomeTarefa}`);
        $('#listaAtividades').append(novaTarefa);
        numAtvs++;
    }

    $('form').on('submit',function(e){
        e.preventDefault();
        AdicionarTarefa();
    });

    function RiscarAtividade(li){
        $(li).addClass('atividadeFeita');
    }

    $('#listaAtividades').on('click', 'li', function(e){
        e.preventDefault();
        //console.log('Clicado:', $(this).text())
        RiscarAtividade(this);
        //$('li').addClass('atividadeFeita');
    });
});