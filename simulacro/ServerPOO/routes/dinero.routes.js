import {Router} from 'express'
import {methMoney as mon} from '../controllers/dinero.controllers.js'
const router = Router()

router.get('/all', mon.getMoney)/* usamos la funcion para retornar una respuesta desde un endpoint*/
router.post('/add', mon.postMoney)
router.delete('/del', mon.delMoney)
router.put('/put', mon.putMoney)

export default router

