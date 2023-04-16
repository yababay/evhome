import express from 'express'
import { proxyPort } from './settings'
import setupEvents from './events'
import modbus from './modbus'

const app = express()
setupEvents(app)

app.use(express.static("public"));
app.use('/api/modbus', modbus)

app.listen(proxyPort)
