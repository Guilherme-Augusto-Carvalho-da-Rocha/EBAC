document.addEventListener('DOMContentLoaded',function(){
    ChangeTabs();
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