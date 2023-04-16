import { Application } from "express"
import ExpressWs from 'express-ws'
import redis from 'redis'

let coilTrigger = false

const subscriber = redis.createClient({
  url: 'redis://127.0.0.1:6379'
})

const executor = subscriber.duplicate()

export default function(app: Application){
    const expressWs = ExpressWs(app)
    const wss = expressWs.getWss()
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
}
