const accordionButton = document.querySelectorAll('.accordionHeader');

for(let i = 0; i< accordionButton.length; i++){
    accordionButton[i].addEventListener('click', function(e){
        e.target.parentNode.classList.toggle('isOpen');
        // if(e.target.parentNode.classList.contains('isOpen')){
        //     e.target.parentNode.classList.remove('isOpen');
        // } else {
        //     e.target.parentNode.classList.add('isOpen');
        // }
    });
}