$('document').ready(function(){

    $('#checarEmails').on('click', function(){
        const toast = new bootstrap.Toast($('#mensagensAlerta'));
        toast.show()
        console.log('clicado')
    });
});