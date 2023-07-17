import {Router} from 'express';
import {methPayWays as PW} from '../controllers/tipodinero.controllers.js';
const router = Router()

router.get('/all', PW.getPayWays)
router.post('/add', PW.postPayWays)
router.delete('/del/:id', PW.delPayWays)
router.put('/put/:id', PW.putPayWays)

export default router