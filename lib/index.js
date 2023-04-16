const express = require('express');
const redis = require('redis');
const modbus = require('@yababay67/modbus-master')
const app = express();
const expressWs = require('express-ws')(app);
const wss = expressWs.getWss('/');

let coilTrigger = false

const subscriber = redis.createClient({
  url: 'redis://127.0.0.1:6379'
})

const executor = subscriber.duplicate()

subscriber.connect()
  .then(() =>
    subscriber.subscribe('modbus', async message => {
      const key = message
      await executor.connect()
      const coils = (await executor.LRANGE(`mb:${key}`, 0, 100)).map(coil => !!parseInt(coil))
      await executor.quit()
      console.log({key, coils})
      wss.clients.forEach(ws => {
        if(ws.OPEN) ws.send(JSON.stringify({key, coils}));
      });
    })
  )

app.use(express.static('public'))

app.get('/api/modbus', function(req, res, next){
  modbus.setCoil(17, 0, coilTrigger)
  coilTrigger = !coilTrigger
  res.end('ok');
});

app.ws('/', function(ws, req) {
    ws.onmessage = function(msg) {
      console.log(msg.data);
      wss.clients.forEach(function (client) {
        if(client.OPEN) client.send(msg.data);
      });
    };
});


app.listen(3000);
