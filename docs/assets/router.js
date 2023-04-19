let lastURL

const readmeSection = document.querySelector('#readme')
const devicesSection = document.querySelector('#devices')
const devicesHeader = devicesSection.querySelector('h1')
const devicesList = devicesSection.querySelector('ul')
const deviceTemplate = document.querySelector('main template')
const alertDiv = document.querySelector('#alert')

function toggleSectionVisibility(section, visible){
    section.classList.add(visible ? 'shown' : 'hidden')
    section.classList.remove(visible ? 'hidden' : 'shown')
}

function toggleLightbulb(link){
    const li = link.closest('li')
    if(li.classList.contains('glowing')){
        li.classList.remove('glowing')
        li.classList.add('lightbulb-off')
    }
    else {
        li.classList.remove('lightbulb-off')
        li.classList.add('glowing')
    }
}

function showRoom(id, toggle = true){
    const room = rooms.find(room => room.id === id)
    if(!room) throw 'Room is not found'
    const { title } = room
    devicesHeader.textContent = title.trim()
    const { devices } = room
    devicesList.innerHTML = ''
    devices.forEach(device => {
        const { title, coil, node } = device
        const deviceItem = deviceTemplate.cloneNode(true).content
        const deviceLink = deviceItem.querySelector('a')
        deviceLink.addEventListener('click', e => {
            e.preventDefault()
            fetch(`/api/modbus/${node}/${coil}`)
                .then(res => {
                    if(!res.ok && res.status !== 404) {
                        console.log(res.statusText)
                        throw 'Устройство неисправно.'
                    }
                    return res.text()
                })
                .then(txt => {
                    toggleLightbulb(deviceLink)
                })
                .catch(err => {
                    toggleLightbulb(deviceLink) // remove after debug
                    console.log(`${err}: node ${node}, coil ${coil}`)
                    alertDiv.classList.remove('hidden')
                    alertDiv.textContent = err
                    setTimeout(() => alertDiv.classList.add('hidden'), 3000)
                })
        })
        deviceLink.querySelector('span').textContent = title
        deviceLink.setAttribute('href', `#room-${id}`)
        devicesList.appendChild(deviceItem.querySelector('li'))
    })
    if(toggle) toggleAside() 
}

(function setupRouter() {
    window.addEventListener('hashchange', function (event) {
        Object.defineProperty(event, 'oldURL', {
          enumerable: true,
          configurable: true,
          value: lastURL,
        });
        Object.defineProperty(event, 'newURL', {
          enumerable: true,
          configurable: true,
          value: document.URL,
        });
        lastURL = document.URL
        if(lastURL && lastURL.endsWith('#readme')){
            toggleSectionVisibility(readmeSection, true)
            toggleSectionVisibility(devicesSection, false)
            //toggleBurger()
        }
        else {
            if(!lastURL || !lastURL.includes('#')) return
            toggleSectionVisibility(readmeSection, false)
            toggleSectionVisibility(devicesSection, true)
            const id = idFromHash(lastURL)
            showRoom(id)
        }
    })
})()

function idFromHash(hash){
    return parseInt(/.*\#room-(\d+)$/.exec(hash)[1])
}
