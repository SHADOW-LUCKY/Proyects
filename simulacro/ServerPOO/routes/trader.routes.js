import {Router} from 'express'
import {methTraders as track} from '../controllers/trader.controllers.js'
const router = Router()

router.get('/all', track.getTraders)
router.post('/add', track.postTraders)
router.delete('/del/:id', track.delTraders)
router.put('/put/:id', track.putTraders)

export default router