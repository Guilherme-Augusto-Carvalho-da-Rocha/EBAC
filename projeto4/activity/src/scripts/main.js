document.addEventListener('DOMContentLoaded',function(){
    ChangeTabs();
    MovePageWithNav();
    ToggleHeader();
    NavWatcher();
    ToggleNav();
})

function hideButtonBorder(buttons){
    for (let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove('button--nav--is-active');
    }
}

function CloseOtherTabs(){
    const tabs = document.querySelectorAll('[data-tab-credits]');

    for (let i = 0; i < tabs.length; i++){
        tabs[i].classList.remove('more-info__credits__tabs__tab--is-active');
    }
}

function ChangeTabs(){
    const buttons = document.querySelectorAll('.more-info [data-button-target]');

    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(button){
            const target = button.target.dataset.buttonTarget;
            const tab = document.querySelector(`[data-tab-credits= ${target}]`);
            CloseOtherTabs();
            tab.classList.add('more-info__credits__tabs__tab--is-active');
            hideButtonBorder(buttons);
            button.target.classList.add('button--nav--is-active');
        })
    }
}

function MovePageWithNav(){
    const buttons = document.querySelectorAll('.header [data-button-target]');
    let target;

    for (let i = 0 ; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(button){
            hideButtonBorder(buttons);
            button.target.classList.add('button--nav--is-active');
            target = document.querySelector(`[data-section = ${button.target.dataset.buttonTarget}]`);
            window.scrollTo({
                top: target.offsetTop,
                behavior: "smooth"
            });
        })
    }
}

function NavWatcher(){
    const heroSection = document.querySelector('.hero');
    const heroButton = document.querySelector('[data-button-target = hero]');
    const heroTop = heroSection.offsetTop;
    const heroBottom = heroSection.offsetTop + heroSection.clientHeight;

    const moreInfoSection = document.querySelector('.more-info');
    const moreInfoButton = document.querySelector('[data-button-target = moreInfo]')
    const moreInfoTop = moreInfoSection.offsetTop;
    const moreInfoBottom = moreInfoSection.offsetTop + moreInfoSection.clientHeight;
    
    window.addEventListener('scroll', function(){
        const actualHeight = window.scrollY;
        
        if (actualHeight >= heroTop && actualHeight <= (heroBottom-100)){
            moreInfoButton.classList.remove('button--nav--is-active');
            heroButton.classList.add('button--nav--is-active');

        } else if (actualHeight >= (moreInfoTop-100) && actualHeight <= moreInfoBottom){
            
            heroButton.classList.remove('button--nav--is-active');
            moreInfoButton.classList.add('button--nav--is-active');
        }

    })
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

function ToggleNav(){
    const hamburguer = document.querySelector('.button--hamburger');
    const navBar = document.querySelector('.header__nav');

    hamburguer.addEventListener('click', function(){
        navBar.classList.toggle('header__nav--is-hidden');
    })
}