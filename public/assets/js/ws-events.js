const unitId = 17
let boolValue = false

document.querySelector('button').addEventListener('click', () => {
    socket.emit('writeCoil', {
        "unit": unitId,
        "address": 0,
        "state": boolValue
    });

    boolValue = !boolValue

    setTimeout(() => {
    socket.emit("readCoil", {
        "unit": unitId,
        "address": 0
    })}, 300)
})
