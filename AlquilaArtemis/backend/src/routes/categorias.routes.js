/* las llaves son usadas si el exposrt no es default */
import {Router} from 'express';
import {methodsCATE as controlCATE} from '../controllers/categorias.controllers.js';
/* guardamos router en una variable router */
const router = Router();
/* el router nunca manda nada solo enruta a las funciones de la carpeta controladores */
router.get("/", controlCATE.getCategorias);

export default router;