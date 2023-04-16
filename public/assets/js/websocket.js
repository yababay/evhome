const unitId = 17
let boolValue = false

const exampleSocket = new WebSocket("ws://localhost:3000/")

exampleSocket.onopen = event => {
    exampleSocket.send("Here's some text that the server is urgently awaiting!");
    exampleSocket.onmessage = event => console.log(event.data);
};

document.querySelector('button').addEventListener('click', () => {
    const msg = {
        type: "message",
        text: "hi",
        date: Date.now(),
    }
    exampleSocket.send(JSON.stringify(msg))
})
