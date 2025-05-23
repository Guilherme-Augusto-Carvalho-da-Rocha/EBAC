document.addEventListener('DOMContentLoaded',function(){
    ChangeTabs();
    MovePageWithNav();
    ToggleHeader();
    NavWatcher();
    ToggleNav();

    console.log('se for dar resize para ver a responsividade, favor dar refresh na pagina pra manter a UX');
    console.log('tem um bug caso voce faca resize da width da tela que so Deus sabe o pq');
    console.log('se souber resolver, favor contactar o meu e-mail, ele esta no meu portfolio la no link do fim da pagina');
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
    const heroSection = document.querySelector('[data-section = hero]');
    const heroButton = document.querySelector('[data-button-target = hero]');
    
    const moreInfoSection = document.querySelector('[data-section = moreInfo]');
    const moreInfoButton = document.querySelector('[data-button-target = moreInfo]');
    
    
    window.addEventListener('scroll', function(){
        const scrollY = window.scrollY;
        const heroTop = heroSection.offsetTop;
        const heroBottom = heroTop + heroSection.offsetHeight;
        
        const moreInfoTop = moreInfoSection.offsetTop;
        const moreInfoBottom = moreInfoTop + moreInfoSection.offsetHeight;

        const heroVisible = (scrollY >= heroTop) && (scrollY < heroBottom);
        const moreInfoVisible = (scrollY >= moreInfoTop) && (scrollY < moreInfoBottom);
        
        if (heroVisible){
            moreInfoButton.classList.remove('button--nav--is-active');
            heroButton.classList.add('button--nav--is-active');
        } else if (moreInfoVisible){
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