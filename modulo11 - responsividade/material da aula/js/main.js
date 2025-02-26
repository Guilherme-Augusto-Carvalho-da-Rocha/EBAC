$('document').ready(function(){
    $('.botaoMenu button').on('click', function(e){
        e.preventDefault();
        $('.menu').slideToggle();
    })
})