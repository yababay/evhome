const aside = document.querySelector('aside')
const showAside = document.querySelector('a[href="show-aside"]')
const hideAside = document.querySelector('a[href="hide-aside"]')

if(!(aside && showAside && hideAside)) throw 'Нет ссылок открытия / закрытия боковой панели.'

function toggleAside(e) {
    if(e) e.preventDefault()
    const isHidden = aside.classList.contains('hidden')
    aside.classList.add(isHidden ? 'shown' : 'hidden')
    aside.classList.remove(isHidden ? 'hidden' : 'shown')
}

for(const el of [showAside, hideAside]) el.addEventListener('click', toggleAside)
