import {Router} from 'express';
import {methodsPROC as controlPROC} from '../controllers/productos.controllers.js';

const router = Router();

router.get("/", controlPROC.getProductos);

export default router;