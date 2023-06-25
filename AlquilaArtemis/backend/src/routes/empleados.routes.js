import {Router} from 'express';
import {methodsEMP as controlEMP} from '../controllers/empleados.controllers.js';

const router = Router();

router.get("/", controlEMP.getEmpleados);

export default router;