import {Router} from 'express'
import {methUser as user} from '../controllers/user.controllers.js'
const router = Router()

router.get('/all', user.getUser)/* usamos la funcion para retornar una respuesta desde un endpoint*/
router.post('/add', user.postUser)
router.delete('/del/:id', user.delUser)
router.put('/put/:id', user.putUser)

export default router

