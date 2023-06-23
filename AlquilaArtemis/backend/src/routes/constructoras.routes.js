import {Router} from 'express';
import {methodsCONS as controlCONS} from '../controllers/constructoras.controllers.js';

const router = Router();

router.get("/", controlCONS.getConstructoras);

export default router;