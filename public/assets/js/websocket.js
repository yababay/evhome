const unitId = 17
let boolValue = false

const exampleSocket = new WebSocket("ws://localhost:3000/")

exampleSocket.onopen = event => {
    exampleSocket.onmessage = event => console.log(event.data);
};

document.querySelector('button').addEventListener('click', () => {
    fetch('/api/modbus')
        .then(res => res.text())
        .then(txt => console.log(txt))
    /*const msg = {
        type: "message",
        text: "hi",
        date: Date.now(),
    }
    exampleSocket.send(JSON.stringify(msg))*/
})
