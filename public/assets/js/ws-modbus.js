const wsPort = 3001

function getWsUrl(){
    const wsProto = location.protocol.endsWith('s') ? 'wss' : 'ws'
    const wsHost = location.hostname
    return `${wsProto}://${wsHost}:${wsPort}/`
}

const socket = io(getWsUrl());

socket.on('data', function(data){
    console.log('received:', data);
});

/*
// ask server to get registers
// "Read Input Registers" (FC=04) 
socket.emit("readInputRegisters", {
    "unit": 1,
    "address": 0,
    "length": 10
});

// subscribe to get holding registers every 1000ms
// "Read Holding Registers" (FC=04) 
socket.emit("readHoldingRegisters", {
    "unit": 1,
    "address": 0,
    "length": 10,
    "interval": 1000
});

// ask server to set one coil
// "Force one coil" (FC=5)
socket.emit('writeCoil', {
    "unit": 1,
    "address": 8,
    "state": true
});

// ask server to set registers
// "Preset Multiple Registers" (FC=16)
socket.emit('writeRegisters', {
    "unit": 1,
    "address": 8,
    "values": [88,123,47]
});

// ask server to get coils
// "Read coils" (FC=01) 
socket.emit("readCoils", {
    "unit": 1,
    "address": 0,
    "length": 8
});
*/
