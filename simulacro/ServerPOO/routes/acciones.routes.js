import {Router} from 'express'
import {methActions as act} from '../controllers/acciones.controllers.js'
const router = Router()

router.get('/all', act.getActions)
router.post('/add', act.postAction)
router.delete('/del/:id', act.delAction)
router.put('/put/:id', act.putAction)

export default router