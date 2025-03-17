document.addEventListener('DOMContentLoaded',function(){
    ChangeTabs();
    ToggleAccordion();
    ToggleHeader();
});

function HideAllTabs(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]')

    for(let i = 0; i < tabsContainer.length; i++){
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}

function HideButtonBorder(){
    const buttons = document.querySelectorAll('[data-tab-button]');

    for(let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function ChangeTabs(){
    const buttons = document.querySelectorAll('[data-tab-button]');

    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(botao){
            const targetTab = botao.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id= ${targetTab}]`);
            HideAllTabs();
            tab.classList.add('shows__list--is-active');
            HideButtonBorder();
            botao.target.classList.add('shows__tabs__button--is-active');
        });
    }
}

function ToggleAccordion(){
    const questions = document.querySelectorAll('[data-faq-question]');
    const cssClass = 'FAQ__questions__item--is-open';

    for(let i = 0; i < questions.length; i++){
        questions[i].addEventListener('click', function(question){
            const parentNode = question.currentTarget.parentNode;
            parentNode.classList.toggle(cssClass);
            console.log(question.target)
        });
    }
}

function ToggleHeader(){
    const heroSection = document.querySelector('.hero');
    const heroHeight = heroSection.clientHeight;
    const headerSection = document.querySelector('.header');

    window.addEventListener('scroll',function(){
        const actualHeight = window.scrollY;
        if( actualHeight < heroHeight){
            headerSection.classList.add('header--is-hidden');
        } else{
            headerSection.classList.remove('header--is-hidden');
        }
    })
}