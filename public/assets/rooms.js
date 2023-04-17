let rooms = null
const roomTemplate = document.querySelector('aside template')
const roomsList = document.querySelector('aside ul')

fetch('assets/rooms.json')
    .then(res => res.json())
    .then(arr => {
        rooms = arr
        rooms.map(room => {
            const {id, title} = room
            const roomItem = roomTemplate.cloneNode(true).content
            const roomLink = roomItem.querySelector('a')
            //roomLink.addEventListener('click', showRoom)
            roomLink.querySelector('span').textContent = title
            roomLink.setAttribute('href', `#room-${id}`)
            roomsList.appendChild(roomItem.querySelector('li'))
        })
    })
