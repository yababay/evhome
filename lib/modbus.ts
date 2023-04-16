import modbus from '@yababay67/modbus-master'
import { Router } from 'express'

const router = Router()
let coilTrigger = false

router.get('/:node/:coil', (req, res) => {
    const {node, coil} = req.params
    modbus.setCoil(parseInt(node), parseInt(coil), coilTrigger)
    coilTrigger = !coilTrigger
    res.end('ok');
})

export default router
