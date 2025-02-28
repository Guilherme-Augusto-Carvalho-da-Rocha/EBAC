$(document).ready(function(){
    $('#formSorteador').submit(function(e){
        e.preventDefault();
        let numeroMax = $('#numeroMax').val();
        numeroMax = parseInt(numeroMax);
        let numRandom = (Math.random()*numeroMax)+1;
        numRandom = numRandom.toFixed(0);
        if(numRandom > numeroMax){
            numRandom--;
        }
        $('#resultadoValor').empty();
        $('#resultadoValor').append(numRandom);
    });
});