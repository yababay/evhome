const burgerBreakpoint = 480
const main = document.querySelector('main')
const links = document.querySelector('#links')
const burger = document.querySelector('#burger')// a.bi.x
const close = document.querySelector('header a.bi.x') 

function withoutBurger(){
    return window.getComputedStyle(burger, null).display === 'none'
}

function toggleBurger(state = 'none') {
    if(state === 'none' && withoutBurger()) return
    links.style.display = state
}

(function(){

    if(main && links && burger){

        burger.addEventListener('click', e => {
            e.preventDefault()
            toggleBurger('block')
        })

        close.addEventListener('click', e => {
            e.preventDefault()
            toggleBurger('none')
        })

        window.addEventListener('resize', e => {
            toggleBurger(window.innerWidth > burgerBreakpoint ? 'inline-block' : 'none')
        })

        document.addEventListener("click", e => {
            if(withoutBurger()) return
            let target = e.target;      
            do {
                if (target == links || target == burger) return;
                target = target.parentNode;
            } 
            while (target);
            toggleBurger('none')
        });

        window.addEventListener('keyup', e => e.key == 'Escape' && !withoutBurger() && toggleBurger())
    }
})()
