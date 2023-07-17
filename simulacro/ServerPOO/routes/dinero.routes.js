import {Router} from 'express'
import {methMoney as mon} from '../controllers/dinero.controllers.js'
const router = Router()

router.get('/all', mon.getMoney)/* usamos la funcion para retornar una respuesta desde un endpoint*/
router.post('/add', mon.postMoney)
router.delete('/del/:id', mon.delMoney)
router.put('/put/:id', mon.putMoney)

export default router

