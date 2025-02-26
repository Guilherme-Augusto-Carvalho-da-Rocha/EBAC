/* document.addEventListener('DOMContentLoaded', function(){
    const modal = new bootstrap.Modal('#modalTeste');
    setTimeout(function(){
        modal.show();
    }, 3000);
}); */

$('document').ready(function(){
    setTimeout(function(){
        $('#modalTeste').modal('show');
    }, 3000);
})