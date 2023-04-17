let lastURL

const readmeSection = document.querySelector('#readme')
const devicesSection = document.querySelector('#devices')
const devicesHeader = devicesSection.querySelector('h1')
const devicesList = devicesSection.querySelector('ul')
const deviceTemplate = document.querySelector('#container template')

function toggleSectionVisibility(section, visible){
    section.classList.add(visible ? 'shown' : 'hidden')
    section.classList.remove(visible ? 'hidden' : 'shown')
}

function showRoom(id){
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
        //deviceLink.addEventListener('click', showRoom)
        deviceLink.querySelector('span').textContent = title
        deviceLink.setAttribute('href', `#room-${id}`)
        devicesList.appendChild(deviceItem.querySelector('li'))

    })
    toggleAside() 
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
        if(lastURL.endsWith('#readme')){
            toggleSectionVisibility(readmeSection, true)
            toggleSectionVisibility(devicesSection, false)
        }
        else {
            toggleSectionVisibility(readmeSection, false)
            toggleSectionVisibility(devicesSection, true)
            const id = parseInt(/.*\#room-(\d+)$/.exec(lastURL)[1])
            showRoom(id)
        }
    })
})()
