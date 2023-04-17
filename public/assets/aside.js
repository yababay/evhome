let isHidden = true

const aside = document.querySelector('aside')
const showAside = document.querySelector('a[href="show-aside"]')
const hideAside = document.querySelector('a[href="hide-aside"]')

function toggleAside(e) {
    if(e) e.preventDefault()
    if(isHidden){
        aside.classList.remove('hidden')
        aside.classList.add('shown')
    }
    else {
        aside.classList.remove('shown')
        aside.classList.add('hidden')
    }
    isHidden = !isHidden
}

for(const el of [showAside, hideAside]) el.addEventListener('click', toggleAside)
